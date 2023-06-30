---
title: Using the flag module to trigger additional actions
created: 2021-06-02T00:00:00-05:00
type: article
tags: [drupal]
permalink: "articles/using-flag-module-trigger-additional-actions/"
---

On a recent pet project I wanted to use the flag module to provide a quick bookmarking solution so users could mark nodes they were interested in keeping an eye on, and had the thought, "_there must be a way to use this to trigger side effects"_. There is, but it's a bit more complicated than Drupal's well-known hooks. In searching for a way to do this I came across the article [_Perform actions on flag/unflag in Drupal 8_](https://dev.studiopresent.com/blog/back-end/perform-actions-flag-unflag-drupal-8) by Goran Nikolovski at StudioPresent, which was incredibly helpful.

## Symfony Events, Listeners, & Subscribers

Symfony's website has some pretty good documentation around [Events & Event Listeners](https://symfony.com/doc/current/event_dispatcher.html), but the tl;dr: is 

> During the execution of a Symfony application, lots of event notifications are triggered. Your application can listen to these notifications and respond to them by executing any piece of code. **Subscribers are easier to reuse** because the knowledge of the events is kept in the class rather than in the service definition. This is the reason why Symfony uses subscribers internally. **Listeners are more flexible** because bundles can enable or disable each of them conditionally depending on some configuration value.

In this post, I'll be adding a \_subscriber\_ because I'm not trying to build something wildly flexible and because the code samples in the article I linked above did that.

## Step 1. Create a Module

The first thing you'll need to do is create a module. I come from the front-end side of Drupal, working mostly in the themes directory, but there are some things themes just cant do. For starters, themes can only do work when they are the active theme, meaning in most cases you can't execute your theme's code on admin pages. Additionally, themes can't define services. For an explanation why, I recommend catch's comment on [_Allow themes to provide services.yml_](https://www.drupal.org/project/drupal/issues/2002606#comment-10786044). The easiest way to create a module with an event subscriber is to use Drush 10's generate feature.

```
composer require drush/drush

drush generate module
```

The drush generate command will prompt you for some basic info like module name, package, and description, but one of the prompts will ask you "Would you like to create event subscriber?", which we do. You can, of course, add an event subscriber to a pre-existing module as well. At this point we need a directory structure like this:

```
my_module/
  src/
    EventSubscriber/
      MySubscriber.php
  my_module.info.yml
  my_module.module
  my_module.services.yml
```

_Note: In this example the module's machine name is my\_module and the subscriber is MySubscriber, but you can call these whatever you want._

## Step 2. Defining your service

Next, we need to define a service. The drush generate command will automatically add an arguments value to your service file, but we won't need that for this specific use case. For more information on defining services, see [Drupal's documentation on the subject](https://www.drupal.org/docs/drupal-apis/services-and-dependency-injection/structure-of-a-service-file). In our case we'll want:

```yml
services:
  my_module.my_subscriber:
    class: Drupal\my_module\EventSubscriber\MySubscriber
    tags:
      - { name: event_subscriber }
```

Here, we're defining the "my\_subscriber" service within the "my\_module" module. The "class" value tells our service what PHP class to use for this service, and the "tags" value tells drupal what kind of service it is to help with compiling & caching.

## Step 3. Fleshing out the Class

If you used the drush generate command, it'll provide some boilerplate code to get you started. We're going to end up deleting a good chunk of that. If you'd like some more info on event handling in Drupal, I again recommend [their docs for more context](https://www.drupal.org/docs/creating-custom-modules/subscribe-to-and-dispatch-events). The distilled version of that boilerplate code will be:

```php
<?php

namespace Drupal\test_module\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
  * my_module event subscriber.
  */
class MySubscriber implements EventSubscriberInterface {

  public static function getSubscribedEvents() {
    return [
      // EventType::EVENT_NAME => eventHandler,
    ];
  }
}
```

We're doing a number of things here that I didn't fully understand when I started venturing into module development, so I want to step through it for any beginners.

1. We define the [namespace](https://www.php.net/manual/en/language.namespaces.rationale.php) of the class. This lets us name our subscriber class something common and generic like "MySubscriber", without it conflicting with another module's definition of their class "MySubscriber". In the Drupal world, namespaces follow a pattern [as explained here](https://www.drupal.org/docs/develop/standards/psr-4-namespaces-and-autoloading-in-drupal-8). It will always be "Drupal\\\[module\_name\]\\\[file structure within src directory\]"
2. We add a [use statement to import](https://www.php.net/manual/en/language.namespaces.importing.php) the class "EventSubscriberInterface". This lets us use just the classname in our code instead of having to type out the entire namespace for the class each time.
3. We create our class, [implementing](https://www.php.net/manual/en/language.oop5.interfaces.php) the EventSubscriberInterface class we imported previously
4. We add the getSubscribedEvents method, which will return an array of the events we want to subscribe to and their associated handler functions

In this particular use case we want to be on the look out for when flags are added or removed and then act on those events, so we'll need to do the following:

1. Import some classes from the flag module
2. Subscribe to the "flagged" and "unflagged" event
3. Add a function that handles flaggings
4. Add a function that handles unflaggings

First, let's import our classes:

```php
<?php

namespace Drupal\test_module\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

// Import classes from the flag module
use Drupal\flag\Event\FlagEvents;
use Drupal\flag\Event\FlaggingEvent;
use Drupal\flag\Event\UnflaggingEvent;

...
```

Next, let's subscribe to the flagging & unflagging events:

```php
<?php

...

class MySubscriber implements EventSubscriberInterface {

  public static function getSubscribedEvents() {
    return [
      FlagEvents::ENTITY_FLAGGED => 'onFlag',
      FlagEvents::ENTITY_UNFLAGGED => 'onUnflag',
    ];
  }
}
```

Now, we can add our functions to handle those events:

```php
<?php

...

class MySubscriber implements EventSubscriberInterface {

  public static function getSubscribedEvents() { ... }

  public function onFlag(FlaggingEvent $event) {
    $flagging = $event->getFlagging();
    $entity = $flagging->getFlaggable();
    $flag_type = $flagging->getFlag()->id;

    // Do stuff.
  }

  public function onUnflag(UnflaggingEvent $event) {
    $flagging = $event->getFlaggings();
    $flagging = reset($flagging);
    $entity_nid = $flagging->getFlaggable()->id();

    // Do stuff.
  }
}
```

Our full, final event subscriber class will look like this:

```php
<?php

namespace Drupal\test_module\EventSubscriber;

// Required for all Event Subscribers.
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

// Required for subscribing to flagging/unflagging.
use Drupal\flag\Event\FlagEvents;
use Drupal\flag\Event\FlaggingEvent;
use Drupal\flag\Event\UnflaggingEvent;


class MySubscriber implements EventSubscriberInterface {

  // Returns the specific events we want to subscribe to. (required)
  public static function getSubscribedEvents() {
    return [
      FlagEvents::ENTITY_FLAGGED => 'onFlag',
      FlagEvents::ENTITY_UNFLAGGED => 'onUnflag',
    ];
  }

  // Does stuff when an entity is flagged.
  public function onFlag(FlaggingEvent $event) {
    $flagging = $event->getFlagging();
    $entity = $flagging->getFlaggable();
    $flag_type = $flagging->getFlag()->id;

    // Your flagging-based logic here.
  }

  // Does stuff when an entity is unflagged.
  public function onUnflag(UnflaggingEvent $event) {
    $flagging = $event->getFlaggings();
    $flagging = reset($flagging);
    $entity_nid = $flagging->getFlaggable()->id();

    // Your unflagging-based logic here.
  }
}
```
