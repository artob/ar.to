************************
Arto's Notes re: libvirt
************************

Requirements
============

* **Guests must not have a hardcoded network configuration.** The network
  configuration and IP address assignment is the host's responsibility and
  guests will obtain their network configuration from the host using the
  DHCP protocol.

Installation
============

::

   $ aptitude install cpu-checker
   $ kvm-ok

::

   $ aptitude install libvirt-bin qemu-kvm
   $ adduser $USER libvirtd

   $ aptitude install virtinst

Reference
=========

* https://help.ubuntu.com/lts/serverguide/libvirt.html
* https://help.ubuntu.com/community/KVM/Installation
* http://wiki.libvirt.org/page/UbuntuKVMWalkthrough

See Also
========

* http://en.wikipedia.org/wiki/Libvirt
