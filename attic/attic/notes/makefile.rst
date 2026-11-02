***********************************************************************
Arto's Notes re: `makefiles <https://en.wikipedia.org/wiki/Makefile>`__
***********************************************************************

Targets
=======

Conventional Targets
--------------------

* ``make all``
* ``make check``
* ``make dist``
* ``make install``
* ``make uninstall``
* ``make clean``
* ``make distclean``
* ``make mostlyclean``

Variables
=========

Special Variables
-----------------

* ``$@``: The output target.

* ``$*``: The output target plus all of the dependencies.

* ``$<``: The first dependency in the dependency list.

* ``$^``: The list of all dependencies.

Rules
=====

::

   README.html: README.rst
           $(PANDOC) -o $@ -t html5 -s $<

* `GNU Make Manual: Catalogue of Built-In Rules
  <https://www.gnu.org/software/make/manual/html_node/Catalogue-of-Rules.html>`__

Comments
========

* `Notes on writing makefiles
  <http://eigenstate.org/notes/makefiles>`__
* `What's wrong with GNU Make?
  <http://www.conifersystems.com/whitepapers/gnu-make/>`__

See Also
========

`Premake <https://premake.github.io/>`__
