---
title: Trigger JavaScript changes at your CSS breakpoints
created: 2021-04-14T00:00:00-05:00
type: article
---

[Responsive web design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) has been around for a while, and is definitely the preferred way to handle displaying your website to users across a virtually infinite number of device types, shapes, and sizes. While the use of media queries is pretty well established and wide-spread for targeting specific CSS rules, what if you wanted to use device width or some other media query to trigger _your javascript?_

## Web APIs to the rescue

Web APIs are a marvelous thing, offloading a lot of work from the single-thread-limited javascript engines into the browser application itself to keep your web experience snappy and performant. In this case, the Window API provides a method [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia#browser_compatibility) which allows us to effectively copy and paste our breakpoints from our S/CSS into our javascript. It works like this:

1. Enter your media query as a string like `window.matchMedia('(min-width:640px)')`
2. That returns a [MediaQueryList](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList) object
3. Use the MediaQueryList's [matches](https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches) property to get a boolean value indicating if that media query matches at the time of code execution

For example, consider a design with a side bar that can toggle between two states, open and closed. To make this simple on yourself, you can make the side bar default to a 'closed' state in your CSS and open it when the class 'open' is applied. This limits the javascript needed to a single click event listener on a button somewhere in the DOM.

```js
const toggleButton = document.querySelector('#sidebar-toggle-button');

toggleButton.addEventListener('click', () => {
  const sidebar = document.querySelector('#sidebar-region');

  sidebar.classList.toggle('open');
});
```

Now, your sidebar toggle button will listen for the click event, and toggle the existence of the 'open' class on your sidebar. But what if we want the sidebar to be open by default for users on desktop-sized screens? Well, we could get a little wild with our CSS and write media queries for our sidebar to have it open by default on large screens, but now when a user clicks the button, it'll add the 'open' class to an already-open sidebar. One of my favorite things about web development is that there's a hundred ways to solve any given problem, but I think the easiest one in this case is to borrow our media queries from our CSS in our javascript.

We'll need to account for a few things:

1.  Check the media query on page load to see if the sidebar should be open
2.  Check the media query on resize, to close the sidebar if we cross under the width threshold or open it if we cross over the threshold.

## 1. Check the media query on page load

Anyone that has written jQuery will remember starting scripts with `$( document ).ready()` where we had to wait for the document to be fully loaded and ready for our scripts to run. We don't necessarily want our scripts to run while the page is still parsing the DOM just in case the part of the DOM we're going to interact with isn't ready yet. In the case of vanilla JS, we can use the [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) event to wait for the browser to finish parsing the DOM, or the [load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) event if we're in even less of a rush to wait for the browser to finish retrieving all additional resources like images and stylesheets.

```js
const mediaQuery = window.matchMedia('(min-width:640px)');

document.addEventListener('DOMContentLoaded', () => {
  if (mediaQuery.matches) {
    const sidebar = document.querySelector('#sidebar-region');

    sidebar.classList.add('open');
  }
});
```

## 2. Listen for changes on the media query

We can also use the MediaQueryList object stored as `mediaQuery` in the above example to listen for when the browser crosses our threshold. In our hypothetical case here, we'll listen for crossing the boundary to close an open sidebar when the screen shrinks, and to open a closed sidebar when the screen expands.

```js
const mediaQuery = window.matchMedia('(min-width:640px)');

mediaQuery.addEventListener('change', () => {
  if (mediaQuery.matches) {
    const sidebar = document.querySelector('#sidebar-region');

    sidebar.classList.add('open');
});
```
