****************************************************************************
Arto's Notes re: `WebAssembly <https://en.wikipedia.org/wiki/WebAssembly>`__
****************************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

- https://webassembly.org
- https://caniuse.com/#feat=wasm

----

Tutorials
=========

- `Clipcode's WebAssembly Developer's Guide
  <http://www.clipcode.net/training/clipcode-webassembly-devguide.pdf>`__

----

Installation
============

Installation on macOS
---------------------

Install `WABT <https://github.com/WebAssembly/wabt>`__ and
`Binaryen <https://github.com/WebAssembly/binaryen>`__ via Homebrew:

::

   $ brew install wabt

   $ brew install binaryen

----

Software
========

- `Emscripten SDK <https://github.com/juj/emsdk>`__

- https://github.com/cretz/asmble
- https://github.com/cretz/asmble/tree/master/examples

`Advanced Tools <https://webassembly.org/getting-started/advanced-tools/>`__
----------------------------------------------------------------------------

- `WebAssembly Binary Toolkit (WABT)
  <https://github.com/WebAssembly/wabt>`__:
  ``wast2wasm``, ``wasm2wast``, ``wast-desugar``, ``wasm-interp``

- `Binaryen <https://github.com/WebAssembly/binaryen>`__

Miscellaneous
-------------

- `Awesome Wasm
  <https://github.com/mbasso/awesome-wasm>`__

- `Awesome WebAssembly Languages
  <https://github.com/appcypher/awesome-wasm-langs>`__

----

Design
======

- https://github.com/WebAssembly/design/blob/master/Rationale.md

----

Glossary
========

WASM
   `WebAssembly <https://webassembly.org/docs/binary-encoding/>`__

WAT
   ?

WAST
   `WASM Abstract Syntax Tree <https://webassembly.org/docs/text-format/>`__

WAVM
   `WebAssembly Virtual Machine <https://github.com/WebAssembly/spec/tree/master/interpreter>`__

WABT
   WebAssembly Binary Toolkit

----

See Also
========

- Arto's Notes re: `JavaScript <js>`__, `Lua <lua>`__
