---
type: essay
url: 2011/01/unlicense-1st-year.html
title: "The Unlicense: The First Year in Review"
subtitle: A brief recap of the happenings on this front since I first introduced the Unlicense.org initiative exactly a year ago.
date: 2011-01-01T23:00:00Z
lastmod:
draft: false
authors:
  - arto
categories:
  - Technology
tags:
  - technology
  - copyright
  - public domain
  - Unlicense
  - unlicensing
  - Creative Commons
  - CC0
projects:
  - unlicense
summary: "It's Public Domain Day again, and it's now been exactly a year since I first introduced the Unlicense.org initiative: an easy-to-use template and process intended to help coders waive their copyright and dedicate all their code to the public domain with no strings attached. It seems a good time for a brief recap of the happenings on this front over the last 365 days."
---

It's [Public Domain Day][] again, and it's now been exactly a year since I [first introduced][set-your-code-free] the
[Unlicense.org][] initiative: an easy-to-use template and process
intended to help coders waive their copyright and dedicate all
their code to the [public domain][] with no strings attached. It seems a good time for a brief recap of the happenings on this front over the last 365 days.

A year ago, the first three hackers to adopt the Unlicense were [Ben Lavender][], [Zachary Voase][], and I. All open-source software the three of us have produced in the last year, combined totaling tens of thousands of lines of code, has been entirely copyright-free. You can "steal" it all you like, and we just won't care. You can "forget" to attribute us, and we'll "forget" to give a damn. We have better things to do. And as it turns out, we're not the only ones to think that way.

The Unlicense initiative grew from numerous coffee-and-beer discussions the three of us had had throughout the rainy Spanish winter regarding how we could stop copyrighting the code we were each publishing as open source. Informed by much previous reading on the [sordid history of copyright][TSHoCatPoaPCW], and philosophically speaking no doubt inspired and prompted by [Mike Gogulski][]'s visit in the early winter, we had each arrived at the same basic dilemma: we wanted out of the copyright game, but were unsure how it could effectively be done in practice. Precedent was scarce.

Researching the matter extensively clarified what [had to be done][dissection], but also made clear that few others would have been likely to expend such an effort in figuring it all out. Even if others might otherwise have been inclined to opt out of copyrighting their code, the perceived legal morass of the public domain would have incentivized just using some very permissive license instead. This was a problem that deserved a solution.

Thus was conceived the legal hack that became the [Unlicense][Unlicense.org], a name I had come up with after earlier discussions with [Peter Saint-Andre][] and [Vinay Gupta][] about rebranding the public domain.

As I've previously detailed in [_Dissecting the Unlicense: Software Freedom in Four Clauses and a Link_][dissection], the solution presented by the Unlicense was heavily inspired by the approach and the process used by one of the most successful public-domain software projects of all time, the [SQLite][] database system. If you have a smartphone, you already have SQLite in your pocket. You also almost certainly have SQLite on your desktop or laptop. With at the very least [500 million deployments][SQLite stats] worldwide, SQLite is everywhere. Its licensing terms, or more to the point its non-licensing terms, have certainly not impeded that success; if anything, they have driven its proliferation.

Other significant inspiration and ingredients for the Unlicense were the hybrid public-domain dedication and copyright waiver approach used by [Creative Commons Zero][CC0], as well as the don't-sue-me legalese from the widely-used [MIT/X11 license][MIT]. A final component was understanding that open-source software has important established conventions, among them the `LICENSE` file, and that beyond everything else we had to also be able to satisfactorily answer pragmatic questions such as _"But everyone has a license file; hence I need a license file; what do I put in it?"_

When we launched the Unlicense a year ago, we were not at all certain how it would be received or if it would have any uptake whatsoever. The immediate reaction was perhaps not greatly encouraging: my initial blog post topped the Reddit "most controversial" list for a time, the [downvotes eventually winning][Reddit] the day.

This was to be expected, as the target audience for the Unlicense really consists only of those developers who are already using permissive licensing; yet [copyleft][] advocates still pretty much dominate open-source communities, though perceptibly in relative terms rather less overbearingly than they did a decade before. So, the Unlicense immediately served to add a new variable and more fuel to the perennial [BSD/MIT vs GPL][] flamewars. From long [conversation threads][copyleft chatter] on Twitter and Identi.ca, some of the more amusing strong-copyleft reactions included assertions such as that the Unlicense ["allows evil stuff"][evil stuff] and an implication that we might be some sort of [a Microsoft conspiracy][MSFT conspiracy]. (Bill Gates, we're all ears should you wish to fund public-domain advocacy.)

There were also positive early signs, however. Most importantly, external adoption of the Unlicense began immediately. For example, some programmers initially used the Unlicense for the code snippets that they published on their blogs, or similarly unlicensed smaller scripts and utilities that they published on GitHub and elsewhere. Within a couple of weeks, the popular open-source software blog [OStatic][] was [describing us as a "movement"][OStatic post]. They may have jumped the gun on that one a wee bit, but now, a year later, it doesn't seem an entirely unfitting description.

It's difficult to give estimates of current Unlicense adoption. We initially tried to maintain [a project list](https://unlicense.org/#unlicensed-free-software) on Unlicense.org, but its current 50-odd listed projects represent only a small subset of the entirety of Unlicense usage out there today. We still add projects to the list upon request, but with [Google Alerts][] notifying me of new unlicensed scripts and projects just about every single day, we've long since passed the point where that list could be considered canonical or up to date.

The best estimate I can give, from having semi-actively tracked the growth of adoption for the last year, is that there must at the very least now be many hundreds of projects using the Unlicense. I doubt we have yet crossed the 1,000-project mark, but I'm quite certain that in another year's time we will have.

Already as of today, Unlicense adopters include a very diverse range of projects: software libraries, code generators, database abstraction layers and even database engines, web frameworks, HTML templates, blogging engines, low-level network utilities, 3D game engines, command-line utilities, Mac OS X applications, iPhone games, Firefox and Google Chrome extensions, jQuery plugins, Django packages, WordPress plugins, Drupal modules, Ubercart and VirtueMart payment gateways, and much more besides.

The adoption rate is also growing, as makes sense when awareness of the Unlicense diffuses ever wider, reaching ever more developers. Since we've done hardly any advocacy other than the rare blog post and occasional tweet, our growth factors have really only been word-of-mouth plus any implicit or explicit references in the documentation of existing unlicensed projects. It seems to have been enough.

Looking forward to 2011 and beyond, the future of the Unlicense, and the public domain more generally, looks promising.  I recently had the opportunity to engage in a brief [dialogue][ML dialogue] with [Mike Linksvayer][], the vice president of [Creative Commons][]. It turns out that the folks at Creative Commons are already aware of the Unlicense initiative, and supportive of it. This is truly gratifying and welcome news indeed.

Mr. Linksvayer relates that though Creative Commons have previously [discouraged][CCsw] using any of their licensing instruments for software, there has been discussion concerning the application of CC0, specifically, to cover software as well. This raises the question of how that might affect the Unlicense initiative or whether existing Unlicense adopters would be compatible with CC0 code as well; the answer is simple, due to the public domain being the superset of all more restrictive licensing arrangements.

Firstly, should CC0 come to be considered an exception to the more general Creative Commons policy regarding applicability to software, Mr. Linksvayer [sees that as complementary][gondwanaland] to the Unlicense, not competitive. Further, both approaches are fully compatible and interoperable, since both are at base intended as explicit public-domain dedications and copyright waivers, not licenses per se. And it's naturally very easy to remix code that has no strings whatsoever attached to it: there's just nothing to get tangled up in.

If the Unlicense and CC0 both become viable options for publishing public-domain code, then the choice of which one to use becomes almost just a question of personal brand preference: those more comfortable in the mainstream might perhaps be expected to go with CC0, yet others might still prefer the explicit and strong "opt-out" subtext of the Unlicense. In any case, both will amount to the same thing: copyright-free code that anyone can use freely for any purpose without restriction.

Here's to a great 2011 during which we'll seek to collaborate with Creative Commons on establishing both the Unlicense and CC0 more widely, grow the public domain as well as related advocacy and education efforts, and do our part in serving as the crucial counterbalance to copyright laws that keep getting ever worse, never better. Anyone looking to join the conversation should follow [@mlinksva][] and [@bendiken][] on Twitter and/or Identi.ca, as well as consider subscribing to the [`CC-licenses`][cc-licenses]/[`CC-community`][cc-community] and [`Unlicense`][mailing list] mailing lists.

[@mlinksva]:          https://x.com/mlinksva
[@bendiken]:          https://x.com/bendiken
[cc-licenses]:        https://lists.ibiblio.org/mailman/listinfo/cc-licenses
[cc-community]:       https://lists.ibiblio.org/mailman/listinfo/cc-community
[CC0]:                https://creativecommons.org/publicdomain/zero/1.0/
[CCsw]:               https://wiki.creativecommons.org/FAQ#Can_I_use_a_Creative_Commons_license_for_software.3F
[ML dialogue]:        https://groups.google.com/group/unlicense/browse_thread/thread/6a7f4f1c9d0d1b10
[Mike Linksvayer]:    https://creativecommons.org/about/people#ml
[Creative Commons]:   https://creativecommons.org

[gondwanaland]:       https://gondwanaland.com/mlog/2011/01/01/your-public-domain-day/
[public domain]:      https://me.stpeter.im/essays/publicdomain.html
[Ben Lavender]:       https://x.com/bhuga
[Zachary Voase]:      https://x.com/zacharyvoase
[Mike Gogulski]:      https://x.com/mikegogulski
[Mike Linksvayer]:    https://gondwanaland.com/mlog/
[Creative Commons]:   https://creativecommons.org
[SQLite]:             https://www.sqlite.org
[SQLite stats]:       https://www.sqlite.org/mostdeployed.html
[Peter Saint-Andre]:  https://x.com/stpeter
[Vinay Gupta]:        https://x.com/leashless
[copyleft chatter]:   https://identi.ca/conversation/18829324#notice-18829383
[MSFT conspiracy]:    https://identi.ca/notice/18831908
[evil stuff]:         https://identi.ca/notice/18829999
[Google Alerts]:      https://www.google.com/alerts
[Reddit]:             https://www.reddit.com/r/programming/comments/akrur/set_your_code_free/
[Topsy]:              https://topsy.com/tb/unlicense.org
[OStatic]:            https://ostatic.com
[OStatic post]:       https://ostatic.com/blog/the-unlicense-a-license-for-no-license
[Public Domain Day]:  https://www.law.duke.edu/cspd/publicdomainday
[MIT]:                https://en.wikipedia.org/wiki/MIT_License
[CC0]:                https://creativecommons.org/publicdomain/zero/1.0/
[BSD/MIT vs GPL]:     https://www.softpanorama.org/Copyright/index.shtml
[copyleft]:           https://en.wikipedia.org/wiki/Copyleft
[set-your-code-free]: https://ar.to/2010/01/set-your-code-free
[dissection]:         https://ar.to/2010/01/dissecting-the-unlicense
[Unlicense.org]:      https://unlicense.org
[mailing list]:       https://groups.google.com/group/unlicense
[WAotPD]:             https://me.stpeter.im/essays/publicdomain.html
[natural right]:      https://en.wikipedia.org/wiki/Natural_law
[TSHoCatPoaPCW]:      https://questioncopyright.org/promise
