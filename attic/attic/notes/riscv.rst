******************************************************************
Arto's Notes re: `RISC-V <https://en.wikipedia.org/wiki/RISC-V>`__
******************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

https://riscv.org

----

Hardware
========

Development Boards
------------------

- `SiFive HiFive1
  <https://www.sifive.com/boards/hifive1>`__

- `GreenWaves GAPUINO
  <https://greenwaves-technologies.com/product/gapduino/>`__

Processors
----------

- `GreenWaves GAP8
  <https://greenwaves-technologies.com/en/gap8-product/>`__

----

Presentations
=============

- `Instruction Sets Want To Be Free: A Case for RISC-V
  <https://www.youtube.com/watch?v=mD-njD2QKN0>`__
  by David Patterson (Nov 2015)

----

Articles
========

- http://www.eetimes.com/author.asp?doc_id=1327239
- http://www.eetimes.com/author.asp?doc_id=1327291

----

Specifications
==============

- User-Level ISA
- Privileged ISA
- Compressed Instructions

----

Overview
========

- Three base integer ISAs, one per address width

  - RV32I, RV64I, RV128I.
  - Only 40 hardware instructions needed to run Linux.

- Fairly standard fixed 32-bit RISC instruction encoding.

Standard Extensions
-------------------

- **M**: Integer multiply/divide.
- **A**: Atomic memory operations. (AMOs + LR/SC)
- **F**: Single-precision floating point.
- **D**: Double-precision floating point.
- **G**: "General-purpose" ISA. (**IMAFD**)
- **Q**: Quad-precision floating point.

Miscellaneous Extensions
------------------------

- **C**: Compressed Instruction Extension.

Base ISA Details
----------------

- 32-bit fixed-width, naturally aligned instructions.
- 31 integer registers (``x1``-``x31``), plus ``x0`` zero register.
- No implicit registers, ``rs1``/``rs2``/``rd`` in fixed location.
- Floating-point adds 32 FP registers (``f0``-``f31``) plus FP CSR,
  also fused multiply-add four-register format.
- Designed to support PIC and dynamic linking.

Instruction Formats
-------------------

- R-type
- I-type
- S-type
- U-type

----

Unsorted Links
==============

- http://riscv.org/getting-started.html#qemu
- https://stackoverflow.com/questions/tagged/riscv
- https://github.com/freebsd-riscv
- https://github.com/riscv
- https://www.reddit.com/r/riscv
- https://github.com/SRI-CSL/l3riscv

----

See Also
========

- Arto's Notes re: `lowRISC <lowrisc>`__, an open-source SoC based on RISC-V
