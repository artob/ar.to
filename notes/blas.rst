******************************************************************************************
Arto's Notes re: `BLAS <https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms>`__
******************************************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

Levels
======

1. Level 1 BLAS, aka BLAS1: vector-vector operations.
2. Level 2 BLAS, aka BLAS2: vector-matrix operations.
3. Level 3 BLAS, aka BLAS3: matrix-matrix operations.

----

Installation
============

Installation on macOS
---------------------

::

   $ brew install openblas

Installation on Ubuntu
----------------------

::

   $ apt install libblas3 libblas-dev

   $ apt install libopenblas-base libopenblas-dev

----

Reference
=========

- `Quick Reference Guide <http://www.netlib.org/blas/blasqr.pdf>`__

Interface for C
---------------

::

   #include <cblas.h>

   int main(void) {
     // TODO
   }

----

`Implementations <https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms#Implementations>`__
====================================================================================================

Reference Implementation
------------------------

Packaged as ``libblas3`` in Ubuntu.

- http://www.netlib.org/blas/
- http://www.netlib.org/blas/faq.html

Implementations for C
---------------------

- http://www.netlib.org/blas/blast-forum/cinterface.pdf

CBLAS
^^^^^

- http://www.netlib.org/blas/#_cblas

- http://www.netlib.org/blas/cblas.h

OpenBLAS
^^^^^^^^

Packaged as ``libopenblas-base`` in Ubuntu.

- https://en.wikipedia.org/wiki/OpenBLAS

  - https://github.com/xianyi/OpenBLAS
  - https://github.com/xianyi/OpenBLAS/blob/develop/cblas.h
  - https://github.com/xianyi/OpenBLAS/wiki

- https://groups.google.com/forum/#!forum/openblas-users

ATLAS
^^^^^

- https://en.wikipedia.org/wiki/Automatically_Tuned_Linear_Algebra_Software
- http://math-atlas.sourceforge.net/
- https://github.com/math-atlas/math-atlas

GSL
^^^

- https://en.wikipedia.org/wiki/GNU_Scientific_Library

`Intel Math Kernel Library (MKL) <https://en.wikipedia.org/wiki/Math_Kernel_Library>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- https://software.intel.com/en-us/mkl
- https://software.intel.com/en-us/mkl-developer-reference-c
- https://github.com/intel/mkl-dnn
- https://software.intel.com/en-us/articles/intelr-mkl-and-c-template-libraries

cuBLAS
^^^^^^

- https://docs.nvidia.com/cuda/cublas/
- https://stackoverflow.com/questions/tagged/cublas

Apple Accelerate Framework
^^^^^^^^^^^^^^^^^^^^^^^^^^

- https://developer.apple.com/documentation/accelerate
- https://developer.apple.com/library/archive/releasenotes/Performance/RN-vecLib/

`AMD Core Math Library (ACML) <https://en.wikipedia.org/wiki/AMD_Core_Math_Library>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Discontinued.

Implementations for C++
-----------------------

BLAS++
^^^^^^

- https://bitbucket.org/icl/blaspp
- https://icl.bitbucket.io/blaspp/doxygen/html/

Implementations for Java
------------------------

- https://github.com/fommil/netlib-java
- https://math.nist.gov/javanumerics/
- http://icl.cs.utk.edu/f2j/

Miscellaneous
-------------

- https://wiki.debian.org/DebianScience/LinearAlgebraLibraries

- https://github.com/xianyi/OpenBLAS/wiki/Developer-manual#optimize-gemm

- https://github.com/xianyi/BLAS-Tester

----

Alternatives
============

BLIS
----

- https://github.com/flame/blis

- https://github.com/devinamatthews/tblis

- `Accelerating Machine Learning Using BLIS
  <https://pdfs.semanticscholar.org/c657/95519a39ecbf2235b7b7776d3fa2ba0beba7.pdf>`__

----

See Also
========

- `Fortran <fortran>`__

- `Fast Fourier transform <fft>`__

- `logic <logic>`__: `first-order logic (FOL) <fol>`__, `higher-order logic (HOL) <hol>`__

- `BLAS questions on Stack Overflow <https://stackoverflow.com/questions/tagged/blas>`__
