---
title: How I Wish Web Components Worked
created: 2024-12-26T00:00:00-05:00
type: article
permalink: "articles/how-i-wish-web-components-worked/"
# canonical: https://www.lullabot.com/articles/nodejs-development-ddev
summary: ""
---

In the last decade, front-end development has seen an industry-wide shift toward a component-driven paradigm. JavaScript frameworks like React, Vue, and Angular have paved the way, but many have appeared since then. These libraries help developers break complex web user interfaces into smaller, repeatable peices making codebases more scalable and maintainable. While a component library may have a finite number of components, there are exponentially more ways to order, nest, and otherwise combine those components. While JS frameworks have been around since the early 2010's, a relative newcomer to the ecosystem has been web components.

## Web Components & Design Systems

"Web Components" is an umbrella label used that refers to a number of different platform features. These include custom elements, shadow DOM and template/slot elements. Other platform features like constructable and adopted stylesheets have enhanced the core APIs of web components. The basic idea is that developers can create custom HTML elements to implement new functionality that native elements don't.

When a new element is created, there are a handful of lifecycle methods that component authors can tap into. Elements can execute functionality when they are added to, removed from, and moved within the document. Elements can also opt-in to reactivity on attributes. For example, an accordion component may elect to observe for changes on an "is-open" attribute, allowing the element to dispatch events, toggle classes, or execute other functionality when that attribute is modified.

Elements can also create new DOM trees allowing them to render additional HTML within them. These new DOM trees are "Shadow DOM" instances - essentially new document fragments. The shadow DOM can use slot elements to allow the global HTML document and the the shadow DOM to merge.

Once a custom element has been created, it can be used in any way native elements can. They can be authored in CMSes, or rendered through a JS framework. This is perhaps one of their biggest benefits - web components are a create-once-use-anywhere solution. If you're trying to centrally manage a library of components in a specific design system for a web presence that spans multiple tech stacks, web components are an attractive option. In fact, a number of companies are doing just that:

* GE Healthcare's [Edison Design System](https://edisondesignsystem.com/)
* Dell's [Design System](https://web-components.delldesignsystem.com/2.0.1/index.html?path=/story/introduction--page)
* Microsoft's [Fluent UI](https://learn.microsoft.com/en-us/fluent-ui/web-components/)
* Adobe's [Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/index.html)
* United States Veterens Affairs [Design System](https://design.va.gov/components/)
* IBM's [Carbon Design System](https://www.ibm.com/standards/carbon/web-components/)
* T-Mobile's [Scale Design System](https://telekom.github.io/scale)

There are, however, a number of tradeoffs you might want to consider before starting down this path.

### Web Components Are Still a JS Solution

Even though they're a native feature in browsers, web components are still running JS to make HTML/CSS changes. Most user interfaces would be more performant (and accessible) with native HTML styled by CSS and made functional with a minimal amount of JS. While client-side frameworks like to talk about how fast they are, they simply cannot compete with plain HTML and CSS. Your browser has a _critical rendering path_, and the most performant sites are optimized to make that path as short as possible. The [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path) are very much worth the read, but the short version is that your browser:

1. Makes an HTTP request, waits for a response and begins parsing HTML as soon as the first byte is received ([TTFB](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte))
2. Makes additional HTTP requests for resources as they are encountered (CSS, JS, fonts, images)
3. Builds the CSS Object Model
4. Combines the DOM & CSSOM into a render tree
5. Calculates the layout of the page
6. Paints pixels onto the screen ([FCP](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint))

This all happens incredibly quickly, and for sites which require the browser to fetch uncached assets, can happen before CSS, JS, font, and image files are returned to the browser ([render blocking](https://developer.mozilla.org/en-US/docs/Glossary/Render_blocking)). For those sites, the next steps happen:

7. Network requests for additional assets complete.
8. Additional CSS recieved causessteps 3-6 to re-run. This may cause the layout to shift ([CLS](https://developer.mozilla.org/en-US/docs/Glossary/CLS))
9. JavaScript recieved is parsed & executed - if the JS is large and unoptimized, this can block the main thread making your site non-interacitve to users ([TBT](https://web.dev/articles/tbt)). If the JS adds new elements to the DOM, Steps 2, and 4-6 re-run.
10. Images and fonts recieved are placed into the UI. The new font's glyphs cause all text nodes to recalculate layout. If `<img>` tags don't have `width` and `height` attributes, they also recalculate layout. In both cases, the new paint operation is likely the largest one encountered ([LCP](https://developer.mozilla.org/en-US/docs/Glossary/Largest_contentful_paint))

The issue with relying on JavaScript for rendering (as _all_ client-side frameworks have to do), is that half the work the browser does to render the web page's UI is done before it even receives the instructions on how to _actually build the UI_. Web components are no different. Every component built by developers still has to send the JavaScript instructions to the browser for how that component behaves. They only "advantage" they have is the browser natively knows the component's lifecycle and the component extends baked-in classes. React, Vue, Angular, and every other flavor of client-side framework have to _also_ ship instructions on how _their_ components should render and update.

### The shadowDOM is riddled with painpoints

One of the biggest advantages of building a component library for a specific design system is boosting ease-of-adoption. Large companies will often be running dozens of sites, all meticulously tied together under a single domain name. The marketing team will manage a site promoting products. The HR team will manage a site listing job posts. Another team will manage events and on and on. These smaller teams are able to work independently of each other, on their own timelines, with their own third-party integrations, but they all _need to look the same_. The entire organization needs to present a unified front, in the same branding and design language. A thoughtfully-crafted, centrally-maintained component library makes that a lot easier.

Instead of sharing a set of designs and asking each team to build their own solutions, we can build a set of components that will cover a wide array of use cases and common interaction patterns. This then lets our separate teams just plop a new component in their application and reap the benefits of the styles, functionality and accessibility for free.

Unfortunately, this brings along a number of negative side-effects in web components. To make a component that adopters can just drop on a page, authors will need to tuck away the styling and semantic structure of the component into the shadowDOM. In your browsers devtools that might look like this:

```HTML
<my-product product-id="abc123">

    <!-- #shadowroot -->
    <div class="component-wrapper">
      <h3>Product Title</h3>
      <div class="component-contents">
        <slot></slot>
      </div>
      <a href="/link/to/product" class="button">Learn More</a>
      <button data-chatteam>Get Support</button>
    </div>
    <!-- /#shadowroot -->

  <p>Authorable text describing the product in the context of the current page</p>
</my-product>
```

In this pattern, a component brings along the semantics of headings, links, and buttons. It also brings along a couple of `div` elements with classes that we're targeting for styles. Adopters only need to feed in some description text and a product ID for the component to go fetch the right title & URL from our company's API and to connect customers to our support team via in-site chat.

The problem, however, is shadowroots are essentially entirely separate documents. Their styles are encapsulated within the component and don't impact other parts of the page _which is good_. But they also aren't targetable by the styles on the main page, which (in my opinion) _is bad_. This inability to style elements within the shadow DOM means your component needs to bring along all your global reset styles into _every component_. The link in our sample above wont get any styles from your CSS targeting `a { ... }` or `.button { ... }`. Any of those global styles you have elsewhere on your page you need to make sure you also author in this component. Also in every other component that renders an `<a>` tag. In my experience, this leads to one of two solutions. Either, your team abandons [DRY principles](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and commits to manage duplicate styles in a bunch of different places, or your team now feels the need to make _everything_ a web component and you wind up building your own version of `<ul>`, `<table>`, and `<h2>` so you can style them.

If your company has a team offering support through a chat app, they might want to be able to connect different support teams based on the product offered. They'll write a script that looks for `document.querySelectorAll(["data-chatteam"])` to listen for click events and it won't find the elements in your component because those elements aren't a part of `document`. You can help them re-write their script by listening to _all_ click events on the page and looking at the event's `target`, but then your SEO team will want to  managing SEO and conversion rates using a 3rd-party script that has the same flaw and isn't going to change _their_ tool for _your_ app.

### Web components without shadowDOM aren't fit for design systems

The nice thing about the shadowDOM is that it's entirely _optional_. Components can opt to render their internal elements within themselves, as part of the main page document. This lets your component make use of global stylesheets and interact with other services that want to respond to events dispatched from your component, but it negates essentially all of the benefits of centrally-managing web components.

If you've built a tabbed interface component, for example, the shadowDOM version might look like this:

```html
<my-tabs>
  <my-tab title="tab 1">...</my-tab>
  <my-tab title="tab 2">...</my-tab>
  <my-tab title="tab 3">...</my-tab>
</my-tabs>
```

Adopters can focus on their content - your component will handle:

* setting up semantics of lists and buttons
* implementing the [interaction pattern needed for keyboard navigation](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/#keyboardinteraction)
* wiring up the aria-labels between tabitems and tabpanels

But if we elect to _not_ use shadowroot, our components have to make a choice. Either, they cannot render their own markup, or they cannot be authored with a subtree as the component-rendered markup will blow away the authored markup. So now our adopters have to author tabs like this:

```html
<my-tabs>
  <ul>
    <li><a href="#tabpanel-1">Tab 1</a></li>
    <li><a href="#tabpanel-2">Tab 2</a></li>
    <li><a href="#tabpanel-3">Tab 3</a></li>
  </ul>
  <div id="tabpanel-1">...</div>
  <div id="tabpanel-2">...</div>
  <div id="tabpanel-3">...</div>
</my-tabs>
```

They'll still get a lot of benefit from our component as we can:

* Add the necessary aria and role attributes
* Implement the keyboard navigation

But now our component's functionality relies more heavily on authors. Instead of just focusing on their content, they have to:

* Use the correct, semantic markup for our tab list
* Set an page-wide unique ID on every single tabpanel
* Target every singl tab to the correct tabpanel via the ID

If authors make a typo the component breaks. If the authors don't use the right markup the component is inaccessible. Adopters must take some level of responsibility for proper implementation, but as component authors, our primary goals are to _ensure an accessible and cohesive experience for end users_ and to _make that as easy as possible to implement for component adopters_. By opting out of shadow roots, we make our components more compatible with the other teams working on the site, but we sacrifice ease-of-adoption.

## Creating a solution

The dilemma then, is we've got to create a component library that can satisfy three constraints:

* It should rely on browser-native APIs for wide adoptability across teams & tech stacks
* It should be compatible with global styles & 3rd-party scripts and services
* It should be able to render component-internal markup _and_ a subtree of adopter content

Constraint one rules out client side frameworks that _aren't_ for authoring web components. Constraint two rules out the use of shadow DOM. Constraint three rules out web components with a complicated adoption pattern.

What we really want to do is build a web component system that _mimics_ the behavior of the shadow DOM, but renders entirely within the main page document. Personally, I'm most familiar with LitElement, and I really like the ergonomics of their framework. I'll be building a system on top of Lit (which adds [some additional steps to the component lifecycle](https://lit.dev/docs/components/lifecycle/#reactive-update-cycle)), but _everything_ I'm doing is entirely possible using vanilla JS that will work _indefinitely_ with _no build step_.

### Build a component base class

The first thing we need to do is build a base class. We want to make the rendering logic something that all our components will simply inherit by default. Since we're building atop the `LitElement` class and avoiding the shadowDOM, let's call it `LightElement`.

```js
import { LitElement } from 'lit';

class LightElement extends LitElement {

  createRenderRoot() {
    return this;
  }

  update(changedProperties) {
    if (!this.__authoredChildNodes) {
      this.__authoredChildNodes = Array.from(this.childNodes);
    }
    super.update(changedProperties);
  }

  firstUpdated() {
    const { __authoredChildNodes } = this;

    __authoredChildNodes?.forEach(node => {
      switch (node.nodeType) {
        case Node.TEXT_NODE:
          this.querySelector('slot:not([name])')?.appendChild(node);
          break;

        case Node.ELEMENT_NODE:
          const targetSlot = node.getAttribute('slot');
          if (targetSlot) {
            this.querySelector(`slot[name="${targetSlot}"]`)?.appendChild(node);
          } else {
            this.querySelector('slot:not([name])')?.appendChild(node);
          }
          break;

        default:
          break;
      }
    })
  }
}
```

In this class, we're overriding the default behavior of `LitElement` which is to define the component's render root as a newly created shadowroot. Instead, we'll return a reference to this instance of our class, telling the component to render everything as the subtree of this component.

When the component is connected (akin to mounting in other frameworks), our `update` method runs prior to the initial render. here, it creates a property on the class called `__authoredChildNodes` that stores a reference to the children and subtrees of this compennts. After the `update` method runs, our component will render, adding the component's internal elements to the end of the subtree. Following the first run through of `update` we encounter the `firstUpdated` method. In this method, we iterate over our `__authoredChildNodes`, and attempt to slot them into our component's defined `<slot>` elements.

By _moving_ our authored subtrees like this, we're able to maintain any reference to those elements other code may have made. If an event listener was added to an element before our component was defined and connected, that event listener remains intact.

To use this base class, we simply extend it like we would have normally used `LitElement`. The component defined below will replace the `<my-product>` example we saw above:

```js
import { property, state } from 'lit/decorators.js';

class MyProduct extends LightElement {


  @property({ attribute: 'product-id' })
  productId;

  @state()
  productDetails;

  connectedCallback() {
    const { productId } = this;

    const response = await

    fetch(`https://example.com/api/${productId}`)
    .then(response => {
      if (response.ok) {
        response.json()
        .then(data => {
          this.productDetails = data;
        });
      }
    });
  }

  render() {
    const {
      productDetails: {
        title,
        url,
      }
    } = this

    return html`
      <div class="component-wrapper">
        <h3>${title}</h3>
        <div class="component-contents">
          <slot></slot>
        </div>
        <a href="${url}" class="button">Learn More</a>
        <button data-chatteam>Get Support</button>
      </div>
    `
  }
}
```

In this component, `productId` is a [reactive property](https://lit.dev/docs/components/properties/) which gets its value from the `product-id` attribute authored by the adopter. When the component connects, it fetches data from an API and stores that information in the [state](https://lit.dev/docs/api/decorators/#state) property `productDetails`. The render method will create the markup seen there, interpolating our `title` and `url` values into that markup where needed.

### Using the new component

When an adopter wants to use this component, they'll need to author:

```html
<my-component product-id="abc123">
  <p>Product description lorem ipsum</p>
</my-component>
```

When the component definition runs, the following happens:

1. `connectedCallback` runs, starting the fetch from our product API
2. `update` runs for the first time, storing a reference to the components existing subtree
3. `render` runs, appending the returned markup to the renderRoot, which is `this` (`<my-component>`).
4. `firstUpdated` runs, iterating over our stored subtree items and placing them in the appropriate slot, if it exists.

After our complete lifecycle, our element looks like this:

```html
<my-component product-id="abc123">
  <div class="component-wrapper">
  <h3><!--?lit$3719502562$--></h3>
  <div class="component-contents">
    <slot>
      <p>Product description lorem ipsum</p>
    </slot>
  </div>
  <!--?lit$3719502562$-->
  <a href="" class="button">Learn More</a>
  <button data-chatteam>Get Support</button>
</div>
</my-component>
```

A close inspection will reveal that we don't have our product title or URL yet, and we have some strange HTML comments present. These comments are a critical part of how LitElement handles component reactivity and updates. When our API call we started completes the following happens:

1. The JSON payload is stored in `this.productDetails`
2. A new update cycle is initiated. `this.__authoredChildComponents` already exists, so we don't need to do that part again.
3. Our render method fires and _only the parts that need to be updated change_. The product title is added into the DOM and our link element has its `href` set to the URL.

Our component is now fully rendered one the page.

### Styling the new component

One feature we lost when we chose to use `this` as the components renderRoot was the ability to style the component. Since Lit defaults to using a shadowroot, its styling method uses [constructable stylesheets](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet) and then [adopting them](https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets) to the shadowroot. We'll need to mimic this behavior.

Since our stylesheets are identical across all instances of the component, we only need to create and use this style sheet once. Lit has us author component styles to a static `styles` property on our compoenent's class, then that style sheet is adopted to the shadowroot of every instance of the component. In our setup, we'll adopt the styles to the main document in conjunction with the component's definition and registration with the CustomElementRegistry. Lit handles that with the `customElement` decorator - so we can [look there](https://github.com/lit/lit/blob/d7811b34d07c5ed9a5b6ac2ef9c4003829190c92/packages/reactive-element/src/decorators/custom-element.ts#L46-L62) and copy over the parts we need. Our component can declare its styles thusly:

```js
class MyProduct extends LightElement {


  @property({ attribute: 'product-id' })
  productId;

  @state()
  productDetails;

  connectedCallback() {...}

  render() {...}

  static styles = css`
    h3 { .. }

    .component-wrapper { ... }

    .component-contents { ... }
  `
}
```
Then, by customizing the `customElement` decorator, we can add our component's styles to the global scope:

```js
export const customElement = (tagName) => (componentClass) => {
  if (Object.create(componentClass.prototype) instanceof HTMLElement ) {
    try {
      customElements.define(tagName, componentClass);

      /* Adding component styles to the global scope */
      if (componentClass.styles) {
        const stylesheet = new CSSStyleSheet();
        stylesheet.replaceSync(componentClass.styles.cssText);
        document.adoptedStyleSheets.push(stylesheet);
      }

    } catch (error) {
      console.error(error);
    }
  }
}
```

### Mimicking style encapsulation

Now that our component renders everything in the main document & can be styled, we should attempt to mimic the style encapsulation of the shadow DOM. This will allow us to author our components and style them without fear of those styles leaking into other parts of the page. For this, we'll need to look to one of the newest additions to CSS: [the `@scope` at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope).

As of the time of writting, `@scope` is available in Chrome and Safari, and is behind a feature flag in Firefox. Progress on Firefox's implemention can be tracked [here](https://bugzilla.mozilla.org/show_bug.cgi?id=1830512). This at-rule allows us to limit styles to _only_ apply to specific chunks of the DOM by defining and upper and lower boundary. For our component, that could look like this:

```css
@scope (my-component) to (slot) {
  ...
}
```

This creates a "donut scope" where elements that match `my-component *` but _not_ `my-component slot *` are styled with the contained rulesets. Shadowroot encapsulation allows us to style the containing element using [`:host`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host) as well as direct children of the containing element with [`::slotted`] (https://developer.mozilla.org/en-US/docs/Web/CSS/::slotted).

When using scope, the upper boundary (in this case our element) can be styled using the [`:scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope), but the lower boundary is _exclusive_. To be able to style "slotted" elements in our new setup, we'll need to modify our lower boundary:

```css
@scope (my-component) to (slot > * > *) {
  /* mimics :host */
  :scope {...}

  /* mimics ::slotted */
  slot > * { ... }
}
```

## Next Steps

With this new setup, we can develop a component library that is built on platform-native features, compatible with external styles & scripts, and that eases adoption by reducing the API surface of the final component. To create the most accessible & performant components, we should design them for progressive enhancement. For a list of common UI components thoughtfully designed for PE, take a look at Heydon Pickering's [inclusive-components](https://inclusive-components.design/#components).
