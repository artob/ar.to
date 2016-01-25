**********************************************
Arto's Notes re: `RISC-V <http://riscv.org>`__
**********************************************

Presentations
=============

* `Instruction Sets Want To Be Free: A Case for RISC-V
  <https://www.youtube.com/watch?v=mD-njD2QKN0>`__
  by David Patterson (Nov 2015)

3rd RISC-V Workshop (Jan 2016)
------------------------------

`2nd RISC-V Workshop (Jun 2015) <http://riscv.org/workshop-jun2015.html>`__
----------------------------------------------------------------------------

`1st RISC-V Workshop (Jan 2015) <http://riscv.org/workshop-jan2015.html>`__
----------------------------------------------------------------------------

* `Introductions and Welcome
  <https://youtu.be/A5kpo_ff98M>`__
* `LowRISC SoC
  <https://youtu.be/r1i9SAOdyS4>`__
* `Structure of the RISC-V Software Stack
  <https://youtu.be/2T3eRndwcr0>`__
  (`slides <http://riscv.org/workshop-jan2015/riscv-software-stack-bootcamp-jan2015.pdf>`__)

Articles
========

* http://www.eetimes.com/author.asp?doc_id=1327239
* http://www.eetimes.com/author.asp?doc_id=1327291

Specifications
==============

* User-Level ISA
* Privileged ISA
* Compressed Instructions

Overview
========

* Three base integer ISAs, one per address width

  - RV32I, RV64I, RV128I.
  - Only 40 hardware instructions needed to run Linux.

* Fairly standard fixed 32-bit RISC instruction encoding.

Standard Extensions
-------------------

* **M**: Integer multiply/divide.
* **A**: Atomic memory operations. (AMOs + LR/SC)
* **F**: Single-precision floating point.
* **D**: Double-precision floating point.
* **G**: "General-purpose" ISA. (**IMAFD**)
* **Q**: Quad-precision floating point.

Miscellaneous Extensions
------------------------

* **C**: Compressed Instruction Extension.

Base ISA Details
----------------

* 32-bit fixed-width, naturally aligned instructions.
* 31 integer registers (``x1``-``x31``), plus ``x0`` zero register.
* No implicit registers, ``rs1``/``rs2``/``rd`` in fixed location.
* Floating-point adds 32 FP registers (``f0``-``f31``) plus FP CSR,
  also fused multiply-add four-register format.
* Designed to support PIC and dynamic linking.

Instruction Formats
-------------------

* R-type
* I-type
* S-type
* U-type

See Also
========

* `lowRISC <lowrisc>`__, an open-source SoC based on RISC-V.

Unsorted Links
==============

* http://riscv.org/getting-started.html#qemu
* https://stackoverflow.com/questions/tagged/riscv
* https://github.com/freebsd-riscv
* https://github.com/riscv
* https://www.reddit.com/r/riscv
