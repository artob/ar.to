***************************************************
Arto's Notes re: `Sphinx <http://sphinx-doc.org>`__
***************************************************

Installation
============

::

  $ brew install sphinx-doc

``sphinx-quickstart``
=====================

::

   $ sphinx-quickstart
   > Root path for the documentation [.]:
   > Separate source and build directories (y/n) [n]:
   > Name prefix for templates and static dir [_]: .
   > Project name: Foo Bar
   > Author name(s): Arto Bendiken
   > Project version: 0.0.0
   > Project release [0.0.0]: YYYY-MM-DD
   > Source file suffix [.rst]:
   > Name of your master document (without suffix) [index]:
   > Do you want to use the epub builder (y/n) [n]: y
   > autodoc: automatically insert docstrings from modules (y/n) [n]:
   > doctest: automatically test code snippets in doctest blocks (y/n) [n]:
   > intersphinx: link between Sphinx documentation of different projects (y/n) [n]: y
   > todo: write "todo" entries that can be shown or hidden on build (y/n) [n]: y
   > coverage: checks for documentation coverage (y/n) [n]:
   > pngmath: include math, rendered as PNG images (y/n) [n]:
   > mathjax: include math, rendered in the browser by MathJax (y/n) [n]:
   > ifconfig: conditional inclusion of content based on config values (y/n) [n]: y
   > viewcode: include links to the source code of documented Python objects (y/n) [n]:
   > Create Makefile? (y/n) [y]:
   > Create Windows command file? (y/n) [y]: n
