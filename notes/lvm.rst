********************
Arto's Notes re: LVM
********************

Naming Conventions
------------------

* Name the volume group (VG) after the host's unqualified hostname (e.g.,
  "us1").
* Name the logical volumes (LVs) after the VM's unqualified hostname and the
  partition's role or mountpoint (e.g., "myvm1-swap", "myvm42-home",
  "myvm7-srv"). As an exception the root partition is named directly
  corresponding to the VM's unqualified hostname itself (e.g., "myvm42").

Physical Volume Management
--------------------------

::

   $ pvdisplay
   $ pvscan

::

   $ pvcreate /dev/sdX

Volume Group Management
-----------------------

::

   $ vgdisplay
   $ vgscan

::

   $ vgcreate

Logical Volume Management
-------------------------

::

   $ lvdisplay

::

   $ lvcreate -L 32G -n stage us1-hdd      # /dev/us1-hdd/stage
   $ lvcreate -L 64G -n stage-srv us1-hdd  # /dev/us1-hdd/stage-srv

::

   $ lvrename us1-hdd stage-tmp stage-srv
