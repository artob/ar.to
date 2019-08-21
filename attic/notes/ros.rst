*******************************************************************************
Arto's Notes re: `ROS <https://en.wikipedia.org/wiki/Robot_Operating_System>`__
*******************************************************************************

http://wiki.ros.org/

Installation
============

http://wiki.ros.org/ROS/Installation

Ubuntu 14.04
------------

http://wiki.ros.org/jade/Installation/Ubuntu

::

   $ sudo aptitude search ros-jade | fgrep -v :i386 | wc -l     # 718

::

   $ sudo aptitude install ros-jade-desktop-full  # ~700 packages, ~300M download, ~1.5G install
   $ sudo aptitude install python-rosinstall

::

   $ sudo rosdep init && rosdep update
   $ source /opt/ros/jade/setup.bash

Visualization
=============

http://wiki.ros.org/rviz
