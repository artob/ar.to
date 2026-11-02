---
title: "[Fortran](https://en.wikipedia.org/wiki/Fortran)"
---

<div class="contents" data-local="" data-depth="1" data-backlinks="none">

Table of Contents

</div>

------------------------------------------------------------------------

## [History](https://en.wikipedia.org/wiki/Fortran#History)

> "Much of my work has come from being lazy. I didn't like writing programs, and so, when I was working on the IBM 701, writing programs for computing missile trajectories, I started work on a programming system to make it easier to write programs."
>
> -- [John Backus](https://en.wikipedia.org/wiki/John_Backus)

------------------------------------------------------------------------

## Installation

- [Fortran on a Mac](https://www.macinchem.org/reviews/fortran/fortran.php)
- [Fortran compiler installation instructions for OS X](https://www.webmo.net/support/fortran_osx.html)

### Installation on macOS

GNU Fortran is now provided as part of [GCC](gcc), and can be installed with:

    $ brew install gcc

    $ which gfortran

------------------------------------------------------------------------

## [Implementations](https://en.wikipedia.org/wiki/List_of_compilers#Fortran_compilers)

### [GNU Fortran (GFortran)](https://en.wikipedia.org/wiki/GNU_Fortran)

- <https://gcc.gnu.org/fortran/>
- <https://gcc.gnu.org/wiki/GFortran>
- <https://gcc.gnu.org/wiki/GFortranBinaries>

------------------------------------------------------------------------

## Interoperability

### Interoperability with C

- Most Fortran compilers for Unix follow the original AT&T `f77` compiler's calling conventions.
- External Fortran symbols are converted to lowercase and suffixed with an underscore to avoid collisions with C symbols.

#### Type Mapping from Fortran to C

| Fortran Type                 | C Type          |
|------------------------------|-----------------|
| `INTEGER*1`, `BYTE`          | `signed char`   |
| `INTEGER*2`                  | `short int`     |
| `INTEGER*4`, `INTEGER`       | `int`           |
| `INTEGER*8`                  | `long long int` |
| `LOGICAL`                    | `int`           |
| `REAL*4`, `REAL`             | `float`         |
| `REAL*8`, `DOUBLE PRECISION` | `double`        |
| `REAL*16`                    | `long double`   |

------------------------------------------------------------------------

## See Also

[BLAS](blas), [LAPACK](lapack), [LINPACK](https://en.wikipedia.org/wiki/LINPACK)
