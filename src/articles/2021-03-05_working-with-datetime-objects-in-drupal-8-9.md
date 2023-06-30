---
title: Working With DateTime Objects in Drupal 8 & 9
created: 2021-03-05T00:00:00-05:00
type: article
tags:
  - drupal
permalink: "articles/working-with-datetime-objects-in-drupal/"
---
## Background & Context

When working with dates in Drupal, all information is stored in the database as seconds since Jan 1, 1970 (GMT). This means that times will be stored in GMT timezone, which is 4 or 5 hours shifted relative to EST. In most cases, modules do a good job shifting times back to the correct timezone, but if you need to do something custom outside a field formatter, you may have to handle timezone shifting on your own.

For instance, consider a node type `event`. We can use core's Date Range field type to store the start/end datetime objects, but the node type's display settings use the "Default (All Day)" display format which leads to dates displaying the date on both the start & end datetimes (e.g. Mar 5, 2021 4pm - Mar 5, 2021 8pm).

This is fine, but it might be nicer to only show the date once when the start & end times are on the same day.

To manage this display we'll need to work with the following logic:

1. Get the starting and ending datetimes out of the database
2. Shift the datetimes to the correct timezone based on user preferences or site configuration
3. Format the datetimes to strings we can pass to twig
4. Print our strings in the twig template

To do this we'll be working in 2 files, our .theme file and the twig file(s) with which we template out and display the information.

Since we're going to eventually impact the output of the node template, we'll use hook\_preprocess\_node() to get our values, transform them, and then pass them on to twig. Below is some boilerplate code to get you started if needed.

```php
/**
 * Implements hook_preprocess_HOOK().
 */
function mytheme_preprocess_node(&$variables) {
  // Get some default variables to work with.
  $node = $variables['elements']['#node'];
  $type = $node->bundle();
  $display = $variables['view_mode'];

  // This function impacts ALL node types, so lets make
  // sure we're only working on 'event' nodes.
  switch ($type) {
    case 'event':
      /**
        * THIS IS WHERE OUR CODE WILL GO
        */
      break;
    // switch statements always need a 'default'
    // to fallback to if there's no applicable 'case'
    default:
      break;
  }
}
```

## 1. Getting the Data

Getting the values from the database is fairly easy, we simply need to get the field we want from the `$node` and then destructure its values into their own variables.

```php
$field = $node->field_event_dates->first()->getIterator();
$field_start = $field['value']->getDateTime();
$field_end = $field['end_value']->getDateTime();
```

In the code above, we're using the `first()` method to get the first value stored in the field. Drupal [stores all fields as lists](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Field%21FieldItemList.php/9.0.x), even if the field only allows one item. If you need a specific item in a field with multiple options, you can use `count()` to get how many items there are in that field and `get(x)` to get a specific item in the list. Keep in mind that lists are 0-indexed, so the first item is `0` and the last item is 1 less than the value of `count()`.

Once we have our field storage, we can use `['value']` and `['end_value']` to get the start & end times of this particular date range. If you're only storing dates, and not date ranges, you'll only have `['value']`. In either case, you'll get an object which has the method `getDateTime()` which we can use to get the values as [DrupalDateTime](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Datetime%21DrupalDateTime.php/class/DrupalDateTime/9.0.x) objects.

## 2. Account for timezones

At this point we have the data we need, but we still need to format the data to a human-readable value, and we need to display it in the proper timezone for our end user. Before we format the string to its final value, we need to figure out what timezone to format to. In some cases it may be safe to assume for all users, especially for sites like an intranet, but the safer, more future-proof method will be to grab the timezone that each user has specified and the timezone the site has specified as a fallback for anonymous users.

```php
$settings = \\Drupal::config('system.date')->getRawData();
$timezone = $settings['timezone']['default'];
$allows_user_override = $settings['timezone']['user']['configurable'];

if ($allows_user_override && $variables['user']->isAuthenticated()) {
  $timezone = $variables['user']->getTimeZone();
}
```

In the code above we're first setting `$settings` to the value Drupal is currently storing in the 'regional settings' at `/admin/config/regional/settings`. From those settings we want the site's default timezone and we want to know if the site allows users to set their own timezone.

If users are allowed to set their own timezones and the current user is authenticated, then we'll want to use their preferred timezone instead of the site's timezone, so we can grab that from `$variables['user']`

## 3. Format the datetime objects to strings

Now that we have our data and the timezone we need to use, we can format the DrupalDateTime object out to a string using `format()` and pass the strings to twig

```php
$variables['event'] = [
  'start_date' => $field_start->format('F j, Y', ['timezone' => $timezone]),
  'end_date'  => $field_end->format('F j, Y', ['timezone' => $timezone]),
  'start_time' => $field_start->format('g:i A', ['timezone' => $timezone]),
  'end_time'  => $field_end->format('g:i A', ['timezone' => $timezone]),
];
```

In the code above we're using DrupalDateTime's [format method](https://api.drupal.org/api/drupal/core%21lib%21Drupal%21Core%21Datetime%21DrupalDateTime.php/function/DrupalDateTime%3A%3Aformat/9.0.x) which takes 2 arguments

* **REQUIRED**: The desired format as a string ([see PHP documentation](https://www.php.net/manual/en/datetime.format.php#refsect1-datetime.format-parameters))
* **OPTIONAL**: An array with the timezone and language code settings

Putting those values in `$variables` passes them to twig by default.

## 4. Displaying the values in twig

Now that most of the heavy lifting is done we only need to handle which strings to print and where to print them.

```html
{% set sameDay = event.start_date is same as(event.end_date) ? TRUE : FALSE %}

<!-- HTML removed for clarity -->
  <div class="teaser__date">
    {% if sameDay %}
      {{ event.start_date }}, {{ event.start_time }} - {{ event.end_time }}
    {% else %}
      {{ event.start_date }}, {{ event.start_time }} - {{ event.end_date }}, {{ event.end_time }}
    {% endif %}
  </div>
<!-- HTML removed for clarity -->
```

We handle one piece of very basic logic here, which is simply checking if the start date and end date are the same. In this way we can choose to print out the end date only if it's different.
