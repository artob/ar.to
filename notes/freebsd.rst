************************
Arto's Notes re: FreeBSD
************************

System Administration
=====================

Creating a User Account
-----------------------

Adding ``sudo`` Privileges
--------------------------

Look under ``/usr/local/etc/sudoers.d/``.

::

   $ pw usermod jhacker -G wheel

   $ cat /usr/local/etc/sudoers.d/wheel
   %wheel ALL=(ALL) NOPASSWD:ALL

System Information
==================

Release Information
-------------------

::

   $ uname -a
   FreeBSD freebsd 10.1-RELEASE FreeBSD 10.1-RELEASE #0 r274401: ...

::

   $ freebsd-version
   10.1-RELEASE

System Configuration
====================

Installing PKGNG
----------------

https://www.freebsd.org/doc/handbook/pkgng-intro.html

::

   $ /usr/sbin/pkg

Installing Documentation
------------------------

::

   $ sudo pkg install en-freebsd-doc

Using the NFS Client
--------------------

::

   $ echo 'nfs_client_enable="YES"' > /etc/rc.conf.d/nfsclient
   $ sudo service nfsclient start
   $ mount nfs.example.org:/home/jhacker /home/jhacker

Software Development
====================

General Development Environment
-------------------------------

::

   $ sudo pkg install bash
   $ sudo pkg install sudo
   $ sudo pkg install wget
   $ sudo pkg install rsync
   $ sudo pkg install tree

   $ sudo pkg install git
   $ sudo pkg install joe
   $ sudo pkg install vim-lite
   $ sudo pkg install emacs-nox11
