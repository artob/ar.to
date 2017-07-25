********************************************
Arto's Notes re: `Go <https://golang.org>`__
********************************************

Installation
============

macOS with Homebrew
-------------------

::

   $ brew install go
   $ export GOPATH=/opt/go
   $ export GOROOT=/opt/homebrew/opt/go/libexec
   $ export PATH="$PATH:$GOROOT/bin"
   $ mkdir -p /opt/go && chown arto:staff /opt/go

Configuration
=============

::

   $ alias repclient='repclient -socksserver 127.0.0.1:9150'

Scripting
=========

Shebang
-------

::

   ///usr/bin/env go run "$0" "$@"; exit "$?"

Audience
========

Much like `Java <java>`__ a decade prior, Go was designed by experienced
programmers for inexperienced programmers to use:

   "The key point here is our programmers are Googlers, they're not researchers.
   They're typically, fairly young, fresh out of school, probably learned Java,
   maybe learned C or C++, probably learned Python. They're not capable of
   understanding a brilliant language but we want to use them to build good
   software. So, the language that we give them has to be easy for them to
   understand and easy to adopt."

   -- Rob Pike [1]_

   "It must be familiar, roughly C-like. Programmers working at Google are
   early in their careers and are most familiar with procedural languages,
   particularly from the C family. The need to get programmers productive
   quickly in a new language means that the language cannot be too radical."

   -- Rob Pike [2]_

Critiques
=========

* `Go is unapologetically flawed, here's why we use it
  <http://bravenewgeek.com/go-is-unapologetically-flawed-heres-why-we-use-it/>`__
  (HN: `2015 <https://news.ycombinator.com/item?id=9608525>`__)

  *"To put it mildly, Go's type system is impaired. It does not lend
  itself to writing quality, maintainable code at a large scale, which
  seems to be in stark contrast to the language's ambitions."*

* `Why Go's design is a disservice to intelligent programmers
  <http://nomad.so/2015/03/why-gos-design-is-a-disservice-to-intelligent-programmers/>`__
  (HN: `2015 <https://news.ycombinator.com/item?id=9266184>`__)

  *"Pike is basically saying that the developers at Google aren't very good
  so they've developed a dumbed down language so they can get things
  done."*

* `Why Go is not good
  <http://yager.io/programming/go.html>`__
  (HN: `2015 <https://news.ycombinator.com/item?id=10704115>`__,
  `2014 <https://news.ycombinator.com/item?id=7962345>`__)

  *"Go is useful. With that said, Go is not a good language. It's not bad;
  it's just not good."*

* `You don't like Google's Go because you are small
  <http://tmikov.blogspot.com/2015/02/you-dont-like-googles-go-because-you.html>`__

  *"I view Go as a huge wasted opportunity. How often does a new
  semi-successful language backed by a successful company appear? Google
  squandered it through something which looks very much like arrogance."*

* `Why I don't want to use Go
  <https://web.archive.org/web/20130525041120/http://arantaday.com/why-i-dont-want-to-learn-go>`__

  *"Go is a far better C, with garbage collection. But the GC makes it
  unacceptable for the only types of problems I'd ever consider using C for."*

Deficiencies
============

* `nil` handling.
* Code duplication due to lack of generics.

Unsorted Links
==============

* https://golang.org/doc/faq#generics

.. [1] http://channel9.msdn.com/Events/Lang-NEXT/Lang-NEXT-2014/From-Parallel-to-Concurrent
.. [2] http://talks.golang.org/2012/splash.article
