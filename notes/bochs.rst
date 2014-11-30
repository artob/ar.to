**********************
Arto's Notes re: Bochs
**********************

Installation
============

::

   $ sudo aptitude install bochs-sdl

::

   $ sudo aptitude install libgtk2.0-dev libsdl2-dev

   $ ./configure             \
       --enable-x86-64       \
       --enable-smp          \
       --enable-debugger     \
       --enable-disasm       \
       --enable-readline     \
       --enable-avx          \
       --enable-x86-debugger \
       --disable-docbook     \
       --with-sdl2           \
       LDFLAGS='-pthread'
    $ make && sudo make install

Known Bugs
==========

* `#1364 Undefined reference to symbol 'pthread_create@@GLIBC_2.2.5'
  <https://sourceforge.net/p/bochs/bugs/1364/>`__

References
==========

* http://wiki.osdev.org/Bochs
