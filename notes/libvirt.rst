Arto's Notes re: libvirt
========================

http://en.wikipedia.org/wiki/Libvirt

Requirements
------------

* **Guests must not have a hardcoded network configuration.** The network
  configuration and IP address assignment is the host's responsibility and
  guests will obtain their network configuration from the host using the
  DHCP protocol.
