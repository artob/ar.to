***************************************************************************************
Arto's Notes re: `Julia <https://en.wikipedia.org/wiki/Julia_(programming_language)>`__
***************************************************************************************

* https://julialang.org/

Installation
============

https://julialang.org/downloads/platform.html

macOS
-----

https://julialang.org/downloads/platform.html#macos

::

   $ brew cask install julia --appdir=~/Applications

Tutorials
=========

* https://docs.julialang.org/en/stable/manual/packages/#Creating-a-new-Package-1

Packaging
---------

::

    julia> Pkg.add("PkgDev")
    julia> using PkgDev
    julia> PkgDev.generate("FooBar", "MIT")

Reference
=========

* https://docs.travis-ci.com/user/languages/julia/
