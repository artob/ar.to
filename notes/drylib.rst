************************************************
Arto's Notes re: `DRYlib <https://drylib.org>`__
************************************************

The polyglot programmer's universal standard library.

* https://drylib.org
* https://github.com/dryproject/drylib
* https://bitbucket.org/dryproject/drylib

----

**Table of Contents:**

* `Rationale <#rationale>`__
* `Features <#features>`__
* `Roadmap <#roadmap>`__
* `Languages <#languages>`__
* `Packaging <#packaging>`__:
  `for Languages <#packaging-for-languages>`__,
  `for Distros <#packaging-for-distros>`__
* `Testing <#testing>`__
* `Documentation <#documentation>`__
* `Tracking <#tracking>`__
* `See Also <#see-also>`__

----

Rationale
=========

* Reduces the cognitive load of frequently switching between different
  programming languages.

* Enables network effects to cross different languages.

* Facilitates code generation for multiple target languages.

* *(Personally)* Maintains know-how in developing and packaging for the
  specific target languages.

----

Features
========

* Provides predictable package naming across of language ecosystems.

* Respects local naming conventions.

----

Roadmap
=======

0.0.0
-----

* Namespace registrations on various packaging systems.

0.0.1
-----

* Data representation for the full numeric tower.
* `Packaging <#packaging>`__ for all target languages.

0.1.0
-----

*(To be written.)*

----

Languages
=========

**Primary target languages:**

* `C++`_ (for systems programming)
* `Dart`_ (for `Flutter <flutter>`__ apps)
* `Go`_ (for `CLI <cli>`__ tooling)
* `Lua`_ (for embeddable scripting)
* `OCaml`_ (for `compiler development <drylang>`__)

**Secondary target languages:**

* `C`_ (as a `code generation <codegen>`__ target)
* `Python`_ (for general scripting)

**Tertiary target languages:**

* `Common Lisp`_
* `D`_ (for systems programming)
* `Julia`_ (for numerical computing)
* `Kotlin`_ (for `Android <android>`__ apps)
* `PHP`_ (for web development)
* `Ruby`_ (for general scripting)
* `Rust`_ (for systems programming)

**Miscellaneous potential target languages:**

* C#/.NET (for Unity games)
* Elixir
* Erlang
* Java
* JavaScript
* Scheme (R4RS, R7RS)
* Standard ML
* Swift (for iOS apps)

----

Packaging
=========

Packaging for Languages
-----------------------

============== =================================================================
Language       Package
============== =================================================================
`C`_/`C++`_    N/A
`C#`_/.NET     TODO: `drylib <https://www.nuget.org/packages/drylib>`__ on NuGet
`Common Lisp`_ TODO: ASDF package?
`D`_           `drylib <https://code.dlang.org/packages/drylib>`__ on DUB
`Dart`_        TODO: `drylib <https://pub.dartlang.org/packages/drylib>`__ on Pub
`Elixir`_      TODO: `drylib <https://hex.pm/packages/drylib>`__ on Hex.pm
`Erlang`_      TODO: `drylib <https://hex.pm/packages/drylib>`__ on Hex.pm
`Go`_          GitHub / `GoDoc <https://godoc.org/github.com/dryproject/drylib.go>`__
`Java`_        TODO: MVN repository on Bintray
`JavaScript`_  TODO: `drylib <https://www.npmjs.com/package/drylib>`__ on NPM
`Julia`_       GitHub / `PackageEvaluator.jl <https://pkg.julialang.org/>`__
`Kotlin`_      TODO: MVN repository on Bintray
`Lua`_         `drylib <https://luarocks.org/modules/dryproject/drylib>`__ on LuaRocks
`OCaml`_       TODO: `drylib <https://opam.ocaml.org/packages/drylib/>`__ on OPAM
`PHP`_         `drylib <https://packagist.org/packages/dryproject/drylib>`__ on Packagist
`Python`_      TODO: `drylib <https://pypi.python.org/pypi/drylib>`__ on PyPI
`Ruby`_        `drylib <https://rubygems.org/gems/drylib>`__ on RubyGems
`Rust`_        TODO: `drylib <https://crates.io/crates/drylib>`__ on crates.io
`Scheme`_      TODO: `drylib <https://pkgs.racket-lang.org/package/drylib>`__ for Racket
`Standard ML`_ N/A
`Swift`_       GitHub
============== =================================================================

Packaging for C/C++
^^^^^^^^^^^^^^^^^^^

No standard packaging/distribution system.

* https://buckaroo.readthedocs.io/en/latest/package-guide.html

Packaging for C#/.NET
^^^^^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Common Lisp
^^^^^^^^^^^^^^^^^^^^^^^^^

* https://gitlab.common-lisp.net/asdf/asdf/blob/master/doc/best_practices.md
* http://lisp-lang.org/learn/continuous-integration

Packaging for D
^^^^^^^^^^^^^^^

* https://code.dlang.org/getting_started
* https://code.dlang.org/publish
* https://code.dlang.org/package-format?lang=json
* https://code.dlang.org/package-format?lang=sdl
* https://code.dlang.org/register_package
* https://dlang.org/spec/module.html
* DUB requires version tags of the form "vX.Y.Z" instead of "X.Y.Z".
* DUB will check for new tags in the repository twice an hour.

Packaging for Dart
^^^^^^^^^^^^^^^^^^

* https://www.dartlang.org/guides/libraries/create-library-packages
* https://www.dartlang.org/tools/pub/get-started
* https://www.dartlang.org/tools/pub/publishing
* https://www.dartlang.org/tools/pub/pubspec

Packaging for Elixir
^^^^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Erlang
^^^^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Go
^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Java/Kotlin/JVM
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

TODO: Bintray for MVN?

Packaging for JavaScript
^^^^^^^^^^^^^^^^^^^^^^^^

* https://docs.npmjs.com/getting-started/creating-node-modules
* https://docs.npmjs.com/getting-started/publishing-npm-packages

Packaging for Julia
^^^^^^^^^^^^^^^^^^^

* https://pkg.julialang.org
* https://docs.julialang.org/en/stable/manual/packages/
* https://github.com/JuliaLang/METADATA.jl
* https://github.com/JuliaCI/PackageEvaluator.jl/tree/master/website

Packaging for Lua
^^^^^^^^^^^^^^^^^

* https://luarocks.org/#quick-start

Packaging for OCaml
^^^^^^^^^^^^^^^^^^^

* https://opam.ocaml.org/doc/Packaging.html
* https://github.com/ocaml/opam-repository/issues

Packaging for PHP
^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Python
^^^^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Ruby
^^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Rust
^^^^^^^^^^^^^^^^^^

* http://doc.crates.io/crates-io.html
* http://doc.crates.io/guide.html

Packaging for Scheme
^^^^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Standard ML
^^^^^^^^^^^^^^^^^^^^^^^^^

*(To be written.)*

Packaging for Swift
^^^^^^^^^^^^^^^^^^^

* https://swift.org/package-manager/
* https://github.com/apple/example-package-fisheryates
* https://github.com/apple/example-package-playingcard

Packaging for Distros
---------------------

*(To be written.)*

TODO: Alpine, Arch, Debian/Ubuntu; Homebrew, MacPorts, pkgsrc.

----

Testing
=======

* https://docs.travis-ci.com/user/languages/c/
* https://docs.travis-ci.com/user/languages/cpp/
* https://docs.travis-ci.com/user/languages/d/
* https://docs.travis-ci.com/user/languages/go/
* https://docs.travis-ci.com/user/languages/python/

----

Documentation
=============

*(To be written.)*

* https://godoc.org/github.com/dryproject/drylib.go

----

Tracking
========

* https://github.com/topics/drylib
* https://twitter.com/hashtag/drylib?f=tweets
* https://www.google.com/search?q=drylib

----

See Also
========

`DRY <dry>`__, `DRYlang <drylang>`__

.. _C:           https://github.com/dryproject/drylib.c
.. _C++:         https://github.com/dryproject/drylib.cpp
.. _C#:          #todo
.. _Common Lisp: https://github.com/dryproject/drylib.lisp
.. _D:           https://github.com/dryproject/drylib.d
.. _Dart:        https://github.com/dryproject/drylib.dart
.. _Elixir:      #todo
.. _Erlang:      #todo
.. _Go:          https://github.com/dryproject/drylib.go
.. _Java:        #todo
.. _JavaScript:  #todo
.. _Julia:       https://github.com/dryproject/drylib.jl
.. _Kotlin:      https://github.com/dryproject/drylib.kt
.. _Lua:         https://github.com/dryproject/drylib.lua
.. _OCaml:       https://github.com/dryproject/drylib.ocaml
.. _PHP:         https://github.com/dryproject/drylib.php
.. _Python:      https://github.com/dryproject/drylib.py
.. _Ruby:        https://github.com/dryproject/drylib.rb
.. _Rust:        https://github.com/dryproject/drylib.rs
.. _Scheme:      #todo
.. _Standard ML: #todo
.. _Swift:       #todo
