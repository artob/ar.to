---
title: Lessons from the Science of Nothing at All
date: '2007-01-04T20:00:00Z'
categories:
- Technology
tags:
- DRM
- innovation
- Lisp
- methodology
- open source
summary: On Richard P. Gabriel's essay "Lessons From The Science of Nothing At All", about the ethereal nature and real importance of software.
---

<p><em><small>Originally published at <a href="https://web.archive.org/web/20080725102627/http://bendiken.net/2007/01/04/lessons-from-the-science-of-nothing-at-all">http://bendiken.net/2007/01/04/lessons-from-the-science-of-nothing-at-all</a>.</small></em></p>

[Richard P.
Gabriel](https://web.archive.org/web/20070104/http://en.wikipedia.org/wiki/Richard_P._Gabriel)
is musician, poet, and
[respected](https://web.archive.org/web/20070104/http://campus.acm.org/public/pressroom/press_releases/3_2005/newell_award_3_15_2005.cfm)
[Lisp](https://web.archive.org/web/20070104/http://lispers.org/) hacker.
Probably generally best known for coining the phrase “[worse is
better](https://web.archive.org/web/20070104/http://en.wikipedia.org/wiki/Worse_is_better)“
with his
[essays](https://web.archive.org/web/20070104/http://www.dreamsongs.com/Essays.html)
on why Unix and C [prevailed over superior
alternatives](https://web.archive.org/web/20070104/http://dreamsongs.com/WorseIsBetter.html),
he’s also the author of [several
books](https://web.archive.org/web/20070104/http://www.dreamsongs.com/Books.html)
including [*Innovation Happens
Elsewhere*](https://web.archive.org/web/20070104/http://dreamsongs.com/IHE/IHE.html)
(with [Ron
Goldman](https://web.archive.org/web/20070104/http://www.cs.rice.edu/~rng/)).

I’ve been greatly enjoying reading his various works from the past couple
decades, and recently stumbled across a particularly relevant essay of his that
I want to share. It’s called [*Lessons From The Science of Nothing At
All*](https://web.archive.org/web/20070104/http://www.dreamsongs.com/LessonsFromNothing.html),
and begins poetically enough: *“Where I come from we make things from nothing –
from dreams and fantasies.”*

Gabriel starts out by demonstrating that despite the fundamentally ethereal
nature of software, this most imaginary of things is of vital and real
importance for all our daily lives — something I’m sure that none of us
[IAD-affected](https://web.archive.org/web/20070104/http://en.wikipedia.org/wiki/Internet_addiction_disorder)
geeks will deny. He goes on to talk about reliability, or the general lack
thereof, inherent in software, and the real-life disasters that programming
errors can lead to. He describes
[ESA’s](https://web.archive.org/web/20070104/http://www.esa.int/) infamous
[Ariane 501 launch vehicle
failure](https://web.archive.org/web/20070104/http://en.wikipedia.org/wiki/Ariane_5_Flight_501):

> “... The stumped command computer turned to its backup, which was also
> stumped, and after noticing the extreme aerodynamic stress on the rocket, one
> of the two decided to self-destruct.
>
> You might think that the software running on the navigational computer wasn’t
> mature or well-tested. In fact, it was used by the Ariane 4 rockets for many
> years without any problems at all, and **not a single line of code was changed
> when it was put on Ariane 5 rockets.**“

Gabriel takes a look at the various development and project management
methodologies that have been tried so far in the software industry, starting
from the [waterfall
process](https://web.archive.org/web/20070104/http://www.waterfall2006.com/)
with its spectacular
[unsuitability](https://web.archive.org/web/20070104/http://www.codinghorror.com/blog/archives/000694.html)
for building things that [nobody has ever built
before](https://web.archive.org/web/20070104/http://www.codinghorror.com/blog/archives/000727.html)
(which pretty much defines software development). He also covers subsequent
alternatives and refinements such as the [cleanroom
process](https://web.archive.org/web/20070104/http://en.wikipedia.org/wiki/Cleanroom_Software_Engineering),
iterative methods as well as [rapid
prototyping](https://web.archive.org/web/20070104/http://en.wikipedia.org/wiki/Rapid_prototyping)
using [more
expressive](https://web.archive.org/web/20070104/http://www.paulgraham.com/avg.html)
programming languages.

The central core of his thesis rings loud and clear — software development isn’t
yet mature enough to be considered a proper engineering discipline, and is
unlikely to be so in the near future:

> For predictable software – software that’s been written dozens of times before
> or which is the result of some sort of detailed mathematical analysis – you
> wouldn’t use a methodology like this. **But for something never built
> before?** Or heard of before? Or never heard of by you and your team?
>
> I believe creating a completely new product is a hard concept to understand
> for someone who has not either developed software or been deeply involved with
> some creative activity. It seems that making software must be like designing
> and building a house, or a car, or a highway, or a TV, or a stove. Let me try
> to provide a scenario that might make it clear.
>
> **Suppose you wanted to design and build a gas stove, but no one had ever used
> gas to cook with before.** In fact, assume that before this, all that had ever
> been used was a wood stove.
>
> Here are some things you wouldn’t know: Will you use the gas flame to heat a
> piece of metal on which the pots and pans will sit, and that metal will
> transfer the heat, or will the flame be applied directly to the pots and pans?
> How will you control the temperature? Will you require that people move their
> pans from places of intense heat to places of less heat? Will you provide a
> gas flow controller that will reduce the amount of fuel to the flame? Will you
> move the flame closer or farther away from the pan or heat transfer metal?
> Will the heat be a manageable temperature for all kinds of cooking or only for
> limited use? Will cooks be afraid of using gas? How will you get it into the
> stove? Will it be stored or continuously supplied? How will you control the
> temperature of an oven using gas? Will a stove designed this way be
> affordable? Will the stove explode? Will the gas smell funny? Will the stove
> need to be inside or outside the house?

Gabriel laments the usability problems caused by the inadequate metaphors and
physical controls of our present man-machine interface to the virtual, abstract
world of software:

> **Operating within a metaphor is not the same as operating in the world.**
> Moving a mouse and clicking buttons to get things done is not natural to
> people nor are there the centuries of experience with machines similar to
> computers. Today we take for granted the relatively new idea of a steering
> wheel on a car. But such steering wheels have been around for about a hundred
> years, and the use of a “steering wheel” for controlling the direction of
> ships has been around since the 18th century, where it was found to produce
> better control with less effort because it used a block and tackle for
> mechanical advantage.
>
> And the steering wheel is a physical device – not a picture of one – and it’s
> operated by placing one’s hands on it – not by pointing an arrow at it and
> pushing a little button twice.

Also worth quoting at length is Gabriel’s elaboration of a seldom-realized (at
least in my experience), crucial difference between commercial software and
almost any piece of commercially manufactured, physical hardware:

> When you design, build, and sell a car and it’s sitting in someone’s garage,
> its innards and how it works can be – more or less – discovered by opening it
> up and peering inside. In fact, if something goes wrong with the car, maybe
> you can fix it yourself, or maybe you can take it to a repair shop where
> someone will fix it. ... **In fact, just about everything we as consumers can
> buy have the property that there are plenty of physical things about it that a
> consumer can fix or customize or pay someone to do for them. Not so with
> software.**
>
> Imagine that you open up your hood and what you see is sand. Open up your TV –
> sand. Look in the back of your refrigerator – sand. Unscrew any access plate
> anywhere in your house – and it’s more sand. Change or move one grain of it
> and – **ka! boom!** – it doesn’t work anymore or does something you don’t like
> such as show only the Home Shopping Network, heat up your ice cream, or make
> your car go only backwards honking the horn. Sounds a little nuts doesn’t it?
>
> But that’s exactly what software is like. The software in a form that people
> have a chance to understand is transformed by the software maker into
> something only a particular set of computers can understand, and that’s what
> you buy. Even if you were capable of finding and fixing a bug in Microsoft
> Word, you couldn’t do it unless you worked for Microsoft.
>
> Let’s go back to the real world example. If the innards of your car were like
> software, then when it needed to be fixed, the original manufacturer would
> have to be contacted. They would prepare a new batch of sand, and that batch
> would replace the sand in your car.
>
> In the auto industry there is an aftermarket for spare parts, custom kits,
> instruments and tools for diagnosis and repair, and repair shops. We’ve got
> that for most consumer electronics, white goods, lawn mowers, houses,
> bicycles, musical instruments, on and on, and even computers. But not for
> software. The only aftermarket is for designed-in software customizations and
> fixing user configuration mistakes.
>
> If you buy a book and find a typographic error, you can take out your pencil
> and fix it. If you find a similar typo in the user interface of a program,
> only the software maker can fix it. Sounds like they’ve maneuvered themselves
> into quite a nice place, don’t you think?

This line of reasoning posits open source software not at all as some misguided
communist enterprise carried out by starry-eyed idealists, as has been [a
not-infrequent
view](https://web.archive.org/web/20070104/http://www.slate.com/id/2130798/)
elsewhere, but simply as the means of restoring the correct balance of
[tinkerability](https://web.archive.org/web/20070104/http://www.stickyminds.com/sitewide.asp?Function=edetail&ObjectType=COL&ObjectId=3394)
to software in general — and as a result building programs of higher quality,
too. I think this is a particularly lucid analogy, and one that’s now more
relevant than ever with
[DRM](https://web.archive.org/web/20070104/http://www.eff.org/IP/DRM/)
[brooding](https://web.archive.org/web/20070104/http://www.defectivebydesign.org/)
over our digital future.

The essay concludes with some of Gabriel’s thoughts on how open source
development processes provide a surprisingly successful methodology for building
programs that would be too complicated for any one person to understand and get
right using the dark-age programming technologies that currently pervade the
industry — essentially, a view on how open source is enabling our technical
infrastructure to evolve **despite** the fact that, as it happens, “worse is
better”.

For those interested in more of the thoughts of an eminent hacker and thinker on
the more philosophical aspects of programming, Gabriel’s
[essays](https://web.archive.org/web/20070104/http://www.dreamsongs.com/Essays.html)
and
[books](https://web.archive.org/web/20070104/http://www.dreamsongs.com/Books.html)
make rewarding reading. For aspiring Lispers, I recommend [The Art of Lisp &
Writing](https://web.archive.org/web/20070104/http://www.dreamsongs.com/ArtOfLisp.html),
[The Evolution of
Lisp](https://web.archive.org/web/20070104/http://www.dreamsongs.com/Files/HOPL2-Uncut.pdf),
[A Critique of Common
Lisp](https://web.archive.org/web/20070104/http://www.dreamsongs.com/Files/clcrit.pdf)
and the various [CLOS-related
articles](https://web.archive.org/web/20070104/http://www.dreamsongs.com/CLOS.html)
(Gabriel was one of the designers of CLOS), [The Design of Parallel Programming
Languages](https://web.archive.org/web/20070104/http://www.dreamsongs.com/10ideas.html),
and, of course, [Lisp: Good News, Bad News, How to Win
Big](https://web.archive.org/web/20070104/http://www.dreamsongs.com/WIB.html).
