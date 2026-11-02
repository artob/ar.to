---
title: "[F\\*](https://en.wikipedia.org/wiki/F*_(programming_language))"
weight: 1
---

- <https://www.fstar-lang.org/>
- <https://fstarlang.github.io/>
- <https://github.com/FStarLang/FStar/wiki>
- <https://lists.gforge.inria.fr/pipermail/fstar-club/>
- <https://github.com/FStarLang/FStar>

## Installation

<https://github.com/FStarLang/FStar/blob/master/INSTALL.md>

### macOS

    $ brew install fstar

    $ fstar.exe --version

    # Compiling code extracted to OCaml requires Batteries etc:
    $ brew install opam
    $ opam install batteries zarith stdint

    # Compiling code extracted to F# requires Mono:
    $ brew install mono

## Projects

- [Project Everest](https://project-everest.github.io/), a formally verified TLS stack

## Libraries

- [HaCl\*](https://github.com/mitls/hacl-star),  
  a formally verified cryptographic library

- [miTLS](https://github.com/mitls/mitls-fstar),  
  a formally verified reference implementation of TLS

## Tools

- [KreMLin](https://github.com/FStarLang/kremlin), a tool to extract F\* programs to readable C code

## Tutorials

<http://prosecco.gforge.inria.fr/personal/hritcu/teaching/mpri-jan2017/>

## Talks

- Translating from F\* to C: a progress report <https://jonathan.protzenko.fr/papers/talk-ml16.pdf>
- Low-level and stateful programming in F\* <https://jonathan.protzenko.fr/mpri/20170120-protocols/pres.pdf>

## See Also

- [ATS](ats)
- [CakeML](cakeml)
- [Idris](idris)
