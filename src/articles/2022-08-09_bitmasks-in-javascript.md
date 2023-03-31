---
title: 'Bitmasks in JavaScript: A Computer Science Crash Course'
created: 2022-08-09T00:00:00-05:00
canonical: https://www.lullabot.com/articles/bitmasks-javascript-computer-science-crash-course
type: article
---

One of the nice things about front-end web development as a career choice is that the software and coding languages are available on every modern machine. It doesn’t matter what operating system or how powerful your machine is. HTML, CSS, and JavaScript will run _pretty well_ on it. This lets a lot of us in the industry bypass the need for formal education in computer science.

Unfortunately, this also has the side effect of leaving little gaps in our knowledge here and there, especially in strategies like bitmasking, which are seldom used in web development.

## What is a bitmask?

Bitmasking is a strategy that can be used to store multiple true-or-false values together as a single variable. Depending on the language, this can be more memory efficient and also opens up the doors to some special operators that we’ll look at later. This trick takes advantage of two simple facts:

* humans and computers look at numbers differently.
* the way computers think about numbers is identical to how they think about true and false.

Humans typically think of numbers in a decimal, or base-10, system. We have 10 unique digits of 0-9, and when we want to count beyond 9, we create new columns as needed to symbolize how many multiples of ten, one hundred, one thousand, (the powers of ten), and so on we need. Computers, on the other hand, look at numbers in a [binary or base-2 system](https://code.tutsplus.com/articles/number-systems-an-introduction-to-binary-hexadecimal-and-more--active-10848). Computers have 2 unique digits, 0 or 1, and when they need to count beyond that, they create new columns to symbolize how many multiples of 2, 4, or 8 (the powers of two) _they_ need. While we think of numbers differently, the values of integers are ultimately identical, and the computer stores all numbers as binary values. Each individual binary digit is a _bit_ of information.

| English | Base-10 | Base-2 |
|---------|---------|--------|
| Zero    | 0       | 0      |
| One     | 1       | 1      |
| Two     | 2       | 10     |
| Three   | 3       | 11     |
| Four    | 4       | 100    |
| Five    | 5       | 101    |
| Six     | 6       | 110    |
| Seven   | 7       | 111    |
| Eight   | 8       | 1000   |
| Nine    | 9       | 1001   |
| Ten     | 10      | 1010   |

When we combine the fact that all our numbers are converted to binary for storage with the fact that boolean true/false values are also stored as a 1 or 0, respectively, we can see how we could easily store a group of boolean values as a single integer. All we have to do is make sure each value we care about is stored as a separate power of two.

## Where might I see this?

A great example of this in front-end development is the [Node.compareDocumentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition) method. This method compares the relative positioning between two nodes on a page and returns a bitmask of the resulting comparison. There are six possible values of `a.compareDocumentPosition(b)`

* Disconnected - These nodes are not in the same document tree (for example, one node is in a web component’s [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM))
* Preceding - Node a follows node b in the document tree.
* Following - Node b follows node a in the document tree.
* Contains - Node a is a descendant of node b.
* Contained By - Node a is an ancestor of node b.
* Implementation Specific - This rarely means anything to us and is an artifact of how the calculation is done within the browser.

The result of our comparison could yield any combination of those 6 being true or false, a potential 64 unique combinations! The way we make sense of this, however, is to assign each value a bit. Since we have 6 values, we’ll need six bits.

| Result                  | Base-10 | Base-2 |
|-------------------------|---------|--------|
| Disconnected            | 1       | 000001 |
| Preceding               | 2       | 000010 |
| Following               | 4       | 000100 |
| Contains                | 8       | 001000 |
| Contained By            | 16      | 010000 |
| Implementation Specific | 32      | 100000 |

Now our 64 possible combinations can be numbered from 0 (all are false) to 63 (all are true). Of course, not _all_ combinations are actually possible, as nodes can neither precede _and_ follow nor contain _and_ be contained by. Nevertheless, when we examine the returned number bit-by-bit, we can tell exactly which values are true and which are false.

## How do I use this?

One great use of this is in [the focus-trapping logic in IBM’s Carbon Design System](https://github.com/carbon-design-system/carbon-for-ibm-dotcom/blob/3bb5f39f7e773ff10b8ac7a35461549ade07dd45/packages/web-components/src/components/expressive-modal/expressive-modal.ts). Since we want to prevent focus from leaving the modal and instead loop it back into the element, we have a `focusout` event listener on the modal’s container element. When focus leaves an element within the modal, the `focusout` event bubbles up, and we’re able to see the event’s target element that just lost focus, as well as the event’s `relatedTarget` element that just gained focus. We can then compare the positioning of the `relatedTarget` to the modal container, and if the “contains” value is not true, we know we need to force focus back into the modal.

![Diagram showing how focus is able to move between the elements within a modal, and is forced to wrap between the first and last focusable items when attempting to move focus out of the modal’s containing element.](/sites/default/files/styles/max_1300x1300/public/2022-08/ktprgcsa.png?itok=xWIaok0o)

While we could split out the bits and do individual comparisons, JavaScript has [_bitwise operators_](https://www.w3schools.com/js/js_bitwise.asp) designed specifically to compare two bitmasks and yield a third bitmask. These operators will compare each individual bit and then yield a 0 or a 1.

* & will evaluate to 1 when two compared bits are _both_ 1
* | will evaluate to 1 when either compared bit is 1
* ^ will evaluate to 1 when one, but not both, compared bits are 1.

Try comparing 5 and 9 with each operator in this truth table to see bitwise calculations in action:

See the Pen Bitwise Calculator by Andy Blum (@andy-blum) on CodePen.

[https://codepen.io/andy-blum/pen/ExEajpX](https://codepen.io/andy-blum/pen/ExEajpX)

Once we understand these comparison operations, we can use them within our code. We’ll start by creating the combination flags `PRECEDING` and `FOLLOWING`. These new flags combine the bitmasks provided by the `Node` object. In our use case, `PRECEDING` will indicate that the compared node’s tab order should be prior to the current node and `FOLLOWING` will indicate the opposite. We’ll also create a bitmask `WITHIN` that will be easier to read in our code later. 

```js
const PRECEDING = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
const FOLLOWING = Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY;
const WITHIN = Node.DOCUMENT_POSITION_CONTAINED_BY;
```

Next, within our `focusout` event listener, we can compare the relative positions of the event’s `target`, which just lost focus and its `relatedTarget`, which just gained focus. The code below has been modified slightly from the source to make it easier to read and has comments pointing to the breakdown below.

```js
function handleFocusOut(event) {
  const { target, relatedTarget } = event;

  // #1
  const positionToModal =
    this.compareDocumentPosition(relatedTarget) |
    (this.shadowRoot?.compareDocumentPosition(relatedTarget) || 0);

  // #2
  const positionToPrevious = target.compareDocumentPosition(relatedTarget);

  // #3
  const relatedTargetIsContained = Boolean(positionToModal & WITHIN);

  // #4
  if (!relatedTargetIsContained && !(relatedTarget === this)) {

    // #5a
    if (positionToPrevious & PRECEDING) {
      // #6a
      tryFocusElems(focusableElements as [HTMLElement], true, this);

    // #5b
    } else if (positionToPrevious & FOLLOWING) {
      // #6b
      tryFocusElems(focusableElements as [HTMLElement], false, this);
    }
  }
};
```

Let’s break it down:

1. We create a bitmask variable, `positionToModal`. This is a combination of the comparison between the modal and the `relatedTarget` as well as the modal’s shadowroot and the `relatedTarget`. The element we’ve focused to could be in either the regular document or in the Shadow DOM, so we want to compile both comparisons together.
2. We create a bitmask variable, `positionToPrevious`. This is the comparison of the target and the related target.
3. We create a boolean variable, `relatedTargetIsContained`. This compares `positionToModal` and `WITHIN`. If the element we focused on is in any way _inside our modal_, then this variable is true.
4. We check to see if our `relatedTarget` is contained within the modal and that our `relatedTarget` is not the modal itself. If that’s true, then we know our `relatedTarget` is _outside_ the modal, and we need to redirect focus.
5. We compare our `positionToPrevious` bitmask with our `PRECEDING` and `FOLLOWING`  bitmasks. If they overlap, then we know which way to try to focus, and we use our `tryFocusElems` function to move focus back into the modal.
6. The `tryFocusElems` function systematically attempts to place focus on each element in `elems`. It can run in forward or reverse order based on the second argument, and if none of the elements provided will hold focus, it falls back to the element provided in the third argument

## Conclusion

Bitmasks and bitwise operations are not strategies front-end developers are likely to reach for often, but having a solid foundation of computer science principles can help us to know when they are the right tool to use. Understanding the theory behind [how numbering systems work](https://code.tutsplus.com/articles/number-systems-an-introduction-to-binary-hexadecimal-and-more--active-10848) and [how computers can compare and manipulate masks](https://www.w3schools.com/js/js_bitwise.asp) can open up new opportunities in our code.
