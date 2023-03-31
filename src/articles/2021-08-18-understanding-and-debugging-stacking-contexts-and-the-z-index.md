---
title: Understanding & Debugging Stacking Contexts (and the Z-Index)
created: 2021-08-18T00:00:00-05:00
canonical: https://www.lullabot.com/articles/understanding-debugging-stacking-contexts
type: article
---

One of the great joys of front-end development is being able to wrestle a bunch of rectangular elements into different shapes and arrangements to create beautiful, intuitive layouts.

One of the great frustrations of front-end development is the unexpected interaction and overlapping of those same elements. Struggling to arrange elements along the z-axis, which extends perpendicularly through the computer screen towards and away from the viewer, is such a shared front-end experience that an element’s z-index can sometimes be used as a frustrate-o-meter gauging the developer’s mood.

The key to maintainable z-index values is understanding that z-index values can’t always be directly compared. They’re not an absolute measurement along an imaginary ruler extending out of the viewport; rather, _they are a relative order between elements within the same stacking context_.

This means that to truly understand how two elements will overlap, we need to understand the stacking contexts in which those elements are contained.

## What is a stacking context?

A [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) is a three-dimensional conceptualization of space on a two-dimensional screen and a boundary outside of which an element’s z-index does not matter. You can think of stacking contexts as folders full of paper on a desk. Each folder can have multiple pages inside, and the orders of those pages can change, but no matter how hard you try, no pages in the bottom folder can be on the top of the entire stack. Each folder is its own stacking context, and each page’s order is its z-index. This analogy can be carried further by putting the folders into different boxes and organizing them on a shelf. Similarly, stacking contexts can be nested and reordered themselves.

![Diagram showing stacked rectangles conveying the three-dimensional, nested nature of stacking contexts](//lullabot.com/sites/default/files/styles/max_900/public/2021-08/stacking-context-diagram.png?itok=o4ctu4rh)

With no additional CSS, each webpage would have a single stacking context created by the document object in your browser’s CSS Object Model. Elements within that single stacking context will overlap with each subsequent element stacked above the first like a deck of cards with the first element child at the bottom and the last element child at the top. ([See](https://codepen.io/andy-blum/pen/JjNvZJw) [default stacking context on codepen](https://codepen.io/andy-blum/pen/JjNvZJw))

So how can we make a new stacking context? The easiest way is to position an element with either `absolute` or `relative` and to give that element a valid z-index value other than auto. We create a new stacking context by telling an element precisely how it should be positioned along the z-axis. We can then expect all of that element’s children to arrange themselves within a subset of that imaginary three-dimensional space.

Besides z-index, CSS properties that force the browser to consider how elements should be laid out and painted will create new stacking contexts. Elements that have declared _any transformation_ create a new stacking context, as all transforms are calculated and applied as a single operation. Since elements can transform along the z-axis, they create a new stacking context. Elements that have a clip-path, or mask value, or an opacity of less than 1 require the browser to compute their order in the stacking context to know what to paint below them. Elements that have their `contain` or `will-change` properties set create a new stacking context to minimize the costly operations of re-calculating the layout and re-painting the canvas.

How do I debug stacking context?
--------------------------------

As you may have anticipated, with so many different properties potentially setting stacking contexts, it can be difficult to conclude why elements may stack the way they are. Luckily, there’s the CSS Stacking Context Inspector browser extension available for [Chrome](https://chrome.google.com/webstore/detail/css-stacking-context-insp/apjeljpachdcjkgnamgppgfkmddadcki) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/css-stacking-context-inspector/).

This browser extension creates two new features in your browser’s devtools. First, a new “Stacking Contexts” panel allows you to expand each stacking context to see what is inside it. Secondly, an elements sidebar pane to view an element’s parent context, its sibling sub-contexts, and if this element creates a new stacking context, why.

If you’d like to play around with stacking contexts or try out the browser extension, I’d invite you to check out my [Stacking Context Playground](https://codepen.io/andy-blum/full/rNmdRGN) on CodePen.

Can I see a real-life example?
------------------------------

Sure! Below is a example of a front-end component with lots of overlapping elements. When viewing a page authored in a left-to-right language like English, here’s what the page band looks like:

![Screenshot of web page section featuring a video background with text, a large link, and a small play/pause button](//lullabot.com/sites/default/files/styles/max_900/public/2021-08/y9b4zhuq.png?itok=1-7jsAVG)

We have the band’s content on the left-hand side, and the right side is a big block link that launches a modal to play a video (That link has a semi-transparent background to help show the layering of the elements). This band _also_ has a background video, and we give users the option to pause the background video with the small round button in the bottom right corner.

This works as intended right now, but as soon as we set the page’s direction to right-to-left for languages like Arabic, the button gets buried and is no longer clickable!

![RTL version of web page with play/pause button hidden beneath another element](//lullabot.com/sites/default/files/styles/max_900/public/2021-08/g4hk4fjq.png?itok=hmaJ_hMm)

Your first instinct here might be to look for a z-index disparity between the LTR and RTL style rules, but there aren’t any. Something else is causing the layer order to change - so let’s open the Stacking Context Inspector in our devtools.

![Annotated screenshot pointing out features of the CSS stacking context inspector extension](//lullabot.com/sites/default/files/styles/max_900/public/2021-08/0ppijnsw.png?itok=TPUxAMNr)

When looking at the Stacking Contexts panel, the left side shows a nested list of all elements that create a new stacking context, in the order the elements appear in the DOM. At the top of this list is the document, which always creates the initial stacking context, and then nested below it are the three elements on this page that create new stacking contexts. If we were to expand each of those elements, we’d see any further nested stacking contexts. When we select a stacking context on the left-hand side, in this case `#document`, we can see child stacking contexts on the right-hand side listed in z-index order. 

Here, I can see that the background video container creates a new stacking context and is layered beneath both the written content and blocklink containers. Because this element creates a new context and is layered beneath its sibling contexts, there is no way to show the play/pause button above the content and blocklink container elements. We saw in the LTR version of the band that the button _did appear above the containers._

So why is the background wrapper suddenly creating a new stacking context?

![Annotated screenshot pointing out features of the CSS stacking context inspector extension](//lullabot.com/sites/default/files/styles/max_900/public/2021-08/f2ugjfgq.png?itok=aLoa9r7W)

By inspecting the element that’s created the stacking context we are interested in, we can then use the Stacking Contexts sidebar to get more information. In this case, “The element has one of the following properties set: transform, filter, perspective, clip-path, mask, maskImage, \[or\] maskBorder.”

Suddenly, it makes sense; this background video container is given a transform rule to mirror the video for RTL pages! Moving this transformation from the container to the actual video iframe prevents forming a new context here, and my button’s z-index rules will be scoped to the document root again!

With only a few other minor styling adjustments, I can now display a fully mirrored version of this band while maintaining the proper stacking order of the background video, the content, the blocklink, and my background video controls.

![RTL version of web page with play/pause button displaying properly over other elements](//lullabot.com/sites/default/files/styles/max_900/public/2021-08/etgwwv-w.png?itok=4LPH1VeL)

Conclusion
----------

Debugging how your page’s elements stack doesn’t have to be difficult. Understanding how new stacking contexts are formed is based on a fairly simple set of rulesets, and the [CSS Stacking Context Inspector](https://github.com/andreadev-it/stacking-contexts-inspector) tool makes it even simpler to find and sort through those contexts. Now that we can decipher exactly how and why our elements are layered, we can bring an end to the practice of setting a sky-high z-index and praying that it works. To review, stacking contexts are most commonly formed by:

* elements that have position values fixed or sticky
* elements that have position values absolute or relative with a z-index other than auto
* elements that have a non-default value in a CSS property that requires the browser to do additional layout or paint operations such as opacity, transform, clip-path, mask, or filter

For a complete description of the properties that cause new stacking contexts to form, see the [MDN page on Stacking Contexts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
