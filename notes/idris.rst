***************************************************************************************
Arto's Notes re: `Idris <https://en.wikipedia.org/wiki/Idris_(programming_language)>`__
***************************************************************************************

**Idris** is a general-purpose pure functional `programming language
<programming>`__ with `dependent types <types>`__.

* https://www.idris-lang.org/
* https://github.com/idris-lang/Idris-dev
* https://github.com/idris-lang/Idris-dev/wiki
* https://github.com/idris-lang/Idris-dev/wiki/Contributions-Needed
* https://groups.google.com/forum/#!forum/idris-lang
* https://www.reddit.com/r/Idris/
* https://twitter.com/idrislang
* https://functionalprogramming.slack.com/messages/idris
* https://hackage.haskell.org/package/idris

Installation
============

* https://github.com/idris-lang/Idris-dev/wiki/Installation-Instructions
* https://github.com/idris-lang/Idris-dev/blob/master/INSTALL.md

macOS
-----

https://github.com/idris-lang/Idris-dev/wiki/Idris-on-Mac-OS-X

::

  $ brew install idris

  $ idris --version

Git
---

https://github.com/idris-lang/Idris-dev/wiki/Installing-an-Idris-Development-version-in-a-sandbox

::

  $ git clone https://github.com/idris-lang/Idris-dev
  $ cd Idris-dev/

  $ cabal sandbox init
  $ cabal update

  $ cabal install --only-dependencies

  $ make CABALFLAGS='-f FFI -f GMP'

  $ .cabal-sandbox/bin/idris --version

Books
=====

* `Type-Driven Development with Idris
  <https://www.manning.com/books/type-driven-development-with-idris>`__
  (2017) by Edwin Brady
  (`GitHub <https://github.com/edwinb/TypeDD-Samples>`__,
  `Goodreads
  <https://www.goodreads.com/book/show/35479973-type-driven-development-with-idris>`__)

* `Software Foundations in Idris
  <https://github.com/idris-hackers/software-foundations>`__
  (`GitHub <https://github.com/idris-hackers/software-foundations>`_,
  `PDF <https://idris-hackers.github.io/software-foundations/pdf/sf-idris-2016.pdf>`__)

Lectures
========

* `Dependent Types in the Idris Programming Language 1 - Edwin Brady - OPLSS 2017
  <https://www.youtube.com/watch?v=zSsCLnLS1hg>`__
* https://www.youtube.com/watch?v=de5Mx4snoNM
* https://www.youtube.com/watch?v=umiUJNcvPl0

Talks
=====

Libraries
=========

* https://github.com/timjb/quantities
* https://github.com/writeoncereadmany/idris-dimensions
* https://github.com/ziman/lightyear

Miscellaneous
-------------

* https://github.com/trending/idris
* https://github.com/idris-hackers
* https://github.com/idris-lang/Idris-dev/wiki/Libraries
* https://github.com/joaomilho/awesome-idris
* https://github.com/xgrommx/idris-ecosystem

See Also
========

`ATS <ats>`__, `CakeML <cakeml>`__, `F* <fstar>`__
