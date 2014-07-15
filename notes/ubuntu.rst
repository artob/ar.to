Arto's Notes re: Ubuntu
=======================

http://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29

Submitted Bug Reports
---------------------

* `#1155695 mq_overview(7) fs.mqueue.queues_max <https://bugs.launchpad.net/ubuntu/+source/manpages/+bug/1155695>`_

Relevant Bug Reports
--------------------

* `#1217407 whoopsie spams the log with "online" messages <https://bugs.launchpad.net/ubuntu/+source/whoopsie/+bug/1217407>`_

Release Information
-------------------

::

   $ lsb_release -a
   No LSB modules are available.
   Distributor ID: Ubuntu
   Description:    Ubuntu 12.04.4 LTS
   Release:        12.04
   Codename:       precise

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
   $ ufw enable
   $ ufw status verbose

::

   $ ufw deny from 1.2.3.4
   $ ufw delete deny from 1.2.3.4

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

Enable the built-in firewall
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   $ ufw disable
   $ ufw allow ssh/tcp
   $ ufw allow http/tcp
   $ ufw allow https/tcp
   $ ufw enable
   $ ufw status verbose

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
