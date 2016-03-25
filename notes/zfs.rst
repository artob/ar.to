*************************************************************
Arto's Notes re: `ZFS <https://en.wikipedia.org/wiki/ZFS>`__
*************************************************************

* https://wiki.ubuntu.com/Kernel/Reference/ZFS
* https://pthree.org/2012/04/17/install-zfs-on-debian-gnulinux/
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
