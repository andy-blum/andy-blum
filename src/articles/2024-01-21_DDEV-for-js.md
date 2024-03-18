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

As a front-end developer, I've found DDEV to be a great solution because it lets us have standardized environments for _every_ team member, yet those team members don't have to have interest or experience in DevOps work.

## Why would I use DDEV instead of a Node or Python server directly?

If you're successfully developing with some other solution running on a localhost port, you might be fine sticking with that. In my experience, there are a couple of significant downsides and pain-points to working from a node process running in the terminal:

1. The process has to continue un-interrupted. If you're an obsessive tab-closer like me, you've probably accidentally quit a running process once or twice. It's not a huge problem to start the process back up, but if you're running the process inside a container you can't accidentally quit it.

2. If you need to switch between several projects using the same tech stack they might all be configured to run on the same port. Again, not an issue as many processes will detect the in-use port and suggest an alternative, but as you move to the browser, all your projects are running on very similar ports, and they might not be the same port every visit. With DDEV, each project gets a URL appended to your local DNS records which points to a router container. Your projects will _never_ conflict, and their URLs will _never_ change.

3. Similar to #2, if you're working on a project with a decoupled front and back-end, your project probably has some CORS configuration setup. With DDEV, you can add the DDEV-generated URL to that CORS config and not have to worry about ports changing over time. DDEV also sets up HTTPS so all browser features work as they would in production.

4. [DDEV provides support for several database types](https://ddev.readthedocs.io/en/stable/users/extend/database-types/), allowing you to do development work with a development database that matches your production environment. No need to configure your local version to SQLite or connect local apps to cloud database providers.

5. If you're collaborating with a team, their local setup may not be the same as yours, so you may have to help them all the time to get everything properly set up.

## How do I start?

_Heads up from future me: I'm working on a ddev addon that will handle **a lot** of this work for you. It can be found [here](https://github.com/andy-blum/ddev-pm2)_

Your first step is to install DDEV and its dependencies to your host machine. There's a pretty solid set of instructions [in the docs](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/).

Once DDEV is installed, we'll configure our new project with `ddev config --auto` and start it with `ddev start`

```txt
$ ddev config --auto

Creating a new DDEV project config in the current directory (~/Sites/my-project)
Once completed, your configuration will be written to ~/Sites/my-project/.ddev/config.yaml

Configuring a 'php' project with docroot '' at ~/Sites/my-project
Configuration complete. You may now run 'ddev start'.

$ ddev start

Starting my-project...
...
All project containers are now ready.
Successfully started my-project
Project can be reached at https://my-project.ddev.site
```
You'll now have several docker containers running, which you can list out using `ddev describe`

```txt
$ ddev describe

┌─────────────────────────────────────────────────────────────────────────────────────────┐
│ Project: my-project ~/Sites/my-project https://my-project.ddev.site                     │
│ Docker platform: orbstack                                                               │
│ Router: traefik                                                                         │
├──────────┬──────┬──────────────────────────────────────────────────┬────────────────────┤
│ SERVICE  │ STAT │ URL/PORT                                         │ INFO               │
├──────────┼──────┼──────────────────────────────────────────────────┼────────────────────┤
│ web      │ OK   │ https://my-project.ddev.site                     │ php PHP8.1         │
│          │      │ InDocker: web:443,80,8025                        │ nginx-fpm          │
│          │      │ Host: 127.0.0.1:32769,32770                      │ docroot:''         │
│          │      │                                                  │ Perf mode: mutagen │
│          │      │                                                  │ NodeJS:18          │
├──────────┼──────┼──────────────────────────────────────────────────┼────────────────────┤
│ db       │ OK   │ InDocker: db:3306                                │ mariadb:10.4       │
│          │      │ Host: 127.0.0.1:32771                            │ User/Pass: 'db/db' │
│          │      │                                                  │ or 'root/root'     │
├──────────┼──────┼──────────────────────────────────────────────────┼────────────────────┤
│ Mailpit  │      │ Mailpit: https://my-project.ddev.site:8026       │                    │
│          │      │ `ddev mailpit`                                   │                    │
├──────────┼──────┼──────────────────────────────────────────────────┼────────────────────┤
│ All URLs │      │ https://my-project.ddev.site,                    │                    │
│          │      │ https://127.0.0.1:32769,                         │                    │
│          │      │ http://my-project.ddev.site,                     │                    │
│          │      │ http://127.0.0.1:32770                           │                    │
└──────────┴──────┴──────────────────────────────────────────────────┴────────────────────┘
```

Behind the scenes, DDEV has set up a whole directory for you containing the files docker needs to build and connect your containers. This directory should be comitted to your git repo along side your application's code so all team members are working in identical environments.

For the purposes of this article, we'll be working on a hypothetical project using [Keystone CMS](https://keystonejs.com/) for the backend and [Sveltekit](https://kit.svelte.dev/) for the frontend. Note in the code below that we're using DDEV's internal `npm` binary to install these packages inside the container. Installing node modules on the host machine _can_ lead to your app failing to build and run inside the container.

```txt
$ ddev npm create keystone-app keystone
```

```txt
$ ddev npm create svelte@latest svelte
```

Both of these commands will end with instructions to start the applications, but we'll skip that for now. Our project structure should now look like this:

```txt
my-project
|- .ddev
|- keystone
|- svelte
```

## Configuring for non-PHP projects

While our server is running and our node apps are installed, there's still some configuration we need to update. Open `my-project/.ddev/config.yml` - it should look similar to this default configuration that is generated as of ddev v1.22.7.

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

DDEV is _highly_ configurable. All the key/value options are [documented here](https://ddev.readthedocs.io/en/latest/users/configuration/config). There are two main things we want to edit here. We're first going to add additional hostnames. Since Keystone will be running our backend, we'll have it accessible at `api.my-project.ddev.site`, and since Sveltekit is running our frontend app, we'll have itat `app.my-project.ddev.site`. The default URL will also exist at `my-project.ddev.site`, but DDEV's container healthcheck needs to be able to access php on that URL, so we'll leave it alone.

```yml
additional_hostnames:
  - "api.my-project"
  - "app.my-project"
```

### Standardize your node version

Next, we want to specify our Node version. This can be either a generic major version like `20` or a specific release like `20.11.1`. Since we want to avoid the "it works on my machine" problems, this value should match what you're running in production. If you're following along with this article, we'll use version `18.19.1`, as it's [the latest version available on the highest supported version of node for Keystone](https://github.com/keystonejs/keystone/issues/8987) at the time of writing.

```yml
nodejs_version: "18.19.1"
```

### Customize your webserver config

The next thing we need to do is override how DDEV has configured the webserver. Right now, _all_ requests coming into the `web` container are sent to `/my-project/` to look for an `index.html` or `index.php` file, regardless of URL. We'll need to add our nginx or apache configuration files (depending on your config.yml file) to proxy requests to the correct ports in the web container. This will take all the HTTP requests coming into your `web` container on port 80 (http://) or 443 (https://) and forward them on to your node processes running on some other port. In this way, we can avoid having to specify a port while working on our project.

Keep in mind that you only need to configure nginx _or_ apache, not both. If you're not sure which one your project is running, consult your `.ddev/config.yml` file. Also, for brevity, I've only included the files for the `app` subdomain. Don't forget to repeat this step for the `api` subdomain as well.

Your default nginx configuration is in `.ddev/nginx_full/nginx-site.conf` and your default apache configuration is in `.ddev/apache/apache-site.conf`. Both of these files are auto-generated and we'll leave them alone. In both cases, there's a file `seconddocroot.conf.example` that we'll edit instead. These configuration files are going to _proxy_ all in

Keep in mind that you only need to configure nginx _or_ apache, not both. If you're not sure which one your project is running, consult your `.ddev/config.yml` file. Also, since we have two additional URLs (`app.my-project.ddev.site` and `api.my-project.ddev.site`), we'll need to make a config file for each. In the examples below, I've only included the files for the `app` subdomain.

#### Configuring nginx

Your default nginx configuration is in `.ddev/nginx_full/nginx-site.conf`. Leave this file alone - it's needed for DDEV's health check. Create a new `.conf` file next to this and copy in the code sample below.

The main parts to consider here are the values of `server_name` and `proxy_pass`. The `server_name` must match the URL you wish to use, and the port number in `proxy_pass` needs to match the port in the container that's in use by the node process.

If you used the quickstart commands above, Keystone runs on port 3000 and Svelte will be on 5173.

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

Your default apache configuration is in `.ddev/apache/apache-site.conf`. Leave this file alone - it's needed for DDEV's health check. Create a new `.conf` file next to this and copy in the code sample below.

Apache configuration will require two VirtualHost entries per URL. Similar to the nginx config above, we need to specify the URL we wish to use and the port we're proxying to. You'll need to edit the values `ServerName`, `ProxyPass`, and `ProxyPassReverse` in each vhost.

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

### Installing PM2

[PM2](https://pm2.keymetrics.io/) is an "Advanced, production process manager for Node.JS". We can use this tool to start our app without clogging up an entire terminal pane and it will also allow us to monitor the process's logs, memory usage, and some other key stats. There are a ton of options available, but we'll just use a few basics.

PM2's instructions tell us to install the tool globally, so we'll handle this during DDEV's build process with a custom Dockerfile in `.ddev/web-build/Dockerfile`. For more info on how DDEV handles custom Dockerfiles, see [Adding Extra Dockerfiles for webimage and dbimage](https://ddev.readthedocs.io/en/stable/users/extend/customizing-images/#adding-extra-dockerfiles-for-webimage-and-dbimage) in the DDEV documentation. We'll make sure to define a specific pm2 version here, that way if we ever need to upgrade in the future we can force the container to rebuild.

```Dockerfile
RUN npm install -g pm2@5.3.1
```

We can then setup our PM2 config by adding a file `apps.config.js`. This file will name our processes, tell PM2 where to run the start command, as well as what command to run. For a full list of config options see the [relevant docs](https://pm2.keymetrics.io/docs/usage/application-declaration/)

```js
module.exports = {
  apps : [
    {
      name: "Svelte",
      cwd: "/var/www/html/svelte",
      script: "npm run dev || (rm -rf node_modules && npm install && npm run dev)"
    },
    {
      name: "Keystone",
      cwd: "/var/www/html/keystone",
      script: "npm run dev || (rm -rf node_modules && npm install && npm run dev)"
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

This will run a command in the web container to have PM2 daemonize the applications we outlined in `apps.config.js`. Keep in mind that DDEV will likely finish before PM2 has your apps fully up and running. In the next step, we'll see how to check in on PM2's progress.

### Custom DDEV commands

To interact with PM2 running in the container, we can add a [custom ddev command](https://ddev.readthedocs.io/en/stable/users/extend/custom-commands/) in `.ddev/commands/web/pm2`

```bash
#!/usr/bin/env bash

## Description: Run PM2 commands in the container
## Usage: pm2
## Example: "ddev pm2 monit"

pm2 "$@"
```
This will allow us to use `ddev pm2 <command>` to interact with our daemonized node applications. The main commands I've found myself using are `list`, `monit`, and `log <process>`. If, for some reason, one of your apps crashes, you can also use `ddev pm2 restart <name>`

```txt
$ ddev pm2 list

┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 1  │ Keystone           │ fork     │ 0    │ online    │ 0%       │ 6.5mb    │
│ 0  │ Svelte             │ fork     │ 0    │ online    │ 0%       │ 6.5mb    │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

```txt
$ ddev pm2 monit

┌─ Process List ──────┐┌──  Keystone Logs  ──────────────────────────────────┐
│[ 1] Keystone        ││                                                     │
│[ 0] Svelte          ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
│                     ││                                                     │
└─────────────────────┘└─────────────────────────────────────────────────────┘
┌─ Custom Metrics ────┐┌─ Metadata ──────────────────────────────────────────┐
│                     ││ App Name              Keystone                      │
│                     ││ Namespace             default                       │
│                     ││ Version               N/A                           │
└─────────────────────┘└─────────────────────────────────────────────────────┘
 left/right: switch boards | up/down/mouse: scroll | Ctrl-C: exit
 ```

 ```txt
 $ ddev pm2 log Svelte

[TAILING] Tailing last 15 lines for [Svelte] process (change the value with --lines option)
/home/andy/.pm2/logs/Svelte-out.log last 15 lines:
...

/home/andy/.pm2/logs/Svelte-error.log last 15 lines:
...
```

### Restart DDEV (again)

Remember, anything you do that changes how DDEV should construct the containers will require a `ddev restart` to take effect. This time, however, when DDEV tells you it's ready, check out your `app.my-project.ddev.site` and `api.my-project.ddev.site` urls. You should see running applications!

## Conclusion

DDEV is a great piece of open source software and has seen great adoption across the PHP CMS development environment. With this simple setup, local Node application development can more closely resemble production environments and reduce issues across your team of developers. If you or your team adopts this process, please be sure to drop by the [Discord](https://discord.gg/hCZFfAMc5k) and let us know! Additionally, follow development of the DDEV addon that handles most of this work for you [here](https://github.com/andy-blum/ddev-pm2).
