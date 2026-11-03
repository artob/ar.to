---
title: Opinionated Best Practices Elucidated
date: '2007-07-26T19:00:00Z'
categories:
- Technology
tags:
- aesthetics
- productivity
- programming
- Rails
- Ruby
summary: Why Ruby on Rails is named the way it is, and how its opinionated constraints can be liberating.
original:
  url: http://bendiken.net/2007/07/26/opinionated-best-practices-elucidated
  archive: https://web.archive.org/web/20080509161307/http://bendiken.net/2007/07/26/opinionated-best-practices-elucidated
---

Railroad lines are, at any given moment, unidirectional. You can’t veer off the
track that has been laid out in front of you, and you can’t make unscheduled
stops unless you want the overnight express to run into you. These can be
problems if you’re not altogether happy with the direction the track is taking
you. Equally so if you would like to make any additional visits alongside the
plotted course.

On the other hand, if you just keep your limbs inside the vehicle as advised,
you can safely traverse the track at a very high velocity to arrive at your
destination faster than with any other means of surface transport. You can watch
the boring, mundane wasteland outside go by without needing to interact with it
in any way.

So, riding the metaphor for all it is worth, when [David Heinemeier
Hansson](https://web.archive.org/web/20070726/http://en.wikipedia.org/wiki/David_Heinemeier_Hansson)
took [Ruby](https://web.archive.org/web/20070726/http://www.ruby-lang.org/) and
created an opinionated, high-productivity web development framework, is it any
surprise he named it [Ruby on
Rails](https://web.archive.org/web/20070726/http://www.rubyonrails.org/)? The
name lays out the deal up front: *our way, or the highway*.

Could he possibly have been any more explicit? As I’m sure most readers know,
DHH is anything but
[subtle](https://web.archive.org/web/20070726/http://www.flickr.com/photos/eugevon/130610241/).
Yet people seem to keep missing the point.

A premise of Rails, and perhaps eventually its enduring legacy, is that
constraints can be liberating, that a [straightjacket for your
mind](https://web.archive.org/web/20070726/http://www.loudthinking.com/arc/2006_06.html)
can actually increase your productivity. As Hari Seldon might’ve [put
it](https://web.archive.org/web/20070726/http://en.wikipedia.org/wiki/Psychohistory_%28fictional%29):
your freedom of action has been curtailed in order to guide you out of the Dark
Ages along a well-planned, accelerated trajectory.

Instead of aiming to please everybody equally badly and making all things
equally hard to do, Rails plays favorites. It’s software with an attitude, it’s
politically incorrect, and as a result it is, of course, controversial. The
goals themselves are simple, however: developer productivity and happiness (yes,
happiness; motivation being a non-trivial component of productivity, if you can
imagine such a state of affairs).

Take the little things: how should you organize and structure your project? How
should you name your source files, class hierarchy, or your database tables and
columns? What should your URL structure be like? What naming and coding
conventions should you use in the code itself? If you’re honest with yourself,
the answer to all the preceding is: **who cares**, as long as there is *some*
sensible convention in the team. Rails gives you — or, rams down your throat,
actually — sensible conventions that apply not only within your team, but across
all Rails projects and the core Rails code itself.

What about documenting your code? What about writing unit and integration tests;
should you do it, and if so, how? You betcha you **should**, and Rails makes
sure you know how, and frowns on you if you don’t fulfill your end of the
bargain. (Who knew writing tests could be so much fun? I guess when you take the
suck out of something, the fun shines through.)

Think about it: how often have you spent minutes agonizing over how to name
something in your project? From my own experience I’d venture that a programmer
will need to make up to several hundred microdecisions like this during the
course of a typical workday. These are precisely the kinds of trivial, yet
time-wasting, aspects of development largely eliminated with Rails, if you
follow its conventions. Add to that an iterative development approach using the
very capable and dynamic programming language underpinning Rails, and the cost
of changing your mind about anything — anything over which you still have veto
power, of course — is so low as to hardly matter.

You may not agree with all of Rails’s conventions (I certainly don’t), but there
are consequences to violating them. You’ll discover it is generally worthwhile
to stick to them, or else to seek some other framework. These are *not*
incidental matters as with most software, but key aspects of successful Rails
usage. Remember, it’s the Rails way, or the highway (and the highway can get you
there eventually, too).

Now, capable programmers tend to be control freaks, and geeks in general don’t
like to have external authority enforced upon them, be it in politics or in
technology. *“It’s like herding wild cats,”* confounded managers claim. This can
mean that unless you happen to agree with most of the innumerable decisions that
Rails does make for you and does hold you to, adopting the framework wholesale
can be a bitter pill to swallow, at least initially. It truly puts to the test
whether you care more about your ingrained habits and dearly-held opinions, or
whether you can be railroaded into actually delivering the damn project (and
perhaps learning something new while at it).

There’s good news, though. You may indeed have to let go of a little ego and
micromanagement, but what you’ll gain will probably be worth it: there’s gold at
the end of the rails. Provisionally accept the Rails way and gain some real
proficiency with it, and you **will** complete the project faster than you
thought.

Stick to the recommended practices and well-thought-out conventions, whether you
agree with them or not, and your code **will** be well-organized and
maintainable by other Rails programmers; as for being readily comprehensible or
elegant, well, that’ll still be entirely up to you, of course. (Another aspect
of this is that for a junior developer, learning and following Rails best
practices and reading existing well-written Rails code can conceivably partly
make up for the lack of some years of industry experience.)

There’s more. You **won’t** have to work in some painful legacy programming
language that [makes you
dumber](https://web.archive.org/web/20070726/http://www.joelonsoftware.com/articles/ThePerilsofJavaSchools.html).
In fact, you **may** actually start to enjoy programming again, perhaps even
begin to indeed care about the work you do; rest assured this is not uncommon,
and you don’t need to see the doctor about it. (You might ask your manager for a
raise, though.)

If you’re currently working mostly with obsolete technologies and there’s no
chance to use Rails there, you **may** be able to get back on the job market
using Rails – there certainly never seem to be enough Rails programmers to
satisfy demand.

You’ll **probably** eventually agree that a lot of the stuff you at first felt
Rails shanghaied you into (say, test-driven development) are simply reasonable
best practices you’ll want to adopt elsewhere, too, as appropriate.

For those of us who got onto Rails at the ground floor or close to it, all the
aforementioned was admittedly a tad less painful. The adjustment process was
gradual and addictive instead of abrupt and in-your-face. (I’ve [written
before](/2007/01/the-road-to-lisp) about Ruby having been my gateway drug,
getting me started on [Norvig’s ten-year
plan](https://web.archive.org/web/20070726/http://norvig.com/21-days.html).) But
there’s still a ways to go before the top floor, and plenty of room on board.

I think that in retrospect it is clear that on the development side of things,
the emergence of Rails is the waterline that came to define [Web
2.0](https://web.archive.org/web/20070726/http://en.wikipedia.org/wiki/Web_2).
No post-Rails web development framework or toolkit can help but have been
influenced by it; witness the explosion of Rails clones in programming languages
[left](https://web.archive.org/web/20070726/http://www.cliki.net/lisp-on-lines)
and [right](https://web.archive.org/web/20070726/http://www.cakephp.org/), and
even [spot
on](https://web.archive.org/web/20070726/http://www.infoq.com/news/2007/06/yegge-rhino-on-rails).

By now, most of the technical aspects of Rails have been disseminated, some even
surpassed, to various degrees in the industry, and the playing field as a whole
is better because of it. But perhaps more folks will yet realize that the
“opinionated” part of the equation should be thought of not merely in terms of
DHH’s demeanor, but as directly relevant to aesthetics and productivity.

*To be soon continued with some thoughts regarding deficiencies in Rails, and
what may lie beyond Rails or the next paradigm shift. And no, it won’t be
airplanes. Perhaps seaside rockets will figure in there somewhere, though.*
