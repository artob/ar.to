************************************************
Arto's Notes re: Red Hat Enterprise Linux (RHEL)
************************************************

System Information
==================

Release Information
-------------------

::

   cat /etc/redhat-release
   lsb_release -a

Package Management
==================

::

   sudo yum update

   yum search joe

   yum install joe

Package Repositories
====================

* https://fedoraproject.org/wiki/EPEL/FAQ
* https://wiki.centos.org/AdditionalResources/Repositories
* https://wiki.centos.org/AdditionalResources/Repositories/RPMForge
* http://repoforge.org/use/
* http://elrepo.org/tiki/tiki-index.php

Development Environment
=======================

::

   yum search clang      # N/A

   yum install gcc       # GCC 4.4 only
   yum install gcc-c++   # GCC/G++ 4.4

Clang 3.6+
----------

* http://ar.to/notes/guix
* https://www.vultr.com/docs/how-to-install-llvm-and-clang-on-centos-6

Clang 3.4
---------

* https://dl.fedoraproject.org/pub/epel/6/x86_64/repoview/clang.html
