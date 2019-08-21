***********************************************************************************
Arto's Notes re: `Gazebo <https://en.wikipedia.org/wiki/Gazebo_(disambiguation)>`__
***********************************************************************************

http://gazebosim.org/

Installation
============

Mac OS X
--------

http://gazebosim.org/tutorials?tut=install_on_mac&cat=install

::

   $ brew tap osrf/simulation
   $ brew install gazebo7       # ~?h build

Introspection
=============

::

   $ gz topic -l
   $ gz topic -e /gazebo/default/world_stats

Ubuntu
------

http://gazebosim.org/tutorials?tut=install_ubuntu&cat=install

::

   $ aptitude install gazebo7 libgazebo7-dev
