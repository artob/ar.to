***************************
Arto's Notes re: Arch Linux
***************************

System Administration
=====================

* https://wiki.archlinux.org/index.php/Pacman

Creating a User Account
-----------------------

https://wiki.archlinux.org/index.php/Users_and_groups#Example_adding_a_user

::

   $ useradd -m -c "Arto Bendiken" -G wheel -s /bin/bash arto
   $ passwd arto

System Information
==================

Release Information
-------------------

::

   $ pacman -S lsb-release
   $ lsb_release -a
   LSB Version:    1.4
   Distributor ID: Arch
   Description:    Arch Linux
   Release:        rolling
   Codename:       n/a

System Configuration
====================

Post-Installation Tasks
-----------------------

::

   $ pacman-key --init
   $ pacman-key --populate archlinux
   $ sed -i s/#Color/Color/ /etc/pacman.conf

Upgrade the system
^^^^^^^^^^^^^^^^^^

::

   $ pacman -Syu

Install some base packages
^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   $ pacman -S acpid     # on virtual machines
   $ pacman -S git       # for revision control
   $ pacman -S joe       # my preferred simple editor
   $ pacman -S tree
   $ pacman -S yaourt

Software Development
====================

:;

   $ pacman -S --needed base-devel

   $ pacman -S yajl
   $ curl -O https://aur.archlinux.org/packages/ya/yaourt/yaourt.tar.gz
   $ curl -O https://aur.archlinux.org/packages/pa/package-query/package-query.tar.gz

https://wiki.archlinux.org/index.php/Arch_Build_System#How_to_use_ABS

::

   $ pacman -S abs
   $ abs

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
