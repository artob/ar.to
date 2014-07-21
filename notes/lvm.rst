Arto's Notes re: LVM
====================

Naming Conventions
------------------

* Name the volume group (VG) after the host's unqualified hostname (e.g.,
  "us1").
* Name the logical volumes (LVs) after the VM and the partition's role or
  mountpoint (e.g., "myvm1-swap", "myvm42-root", "myvm7-srv").
