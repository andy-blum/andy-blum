---
title: Add a Composer Script to Your Module or Theme
created: 2022-03-09T00:00:00-05:00
canonical: https://www.lullabot.com/articles/add-composer-script-your-module-or-theme
type: article
---

Following Drupal 8’s ambitious overhaul to “get off the island,” the recommended way to create a new Drupal site is to use composer to manage all PHP dependencies. By now, most Drupal developers will have had a chance to install a new module or update existing modules using composer’s `require` or `update` commands, but did you know that you can also use composer to run scripts to interact with your code?

Composer scripts can do almost anything you want, from running tests to creating scaffolding for a project. In the example below, we use a composer script to assist users in creating a subtheme of the [uikit contrib theme](https://www.drupal.org/project/uikit).

Drupal themes used to have the ability to define custom drush commands, and it was a common practice of contrib themes to create a `STARTERKIT` directory that was all the boilerplate needed to create a new subtheme. A composer script fills this gap nicely and allows us to rename files, functions, and configuration to match a new theme.

## How Composer handles scripts

The first thing we need to do is to add a `composer.json` file to the project if one doesn’t exist already. Drupal has some helpful [documentation](http://drupal.org/docs/creating-custom-modules/add-a-composerjson-file) if you need it. Next, we’ll need to create the script and tell Composer what command should run it. Composer’s documentation offers some help in [how to create a custom command](https://getcomposer.org/doc/articles/scripts.md#writing-custom-commands), but the majority of their examples are running simple bash commands like `rm -rf cache/*` or binaries like `phpunit`. What we want to do is a bit more complicated, so our script will need to go into an external file, following the example in Pantheon’s [example-drops-8-composer repository](https://github.com/pantheon-systems/example-drops-8-composer). Their script already does something reasonably similar to what was required for UIKit.

To understand what’s happening here, we need first to understand that Composer defines a script as “_a_ _PHP callback_ _(defined_ _as a static method) or any command-line executable command_.” Since we will utilize a PHP callback, we also need to understand the concept of “autoloading.” 

When running object-oriented PHP, classes will typically require functionality stored in other classes, and each class is generally written in its own file. While we could start each class with a list of inclusions to bring in the functionality we need, PHP - and thus Composer - allows us to autoload all defined classes so we can focus on writing the functionality we need, not managing all the code infrastructure.

Without autoloading, our file could look like this:

```php
<?php

include('path/to/required_class_1.php');
include('path/to/required_class_2.php');
include('path/to/required_class_3.php');
...
include('path/to/required_class_N.php');

class MyClass {
  ...
}
```

But with autoloading, we can write the class, and as long as the autoloader is configured correctly, everything gets included automatically without the need for potentially dozens of include statements. 

In our case, Composer handles the PHP autoloading as long as we utilize one of their four autoloading methods, `PSR-4`, `PSR-0`, `classmap`, or `file`. The specifics of each of these are beyond the scope of this article, but you can read [Composer’s documentation on autoloading](https://getcomposer.org/doc/04-schema.md#autoload) for more information. We, like the pantheon repository, will utilize the `classmap` method of autoloading.

## Outlining the script

Before we can expect Composer to load our class and run our function, we need to actually have a class and function, so we’ll first make a basic version that prints a string to the CLI. From this point on, we’ll be focusing on the needs of the UIKit theme, but the concepts should be transferable to satisfy your needs. [You can reference its repository if you’d like to inspect anything in the UIKit project](https://git.drupalcode.org/project/uikit).

To start, we’ll make our file in the theme’s `/src` directory. Modules and themes defining classes in Drupal should follow [Drupal’s namespacing standards](https://www.drupal.org/docs/develop/coding-standards/namespaces), which say: 

> [Drupal 8 supports PSR-4](https://www.drupal.org/docs/develop/standards/psr-4-namespaces-and-autoloading-in-drupal-8), so to permit class autodiscovery, a class in the folder:
> `<module folder>/src/SubFolder1/SubFolder2` should declare the namespace:
>
> `Drupal\<module name>\SubFolder1\SubFolder2`
>
> Note that the `/src/` subfolder is omitted from the namespace.

So in our case, we’ll create our `ScriptHandler` class in the file `uikit/src/ScriptHandler.php` and add the `subtheme` function that Composer will run.

```php
<?php

namespace Drupal\uikit;

class ScriptHandler {
  public static function subtheme() {
    print('this is the subtheme function!');

    // TODO: Business Logic
  }
}
```

Right now, this function will only print out `this is the subtheme function!` to the command line when run, but it’s enough right now to ensure that everything is set up correctly. The last thing we need to do is configure this class to autoload (below, lines 7-11) and register the method the script should run (below, lines 12-16) in our composer.json file. 

Now we can run our simple script! Entering `composer subtheme` from the same directory as our `composer.json` file will run the PHP callback we specified.

```json
{
    "name": "drupal/uikit",
    "description": "A lightweight frontend framework with a comprehensive collection of HTML, CSS, and JS components.",
    "type": "drupal-theme",
    "license": "GPL-2.0",
    "homepage": "https://www.drupal.org/project/uikit",
    "autoload": {
        "classmap": [
            "src/ScriptHandler.php"
        ]
    },
    "scripts": {
        "subtheme": [
            "Drupal\\uikit\\ScriptHandler::subtheme"
        ]
    },
}
```

## Fleshing out the business logic

To accomplish the task we set out to do, we’ll need some help. First, we’ll need to glean some information from the command that triggered this function (the Composer Event), and we’ll utilize the Symfony framework upon which Drupal is built. We won’t need to bring in any additional dependencies beyond what we already have available to us. 

The steps we need to accomplish are:

1. Take the new theme name from the script arguments
2. Duplicate the `STARTERKIT` directory
3. Move the duplicated code outside of the UIKit folder
4. Replace all instances of `STARTERKIT` with our new theme’s machine name in file names
5. Replace all instances of `STARTERKIT` with our new theme’s machine name in file contents
6. Activate the theme by changing the info file’s extension from `.info.ymltmp` to `.info.yml`

The first thing we’ll aim to do is get the arguments provided to the script and convert them (if there are any) into a drupal-safe machine name. The argument passed into our callback function is a [Composer\\Script\\Event](https://github.com/composer/composer/blob/main/src/Composer/Script/Event.php) object, and the method to access the arguments is `getArguments()`.

```php
<?php

namespace Drupal\uikit;

use Composer\Script\Event;

class ScriptHandler {
  public static function subtheme(Event $event) {

    // 1. Take the new theme name from the script arguments
      // set default in case no argument is provided
      $sub_name = 'uikit_subtheme';
      $args = $event->getArguments();
      if (!empty($args)) {
        $input = $args[0];
        // remove characters that aren't letters, underscores, or spaces
        $strip_chars = preg_replace('/[^a-zA-Z\_\s]*/', '', $input);
        // replace spaces with underscores
        $strip_space = preg_replace('/\s+/', '_', $strip_chars);
        // convert to all lower-case
        $sub_name = strtolower($strip_space);
      }

    // TODO:
    // 2. Duplicate the `STARTERKIT` directory
    // 3. Move duplicated code outside of the UIKit folder
    // 4. Replace `STARTERKIT` in file names
    // 5. Replace `STARTERKIT` in file contents
    // 6. Activate the info file
  }
}
```

Next, we’ll make a copy of the `STARTERKIT` files. In the case of UIKit, we decided not to make assumptions about people’s directory structure and instead to make the subtheme a sibling of the base theme. Then users can move the subtheme wherever they’d like. To accomplish this, we’ll use Symfony’s [Filesystem](https://symfony.com/doc/current/components/filesystem.html) component to [mirror the directory](https://symfony.com/doc/current/components/filesystem.html#mirror).

```php
<?php

namespace Drupal\uikit;

use Composer\Script\Event;
use Symfony\Component\Filesystem\Filesystem;

class ScriptHandler {
  public static function subtheme() {

    // 1. Take the new theme name from the script arguments
      ...

    // 2. Duplicate the `STARTERKIT` directory
    // 3. Move duplicated code outside of the UIKit folder
      $fs = new Filesystem();
      $fs->mirror(getcwd() . '/STARTERKIT', '../' . $sub_name);

    // TODO:
    // 4. Replace `STARTERKIT` in file names
    // 5. Replace `STARTERKIT` in file contents
    // 6. Activate the info file
  }
}
```

Now that we have our own files to work with, we can start renaming & editing those files. We’ll use the Filesystem component again, but first, we’ll have to locate all the files that need editing using the [Finder](https://symfony.com/doc/current/components/finder.html) component.

```php
<?php

namespace Drupal\uikit;

use Composer\Script\Event;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;

class ScriptHandler {
  public static function subtheme() {

    // 1. Take the new theme name from the script arguments
    // 2. Duplicate the `STARTERKIT` directory
    // 3. Move duplicated code outside of the UIKit folder
      ...

    // 4. Replace `STARTERKIT` in file names
      $finder = new Finder();
      $finder->files()->name('/STARTERKIT/')->in('../' . $sub_name);
      foreach ($finder as $file) {
        $location_segments = explode('/', $file->getRealPath());
        $old_filename = array_pop($location_segments);
        $location = implode('/', $location_segments) . '/';
        $new_filename = preg_replace('/STARTERKIT/', $sub_name, $old_filename);
        $fs->rename($file->getRealPath(), $location . $new_filename);
      }

    // 5. Replace `STARTERKIT` in file contents
      $finder = new Finder();
      $finder->files()->contains('/STARTERKIT/')->in('../' . $sub_name);
      foreach ($finder as $file) {
        $old_contents = file_get_contents($file->getRealPath());
        $new_contents = preg_replace('/STARTERKIT/', $sub_name, $old_contents);
        file_put_contents($file->getRealPath(), $new_contents);
      }

    // 6. Activate the info file
      $finder = new Finder();
      $finder->files()->name('*.ymltmp')->in('../' . $sub_name);
      foreach ($finder as $file) {
        $location_segments = explode('/', $file->getRealPath());
        $old_filename = array_pop($location_segments);
        $location = implode('/', $location_segments) . '/';
        $new_filename = preg_replace('/ymltmp/', 'yml', $old_filename);
        $fs->rename($file->getRealPath(), $location . $new_filename);
      }
  }
}
```

## Conclusion & Next Steps

Utilizing the already present framework made this a lightweight addition to the theme and restored functionality that had been present in earlier versions of the project.

Possible future improvements:

1.  Adding support for additional, named arguments so users could specify the name of the theme and specify the path in which they’d like the subtheme to be created.
2.  Utilizing a more robust method of getting uikit’s file location than `getcwd()` as composer can run in deeper directories than where the `composer.json` file is located.
