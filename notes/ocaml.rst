**********************
Arto's Notes re: OCaml
**********************

Interactive
===========

::

   $ utop

Performance
===========

* http://www.ffconsultancy.com/languages/ray_tracer/comparison.html
* https://ocaml.org/learn/tutorials/performance_and_profiling.html

Installation
============

Mac OS X with MacPorts
----------------------

* ``sudo port install ocaml``
* ``sudo port install opam``
* ``opam init``
* ``opam switch 4.02.3``

Ubuntu 14.04
------------

* ``sudo apt-add-repository ppa:avsm/ppa``
* ``sudo aptitude update``
* ``sudo aptitude install ocaml-nox opam``
* ``opam init``
* ``eval `opam config env```
* ``opam switch 4.02.3``
* ``eval `opam config env```

Packages
========

* ``opam install core``
* ``opam install utop``
* ``opam install ocp-indent``
* ``opam install async``
* ``opam install yojson``
* ``opam install core_extended``
* ``opam install core_bench``
* ``opam install cohttp``
* ``opam install async_graphics``
* ``opam install cryptokit``
* ``opam install menhir``
* ``opam install ctypes ctypes-foreign``
* ``opam install cmdliner``
* ``opam install gg``

Notes
=====

* https://janestreet.github.io/ocaml-perf-notes.html

Books
=====

* `Real World OCaml
  <https://realworldocaml.org/v1/en/html/index.html>`__
  by Yaron Minsky, Anil Madhavapeddy, and Jason Hickey [2013]
  (`examples <https://github.com/realworldocaml/examples>`__)

Tutorials
=========

* https://ocaml.org/learn/tutorials/
* http://learnxinyminutes.com/docs/ocaml/
* http://try.ocamlpro.com/ https://github.com/OCamlPro/tryocaml
* https://github.com/caiorss/Functional-Programming/blob/master/ocaml/README.md

References
==========

* `OCaml at Wikipedia
  <https://en.wikipedia.org/wiki/OCaml>`__
* `OCaml at Rosetta Code
  <http://rosettacode.org/wiki/Category:OCaml>`__

Mailing Lists
=============

* http://lists.ocaml.org/listinfo

Interop with C++
================

* http://lists.xenproject.org/archives/html/mirageos-devel/2014-05/msg00062.html
* https://github.com/ocamllabs/ocaml-ctypes/issues/187
* http://blog.shaynefletcher.org/2014/02/extending-ocaml-in-c-boostdate-time.html
* http://l-lang.org/blog/Incorporating-C-code-in-an-Ocaml-project-using-Ocamlbuild/
