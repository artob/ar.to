---
title: "[MacPorts](https://en.wikipedia.org/wiki/MacPorts)"
---

```text
$ sudo port selfupdate
$ sudo port sync
$ sudo port upgrade outdated
$ sudo port uninstall inactive
```

## Language Environments

### C++11 Development Environment

```text
$ sudo port install cctools +llvm36
$ sudo port install ld64-latest +llvm36
```

```text
$ sudo port install gcc49
$ sudo port select --set gcc mp-gcc49

$ sudo port install boost +gcc49 -python27
```

```text
$ sudo port install clang-3.6 +analyzer
$ sudo port select --set clang mp-clang-3.6
$ sudo port select --set llvm mp-llvm-3.6

$ sudo port install boost +clang36 -python27
```

> **Note:** Boost 1.55.0 built with Clang 3.4 presently needs the patch in [\#42282](https://trac.macports.org/ticket/42282).

```text
$ sudo port install cmake
```

### Common Lisp Development Environment

```text
$ sudo port install abcl +ffi         # Armed Bear Common Lisp (ABCL)
$ sudo port install ccl               # Clozure CL (CCL)
$ sudo port install clisp             # GNU CLISP
$ sudo port install ecl               # Embeddable Common Lisp (ECL)
$ sudo port install gcl               # GNU Common Lisp (GCL)
$ sudo port install sbcl +threads     # Steel Bank Common Lisp (SBCL)
```

> **Note:** GCL @2.6.7_1 currently fails to build on Mac OS X 10.7.5.

```text
$ sudo port install cl-ppcre +sbcl
```

### OCaml Development Environment

```text
$ sudo port install ocaml
$ sudo port install opam
$ opam init
$ opam install core utop
```

### Java Development Environment

```text
$ sudo port install maven3
$ sudo port select --set maven maven3
$ sudo port install gradle
$ sudo port install slf4j
```

## Port Directory

### Currently Missing Packages

- **Common Lisp**: CMUCL, MKCL, XCL, cl-launch

## Portfile Authoring

```text
$ port lint --nitpick $portname
```

## See Also

- [Homebrew](homebrew)
