---
title: 'Sorting Data in JavaScript'
created: 2024-02-14T00:00:00-05:00
canonical: https://www.lullabot.com/articles/sorting-data-javascript
type: article
---

# Sorting data in JavaScript
Our brains are great at identifying patterns and outliers, however, this becomes harder to do when data isn’t in some logical order. Luckily, as developers, we have tools we can use to sort data into any order we desire.

## The basics of array.sort()

In Javascript, every single array has a `sort()` method. This takes all the items in the array, and rearranges them into the default order. Consider the code below:


    const fruits = ['strawberry', 'banana', 'tomato', 'apple'];

    fruits.sort();
    // ['apple', 'banana', 'strawberry', 'tomato']

The sort method rearranged the items in the array into alphabetical order - how handy! Similarly, [as of 2023](https://caniuse.com/?search=toSorted) we can use the newer `toSorted()` method to create a *new* array to avoid mutating the original data. This method, however, still uses an algorithmic method of comparing data. How does it work?

**First, all array items are cast to strings**

Take a moment to look at the code below and see if you can guess how the data will sort:


    const numbers = [25, 4, 8, 2, 18]

    numbers.sort();

Did you guess `[2, 4, 8, 18, 25]`? While any human would look at those numbers and sort them that way, the `sort` method is casting them all to strings and sorting them the way we’d sort words alphabetically. The actual result will be `[18, 2, 25, 4, 8]`.

**Second, items are sorted by their placement on the unicode table**

Each character has [a given encoding](https://en.wikipedia.org/wiki/List_of_Unicode_characters#Latin_script). This is what allows browsers and word processors to change the fonts of any piece of text. The visual representation of the letters that humans can read has been separated from the encoding of the character that computers can store. This encoding is numeric, and our data is sorted by that number.

This unintuitive method of sorting can result in some *highly peculiar* sorting if you aren’t looking out for it. Consider the following example:


    const data = [
      'web',
      'development',
      'is',
      'fun',
      'in',
      2023,
      '@',
      'Lullabot',
      '!',
      {firstName: 'Andy', lastName: 'Blum'}
    ];

    data.sort();
    // ['!', 2023, '@', 'Lullabot', {...}, 'development', 'fun', 'in', 'is', 'web']

This data doesn’t appear sorted at all, but if you consult the unicode table, we find that this is the correct order. Numbers are always before letters, capitalized letters are always before lowercase letters, and punctuation is scattered across the table. Objects will be sorted between upper and lower-case letters because objects cast to strings are `"[object Object]"`.

Since the default sort order can change our data’s type and is tied to character encoding, we will almost always want to define a custom sorting method.

## Sorting with a custom algorithm

The `Array.prototype.sort()` and `Array.prototype.toSorted()` methods accept a function as their sole parameter. That [comparator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description) will be given two of the items from the array, and is expected to return an integer. If we wanted to mimic the default functionality, our code might look like this:


    function comparator(a, b) {
      if (a.toString() < b.toString()) { return -1; }
      if (a.toString() > b.toString()) { return 1; }

      return 0;
    }

    data.sort(comparator);

Given two items from our dataset (`a` and `b` above) our comparison function will:

- return a negative number to place `a` before `b`
- return a positive number to place `a` after `b`
- return zero to leave them in the current order

A comparator for integers could look like this:


    function comparator(a, b) {
      return a - b
    }

There are a couple of silent pitfalls to watch out for as you write a custom comparator function. First, returning a value *other than a number* or not returning a value *at all* does not trigger an error. Instead, these items are treated as being effectively identical. The function then goes on to compare the rest of the array, and can leave your array partially sorted.

Secondly, `[NaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#description)` [values can act counterintuitively](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#description). While returning `NaN` from your comparator is effectively the same as returning `0`, comparing things to `NaN` *always returns false,* so be careful if you start casting strings to numbers.


## Sorting across multiple dimensions

Once you understand the basics of how sorting works in a single dimension, you may want to sort lists in several dimensions.

For example, imagine we collect a set of users from an API. By default, these users are sorted by their ID number, but we’d like to sort them alphabetically and grouped by timezone. Sorting across multiple dimensions is as simple as sorting the array multiple times along each dimension, from the least inclusive groups to the most inclusive groups. While this may appear counter intuitive at first, we’re asking the computer to sort items into one order, then break that order in a very specific way.

In our example, we’re asking the computer to first sort all our users alphabetically, and then sort the alphabetized list by timezone. Since the algorithm will leave items in the current order when their sorting values match, our alphabetized names will remain alphabetized within their timezone group.

Copy the code below into your devtools console to see this in action.


    (async () => {
      console.clear();
      // Gets dummy data from a github gist.
      const gist = 'https://api.github.com/gists/3c9f4df572c295252bc604d85b13a66c';
      const data = await fetch(gist).then(r => r.json());
      const users = JSON.parse(data.files['users.json'].content);

      // Sorts users by timezone.
      const timezoneSorter = (a, b) => {
        if (a.timezone < b.timezone) { return -1 }
        if (a.timezone > b.timezone) { return 1 }
        return 0;
      }

      // Sorts users alphabetically by last name.
      const nameSorter = (a, b) => {
        const aName = `${a.last_name} ${a.first_name}`;
        const bName = `${b.last_name} ${b.first_name}`;
        if (aName < bName) { return -1 }
        if (aName > bName) { return 1 }
        return 0;
      }

      // Sort users from most granular sort to least.
      const sorted = users.toSorted(nameSorter).toSorted(timezoneSorter);

      // Log out unsorted users to console.
      console.groupCollapsed('Unsorted Users');
      console.table(users);
      console.groupEnd();

      // Log out sorted users to console.
      console.groupCollapsed('Sorted Users');
      console.table(sorted);
      console.groupEnd();
    })();


## Sorting in multiple languages

So far, when we’ve sorted strings, we’ve continued to rely on the unicode placement of characters. While this works fine in a single case in English, it *does not* work reliably when we start working in other languages or in mixed cases. To reliably sort text in locale-specific alphabetical order, we need to reach for the [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) class.


    // ['A', 'B', 'C', ... 'X', 'Y', 'Z']
    const english = [...Array(26).keys()].map(x => (x + 10).toString(36).toUpperCase());

    const germanSpecials = ['Ä', 'Ö', 'Ü', 'ẞ'];

    // Mix the two together randomly.
    const mixed = [...english, ...germanSpecials].toSorted(()=>(Math.random() - 0.5));

    mixed.toSorted();
    /* [ ... 'X', 'Y', 'Z', 'Ä', 'Ö', 'Ü', 'ẞ'] */

    const german = new Intl.Collator('de')
    mixed.toSorted(german.compare);
    /* ['A', 'Ä', 'B', ... 'O', 'Ö', 'P', ... 'S', 'ẞ', 'T', 'U', 'Ü', ...] */

# Conclusion

Sorting data is a common need in web development. While JavaScript provides some default tools, they have some pitfalls and can sort things in unintuitive ways that are hard to predict. Thankfully, it’s straightforward to write custom sort methods for your arrays and get the results you expect.

