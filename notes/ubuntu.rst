Arto's Notes re: Ubuntu
=======================

http://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29

Submitted Bug Reports
---------------------

* `#1155695 mq_overview(7) fs.mqueue.queues_max <https://bugs.launchpad.net/ubuntu/+source/manpages/+bug/1155695>`_

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
