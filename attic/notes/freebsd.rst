************************
Arto's Notes re: FreeBSD
************************

Core Technologies
=================

* Capsicum
* DTrace
* Jails
* ZFS

Development Notes
=================

::

   #define __FreeBSD__ 10
   #define __FreeBSD_cc_version 1000001

System Administration
=====================

Creating a User Account
-----------------------

https://www.freebsd.org/doc/handbook/users-synopsis.html#users-adduser

::

   $ sudo pw useradd -m -c "Buildbot slave" -u 999 -n buildbot

Changing the Login Shell
------------------------

https://www.freebsd.org/doc/handbook/shells.html#changing-shells

::

   $ sudo -u arto chsh -s /usr/local/bin/bash

Adding ``sudo`` Privileges
--------------------------

Look under ``/usr/local/etc/sudoers.d/``.

::

   $ pw usermod jhacker -G wheel

   $ cat /usr/local/etc/sudoers.d/wheel
   %wheel ALL=(ALL) NOPASSWD:ALL

Tracing System Calls
--------------------

::

   $ ktrace date && kdump
   $ truss date

System Information
==================

Release Information
-------------------

::

   $ freebsd-version
   10.1-RELEASE

::

   $ uname -a
   FreeBSD freebsd 10.1-RELEASE FreeBSD 10.1-RELEASE #0 r274401: ...

System Configuration
====================

Using the NFS Client
--------------------

::

   $ echo 'nfs_client_enable="YES"' > /etc/rc.conf.d/nfsclient
   $ sudo service nfsclient start
   $ mount nfs.example.org:/home/jhacker /home/jhacker

Package Management
==================

* https://www.freebsd.org/doc/handbook/pkgng-intro.html

Installing PKGNG
----------------

::

   $ /usr/sbin/pkg

Package Installation
====================

Documentation
-------------

::

   $ sudo pkg install en-freebsd-doc

Core Utilities
--------------

::

   $ sudo pkg install bash
   $ sudo pkg install sudo
   $ sudo pkg install curl
   $ sudo pkg install wget
   $ sudo pkg install rsync
   $ sudo pkg install tree
   $ sudo pkg install git
   $ sudo pkg install screen
   $ sudo pkg install tmux

Text Editors
------------

::

   $ sudo pkg install joe vim-lite emacs-nox11

Toolchain
---------

::

   $ sudo pkg install gmake autoconf automake libtool pkgconf
   $ sudo pkg install gcc49

Build Automation
----------------

::

   $ sudo pkg install buildbot-slave

References
==========

* https://en.wikipedia.org/wiki/FreeBSD
* https://www.freebsd.org/
* https://www.freebsd.org/cgi/man.cgi?query=nanobsd&sektion=8&n=1
* `Why is FreeBSD deprecating GCC in favor of Clang/LLVM?
  <http://unix.stackexchange.com/questions/49906/why-is-freebsd-deprecating-gcc-in-favor-of-clang-llvm>`__
