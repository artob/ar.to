---
title: "[DRYlang](https://drylang.org)"
---

An experimental programming language.

- <https://drylang.org>
- <https://github.com/dryproject/drylang>
- <https://bitbucket.org/dryproject/drylang>

------------------------------------------------------------------------

**Table of Contents:**

- [Roadmap](#roadmap)
- [Packaging](#packaging)
- [Testing](#testing)
- [Tracking](#tracking)
- [Features](#features)
- [Research](#research)
- [See Also](#see-also)

------------------------------------------------------------------------

## Roadmap

*(To be written.)*

### Targets

#### Binary Targets

- [RISC-V](riscv)
- [WASM](wasm)
- [BEAM](erlang)

------------------------------------------------------------------------

## Packaging

*(To be written.)*

TODO: Alpine, Arch, Debian/Ubuntu; Homebrew, MacPorts, pkgsrc.

------------------------------------------------------------------------

## Testing

*(To be written.)*

------------------------------------------------------------------------

## Tracking

- <https://github.com/topics/drylang>
- <https://twitter.com/hashtag/drylang?f=tweets>
- <https://www.google.com/search?q=drylang>

------------------------------------------------------------------------

## Features

### Pattern Matching

*(To be written.)*

```text
(match my-value
 ;; TODO
 ...)
```

### Type Annotations

*(To be written.)*

```text
(fun (x: int y: int) ...)

(fun (x: int y: -1) ...)

(fun (x: int y: (int -1)) ...)
```

### Type Inference

*(To be written.)*

### Partial Application

*(To be written.)*

```text
(define square (* 2))
```

### Function Pipelines

*(To be written.)*

### Condition System

*(To be written.)*

### Numerical Tower

*(To be written.)*

------------------------------------------------------------------------

## Research

- [LtU's Getting Started thread](http://lambda-the-ultimate.org/node/492)
- [Graydon Hoare: What next for compiled languages](http://lambda-the-ultimate.org/node/5466)
- [The design side of programming language design](http://tomasp.net/blog/2017/design-side-of-pl/)
- [Notes on notation and thought](https://github.com/hypotext/notation)

### MLs

- [1ML](https://people.mpi-sws.org/~rossberg/1ml/)
- [OCaml](ocaml)
- [CakeML](cakeml)
- [F\*](fstar)

### Lisps

- [Common Lisp](common-lisp)
- [Scheme](scheme)
  - [Stalin](https://en.wikipedia.org/wiki/Stalin_%28scheme_implementation%29)
- [Clojure](clojure)
- [Carp](https://github.com/carp-lang/Carp)

#### [Typed Racket](racket)

- [The Typed Racket Guide](https://docs.racket-lang.org/ts-guide/)
- [The Typed Racket Reference](https://docs.racket-lang.org/ts-reference/)
- [Typed Racket on GitHub](https://github.com/racket/typed-racket)

#### Shen

- <http://shenlanguage.org>
- <https://github.com/Shen-Language/wiki/wiki>
- <https://github.com/Shen-Language/shen-sources>
- <https://www.reddit.com/r/shenlanguage/>
- <https://www.reddit.com/user/Mark_Tarver>

#### [LFE](https://en.wikipedia.org/wiki/LFE_(programming_language))

- <http://lfe.io>
- <https://github.com/rvirding/lfe>

### Array

#### [APL](https://en.wikipedia.org/wiki/APL_(programming_language))

- [Papers from the Lost Culture of Array Languages](http://prog21.dadgum.com/114.html)
- [Notation as a Tool of Thought](http://www.eecg.toronto.edu/~jzhu/csc326/readings/iverson.pdf) (1979) by Ken Iverson ([@HN](https://news.ycombinator.com/item?id=16842378))
- [A Personal View of APL](http://www.jsoftware.com/papers/APLPersonalView.htm) by Ken Iverson
- [Language as an Intellectual Tool: From Hieroglyphics to APL](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.86.6185&rep=rep1&type=pdf) (1991) by Donald McIntyre
- [The Role of Composition in Computer Programming](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.98.3105&rep=rep1&type=pdf) (1995) by Donald McIntyre
- [My Life with Array Languages](http://webdocs.cs.ualberta.ca/~smillie/Jpage/MyLife.pdf) by Keith Smillie
- [APL Style: Patterns/Anti-patterns](https://sway.com/b1pRwmzuGjqB30On)
- [The BEAM needs an APL-y language](https://medium.com/@gordonguthrie/the-beam-needs-an-apl-y-language-6c5c998ba6d) ([@HN](https://news.ycombinator.com/item?id=16799551))
- [Fear and Loathing with APL](https://medium.com/theburningmonk-com/fear-and-loathing-with-apl-eaa1d1a10659)
- <http://tryapl.org>
- [Mastering Dyalog APL](https://www.dyalog.com/uploads/documents/MasteringDyalogAPL.pdf)

#### [J](https://en.wikipedia.org/wiki/J_(programming_language))

- <http://www.jsoftware.com>
- <https://github.com/jsoftware/jsource>

#### [K](https://en.wikipedia.org/wiki/K_(programming_language))

- <https://kx.com>
- <http://kparc.com> ([@HN](https://news.ycombinator.com/item?id=11561573))
- <https://github.com/kevinlawler/kona>

### Concatenative

#### [Joy](https://en.wikipedia.org/wiki/Joy_(programming_language))

- [Joy Programming Language](https://www.latrobe.edu.au/humanities/research/research-projects/past-projects/joy-programming-language)
- [Functional Programming in Joy and K](http://vector.org.uk/art10000360)

### Miscellaneous

- [Wolfram Language](wolfram)
- [Erlang](erlang)
- [Elixir](elixir)
- [Rust](rust)
- [CRDTs](crdt)

------------------------------------------------------------------------

## See Also

[DRY](dry), [DRYlib](drylib)
