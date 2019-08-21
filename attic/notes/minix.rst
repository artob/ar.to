**********************
Arto's Notes re: MINIX
**********************

System Administration
=====================

Creating a User Account
-----------------------

http://wiki.minix3.org/doku.php?id=usersguide:managinguseraccounts

::

   $ user add -m -g operator -s /bin/bash arto

System Information
==================

System Configuration
====================

::

   $ echo export TZ=Europe/Berlin > /etc/rc.timezone

Package Management
==================

http://wiki.minix3.org/doku.php?id=usersguide:installingbinarypackages

::

   $ pkgin update

Package Installation
====================

::

   $ pkgin install bash
   $ pkgin install git-base
   $ pkgin install openssh

   $ pkgin install clang binutils


References
==========

* `MINIX in Wikipedia <https://en.wikipedia.org/wiki/MINIX>`__
* `MINIX 3 in Wikipedia <https://en.wikipedia.org/wiki/MINIX_3>`__
* `MINIX3.org <http://www.minix3.org/>`__
* `MINIX Wiki <http://wiki.minix3.org/>`__
