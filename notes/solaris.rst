************************
Arto's Notes re: Solaris
************************

System Administration
=====================

Creating a User Account
-----------------------

::

   $ sudo useradd -m -c "J. Random Hacker" jhacker
   $ sudo usermod -R root jhacker
   $ sudo passwd jhacker

Adding ``sudo`` Privileges
--------------------------

Look in ``/etc/sudoers.d/svc-system-config-user``.

https://blogs.oracle.com/taylor22/entry/adding_users_in_solaris_11

System Information
==================

Release Information
-------------------

::

   $ uname -a
   SunOS solaris 5.11 11.2 i86pc i386 i86pc

::

   $ cat /etc/release | fgrep -v Copy | sed 's/^ *//'
   Oracle Solaris 11.2 X86
   Assembled 23 June 2014

System Configuration
====================

Installing OpenCSW
------------------

http://www.opencsw.org/manual/for-administrators/

::

   $ pkgadd -d http://get.opencsw.org/now
   $ /opt/csw/bin/pkgutil -U
   $ cp -p /etc/default/login{,.orig}
   $ gsed -i 's@#PATH=@PATH=/opt/csw/bin:@' /etc/default/login
   $ gsed -i 's@#SUPATH=@SUPATH=/opt/csw/bin:@' /etc/default/login
   $ gsed -i 's@PATH=@PATH=/opt/csw/bin:@' ~/.profile

Upgrading OpenCSW Packages
--------------------------

::

   $ pkgutil -Uuy

Software Development
====================

General Development Environment
-------------------------------

::

   $ sudo pkg install developer/versioning/git
   $ sudo pkg install editor/gnu-emacs
   $ sudo pkgutil -iy joe
