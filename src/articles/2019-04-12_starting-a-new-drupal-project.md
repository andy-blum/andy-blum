---
title: Starting a New Drupal Project
created: 2019-04-12T00:00:00-05:00
type: article
tags: [drupal]
permalink: "articles/starting-new-drupal-project/"
---

My favorite characteristic of Drupal as a CMS is its one-two punch of flexibility & extensibility. You can make Drupal do just about anything you want, and for many purposes, you might not even need to touch code. While the options available are effectively infinite, there are a few things I do every single time I start a new project.

## Start with a standard environment

At [Midnet](https://www.midnetmedia.com "Midnet Media"), we are working primarily in Drupal 8 now. We still do maintenance on Drupal 7, 6, and even 5 sites, but new projects are almost exclusively in Drupal 8 now. To allow our entire development team to jump in and bang around on a project there are a few standards we’ve built upon.

1.  We’re all developing on Mac OSX. That’s how we do it, but nothing about our stack is exclusive to OSX. With little effort you could work on one of these projects on Windows or Linux as well.
2.  We’re using [Docker](https://www.docker.com "Docker") and [DDEV](https://github.com/drud/ddev "DDEV by Drud on github") to manage our virtual server environments.
3.  We’re using a self-hosted [Gitlab](https://www.gitlab.com "Gitlab") instance and assorted git clients for version control.

## Create & manage the project files with Composer

[Drupal now recommends managing projects with composer](https://www.drupal.org/docs/develop/using-composer/using-composer-with-drupal "Using Composer with Drupal"), and while it’s a bit of an adjustment to get rolling at first I wouldn’t go back at this point. It’s just so easy to add/remove/patch a module from the command line.

```
composer create-project drupal-composer/drupal-project:8.x-dev PROJECT-NAME --stability dev --no-interaction

composer require drupal/module_name
```


If you’d like a GUI approach to help you get comfortable with the composer steps, you can use [the codepen I built](https://codepen.io/andy-blum/full/KrgrdQ/ "Drupal Startup on Codepen") when I was getting started.

### Manage the site configuration with Drush

Again, the first time you start jumping into the command line things can be pretty intimidating, but with a few basic [Drush commands](https://drushcommands.com/drush-9x/ "Drush Commands") you can:
* un/install modules and themes
* im/export site configuration
* backup your files and database
* clear the cache (you’ll do this _a ton_)
* reset user passwords

Drush is there to make the tedious, repetitive tasks go quicker so you can get to the custom stuff faster. If you started your project with composer Drush should be bundled in and you can access it from the project root via `vendor/bin/drush command`

You can also install the [Drush Launcher](https://github.com/drush-ops/drush-launcher "Drush Launcher on github") on your system to make the command just `drush command`

## Modules to make life easier

Most of the developers I know have a set of go-to modules they install from the beginning of every project. These modules just become a part of your workflow and when you end up working on a project without them you feel like the new junior dev again. They just become that automatic that you treat them like a core module. Here are the modules/projects I use every single project:

Themes

* [UIKit](https://www.drupal.org/project/uikit "UIKit Theme on Drupal")

  Shameless plug: I’m a co-maintainer for this project.
  UIKit is built on top of the [UIKit frontend framework](https://www.getuikit.com "UIKit Framework"), which has some built-in components like sliders, scrollspy animations, and that sort of thing. It’s not the end-game theme, just something to build on top of.

*   [Adminimal](https://www.drupal.org/project/adminimal_theme "Adminimal Theme on Drupal") is a theme I use for the admin pages. I like it better than Drupal’s default ‘Seven’ theme, and it adds an extra layer of polish if you’re going to pass off admin duties to a client.


Administration & Development

*   [Coffee](https://www.drupal.org/project/coffee "Coffee Module on Drupal") is one of those modules that you’ll never find by accident since it’s name isn’t what you’d search for to find this module. It’s a productivity booting module that helps you zip around Drupal’s backend. using the Alt+D key combination pops up a text box, and as you type it suggests admin pages it thinks you want. For example, I have a project using the [geolocation module](https://www.drupal.org/project/geolocation "Geolocation Module on Drupal"). I _never_ use this module, so I don’t know exactly where it’s configuration page is. I _could_ dig around in the admin pages, or go to the modules page and look for a link to its config settings, but instead of that, I can hit Alt+D on any page of the site (front or back-end), type ‘geo’, and it’s already pointing me to the exact page I need. This is a must-have module.
* [Devel](https://www.drupal.org/project/devel "Devel on Drupal") is another must-have module, especially if you’re going to be doing any theming whatsoever. It’s actually a suite of 3 modules. The main module is devel, which provides a new menu item in your admin toolbar with various developer-friendly tools like ‘clear cache’ or ‘run cron’, but it also includes some more powerful tools like reinstalling modules, or rebuilding all routes in your site. The second part of devel I always install is ‘kint’. Kint is a variable dumper that by default collapses all objects and arrays, allowing you to expand only the parts you want. If you’ve ever used printr() or dpm() and thought, ‘holy smokes that’s too much’, kint is the dumper you’ve looked for. The final part of devel is ‘devel generate’, which will auto-create nodes for you to theme around. If you’ve ever needed dummy content to theme your nodes/views around this is the module you want.

Configuration

* [Configuration Installer](https://www.drupal.org/project/config_installer "Configuration Installer on Drupal") isn’t a module, it’s actually an install profile. This project allows you to install a site using the configuration files in the project. This is great if you want to have multiple devs work on a project (or one dev work from multiple computers). You can either use the installation profile in Drupal’s /core/install pages when starting up or by using the command `drush si config_installer`

* [Configuration Split](https://www.drupal.org/project/config_split "Configuration Split on Drupal")'s job is to take your configuration files and separate them into different folders. When you first start on a site and export your config, it’s saved to ‘../config/sync’ and all your config files live in there together. Config split comes in when you decide some of your configuration options are great in your development environment (debugging, disabled caching) but don’t belong in production - or the opposite - they are great in production (aggregated CSS/JS, google analytics) but you don’t want them running in the dev environment. With config split, you can split entire modules, or just specific config files.


Content & Layout

* [Paragraphs](https://www.drupal.org/project/paragraphs "Paragraphs on Drupal")

  One of the biggest pain-points for content editors on Drupal is content creation. Drupal has gotten better over the years, and there are some modules that improve the experience further (gutenberg, layout builder) but I have yet to find a stable module that works well for content editors that I can make play nice with my theme quite like Paragraphs. I plan to write a blog post about Paragraphs and how I set it up sometime soon, so check back for that.

*   [Menu Link Attributes](https://www.drupal.org/project/menu_link_attributes "Menu Link Attributes on Drupal")

  By default, Drupal’s menu items include a title field and a link. This module expands that to allow you to set up attributes for your menu links and their wrappers. By writing a little bit of [YAML](https://www.drupal.org/project/yaml_editor "YAML editor on Drupal"), you can create drop-downs, text fields, and other form elements to allow your end-users to pick the exact attribute combinations they want.


Misc

* [SMTP](https://www.drupal.org/project/smtp "SMTP module on Drupal") allows your site to send mail through an SMTP server. We provide email for many of our web clients, and routing mail through the SMTP server helps those emails avoid the spam folder.
* [Webform](https://www.drupal.org/project/webform "Webform Module on Drupal")
  Drupal 8 has a default contact form module, but webform is the form-building module for Drupal, bar none.
* [Views Reference](https://www.drupal.org/project/viewsreference "Views Reference module on Drupal")
  Since we use paragraphs to build out our pages, we can use this module to allow clients to place view blocks at will without giving them the permissions (or instructions) to modify block layouts.
