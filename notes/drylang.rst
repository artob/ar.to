**************************************************
Arto's Notes re: `DRYlang <https://drylang.org>`__
**************************************************

An experimental programming language.

- https://drylang.org
- https://github.com/dryproject/drylang
- https://bitbucket.org/dryproject/drylang

----

**Table of Contents:**

- `Roadmap <#roadmap>`__
- `Packaging <#packaging>`__
- `Testing <#testing>`__
- `Tracking <#tracking>`__
- `Features <#features>`__
- `Research <#research>`__
- `See Also <#see-also>`__

----

Roadmap
=======

*(To be written.)*

Targets
-------

Binary Targets
^^^^^^^^^^^^^^

- `RISC-V <riscv>`__

- `WASM <wasm>`__

- `BEAM <erlang>`__

----

Packaging
=========

*(To be written.)*

TODO: Alpine, Arch, Debian/Ubuntu; Homebrew, MacPorts, pkgsrc.

----

Testing
=======

*(To be written.)*

----

Tracking
========

- https://github.com/topics/drylang

- https://twitter.com/hashtag/drylang?f=tweets

- https://www.google.com/search?q=drylang

----

Features
========

Pattern Matching
----------------

*(To be written.)*

::

   (match my-value
    ;; TODO
    ...)

Type Annotations
----------------

*(To be written.)*

::

   (fun (x: int y: int) ...)

   (fun (x: int y: -1) ...)

   (fun (x: int y: (int -1)) ...)

Type Inference
--------------

*(To be written.)*

Partial Application
-------------------

*(To be written.)*

::

   (define square (* 2))

Function Pipelines
------------------

*(To be written.)*

Condition System
----------------

*(To be written.)*

Numerical Tower
---------------

*(To be written.)*

----

Research
========

- `LtU's Getting Started thread
  <http://lambda-the-ultimate.org/node/492>`__

- `Graydon Hoare: What next for compiled languages
  <http://lambda-the-ultimate.org/node/5466>`__

- `The design side of programming language design
  <http://tomasp.net/blog/2017/design-side-of-pl/>`__

- `Notes on notation and thought
  <https://github.com/hypotext/notation>`__

MLs
---

- `1ML <https://people.mpi-sws.org/~rossberg/1ml/>`__

- `OCaml <ocaml>`__

- `CakeML <cakeml>`__

- `F* <fstar>`__

Lisps
-----

- `Common Lisp <common-lisp>`__

- `Scheme <scheme>`__

  - `Stalin
    <https://en.wikipedia.org/wiki/Stalin_%28scheme_implementation%29>`__

- `Clojure <clojure>`__

- `Carp <https://github.com/carp-lang/Carp>`__

`Typed Racket <racket>`__
^^^^^^^^^^^^^^^^^^^^^^^^^

- `The Typed Racket Guide
  <https://docs.racket-lang.org/ts-guide/>`__

- `The Typed Racket Reference
  <https://docs.racket-lang.org/ts-reference/>`__

- `Typed Racket on GitHub
  <https://github.com/racket/typed-racket>`__

Shen
^^^^

- http://shenlanguage.org

- https://github.com/Shen-Language/wiki/wiki

- https://github.com/Shen-Language/shen-sources

- https://www.reddit.com/r/shenlanguage/

- https://www.reddit.com/user/Mark_Tarver

`LFE <https://en.wikipedia.org/wiki/LFE_(programming_language)>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- http://lfe.io

- https://github.com/rvirding/lfe

Array
-----

`APL <https://en.wikipedia.org/wiki/APL_(programming_language)>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- `Papers from the Lost Culture of Array Languages
  <http://prog21.dadgum.com/114.html>`__

- `Notation as a Tool of Thought
  <http://www.eecg.toronto.edu/~jzhu/csc326/readings/iverson.pdf>`__
  (1979)
  by Ken Iverson
  (`@HN <https://news.ycombinator.com/item?id=16842378>`__)

- `A Personal View of APL
  <http://www.jsoftware.com/papers/APLPersonalView.htm>`__
  by Ken Iverson

- `Language as an Intellectual Tool: From Hieroglyphics to APL
  <http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.86.6185&rep=rep1&type=pdf>`__
  (1991)
  by Donald McIntyre

- `The Role of Composition in Computer Programming
  <http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.98.3105&rep=rep1&type=pdf>`__
  (1995)
  by Donald McIntyre

- `My Life with Array Languages
  <http://webdocs.cs.ualberta.ca/~smillie/Jpage/MyLife.pdf>`__
  by Keith Smillie

- `APL Style: Patterns/Anti-patterns
  <https://sway.com/b1pRwmzuGjqB30On>`__

- `The BEAM needs an APL-y language
  <https://medium.com/@gordonguthrie/the-beam-needs-an-apl-y-language-6c5c998ba6d>`__
  (`@HN <https://news.ycombinator.com/item?id=16799551>`__)

- `Fear and Loathing with APL
  <https://medium.com/theburningmonk-com/fear-and-loathing-with-apl-eaa1d1a10659>`__

- http://tryapl.org

- `Mastering Dyalog APL
  <https://www.dyalog.com/uploads/documents/MasteringDyalogAPL.pdf>`__

`J <https://en.wikipedia.org/wiki/J_(programming_language)>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- http://www.jsoftware.com

- https://github.com/jsoftware/jsource

`K <https://en.wikipedia.org/wiki/K_(programming_language)>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- https://kx.com

- http://kparc.com
  (`@HN <https://news.ycombinator.com/item?id=11561573>`__)

- https://github.com/kevinlawler/kona

Concatenative
-------------

`Joy <https://en.wikipedia.org/wiki/Joy_(programming_language)>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- `Joy Programming Language
  <https://www.latrobe.edu.au/humanities/research/research-projects/past-projects/joy-programming-language>`__

- `Functional Programming in Joy and K
  <http://vector.org.uk/art10000360>`__

Miscellaneous
-------------

- `Wolfram Language <wolfram>`__

- `Erlang <erlang>`__

- `Elixir <elixir>`__

- `Rust <rust>`__

- `CRDTs <crdt>`__

----

See Also
========

`DRY <dry>`__, `DRYlib <drylib>`__
