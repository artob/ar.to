---
title: R5.97RS Scheme Considered Harmful
date: '2007-08-13T09:00:00Z'
categories:
- Technology
tags:
- ballot
- Lisp
- R6RS
- ratification
- Scheme
- standards
summary: The ballot I submitted against ratifying the final R6RS draft of the Scheme standard, with my reasons.
original:
  url: http://bendiken.net/2007/08/13/r6rs-scheme-considered-harmful
  archive: https://web.archive.org/web/20080509082248/http://bendiken.net/2007/08/13/r6rs-scheme-considered-harmful
---

*The [electoral
vote](https://web.archive.org/web/20070813/http://www.r6rs.org/ratification/electorate.html)
regarding the
[ratification](https://web.archive.org/web/20070813/http://www.r6rs.org/ratification/)
of the [final R6RS
draft](https://web.archive.org/web/20070813/http://www.r6rs.org/) closes
momentarily. After spending much of the weekend giving this latest draft a fair
reading (which took some work as it has ballooned to over 160 pages, contrasted
with the 50 pages that sufficed to define
[R5RS](https://web.archive.org/web/20070813/http://www.schemers.org/Documents/Standards/R5RS/)),
I’ve bit the bullet and voted against ratifying it. As all votes and their
explanations will eventually (as of August 26) be a matter of public record,
here is the ballot I submitted, with formatting and relevant hyperlinks added:*

Deliberating on the latest R5.97RS draft I find much that is agreeable about it,
and it would be tempting to vote for its ratification. Indeed if but the
programming language described therein would be named anything else than
[Scheme](https://web.archive.org/web/20070813/http://en.wikipedia.org/wiki/Scheme_%28programming_language%29),
it might seem the promising start of a practical and useful modern
[Lisp](/2007/01/the-road-to-lisp) dialect.

Yet as the R5.97RS main and library reports still read today, the resulting
language is most definitely not Scheme. My primary issue with the draft is that
it betrays the spirit of its very own [opening
paragraph](https://web.archive.org/web/20070813/http://www.r6rs.org/document/html-5.97/r6rs-Z-H-3.html):
*“Programming languages should be designed not by piling feature on top of
feature, but by removing the weaknesses and restrictions that make additional
features appear necessary.”*

I should very much hope that paragraph will never be removed in future RnRS
reports! Evaluating the rest of the main and library report against that
principle, I think it stands out that the draft has simply suffered considerable
feature creep and is vastly overspecified and overcomplex. In a word, it is too
ambitious (or presumptuous, depending on your point of view).

I’m convinced the draft as it stands would derail Scheme, in the sense of
putting the language on a course that it is unlikely could be easily corrected
through later RnRS iterations. Thus I must at this time, with apologies to the
editors, vote against ratification and hope that there will be enough dissenting
voices to reopen the editorial process.

If the vote concerned only the [main
report](https://web.archive.org/web/20070813/http://www.r6rs.org/document/html-5.97/r6rs.html)
in something not too far from its present form, ratification would not be an
unfeasible prospect; and this despite the report having almost doubled in size.
I do share others’ misgivings on issues such as requiring the full [numeric
tower](https://web.archive.org/web/20070813/http://en.wikipedia.org/wiki/Numerical_tower)
and chaining Scheme at the hip to Unicode; still, the main report all in all
appears decent, and a standardized library definition facility, even if the
current proposal seems rather overcomplex, would be a most important practical
benefit provided by core R6RS.

However, the proposed [standard library
report](https://web.archive.org/web/20070813/http://www.r6rs.org/document/lib-html-5.97/r6rs-lib.html)
is simply unacceptable. Not only does it gratuitously eschew important and
widely-used existing
[SRFIs](https://web.archive.org/web/20070813/http://srfi.schemers.org/) (such as
the
[SRFI-1](https://web.archive.org/web/20070813/http://srfi.schemers.org/srfi-1/srfi-1.html)
list library, and
[SRFI-69](https://web.archive.org/web/20070813/http://srfi.schemers.org/srfi-69/srfi-69.html)
hash tables) in favor of its equivalent incompatible functionality, but one must
ask why features such as, say, byte vectors, enumerations and hash tables should
even be included in the RnRS reports in the first place?

The desire for a standard library is widespread, both for reasons of portability
and practicability, but I think it is clear that when it comes to library
functionality, the [SRFI
process](https://web.archive.org/web/20070813/http://srfi.schemers.org/srfi-process.html)
has proven itself and works better than the committee process being voted on
here. Attempting to evolve a standard library through the rightly slow-moving
RnRS process seems to me shortsighted and counterproductive in the long run.

Thus, I consider the standard library report largely superfluous and indeed
harmful. Instead of attempting to set in stone a controversially large standard
library with the RnRS process, I believe the R6RS committee should strictly
confine itself to the core language only, and fully embrace the SRFI process for
the standardization and dissemination of all non-essential library features.

**Update:** For some other dissenting votes and their rationale, see [Will
Clinger](https://web.archive.org/web/20070813/http://www.ccs.neu.edu/home/will/R6RS/essay.txt),
[Marc
Feeley](https://web.archive.org/web/20070813/http://article.gmane.org/gmane.lisp.scheme.gambit/1577),
[Felix
Winkelmann](https://web.archive.org/web/20070813/http://www.r6rs.org/ratification/electorate.html#X41),
[Dan
Muresan](https://web.archive.org/web/20070813/http://www.omnigia.com/news/2007/07/25/r6rs-guesstimate-ratification-result/),
[Brian
Jaress](https://web.archive.org/web/20070813/http://brian-jaress.livejournal.com/4825.html),
[Lynn
Winebarger](https://web.archive.org/web/20070813/http://lists.r6rs.org/pipermail/r6rs-discuss/2007-August/003165.html),
[Chris
Hanson](https://web.archive.org/web/20070813/http://lists.r6rs.org/pipermail/r6rs-discuss/2007-August/003166.html).

**Update**: Preliminary results [are now
available](https://web.archive.org/web/20070813/http://www.r6rs.org/ratification/preliminary-results.html).
It looks like the draft **will** be ratified, having passed by a rather narrow
margin. Oh well. It’s interesting to speculate whether it [could have
passed](https://web.archive.org/web/20070813/http://lists.r6rs.org/pipermail/r6rs-discuss/2007-August/003190.html)
if the *nay* votes hadn’t mandated that participants dabble in essay writing.
Anyhow, as it is, the [nay
ballots](https://web.archive.org/web/20070813/http://www.r6rs.org/ratification/preliminary-results.html#X67)
do make for interesting reading: ignoring the various nitpicky issues with the
draft, there is a clear, consistent thread running through them; suffice to say
the report’s traditional opening paragraph is referred to often enough to cast
universal doubt on whether this new language still deserves to be called Scheme.
So, to call it as I see it: *Scheme is dead, long live Scheme*.
