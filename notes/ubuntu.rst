Arto's Notes re: Ubuntu
=======================

http://en.wikipedia.org/wiki/Ubuntu_%28operating_system%29

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

Bug Reports
-----------

* `#1155695 mq_overview(7) fs.mqueue.queues_max <https://bugs.launchpad.net/ubuntu/+source/manpages/+bug/1155695>`_
