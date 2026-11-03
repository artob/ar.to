---
title: LVM
---

## Naming Conventions

- Name the volume group (VG) after the host's unqualified hostname (e.g., "us1").
- Name the logical volumes (LVs) after the VM's unqualified hostname and the partition's role or mountpoint (e.g., "myvm1-swap", "myvm42-home", "myvm7-srv"). As an exception the root partition is named directly corresponding to the VM's unqualified hostname itself (e.g., "myvm42").

## Physical Volume Management

```text
$ pvdisplay
$ pvscan
```

```text
$ pvcreate /dev/sdX
```

## Volume Group Management

```text
$ vgdisplay
$ vgscan
```

```text
$ vgcreate
```

## Logical Volume Management

```text
$ lvdisplay
```

```text
$ lvcreate -L 32G -n stage us1-hdd      # /dev/us1-hdd/stage
$ lvcreate -L 96G -n stage-hdd us1-hdd  # /dev/us1-hdd/stage-hdd
$ lvcreate -L 32G -n stage-ssd us1-ssd  # /dev/us1-ssd/stage-ssd
```

```text
$ lvrename us1-hdd oldname newname
```

```text
$ lvremove /dev/us1-hdd/stage-hdd
```
