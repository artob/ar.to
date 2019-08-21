**********************
Arto's Notes re: Bochs
**********************

Installation
============

::

   $ sudo aptitude install bochs-sdl

::

   $ sudo aptitude install libgtk2.0-dev libsdl1.2-dev libreadline-dev

   $ ./configure             \
       --enable-x86-64       \
       --enable-smp          \
       --enable-debugger     \
       --enable-disasm       \
       --enable-readline     \
       --enable-avx          \
       --enable-x86-debugger \
       --disable-docbook     \
       --with-sdl            \
       LDFLAGS='-pthread'
    $ make && sudo make install

.. note::

   SDL2 support is still buggy at least as of Bochs 2.6.7.

Known Bugs
==========

* `#1364 Undefined reference to symbol 'pthread_create@@GLIBC_2.2.5'
  <https://sourceforge.net/p/bochs/bugs/1364/>`__

Known Limitations
=================

* INT13H AH=42 is not supported for floppies (``int13_diskette: unsupported AH=42``).
  http://ehc.ac/p/bochs/mailman/message/24184671/

References
==========

* http://wiki.osdev.org/Bochs
