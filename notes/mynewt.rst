********************************************************************************
Arto's Notes re: `Apache Mynewt <https://en.wikipedia.org/wiki/Apache_Mynewt>`__
********************************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

- https://mynewt.apache.org

- https://mynewt.apache.org/about/

----

Installation
============

`Installation on macOS <https://mynewt.apache.org/latest/newt/install/newt_mac.html>`__
---------------------------------------------------------------------------------------

::

   $ brew tap runtimeco/homebrew-mynewt && brew update

   $ brew install mynewt-newt         # the latest release

   $ brew unlink mynewt-newt
   $ brew install mynewt-newt --HEAD  # the master branch

   $ brew install gcc
   $ brew install gdb

   $ brew tap PX4/homebrew-px4 && brew update
   $ brew install gcc-arm-none-eabi-49
   $ arm-none-eabi-gcc --version

`Installation on Linux <https://mynewt.apache.org/latest/newt/install/newt_linux.html>`__
-----------------------------------------------------------------------------------------

TODO

----

Source Code
===========

Tooling
-------

- https://github.com/apache/mynewt-newt

- https://github.com/apache/mynewt-newtmgr

- https://github.com/apache/mynewt-mcumgr

- https://github.com/apache/mynewt-mcumgr-cli

Kernel
------

- https://github.com/apache/mynewt-core

Networking
----------

- https://github.com/apache/mynewt-nimble

- https://github.com/apache/mynewt-lorawan

- https://github.com/apache/mynewt-nfc

Storage
-------

- https://github.com/apache/mynewt-nffs

Documentation
-------------

- https://github.com/apache/mynewt-documentation

- https://github.com/apache/mynewt-site

Examples
--------

- https://github.com/apache/mynewt-blinky

- https://github.com/Decawave/mynewt-dw1000-apps

Hardware
--------

- https://github.com/runtimeco/mynewt_arduino_zero

- https://github.com/runtimeco/mynewt_nordic

- https://github.com/Decawave/mynewt-dw1000-core

- https://github.com/RISCV-on-Microsemi-FPGA/Mynewt

Miscellaneous
-------------

- https://github.com/runtimeco/mcumgr-android

- https://github.com/runtimeco/homebrew-mynewt

- https://github.com/runtimeco/debian-mynewt


----

See Also
========

- Arto's Notes re: `RTOSes <rtos>`__
