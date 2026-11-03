---
title: Rediscovering the Lively Road Not Taken
date: '2008-05-27T22:00:00Z'
categories:
- Technology
tags:
- Emacs
- JavaScript
- Lisp
- Lively Kernel
- Morphic
- Smalltalk
- Squeak
summary: Dan Ingalls' Lively Kernel, a self-hosting development environment in JavaScript, carries on the essence of Smalltalk and the Lisp machines.
original:
  url: http://bendiken.net/2008/05/27/the-lively-road-not-taken
  archive: https://web.archive.org/web/20080827160756/http://bendiken.net/2008/05/27/the-lively-road-not-taken
---

Speaking fondly of an operating system usually misconstrued by a younger
generation as merely an ancient text editor older than Stallman's beard, Steve
Yegge
[states](https://web.archive.org/web/20080527/http://steve-yegge.blogspot.com/2008/05/dynamic-languages-strike-back.html "Dynamic Languages Strike Back")
that *"Emacs is the world's last Lisp Machine. All the rest of them are at
garage sales."*

While that's indeed the case in a strict sense, in a slightly wider sense the
essence of the legendary [Lisp
machines](https://web.archive.org/web/20080527/http://en.wikipedia.org/wiki/Lisp_machine)
has managed to
[survive](https://web.archive.org/web/20080527/http://xkcd.com/297/) to the
present day in at least one other closely related fork in the road, namely the
[Squeak](https://web.archive.org/web/20080527/http://www.squeak.org/) project.
And now, from [Dan
Ingalls](https://web.archive.org/web/20080527/http://en.wikipedia.org/wiki/Dan_Ingalls)
— the original designer of Squeak and one of the fathers of
[Smalltalk](https://web.archive.org/web/20080527/http://www.smalltalk.org/) —
comes [Lively
Kernel](https://web.archive.org/web/20080527/http://research.sun.com/projects/lively/ "Lively Kernel at Sun Labs"),
a self-hosting, metacircular prototyping and development environment implemented
in
[JavaScript](https://web.archive.org/web/20080527/http://www.crockford.com/javascript/),
a programming language that itself has
[considerable](https://web.archive.org/web/20080527/http://weblogs.mozillazine.org/roadmap/archives/2008/04/popularity.html "The father of JavaScript recounts how he was recruited to Netscape with the promise of 'doing Scheme' in the browser.")
Lisp ancestry.

[![Lively Kernel
screenshot](https://raw.githubusercontent.com/artob/ar.to/master/src/content/essays/2008/05/20080527-lively-kernel.jpg)](https://web.archive.org/web/20080527/http://www.youtube.com/watch?v=gGw09RZjQf8 "Google TechTalk of Dan Ingalls presenting Lively Kernel")

Ingalls and the Lively Kernel
[team](https://web.archive.org/web/20080527/http://research.sun.com/projects/lively/#credits)
aim at nothing less than a bottom-up rethinking of the present-day web
development stack. They've recreated, in less than 10 KLOC of JavaScript, a
foundation that demonstrates the benefits of systematically and unapologetically
examining your assumptions and mercilessly throwing all possible [incidental
complexity](https://web.archive.org/web/20080527/http://www.virtualschool.edu/mon/SoftwareEngineering/BrooksNoSilverBullet.html)
out the window.

Lively Kernel is still at a very early stage, but watching Ingalls's
[presentation at
Google](https://web.archive.org/web/20080527/http://www.youtube.com/watch?v=gGw09RZjQf8 "Google TechTalk of Dan Ingalls presenting Lively Kernel")
and subsequently [playing with the
system](https://web.archive.org/web/20080527/http://research.sun.com/projects/lively/)
I experienced much the same "wow factor" as when [first
encountering](/2007/01/the-road-to-lisp "The Road to Enlightenment Is Littered with Irritating, Superfluous Parentheses")
Squeak many years ago. Here's one phrase I would like to hear more often: *"it's
not complicated; it's really easy"*. No cathedrals being built, here!

True to its intellectual heritage, the Lively Kernel system is "live" in a
manner fundamentally unlike even the best mainstream programming environments
today. Ditch all existing preconditioned primitive notions of tedious
edit-compile-run-crash-debug-rinse-repeat cycles, and jump right in to reprogram
the system from the inside out, your changes instantly taking effect as you go
along (there is a good demonstration of this in the aforementioned video when
Ingalls, on the fly, reverses the time flow in a running clock widget).

As anyone who has used Squeak knows, the immediacy of this way of working is
addicting, the unfettered malleability of pure [thought
stuff](/2007/01/lessons-from-the-science-of-nothing-at-all) giving rise to
analogies of, say, sculpting clay &mdash a stark contrast to the
all-too-familiar constant friction and resistance of a bureaucratic chain of
command founded in long-obsolete metaphors of folders and files, or the often
arbitrary and unproductive distinctions between compile time and runtime.

This is powerful stuff, and yet the implementation code is, as Ingalls says,
very straightforward indeed. The core of Lively Kernel is a reimplementation of
[Morphic](https://web.archive.org/web/20080527/http://en.wikipedia.org/wiki/Morphic_(software)),
John Maloney's ingenious user-interface framework that also formed the basis for
both Squeak and an earlier [Sun
Labs](https://web.archive.org/web/20080527/http://research.sun.com/) research
project, the
[Self](https://web.archive.org/web/20080527/http://research.sun.com/self/ "Self at Sun Labs")
system — the latter which, incidentally, was another major influence on the
design of JavaScript. The graphics primitives in Lively Kernel are based on
[SVG](https://web.archive.org/web/20080527/http://en.wikipedia.org/wiki/Scalable_Vector_Graphics),
which means that, as in NeXTSTEP and Mac OS X, all output is inherently scalable
to any desired resolution. (There is an in-depth [technical
overview](https://web.archive.org/web/20080527/http://research.sun.com/projects/lively/LivelyKernel-TechnicalOverview.pdf "The Sun Labs Lively Kernel - A Technical Overview (PDF)")
available for those who want to dig deeper into Morphic and Lively Kernel's
architecture.)

One marked difference to Squeak appears to be the abandonment of a pure
[image-based](https://web.archive.org/web/20080527/http://www.onlamp.com/pub/a/onlamp/2006/09/21/learning_smalltalk.html?page=2 "Smalltalk for Everyone Else - The Smalltalk Image")
environment, where the current snapshot of the code base would be stored e.g. in
an opaque, system-specific binary format. While serialized "live images" have
historically been one of the distinguishing features of Smalltalk systems (and
indeed Common Lisp systems), they have not contributed to interoperability with
more primitive systems (i.e. Unix) and hence have served as
[impediments](https://web.archive.org/web/20080527/http://www.cincomsmalltalk.com/blog/blogView?showComments=true&entry=3279343432 "Smalltalk's Problem?")
to more widespread adoption.

The near-term roadmap for Lively Kernel seems to include WebDAV-based
over-the-wire serialization, which suggests to me that e.g. Subversion
(specifically, Apache's
[mod_dav_svn](https://web.archive.org/web/20080527/http://svnbook.red-bean.com/en/1.4/svn.serverconfig.httpd.html))
could eventually serve as a Lively Kernel repository. If so, this would preserve
the considerable advantages of image-based environments while doing away with
the major perceived disadvantage.

Of course, given that I'm praising simplicity here, I would be remiss not to
mention that WebDAV and
[DeltaV](https://web.archive.org/web/20080527/http://svnbook.red-bean.com/en/1.4/svn.webdav.basic.html)
do suffer from considerable complexity bloat (as I know all too well from
painful close-range exposure), and a much simpler REST and JSON-based
alternative is not difficult to imagine. However, at some point you do have to
interface with the external world in all its decadent glory; I think the ability
to piggyback on an existing revision control system might be a worthwhile
trade-off in this case.

The Lively Kernel interface at present still feels slightly sluggish, but the
project's timing is most opportune. JavaScript is already today one of the most
widely-deployed programming languages of all time, with an existing installed
base in the hundreds of millions. The imminent next generation of browsers —
[Firefox
3](https://web.archive.org/web/20080527/http://mozillalinks.org/wp/2008/02/firefox-3-ultimate-feature-performance/)
and [IE
8](https://web.archive.org/web/20080527/http://blogs.msdn.com/gauravseth/archive/2008/03/06/jscript-performance-in-internet-explorer-8-beta.aspx)
— will bring some pretty significant overall JavaScript performance boosts, not
to mention that some Firefox version a little
[further](https://web.archive.org/web/20080527/http://www.mozilla.org/projects/tamarin/faq.html#when)
down the line is set to integrate
[Tamarin](https://web.archive.org/web/20080527/http://www.mozilla.org/projects/tamarin/),
the native-code-compiling [JavaScript
2](https://web.archive.org/web/20080527/http://developer.mozilla.org/presentations/xtech2006/javascript/ "JavaScript 2 and the Future of the Web")
engine that will run circles around many of the sundry popular "standalone"
scripting languages. JavaScript is clearly set to become the [lingua
franca](https://web.archive.org/web/20080527/http://steve-yegge.blogspot.com/2007/02/next-big-language.html "The Next Big Language")
of the next decade, and Lively Kernel provides an early glimpse of the ride we
may be in for.

Yegge
[remarks](https://web.archive.org/web/20080527/http://steve-yegge.blogspot.com/2008/05/dynamic-languages-strike-back.html "Dynamic Languages Strike Back")
*"Lisp Machines pretty much had it nailed, as far as I'm concerned"*, to which I
can only say: amen, brother. It seems a peculiar world where our best hope for
advancing the state of the art consists of merely attempting to duplicate
half-forgotten, decades-old good ideas in newer more-devolved programming
languages, but such truly is the myopic, amnesiac reality of "[worse is
better](https://web.archive.org/web/20080527/http://www.dreamsongs.com/WorseIsBetter.html "Lisp: Good News, Bad News, How to Win Big")".

On the other hand, efforts such as Lively Kernel remind us that heretofore
passed-by opportunity lies right off the beaten path, on the divergent grassy
road just wanting some wear. To paraphrase Ingalls's long-time collaborator, the
equally industrious and illustrious [Alan
Kay](https://web.archive.org/web/20080527/http://bc.tech.coop/blog/060224.html "The Most Important Idea in Computer Science"):
it seems that in an industry stuck on a repeat loop of variations on
[Greenspun's
Tenth](https://web.archive.org/web/20080527/http://lispers.org/#greenspun "Greenspun's Tenth Rule of Programming"),
the best way to predict the
[future](https://web.archive.org/web/20080527/http://blip.tv/file/568689 "RailsConf 2007 presentation by Avi Bryant")
may simply be to rediscover it.
