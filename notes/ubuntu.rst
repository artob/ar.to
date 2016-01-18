***********************
Arto's Notes re: Ubuntu
***********************

http://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29

Releases
========

.. table::

   ===============  ===============
   Ubuntu release   Debian release
   ===============  ===============
   15.10 wily       jessie  / sid
   15.04 vivid      jessie  / sid
   14.10 utopic     jessie  / sid
   14.04 trusty     jessie  / sid
   13.10 saucy      wheezy  / sid
   13.04 raring     wheezy  / sid
   12.10 quantal    wheezy  / sid
   12.04 precise    wheezy  / sid
   11.10 oneiric    wheezy  / sid
   11.04 natty      squeeze / sid
   10.10 maverick   squeeze / sid
   10.04 lucid      squeeze / sid
   ===============  ===============

Bug Reports
===========

Submitted Bug Reports
---------------------

* `#1155695 mq_overview(7) fs.mqueue.queues_max <https://bugs.launchpad.net/ubuntu/+source/manpages/+bug/1155695>`_

Relevant Bug Reports
--------------------

* `#1217407 whoopsie spams the log with "online" messages <https://bugs.launchpad.net/ubuntu/+source/whoopsie/+bug/1217407>`_

System Administration
=====================

Creating a User Account
-----------------------

https://help.ubuntu.com/14.04/serverguide/user-management.html#adding-deleting-users

::

   $ sudo useradd -m -c "Arto Bendiken" -G staff,adm,sudo -s /bin/bash arto
   $ sudo passwd arto

::

   $ sudo useradd -m -c "Buildbot slave" -r buildbot

System Information
==================

Release Information
-------------------

::

   $ lsb_release -a
   No LSB modules are available.
   Distributor ID: Ubuntu
   Description:    Ubuntu 14.04.1 LTS
   Release:        14.04
   Codename:       trusty

System Configuration
====================

Disable Apport
--------------

::

   $ echo enabled=0 > /etc/default/apport
   $ sudo service apport stop

Firewall Configuration
----------------------

* https://help.ubuntu.com/13.10/serverguide/firewall.html
* https://wiki.ubuntu.com/UncomplicatedFirewall
* https://help.ubuntu.com/community/UFW

::

   $ ufw disable
   $ ufw allow ssh/tcp
   $ ufw allow http/tcp
   $ ufw allow https/tcp
   $ ufw allow ...
   $ ufw enable
   $ ufw status verbose

::

   $ ufw deny from 1.2.3.4
   $ ufw delete deny from 1.2.3.4

Network File System (NFS)
-------------------------

* https://help.ubuntu.com/14.04/serverguide/network-file-system.html
* https://help.ubuntu.com/community/NFSv4Howto

Configure NFS client
^^^^^^^^^^^^^^^^^^^^

::

   $ aptitude install nfs-common
   # configure 'Domain =' in /etc/idmapd.conf
   # configure mounts in /etc/fstab

Post-Installation Tasks
-----------------------

Upgrade the kernel and system packages
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   $ aptitude update
   $ aptitude safe-upgrade
   $ reboot

Install some base packages
^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   $ aptitude install acpid     # on virtual machines
   $ aptitude install git       # for revision control
   $ aptitude install joe       # my preferred simple editor
   $ aptitude install tree

Disable PulseAudio
^^^^^^^^^^^^^^^^^^

This is only applicable to the Desktop edition:

::

   $ mkdir -p ~/.config/pulse
   $ echo autospawn=no > ~/.config/pulse/client.conf
   $ pulseaudio -k

Free disk space
^^^^^^^^^^^^^^^

::

   $ apt-get clean

Software Development
====================

Toolchain Repositories
----------------------

::

   $ sudo add-apt-repository -y ppa:ubuntu-toolchain-r/test
   $ sudo add-apt-repository -y "deb http://llvm.org/apt/trusty/ llvm-toolchain-trusty-3.5 main"

Common Lisp Development Environment
-----------------------------------

::

   $ sudo aptitude install clisp         # GNU CLISP
   $ sudo aptitude install ecl ecl-doc   # Embeddable Common Lisp (ECL)
   $ sudo aptitude install gcl gcl-doc   # GNU Common Lisp (GCL)
   $ sudo aptitude install sbcl sbcl-doc # Steel Bank Common Lisp (SBCL)

::

   $ sudo aptitude install cl-asdf
   $ sudo aptitude install cl-launch --without-recommends

Package Installation
====================

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

::

   $ sudo aptitude install strace

Text Editors
------------

::

   $ sudo aptitude install joe
   $ sudo aptitude install vim-nox
   $ sudo aptitude install emacs24-nox

Toolchain
---------

::

   $ sudo aptitude install make autoconf automake libtool
   $ sudo pkg_add g++-4.9.0p0
   $ sudo aptitude install clang-3.5

.. note::

   ``pkg-config`` is part of the base system.

Python
------

::

   $ sudo aptitude install python-pip
