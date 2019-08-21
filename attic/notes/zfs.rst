*************************************************************
Arto's Notes re: `ZFS <https://en.wikipedia.org/wiki/ZFS>`__
*************************************************************

::

   # Ubuntu 16.04 LTS and newer:
   $ sudo apt install zfsutils-linux

::

   $ zpool list
   $ zpool create hdd /dev/vdb -f -m /mnt/hdd -o ashift=12
   $ zpool create ssd /dev/vdc -f -m /mnt/ssd -o ashift=12
   $ zpool status

   $ zfs set mountpoint=/mnt/hdd hdd
   $ zfs set mountpoint=/mnt/ssd ssd

::

   $ zpool history
   $ zdb
   $ zpool iostat 1

::

   $ zpool scrub hdd && zpool status

::

   $ zfs mount -a
   $ zfs get mounted

Reference
=========

* https://wiki.ubuntu.com/Kernel/Reference/ZFS
* https://wiki.archlinux.org/index.php/ZFS
* https://wiki.gentoo.org/wiki/ZFS
* http://zfsonlinux.org/faq.html
* http://www.solarisinternals.com/wiki/index.php/ZFS_Best_Practices_Guide

Tutorials
=========

* https://pthree.org/2012/04/17/install-zfs-on-debian-gnulinux/
* https://wiki.archlinux.org/index.php/Experimenting_with_ZFS

Miscellaneous
=============

* http://arstechnica.com/gadgets/2016/02/zfs-filesystem-will-be-built-into-ubuntu-16-04-lts-by-default/

Principles
==========

* Copy-on-write: never overwrite an existing block.
* The file system is always consistent.
* The file system state advances atomically at checkpoints.
* Cheap snapshots (read-only) and clones (read/write).
* Metadata redundancy and data checksums.
* Selective data compression and deduplication.
* Pooled storage shared among file systems.
* Mirroring and single, double, and triple parity RAIDZ.
* Space management with quotas and reservations.
* Fast remote replication and backups.

Features
========

* https://wiki.gentoo.org/wiki/ZFS/Features
