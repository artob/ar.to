*************************
Arto's Notes re: MacPorts
*************************

http://en.wikipedia.org/wiki/MacPorts

Language Environments
=====================

C++11 Development Environment
-----------------------------

::

   $ sudo port install gcc48
   $ sudo port select --set gcc mp-gcc48
   
   $ sudo port install boost +gcc48 -python27

::

   $ sudo port install clang-3.4
   $ sudo port select --set clang mp-clang-3.4
   $ sudo port select --set llvm mp-llvm-3.4
   
   $ sudo port install boost +clang34 -python27

.. note::

   Boost 1.55.0 built with Clang 3.4 presently needs the patch in `#42282`_.

::

   $ sudo port install cmake

Common Lisp Development Environment
-----------------------------------

::

   $ sudo port install abcl +ffi         # Armed Bear Common Lisp (ABCL)
   $ sudo port install ccl               # Clozure CL (CCL)
   $ sudo port install clisp             # GNU CLISP
   $ sudo port install ecl               # Embeddable Common Lisp (ECL)
   $ sudo port install gcl               # GNU Common Lisp (GCL)
   $ sudo port install sbcl +threads     # Steel Bank Common Lisp (SBCL)

.. note:: GCL @2.6.7_1 currently fails to build on Mac OS X 10.7.5.

::

   $ sudo port install cl-ppcre +sbcl

OCaml Development Environment
-----------------------------

::

   $ sudo port install ocaml
   $ sudo port install opam
   $ opam init
   $ opam install core utop

Java Development Environment
----------------------------

::

   $ sudo port install maven3
   $ sudo port select --set maven maven3

Port Directory
==============

Currently Missing Packages
--------------------------

* **Common Lisp**: CMUCL, MKCL, XCL, cl-launch

.. _#34288: https://trac.macports.org/ticket/34288
.. _#38374: https://trac.macports.org/ticket/38374
.. _#42282: https://trac.macports.org/ticket/42282
