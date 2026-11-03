---
title: "[DRYlib](https://drylib.org)"
---

The polyglot programmer's universal standard library.

- <https://drylib.org>
- <https://github.com/dryproject/drylib>
- <https://bitbucket.org/dryproject/drylib>

------------------------------------------------------------------------

**Table of Contents:**

- [Rationale](#rationale)
- [Features](#features)
- [Roadmap](#roadmap)
- [Languages](#languages)
- [Packaging](#packaging): [for Languages](#packaging-for-languages), [for Distros](#packaging-for-distros)
- [Testing](#testing)
- [Documentation](#documentation)
- [Tracking](#tracking)
- [See Also](#see-also)

------------------------------------------------------------------------

## Rationale

- Reduces the cognitive load of frequently switching between different programming languages.
- Enables network effects to cross different languages.
- Facilitates code generation for multiple target languages.
- *(Personally)* Maintains know-how in developing and packaging for the specific target languages.

------------------------------------------------------------------------

## Features

- Provides predictable package naming across of language ecosystems.
- Respects local naming conventions.

------------------------------------------------------------------------

## Roadmap

### 0.0.0

- Namespace registrations on various packaging systems.

### 0.0.1

- Data representation for the full numeric tower.
- [Packaging](#packaging) for all target languages.

### 0.1.0

*(To be written.)*

------------------------------------------------------------------------

## Languages

We are currently at 17 actual target languages, and 23+ potential target languages.

**Primary target languages:**

- [C++](https://github.com/dryproject/drylib.cpp) (for systems programming)
- [Dart](https://github.com/dryproject/drylib.dart) (for [Flutter](flutter) apps)
- [Go](https://github.com/dryproject/drylib.go) (for [CLI](cli) tooling)
- [Lua](https://github.com/dryproject/drylib.lua) (for embeddable scripting)
- [OCaml](https://github.com/dryproject/drylib.ocaml) (for [compiler development](drylang))

**Secondary target languages:**

- [C](https://github.com/dryproject/drylib.c) (as a [code generation](codegen) target)
- [Elixir](https://github.com/dryproject/drylib.ex)
- [Java](https://github.com/dryproject/drylib.java) (for the JVM ecosystem: Clojure, Groovy, Scala, etc)
- [JS](https://github.com/dryproject/drylib.js) (ES8+)
- [Python](https://github.com/dryproject/drylib.py) (for general scripting)

**Tertiary target languages:**

- [Common Lisp](https://github.com/dryproject/drylib.lisp) (for academia and grumpy neckbeards)
- [D](https://github.com/dryproject/drylib.d) (for systems programming)
- [Julia](https://github.com/dryproject/drylib.jl) (for numerical computing)
- [Kotlin](https://github.com/dryproject/drylib.kt) (for [Android](android) apps)
- [PHP](https://github.com/dryproject/drylib.php) (for web development)
- [Ruby](https://github.com/dryproject/drylib.rb) (for general scripting)
- [Rust](https://github.com/dryproject/drylib.rs) (for systems programming)

**Miscellaneous potential target languages:**

- Bash? (challenging but tremendously useful if possible)
- C#/.NET (for Unity games and the .NET ecosystem: F#, VB.NET, etc)
- Erlang (for the BEAM ecosystem: LFE, etc)
- Haskell (for academia)
- Scheme (R4RS, R7RS; for academia)
- Standard ML (for academia)
- Swift (for iOS/macOS apps)

**Ignored programming languages:**

- Objective-C (all the momentum is in Swift now, and can use C)
- *Uncommon:* Crystal, Haxe, Idris, Nim, Perl 6, Smalltalk, Vala
- *Legacy:* Ada, BASIC, COBOL, Fortran, Pascal, Perl, Prolog, Tcl
- *Domain-specific:* Mathematica, MATLAB, PL/SQL, R
- *Esoteric:* Factor, Forth
- *Uninteresting:* CoffeeScript, Elm, Hack, TypeScript

------------------------------------------------------------------------

## Packaging

### Packaging for Languages

| Language | Package |
|----|----|
| [C](https://github.com/dryproject/drylib.c)/[C++](https://github.com/dryproject/drylib.cpp) | N/A |
| [C#](#todo)/.NET | TODO: [drylib](https://www.nuget.org/packages/drylib) on NuGet |
| [Common Lisp](https://github.com/dryproject/drylib.lisp) | TODO: ASDF package? |
| [D](https://github.com/dryproject/drylib.d) | [drylib](https://code.dlang.org/packages/drylib) on DUB |
| [Dart](https://github.com/dryproject/drylib.dart) | TODO: [drylib](https://pub.dartlang.org/packages/drylib) on Pub |
| [Elixir](https://github.com/dryproject/drylib.ex) | TODO: [drylib](https://hex.pm/packages/drylib) on Hex.pm |
| [Erlang](#todo) | TODO: [drylib](https://hex.pm/packages/drylib) on Hex.pm |
| [Go](https://github.com/dryproject/drylib.go) | GitHub / [GoDoc](https://godoc.org/github.com/dryproject/drylib.go) |
| [Haskell](#todo) | TODO: Hackage |
| [Java](https://github.com/dryproject/drylib.java) | TODO: MVN repository on Bintray |
| [JS](https://github.com/dryproject/drylib.js) | TODO: [drylib](https://www.npmjs.com/package/drylib) on NPM |
| [Julia](https://github.com/dryproject/drylib.jl) | GitHub / [PackageEvaluator.jl](https://pkg.julialang.org/) |
| [Kotlin](https://github.com/dryproject/drylib.kt) | TODO: MVN repository on Bintray |
| [Lua](https://github.com/dryproject/drylib.lua) | [drylib](https://luarocks.org/modules/dryproject/drylib) on LuaRocks |
| [OCaml](https://github.com/dryproject/drylib.ocaml) | TODO: [drylib](https://opam.ocaml.org/packages/drylib/) on OPAM |
| [PHP](https://github.com/dryproject/drylib.php) | [drylib](https://packagist.org/packages/dryproject/drylib) on Packagist |
| [Python](https://github.com/dryproject/drylib.py) | TODO: [drylib](https://pypi.python.org/pypi/drylib) on PyPI |
| [Ruby](https://github.com/dryproject/drylib.rb) | [drylib](https://rubygems.org/gems/drylib) on RubyGems |
| [Rust](https://github.com/dryproject/drylib.rs) | TODO: [drylib](https://crates.io/crates/drylib) on crates.io |
| [Scheme](#todo) | TODO: [drylib](https://pkgs.racket-lang.org/package/drylib) for Racket |
| [Standard ML](#todo) | N/A |
| [Swift](#todo) | GitHub |

#### Packaging for C/C++

No standard packaging/distribution system.

- <https://buckaroo.readthedocs.io/en/latest/package-guide.html>

#### Packaging for C#/.NET

*(To be written.)*

#### Packaging for Common Lisp

- <https://gitlab.common-lisp.net/asdf/asdf/blob/master/doc/best_practices.md>
- <http://lisp-lang.org/learn/continuous-integration>

#### Packaging for D

- <https://code.dlang.org/getting_started>
- <https://code.dlang.org/publish>
- <https://code.dlang.org/package-format?lang=json>
- <https://code.dlang.org/package-format?lang=sdl>
- <https://code.dlang.org/register_package>
- <https://dlang.org/spec/module.html>
- DUB requires version tags of the form "vX.Y.Z" instead of "X.Y.Z".
- DUB will check for new tags in the repository twice an hour.

#### Packaging for Dart

- <https://www.dartlang.org/guides/libraries/create-library-packages>
- <https://www.dartlang.org/tools/pub/get-started>
- <https://www.dartlang.org/tools/pub/publishing>
- <https://www.dartlang.org/tools/pub/pubspec>

#### Packaging for Elixir

*(To be written.)*

#### Packaging for Erlang

*(To be written.)*

#### Packaging for Go

*(To be written.)*

#### Packaging for Java/Kotlin/JVM

TODO: Bintray for MVN?

#### Packaging for JS

- <https://docs.npmjs.com/getting-started/creating-node-modules>
- <https://docs.npmjs.com/getting-started/publishing-npm-packages>

#### Packaging for Julia

- <https://pkg.julialang.org>
- <https://docs.julialang.org/en/stable/manual/packages/>
- <https://github.com/JuliaLang/METADATA.jl>
- <https://github.com/JuliaCI/PackageEvaluator.jl/tree/master/website>

#### Packaging for Lua

- <https://luarocks.org/#quick-start>

#### Packaging for OCaml

- <https://opam.ocaml.org/doc/Packaging.html>
- <https://github.com/ocaml/opam-repository/issues>

#### Packaging for PHP

*(To be written.)*

#### Packaging for Python

*(To be written.)*

#### Packaging for Ruby

*(To be written.)*

#### Packaging for Rust

- <http://doc.crates.io/crates-io.html>
- <http://doc.crates.io/guide.html>

#### Packaging for Scheme

*(To be written.)*

#### Packaging for Standard ML

*(To be written.)*

#### Packaging for Swift

- <https://swift.org/package-manager/>
- <https://github.com/apple/example-package-fisheryates>
- <https://github.com/apple/example-package-playingcard>

### Packaging for Distros

*(To be written.)*

TODO: Alpine, Arch, Debian/Ubuntu; Homebrew, MacPorts, pkgsrc.

------------------------------------------------------------------------

## Testing

- <https://docs.travis-ci.com/user/languages/c/>
- <https://docs.travis-ci.com/user/languages/cpp/>
- <https://docs.travis-ci.com/user/languages/d/>
- <https://docs.travis-ci.com/user/languages/go/>
- <https://docs.travis-ci.com/user/languages/python/>

------------------------------------------------------------------------

## Documentation

*(To be written.)*

- <https://godoc.org/github.com/dryproject/drylib.go>

### Lists of Languages

- <http://ar.to/notes/drylib>
- <https://github.com/dryproject/drylib/blob/master/README.rst#languages>
- <https://github.com/dryproject> repository
- <https://github.com/dryproject/drylib-dev/tree/master/targets> submodule
- <https://bitbucket.org/dryproject/> repository
- Slack `#commits` subscription
- Google Sheet spreadsheet

------------------------------------------------------------------------

## Tracking

- <https://github.com/topics/drylib>
- <https://twitter.com/hashtag/drylib?f=tweets>
- <https://www.google.com/search?q=drylib>

------------------------------------------------------------------------

## See Also

[DRY](dry), [DRYlang](drylang)
