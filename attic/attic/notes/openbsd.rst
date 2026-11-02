************************
Arto's Notes re: OpenBSD
************************

System Administration
=====================

Creating a User Account
-----------------------

http://www.openbsd.org/faq/faq10.html#AddDelUser

::

   $ sudo useradd -m -c "Arto Bendiken" -G staff,wheel arto
   $ sudo passwd arto

::

   $ sudo useradd -m -c "Buildbot slave" -u 999 buildbot

Changing the Login Shell
------------------------

::

   $ sudo usermod -s /usr/local/bin/bash arto

Adding ``sudo`` Privileges
--------------------------

::

   $ sudo usermod -G wheel arto

   $ cp -p /etc/sudoers{,.orig}
   $ echo '#includedir /etc/sudoers.d' >> sudoers
   $ mkdir -p /etc/sudoers.d && chmod 750 /etc/sudoers.d
   $ echo '%wheel ALL=(ALL) NOPASSWD: SETENV: ALL' > /etc/sudoers.d/wheel
   $ chmod 440 /etc/sudoers.d/wheel

System Information
==================

Release Information
-------------------

::

   $ uname -a
   OpenBSD openbsd.my.domain 5.6 GENERIC.MP#333 amd64

Platform Information
--------------------

::

   $ machine
   amd64

   $ machine -a
   amd64

System Configuration
====================

Package Management
==================

Basic Configuration
-------------------

::

   $ export PKG_PATH="/mnt/cdrom/5.6/packages/`machine -a`/"
   $ export PKG_PATH="ftp://ftp.eu.openbsd.org/pub/OpenBSD/5.6/packages/`machine -a`/"
   $ export PKG_PATH="ftp://ftp.eu.openbsd.org/pub/OpenBSD/5.6/packages/amd64/"

   $ sudo pkg_add pkglocatedb

Finding a Package
-----------------

http://www.openbsd.org/faq/faq15.html#PortsSearch

::

   $ cd /usr/ports
   $ make search key=joe

ftp://ftp.eu.openbsd.org/pub/OpenBSD/5.6/packages/amd64/

Listing Packages
----------------

http://www.openbsd.org/faq/faq15.html#PkgList

::

   $ pkg_info

Installing Packages
-------------------

http://www.openbsd.org/faq/faq15.html#PkgInstall

::

  $ sudo pkg_add joe

Upgrading Packages
------------------

http://www.openbsd.org/faq/faq15.html#PkgUpdate

::

   $ sudo pkg_add -u
   $ sudo pkg_add -u joe

Uninstalling Packages
---------------------

http://www.openbsd.org/faq/faq15.html#PkgRemove

::

   $ sudo pkg_delete joe

Package Installation
====================

* `OpenBSD Ports <http://ports.su/>`__

Core Utilities
--------------

::

   $ sudo pkg_add bash
   $ sudo pkg_add curl
   $ sudo pkg_add wget
   $ sudo pkg_add rsync
   $ sudo pkg_add tree
   $ sudo pkg_add git
   $ sudo pkg_add screen--

.. note::

   ``sudo`` and ``tmux`` are part of the base system.

Text Editors
------------

::

   $ sudo pkg_add joe
   $ sudo pkg_add vim--no_x11
   $ sudo pkg_add emacs--no_x11

Toolchain
---------

::

   $ sudo pkg_add gmake autoconf automake libtool
   $ sudo pkg_add g++-4.9.0p0
   $ sudo pkg_add llvm  # for clang

.. note::

   ``pkg-config`` is part of the base system.

::

   $ export AUTOCONF_VERSION=2.69 AUTOMAKE_VERSION=1.14

Python 2.7
----------

::

   $ sudo pkg_add py-pip
   $ sudo ln -sf /usr/local/bin/pip-2.7 /usr/local/bin/pip

References
==========

* `OpenBSD in Wikipedia <https://en.wikipedia.org/wiki/OpenBSD>`__
* `OpenBSD.org <http://www.openbsd.org/>`__
* `OpenBSD Frequently Asked Questions (FAQ) <http://www.openbsd.org/faq/>`__
* `OpenBSD Porter's Handbook <http://www.openbsd.org/faq/ports/>`__
