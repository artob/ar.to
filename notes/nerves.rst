********************************************************
Arto's Notes re: `Nerves <http://nerves-project.org/>`__
********************************************************

Slides
======

* `Enhanced Embedded Systems with Nerves
  <http://www.slideshare.net/JustinSchneck/enhanced-embedded-systems-with-nerves>`__
  [2016]

* `Embedded Erlang, Nerves, and SumoBots
  <http://www.slideshare.net/fhunleth/embedded-erlang-nerves>`__
  [2015]

* `Building a Network IP Camera using Erlang
  <http://www.slideshare.net/fhunleth/building-a-network-ip-camera-using-erlang>`__
  [2014]

* `Nerves Project Intro to ErlangDC
  <http://www.slideshare.net/fhunleth/nerves-presentation-to-erlangdc>`__
  [2012]

Reference
=========

Remote Shell
------------

::

   $ iex --sname debug --cookie mycookie --remsh mynode@myrpi2

Root Filesystem
---------------

::

   $ unsquashfs -ll _build/$NERVES_TARGET/$MIX_ENV/nerves/system/images/rootfs.squashfs | less

   $ unzip -oj _images/rpi/*.fw data/rootfs.img && unsquashfs -ll rootfs.img | less

See Also
========

* `Elixir <elixir>`__
* `Erlang <erlang>`__
