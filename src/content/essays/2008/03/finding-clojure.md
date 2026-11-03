---
title: Finding Clojure, or How I Learned to Stop Locking and Eval the JVM
date: '2008-03-26T18:00:00Z'
categories:
- Technology
tags:
- Clojure
- JVM
- Lisp
- Scheme
- STM
summary: Clojure, a new Lisp for the JVM, effortlessly stands out from the bunch of nascent Lisps.
original:
  url: http://bendiken.net/2008/03/26/finding-clojure
  archive: https://web.archive.org/web/20080513070710/http://bendiken.net/2008/03/26/finding-clojure
---

[![](./20080326-clojure.png)](https://web.archive.org/web/20080326/http://clojure.org/ "Clojure, a dynamic programming language for the JVM")

Ever since the
[Scheme](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Scheme_%28programming_language%29)
R<sup>6</sup>RS
[roadblock](/2007/08/r6rs-scheme-considered-harmful "R5.97RS Scheme Considered Harmful"),
I've been looking to branch out into other
[Lisps](https://web.archive.org/web/20080326/http://lispers.org/) outside the
Scheme [ecosystem](https://web.archive.org/web/20080326/http://scheme.info/).
The good news is that there's no shortage of nascent Lisps and Lisp-wannabes,
with many interesting new undertakings being launched month upon month.

There's one in particular, called
[Clojure](https://web.archive.org/web/20080326/http://clojure.org/) (pronounced
*closure*), that was [unveiled
recently](https://web.archive.org/web/20080326/http://lispnyc.org/wiki.clp?page=past-meetings "LispNYC, November 2007")
and effortlessly stands out from the bunch. There's much to like about Clojure,
but first and foremost, it follows a principle I'm very fond of: *code talks,
bullshit walks*.

That is to say, it's not difficult to imagine any number of interesting
directions to take Lisp into, nor is it generally all that much effort to
implement proof-of-concepts of such ideas (it's *Lisp*, after all); but to
actually create a full integrated, practical and performant system, that's
another matter entirely.

The difference between toy and tool is more than quantitative, and the leap from
an
[SICP](https://web.archive.org/web/20080326/http://mitpress.mit.edu/sicp/ "Structure and Interpretation of Computer Programs")
metacircular interpreter to something deserving of the hallowed title "Lisp
system" is non-trivial, requiring not just deep mastery of the
[fundamentals](https://web.archive.org/web/20080326/http://library.readscheme.org/)
but also the discipline and opportunity to take care of all the "boring" stuff
so as to ship it. As I know all too well from plenty of practice, this last
so-called 20% is where most efforts ultimately wither out to oblivion.

Thus it's a pleasant surprise to discover that while Clojure has no shortage of
[goodies](https://web.archive.org/web/20080326/http://clojure.org/features/ "Clojure features"),
it's also remarkably mature and *usable right here and now*. The author, [Rich
Hickey](https://web.archive.org/web/20080326/http://sourceforge.net/users/rhickey/ "he doesn't seem to have a web page per se"),
says that he has worked on it for two years, and I think it's admirable that he
kept tight-lipped about it for the duration; as a first alpha release, Clojure
as it is currently available simply *rocks*. No [Marimba
phenomenon](https://web.archive.org/web/20080326/http://www.joelonsoftware.com/articles/PickingShipDate.html),
here.

As for the goodies, how does a
[concurrent](https://web.archive.org/web/20080326/http://clojure.org/features/concurrent_programming.html "concurrent programming"),
[functional](https://web.archive.org/web/20080326/http://clojure.org/features/functional_programming.html "functional programming")
[Lisp<sub>1</sub>](https://web.archive.org/web/20080326/http://www.dreamsongs.com/Separation.html "single-namespaced Lisp system")
with [software transactional
memory](https://web.archive.org/web/20080326/http://clojure.org/reference/refs.html "software transactional memory (STM)")
sound like? To me, it sounds like the future. (And that's just the tagline,
there's [much
more](https://web.archive.org/web/20080326/http://clojure.org/features/).)

I've thought for a while now that if you took a purely
[functional](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Functional_programming "functional programming")
subset of Scheme (pre-R<sup>6</sup>RS), sprinkled it with the best of
[Haskell](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Haskell_%28programming_language%29 "Haskell (programming language)")
(without the whole mandatory [bondage and
discipline](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Type_system#Static_typing "static typing"),
thanks) and built it all on top of an Erlang-like runtime, that might form a
pretty compelling basis for a serious attempt at a new practical Lisp dialect.
Clojure is perhaps not
[quite](https://web.archive.org/web/20080326/http://groups.google.com/group/clojure/browse_thread/thread/2a2b24ffef5d1631/)
the particular mix that I had in mind, but it's very much in the ballpark.

Indeed Clojure embodies the kind of Lisp I'm interested in, that is, a pragmatic
go-getter system actively drawing on the best new computer science research and
pushing Lisp ever further out on the frontier of the future, instead of
complacently sitting around arguing about how many lambdas can dance on a
parenthesis while wondering why the competition is drawing nearer.

Considering how new Clojure is, there is a [commendable amount of
documentation](https://web.archive.org/web/20080326/http://clojure.org/reference/ "Clojure reference")
already available, and the [user
community](https://web.archive.org/web/20080326/http://groups.google.com/group/clojure/ "Clojure on Google Groups")
is growing in leaps and bounds, drawing both Common Lispers and Schemers as well
as a good number of people entirely new to Lisp. The momentum that Clojure has
going is tangible.

On the flip side, and these are really pretty serious omissions but may perhaps
be intractable on the JVM at present, Clojure lacks [tail recursion
optimization](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Tail_recursion)
and
[continuations](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Continuation).
Also, while the [concurrency
features](https://web.archive.org/web/20080326/http://clojure.org/features/concurrent_programming.html)
are impressive, I'm as of yet unsure how well-suited Clojure's JVM-based
threading might be to a massively parallel programming style such as what I've
been using with the lightweight processes in
[Gambit](https://web.archive.org/web/20080326/http://www.iro.umontreal.ca/~gambit/)
and [Erlang](https://web.archive.org/web/20080326/http://www.erlang.org/), both
of which will run millions processes without flinching. The author
[explains](https://web.archive.org/web/20080326/http://groups.google.com/group/clojure/browse_thread/thread/2a2b24ffef5d1631/)
that these [use
cases](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Actor_model "Actor model")
are kind of
[supported](https://web.archive.org/web/20080326/http://clojure.org/reference/agents.html)
but perhaps not really Clojure's sweet spot.

Now, given these JVM-imposed constraints, I should admit that I put off looking
into Clojure for several months just given that it's based on the
[JVM](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Java_Virtual_Machine "Java Virtual Machine");
not only have I not recently had any reason to use the JVM, but my antipathy to
Java is [long-standing](/2007/01/the-road-to-lisp) and
[well-documented](/2007/04/god-sure-didnt-write-in-java).

However, in his [LispNYC
talk](https://web.archive.org/web/20080326/http://lispnyc.org/wiki.clp?page=past-meetings),
Rich Hickey makes compelling points about why he based Clojure on the JVM, and I
can't help but agree with many of them. Similarly, Neal Ford in his superb
[recent JRuby-related interview on
JavaWorld](https://web.archive.org/web/20080326/http://memeagora.blogspot.com/2007/11/jruby-podcast-on-javaworld.html)
makes a case that the actual positive legacy of Java will be the JVM as an
established and widespread high-performance platform and infrastructure for
enabling [polyglot
programming](https://web.archive.org/web/20080326/http://ola-bini.blogspot.com/2008/01/language-explorations.html)
with the already more than 200 languages (including
[JRuby](https://web.archive.org/web/20080326/http://jruby.codehaus.org/ "Ruby on the JVM"),
[Rhino](https://web.archive.org/web/20080326/http://www.mozilla.org/rhino/ "JavaScript on the JVM"),
[Jaskell](https://web.archive.org/web/20080326/http://codehaus.org/~yan/jaskell/ "Haskell on the JVM")
and
[Jython](https://web.archive.org/web/20080326/http://www.jython.org/ "Python on the JVM"))
that you can run on it. I can buy that argument, too.

So, I'm coming to the unwelcome conclusion that my distaste for Java the
language may have blinded me to the potential of the JVM as a platform for
hosting other more powerful programming languages. I haven't much followed the
JVM's evolution for years now, but intend to keep a closer eye on it in the
future - especially the ongoing work around [JSR
292](https://web.archive.org/web/20080326/http://www.artima.com/lejava/articles/dynamic_languages.html "Dynamic Language Support on the JVM")
that aims to make the JVM [suck
less](https://web.archive.org/web/20080326/http://headius.blogspot.com/2007/01/invokedynamic-actually-useful.html)
for hosting dynamic languages.

In any case, I'll be taking Clojure out for a spin. It's definitely a singularly
unique new Lisp well worth looking at and learning from. I highly recommend Rich
Hickey's [two-hour LispNYC
presentation](https://web.archive.org/web/20080326/http://lispnyc.org/wiki.clp?page=past-meetings "LispNYC, November 2007")
which I can only describe as delightfully
[competent](https://web.archive.org/web/20080326/http://clojure.org/news/zippers_-_functional_tree_e.html).
(Also, in case
[STM](https://web.archive.org/web/20080326/http://en.wikipedia.org/wiki/Software_transactional_memory "Software transactional memory")
is an unfamiliar concept, Simon Peyton-Jones's [brief
introduction](https://web.archive.org/web/20080326/http://www.blip.tv/file/317758/ "Transactional Memory for Concurrent Programming, July 2007")
at OSCON last year should be able to fill in the gaps some.)
