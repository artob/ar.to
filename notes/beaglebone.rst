*******************************
Arto's Notes re: the BeagleBone
*******************************

* http://beagleboard.org/black
* http://beagleboard.org/green
* http://beagleboard.org/green-wireless

Connecting
==========

::

   $ screen /dev/tty.usbmodem1413

   $ ssh root@192.168.7.2

Configuration
=============

On the host (OS X):

::

   $ sudo sysctl -w net.inet.ip.forwarding=1
   $ sudo pfctl -F all -f - <<EOF
     nat on en0 from 192.168.7.0/30 to any -> (en0)
     EOF

On the device (Debian):

::

   $ sudo ip route add default via 192.168.7.1
   $ sudo tee /etc/resolv.conf <<EOF
     nameserver 8.8.8.8
     nameserver 8.8.4.4
     EOF

See Also
========

* `BeagleBoard X15 <beagleboard>`__
