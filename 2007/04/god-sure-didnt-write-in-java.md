---
title: God Sure Didn't Write in Java
date: '2007-04-21T21:00:00Z'
categories:
- Technology
tags:
- AI
- Java
- Lisp
- McCarthy
- PAIP
summary: On the folly of building artificial intelligence in stone-age programming languages, and why Lisp is uniquely suited to the task.
original:
  url: http://bendiken.net/2007/04/21/god-sure-didnt-write-in-java
  archive: https://web.archive.org/web/20080509080813/http://bendiken.net/2007/04/21/god-sure-didnt-write-in-java
---

It bemuses me to read about people who are
[seriously](https://web.archive.org/web/20070421/http://www.agiri.org/) working
on [artificial
intelligence](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Artificial_intelligence)
using stone-age programming languages like C++ or, heaven forbid,
[Java](https://web.archive.org/web/20070421/http://www.joelonsoftware.com/articles/ThePerilsofJavaSchools.html).
Take this following backstory excerpt, for example:

> *Sure, the thinking machine might not get finished in the 3 months that our
> seed money would last us. But, in the meantime, to tide us over, we’d solve a
> simpler problem: we’d use some of the bits and pieces of our unfinished AI
> engine to predict the financial markets.*
>
> *The technical co-founders and I had been working on the first version of the
> AI engine for many months, by the time the seed funding came in. A healthy
> amount of software code existed (although the code itself wasn’t entirely
> healthy). ...*
>
> *Now that we knew what we were doing better, we moved further and further away
> from the brain as a concrete design inspiration. ...*
>
> *We found the increasing complexity of the various agents in the system was
> stressing the codebase. After a lot of difficult debate, we decided to grit
> our teeth and rewrite the core of the system from scratch. ...*
>
> *Cassio proved to be an outstanding manager as well as an excellent software
> engineer and designer, and we let him accumulate assistants until, at one
> point, we had 60 people there out of a total company staff of 130. ...*
>
> *We were quickly realizing what should have been obvious from the get-go –
> that getting our thinking machine to work could well be a multi-year pursuit.
> ...*
>
> *The Webmind system we had a month ago consisted of over 750,000 lines of Java
> code. ... Most of the 750,000 lines of Java is still useful — it covers issues
> like communicating with other software processes, balancing processing among
> different machines, reading parameters from files, and so on and so forth.
> Necessary infrastructure. ...*
>
> *I reckon that, at this point, I’m at serious risk of becoming the Charles
> Babbage of AI. Babbage designed the first computer — a purely mechanical
> computer, pre-electronics. But it was just too damn complicated to build using
> the technology he had at his disposal. He spent all his money and his life on
> it, and never got it done.*
>
> — Ben Goertzel, [Waking Up from the Economy of
> Dreams](https://web.archive.org/web/20070421/http://www.goertzel.org/benzine/WakingUpFromTheEconomyOfDreams.htm)

If you’re going to attempt scaling the formidable, cloud-obscured peak of Mount
Intelligence, you’d think that choosing the best possible toolset would be of
some importance. While you might certainly overcome a small hill even crawling
barefoot, blindfolded, and with your hands tied behind your back, why in the
world would you suppose that this approach could possibly apply to the single
most difficult
[climb](https://web.archive.org/web/20070421/http://www.codinghorror.com/blog/archives/000830.html)
out there?

If a lot of [very smart
people](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/MIT_Artificial_Intelligence_Laboratory)
working on artificial intelligence using one of the [most powerful programming
languages known to man](/2007/01/the-road-to-lisp) didn’t make [all that much
headway](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/AI_winter),
it’s safe to say that programming in
[Java](https://web.archive.org/web/20070421/http://www.paulgraham.com/javacover.html),
a language [explicitly designed by good programmers for average
programmers](https://web.archive.org/web/20070421/http://lispers.org/#steele),
isn’t going to cut it.

After all, it’s no coincidence that the phrase [artificial
intelligence](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Artificial_intelligence)
was first coined by [John
McCarthy](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/John_McCarthy_%28computer_scientist%29),
the very same guy who invented Lisp. Solving difficult problems necessitates
[better
tools](https://web.archive.org/web/20070421/http://www.paulgraham.com/gh.html)
than solving easy problems.

Lisp’s significance rests on some [fundamental
tenets](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Lambda_calculus),
which is why the language has since its inception invited
[cosmic](https://web.archive.org/web/20070421/http://www.lisperati.com/logo.html)
[comparison](https://web.archive.org/web/20070421/http://xkcd.com/c224.html).
Adventurers setting out to conquer Mount Intelligence would do well to heed the
advice from the song God Wrote in Lisp Code

*I was taught
[assembler](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Assembly_language)
in my second year of school.\
It’s kinda like construction work — with a toothpick for a tool.\
So when I made my senior year, I threw my code away,\
And learned the way to program that I still prefer today.*

*Now, some folks on the Internet put their faith in
[C++](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/C)++.\
They swear that it’s so powerful, it’s what God used for us.\
And maybe it lets mortals dredge their objects from the
[C](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/C_%28programming_language%29).\
But I think that explains why only God can make a tree.*

*For God wrote in
[Lisp](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Lisp_%28programming_language%29)
code\
When he filled the leaves with green.\
The fractal flowers and recursive roots:\
The most lovely hack I’ve seen.\
And when I ponder snowflakes, never finding two the same,\
I know God likes a language with its own four-letter name.*

*Now, I’ve used a SUN under Unix, so I’ve seen what C can hold.\
I’ve surfed for
[Perls](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Perl),
found what
[Fortran’s](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Fortran)
for,\
Got that
[Java](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Java_%28programming_language%29)
stuff down cold.\
Though the chance that I’d write
[COBOL](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/COBOL)
code\
is a
[SNOBOL’s](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/SNOBOL)
chance in Hell.\
And I basically hate hieroglyphs, so I won’t use
[APL](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/APL_%28programming_language%29)
.*

*Now, God must know all these languages, and a few I haven’t named.\
But the Lord made sure, when each sparrow falls,\
that its flesh will be
[reclaimed](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Garbage_collection_%28computer_science%29).\
And the Lord could not count grains of sand with a [32-bit
word](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/32-bit).\
Who knows where we would go to if Lisp weren’t what he preferred?*

*And God wrote in Lisp code\
Every creature great and small.\
Don’t search the disk drive for man.c,\
When the listing’s on the wall.\
And when I watch the lightning\
Burn unbelievers to a crisp,\
I know God had six days to work,\
So he wrote it all in Lisp.*

*Yes, God had a deadline.\
So he wrote it all in Lisp.*

Incidentally, by far the best introduction to Lisp with a classic-AI bent is
*[Paradigms of Artificial Intelligence Programming: Case Studies in Common
Lisp](https://web.archive.org/web/20070421/http://norvig.com/paip.html)* ,
written in 1992 by [Peter
Norvig](https://web.archive.org/web/20070421/http://en.wikipedia.org/wiki/Peter_Norvig),
now Director of Research at Google. This book is something
[special](https://web.archive.org/web/20070421/http://norvig.com/paip-comments.html)
that should be on every programmer’s bookshelf, and it certainly demonstrates
why Lisp is uniquely suited for tackling hard problems such as AI. As a shortcut
into the mind-expanding aspects of learning Lisp, I would even recommend this
over
[newer](https://web.archive.org/web/20070421/http://www.gigamonkeys.com/book/)
introductory books.

*The [Lisp
song](https://web.archive.org/web/20070421/http://www.songworm.com/lyrics/songworm-parody/EternalFlame.html)
is freely redistributable provided it isn’t altered. Muchas kudos to [Bill
Clementson](https://web.archive.org/web/20070421/http://bc.tech.coop/blog/070301.html)
for the pointer. Oh, and just so there’s no confusion for the too
literal-minded:
[“God”](https://web.archive.org/web/20070421/http://www.mrdeity.com/), in the
scope of this article, has nothing whatsoever to do with the [Christian
deity](https://web.archive.org/web/20070421/http://www.whydoesgodhateamputees.com/your-delusion.htm)
nor any other purported supernatural entity of your choice.*
