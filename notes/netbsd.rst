***********************
Arto's Notes re: NetBSD
***********************

System Administration
=====================

Creating a User Account
-----------------------

::

   $ sudo useradd -m -c "Arto Bendiken" arto
   $ sudo usermod -G wheel arto
   $ sudo passwd arto

Change the Login Shell
----------------------

::

   $ sudo usermod -s /usr/pkg/bin/bash arto

Adding ``sudo`` Privileges
--------------------------

Look under ``/usr/pkg/etc/sudoers.d/``::

   $ cat /usr/pkg/etc/sudoers.d/wheel
   %wheel ALL=(ALL) NOPASSWD:ALL

System Information
==================

Release Information
-------------------

::

   $ head -n1 /etc/release
   NetBSD 6.1.5/amd64

   $ uname -a
   NetBSD netbsd 6.1.5 NetBSD 6.1.5 (GENERIC) amd64

System Configuration
====================

Package Management
==================

* https://www.pkgsrc.org/

::

   $ export PKG_PATH="http://ftp.netbsd.org/pub/pkgsrc/packages/$(uname -s)/$(uname -m)/$(uname -r|cut -f '1 2' -d.)/All"
   $ export PKG_PATH='http://ftp.netbsd.org/pub/pkgsrc/packages/NetBSD/amd64/6.1.5/All'

   $ find /usr/pkgsrc -name joe

   $ sudo pkg_admin -K /var/db/pkg fetch-pkg-vulnerabilities

Package Installation
====================

* http://www.pkgsrc.se/

Core Utilities
--------------

::

   $ make -C /usr/pkgsrc/shells/bash install
   $ make -C /usr/pkgsrc/security/sudo install
   $ make -C /usr/pkgsrc/www/curl install
   $ make -C /usr/pkgsrc/net/wget install
   $ make -C /usr/pkgsrc/net/rsync install
   $ make -C /usr/pkgsrc/sysutils/tree install
   $ make -C /usr/pkgsrc/devel/git install # FIXME: git <- git-gitk <- tk <- X11
   $ make -C /usr/pkgsrc/misc/screen install
   $ make -C /usr/pkgsrc/misc/tmux install

Text Editors
------------

::

   $ make -C /usr/pkgsrc/editors/joe install
   $ make -C /usr/pkgsrc/editors/vim install
   $ make -C /usr/pkgsrc/editors/emacs install

Toolchain
---------

::

   $ make -C /usr/pkgsrc/devel/gmake install
   $ make -C /usr/pkgsrc/devel/autoconf install
   $ make -C /usr/pkgsrc/devel/automake install
   $ make -C /usr/pkgsrc/devel/libtool install
   $ make -C /usr/pkgsrc/devel/pkg-config install
   $ make -C /usr/pkgsrc/lang/clang install
   $ make -C /usr/pkgsrc/lang/gcc install

References
==========

* https://en.wikipedia.org/wiki/NetBSD
* http://www.netbsd.org/
* http://www.netbsd.org/docs/guide/en/chap-boot.html
* http://www.netbsd.org/docs/pkgsrc/
* http://www.netbsd.org/docs/pkgsrc/developers-guide.html
