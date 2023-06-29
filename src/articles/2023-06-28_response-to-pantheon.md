---
title: Response to Pantheon's DrupalCon Round Table
created: 2023-06-28T00:00:00-05:00
type: article
tags: [drupal]
summary: "On April 20, 2023, a LinkedIn post started a very much needed discussion in the Drupal and wider open source communities. The post was a simple question, asking for someone from Pantheon if they cared to explain why they were hosting the website of an SPLC-designated hate group. Two of the company's founders, Josh Koenig and David Strauss, hosted a round table discussion at DrupalCon Pittsburgh, taking questions from community members and attempting to have a dialogue. I ultimately found this meeting to be unproductive and their explanations unsatisfactory."
---

_The blog post that follows contains my opinions, which do not necessarily reflect the opinions of organizations with which I may be associated._

## Background & Context

On April 20, 2023, a LinkedIn post started a _very much needed_ discussion in the Drupal and wider open source communities, eventually leading to [an Ars Technica article](https://arstechnica.com/tech-policy/2023/04/webops-platform-pantheon-defends-hosting-hate-groups-as-developers-quit/) covering the story. Like so many other divisive topics in the public discourse, this quickly turned into two sides largely talking past each other. [The post](https://www.linkedin.com/posts/gdunlap_alliance-defending-freedom-activity-7054524999851786240-TPMP/) was a simple question, asking for someone from Pantheon, a hosting platform, if they cared to explain why they were hosting the website of an [SPLC-designated](https://www.splcenter.org/fighting-hate/extremist-files/group/alliance-defending-freedom)  hate group. A little more than a month later two of the company's founders, Josh Koenig and David Strauss, hosted [a round table discussion](https://youtu.be/TeyMRzj9dlI) at DrupalCon Pittsburgh, taking questions from community members and attempting to have a dialogue.

**I ultimately found this meeting to be unproductive and their explanations unsatisfactory.**

Because this is the internet, and things have a way of disappearing over time, I've saved an unedited copy of the video's auto-generated captions **here**. Quotes below are taken from the transcript and have been lightly edited for readability. To help readers maintain context, I've linked each quote to its timestamp in the video.

## Rebuttal #1: Comparing open source contributions with serving bad clients.

Josh describes what he sees as a cost of doing business in the open web:
> How do we conduct ourselves, how do we react when people use our technology and we don't agree with their agenda or share their values? At what point do we try to draw lines and boundaries around that sort of thing? It's a complicated question. One of the things that - as a contributor to Drupal - I had to make my peace with early on was the fact that once you release free software, people will use it and you don't have control over how it will be used and that's part of the trade-off that you make when you release something freely. When we started our company, Pantheon, we set it up intentionally so that anyone could sign up for it for free; anyone could take their site live at any point they wanted to. We work with a lot of agency partners that can bring us any customer they want, at any time and we built it around that same ethos of being very widely and publicly available.

Drupal, like most software, is ethically neutral - it's a tool used to accomplish a task. And Josh is correct that once you share that code with the community, and the community pushes it into the world, some bad actors certainly can use _your_ efforts to further _their_ agenda. The problem here is that Josh is making a false equivalence of contributing code to a community-driven open source project like Drupal and a private company taking funds from clients in an active, continuous relationship.

No reasonable person would hold a musician accountable for a white supremacist rally using their music, but you wouldn't hesitate to stop buying their music if they stood on stage and tried to recruit concert-goers into those hate groups. There's a distinct difference between something you've sent out into the world _just happening_ to be used by terrible people, and _actively maintaining a relationship_ with those horrible people.

His questions, "how do we react when people use our technology?" and "at what point do we try to draw lines and boundaries?" are, in fact, complicated questions. But that's the responsibility you take when you start a company. You have to know what you will and won't accept. If you choose to accept hate groups, that's fine, but you have to also understand that will likely come with some consequences in the form of decent people not wanting to work with you or recommend your services.

## Rebuttal #2: Ending a client relationship is not censorship.

David recounts his youth and how that shaped his perspective of an open web:

> I grew up in a very conservative community and experienced a lot of censorship wielded as a cudgel against people in my community and that's why I actually joined the ACLU when I was in high school back in the 90s. That was largely in response to seeing burgeoning censorship efforts across both public and private spaces used as a way to exclude. I became fairly resolved early on to never be a participant in creating that sort of censorship infrastructure that could be wielded against people like me again in someone else's hands - because even when I can control the levers to some degree in my current position it doesn't mean that I have control over who those levers get handed to and I'm very reluctant to set up levers that are similar to the ones that have been used against me and my community in the past.

I do not know David, or what kinds of censorship he's faced in his past, but I am sympathetic to anyone that's been in that position. The problem I have with this argument, however, is David's comparison of censoring the marginalized and powerless with ending a business relationship. Removing an organization from the Pantheon platform does not in any way inhibit their ability to spread their message or promote their content on other platforms. Even if every single hosting provider and web infrastructure company refused to work with that client, they _still_ would not be censored - they'd simply have to create their own infrastructure and connect it to the open web. To quote [XKCD's Free Speech](https://xkcd.com/1357/) comic, "The right to free speech means the government can't arrest you for what you say. It doesn't mean that anyone else has to listen to your bullshit or host you while you share it ... If you're being yelled at, boycotted, canceled or banned, your free speech rights aren't being violated, it's just that the people listening think you're an asshole and they're showing you the door."

Ending a client relationship is a suppression of free speech in the same way preventing my neighbor from holding church services in my kitchen is a suppression of his freedom of religion.

## Rebuttal #3: The removal of Russian-owned sites is exactly analogous to this case.

One of the questions asked during the session:

> How do you guys equate that to the decision of the platform to remove every website from Russia when that came along, right? Because it seems like it's in conflict with your stance now and in my personal opinion it seems that most people would support that decision so it's an easy decision right? The Russian decision is an easy decision right? It's a stance that was taken by most corporations, it was a stance that was taken by a lot of people so it was an easy decision. This isn't an easy decision so it just doesn't seem to me personally that what you're saying now applies to that.

David responds:

> So there are definitely a few distinctions to be made between the Gazprom sites and the ADF. One is Gazprom runs a private military that's actively involved in the invasion so we are talking about a literal force that is directly endangering lives in Ukraine right now. They're they're actually dropping bombs, they are sending in tanks, sending in troops and they are firing weapons at people. That is a very direct link to the risk of involvement with Gazprom.
>
>I'll additionally say we haven't talked that publicly about some of these things but we've seen Russia, as a state actor, targeting the platform with attacks and that also weighed on the scale. They've been in the process of deploying the equivalent of a great firewall and we've had contact with service providers in Russia and have noticed that they have been trying to intercept our TLS connections to the platform and therefore insert a sort of man-in-the-middle attack and be able to censor the actual traffic because we also host activist organizations that are trying to undermine the regime in Russia and those have also been victims of attempted denial of service attacks against their their sites on the platform.

Let me be clear, I applaud Pantheon's actions in joining the rest of the world in making Russia a pariah state. But David's rationale here for removing Russian sites lacks any of the qualifications that Josh laid out earlier that would have made taking down the ADF's site the "correct" action.

Josh from earlier in the session:

> We have taken action in the past when there are things happening on the platform that create what we, in our judgment, consider a direct risk or harm where the removal of that content in and of itself could potentially avert something bad from happening directly. If you're using Pantheon to directly harm someone or the website is a harmful thing, we'll take it down. It doesn't happen a lot but it has happened. We'll take action to pull that off, but beyond that our perspective is it's the right thing for a big open platform to do to permit an extremely wide array of uses and an extremely wide array of customers even when they conflict with our personal beliefs very directly.

So on the one hand, we have the ADF, an organization that is pursuing the eradication of the LGBTQ population through the re-criminalization of their relationships and supporting the sterilization of trans people. But because there's nothing on their site that is considered "a direct risk or harm," Pantheon has opted not to take the site down. On the other, we have Gazprom, a Russian state-owned conglomerate that is taken down because they're supposedly running a private military and engaging in a war of aggression trying to take over Ukraine. Do you see the disconnect here?

Both organizations are oppressing other groups, causing direct harm to them, but neither is using the Pantheon infrastructure to cause that direct harm. Yet only the Russian-backed sites were taken down. I'm inclined to believe the anonymous questioner that Pantheon was simply taking the _easy decision_. I'd like to point Pantheon's leadership back to [their very own press release](https://pantheon.io/blog/pantheon-rises-support-open-web) from that time - CEO Zack Rosen states, "We have a responsibility to think about the overall health of the open web itself, and the role it ultimately will play". What about your responsibility to think about the health of the _people_ that use the open web and the role _you_ will ultimately play?

## Rebuttal #4 Net neutrality and an "open web" are not the same thing.

David says:

> I just want to see a show of hands for how many people in this room believe in net neutrality. [pause] Okay so an overwhelming majority of people here believe in some restriction on some level of providers on the internet being unable to wield restrictive policies around content, the data that's transferred, the information that they are handling and distributing.

Yet another false equivalence! David is asking the attendees in the room here if they believe in  [net neutrality](https://www.eff.org/issues/net-neutrality), which is a principle that applies to internet service providers like your local cable internet provider. It's a regulation that they can't favor any specific traffic over the network, and has nothing to do with website content or hosting providers. Another hot-button internet policy you may have heard about recently is [Section 230 of the Communications Decency Act](https://www.eff.org/issues/cda230), which is a policy that works in Pantheon's favor here. Section 230 shields social media platforms and hosting providers alike, preventing them from being held liable for the content created by others. But section 230 also gives Pantheon the freedom to moderate what kinds of content they'll allow on their platform. The freedom of moderation is what let Twitter legally boot the sitting President of the United States. While I'm not a lawyer, it seems to me that Pantheon should be allowed to moderate what kinds of content they do and don't condone - in fact, Josh admits this himself:

> We didn't want to do adult content and that was kind of just more of a question of what type of business you want to build

The issue here, however, is that David is attempting to lead attendees down a fallacious slippery slope: If you believe in _some_ level of neutrality, then you should also appreciate _this specific instance_ of neutrality. One does not necessitate or preclude the other. I can simultaneously hold the beliefs that my ISP shouldn't be throttling traffic it doesn't like _and_ that Pantheon has the right to boot a group seeking to eradicate a protected class of citizens.

## Rebuttal #5: On being a _hosting_ platform vs. a _speech_ platform

One point Josh made that I hadn't really considered before:

> I wanted to respond first to the use of the term _platform_, which is I think nuanced. There's platform the way that you mean it [like a hosting platform] and a speech platform is a place where you can create reach and/or legitimacy. This is a
speech platform - I'm an official person standing behind a podium in a room where I was able to draw an audience, putting someone on your conference schedule is platforming them. Social media sites are speech platforms because they allow you to pay money to buy an audience and the whole purpose of the system is to drive attention to things. The open web in and of itself is not much of a speech platform because it does not provide any legitimacy. Anybody can buy a domain name, it does not provide reach, no one's going to visit your website. If you build it they don't necessarily come - you have to do all these other things to actually create reach. I do think proprietors of speech platforms do have responsibilities for how they're used, but my perspective is that Pantheon as an underlying piece of infrastructure is not much of a speech platform at all,
right? People build things that you could consider speech platforms on top of us, but our service is more of a raw material.

The idea of a _hosting_ platform being different from a _speech_ platform is not something I'd considered before, and I think he's probably right in making that nuanced distinction. I don't know that I agree with his abdication of responsibility simply because his company isn't actively drawing an audience, though. While, _technically_ yes, anyone can buy a domain name and it provides all the legitimacy of Twitter's blue check marks these days, a domain name does still carry some subconscious weight for many internet users. Facebook, Twitter, and spam email are all pretty simple tools to funnel eyeballs away from moderated "speech platforms" to your site, and now hate groups can say anything they want short of doing "direct harm"? That seems like a convenient cop-out to me. Additionally, even if Pantheon isn't a speech platform, they are nonetheless helping further the ADF's mission by serving their content, hosting their legal briefs, and serving as the portal for this group to fundraise. Whether you're actively providing a group reach or not, as the provider of technology to a hate group you have responsibilities for how _Pantheon_ is used.

Similarly from David:

> Most extremist activity on the Internet is correlated with the reach side of this issue in the sense that the internet before the advent of major social media platforms and other things that would promulgate speech and and algorithmically bubble it up - whether we're talking about search engines, us, social media organizations, really even some of the modern news media - that is what the correlation and even causal effects seem to be related to for the expansion of extremism on the
internet. That's the primary thing that we have to be concerned about. It's not about some philosophical distinction on minutia, but like, what the actual implications of the choices are.

Again, I would agree on the surface level. A lot of the spread of extremism on the internet _is in fact_ driven by social media and engagement economics. If this concept is new to you, I'd encourage you to spend some time watching the [Smarter Every Day series](https://youtu.be/1PGm8LslEb4) on how the algorithms of YouTube, Facebook, and Twitter work. But once you've sat with the above statement for a moment, re-read that last sentence: _"It's not about some philosophical distinction on minutia, but like, what the actual implications of the choices are."_

What's the implication of Pantheon's choice to _not_ remove this site from their infrastructure? The conclusion I come to is that Pantheon does not deem this group to be dangerous, repulsive, or in violation of their terms of service enough to boot them - and what does that imply of Pantheon? Is Pantheon a company that's just ok with homophobic vitriol? Is Pantheon a company that's ok with their employees not having reproductive autonomy?

## Rebuttal #6: The best time to establish a policy is 30 years ago, the second best time is now.

From Josh:

>  I don't want to promise something that we're not going to deliver on. I don't think that we're gonna reverse course on this specific decision because we're not ready to change our overall stance that we've had for the last 12 years. That's something that we would need a lot more thought and we'd have to be really confident that we were moving to something that helped us feel good about the decisions we were making and was very consistent and was very transparent and was as objective as possible. The challenge that is moving into inserting a values-based screen for who we serve is it then all comes down to "well who's making those judgments" and "how are they being made" and the further you walk away from really clear lines the more murky that process gets and we've seen people get lost in the sauce.

I empathize with you Josh, but I also don't run a hosting platform that serves hundreds or thousands of clients. While you're shielded from _legal_ responsibility for the company you chose to keep and the content you help to serve, the _social_ responsibility rests squarely on Pantheon's shoulders.

Your company has been a pillar of the Drupal and WordPress communities. We've clamored after your corporate swag, and plastered your name on our events. But _our_ community has [its values](https://drupal.org/association/mission) figured out:

-   **COMMUNICATION:** We value communication. We seek community participation. We are open and transparent.
-   **RESPECT:** We respect and value inclusivity in our global community and strive to recognize, understand, and respond to its needs.
-   **ACTION:** We act decisively and proactively, embracing what we learn from both our successes and our mistakes.
-   **FUN:** We create environments that embrace humor resulting in fun, positive, supportive and safe interactions.
-   **TEAMWORK:** We add value to the Drupal community by helping each other solve problems to create quality human and digital experiences.

Separately, Josh stated:

> I also understand that like people haven't heard much from Pantheon about this you know we've had one-on-one conversations with a lot of folks but we haven't like communicated broadly and publicly about it and the the reason for that is that in the the contours of internet discourse this is just a really hard conversation to have productively ... One of the things that in retrospect I think we did that was totally a mistake was we didn't talk about this type of challenge in the past like there were many opportunities because these kinds of issues flare up with across different providers with some regularity there are many opportunities for us to have a conversation proactively ... I think it would have helped if if we had been clearer about our perspective on this earlier so people at least understood where we were coming from

Gosh, if only you had a platform.
