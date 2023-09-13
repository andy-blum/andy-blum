---
title: Web Sustainability Guidelines
created: 2023-09-13T00:00:00-05:00
type: article
permalink: "articles/web-sustainability-guidelines/"
tags: [drupal]
summary: "The W3C has authored web sustainability guidelines! In this post I share my initial reactions and share the top 10 actions to jumpstart your sustainability journey."
---

Scrolling through my Mastodon feed this morning I came across [this post](https://drupal.community/@w3cdevs@w3c.social/111029742177368468):

<script src="//cdn.jsdelivr.net/gh/andy-blum/fed-embed@1.0.0/dist/fed-embed.min.js" async defer></script>
<blockquote>
<fed-embed data-post="https://w3c.social/@w3cdevs/111029741997150960"></fed-embed>
</blockquote>

I'm thrilled to see a set of guidelines focused on sustainability and [ESG](https://en.wikipedia.org/wiki/Environmental,_social,_and_corporate_governance)-conscious critera. The environmental, social, and governance dimensions of the tech sector and society at large have been big in the news the last few years. We just had _yet another_ [hottest summer on record](https://www.axios.com/2023/09/05/world-record-hottest-summer), unionization is [on the rise](https://www.epi.org/publication/unionization-2022/), electric vehicles are [becoming more common](https://www.iea.org/energy-system/transport/electric-vehicles) on the roads, and [the end of Affirmative Action leaves the future of corporate DEI intiatives in doubt](https://hbr.org/2023/07/what-scotuss-affirmative-action-decision-means-for-corporate-dei). Not only are these topics the big news stories right now, but they're also - unfortunately - politically charged and occasionally divisive. It's great to see an organization like the W3C ignoring the noise and calmly pushing forward a list of sustainability guidelines.

As the abstract states, these guidelines cover "a wide range of recommendations for making websites and products more sustainable", "should be seen as a starting point in a sustainability journey", with the end goal of making "web content more accessible, usable, and performant". I've taken some time to read through this document, and while I'd suggest you read it as well, here are my initial reactions:

## I'm a big fan of the addition of "Impact" and "Effort" ratings.

> These guidelines also come with both an impact and effort rating system. Unlike Web Content Accessibility Guidelines (WCAG) which uses A to AAA (or in the future, Bronze to Gold) against each guideline as a method of testing levels of conformance; WSG 1.0 uses a system of Low, Medium, or High ratings to reduce the burden for individuals to identify quick wins or minimal implementations from long-term benefits or heavy refactoring encouraging a policy of progress over perfection. ([1.2.2 Guidelines](https://w3c.github.io/sustyweb/#guidelines))

One of the hardest parts, in my opinion, about the WCAG standards is the [levels of conformance](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-levels-head) and the fact that they are a pass-or-fail benchmark. While improving the general accessibility of a site can be a progressive process, each individual success criterion is either met or missed. While this makes it easier to _advocate_ for more accessible designs, content, and interfaces, it creates a high threshold for "done". In some cases, like the world of Drupal core contribution, this can lead to issues being delayed and _perfect_ becoming the obstacle of _better_.

In contrast, the Sustainability Guidelines do not demand full compliance of all success criterion. Instead, "these guidelines are robustly built so that they can be implemented over time, in a non-specific order, and each will provide some measurable sustainability benefit". As such, "conformance is measured upon the implementation of each guideline (and its success criteria being met) across the whole website or product".

Additionally, each guideline is rated with both an "Impact" and an "Effort" rating. Impact rates a guideline's benefit on a company's sustainability goals. Effort rates how much work it will likely take to conform to the guideline. Both ratings are a simple "low", "medium", or "high".

|        | Impact                         | Effort                      |
|--------|--------------------------------|-----------------------------|
| Low    | Quick sustainability wins.     | Minimal implementation.     |
| Medium | Noticeable sustainable impact. | Some changes needed.        |
| High   | Significant long-term benefit. | Heavy refactoring required. |

&nbsp;

## I love that the guidelines are categorized by work specialty

> This specification groups guidelines within four categories (User-Experience Design, Web Development, Infrastructure, Product and Business) that overarches Web worker specialisms.

This categorization stands in contrast to the web content accessibility guidelines, which are organized into the four principles of accessibility, "perceivable, operable, understandable, and robust". It makes sense to categorize WCAG's user-centric guidelines around user-centric principles, but sustainability isn't for individuals. Digital accessibility must be a unified effort through every step of production, but different jobs have different types of inefficiencies.

Separating the sustainability guidelines into different work specialties means that the different divisions of an organization can easily progress through their sustainability jounrney independently of each other. While designers & stratgists work on their process to conceive sustainable designs, developers can overhaul their build processes, and business leaders can work on how incorporate sustainability into routine maintenance.

&nbsp;

## I wish the benefits were less abstract.

As a developer, I've spent the majority of my time reading the developer guidelines. Each one has a set of benefits I agree with, but they're all very superficial. For example, consider the 3 guidelines below and their environmental benefits:

> *3.2 Minify Your HTML, CSS, And JavaScript*
> - Environmental: Limit bandwidth consumption.

> *3.8 Use HTML Elements Correctly*
> - Environmental: Sites with bloated markup waste data, sites with broken markup could trigger memory leaks (performance issues) in apps, and following standards ensures sites will work the same across devices and platforms (reducing bugs, developer fix time, and resource waste).

> *3.7 Rigorously Assess Third-party Services*
> - Environmental: Replacing heavy tooling and third-party services with lightweight tooling reduces visitor bandwidth usage considerably, despite having to learn a new way of doing things or reducing the visibility of such information. It can significantly reduce a pages (and data you have no control over) environmental impact, especially when it comes to Scope 3 emissions.

All three of these purported benefits make sense, but I wish there was some level of quantitative data or case studies available to help organizations gauge just how much of an impact each guideline would have beyond "high", "medium", and "low". Of course, this is not the w3c's job and would require considerable effort to keep up-to-date information in the guidelines, but I think it would help team members build a case to work toward each of these goals.

&nbsp;

## W3C draft notes (like a lot the web's standards documentation) are not easily digestible.

There are 93 individual guidelines laid out over nearly 40,000 words in the Web Sustainability Guidelines. The Hemingway App grades this document as at a 12th-grade reading level. The content here is all great, but to get a holistic picture readers need deep technical knowledge across a variety of specialties combined with the patience and intrinsic motivation to read through a rather dry document in a very plain presentation.

The W3C's default presentation for working group drafts and specs is excellent when you know exactly what you're looking for and want to link to it. Initial discoverability and general readability, however, is _hard_.

This document may be one of the most approachable ones I've ever read from the W3C, but...

&nbsp;

## These Guidelines could use a sample plan of action.

Due the the sheer number of guidelines and the encyclopedic presentation, I think this document could really use a top-10 listicle or starter plan of action that organizations could use to jumpstart their own sustainability journey. In lieu of of an official one, here are what I consider to be the top 10 items to get the most bang for your buck

**#1. [2.15](https://w3c.github.io/sustyweb/#take-a-more-sustainable-approach-to-image-assets) Take a More Sustainable Approach To Image Assets _(High Impact, Low Effort)_**

Images are by far the most commonly used source of bloated bandwidth on sites. Using svg for vector graphics and modern codecs like webp for bitmaps can save potentially _megabytes_ of data _per page load_. Combining more thoughtful image types with more carefully crafted image sizes boosts site performance and sustainability.

**#2. [4.3](https://w3c.github.io/sustyweb/#compress-your-files) Compress Your Files _(High Impact, Low Effort)_**

Going hand-in-glove with 2.15 above, compressing your media assets can even further boost your site's efficiency. Even text assets like the page document itself can be compressed on-the-fly using GZIP or Brotli on modern servers.

**#3. [5.11](https://w3c.github.io/sustyweb/#follow-a-product-management-and-maintenance-strategy)	Follow A Product Management And Maintenance Strategy _(High Impact, Low Effort)_**

Success comes from the top, and business leaders need to create plans and structures for their employees to support the organization's sustainability journey. Any individual can try to implement these guidelines on their own, but the biggest impact will come when all the team members are working toward a common goal.

**#4. [5.14](https://w3c.github.io/sustyweb/#establish-if-a-digital-product-or-service-is-necessary)	Establish If A Digital Product Or Service Is Necessary _(High Impact, Low Effort)_**

Before a team starts work on a new digital product or service, ensure it offers value to visitors and doesn't duplicate existing functionality. Every site creates some level of emissions - make sure the juice is worth the squeeze.

**#5. [2.11](https://w3c.github.io/sustyweb/#avoid-manipulative-patterns) Avoid Manipulative Patterns _(High Impact, Medium Effort)_**

Using dark patterns often leads users to pages they didn't want, leading to making unnecessary requests wasting bandwidth and tasks taking longer wasting energy. On top of that, they're just _rude_.

**#6. [3.7](https://w3c.github.io/sustyweb/#rigorously-assess-third-party-services) Rigorously Assess Third-party Services _(High Impact, Medium Effort)_**

Every time you add a third-party service to a site, you open the door to privacy, performance, and sustainability issues outside of your control. Make sure that the benefits you and your users gain from each service isn't outweighed by issues you cannot fix.

**#7. [3.23](https://w3c.github.io/sustyweb/#take-advantage-of-native-features) Take Advantage Of Native Features _(Medium Impact, Low Effort)_**

The web platform brings a lot to the table and is constantly improving. With Internet Explorer firmly in the rear view mirror, all modern browsers are capable of updating at least every six months. New features reach full interoperability all the time, reducing the need for JavaScript libraries and polyfills. Make sure your sites are taking advantage of modern platform features which browser vendors have spent time to make as performant as possible.

**#8. [4.1](https://w3c.github.io/sustyweb/#choose-a-sustainable-hosting-provider) Choose A Sustainable Hosting Provider _(High Impact, Medium Effort)_**

Most digital products are structured in a one-to-many relationship. While there may be hundreds of thousands of users each with their own device, there's likely only a small handful of servers or datacenters. Choosing one that allows you to monitor your resource usage and matches your principles of sustainability could be one of the most high-impact actions available to an organization.

**#9. [5.26](https://w3c.github.io/sustyweb/#include-e-waste-right-to-repair-and-recycling-policies) Include E-waste, Right-to-repair, And Recycling Policies _(High Impact, Medium Effort)_**

If 4.1 is the most impactful decision concern your product's _operations_, 5.26 is the most impactful decision concerning its _construction_. Every designer, developer, salesperson, and business admin likely has _several_ devices, and each of those purchases are responsible for a carbon footprint. Establishing repair & recycling policies promote device longevity and reduce future emissions related to resource mining and refinement.

**#10. [4.5](https://w3c.github.io/sustyweb/#limit-usage-of-additional-environments) Limit Usage Of Additional Environments _(Medium Impact, Low Effort)_**

While the guidelines explicitly mention dev, QA, and staging environments, I think it's important to keep in mind that each employee's workstation could be considered an environment. Making sure machines are powered off, or at least hibernate, at the end of day can significantly impact an organizations footprint.

&nbsp;

## Conclusion

I'm so glad the web sustainability guidelines are here, and I'm excited to be able to use them when communicating with clients in the future to help advocate for a more sustainable product. If you, like me, want a more condensed version of these guidelines, I've scraped the docs and included a tablular version of them below (styles written with _desktop_ devices in mind - sorry mobile readers). I don't plan to keep this post updated with future versions of the guidelines, but if the markup doesn't change too much, feel free to use the [scraping script](https://gist.github.com/andy-blum/d6d196ed69d9565f24e42198c4628e35) I wrote for this task.

&nbsp;

### Sustainability Guidelines, by Discipline

<style>
  td:first-child {
    width: 25px;
  }

  table td ul,
  table td ul li {
    margin: 0;
    padding: 0;
    list-style-type: none !important;
  }

  table details {
    font-weight: 200;
  }
</style>

#### User-Experience Design

<table>
  <thead>
    <tr>
      <th># (I/E)</th>
      <th>Guideline</th>
      <th>Benefits</th>
      <th>Success Criterion</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#undertake-systemic-impacts-mapping">2.1</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Undertake Systemic Impacts Mapping</summary>There are many variables which can impact the user-experience, and a bunch of these can impact how sustainable your website will be. Attempting to identify where you can make a difference to the visitor and give them a more sustainable experience will be beneficial.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Clearly understanding a systems components can help a product team construct a plan to reduce emissions, especially from third-party services in an organization's supply chain.</details></li><li><details><summary>Privacy:</summary>Teams can better prioritize data privacy when they clearly understand a systems components, especially if they can identify potential risks to data protection.</details></li><li><details><summary>Social Equity:</summary>Teams can better prioritize social equity when they clearly understand a systems components. They must pay special attention to considerations from underrepresented groups, as these variables may not be well understood or covered in existing best practices.</details></li><li><details><summary>Accessibility:</summary>Teams can better prioritize accessibility when they clearly understand a systems components. This is because they will understand their target audience and can identify improvements to make beyond basic inclusive design practices which could provide a well-rounded experience.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>External Variables:</summary>List the negative external variables and identify where your product's sustainable impact can be diminished (systemic design).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#assess-and-research-visitor-needs">2.2</a>
      <br/>(M/H)
    </td>
    <td><details><summary>Assess And Research Visitor Needs</summary>When creating a product or service, identifying your target audience through user-research, analytics data collected using ethical anonymous methods, or feedback from visitor's is important in being able to create a customized service for them which is tailor-made for their specific preferences, adapted for any needs they may have, and particularly useful in helping a website or application evolve it's service to meet sustainability targets.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Undertaking analytics or research allows you to customize your product or service based on the needs of your visitor. The benefits of this is that emissions will be reduced due to an experience not making assumptions or developing features which are unnecessary (wasting resources), and being more specific about how you might reduce a product or service's environmental impact.</details></li><li><details><summary>Privacy:</summary>Assessing the needs of visitor's will help you comply with privacy laws like GDPR, and anonymous analytics alongside test data can also be used to improve privacy.</details></li><li><details><summary>Social Equity:</summary>Improved user-experience often means products or services work better for visitor's on older devices, in low-bandwidth environments, those with older devices, those in restrictive countries, those who speak different languages, those with other potential barriers to accessing content. This reduces emissions as less e-waste will be produced if the need for newer equipment becomes less of a priority.</details></li><li><details><summary>Accessibility:</summary>Understanding the needs of your visitor's through accessibility research will help you prioritize which inclusive design extra features need to be implemented to enhance an already accessible product or service.</details></li><li><details><summary>Performance:</summary>Identifying what visitors require through research and analytics will reduce the potential for technical debt along the product's lifespan, which will help reduce emissions as developers will spend less time building a product with unnecessary features. It can also be used to identify bottlenecks in the user-experience which are causing visitor abandonment. Fixes can be measured and tested against each other, and the benefits of improvements can result in fewer emissions.</details></li><li><details><summary>Economic:</summary>Knowing your audience has financial benefits, as they are more likely to purchase your product or service if it meets their requirements. Quantitative data analysis can identify potential cost savings by reducing data payload sizes where optimizations can be made.</details></li><li><details><summary>Conversion:</summary>If a product matches an audiences requirements, they will be likely to use it regularly and this will increase its popularity and gain trust, word of mouth, and social standing.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Identify And Define:</summary>Primary and secondary target visitors are identified, and their needs defined through quantitative or qualitative research, testing, or analytics.</details></li><li><details><summary>Visitor Constraints:</summary>Potential visitor constraints like the device age, operating system version, browser, and connection speeds are considered when designing user-experiences.</details></li><li><details><summary>Barriers And Access:</summary>The team has researched and identified whether a technical, material, or human constraint might require an adapted version of the product or service that reduces barriers or improves access to content.</details></li><li><details><summary>Barrier Removal:</summary>In the user-research, identify if some barriers should be removed (pain points or dark patterns).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#research-non-visitor-s-needs">2.3</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Research Non-visitor's Needs</summary>If you provide physical goods or services, you may also have to account for the sustainability impact of delivery services. This can often be tricky, but courier companies may provide useful tooling to help you identify emissions data for routing.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>To the extent that they can be planned for up front through verifiable research practices, interventions such as planning with suppliers can potentially significantly reduce the environmental impact of a digital product or service.</details></li><li><details><summary>Social Equity:</summary>By including other potentially marginalized groups as part of the research process, product teams can potentially head off unintended consequences or requirements these groups may have before they occur.</details></li><li><details><summary>Accessibility:</summary>By including people who might not be primary or secondary users, such as people with disabilities who may be specifically impacted by the need for such services; as key stakeholders in research, this community's specific needs can be better addressed.</details></li><li><details><summary>Economic:</summary>Up-front research on a product or service's entire ecosystem, including the wider aspects like indirect service's will help organizations more effectively manage project budgets.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Non-Human Impact:</summary>Consider non-users and other stakeholders who might be passively impacted by a digital product or service, such as neighbors accepting parcels, traffic jams due to deliveries, etc. Research their needs and understand how they might be affected.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#consider-sustainability-in-early-ideation">2.4</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Consider Sustainability In Early Ideation</summary>While some things require the use of electricity, during the early ideation phase you could consider wireframing or rapid prototyping (using paper) among other offline tools to reduce energy consumption. Even the electronic versions of these may have a lower carbon cost than committing to building a full-blown experience for each idea.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Incorporating wireframes, prototypes, and user-testing into early product design cycles improves environmental impact by helping product teams build only the features visitor's want. This reduces resource use and lowers emissions.</details></li><li><details><summary>Economic:</summary>Early rough ideation can improve financial performance, since organizations won't waste time and money building features people don't use.</details></li><li><details><summary>Conversion:</summary>Tested user-interfaces often improve conversion rates as they have been optimized to remove confusing aspected of the layout which cause friction and arrange content to optimize the fastest user-flow (which can help emissions).</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Wireframes And Prototypes:</summary>Utilize wireframes, user-testing, and rapid prototyping to quickly build consensus, reduce risk, and lower the number of resources needed to build features.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#account-for-stakeholder-issues">2.5</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Account For Stakeholder Issues</summary>Brainstorming allows you to flush out ideas before you commit to pursuing a path. Being considerate of not just your visitor's but other individuals who may be affected by your product or service (including non-humans, like the environment!) is a useful practical exercise as it may influence your decisions in how you scope your project.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>By helping key project stakeholders better understand the ecological impact of a potential digital product or service, its environmental impact can be identified and reduced throughout its life-cycle.</details></li><li><details><summary>Social Equity:</summary>For other potentially marginalized groups, such as those who speak different languages, live in low bandwidth areas, use older devices, have other barriers to accessing information, and so on, accounting for their needs early in the process will reduce the need for costly redesigns to accompany their requirements later on due to demand (or producing specialist alternative sites to cope with their functionality).</details></li><li><details><summary>Accessibility:</summary>By understanding the accessibility communities requirements in the early stages of a digital project, inclusive design can be prioritized throughout the product or services life-cycle, which will lead to efficiency savings in developer time (due to not having to retrofit accessibility) and fewer emissions from the patching process.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Human-Centered Brainstorming:</summary>In the brainstorming process, consider all stakeholders using a human-centered approach.</details></li><li><details><summary>Ecological Brainstorming:</summary>In the brainstorming process, take the planetary needs and ecological boundaries into account.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#create-a-frictionless-lightweight-experience-by-default">2.6</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Create a Frictionless Lightweight Experience By Default</summary>When providing the option to download, save, print, or access anything online, defaulting to the most lightweight, least featureful version will reduce emissions through passive browsing; with non-essential information removed from the screen either to be shown when it's required or eliminated entirely.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Streamlining a user-experience to remove barriers and non-essential items (which eliminates waste from code and content) reduces the amount of time visitor's spend on their devices trying to complete tasks or find information. This reduces the amount of energy used and lowers emissions.</details></li><li><details><summary>Privacy:</summary>Collecting less information by hiding non-essential features will be beneficial for data protection as you can reduce how much information is presented to the visitor and, in turn, how much is exposed to a minimum (if any is needed during the experience).</details></li><li><details><summary>Social Equity:</summary>Lightweight experiences work better for people with older devices, those who live in low-bandwidth environments, and so on. The benefits for lower powered devices are that fewer emissions will be generated, as the device's reduced capabilities will often have lower energy requirements.</details></li><li><details><summary>Accessibility:</summary>Intuitive, lightweight user-experiences that are easy to understand improve accessibility, especially for people with cognitive disabilities, and will benefit sustainability in terms of less confusion which could impact the time spent on websites trying to find content.</details></li><li><details><summary>Performance:</summary>Displaying less information on the screen by reducing the amount of content until it is necessary will naturally reduce bandwidth consumption over a lifecycle of a product or service, and may make an experience feel faster.</details></li><li><details><summary>Economic:</summary>Lower data payloads resulting from reducing visitor choices and simplifying an interface by reducing the amount of information can help reduce the burden of choice and convince visitor's during the decision to purchase process.</details></li><li><details><summary>Conversion:</summary>Busy websites with too much information laid out haphazardly will lead to confusion and abandonment. Following conventions and patterns with a clean, distraction-free layout will reduce churn, page abandonment and the barriers to entry.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Performance By Default:</summary>Prioritize performance optimization as a product or service's default approach.</details></li><li><details><summary>Efficient Paths:</summary>The path taken to access the service (the initial contact with the website or service) should be as efficient and as simple as possible (time required to complete an action displayed, reducing too much choice, ensuring visitor's know what's required at the start of a complex set of steps, etc).</details></li><li><details><summary>Patterns For Efficiency:</summary>Make your user-journey (when browsing an accessed website or service) as smooth as possible. User-research is key, as is building on established design patterns which people already understand.</details></li><li><details><summary>Distraction-Free Design:</summary>Visitor's can complete tasks without distractions or non-essential features getting in the way.</details></li><li><details><summary>Eliminate The Non-Essential:</summary>Visitor's see only information that is relevant to their experience, without non-essential information being displayed on the screen.</details></li><li><details><summary>User-Initiated Actionable Content:</summary>Ensure that actionable information such as pop-up or modal windows can only be initiated by the visitor.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#avoid-unnecessary-or-an-overabundance-of-assets">2.7</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Avoid Unnecessary Or An Overabundance Of Assets</summary>It's great to have a pretty looking website or application, but to ensure a sustainable design, it's important to avoid cluttering up the interface with too many visuals (which aren't necessary to the content). Keeping a clean design will reduce data transfer, and thereby emissions.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Using fewer typefaces will reduce the page size and use less resources rendering the new font on the visitor's machine for that page's instance (saving energy).</details></li><li><details><summary>Social Equity:</summary>Bloat costs bandwidth, slimming down the web matters to remain inclusive.</details></li><li><details><summary>Accessibility:</summary>Decorative design can be intrusive (if marked up incorrectly) or distracting.</details></li><li><details><summary>Performance:</summary>HTTP requests can be reduced both with fewer fonts and by creating CSS / SVG sprites if the images are unlikely to change.</details></li><li><details><summary>Conversion:</summary>A page with fewer heavy elements is more likely to load within 3 seconds.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Decorative Design:</summary>Decorative design is used only when it improves the user-experience, and unnecessary assets or ones that fail to benefit the visitor or sustainability are removed (or rendered optional and disabled by default).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#ensure-navigation-and-way-finding-is-well-structured">2.8</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Ensure Navigation And Way-finding Is Well-structured</summary>Information architecture is a central part of the Web development process, and how you structure a website ensures that people can way-find your content easily. Having appropriately marked up links within your product or service allows visitor's, search engines and social networks to identify key information quickly.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Efficient navigation with intuitive search features means visitors spend less time and energy finding what they require and accomplishing tasks. This also lowers emissions.</details></li><li><details><summary>Accessibility:</summary>Accessible navigation improves the user-experience for people with disabilities. Being able to find the correct pages quickly also helps to reduce data wastage.</details></li><li><details><summary>Performance:</summary>Efficient website structure has an impact on performance in that people can more quickly find what they require. This doesn't necessarily mean pages or assets load faster, but if appropriate way-finding mechanisms are in place, less time on-screen can result, which is beneficial for emissions.</details></li><li><details><summary>Economic:</summary>If visitor's more quickly find what they need, this could potentially reduce hosting costs if those are based on data transfer.</details></li><li><details><summary>Conversion:</summary>Good website structure and navigation can also improve conversion rates if more people find what they require. This could also be true if visitors are alerted to new content they have expressed interest in.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Navigation And Search:</summary>Provide an accessible, easy-to-use navigation menu with search features that help visitor's easily find what they need.</details></li><li><details><summary>Navigable Sitemaps:</summary>Implement an efficient (human-readable) sitemap that is organized and regularly updated helps search engines better index website content, which helps visitor's more quickly find what they are looking for.</details></li><li><details><summary>New Content:</summary>Provide a way for visitor's to find out about new content and services.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#respect-the-visitor-s-attention">2.9</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Respect The Visitor's Attention</summary>Time is precious, wasting a visitor's will cause frustration and lead to abandonment or resentment. Additionally, the more time a visitor spends in front of a screen, the more energy they utilize. As such, throwing stuff in front of the visitor vying for their attention might sound like good business (even though we know due to banner blindness it rarely works), it mostly damages the environment and dissuades the visitor.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Using pagination rather than infinite scrolling allows individuals to request data on demand rather than encouraging overconsumption, thereby reducing their carbon impact by way of using psychology to encourage healthy (and sustainable) browsing habits.</details></li><li><details><summary>Transparency:</summary>Being open and honest with visitor's over their experience and avoiding moving their attention in negative ways will lead to greater trust and the potential for repeat custom.</details></li><li><details><summary>Social Equity:</summary>By avoiding dark patterns and ensuring that the visitor's attention is focused on achieving their aims, you reduce the potential for confusion, mistakes, and lapses in judgement which could lead to consequences for them and the trust they have in your business down the road.</details></li><li><details><summary>Accessibility:</summary>Understanding your visitor's requires that you respect their needs and accommodate for the various tools and platforms they use to access your information. This improves accessibility by providing a method for them to engage with your product or service and prevents unnecessary data emissions and screen time which drains consumers device batteries.</details></li><li><details><summary>Performance:</summary>Certain attention-seeking features like notification requests or cookie banners can detract from visitor performance, as time is spent by consumers navigating through methods to close or hide the annoyances. Finding better ways of presenting the information will make an experience feel faster and reduce the barriers to access which trigger a block in the user-flow.</details></li><li><details><summary>Economic:</summary>Organizations that monetize visitor attention strive to keep it as long as possible, therefore increasing their product or service's environmental impact. Conversely, organizations that strive to streamline interactions while still meeting visitor's needs (and their own business goals) measurably reduce their product or service's environmental impact, and potentially reach new audiences.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Respecting Attention:</summary>Respect a visitor's attention by allowing them to easily control how (and when) they receive information.</details></li><li><details><summary>Avoid Distraction:</summary>Prioritizes features that don't distract people or unnecessarily lengthen the time they spend using the product or service.</details></li><li><details><summary>Avoid Attention-keeping:</summary>Avoid using infinite scroll or related attention-keeping tactics.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-recognized-design-patterns">2.10</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Use Recognized Design Patterns</summary>Visitor's can identify patterns fairly easily, and they like browsing websites and apps and feeling as if they know what they are dealing with. As such, focusing your efforts on producing a product or service that is clean and has key components in easy to recognize locations (and visuals) will allow faster user-experiences and fewer emissions.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Using easily recognized design components will reduce the amount of time visitor's spend browsing between pages, trying to identify the information they came to your resource to locate. As such, the less time visitors spend on your site, the greater the efficiency savings in terms of emissions.</details></li><li><details><summary>Accessibility:</summary>Recognizable design patterns can help people with cognitive disabilities easily understand how to perform a task. Similarly, simple layouts often improve access to information as well.</details></li><li><details><summary>Performance:</summary>Using recognized patterns which appear where visitors expect, and only when they require them may increase the perceived speed of the website or application as navigation from point-to-point will increase due to the ease of use.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Design Patterns:</summary>Provide only essential components visible at the time they are needed. Where appropriate, interfaces should deploy visual styles (patterns) that are easily recognized and used.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#avoid-manipulative-patterns">2.11</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Avoid Manipulative Patterns</summary>Manipulating the visitor into doing things you want them too is a short-term gain, long-term loss tactic tool. It's ethically bad, unsustainable and should be avoided at all costs.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Many deceptive design patterns have visitor's wasting time and energy trying to undo choices they never intended to make. Avoiding them therefore reduces energy use.</details></li><li><details><summary>Privacy:</summary>Many deceptive patterns are intentionally designed to undermine data privacy. Ensuring you comply with ethical privacy practices and avoiding such patterns will avoid potential legal conflicts. You also reduce additional data being sent among the providers of tracking and advertising data.</details></li><li><details><summary>Accessibility:</summary>Dark patterns often intentionally block or hide access to information, which especially undermines the experience of people with disabilities who use assistive technologies. By avoiding them, you will give those with accessibility needs justification to trust your brand. Furthermore, avoiding poor implementations such as overlays will prevent making any existing situations worse.</details></li><li><details><summary>Performance:</summary>Interference with the user-interface (such as removing the ability to copy text) causes friction and forces the visitor to spend more time on the page to work around the barrier put in place. This uses additional energy as they try to find a solution onsite, elsewhere, or give up entirely. Using ethical, non-disruptive coding practices will speed up interactions within your website.</details></li><li><details><summary>Economic:</summary>Ethical websites incentivize customers to whitelist your website on ad-blockers.</details></li><li><details><summary>Conversion:</summary>Avoiding dark patterns will likely result in fewer complaints. A classic example of this is the use of CAPTCHA's which can disrupt the visitor, cause accessibility issues, and reduce the legitimate use of your product or service.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Dark Patterns:</summary>Avoid what are commonly known as dark patterns, deceptive design, or unethical coding techniques, which manipulate visitor's into taking actions not necessarily in their best interest (anti-right click, no-copy, requiring an account to purchase, etc).</details></li><li><details><summary>Using Advertisements:</summary>Advertisements and sponsorships are both ethical and clearly identified with the product or service, only presenting them when they provide real economic and ethical value and don't diminish a visitor's experience.</details></li><li><details><summary>Page Tracking:</summary>Remove unused and unconsented page tracking.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#document-and-share-project-outputs">2.12</a>
      <br/>(M/H)
    </td>
    <td><details><summary>Document And Share Project Outputs</summary>Everything produced by designers, developers, writers and those involved with a project should be in an open format, well maintained, and curated in a common format (so everyone is working from the same model).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Design systems that incorporate environmental criteria can help to scale digital sustainability across the enterprise, and reduce redundancy within code, resulting in collective reduced energy use and impact.</details></li><li><details><summary>Accessibility:</summary>Building design features with accessibility baked in by default reduces the time for implementation and decreases the potential that your audience will have issues while browsing.</details></li><li><details><summary>Performance:</summary>Standardized elements across a product or service improves overall performance by reducing the time developers code (recreating the same thing). This will inherently reduce emissions considerably through the building of sustainable patterns.</details></li><li><details><summary>Economic:</summary>Familiar looking websites which can be browsed with ease are likely to suffer less bounce rates (where visitor's just give up) due to the ease of transition (unlike a unique looking website which can make navigation increasingly complex).</details></li><li><details><summary>Conversion:</summary>User-interface consistency improves visitor trust as individuals will recognize familiar components within your design and know how to utilize them, and this can improve conversion rates as it will lower the rates of abandonment.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Deliverables Reusability:</summary>The deliverables output, including documentation, are used upstream of the project and produced in ways that will allow it to be reused in subsequent projects.</details></li><li><details><summary>Deliverables Documentation:</summary>Design functionality and technical specifications are documented so that deliverables are comprehensible by the project team and transferable to the development team.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-a-design-system-to-prioritize-interface-consistency">2.13</a>
      <br/>(L/M)
    </td>
    <td><details><summary>Use A Design System To Prioritize Interface Consistency</summary>Design systems allow common components and patterns to be formalized and managed within a website or application. By using such a tool, designers and developers can avoid reinventing existing tooling and thereby reduce wasted time (and emissions).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Consistent interfaces that employ web standards require less energy and resources across the product ecosystem, as they are usually tightly optimized.</details></li><li><details><summary>Social Equity:</summary>A design system with standardized, lightweight components will improve access to information for people in low-bandwidth areas, on older devices, and so on. Design systems also will reduce the chance of biases which could affect such groups being introduced.</details></li><li><details><summary>Accessibility:</summary>A design system with accessible components will improve access to information for people with disabilities.</details></li><li><details><summary>Performance:</summary>Design Systems are built using standardized components which reduce the churn of repeat coding, thereby it reduces developer coding turnarounds and, as a byproduct, improves performance and reduces emissions during the process.</details></li><li><details><summary>Economic:</summary>Because of their use of standardized components and their avoidance of redundancy, design systems reduce costs as the development time may be reduced (even accounting for the maintenance time involved in having one).</details></li><li><details><summary>Conversion:</summary>Design Systems encourage using recognizable components throughout a design, which will help visitors identify and utilize the product or service successfully. As such, this will reduce complaints and annoyance, which can help increase customer retention.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Design System:</summary>Employ a design system based on web standards and recognizable patterns to mutualize interface components and provide a consistent experience for visitor's.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#write-with-purpose-in-an-accessible-easy-to-understand-format">2.14</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Write With Purpose, In An Accessible, Easy To Understand Format</summary>Everyone should be able to understand what you've written without wasting time staring at a screen or jumping from page-to-page looking for answers, whether they have accessibility requirements or not. This also means avoiding using technical language (without explanations) and including enough information to help direct people (and search engines) from page to page.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>When people can quickly find and comprehend the content they need to make informed decisions, they use less time and resources, which reduces energy use and lowers emissions.</details></li><li><details><summary>Social Equity:</summary>Inclusive language that avoids jargon, gendered terms, and so on can improve the user-experience for a broader audience.</details></li><li><details><summary>Accessibility:</summary>Plain-language content that can be quickly skimmed is easier to understand, especially for people with cognitive disabilities. Moreover, good document structure works better for assistive technologies such as screen readers.</details></li><li><details><summary>Performance:</summary>Good document structure improves search performance as the content will likely rank higher in search engines, which can help people more quickly find the content they need.</details></li><li><details><summary>Economic:</summary>Being an authoritative source on a subject can have a positive financial impact on your business, as it can bring income through multiple streams.</details></li><li><details><summary>Conversion:</summary>Content which is well written and authoritative will be cited by third parties and can lead to an increase in traffic.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Write Clearly:</summary>Write clearly using plain, inclusive language delivered at an easy-to-understand reading level considering accessibility and internationalization inclusions as required (for example, dyslexia).</details></li><li><details><summary>Content Formatting:</summary>Deliver content formatted in ways that support how people read online, including a clear document structure, visual hierarchy, headings, bulleted lists, line spacing, and so on.</details></li><li><details><summary>Search Engine Optimization (SEO):</summary>Prioritize SEO at early design stages and throughout a product or service's lifecycle to improve content findability.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#take-a-more-sustainable-approach-to-image-assets">2.15</a>
      <br/>(H/L)
    </td>
    <td><details><summary>Take a More Sustainable Approach To Image Assets</summary>Of all the data which comprises the largest over-the-wire transfer rates within the average website or application, images are usually those which are responsible due to their quantity and usefulness. As such, doing all you can to reduce their size and unnecessary loading will be beneficial for reducing emissions.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Image assets often make up the largest part of a web page's overall size. Compressing and delivering them in lightweight formats that improve the user-experience can significantly reduce a pages environmental emissions.</details></li><li><details><summary>Social Equity:</summary>Lightweight images work better for visitor's in low-bandwidth areas and on older devices, as long as the device can support the formats used.</details></li><li><details><summary>Accessibility:</summary>Delivering images in ways that are meaningful to visitor's improves access to information.</details></li><li><details><summary>Performance:</summary>By optimizing your images, you can significantly speed up your website in terms of HTTP requests, data transfer, and even in some cases the physical rendering effort - all of which have an impact on a visitor's energy usage and in turn their emissions.</details></li><li><details><summary>Economic:</summary>visitor's with data caps will benefit from optimized resources as they will be able to consume more content, and hosts of content will endure smaller bills due to a lower overhead.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Need For Images:</summary>Assess the need for images considering the quantity, format, and size necessary for implementation.</details></li><li><details><summary>Optimize Images:</summary>Resize, optimize and compress each image (outside the browser), offering different sizes (for each image) for different screen resolutions.</details></li><li><details><summary>Lazy Loading:</summary>Provide Lazy Loading to ensure image assets only loads when they are required.</details></li><li><details><summary>Sizing And Deactivation:</summary>Let the visitor select the display size, and provide the option to deactivate images.</details></li><li><details><summary>Management And Usage:</summary>Set up a media management and use policy to reduce the overall impact of images, with criteria for media compression and file formats.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#take-a-more-sustainable-approach-to-media-assets">2.16</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Take a More Sustainable Approach To Media Assets</summary>Video and audio heavy websites are often those which can have the highest emissions costs in terms of data transfer, storage usage, and carbon intensity for viewers who have to process the media with their devices to watch them (draining batteries). Optimizing such assets as much as possible is critical for a sustainable product or service.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Media assets like audio and video have large file sizes. Compressing and delivering them in lightweight formats that improve the user-experience will significantly reduce a page's environmental impact through reducing wasted bandwidth, among other things.</details></li><li><details><summary>Social Equity:</summary>Providing alternatives to bandwidth hungry media will assist those unable to benefit due to their environment.</details></li><li><details><summary>Accessibility:</summary>Delivering media assets in ways that convey information in an easy-to-read manner both visually and contextually (even if people are unable to for example see), will allow a wider audience to gain from your content.</details></li><li><details><summary>Performance:</summary>Catering your experience to the device, situation, and environment of the visitor will reduce wasted bandwidth (for example, sending a lower resolution for less capable devices). As such, the data savings will translate into a performance boost for those taking advantage of the reduced capabilities.</details></li><li><details><summary>Economic:</summary>Being able to avoid media entirely and rely on options such as transcripts will provide huge financial rewards for those who pay for the bandwidth they consume or serve.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Need For Media:</summary>Assess the need for video or sound usage (including only when they add visitor value), and will ban non-informative media (background media) including autoplaying functionality.</details></li><li><details><summary>Optimize Media:</summary>Choose the right media to display by compressing according to the visitor's requirements, selecting the appropriate format, ensuring it works across browsers, and avoiding embedded player plugins.</details></li><li><details><summary>Labels And Choice:</summary>Increase visitor awareness and control by informing them of the length, format, and weight of the media; allowing media deactivation, and giving a choice of resolutions; all while providing alternative resolutions and formats.</details></li><li><details><summary>Management And Usage:</summary>Set up a media management and use policy to reduce the overall impact of audio and video, with criteria for media compression and file formats.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#take-a-more-sustainable-approach-to-animation">2.17</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Take a More Sustainable Approach To Animation</summary>Animation can be both CPU and GPU intensive and have implications for accessibility. While visually appealing and useful in certain situations, care and attention should be taken when considering the use of a high emissions' technology.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Animation can be resource intensive. It can utilize both the CPU and GPU, consume a vast amount of RAM, and take a while to render. This is without considering the accessibility and usability issues it contains. By taking all of this into account, allowing the disabling or reduction of animation can be environmentally beneficial.</details></li><li><details><summary>Social Equity:</summary>Individuals from different nations and backgrounds may have differing views on the use of animation, and different devices may support different levels of technology. As such, catering to many viewpoints will ensure the widest possible audience.</details></li><li><details><summary>Accessibility:</summary>Animation which flashes can potentially trigger seizure conditions such as epilepsy; therefore it is critically important that you avoid any hazards within your designs.</details></li><li><details><summary>Performance:</summary>Compressing, removing, or otherwise reducing animation files improves performance as less syntax will exist within your product or service codebase.</details></li><li><details><summary>Economic:</summary>Subtle animation can draw the visitor's eye to useful information which could assist you to financial success, but this must be done ethically, and without overdoing it.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Need For Animation:</summary>Use animation only when it adds value to a visitor's experience, and not for decorative elements.</details></li><li><details><summary>Avoid Overburdening:</summary>Progressively display an appropriate quantity of animation so as not to overburden the visitor or diminish expected device behavior.</details></li><li><details><summary>Control Animation:</summary>Allow visitor's to start, stop, pause or otherwise control animated content.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#take-a-more-sustainable-approach-to-typefaces">2.18</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Take a More Sustainable Approach To Typefaces</summary>Since the advent of the modern web, the ability to include embedded fonts and provide a more customized experience has seen their use explode. They aren't always the most performant option (which poses emissions hazards) and come with a few issues such as Flash Of Unstyled Content (FOUC) / Flash Of Unstyled Text (FOUT) which should be addressed.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Reducing the number of fonts being loaded will reduce the amount of rendering which occurs, potentially reduce the reliance on third-party resources, and as fonts are separate from the page, it will reduce bandwidth costs - all of which have a carbon impact.</details></li><li><details><summary>Social Equity:</summary>System-level (Web Safe) fonts work across the widest range of devices and platforms, which improves access to information for those who may have tightly regulated browsing habits or limited availability.</details></li><li><details><summary>Performance:</summary>By providing Web fonts which are optimized but optional, visitor's can experience the product or service with a level of speed versus aesthetic they feel comfortable with.</details></li><li><details><summary>Economic:</summary>While pretty, custom typefaces are entirely optional on the Web and, as such, the bandwidth they consume (and the emissions this produces) are unnecessary. This added cost can be eliminated, but the benefit such fonts give in readability or personality for a website or application is worth considering.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Default Typefaces:</summary>Use standard system level (web-safe / pre-installed) fonts as much as possible.</details></li><li><details><summary>Font Optimization:</summary>Ensure the number of fonts, and the variants within typefaces (such as weight and characters) are limited within a project, using the most performant file format available.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#provide-suitable-alternatives-to-web-assets">2.19</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Provide Suitable Alternatives To Web Assets</summary>Media, images, and fonts enrich the Internet. The problem is, people may not want to watch a video, listen to an audio file, or even look at an image. By providing alternative formats to anything you embed, you ensure the widest possible audience can benefit from it (and reduced carbon output will occur as alternative text uses far less data than it's rich media alternative).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Offering low-energy alternatives to media formats reduces the amount of bandwidth required for visitor's to find the information they require.</details></li><li><details><summary>Social Equity:</summary>Not every visitor will be in a situation where they can watch a video or listen to audio; therefore it makes sense to have a plaintext alternative.</details></li><li><details><summary>Accessibility:</summary>Certain accessibility issues can prevent media from being consumed, as such it's important to offer different ways of viewing a site's content.</details></li><li><details><summary>Performance:</summary>Reducing the interactivity of a website doesn't mean a lesser experience, it can help visitor's access what they need quicker.</details></li><li><details><summary>Economic:</summary>Media is costly to produce and host, text is cheap and takes little data to download, it can help reduce your hosting costs to serve a media free setting within pages.</details></li><li><details><summary>Conversion:</summary>Text alternatives (like transcripts) to media can be indexed by search engines, this can allow your project to be found easier.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Open Formats:</summary>All proprietary file formats should also be offered in HTML for accessibility and to ensure future availability.</details></li><li><details><summary>Font Subsetting:</summary>All custom typefaces (using font-display) should be subsetted and offered as part of a font stack with a system font as backup.</details></li><li><details><summary>Alternative Text:</summary>All images should provide meaningful alternative text for screen reader users (or when images fail to load) accessibility.</details></li><li><details><summary>Audio Alternatives:</summary>Audio should provide text transcripts of conversations as an alternative to playing the media.</details></li><li><details><summary>Video Alternatives:</summary>Video should provide text transcripts (at minimum), subtitles (using WebVTT), and for accessibility best practice, offer closed captions and sign language options.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#provide-accessible-usable-minimal-web-forms">2.20</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Provide Accessible, Usable, Minimal Web Forms</summary>It's understandable that businesses want to know more about their customers, but a key part of sustainability is being ethical towards visitors and as such, the right to privacy is considered paramount. Don't demand information when it's not required and not only will this help visitors complete transactions quicker (reducing emissions), it will help with legal compliance such as GDPR.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Optimizing forms reduces the resources necessary for visitor's to complete them and products or services to process them, and in doing so, will reduce the emissions as a byproduct of avoiding using unnecessary hardware at the server or client-side.</details></li><li><details><summary>Privacy:</summary>Forms that include informed consent and helpful prompts about cookies, data collection, and so on improve data privacy.</details></li><li><details><summary>Accessibility:</summary>Ensuring your forms are well labelled, and accessible not only for those with disabilities but those using a range of different devices and inputs will allow form processing to occur with higher success rates and thereby avoid wasted attempts that potentially cost you business and cost your visitor's their time (as wasted screen time has an emissions cost as well).</details></li><li><details><summary>Economic:</summary>If visitor's can complete forms more successfully, they will suffer less frustration and website owners will get less complaints, which will be beneficial in a potential reduction in support costs and result in more visitors likely to continue with purchases on a website.</details></li><li><details><summary>Conversion:</summary>Forms that are standards-based and well constructed which consider accessibility will improve conversion rates due to visitor's being able to complete forms error free more regularly.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Form Simplicity:</summary>Assess the need for forms and reduce form content to the bare minimum necessary to meet the visitor's needs and the organization's business goals. Clearly communicate why a form is necessary, what its value proposition is, how many steps it will take to complete, and what an organization will do with collected data (informed consent).</details></li><li><details><summary>Form Functionality:</summary>Avoid auto-completion / auto-suggest if it would prove unhelpful (to conserve bandwidth) whilst allowing autofill for ease of repeat entry (including the use of helpful tooling such as password managers).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#support-non-graphic-ways-to-interact-with-content">2.21</a>
      <br/>(L/M)
    </td>
    <td><details><summary>Support Non-Graphic Ways To Interact With Content</summary>Certain visitor's such as those with visual disabilities or speech agents (like Amazon Alexa) may rely on an experience without the graphical part of an interface. As such, they potentially may use less data or may have a different carbon impact on the Web.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Aural (speech) browsers have no visual component, which reduces the environmental impact they suffer when browsing pages (as a screen is often one of the biggest drainers of a consumers' battery). Being able to look up information through such mechanisms through your product or service thereby will help reduce your overall emissions greatly.</details></li><li><details><summary>Accessibility:</summary>People who have accessibility needs and browse the Web using specialist equipment, hardware, or software will benefit from the assistance aids you have built into your product or service.</details></li><li><details><summary>Conversion:</summary>Increasing compatibility by supporting a wider range of device types, outside the most popular or well-known sort of hardware and software, will encourage new audiences to visit and potentially become customers.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Alternative Interactions:</summary>Support speech browsing and other non-graphical ways to interact with content that provide alternatives to a visual interface.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#give-useful-notifications-to-improve-the-visitor-s-journey">2.22</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Give Useful Notifications To Improve The Visitor's Journey</summary>Notifications whether through the browser or through messaging can be potentially useful, but only used in moderation. Spam and the lack of control are contributing sources of Internet emissions and as such, businesses should aim to reduce such actions.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Notifications which can inform visitor's about important events can help them avoid having to constantly refresh pages, as such it acts as a shortcut to only loading information when the information becomes available, leading to emission savings.</details></li><li><details><summary>Privacy:</summary>If used appropriately, notifications can provide personalized content to specific devices, which reduces the risk of information exposure.</details></li><li><details><summary>Accessibility:</summary>Being able to signpost individuals to information through helpful notifications or error messages will have a beneficial effect of avoiding visitor abandonment. It's especially essential to ensure that all information is presented so that such critical information doesn't discriminate based on an individual's abilities, as you could exclude a massive part of your audience.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Notification Justification:</summary>Remove non-essential notifications while justifying and reducing the practice of e-mailing or text messaging to what is strictly necessary. Useful notifications (such as alerts for new content) should be used with care and restraint.</details></li><li><details><summary>Notification Control:</summary>Let the visitor control notifications (for example through the browser, SMS, or by email) and adjust messaging preferences, and the option to unsubscribe, logout, and close account should be available and visible.</details></li><li><details><summary>Prompts And Responses:</summary>Help visitor's manage expectations by clearly explaining the result of a potential input through helpful prompts and messages that explain errors, next steps, and so on.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#reduce-the-impact-of-downloadable-or-physical-documents">2.23</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Reduce The Impact Of Downloadable Or Physical Documents</summary>Printing or downloading documents can both be a net benefit and a net cost in terms of sustainability as it can reduce repeat requests to websites, but the act of printing (especially when unoptimized) wastes valuable ink and paper.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Reducing the need to print documents or by providing a printing StyleSheet will remove the emissions from wasted paper and ink.</details></li><li><details><summary>Accessibility:</summary>Providing a range of inclusively designed downloadable documents in a variety of formats which the visitor can choose between can benefit those with accessibility needs as they can choose the best fitting download for their device.</details></li><li><details><summary>Performance:</summary>Compressing or otherwise optimizing documents improves performance, which will remove emissions from potentially wasted data traffic.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Printing Documents:</summary>Design documents to limit the printing impact. If the production of paper documents is essential, it should be designed to limit its impact to the lowest possible. Create a CSS Print stylesheet and test it with different types of content. Ensure PDF printing is encouraged over paper-based storage.</details></li><li><details><summary>Optimize Documents:</summary>Offer optimized, compressed documents in a variety of accessible file formats.</details></li><li><details><summary>Labels And Choice:</summary>Display clearly the document name, a summary, the file size, and the format, allowing the visitor a choice if possible of both the format, and the language (if not the same as the web page). Furthermore, be sure to avoid embedding the document within Web pages (provide a direct link to download or view within the browser instead).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#create-a-stakeholder-focused-testing-prototyping-policy">2.24</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Create A Stakeholder-focused Testing & Prototyping Policy</summary>The organization has policies and practices in place to incorporate stakeholder-focused testing and prototyping into its product development cycles.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Potentially less energy use and reduced emissions as visitor's complete tasks more quickly and efficiency.</details></li><li><details><summary>Economic:</summary>Organizational policies that prioritize user-research help to reduce and mitigate risks associated with building the wrong thing (incurring technical debt), which can increase costs. Additionally, iterative testing and prototyping reduces the resources needed to build new features.</details></li><li><details><summary>Conversion:</summary>Reduced visitor frustration resulting from a well researched and built interface will likely result in less visitor churn.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>New Features And Perspectives:</summary>The organization has outlined processes it uses to prototype and test new features, product ideas, and user-interface components when applicable with real users who represent various stakeholder perspectives, including people with slow connection, with disabilities, with difficulties using digital services and so on.</details></li><li><details><summary>Resourcing And Viability:</summary>The organization has appropriately resourced these processes to support its long-term product viability.</details></li><li><details><summary>Training And Onboarding:</summary>The organization has training materials to onboard new product team members to these practices.</details></li><li><details><summary>Testing And Validation:</summary>The organization regularly conducts extensive testing and user interviews to validate whether released features are meeting both business goals and visitor needs.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#conduct-regular-audits-regression-and-non-regression-tests">2.25</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Conduct Regular Audits, Regression, And Non-regression Tests</summary>Products and services at any stage of a project can suffer bugs or issues which need to be resolved. Fixing these regressions also generates additional development and environmental costs. By resolving such issues, you can reduce the chances of a visitor giving up on a session and thereby reduce the amount of wasted energy your website emits overall.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Regular service audits reduce technical debt, which improves performance and environmental sustainability. Regression analysis also supports continuous improvement and lowers resource use over time, which also reduces emissions.</details></li><li><details><summary>Security:</summary>Regular auditing of a product or service will not only identify potential sources of breaches, but it will also identify areas of improvement both in security and in privacy.</details></li><li><details><summary>Accessibility:</summary>Maintaining inclusivity over time through regular audits and testing reduces outages, improves access to information, and creates a better experience for all users, not just those with accessibility needs.</details></li><li><details><summary>Economic:</summary>Ongoing regression testing improves security, which reduces risk and its associated costs.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Regular Issue Testing:</summary>Check your codebase for bugs, identify any performance issues, and account for accessibility or security problems at either monthly or quarterly timeframes (depending on your scheduling allowance).</details></li><li><details><summary>Non-Regression Tests:</summary>Non-regression tests are implemented for all important functionality.</details></li><li><details><summary>Regression Tests:</summary>Incorporate regression testing into each release cycle to ensure that new features don't introduce bugs or otherwise conflict with existing software functionality.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#analyze-the-performance-of-the-visitor-journey">2.26</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Analyze The Performance Of The Visitor Journey</summary>Try to ethically measure how efficient a visitor's experience is, by doing so you might be able to reduce any issues they may have encountered previously and reduce the energy burden of loading unnecessary pages.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Reduced data transfer can correlate to reduced energy use and emissions, as server resources will be conserved.</details></li><li><details><summary>Performance:</summary>Faster pages that load less data improve performance, as there will be less for rendering engines within browsers to process. Additionally, as the pages are smaller, they will reach the visitor quicker based on their connection speed.</details></li><li><details><summary>Economic:</summary>Less data stored and transferred also reduces costs for those hosting content and those who own websites and applications.</details></li><li><details><summary>Conversion:</summary>Page load speed can measurably improve conversion rates, as visitors will be less likely to abandon a product or service if content appears instantaneous.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Measurement And Compliance:</summary>Only collect the data required to provide a streamlined and effective user-journey, put policies in place to ensure strict adherence, and comply to relevant accessibility policies and privacy laws, such as General Data Protection Regulation (GDPR).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#incorporate-value-testing-into-each-major-release-cycle">2.27</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Incorporate Value Testing Into Each Major Release-cycle</summary>Occasionally, you may find that features you have developed for a product or service have little to no active users or could be better implemented to bring better value. Undertaking research to identify redundancy allows you to optimize your codebase (and reduce emissions).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Feedback can help product teams make choices that improve a product or service's environmental impact, a clear example of this would be ensuring that frequently used features are more visible than lesser used features, thereby reducing the burden of findability. Which helps visitors spend less time attempting to achieve their goals.</details></li><li><details><summary>Performance:</summary>User-testing allows you to focus your product goals, ensuring that you maintain a minimum viable product and not one overburdened with complexity. In doing so, your product or service will be lightweight and run quickly.</details></li><li><details><summary>Economic:</summary>If you can avoid wasting development time building features which bring little value to the consumer, your precious resources can be better spent where it will provide a better return.</details></li><li><details><summary>Conversion:</summary>Feedback often improves conversion rates because it ensures that your product or service reflects the needs of your audience.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Usage Changes:</summary>Consider visitor feedback and monitor adoption and churn rates of product or service features, incorporating insights into future releases.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#incorporate-usability-testing-into-each-minor-release-cycle">2.28</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Incorporate Usability Testing Into Each Minor Release-cycle</summary>Researching a product or service and how it is used over time allows you to iterate and ensure the features and functionality being offered match how user-needs change over time. Doing so will help you reduce code redundancy further and reduce emissions through optimization.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>When visitor's can quickly and easily accomplish tasks or access information, this reduces the energy they burn searching for answers.</details></li><li><details><summary>Accessibility:</summary>Visitor feedback from people with disabilities can inform key improvements within the product or service, which will ensure your website or application can be used by the widest possible audience.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Usability Testing:</summary>Incorporate usability testing into product cycles and measure the impact of these tests for future releases.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#incorporate-compatibility-testing-into-each-release-cycle">2.29</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Incorporate Compatibility Testing Into Each Release-cycle</summary>Compatibility is a critical part of the sustainability mindset and should be prioritized through all products and services. If individuals wish to use older devices (or cannot upgrade due to cost), or do not wish to upgrade as frequently, it will reduce the amount of e-waste which enters the system. If something doesn't work, it's also likely to result in visitor's suffering a wasted effort or are refused access to your service (and thereby emit further emissions).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Incompatible websites and applications across the Web encourage people to purchase new devices, which has a giant impact upon the environment due to the amount of e-waste it produces. Additionally, planned obsolescence is one of the biggest contributors to e-waste on the planet. By extending the lifespan and improving digital device compatibility within your site's service plan, it can improve sustainability and slow the upgrade cycle which results from sluggish digital experiences.</details></li><li><details><summary>Social Equity:</summary>More compatible products and services that last longer helps to reduce the digital divide, which can be a key issue in cases where income inequality, infrastructure robustness, and other factors play their part (and open your work to new markets). Similarly, because progressive web applications use established web standards, they are available to more people than more cost-prohibitive closed systems (Apple App Store, Google Play, etc).</details></li><li><details><summary>Accessibility:</summary>The fourth pillar of Accessibility is robustness. By incorporating accessibility into early prototypes, it becomes a priority for project teams throughout a product's lifecycle. Broken source code can also impact screen readers and how they can read content to individuals with visual disabilities. Ensuring semantic code can provide an equal, error-free experience to all.</details></li><li><details><summary>Performance:</summary>Incompatible code has an energy cost, when it's non-standard, deprecated or doesn't work on a device it can take additional time to render as it is usually un-optimized for the environment, which will put pressure on the CPU and waste the consumer's battery. Using modern Web standards will help your website run fast in modern browsers.</details></li><li><details><summary>Economic:</summary>Product teams benefit from time savings and improved quality, organizations see cost reductions as less refactoring is required due to increased stability, and users benefit from greater trust and potentially lower product costs and maintenance fees as upgrades may not be required as frequently.</details></li><li><details><summary>Conversion:</summary>More compatible products and services that last longer can potentially increase conversion rates due to the lower rates of abandonment and a wider market audience which can use a friction free version of the product or service.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Compatibility Policy:</summary>Establish a policy for compatibility with obsolete devices and software versions, listing the supported devices brands, operating systems, and browsers (including versions).</details></li><li><details><summary>Maintaining Compatibility:</summary>Avoid planned obsolescence in software updates, striving to maintain compatibility for as long as possible and clearly communicating whether an update is evolutionary (large updates that can significantly reduce performance) or corrective (smaller updates that fix bugs or improve security).</details></li><li><details><summary>Frequent Testing:</summary>Regularly test the product or service with weak connections, old browsers, and on devices older than five years to ensure compatibility.</details></li><li><details><summary>Mobile Friendly:</summary>Prototype your interfaces using mobile-first methods to ensure progressive enhancement, content prioritization, and improved accessibility.</details></li><li><details><summary>Progressive Web Application's (PWA)'s:</summary>Consider whether a PWA will be more sustainable and compatible over a native mobile application.</details></li>
      </ul>
    </td>
  </tr>
</tbody>
</table>

#### Web Development

<table>
  <thead>
    <tr>
      <th># (I/E)</th>
      <th>Guideline</th>
      <th>Benefits</th>
      <th>Success Criterion</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#identify-relevant-technical-indicators">3.1</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Identify Relevant Technical Indicators</summary>Performance is a key part of the sustainability mindset as reductions in loading times can have a considerable impact on energy loads within CPU, GPU, RAM and hard drive caching (among other variables), as such ensuring a performant product is essential.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Limiting the number of server requests, the size of the DOM, and page size decreases a product or service's environmental impact by reducing CPU and GPU cycles, RAM usage and data transfer which benefits energy consumption, reducing the need to recharge devices as frequently.</details></li><li><details><summary>Performance:</summary>Reducing the hardware utilization as denoted above will also improve performance metrics, as a device will suffer less consumption and thrashing of limited resources.</details></li><li><details><summary>Conversion:</summary>Search engines consider web performance in their ranking data, as such a faster website may lead to a higher rank and potential better conversion rates.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Performance Goals:</summary>Set performance goals which impact the environment and performance of the service, for example HTTP requests or the amount of DOM elements which need to render.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#minify-your-html-css-and-javascript">3.2</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Minify Your HTML, CSS, And JavaScript</summary>Whitespace holds no value when it's being presented to the visitor (unless they view the source code), by using minification, valuable data savings can be made which will reduce loading times.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Limit bandwidth consumption.</details></li><li><details><summary>Performance:</summary>Reduce loading time.</details></li><li><details><summary>Conversion:</summary>Improved by reducing loading time.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Minify Code:</summary>All source code is minified upon compilation (including inline code).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-code-splitting-within-projects">3.3</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Use Code-splitting Within Projects</summary>When dealing with heavy components (such as JavaScript), the ability to modularize them into smaller pieces which can be loaded as and when required reduces the amount of redundancy and serves as a great way to make your scripts more sustainable.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Having smaller (modular) components allows for more optimized caching and loading only what code functions are required (which reduces the payload).</details></li><li><details><summary>Performance:</summary>Unused portions of a resource remain un-downloaded (potentially huge savings).</details></li><li><details><summary>Economic:</summary>Reducing the size of large files will result in lower bandwidth bills for service providers.</details></li><li><details><summary>Conversion:</summary>A faster website reduces the chance of abandonment (which is especially of concern for visitor's of handheld devices).</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Code Splitting:</summary>Breakdown bandwidth heavy components into segments that can be loaded as required.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#apply-tree-shaking-to-code">3.4</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Apply Tree Shaking To Code</summary>Often when coding, projects can accumulate clutter and functions which are no longer used (due to newer, more effective features being developed). By utilizing tree shaking techniques, all the "dead wood" will be automatically dropped upon compile, reducing a file's size.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Removal of unused code eliminates wasted bytes from the rendering tree, which means less wasted download and potential processing time.</details></li><li><details><summary>Performance:</summary>Unused code will not impact visitor's, yet it takes up space in the cache, RAM, and takes extra time to download and render. Clearing wasted space frees' visitor resources.</details></li><li><details><summary>Economic:</summary>Unused code has a maintenance cost as it might affect other code, additionally, it's something else for developers to have to deal with unnecessarily.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Remove Redundancy:</summary>Identify and eliminate unused and dead code within CSS and JavaScript.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#ensure-your-solutions-are-accessible">3.5</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Ensure Your Solutions Are Accessible</summary>Not everyone can access services equally, being sustainable is also about being accessible, fair, ethical and ensuring that your product or service doesn't discriminate. As such, ensuring your website complies with best-practices and relevant laws whilst meeting the needs of your visitor's is critical as well as good business.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Inclusive websites are often more sustainable due to the effort put into improving code quality, user-experience and limiting issues such as barriers to access that trigger waste in the service or product.</details></li><li><details><summary>Social Equity:</summary>There is a legal obligation to be accessible, and beyond this, turning away millions of potential visitor's due to a lack of care is wasteful not only in time, but in digital and physical resources (e-waste).</details></li><li><details><summary>Accessibility:</summary>Adapting a digital product or service to be accessible-by-default will improve access to information for people with disabilities. This must be managed and maintained over time, as the sustainability benefits from reduced visitor friction add to the benefits from increasing your audience.</details></li><li><details><summary>Performance:</summary>An accessible website or application will typically be written using semantic, well-written code. While you may have more code to accommodate accessibility tooling (like ARIA), well coded sites are usually less bloated, so they may have a performance edge which will reduce overall emissions.</details></li><li><details><summary>Economic:</summary>Improving the user-experience through accessibility can also improve financial performance by reducing costs (through lawsuits), building capacity, increasing sales or donations (with new audiences), and making better use of available resources.</details></li><li><details><summary>Conversion:</summary>Better equipped experiences across devices and platforms signals to visitor's that you are making a concentrated effort to meet their specific needs. This increases trust and can improve conversion rates.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Accessibility Compliance:</summary>Your website or application must conform to WCAG (at the necessary level), plus extend beyond to obey relevant laws and meet additional visitor accessibility requirements. Building inclusively means that people with permanent, temporary or situational disabilities will be able to more quickly find what they are looking for, and not have to spend extra time searching for a way to use your product or service.</details></li><li><details><summary>Enhancing For Accessibility:</summary>Enhance your website or application with Accessible Rich Internet Applications (ARIA) ONLY if applicable or necessary, and accessibility enhancing features when useful or beneficial.</details></li><li><details><summary>Electronic Inequalities:</summary>Deploy solutions which fight against electronic inequalities in products and services.</details></li><li><details><summary>Carbon Aware Design:</summary>To maximize use of renewable energy, adapt your website or service to electricity availability using carbon aware design techniques.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#avoid-code-duplication">3.6</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Avoid Code Duplication</summary>Redundancy is the enemy of sustainability. Having systems in place to ensure that everyone can work from established patterns, the website, or application remains clean and easy to use, and iteration over redesign is firmly in the mindset will help promote a sustainable practice.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>While CSS methodologies increasingly add more code to your markup, they improve maintainability (reducing development time at scale), which can reduce energy usage.</details></li><li><details><summary>Accessibility:</summary>Developers with accessibility issues may find the naming conventions used in CSS methodologies easier to work with than generic CSS selector identifiers.</details></li><li><details><summary>Performance:</summary>Avoiding repetitive code reduces waste in markup, which reduces the time sites take to download (and reduces server energy usage).</details></li><li><details><summary>Economic:</summary>An optimized codebase (that's reusable) can improve productivity and code quality.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Remove Or Simplify:</summary>Don't be afraid to remove or simplify (through rewriting for performance) your code to focus on essential features and have a cleaner, less redundant product (and codebase).</details></li><li><details><summary>Iteration Over Recreation:</summary>Improve (iterate) an existing creation rather than constantly redeveloping and redesigning products from scratch (duplication of coding effort) if possible to reduce visitor learning burden and developer impact.</details></li><li><details><summary>Organize Code Arrangement:</summary>Within CSS and JavaScript, use methodologies (like BEM) and systems like DRY to optimize the arrangement and output of your source code.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#rigorously-assess-third-party-services">3.7</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Rigorously Assess Third-party Services</summary>Whether advertising, chatbots, maps or other tooling; outsourcing your service to a third-party provider may be potentially useful in certain scenarios in reducing design or development time and redundancy (which can be a win for sustainability). Third-party services, however, come with issues, such as the lack of control over emissions, and they often can potentially suffer from latency and large file sizes which may not exist if you self-hosted or created the material.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Replacing heavy tooling and third-party services with lightweight tooling reduces visitor bandwidth usage considerably, despite having to learn a new way of doing things or reducing the visibility of such information. It can significantly reduce a pages (and data you have no control over) environmental impact, especially when it comes to Scope 3 emissions.</details></li><li><details><summary>Privacy:</summary>visitor's not interested in embedded content may identify the lack of third-party tracking as a privacy benefit, as there are fewer chances that visitor data is exploited.</details></li><li><details><summary>Accessibility:</summary>As part of rigorous quality control efforts, reducing third-party services can potentially improve accessibility by replacing it with accessible by default alternatives using built-in custom syntax which meets visitor requirements.</details></li><li><details><summary>Performance:</summary>Self-made widgets and controls work much faster than third-party content as you don't have to perform additional server requests, rendering requests and such. You only include what features you require, and this reduces the overall size of the bandwidth usage (and emissions produced).</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Assess Third-parties:</summary>Assess third-party services (including plugins, widgets, feeds, maps, carousels, etc) as early in the ideation or creation process as possible and use as few as possible to reduce the product or service's overall ecological impact, including Scope 3 emissions.</details></li><li><details><summary>Third-party Implementation:</summary>Third-party content (including plugins, widgets, feeds, maps, carousels, etc) should be placed behind a click to load delay screen (using the "import on interaction" pattern), while alternatives to automated solutions such as chatbots should be offered.</details></li><li><details><summary>Libraries And Frameworks:</summary>Large CSS libraries and JavaScript frameworks should only be used if a more performant alternative which achieves the same goal cannot be used instead.</details></li><li><details><summary>Self-Hosting:</summary>Prioritize self-hosted content over embedded content from third-party services.</details></li><li><details><summary>Avoiding Dependency:</summary>Create your own clickable icons and widgets, rather than relying on third-party services to host or allow embedding within your product or service.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-html-elements-correctly">3.8</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Use HTML Elements Correctly</summary>HTML semantics are important. They don't just play a key role in making the Web look the way it does, they have a function in accessibility, in SEO, and even in sustainability. Ensuring that you markup your content correctly and avoid cluttering your markup wastefully will reduce emissions.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Sites with bloated markup waste data, sites with broken markup could trigger memory leaks (performance issues) in apps, and following standards ensures sites will work the same across devices and platforms (reducing bugs, developer fix time, and resource waste).</details></li><li><details><summary>Accessibility:</summary>Semantic HTML increases readability for those with accessibility needs, reducing the time they waste trying to understand your content.</details></li><li><details><summary>Performance:</summary>Deprecated code isn't optimized within rendering engines, and while Web components do outperform framework components, they won't beat the native HTML elements they build upon.</details></li><li><details><summary>Economic:</summary>Inaccessible sites can lead to lawsuits, avoiding these are beneficial to any website owner.</details></li><li><details><summary>Conversion:</summary>Poorly coded sites may break features for visitor's, leading to website abandonment.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Semantic Code:</summary>Ensure content is marked up semantically using the right HTML element for the right job.</details></li><li><details><summary>Avoid Non-standard Code:</summary>Avoid using non-standard elements or attributes.</details></li><li><details><summary>Custom Code:</summary>Only use custom elements or Web Components if you cannot utilize native HTML elements or if you need tightly regulated control over the implementation of design system components.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#resolve-render-blocking-content">3.9</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Resolve Render Blocking Content</summary>The ability to work around render blocking issues is a great addition to the web. From deferring code, to lazy loading, to asynchronously loading, each has its own use-case and each can have the potential to reduce give performance benefits to a website or application.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Lazy loading videos and images ensures that they are only requested once the visitor needs them (not demanded even if they aren't viewed), thus saving bandwidth.</details></li><li><details><summary>Performance:</summary>Letting text render first makes your website feel like it's loading faster (as the remainder will appear in the background or on-demand).</details></li><li><details><summary>Economic:</summary>Unused content will not contribute to your server's bandwidth bills.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Asynchronous Code:</summary>All external assets should be deferred or set to async (unless required) to avoid FOUC (Flash Of Unstyled Content).</details></li><li><details><summary>Priority Loading:</summary>If external resources are required on load, ensure their priorities (delivery route) are set correctly.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#provide-code-based-way-finding-mechanisms">3.10</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Provide Code-based Way-finding Mechanisms</summary>Helping visitors avoid wasting their time can reduce the number of emissions from time spent in front of a screen. As such, by using existing technologies like metadata, robots files, and accessibility friendly aids within the page, improvements to the experience can be made.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>People spend a lot of time searching for the information they want, helping them get there quicker will reduce the drain on their device battery.</details></li><li><details><summary>Social Equity:</summary>Paradoxically as it may seem, the concept of getting people to spend more time on your website is not often beneficial. Visitor's often want to accomplish a task and move on, yet we put great effort into keeping them on sites (time-wasting). This is a dark pattern that has consequences for sustainability (consumption of resources) and potentially the visitor's health and wellbeing.</details></li><li><details><summary>Accessibility:</summary>Skip links and other aids can accelerate a visitor's journey through your website, reducing the system resources their tooling requires, assisting them find the content they need.</details></li><li><details><summary>Performance:</summary>Finding information quickly is a perceived performance. It may not physically reduce the data transferred, but it will help reduce the steps required to achieve a goal; thus, the time on-screen is lessened.</details></li><li><details><summary>Economic:</summary>Quick visits may encourage repeat custom when the visitor has limited spare time.</details></li><li><details><summary>Conversion:</summary>A well mapped website will index properly in search engines, leading to a good page rank.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Metadata And Microdata:</summary>Optimize your metadata and microdata for search engines and social media.</details></li><li><details><summary>Search Engines:</summary>Assist search engines, while blocking any ill intentioned robots and scripts.</details></li><li><details><summary>Accessibility Aids:</summary>Offer accessibility and usability aids to find content, such as skip links and signposts.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#validate-form-errors-and-external-input">3.11</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Validate Form Errors And External Input</summary>Entering information on a page can lead to problems. If a visitor makes a mistake along the way, it makes good sense to have systems in place to guide them through resolving the typos, confusion, and glitches that can occur which lead to abandonment and extra emissions.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Identifying errors early in the input process allows for correction before submission, saving (carbon costly) data from being sent to the server.</details></li><li><details><summary>Security:</summary>Allowing people to correct mistakes on forms before submission can avoid costly mistakes during financial transactions and spend less time being wasted on tasks.</details></li><li><details><summary>Accessibility:</summary>Assistance through form filling is beneficial as it anticipates and helps correct (rather than blame for) incorrect data entry.</details></li><li><details><summary>Performance:</summary>Being able to fill in a form while addressing issues quickly reduces the barrier to entry and thereby avoids potentially having to refill a form or waste time going back and scrolling.</details></li><li><details><summary>Economic:</summary>Shopping cart abandonment happens when errors occur, fixing issues upfront can reduce such potential issues.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Error Validation:</summary>Errors should be identified through live validation as well as upon submission.</details></li><li><details><summary>Label Elements:</summary>Required elements should be clearly identified and labeled (for the benefits of voice tools such as screen readers and virtual assistants), and optional elements (if unnecessary) removed.</details></li><li><details><summary>Allow Paste:</summary>Always allow pasting of content (including passwords) from external sources.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-metadata-correctly">3.12</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Use Metadata Correctly</summary>Search engines and social networks make use of the content within a website, by ensuring that your metadata is correctly marked up, you can reduce emissions by improving way-finding.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Adding rich metadata allows your website to be indexed correctly within search engines and social networks, allowing visitor's to find content from your website or product quicker (often without even requiring a visit), saving clicks and energy.</details></li><li><details><summary>Transparency:</summary>Used correctly, metadata can ensure clients find the correct site, and if they are just after contact details, potentially not have to even visit the page (wasting bandwidth).</details></li><li><details><summary>Performance:</summary>Visitors spend less time jumping through pages, as they will likely land on the page they wish to browse through searching (if they came via a third-party tool).</details></li><li><details><summary>Economic:</summary>Increased awareness within a search engine or social network may lead to more visitors or customers.</details></li><li><details><summary>Conversion:</summary>Recognized microdata usage can lead to a better search engine position.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Required Elements:</summary>Include the required title element, plus any optional HTML head elements (such as link).</details></li><li><details><summary>Meta Tags:</summary>Include necessary meta tag references which search engines and social networks recognize, using a recognized name scheme such as Dublin Core Metadata Initiative (DCMI), Friend Of A Friend (FOAF) or RDFa.</details></li><li><details><summary>Structured Data:</summary>Embed Microdata, Structured Data (Schema) or Microformats within your pages.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-css-preference-and-media-queries">3.13</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Use CSS Preference And Media Queries</summary>Website emissions can be generated in numerous ways, some of the latest which can be controlled are through CSS preference queries. By offering the ability to stop animation, remove colors, give a print friendly format, adjust to the available lighting or even offer a less bandwidth hungry version of a page (based on visitor demand), we can provide a less impactful journey.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>You can allow visitor's to disable animation & video (processor heavy), color (OLED and certain colors are power hungry), data heavy code (are bandwidth hungry), and reduce ink & paper usage.</details></li><li><details><summary>Social Equity:</summary>Media queries don't tell individuals how to experience the web, they follow preferences.</details></li><li><details><summary>Accessibility:</summary>Contrast, less motion, and dark mode may assist the visually impaired.</details></li><li><details><summary>Performance:</summary>Reduced data will speed up a website, a benefit to avoiding visitor's data plans.</details></li><li><details><summary>Economic:</summary>Print stylesheets can save visitor's ink and paper costs (applies to staff on Intranet).</details></li><li><details><summary>Conversion:</summary>User preferences make an interface friendlier, encouraging repeat visitor's.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>CSS Preference Queries:</summary>Account for light-level, monochrome, prefers-contrast, prefers-color-scheme, prefers-reduced-data, prefers-reduced-motion, print & scripting CSS preferences.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#develop-a-mobile-first-layout">3.14</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Develop A Mobile-first Layout</summary>Visitor's approach our products and services on a wide variety of devices these days. Ensuring that your device works on the widest range of devices and differing screen resolutions ensures that you will have a compatible website or application. As such, visitor's can actively choose to browse on devices which emit less carbon if they wish.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Mobile first and responsive design interfaces reduce energy use by improving performance and providing a streamlined experience for visitor's. Additionally, smaller devices are often more underpowered than larger devices. Using less energy to power screens (and potentially other hardware).</details></li><li><details><summary>Social Equity:</summary>Low powered devices are frequently used in developing nations, but ensuring that content works for older devices is paramount.</details></li><li><details><summary>Accessibility:</summary>Interfaces that work well across devices and platforms, including assistive technologies; improve the visitor experience, lead to fewer support requests, allow your products to be used on more devices, and encourage access while on the move.</details></li><li><details><summary>Performance:</summary>Using alongside lazy-loading and other delayed rendering techniques can boost website speed for small visual capacity devices.</details></li><li><details><summary>Economic:</summary>Ensuring that your website or application works across not only desktop devices but also smartphones and other unique screen resolutions can benefit you financially as it allows for individuals to make purchases while on the move (which can be more convenient), while potentially using little or no screen.</details></li><li><details><summary>Conversion:</summary>Products and services that work well across a wider range of platforms and devices can encourage a wider audience to use your website or application not only in one situation, but in many you might not have envisaged.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Mobile-First:</summary>Allow a website or app to work on mobile devices primarily (testing with various connection speeds), expanding to accommodate larger displays thereafter (mobile-first). It is much more effective to do the hard work to ensure that it works well on a mobile device and then scale it up to larger interfaces.</details></li><li><details><summary>Responsive Design:</summary>Utilize progressive enhancement and responsive web design to ensure that your work accommodates a device's capabilities, different screen sizes, and will not fail if it meets an unsupported technology.</details></li><li><details><summary>Alternative Browsing:</summary>Consider supporting other indirect methods of interaction such as voice (speech), code (QR, etc), reader view (browser, application, or RSS), or connected-technology (watch, appliance, transport, etc).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-beneficial-javascript-and-its-api-s">3.15</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Use Beneficial JavaScript And Its API's</summary>When new best practices or if beneficial scripting guidance exists which will improve the visitor experience, following it should be of the highest priority (only using scripts ethically should be promoted).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Removing unwatched distractions (Page Visibility API), for example, would reduce wasted data being loaded in the background (media being a bandwidth heavy resource).</details></li><li><details><summary>Privacy:</summary>Allowing for script free visitor's can protect the privacy of visitors who may live in unsafe nations.</details></li><li><details><summary>Accessibility:</summary>Having fallbacks for unavailable JavaScript allows older or less capable devices to still experience your products.</details></li><li><details><summary>Performance:</summary>Using modern APIs or low-code solutions often reduces heavy codebase usage.</details></li><li><details><summary>Economic:</summary>If a product works in more situations, you can sell it to more people without it failing.</details></li><li><details><summary>Conversion:</summary>Fallbacks for technology which might fail can lead to sales that otherwise wouldn't exist.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Beneficial JavaScript:</summary>Improve sustainability through accessible and performant code implementations.</details></li><li><details><summary>API Requests:</summary>When using an API, make sure you only call it when necessary. On the other side, make sure no unrequired data is sent by the API.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#ensure-your-scripts-are-secure">3.16</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Ensure Your Scripts Are Secure</summary>The dangers of scripting are well known, and vulnerabilities are discovered with increasing regularity. As such, it's of ethical benefit for authors to ensure all code used regularly passes security processes.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Websites that have no outstanding security issues are less likely to become a target for individuals who might exploit it (consuming vast amounts of data in the process).</details></li><li><details><summary>Security:</summary>Having a secure website can prevent personal information being exploited.</details></li><li><details><summary>Performance:</summary>A secure website is less likely to have its infrastructure breached, which could lead to vast amounts of data being stolen, corrupted or destroyed.</details></li><li><details><summary>Economic:</summary>Preventing security issues will help your project and visitors avoid financial crime.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Script Security:</summary>Check the code for vulnerabilities, exploits, header issues, and code injection.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#manage-dependencies-appropriately">3.17</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Manage Dependencies Appropriately</summary>While JavaScript may not cause the most website bloat, it can cause very high emissions in terms of CPU load due to the rendering process, thereby it makes sense to consider the use of dependancies and third-party code carefully.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Developers machines do not need to waste energy downloading packages that are not needed.</details></li><li><details><summary>Security:</summary>Third-party code can contain bugs and security issues. Keeping packages up-to-date and using fewer third-party libraries reduces the likelihood of security flaws.</details></li><li><details><summary>Performance:</summary>Reduction in client-side JavaScript normally results in faster websites.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Dependency Management:</summary>Prevent developers from downloading and installing JavaScript libraries to run locally (client-side) when they are not needed by checking for unused dependencies and uninstalling those that aren't needed and removing them from your package.json file.</details></li><li><details><summary>Dependency Necessity:</summary>Reduce the amount of JavaScript that has to be downloaded and parsed by the browser by only using libraries where necessary. Consider whether you can use a native JavaScript API instead. Check the package size using a tool like Bundlephobia, and whether individual modules can be installed and imported rather than the whole library.</details></li><li><details><summary>Dependency Updates:</summary>Regularly check dependencies and keep them up-to-date.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#include-files-that-are-automatically-expected">3.18</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Include Files That Are Automatically Expected</summary>Search engines and browsers regularly examine websites, requesting specific files by default (they expect them to exist). If the files don't exist, this will lead to potential errors and emissions being caused when they could be created, especially as the files offer SEO, user-experience and other benefits to visitor's.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Search engines or browsers request certain files by default, ensuring they are in-place will reduce loading errors, and may provide efficiency enhancements in how visitor's find or interact with a site.</details></li><li><details><summary>Accessibility:</summary>OpenSearch enables the browser's default search box rather than a custom solution to be integrated with your website search, which may aid accessibility.</details></li><li><details><summary>Performance:</summary>Files that are expected will produce HTTP requests, ensuring they are met will satisfy the products making them and potentially reduce the requests once they are discovered.</details></li><li><details><summary>Economic:</summary>Robots and Sitemap files can be utilized by search engines to help make your website be more findable, this could lead to more visitors and potentially more customers as a result.</details></li><li><details><summary>Conversion:</summary>Robots can be used to target specific search engines, helping to ensure content is correctly indexed to get a good placement so that visitors can find you easily.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Expected File Formats:</summary>Take advantage of the favicon.ico, robots.txt, opensearch.xml, site.webmanifest and sitemap.xml documents.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-plaintext-formats-when-appropriate">3.19</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Use Plaintext Formats When Appropriate</summary>There are several small assets which can be included within a website, conferring a range of benefits upon the website or application that utilizes them. They each have a low carbon footprint, so while they do create emissions, it's worth including them for the benefits they provide.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Plaintext requires no rendering. If visitor's (or search engines) know about these useful files (like carbon.txt) they can load quicker and with less CPU / GPU impact than any HTML website.</details></li><li><details><summary>Transparency:</summary>The humans file provides credit to people involved in a site's creation, and security offers critical points of contact if an issue is discovered. Both are valuable additions to a project.</details></li><li><details><summary>Performance:</summary>Plaintext files contain no links, no markup and have no imprint. Putting credits (for example) in such a file will reduce data transfer and have a lower rendering carbon footprint.</details></li><li><details><summary>Economic:</summary>The ads.txt file is part of a scheme to reduce advertising fraud, it could be useful.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Beneficial File Formats:</summary>Utilize standards such as ads.txt, carbon.txt, humans.txt, security.txt and robots.txt.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#avoid-using-deprecated-or-proprietary-code">3.20</a>
      <br/>(L/M)
    </td>
    <td><details><summary>Avoid Using Deprecated Or Proprietary Code</summary>The Web is full of dead, often proprietary code, created using standards which have been superseded or by groups which aren't recognized. By following recognized coding standards, you ensure that your code will be rendered properly by browsers (and reduce the potential for added emissions occurring from unmaintained rendering processes).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Deprecated standards will not be optimized or supported by future browsers, which could lead to broken functionality or a slow experience, wasting time and visitor resources.</details></li><li><details><summary>Security:</summary>Old code can potentially be exploited if security issues arise (and browsers stop supporting the features). Ensuring you maintain standards should be a part of your processes.</details></li><li><details><summary>Accessibility:</summary>Old web standards often have poor accessibility support in screen readers, avoiding them will help to provide a semantic experience that works well for everyone.</details></li><li><details><summary>Performance:</summary>Modern web standards are highly optimized, avoiding deprecated or less efficient standards will increase the longevity of your product and reduce the need for a carbon intensive redesign.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Deprecated Code:</summary>Upgrading or avoiding deprecated formats is important, the only exception being if consumer support demands maintaining older standards to provide a functional product.</details></li><li><details><summary>Outdated Code:</summary>Don't use an older standard if a newer recommendation will do the same job as or more effectively.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#align-technical-requirements-with-sustainability-goals">3.21</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Align Technical Requirements With Sustainability Goals</summary>Every product or service is different, and each will require a different set of tooling to accomplish the most sustainable result. Deciding whether to go with a bulky framework or a Content Management System (CMS) takes careful planning based on client or service requirements.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Carefully considering long-term technology implications and taking the time to ensure they are optimized and efficiently utilized can help a team measurably reduce a product or service's environmental impact over time, which will reduce overall emissions.</details></li><li><details><summary>Security:</summary>Maintaining a software product over time and ensuring that the only third-party products you use are critical, and your service improves security.</details></li><li><details><summary>Privacy:</summary>Prioritizing security and user privacy helps an organization better comply with current and emerging related legislation.</details></li><li><details><summary>Accessibility:</summary>Making assistive technologies a core part of project specifications from the beginning and throughout a product or service's life-cycle improves access to information for people with disabilities.</details></li><li><details><summary>Performance:</summary>Avoiding unnecessary complexity in your infrastructure will increase the speed at which developers can work, but also reduce the overhead load of website performance, increasing the benefits relating to emission reduction.</details></li><li><details><summary>Economic:</summary>Avoiding tooling which may be overburdening the user-experience may have financial savings, especially if certain tooling has maintenance costs or fees for software usage.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Identify Requirements:</summary>List (and choose carefully) the requirements of the product or service. A simpler technological implementation may use more human resources, but could have a smaller footprint. A prebuilt solution may use more system resources (and thereby produce more emissions upon render) but have a faster build-time (emitting less carbon during development).</details></li><li><details><summary>Optimized Methodology:</summary>As a general rule, coding from scratch is the best performing methodology (though if an existing solution is actively maintained, it may be better optimized than what you could produce). Therefore, prefer native components and file systems to a WYSIWYG editor or heavy framework, and be considerate of the impact of third-party solutions.</details></li><li><details><summary>Expandability Considerations:</summary>Plugins, extensions, and themes have been carefully reviewed and selected to maximize interoperability, accessibility, and performance. They are regularly audited over time to ensure continued compatibility.</details></li><li><details><summary>Interface Impact:</summary>Make sure all the components of the user-interface are the subject of special attention in terms of its sustainability impact, while respecting accessibility and the performance of such components.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-the-latest-stable-language-version">3.22</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Use The Latest Stable Language Version</summary>Languages evolve regularly, and it's important for security and performance reasons to keep on-top of the technology stack you are using.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Using the latest language version may improve efficiency and reduce data center energy consumption. Verify benefits are worthwhile before major build upgrades.</details></li><li><details><summary>Security:</summary>Often, older versions may have security issues which could expose your website or app (and thereby your visitor's) to harm. Maintaining an upgrade schedule is good for security.</details></li><li><details><summary>Accessibility:</summary>Using the latest language version may improve the page load speed.</details></li><li><details><summary>Performance:</summary>Language version updates are usually coupled with performance improvements.</details></li><li><details><summary>Economic:</summary>Using the latest and more performant language version could be helpful for hosting companies to reduce their costs. That could be beneficial for the company and the visitor.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Versioning:</summary>Use the latest build of your chosen syntax language and its coupled framework.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#take-advantage-of-native-features">3.23</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Take Advantage Of Native Features</summary>Ensuring that your code is free of redundancy by using pre-existing functionality provided by the web browser is important as it will help you to reduce the amount of time wasted, re-creating the same components, this offers obvious sustainability benefits in terms of time in front of the screen.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Avoiding repetition of pre-existing features improves efficiency, which ultimately will lead to less redundancy (and wasted data sent across the wire).</details></li><li><details><summary>Performance:</summary>Native features will have been well optimized, it's unlikely a custom component will match this, therefore a native function will not only load quicker but will use less resources.</details></li><li><details><summary>Economic:</summary>Existing features don't require additional development time, so is a time saver.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Native Over Custom:</summary>Use native functions, API's and features over writing your own.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#run-fewer-simpler-queries-as-possible">3.24</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Run Fewer, Simpler Queries As Possible</summary>Making multiple requests whether HTTP or within a database has a carbon cost as infrastructure has to send that information back and forth. As such, managing how you store and use data locally for a visitor will help reduce wasted cycles.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Doing so, the database is accessed only once, and we can keep the value in RAM for subsequent processing.</details></li><li><details><summary>Performance:</summary>Holding the data locally rather than remotely, you can avoid waiting for an additional HTTP request to occur to process the string.</details></li><li><details><summary>Economic:</summary>Rather than pushing multiple additional demands to the server (which could lead to stress failures and lost business), an optimized codebase can reduce bandwidth overheads.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Database Queries:</summary>If you need information that is stored in a database, and you require it more than once in your code, access the database only once, store the data in a variable for subsequent processing.</details></li>
      </ul>
    </td>
  </tr>
</tbody>
</table>

#### Hosting, Infrastructure And Systems

<table>
  <thead>
    <tr>
      <th># (I/E)</th>
      <th>Guideline</th>
      <th>Benefits</th>
      <th>Success Criterion</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#choose-a-sustainable-hosting-provider">4.1</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Choose A Sustainable Hosting Provider</summary>In addition to reducing the environmental impacts of a website, choose a hosting service that mitigates remaining impacts. To make sure of this, there are many criteria to look for.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Helps in detecting overconsumption, reduces the environmental impacts of equipment (such as embodied carbon, for instance), and reduces the environmental impacts related to the production of consumed electricity.</details></li><li><details><summary>Economic:</summary>Reduces the quantity of equipment needed to be purchased.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Monitor Metrics:</summary>To assess the environmental impacts of hosting and detect overconsumption, some indicators should be monitored: energy / water usage, CPU / Memory usage, allocation of servers and CPU cores, etc. These indicators could be used to calculate metrics directly related to environmental impacts, such as Power Usage Effectiveness (PUE), Water Usage Effectiveness (WUE) and Carbon Usage Effectiveness (CUE). They could be displayed to visitor's for transparency and monitoring reasons.</details></li><li><details><summary>Equipment Longevity:</summary>Manage equipment responsibly by keeping them as long as possible, using them as efficiently as possible, making sure they are certified, and purchasing long-lifespan products.</details></li><li><details><summary>Recycling Waste:</summary>Recover, recycle, and upcycle waste including equipment.</details></li><li><details><summary>Renewable Electricity:</summary>Electricity comes entirely from sources with the lowest possible carbon intensity (ideally generated by wind or solar rather than from non-renewable sources). For example, Renewable Energy Credits (RECs) can help verify the source, or, ideally, prove that electricity comes directly from renewable sources.</details></li><li><details><summary>Remaining Emissions:</summary>Compensate remaining emissions, keeping in mind that the priority should be to avoid then reduce them and only compensate for them if they cannot be avoided. Carbon credits may not be sustainable, therefore the effectiveness of an offset solution must be verified, shown to be both environmentally viable and sustainable, and part of a longer-term strategy to eliminate emissions entirely from a chain, benefitting the wider ecosystem.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#optimize-browser-caching">4.2</a>
      <br/>(H/H)
    </td>
    <td><details><summary>Optimize Browser Caching</summary>Browser caching reduces the requirement for files to need to be constantly reloaded from the server, and in certain situations it can even allow for files to be viewed offline (or in the case of a reverse-proxy, send immediate recurring requests without additional calculation or computation from the server). As such, this will have emissions savings and performance benefits (for instance by greatly reducing Time-To-First-Byte).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Unmodified files don't need to constantly be redownloaded (saving bandwidth and energy, and server-side caching reduces the amount of computing resources required (as fewer HTTP requests will likely be submitted), which can lead to reduced emissions.</details></li><li><details><summary>Social Equity:</summary>Allows websites to be functional in regions where no or intermittent Internet connectivity is available.</details></li><li><details><summary>Performance:</summary>Being selective over cached content balances faster reloads over the need to request new pages, which means that visitors may experience less latency due to data being held for repeat requests.</details></li><li><details><summary>Economic:</summary>Reduced data transfer allows for savings for individuals on a monitored data plan and infrastructure cost for the provider.</details></li><li><details><summary>Conversion:</summary>Caching increases repeat visitor page-load speeds (a customer benefit).</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Server-side Caching:</summary>If using a CMS, install an applicable plugin to enable on-the-fly server-side caching. Otherwise, use the provided server configuration files to include and tweak the file-type cache expiration using expires, bfcache or cache-control HTTP header.</details></li><li><details><summary>Offline Access:</summary>Client-side JavaScript uses a combination of ServiceWorkers, WebWorkers, storage Application Programming Interfaces (API's), or cookies (if necessary) to reduce friction in the user-journey. For example, through the use of a PWA (Progressive Web Application) to ensure that an offline version is available and accessible at all times to reduce inequality and improve accessibility.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#compress-your-files">4.3</a>
      <br/>(H/L)
    </td>
    <td><details><summary>Compress Your Files</summary>Every file will take up a certain amount of room on a server's hard drive, and this data will need to be sent across-the-wire to each visitor. Doing so will consume resources, but by using compression algorithms you can shrink each file to make its journey less ecologically impactful.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Reduced data consumption and energy consumption (with a slight increase in visitor CPU decompression with server-side techniques).</details></li><li><details><summary>Social Equity:</summary>Reduced reliance on a high-speed connection (which in many locations is unavailable).</details></li><li><details><summary>Accessibility:</summary>People with accessibility needs may be lower income and thereby unable to afford either a high speed or the high cost of data plans found on cellular networks and satellite providers.</details></li><li><details><summary>Performance:</summary>Often the largest files on a website, compressed media served correctly will reduce the payload to the visitor and use less energy to transmit over the wire.</details></li><li><details><summary>Economic:</summary>Reduced data transfer allows for savings for individuals on a monitored data plan.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Server-side Compression:</summary>If using a CMS, install an applicable plugin to enable on-the-fly server-side compression, such as Brotli or GZIP. Otherwise, use the provided server configuration files to include and tweak the performance related features to the requirements.</details></li><li><details><summary>Media Compression:</summary>Compress your various images, fonts, audio, and video; by reducing the quality and offering different resolutions / dimensions (sizes) before uploading to a server or content management system.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-error-pages-and-redirects-carefully">4.4</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Use Error Pages And Redirects Carefully</summary>Navigation errors lead to mistakes, which lead to visitor's wasting time trying to resolve them, or abandoning a website altogether. Anything that can be done to interject, predict and way-find around potential problems will reduce emissions over time.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>While errors and redirects should be avoided, it's not likely possible. Therefore, having the page's visitor's encounter optimized will hopefully reduce their frustration (and thereby their time on screen trying to pick a new route - or worse, giving up).</details></li><li><details><summary>Transparency:</summary>Problems can occur, having failsafe mechanisms in place avoids the visitor being blamed, and it gives them a direction to move once they encounter the error.</details></li><li><details><summary>Accessibility:</summary>Error pages matter, they can help lost individuals find their path, providing useful navigation and appropriate signage can reduce the loss of abandonment.</details></li><li><details><summary>Performance:</summary>Redirects used appropriately can help visitor's find a resource that has been moved quickly.</details></li><li><details><summary>Conversion:</summary>Visitors are less likely to abandon a website if they can find an instant solution.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Error Pages:</summary>Maintain sites by ensuring links are correct, and if errors occur, provide suitable way-finding within optimized pages for each error type to ensure resources can be identified to help a visitor to complete the task they started.</details></li><li><details><summary>Redirection:</summary>Redirect websites, subdomains, and pages only when necessary. Proactively seek broken or outdated links and fix them. A redirect or search will often help reduce the number of pages a visitor needs to load.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#limit-usage-of-additional-environments">4.5</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Limit Usage Of Additional Environments</summary>Decommission or switch off additional environments, such as testing / Quality Assurance QA) / re-production and other such environments when they are not useful.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Avoids consuming resources for unused services.</details></li><li><details><summary>Economic:</summary>Unused services should not be paid for, resulting in savings.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Unused Environments:</summary>Ensure no unused environment is available, balancing the cost of deploying an environment with the cost of keeping it online while unused.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#automate-to-fit-the-needs">4.6</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Automate To Fit The Needs</summary>Any tasks, especially repetitive, that can be automated should be automated (compilation, deployment, tests, etc.) to reduce time at the computer being wasted by people.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>These practices can reduce the resources necessary to execute tasks, which can also result in reduced emissions.</details></li><li><details><summary>Operations:</summary>When coupled with upskilling and cross-training, automation can also improve team performance and operational efficiency.</details></li><li><details><summary>Economic:</summary>Automation can help reduce organizational costs.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Automate Tasks:</summary>Every recurring task, such as deployment, testing, or compilation, can be run automatically, as is recommended by continuous integration / continuous delivery best practices.</details></li><li><details><summary>Necessitate Tasks:</summary>To reduce wasted processing cycles, every automated task is only run when needed.</details></li><li><details><summary>Automated Scaling:</summary>Use automated scaling infrastructure to automatically increase the capacity of the web server and implement buffering / throttling to respond to visitor demand.</details></li><li><details><summary>Security Tooling:</summary>Web browsing from bots has been steadily increasing in recent years. As such, it is a growing concern for security, performance, and sustainability. Use security tools that automatically block bad actors and minimize bad behavior. This results in substantially less load on the server, less logs, less data, less effect due to compromise and more. The result of compromised websites is a large increase in HTTP, email and other traffic as malicious code attempts to infiltrate other resources and exfiltrate data. Compromised websites are typically identified by anomalous patterned behavior.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#frequency-for-refresh-is-relevant-to-visitor-needs">4.7</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Frequency For Refresh Is Relevant To Visitor Needs</summary>Only send data from the server when the visitor needs it. As much as possible, you can rely on client-side or server-side cache and client-side / local storage. Rather than refreshing data on a given frequency, it might be up to the visitor to manually ask for a refresh.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Caching reduces energy consumption for both servers and end-user devices. This reduces emissions.</details></li><li><details><summary>Economic:</summary>Caching can potentially reduce costs by reducing the amount of data transmitted over the network.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Refresh Frequency:</summary>Frequency for refresh (of both the cache, locally stored data, and the page) is defined depending on visitor needs.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#be-mindful-of-duplicate-data">4.8</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Be Mindful Of Duplicate Data.</summary>For security reasons and in accordance with an SLA (Service-Level Agreement), it is often recommended to duplicate data to make sure it remains available if a problem occurs. This should be balanced with the cost of such duplication. Not all data is critical and, rather than overcompensating with multiple saves, duplication should be designed with efficiency in mind.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Limiting redundancy reduces the amount of consumed resources.</details></li><li><details><summary>Economic:</summary>Limiting redundancy can reduce the induced storage costs.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Data Backups:</summary>Backups of system and user data are both incremental and secure.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#enable-asynchronous-processing-and-communication">4.9</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Enable Asynchronous Processing And Communication</summary>Depending on carbon-intensity, some processes and communications should be delayed and sometimes batched. This could also be a way to reduce the workload on a server or VM. In such cases, visitor's should be warned that the process is asynchronous and notified when it is over.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>The potential reduction in a workload by running processes in batches could help reduce the intensity of peak hardware thrashing, thereby reducing the energy requirements and potentially even the water requirements for cooling (due to excess heat generation).</details></li><li><details><summary>Social Equity:</summary>Leaving non-critical processes to run during quieter periods may reduce the opportunity for sites or services to experience downtime or slowdown due to being overburdened.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Batch Processing:</summary>By default, non-critical processes and communications are batched and launched only when carbon-intensity is under a given threshold.</details></li><li><details><summary>Protocol Usage:</summary>Ensure the communication protocols are relevant to the visitor needs and data transferred. Avoid using insecure protocols (HTTP, FTP), and prioritize more efficient and privacy-aware data routes for visitor's (HTTPS, SSH).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-edge-computing">4.10</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Use Edge Computing</summary>Edge computing can help optimize energy usage by reducing the amount of traffic transferred over the internet.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Reduces the amount of time spent in front of the device as the delivery of assets can occur quicker (due to servers being closer to the device), which in turn will drain the consumers' device battery less.</details></li><li><details><summary>Social Equity:</summary>Benefits visitor's in normally underserved geographies and economies, or from disadvantaged backgrounds, as content may be available in a region closer to their location.</details></li><li><details><summary>Performance:</summary>visitor's experience less latency due to the distance between them and the server is reduced.</details></li><li><details><summary>Economic:</summary>Content delivery networks work on economies of scale, and their data transfer rates are often cheaper than those of many hosting providers.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Content Delivery Network's (CDN's):</summary>When building for a globally distributed audience, use a CDN to store and serve simple read-only, pre-generated resources in a fast and efficient manner. Although they definitely can increase performance, it is also another layer of infrastructure which needs to be considered for sustainability.</details></li><li><details><summary>Sustainability Commitment:</summary>Check the CDN to verify that it provides a commitment to sustainability.</details></li><li><details><summary>Local Servers:</summary>Choose a hosting provider with servers located close to the visitor.</details></li><li><details><summary>Avoid Dynamic Resources:</summary>Avoid using the service to host dynamic resources (such as JavaScript) as due to cache partitioning, any benefits are negated by weaker performance, and the potential introduction of security and privacy issues.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-the-lowest-infrastructure-tier-meeting-business-requirements">4.11</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Use The Lowest Infrastructure Tier Meeting Business Requirements</summary>Select infrastructure with minimal specifications meeting business requirements of performance, availability, etc.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Reduces the size and intensity of the compute.</details></li><li><details><summary>Economic:</summary>The right sized compute will typically be the cheapest solution.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Lowest Requirements:</summary>Select infrastructure elements with the lowest requirements tier, meeting your service-level agreements. Avoid over-provisioning multi-datacenter, multi-zone or distributed deployments if standalone instances meet the requirements. Also avoid provisioning infrastructure that will be under-utilized by provisioning for established average loads, ensuring reasonable resource utilization and autoscaling occurs as needed. Avoid provisioning for peak loads.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#store-data-according-to-visitor-needs">4.12</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Store Data According To Visitor Needs</summary>Optimize storage of data according to what is most important, relevant and required in service to visitor's. This will help to avoid unnecessary storage of data that may not be useful or valuable, which will reduce required infrastructure, power, and data transfer.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Reduced storage usage results in reduced storage requirements.</details></li><li><details><summary>Security:</summary>Reduced storage of personal information reduces the risk of compromise.</details></li><li><details><summary>Economic:</summary>Reduced storage usage will result in reduced price.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Reduce Redundancy:</summary>Remove unnecessary and redundant data from your servers, whether it is single-use (dark data) or abandoned.</details></li><li><details><summary>Expiration Dates:</summary>Create data with an expiration date. Excess data is a form of technical debt, and routinely cleaning up old data needs to be normalized.</details></li><li><details><summary>Classify And Tag:</summary>Use a data classification / tagging policy to make it easier to find, handle and remove.</details></li><li><details><summary>Justify Storage:</summary>Store data only when it is difficult to recreate.</details></li><li><details><summary>Optimize Logging:</summary>Optimize log collection, storage (off-site) and rotation; scheduling during low-activity hours and using carbon-neutral backup providers.</details></li><li><details><summary>Compress Storage:</summary>Enable storage compression both on the fly (Brotli or GZIP) and with long-term assets made available for download.</details></li>
      </ul>
    </td>
  </tr>
</tbody>
</table>

#### Business Strategy And Product Management

<table>
  <thead>
    <tr>
      <th># (I/E)</th>
      <th>Guideline</th>
      <th>Benefits</th>
      <th>Success Criterion</th>
    </tr>
  </thead>
<tbody>
  <tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#have-an-ethical-and-sustainability-product-strategy">5.1</a>
      <br/>(H/H)
    </td>
    <td><details><summary>Have An Ethical And Sustainability Product Strategy</summary>Create a publicly available statement in an easy to find location on your website that outlines a clear commitment to prioritize ethics and sustainability ESG standards which align with the organization's mission, vision, and values and includes statements specific to digital products, services, policies, and programs. This should be done while actively promoting such efforts (with evidence) using social channels.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>A clear sustainability statement should make it easier to align organizational policies and practices with measurable metrics to support goals. And, if included early in digital product strategy, can benefit from improved efficiency and reduced environmental impact.</details></li><li><details><summary>Privacy:</summary>By trying to reduce your emissions, and explaining to a wider audience how you aim to keep your sustainability promises, you can also highlight other key areas of visitor value as ethically important, such as privacy and security (which will gain visitor trust in your brand).</details></li><li><details><summary>Transparency:</summary>A clear, public-facing set of policies help internal and external stakeholders better understand an organization's commitments.</details></li><li><details><summary>Social Equity:</summary>Highlighting intersectional social issues in documentation, storytelling, and marketing materials raises awareness of both problems and potential solutions.</details></li><li><details><summary>Accessibility:</summary>Prioritizing inclusive design both in user-interfaces and storytelling raises awareness of accessibility issues, improves experience for people with disabilities, and will reduce emissions through reducing barriers to access which may trigger wasted traffic.</details></li><li><details><summary>Economic:</summary>Transparent communication on how an organization shares the economic benefits of its digital work raises awareness of social inequalities. Similarly, helping visitor's make more informed decisions can support a more financially sustainable product or service overall. A clear statement of intent will also make it easier for the company to measure and report on its impact efforts.</details></li><li><details><summary>Operations:</summary>Product teams are more engaged in the work they're doing.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Statement Availability:</summary>The organization has published a publicly available Code of Ethics, Product Guidelines, Sustainability, or ESG Statement that includes language specific to digital products, services, policies, and programs.</details></li><li><details><summary>Achievements And Compliance:</summary>List achievements, features, compliance, and anything beyond the scope of these guidelines and publish it in a sustainability section of your product or service.</details></li><li><details><summary>Governance Over Time:</summary>The organization can show how it effectively governs implemented digital sustainability, climate policies, and related ESG practices over time.</details></li><li><details><summary>Onboarding New Members:</summary>The organization has training decks and workshops it uses to onboard new team members on how it implements more sustainable product strategies.</details></li><li><details><summary>Documentation:</summary>Raise awareness with your visitor's by documenting your methodology, through impact storytelling, documentation, and helping individuals make more informed decisions.</details></li><li><details><summary>Renewable Showcasing:</summary>The organization can show how it powers digital products and services with renewable energy.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#assign-a-sustainability-representative">5.2</a>
      <br/>(M/L)
    </td>
    <td><details><summary>Assign A Sustainability Representative</summary>Having someone within an organization who represents sustainability as a core agenda makes good sense due to the accessibility, performance, financial and other benefits which can occur from following best practices.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>A referee will maintain quality assurance and guide decisions that measurably reduce the environmental impact of the organization's digital products and services.</details></li><li><details><summary>Privacy:</summary>They will maintain intersectional data privacy standards and potentially watch out for legal compliance issues within the organization.</details></li><li><details><summary>Social Equity:</summary>A representative will help to reduce the digital divide and improve access to information for visitor's with older devices, in low-bandwidth areas, and so on. This reduces emissions as less e-waste will be produced if the need for newer equipment becomes less of a priority.</details></li><li><details><summary>Accessibility:</summary>The sustainability representative will help the organization improve issues surrounding barriers to access. These inherently could cost bandwidth, have a monetary value, and have potential legal implications.</details></li><li><details><summary>Economic:</summary>A dedicated resource who maintains quality control will ultimately improve the organization's financial standing.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Ecological Referee:</summary>Choose and assign an ecological referee (with specific digital expertise) for the product or service within your organization.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#raise-awareness-and-inform">5.3</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Raise Awareness And Inform</summary>Businesses should not only reference their own materials showcasing how they are working towards becoming sustainable, but cite existing sustainability best practices to help others looking to make similar changes within their own work or personal environments.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>An informed and educated team has the potential to reap benefits through systemic changes within the way they build products and services, the way they host or manage their creations, and even the way they do business or carry out their everyday lives (extending to their wider community).</details></li><li><details><summary>Operations:</summary>By clearly stating sustainability goals and sharing resources, you encourage organizational stakeholders to make their own progress.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Inform And Train:</summary>Make sure that all project stakeholders, including product teams, colleagues, and organizational decision-makers (managers and clients) are informed about and trained in your businesses use of sustainable technology.</details></li><li><details><summary>Active Participation:</summary>Encourages stakeholders to actively reduce their environmental impact by providing resources on sustainable design, practices, and concepts.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#communicate-the-ecological-impact-of-user-choices">5.4</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Communicate The Ecological Impact Of User Choices</summary>Allowing the visitor to take action to reduce their emissions is key to helping them play a part in becoming more sustainable. By helping them identify when choices they make could have an environmental impact (and by how much) and then providing them with the tooling choices to reduce their footprint, you can empower them to make a lasting difference.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>More ecologically friendly software settings are designed to improve the environmental impact of a product or service. Empowering the visitor will also allow you indirectly to reduce emissions.</details></li><li><details><summary>Performance:</summary>Sustainability is inherently tied into accessibility and web performance, as such the benefits these fields bring can have a positive impact on the way your website or application works.</details></li><li><details><summary>Conversion:</summary>By clearly communicating the impact, allowing the visitor to set preferences can potentially encourage more individuals to make ecologically friendly choices, thereby increasing adoption rates from those who look for sustainable or ethical brands.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Impact Communication:</summary>Clearly communicate the ecological implications of visitor choices and allow visitor's to configure settings based on those choices.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#estimate-a-product-or-service-s-environmental-impact">5.5</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Estimate A Product Or Service's Environmental Impact</summary>Being able to identify key issues with your website or application is essential, and while not a foolproof method, using tooling can help you achieve an overall idea about the state of your product or service's environmental state (as such tools can do for accessibility).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Given their rigor, LCAs offer the biggest opportunities to reduce a digital product or service's overall environmental impact through the identification and elimination of variables and vectors of digital emissions.</details></li><li><details><summary>Social Equity:</summary>While LCAs are primarily concerned with environmental impacts, they can incorporate intersectional social metrics as well to improve and consider issues like inequality which affect sustainability.</details></li><li><details><summary>Accessibility:</summary>Inclusiveness can be a key part of a digital LCA, as long as parameters are defined up front and maintained throughout the project to ensure barriers to access are eliminated.</details></li><li><details><summary>Performance:</summary>Because they are so detailed, following LCA recommendations should improve product performance due to optimizations being quickly identified and checked off based upon best practices.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>fe-cycle Analysis:</summary>Conduct a full life-cycle Analysis based on the functional unit defined in Guideline 1.2.</details></li><li><details><summary>mpetitor Analysis:</summary>Estimate the environmental impact of your or your competitor's current service to inform decision-making (as a potential target goal).</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#define-clear-organizational-sustainability-goals-and-metrics">5.6</a>
      <br/>(L/M)
    </td>
    <td><details><summary>Define Clear Organizational Sustainability Goals And Metrics</summary>Define sustainability goals for the organization to meet and incorporate into its business model. Pair each goal with at least one clear, achievable metric or Key Performance Indicator (KPI).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Setting, measuring, and communicating clear sustainability goals aligns an organization's impact aspirations with ongoing efforts to meet these goals.</details></li><li><details><summary>Transparency:</summary>Helps stakeholders such as employees, clients, and partners better understand how the organization creates shared value in its various sustainability policies and programs.</details></li><li><details><summary>Economic:</summary>Aligning with existing standards or frameworks makes it easier for organizations to include digital in its overall sustainability reporting.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Sustainability Goals:</summary>The organization has defined and published a clear set of sustainability goals. It publicly communicates how it will meet these goals, including which performance metrics are important to help the organization and its various stakeholders thrive.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#verify-your-efforts-using-established-third-party-business-certifications">5.7</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Verify Your Efforts Using Established Third-party Business Certifications</summary>Business certifications can fill the gaps left by incomplete sustainability legislation. Ensuring a business complies with third-party certifications will help verify and apply an objective level of rigor to an organization's sustainability efforts.</details></td>
    <td>
      <ul>
        <li><details><summary>Operations:</summary>These types of certifications can make it easier for organizations to align operational practices with their mission, vision, and values and communicate these decisions to organizational stakeholders.</details></li><li><details><summary>Economic:</summary>Business certifications, which are overseen by impartial governing bodies, help organizations operationalize sustainability principles and achieve higher verified levels of social and environmental performance, accountability, and transparency. These certifications can also help an organization differentiate itself from others in its industry. Though, organizations should be sure to vet the certifying entity so no conflicts-of-interest exist</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Certification Achievement:</summary>The organization has achieved one or more business sustainability certifications and incorporated operational policies and practices to support them.</details></li><li><details><summary>Certification Maintenance:</summary>The organization maintains its certification through evolving policies and practices over time.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#implement-sustainability-onboarding-guidelines">5.8</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Implement Sustainability Onboarding Guidelines</summary>The organization has clear onboarding and training processes that include ESG policies and practices with explicit references to digital sustainability and responsibility. Ensure that onboarding utilizes a "green by default" process and avoids being an opt-in procedure.</details></td>
    <td>
      <ul>
        <li><details><summary>Economic:</summary>Organizations with sustainability training and onboarding practices in place benefit from higher retention rates, improved performance, and more resilient standards of practice for maintaining business continuity.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Training Materials:</summary>The organization has dedicated training manuals, workshops, and materials that outline the ESG policies and practices it follows and how to implement them. While managing and maintaining these materials over time, adapting them as new policies and practices arise.</details></li><li><details><summary>Progress Incentivisation:</summary>The organization incentivizes leadership, teams, and stakeholders to make progress toward the goals outlined in their training, including time for sustainability activities, recognition for completion, as so on.</details></li><li><details><summary>Negative Variables:</summary>The organization anticipates and maps potential negative external variables on the service, and acts to minimize their overall impact.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#support-mandatory-disclosures-and-reporting">5.9</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Support Mandatory Disclosures And Reporting</summary>The organization discloses and reports its ESG impact on at least an annual basis.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>As reporting standards become more rigorous and commonplace, early adopters find the transition less disruptive due to more resilient business operations. Organizations that commit to these practices long-term will also be ahead of the curve as legislation catches up.</details></li><li><details><summary>Economic:</summary>Organizations that regularly report on their impact, and show measurable improvement over time, are increasingly likely to attract employees, partners, potential customers, investors, and suppliers based on shared values and an aligned mission. Customers are more likely to purchase products from ethical companies with a proven environmental record.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Policies And Practices:</summary>The organization has created and published policies and practices for disclosing the social and environmental impacts of its products, services, policies, and programs in line with existing reporting standards such as GRI Performance, SASB, etc.</details></li><li><details><summary>Impact Report:</summary>The organization produces a publicly available impact report outlining its progress against previous reports on social and environmental goals at least once per year.</details></li><li><details><summary>Standards And Policies:</summary>The organization publicly and transparently follows existing or emerging environmental standards and legislative policy that promotes mandatory disclosures and reporting for emissions. This is done alongside other social and environmental criteria in its impact reporting, maintaining these practices over time for future reports.</details></li><li><details><summary>Impact Reduction:</summary>The organization clearly identifies how it reduces its environmental impact, avoiding double accounting, greenwashing, excluded data or other manipulative techniques.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#create-one-or-more-impact-business-models">5.10</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Create One Or More Impact Business Models</summary>An Impact Business Model enables an organization to incorporate specific impact initiatives into one or more business models for generating revenue, often making them "green by default" and folding impact initiatives into the organization's operating system. Moreover, being able to calculate the return of investment in terms of sustainability your product or service will bring is important to identifying whether it poses a net-positive or net-negative effect to the environment.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Business models based on advertisement, sponsorship, or the selling of products can be contradictory to some guidelines as they tend to increase the time spent using a product or service. Taking decisions not only based on financial indicators but on benefiting the visitor and the wider ecosystem can help prevent this and reduce overall emissions.</details></li><li><details><summary>Social Equity:</summary>Adding social indicators (such as the shared value within digital services) can prevent negative social impacts such as impoverishment or exploitation occurring.</details></li><li><details><summary>Economic:</summary>Organizations that implement these practices create positive social and environmental impact with every sale of a product or service. These practices also make it easier for the organization to track and measure progress over time. Understanding and incorporating shared value into a digital product or service can also improve trust, which often leads to improved financial considerations.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Theory Of Change:</summary>The organization has completed (and operationalized) a Theory of Change process with requisite documentation to identify the impact it hopes to create, how it will generate revenue, shared, or added value from these activities, how it will measure results based on desired outcomes; or in the case of launched projects, is generating revenue, actively tracking and measuring progress against any desired outcomes.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#follow-a-product-management-and-maintenance-strategy">5.11</a>
      <br/>(H/L)
    </td>
    <td><details><summary>Follow A Product Management And Maintenance Strategy</summary>The organization has clearly defined governance policies around how it manages and maintains digital products and services over time.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>This provides another opportunity to manage and reduce emissions over time.</details></li><li><details><summary>Performance:</summary>Products at these organizations also have better security, reduced technical debt, and improved data privacy, and customer retention.</details></li><li><details><summary>Economic:</summary>Organizations with clear product maintenance and management practices tend to be more resilient in the face of digital disruption.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Management And Maintenance:</summary>The organization has documented policies outlining how it approaches product management and maintenance.</details></li><li><details><summary>Planning Strategy:</summary>The organization has maintenance / security plans in place for all the digital products and services it manages.</details></li><li><details><summary>Resourcing Products:</summary>The organization appropriately resources products over time via staffing and budgeting to support refactoring code, addressing technical debt, new product features, ongoing testing, and product or service maintenance plans to continue supporting its customers, visitor's, and other stakeholders.</details></li><li><details><summary>Resource Measurement:</summary>The organization incorporates carbon and resource measurement into maintenance programs and can show measurable improvement over time.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#implement-continuous-improvement-procedures">5.12</a>
      <br/>(H/H)
    </td>
    <td><details><summary>Implement Continuous Improvement Procedures</summary>The organization has policies and practices in place to embrace experimentation, foster a growth mindset, support organizational agility, and provide continuous improvement. Product creators should iterate, regularly, though never at the cost of getting things done (such as working on larger, long-term features).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Focusing on continuous improvement reduces waste and energy use by iteratively identifying opportunities to improve the product or service.</details></li><li><details><summary>Operations:</summary>A culture of experimentation fosters more innovation. This supports team-building and improves overall organizational resilience and efficiency.</details></li><li><details><summary>Security:</summary>Products or services that are maintained and updated over time reduce risk and improve security.</details></li><li><details><summary>Privacy:</summary>Having a high quality, regularly kept up-to-date product or service will reduce the chances of a data breach, which will in-turn increase the privacy potential of the website or application.</details></li><li><details><summary>Accessibility:</summary>Iteration is important for inclusive design as different visitor's will have different needs, and no two individuals are alike. As such, being agile and adaptable will benefit authors in expanding their accessibility.</details></li><li><details><summary>Performance:</summary>Technical debt is reduced if review processes exist. Focusing on continuous improvement rather than large single scale releases, bottlenecks in a website or application's speed can be resolved quickly as they become apparent. This is especially useful as new releases of Web browsers can alter the performance of products and services.</details></li><li><details><summary>Economic:</summary>Agility and continuous improvement help an organization be more resilient in the face of disruption and a changing climate. Long-term, these practices save the organization time, money, and resources. They also provide security benefits that decrease risk and can potentially reduce emissions.</details></li><li><details><summary>Conversion:</summary>If a website or application renders correctly, it will naturally encourage more trust with its visitor's, and thereby have the potential for repeat custom.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Continuous Improvement:</summary>The organization has created policies and practices to enable continuous improvement and has resourced the organization appropriately to support these efforts over time.</details></li><li><details><summary>Agile Reviews:</summary>Agile sprints and update frequency must go through a review process to ensure project teams have enough time to conduct user-research, identify technical debt, and produce quality output.</details></li><li><details><summary>Iterative Consideration:</summary>Use (and show a track record of) continuous improvement (iteration) to analyze your website or application while also addressing the by-products and potential consequences of ongoing experimentation, such as technical debt, product performance, emissions, and related issues. Limiting analytics to only necessary features to aid with decision-making, encouraging visitor feedback, and comparing performance against business goals and visitor needs.</details></li><li><details><summary>Functionality Decisions:</summary>Justify and prioritize the retention of existing features, the creation of new functionality, and the decommission or elimination of unused functionality and unvisited pages through the product's life-cycle.</details></li><li><details><summary>Security Updates:</summary>Provide corrective security and policy updates during the product or services lifecycle, while distinguishing these updates from more extensive evolutionary updates.</details></li><li><details><summary>Skills And Maintenance:</summary>Develop sustainable product and data strategies along with appropriate training techniques that help your team (managers, colleagues, etc) build capacity and learn new skills to manage and maintain products and services over time.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#document-future-updates-and-evolutions">5.13</a>
      <br/>(L/L)
    </td>
    <td><details><summary>Document Future Updates And Evolutions</summary>Products or services update regularly, ensure that additions, changes, deprecations, removals, fixes, or security patches are documented in an easy-to-read document with details that showcase how such changes affect the visitor (or how they can take advantage of new features).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Maintaining an intuitive, lightweight user-experience while adding new features or updating software reduces frustration, churn, and the energy visitors expend when the interface doesn't perform in ways visitor's expect.</details></li><li><details><summary>Security:</summary>Websites and applications that maintain an evergreen status often have fewer issues due to a strong release cycle which not only makes necessary changes, but also keeps visitor's informed, maintaining transparency.</details></li><li><details><summary>Performance:</summary>Maintaining an optimized user-experience which is regularly kept current using best practices also implies that pages and assets load quickly in ways visitor's expect.</details></li><li><details><summary>Economic:</summary>Products and services which are left to become outdated may have higher costs to restart the project from scratch and resurrect; whereas small regular updates have a lesser overhead in terms of time commitments from development scheduling and the impact to potential lost consumers.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Feature Changes:</summary>The user-experience considers possible changes to the product or service such as adding, updating, or removing features.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#establish-if-a-digital-product-or-service-is-necessary">5.14</a>
      <br/>(H/L)
    </td>
    <td><details><summary>Establish If A Digital Product Or Service Is Necessary</summary>Ensure that the product or service you are creating offers value to visitor's and doesn't duplicate existing functionality (without bringing something new to the table) as this redundancy wastes digital and physical resources.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>By determining that a digital product or service is not necessary, you avoid potential environmental impacts associated with its creation and use.</details></li><li><details><summary>Operations:</summary>Organizations don't waste time or resources creating unnecessary tools that then require ongoing maintenance.</details></li><li><details><summary>Social Equity:</summary>Organizations avoid increasing the digital divide by creating only digital products and services that are meaningful and necessary.</details></li><li><details><summary>Accessibility:</summary>As long as an accessible replacement is available, avoiding an unnecessary digital product or service can improve access to existing information.</details></li><li><details><summary>Economic:</summary>Organizations cut costs by not investing in unnecessary products or services.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Sustainable Development Goals:</summary>Review and identify whether your product or service aligns with one of the U.N. (SDG's).</details></li><li><details><summary>Creation Evaluation:</summary>Evaluate the desirability, feasibility, and viability of the digital product or service they wish to create to ascertain whether it is necessary.</details></li><li><details><summary>Avoid Duplication:</summary>Determine that no existing digital product or service offers the same value. They have conducted analysis to understand whether a new product or service is necessary.</details></li><li><details><summary>Obstacle Consideration:</summary>Consider any obstacles to using a product or service, such as accessibility, equality, technical, or territorial.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#determine-the-functional-unit">5.15</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Determine The Functional Unit</summary>The functional unit of a product is a quantified description of the performance requirements that the product fulfills. Ensure you identify the requirements of your product before development.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>The functional unit enables the comparison of non-equivalent products or services in the assessment of environmental impacts.</details></li><li><details><summary>Performance:</summary>Focusing on a functional unit drives performance-based choices for a better, more efficient, and faster user-experience.</details></li><li><details><summary>Economic:</summary>Focusing on the functional unit supports a robust product or service without unnecessary, potentially costly features.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Life-cycle Assessment:</summary>Consider and conduct a life-cycle Assessment (LCA) to define the requirements of your product's function throughout its lifecycle.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#create-a-supplier-standards-of-practice">5.16</a>
      <br/>(H/H)
    </td>
    <td><details><summary>Create A Supplier Standards Of Practice</summary>The organization collaborates with suppliers, authors, clients, and other partners on initiatives that are both mutually beneficial and create positive social and environmental outcomes.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Vetting suppliers and partners can help an organization define, track, and reduce its Scope 3 emissions.</details></li><li><details><summary>Operations:</summary>This can increase diversity within the technology sector.</details></li><li><details><summary>Economic:</summary>This will also help an organization better align its business ecosystem with its mission, vision, and values; whilst improving its relationship with stakeholders.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Vetting Potential Partners:</summary>The organization has created specific policies to vet potential partners in its supply chain based on ESG principles.</details></li><li><details><summary>Collaborative Measurement:</summary>The organization has partnered with suppliers to create, track, and measure collective impact on issues that impact their stakeholders.</details></li><li><details><summary>Informative Partner Promotion:</summary>The organization promotes its partnerships in a publicly available place, along with information on how the partnership creates collective impact.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#share-economic-benefits">5.17</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Share Economic Benefits</summary>The organization shares the economic benefits of its digital products, services, policies, and programs.</details></td>
    <td>
      <ul>
        <li><details><summary>Social Equity:</summary>Organizations that pay a living wage and offer good benefits often have higher employee retention rates.</details></li><li><details><summary>Economic:</summary>Organizations that collaborate with stakeholders to coordinate mutually beneficial economic incentives benefit from stronger relationships.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Living Wage:</summary>The organization publicly commits to paying employees, contractors, and other stakeholders a living wage.</details></li><li><details><summary>Incentivisation:</summary>The organization has policies and practices in place to incentivize stakeholders, such as workers and contractors, to meet its impact goals.</details></li><li><details><summary>Employee Benefits:</summary>The organization provides benefits to employees in accordance with its resources, including, where relevant, healthcare, retirement planning, flex time, profit sharing, and so on.</details></li><li><details><summary>Legislation Advocation:</summary>The organization advocates for responsible legislation that supports employment rights, transparency, and accountability related to sharing economic benefits.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#share-decision-making-power-with-appropriate-stakeholders">5.18</a>
      <br/>(L/H)
    </td>
    <td><details><summary>Share Decision-making Power With Appropriate Stakeholders</summary>Ensuring that everyone has a seat at the table is important to promoting voices who may not otherwise have their voices heard, and potentially getting useful ideas from fresh sources.</details></td>
    <td>
      <ul>
        <li><details><summary>Operations:</summary>If project teams are incentivized with key sustainability goals and have the authority to make decisions based on such criteria, they can measurably improve a range of metrics within the business, design, development, and infrastructure categories. In doing so, emissions can be reduced through group action and commitment changes at an organizational level.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Decision-Making:</summary>Ensure that the project team's goals are aligned with key business objectives, and project stakeholders (for example, project managers) have the power and autonomy to make key decisions on the organization's behalf.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-justice-equity-diversity-inclusion-jedi-practices">5.19</a>
      <br/>(H/H)
    </td>
    <td><details><summary>Use Justice, Equity, Diversity, Inclusion (JEDI) Practices</summary>The organization has public policies and practices supporting racial justice, inclusion, equity, and diversity in hiring and operations.</details></td>
    <td>
      <ul>
        <li><details><summary>Accessibility:</summary>Organizations that incorporate more diverse stakeholder perspectives enact more inclusive policies and often create better products, services, and programs. JEDI practices strengthen an organization's resilience and ability to collaborate. Additionally, this improves diversity in the tech sector and the overall accessibility of the internet</details></li><li><details><summary>Economic:</summary>Organizations with clear JEDI policies and practices have reduced risks of potential legal issues, lawsuits, etc.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>JEDI Practices:</summary>The organization has documented its commitment to JEDI practices with clear policies on how it prioritizes marginalized or otherwise underserved communities, including Black, Indigenous, People of Color, LGBTQIA+, Women, Disabled, Veterans, Seniors, and so on.</details></li><li><details><summary>Accessibility Policy:</summary>The organization has an accessibility policy for digital products and services and can show this via a verified accessible website, application, product, or service.</details></li><li><details><summary>JEDI Training:</summary>The organization has JEDI-related training materials and schedules ongoing workshops related to how this topic manifests itself in digital products and services (algorithmic bias, digital divide, gig economy work, mis / disinformation, etc).</details></li><li><details><summary>JEDI Improvements:</summary>The organization can show measurable JEDI improvement over time in its hiring, leadership, and operations.</details></li><li><details><summary>JEDI Legislation:</summary>The organization advocates for responsible legislation relating to JEDI practices, especially as related to digital products and services.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#promote-responsible-data-practices">5.20</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Promote Responsible Data Practices</summary>The organization has devised and implemented a responsible data strategy that prioritizes data privacy and promotes more ethical uses of data, including disposal and data sustainability practices.</details></td>
    <td>
      <ul>
        <li><details><summary>Economic:</summary>Organizations that prioritize data privacy and other responsible data practices benefit from reduced risk and costs, increased resilience, and, often, better relationships with customers and other stakeholders.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Privacy Policy:</summary>The organization has a public-facing privacy policy in place and supports existing privacy laws such as General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and so on. This policy must be both accessible for all visitors, including those with accessibility and reading comprehension needs, and abide by plain english best practices to avoid jargon, technical language and legalese.</details></li><li><details><summary>Data Ownership:</summary>The organization can show measurable progress over time on how it respects data privacy and ownership, including a visitor's "right-to-be-forgotten" and provides the ability to export data.</details></li><li><details><summary>Data Protection:</summary>The organization supports new and emerging legislation related to data privacy, data sustainability, and responsible data practices.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#implement-appropriate-data-management-procedures">5.21</a>
      <br/>(L/H)
    </td>
    <td><details><summary>Implement Appropriate Data Management Procedures</summary>Expired or unused data has a cost, it takes up space, and it requires maintenance. As such, the ability for customers to manage their own data and for service providers to manage older website material which no longer applies but might still have use will be a carbon benefit.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>By storing less data, you inherently require less computing power to maintain a service, and this will require less energy within the Internet's infrastructure. This will help to reduce your emissions.</details></li><li><details><summary>Privacy:</summary>Good data management supports better data protection practices.</details></li><li><details><summary>Performance:</summary>Putting older information which is less relevant onto a smaller scaled down version of your website will reduce your bandwidth usage, and it's likely not going to impact visitor's as archived information will have significantly fewer visitors.</details></li><li><details><summary>Economic:</summary>Requiring less data has a potential financial benefit in that the lower storage requirements mean that you can scale down your hosting package or, if on a pay-as-you-go scheme, simply be charged less for your infrastructure costs.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Outdated Content:</summary>Outdated or otherwise expired product content and data are archived and deleted via automated expiration dates and schedule product audits. Create an archiving schedule with a lighter version of the old searchable content available.</details></li><li><details><summary>Data Controllers:</summary>Enable users to control, manage and delete their data, subscriptions, and accounts.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#promote-responsible-emerging-technology-practices">5.22</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Promote Responsible Emerging Technology Practices</summary>The organization has devised and implemented responsible policies related to artificial intelligence, Internet of Things (IoT), blockchain, and related emerging technologies.</details></td>
    <td>
      <ul>
        <li><details><summary>Operations:</summary>Organizations that prioritize ongoing learning and continuous improvement build stronger teams that can adapt more quickly.</details></li><li><details><summary>Economic:</summary>Organizations with clear policies related to digital disruption are more resilient and can pivot more quickly than those without, and organizations with clear emerging technology policies are at less risk of any number of potential threats, including legal action.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Emerging Technologies:</summary>The organization has public-facing policies in place for emerging technologies.</details></li><li><details><summary>Disruptive Technology:</summary>The organization can show how it up-skills workers as new technologies and practices potentially disrupt its business model.</details></li><li><details><summary>Technology Legislation:</summary>The organization supports responsible legislation related to automation and emerging technologies.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#include-responsible-financial-policies">5.23</a>
      <br/>(H/H)
    </td>
    <td><details><summary>Include Responsible Financial Policies</summary>The organization implements responsible finance strategies, including divesting from fossil fuels and appropriately resourcing digital products and services to account for long-term care and maintenance.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Divesting from fossil fuels moves us more quickly to an economy that is powered by renewable energy, which can reduce the catastrophic impacts of climate change.</details></li><li><details><summary>Economic:</summary>Responsibly financing digital products and services improves their resilience and saves the organization time, money, and resources eventually.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Fuel Divestment:</summary>The organization has divested from fossil fuels and moved its banking, sponsorship, and other affiliations to more responsible partners.</details></li><li><details><summary>Responsible Finance:</summary>The organization engages in flexible financing and responsible budgeting for its digital products and services to accommodate long-term care and maintenance.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#include-organizational-philanthropy-policies">5.24</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Include Organizational Philanthropy Policies</summary>For-profit organizations have clear philanthropy policies and practices in place to help non-profit organizations build digital capacity and acumen while also engaging their own teams in meaningful work that promotes shared learning and stretch goals.</details></td>
    <td>
      <ul>
        <li><details><summary>Operations:</summary>Organizations with clear philanthropy strategies that include volunteer or free projects with team stretch goals can have higher employee engagement and retention.</details></li><li><details><summary>Economic:</summary>Organizations with clear philanthropic strategies often have a system of checks and balances in place that support better overall financial practices.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Philanthropy Policy:</summary>The organization has a clear corporate giving policy and creates philanthropic partnerships with strategically aligned organizations.</details></li><li><details><summary>luntary Work:</summary>The organization engages in free or volunteer projects, which help its team learn new tools and tactics, while also helping charities and non-profit organizations build capacity.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#plan-for-a-digital-product-or-service-s-care-and-end-of-life">5.25</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Plan For A Digital Product Or Service's Care And End-Of-Life</summary>Everything ends at some point, planning for if and when a product or service is finalized makes good ethical sense to ensure customers can be transitioned toward a replacement rather than losing access to their data.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Many products or services keep unnecessary data and functionalities alive while they are not used or useful anymore. Planning for end-of-life reduces their long-term environmental impact by eliminating waste and allowing the freed up resources to be utilized by other information.</details></li><li><details><summary>Security:</summary>Regular maintenance, updates, and care on outdated software and data can significantly reduce security risks.</details></li><li><details><summary>Privacy:</summary>Incorporating clear end-of-life policies that include a visitor's right-to-be-forgotten will benefit the visitor by explaining how you enforce data protection and comply with legislation.</details></li><li><details><summary>Performance:</summary>Removing unnecessary features, functions, and data of a service improves performance and resilience as the resources which were utilizing data will be better spent on more popular functionality, and the gains made from their elimination will be felt in terms of emissions through saved development time.</details></li><li><details><summary>Economic:</summary>Removing redundancy in the product or service can generate savings in hosting, security costs, and other third-party subscriptions.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>End-of-life Care:</summary>Establish clear, documented end-of-life guidelines that include data disposal, archiving, file deletion, and so on.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#include-e-waste-right-to-repair-and-recycling-policies">5.26</a>
      <br/>(H/M)
    </td>
    <td><details><summary>Include E-waste, Right-to-repair, And Recycling Policies</summary>The organization addresses e-waste, right-to-repair, recycling, and related practices in its operations.</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>Organizations with clear e-waste and recycling policies reduce environmental impact and promote circularity, while also extending the shelf-life of technology hardware. When coupled with clear philanthropic policies, donated hardware can also support resource-constrained charities.</details></li><li><details><summary>Economic:</summary>Extending the shelf-life of hardware and clear e-waste / recycling policies reduces costs.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>E-Waste Policy:</summary>The organization has specific policies in place to recycle e-waste and repair owned technology products whenever possible.</details></li><li><details><summary>Recycling And Repairing:</summary>The organization has formed relationships with local partners for e-waste recycling and repair.</details></li><li><details><summary>Refurbishment Strategy:</summary>The organization buys refurbished equipment whenever possible.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#define-performance-and-environmental-budgets">5.27</a>
      <br/>(M/M)
    </td>
    <td><details><summary>Define Performance And Environmental Budgets</summary>Setting targets and limits regarding your product or service are important for keeping a sustainable mindset. Using budgets, you can declare the remits of which you will work within to ensure your emissions do not fall outside (and monitor your progress through development).</details></td>
    <td>
      <ul>
        <li><details><summary>Environmental:</summary>A strict sustainability or performance budget will reduce the chance of your website getting too large (and causing pollution transfers), which in turn will ensure it has a minimal impact on a visitor's device. This will have a direct impact on emissions' reduction by forcing businesses to choose where to make reductions and efficiency savings.</details></li><li><details><summary>Performance:</summary>Keeping realistic goals regarding delivery size will push developers to optimize resource heavy projects and reconsider using large tooling in place of lightweight alternatives. Moreover, A lower set target budget for a product or service will decrease the amount of time a browser spends transferring and rendering data (reducing emissions).</details></li><li><details><summary>Economic:</summary>Customers will not have to keep upgrading devices to match the needs of a website that grows (unchecked) over time.</details></li><li><details><summary>Conversion:</summary>Reduced churn and page abandonment will occur due to the application or website becoming more performant. Potentially, your search engine ranking may perform better due to performance being a key indicator in pagerank algorithms.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Environmental Budget:</summary>The product team has defined, baselined, and documented a clear sustainability and environmental budget criteria that covers page, user-journey, and digital service levels and metrics (such as a CO2.js score) that are approved by relevant product stakeholders.</details></li><li><details><summary>Performance Budget:</summary>Use tools such as a performance budget to determine the maximum size (goals) your app or website can weigh to reduce the data transfer and HTTP request impact (using metrics like Google Lighthouse).</details></li><li><details><summary>Measurable Improvements:</summary>The product team can measurably show how much the budgeting process improved performance and reduced emissions.</details></li><li><details><summary>Capacity And Maintenance:</summary>The product team invests in resources to build capacity and maintain the budgets over time.</details></li>
      </ul>
    </td>
  </tr><tr>
    <td>
      <a href="https://w3c.github.io/sustyweb/#use-open-source-tools">5.28</a>
      <br/>(H/H)
    </td>
    <td><details><summary>Use Open Source Tools</summary>The organization has clear policies about using open source tools, including how it gives back to the community and responsibly manages code repositories to reduce waste.</details></td>
    <td>
      <ul>
        <li><details><summary>Operations:</summary>Collaboration and community-building around open source practices engenders trust and helps to reduce inequalities.</details></li><li><details><summary>Economic:</summary>If managed properly, open source tools can significantly reduce development time.</details></li>
      </ul>
    </td>
    <td>
      <ul>
        <li><details><summary>Open Source Policy:</summary>The organization has a clear open source policy in place that outlines how it uses open source tools and the practices it supports surrounding open source development.</details></li><li><details><summary>Collaboration:</summary>The organization has a track record of collaboration and community-building around open source principles.</details></li><li><details><summary>Contribution:</summary>The organization regularly contributes to open source community-based projects.</details></li>
      </ul>
    </td>
  </tr>
</tbody>
</table>
