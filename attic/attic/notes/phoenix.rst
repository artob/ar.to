*************************************************************************
Arto's Notes re: `Phoenix Framework <http://www.phoenixframework.org/>`__
*************************************************************************

https://vimeo.com/131633172

Installation
============

http://www.phoenixframework.org/docs/installation

::

   $ elixir -v
   $ mix local.hex

   $ psql --version
   $ port install postgresql95-server

   $ node --version  # 5.3.0+
   $ brew install node
   $ npm install -g brunch

   $ mix archive.install https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez

Notes
=====

* http://www.phoenixframework.org/docs/static-assets
* Bower not needed, as Brunch 2.1+ (and Phoenix 1.1.2+) include NPM support.
  https://groups.google.com/forum/#!topic/phoenix-core/ubWiOi3IU8o
* https://github.com/brunch/brunch-guide/blob/master/content/en/chapter05-using-third-party-registries.md

Gotchas
=======

* Table names are pluralized, whereas ideally they'd be in the singular.

Books
=====

* `Programming Phoenix <https://pragprog.com/book/phoenix/programming-phoenix>`__

See Also
========

* `Elixir <elixir>`__
