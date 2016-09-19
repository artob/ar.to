************************************************************************
Arto's Notes re: `Bluetooth <https://en.wikipedia.org/wiki/Bluetooth>`__
************************************************************************

Linux
=====

Linux uses the BlueZ stack.

* http://www.bluez.org/bluez-5-api-introduction-and-porting-guide/

Enable experimental features
----------------------------

::

   $ echo 'NOPLUGIN_OPTION="-E"' > /etc/default/bluetooth
   $ service bluetooth restart

::

   $ cp -p /lib/systemd/system/bluetooth.service /etc/systemd/system/bluetooth.service
   $ sed -i 's:/usr/lib/bluetooth/bluetoothd:/usr/lib/bluetooth/bluetoothd -E:' bluetooth.service
   $ systemctl reenable bluetooth.service
   $ systemctl restart bluetooth.service
   $ systemctl status bluetooth.service

Miscellaneous
-------------

::

   $ hciconfig
   $ bluetoothctl
