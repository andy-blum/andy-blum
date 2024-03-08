---
title: Node.js Development with DDEV
created: 2024-01-21T00:00:00-05:00
type: article
permalink: "articles/ddev-for-js/"
tags: [drupal,ddev,node.js]
summary: ""
---

[DDEV](https://ddev.com/) is a familiar tool for local development in the Drupal community. It allows developers that want to work with their own sandboxed version of a website to spin up a set of containers that behave like a regular server-hosted copy of the site. The local version gets a nice URL, has its own database, and can run PHP all in the container - regardless of whether the host machine has that software installed. While DDEV is pretty ubiquitious in CMS communities like Drupal, WordPress, and Typo3, it's perhaps not as familiar to developers working in Node.js, Python, or other decoupled setups. This blog post is for _those_ developers.

## What is DDEV?

Straight from [the documentation](https://ddev.readthedocs.io/en/stable/), "DDEV is an open source tool for launching local web development environments in minutes. It supports PHP, Node.js, and Python (experimental)." Furthermore, "DDEV is a Go application that stores its configuration in files on your workstation. It uses those blueprints to mount your project files into Docker containers that facilitate the operation of a local development environment. DDEV writes and uses docker-compose files for you, which is a detail you can cheerfully ignore unless you’re Docker-curious or defining your own services."

As a front-end developer with no interest or experience in DevOps, the key feature for _why_ you should consider DDEV is standardized environments for every member of a team working on the same project.

## Why would I use DDEV instead of a Node or Python server directly?

If you're successfully developing with some other solution running on a localhost port, you might be fine sticking with that. In my experience, there are a couple of significant downsides and pain-points to working from a node process running in the terminal:

1. The process has to continue un-interrupted. If you're an obsessive tab-closer like me, you've probably accidentally quit a running process once or twice. It's not a huge problem to start the process back up, but if you're running the process inside a container you can't accidentally quit it.

2. If you need to switch between several projects using the same tech stack they might all be configured to run on the same port. Again, not an issue as many processes will detect the in-use port and suggest an alternative, but as you move to the browser, all your projects are running on very similar ports, and they might not be the same port every visit. With DDEV, each project gets a URL appended to your local DNS records which points to a router container. Your projects will _never_ conflict, and their URLs will _never_ change.

3. Similar to #2, if you're working on a project with a decoupled front and back-end, your project probably has some CORS configuration setup. With DDEV, you can add the DDEV-generated URL to that CORS config and not have to worry about ports changing over time.

4. If you're collaborating with a team, their local setup may not be the same as yours, so you may have to help them all the time to get everything properly set up. 

## How do I start?

_Heads up from future me: I'm working on a ddev addon that will handle **a lot** of this work for you. It can be found [here](https://github.com/andy-blum/ddev-pm2)_

Your first step is to install DDEV and its dependencies to your host machine. There's a pretty solid set of instructions [in the docs](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/).

Once you've got DDEV ready to go, navigate to the root of your project. For the purposes of this article, we'll be working on a hypothetical project using [Keystone CMS](https://keystonejs.com/) for the backend and [Sveltekit](https://kit.svelte.dev/) for the frontend.

If you'd like to have actual running apps for both of these to see everything working, use each app's quickstart commands:

```txt
$ npm create keystone-app keystone
```

```txt
$ npm create svelte@latest svelte
```

Both of these commands will end with instructions to start the applications, but we'll skip that for now. Our project structure should now look like this:

```txt
my-project
|- keystone
|- svelte
```

From `my-project`, run `ddev config`.

```txt
$ ddev config

Creating a new DDEV project config in the current directory (~/my-project)
Once completed, your configuration will be written to ~/my-project/.ddev/config.yaml

Project name (my-project):

The docroot is the directory from which your site is served.
This is a relative path from your project root at /Users/andy/Sites/my-project
You may leave this value blank if your site files are in the project root
Docroot Location (current directory):

Found a php codebase at /Users/andy/Sites/my-project.
Project Type [backdrop, craftcms, django4, drupal10, drupal6, drupal7, drupal8, drupal9, laravel, magento, magento2, php, python, shopware6, silverstripe, typo3, wordpress] (php):

Configuration complete. You may now run 'ddev start'.
```

First, DDEV will ask for your project name. This value will be used in the primary URL for the project, so make sure it follows the rules for [hostname syntax](https://en.wikipedia.org/wiki/Hostname#Syntax). Next, DDEV will attempt to identify what kind of project you have. Since DDEV was originally built with php-based CMSes in mind, the default project type is "php", meaning there's no special extra configuration happening. There is currently [an open issue](https://github.com/ddev/ddev/issues/5722) to consider renaming this to something more helpful like "generic" or "any".

If you run `ddev start` now, you'll have a working `web` and `db` container!

```txt
$ ddev start

Starting my-project...
Network ddev-my-project_default created
Building project images...
Project images built in 0s.
 Container ddev-my-project-db  Created
 Container ddev-my-project-web  Created
 Container ddev-my-project-web  Started
 Container ddev-my-project-db  Started
You have Mutagen enabled and your 'php' project type doesn't have `upload_dirs` set.
For faster startup and less disk usage, set upload_dirs to where your user-generated files are stored.
If this is intended you can disable this warning with `ddev config --disable-upload-dirs-warning`.
Starting Mutagen sync process...
Mutagen sync flush completed in 1s.
For details on sync status 'ddev mutagen st my-project -l'
Waiting for web/db containers to become ready: [web db]
^[Starting ddev-router if necessary...
 Container ddev-router  Running
Waiting for additional project containers to become ready...
All project containers are now ready.
Successfully started my-project
Project can be reached at https://my-project.ddev.site https://127.0.0.1:33125
```

## Configuring for non-PHP projects

While our project is running, there's some configuration we need to change. Open `my-project/.ddev/config.yml`:

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

### Add additional hostnames

DDEV is _highly_ configurable. All the key/value options are [documented here](https://ddev.readthedocs.io/en/latest/users/configuration/config). There are two main things we want to edit here. We're first going to add additional hostnames. Since keystone will be running our backend, we'll have it accessible at `api.my-project.ddev.site`, and since Sveltekit is running our frontend app, we'll have itat `app.my-project.ddev.site`. The default URL will also exist at `my-project.ddev.site`, but DDEV's container healthcheck needs to be able to access php on that URL, so we'll leave it alone.

```yml
additional_hostnames:
  - "api.my-project"
  - "app.my-project"
```

### Standardize your node version

Next, we want to specify our Node version. This can be either a generic major version like `20` or a specific release like `16.4.2`. Since we want to avoid the "it works on my machine" problems, this value should match what you're running in production.

```yml
nodejs_version: "20"
```

### Customize your webserver config

The next thing we need to do is override how DDEV has configured the webserver. Right now, _all_ requests coming into the `web` container are sent to `/my-project/` to look for an `index.html` or `index.php` file, regardless of URL. We'll need to add our nginx or apache configuration files (depending on your config.yml file) to proxy requests to the correct ports in the web container. Your default nginx configuration is in `.ddev/nginx_full/nginx-site.conf` and your default apache configuration is in `.ddev/apache/apache-site.conf`. Both of these files are auto-generated and we'll leave them alone. In both cases, there's a file `seconddocroot.conf.example` that we'll edit instead. Since we have two additional URLs (`app.my-project.ddev.site` and `api.my-project.ddev.site`), we'll need to make a config file for each. In the examples below, I've only included the files for the `app` subdomain.

#### Configuring Nginx

The main parts to consider here are the values of `server_name` and `proxy_pass`. The `server_name` must match the URL you wish to use, and the port number in `proxy_pass` needs to match the port in the container that's in use by the node process.

If you used the quickstart commands above, keystone runs on port 3000 and svelte will be on 5173.

```conf
server {

  server_name app.my-project.ddev.site;

  location / {
    proxy_pass http://localhost:5173;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }

  listen 80;
  listen 443 ssl;

  ssl_certificate /etc/ssl/certs/master.crt;
  ssl_certificate_key /etc/ssl/certs/master.key;

  include /etc/nginx/monitoring.conf;

  error_log /dev/stdout info;
  access_log /var/log/nginx/access.log;

  include /etc/nginx/common.d/*.conf;
  include /mnt/ddev_config/nginx/*.conf;
}
```

#### Configuring Apache

Apache configuration will require two VirtualHost entries per URL. Similar to the nginX config above, we need to specify the URL we wish to use and the port we're proxying to. You'll need to edit the values `ServerName`, `ProxyPass`, and `ProxyPassReverse` in each vhost.

```conf
<VirtualHost *:80>
  RewriteEngine On
  RewriteCond %{HTTP:X-Forwarded-Proto} =https
  RewriteCond    %{DOCUMENT_ROOT}%{REQUEST_FILENAME} -d
  RewriteRule    ^(.+[^/])$           https://%{HTTP_HOST}$1/ [redirect,last]

  SetEnvIf X-Forwarded-Proto "https" HTTPS=on

  ServerName app.my-project.ddev.site

  ProxyPreserveHost On
  ProxyPass / http://localhost:5173/
  ProxyPassReverse / http://localhost:5173/

  ErrorLog /dev/stdout
  CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

<VirtualHost *:443>
  SSLEngine on
  SSLCertificateFile /etc/ssl/certs/master.crt
  SSLCertificateKeyFile /etc/ssl/certs/master.key

  RewriteEngine On
  RewriteCond %{HTTP:X-Forwarded-Proto} =https
  RewriteCond    %{DOCUMENT_ROOT}%{REQUEST_FILENAME} -d
  RewriteRule    ^(.+[^/])$           https://%{HTTP_HOST}$1/ [redirect,last]

  SetEnvIf X-Forwarded-Proto "https" HTTPS=on

  ServerName app.my-project.ddev.site
  ProxyPreserveHost On
  ProxyPass / http://localhost:5173/
  ProxyPassReverse / http://localhost:5173/

  ErrorLog /dev/stdout
  CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

### Restart DDEV

Once your hostnames, node version, and webserver config are all squared away, you'll need to run `ddev restart` for the changes to take effect. When command finishes, you'll see

```txt
Restarted my-project
Your project can be reached at https://my-project.ddev.site https://api.my-project.ddev.site https://app.my-project.ddev.site
```

At this point, your new URLs will point into the webserver at the correct ports, but our apps aren't running. We could stop here and either pass commands in with `ddev exec` or tunnel in with `ddev ssh` to start the node processes inside the web container.

```txt
$ ddev ssh

andy@my-project-web:/var/www/html$ cd svelte/
andy@my-project-web:/var/www/html/svelte$ npm run dev
```

But if we run our apps this way, it's an extra step to onboard new devs with & we still have a terminal window taken over by the process. Let's boost the developer experience.

## Developer Experience Improvements

There are three main DX improvements we can make to make onboarding new developers as seamless as possible. First, we can utilize a process management tool like PM2 to manage our processes in the container. Second, we can make some custom commands to create easy-to-remember startup directions or to handle specific tools in the container. Third, DDEV has the ability to run commands both on the host machine and in the containers during a few key lifecycle stages.

### Using PM2

[PM2](https://pm2.keymetrics.io/) is an "Advanced, production process manager for Node.JS". We can use this tool to start our app without clogging up an entire terminal pane and it will also allow us to monitor the process's logs, memory usage, and some other key stats. There are a ton of options available, but we'll just use a few basics.

PM2's instructions tell us to install the tool globally, so we'll handle during DDEV's build process with a custom Dockerfile in `.ddev/web-build/Dockerfile`. For more info on how DDEV handles custom Dockerfiles, see [here](https://ddev.readthedocs.io/en/stable/users/extend/customizing-images/#adding-extra-dockerfiles-for-webimage-and-dbimage)

```Dockerfile
RUN npm install -g pm2
```

We can then setup our PM2 config by adding a file `apps.config.js`. This file will name our processes, tell PM2 where to run the start command, as well as what command to run. For a full list of config options see the [relevant docs](https://pm2.keymetrics.io/docs/usage/application-declaration/)

```js
module.exports = {
  apps : [
    {
      name: "Svelte",
      cwd: "/var/www/html/svelte",
      script: "npm run dev"
    },
    {
      name: "Keystone",
      cwd: "/var/www/html/keystone",
      script: "npm run dev"
    }
  ]
}
```

### Post-start hooks

With PM2 successfully added into the container & configured for our apps, we can now utilize [DDEV's Hooks](https://ddev.readthedocs.io/en/stable/users/configuration/hooks/) to run a command on startup. In our `.ddev/config.yml` file, add the following:

```yml
hooks:
  post-start:
    - exec: "pm2 start apps.config.js"
```

### Custom DDEV commands

Finally, to interact with PM2 running in the container, we can add a [custom ddev command](https://ddev.readthedocs.io/en/stable/users/extend/custom-commands/) in `.ddev/commands/web/pm2`

```bash
#!/usr/bin/env bash

## Description: Run PM2 commands in the container
## Usage: pm2
## Example: "ddev pm2 monit"

pm2 "$@"
```

## One thing that still bugs me

There's one part of this I still haven't quite figured out. Since I'm working on a mac with the new ARM architecture and the container is running linux, I have to run `npm install` in the container to get the right versions of some of the dependencies. If I install the requisite `node_modules` on the host machine, the processes will error out if I try to run them inside the container. For right now the easiest way to handle this issue is to chain the install and start commands together in the PM2 config file:

```js
module.exports = {
  apps : [
    {
      name: "Svelte",
      cwd: "/var/www/html/svelte",
      script: "rm -rf node_modules && npm install && npm run dev"
    },
    {
      name: "Keystone",
      cwd: "/var/www/html/keystone",
      script: "rm -rf node_modules && npm install && npm run dev"
    }
  ]
}
```

This isn't ideal, however, as you shouldn't typically need to reinstall modules anytime you start the project. If you happen to know of a good way to handle this, let me know at [@andy_blum@drupal.community](https://drupal.community/@andy_blum).
