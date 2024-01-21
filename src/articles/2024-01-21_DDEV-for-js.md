---
title: DDEV For JavaScript Development
created: 2024-01-21T00:00:00-05:00
type: article
permalink: "articles/ddev-for-js/"
tags: [drupal]
summary: ""
---

For much of the Drupal community, I imagine, [DDEV](https://ddev.com/) is a familiar tool for local development. It allows developers that want to work with their own sandboxed version of a website to spin up a set of containers that behave like a regular server-hosted copy of the site. The local version gets a nice URL, has its own database, and can run PHP all in the container - regardless of whether the host machine has that software installed. While DDEV is pretty ubiquitious in CMS communities like Drupal, WordPress, and Typo3, it's perhaps not as familiar to developers working in Node.js, Python, or other decoupled setups. This blog post is for _those_ developers.

## What is DDEV?

Straight from [the documentation](https://ddev.readthedocs.io/en/stable/), "DDEV is an open source tool for launching local web development environments in minutes. It supports PHP, Node.js, and Python (experimental)." Furthermore, "DDEV is a Go application that stores its configuration in files on your workstation. It uses those blueprints to mount your project files into Docker containers that facilitate the operation of a local development environment. DDEV writes and uses docker-compose files for you, which is a detail you can cheerfully ignore unless you’re Docker-curious or defining your own services."

As a front-end developer with no interest or experience in DevOps, the key feature for _why_ you should consider DDEV is standardized environments for every member of a team working on the same project.

## Why would I do this instead of a Node/Python server?

If you're successfully developing with some other solution running on a localhost port, you might be fine sticking with that. In my experience, however, there are a couple of significant downsides and painpoints to working from a node process running in the terminal:

1. The process has to continue un-interrupted. If you're an obsessive tab-closer like me, you've probably accidentally quit a running process once or twice. It's not a huge problem to start the process back up, but if you're running the process inside a container you can't accidentally quit it.

2. If you need to switch between several projects using the same tech stack they might all be configured to run on the same port. Again, not an issue as many proceeses will detect the in-use port and suggest an alternative, but as you move to the browser, all your projects are running on very similar ports, and they might not be the same port every visit. With DDEV, each project gets a URL appended to your local DNS records which points to a router container. Your projects will _never_ conflict, and their URLs will _never_ change.

3. Similar to #2, if you're working on a project with a decoupled front and back-end, your project probably has some CORS configuration setup. With DDEV, you can add the DDEV-generated URL to that CORS config and not have to worry about ports changing over time.

## How do I start?

Your first step is to install DDEV and its dependencies to your host machine. There's a pretty solid set of instructions [in the docs](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/).

Once you've got DDEV ready to go, navigate to the root of your project. For the purposes of this article, we'll be working on a hypothetical project using [Keystone CMS](https://keystonejs.com/) for the backend and [Sveltekit](https://kit.svelte.dev/) for the frontend. On top of both of these, we'll also have a custom node script that we use to periodically import data and feed it into our backend. Our project structure looks like this:

```
my_project
|- keystone
|- svelte
|- node_script
```

From `my_project`, run `ddev config`.

```
$ ddev config

Creating a new DDEV project config in the current directory (~/my_project)
Once completed, your configuration will be written to ~/my_project/.ddev/config.yaml

Project name (my_project): my-project

The docroot is the directory from which your site is served.
This is a relative path from your project root at /Users/andy/Sites/my_project
You may leave this value blank if your site files are in the project root
Docroot Location (current directory):

Found a php codebase at /Users/andy/Sites/my_project.
Project Type [backdrop, craftcms, django4, drupal10, drupal6, drupal7, drupal8, drupal9, laravel, magento, magento2, php, python, shopware6, silverstripe, typo3, wordpress] (php):

Configuration complete. You may now run 'ddev start'.
```

First, DDEV will ask for your project name. This value will be used in the primary URL for the project, so make sure it follows the rules for [hostname syntax](https://en.wikipedia.org/wiki/Hostname#Syntax). Next, DDEV will attempt to identify what kind of project you have. Since DDEV was originally built with php-based CMSes in mind, the default project type is "php", meaning there's no special extra configuration happening. There is currently [an open issue](https://github.com/ddev/ddev/issues/5722) to consider renaming this to something more helpful like "generic" or "any".

If you run `ddev start` now, you'll have a working `web` and `db` container!

```
TODO: start output
```

## Configuring for non-PHP projects

While our project is running, there's some configuration we need to change. Open `my_project/.ddev/config.yml`:

```yml
name: my-project
type: php
docroot: ""
php_version: "8.1"
webserver_type: nginx-fpm
xdebug_enabled: false
additional_hostnames: []
additional_fqdns: []
database:
    type: mariadb
    version: "10.4"
use_dns_when_possible: true
composer_version: "2"
web_environment: []
```

DDEV is _highly_ configurable. All the key/value options are [documented here](https://ddev.readthedocs.io/en/latest/users/configuration/config). There are two main things we want to edit here. We're first going to add another hostname. We'll use the default (`my-project.ddev.site`) to access the sveltekit application that will eventually be our public-facing site. Since we may also want to access the Keystone backend via the browser, we'll add a second URL (`api.my-project.ddev.site`) for that purpose.

```yml
additional_hostnames:
  - "api.my-project"
```

Next, we want to specify our Node version. This can be either a generic major version like `20` or a specific release like `16.4.2`. Since we want to avoid the "it works on my machine" problems, this value should match what you're running in production.

```yml
nodejs_version: "20"
```

The next thing we need to do is override how DDEV has configured the webserver. Right now, requests coming into the `web` container are sent to `/my_project/` to look for an `index.html` or `index.php` file. We'll need to change the default nginx configuration to point our two URLs to their respective processes.
