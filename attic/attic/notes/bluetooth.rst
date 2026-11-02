************************************************************************
Arto's Notes re: `Bluetooth <https://en.wikipedia.org/wiki/Bluetooth>`__
************************************************************************

Linux
=====

Linux uses the BlueZ stack.

* http://www.bluez.org/bluez-5-api-introduction-and-porting-guide/
* https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/gatt-api.txt

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

Install from source
-------------------

* https://learn.adafruit.com/install-bluez-on-the-raspberry-pi/installation
* http://www.linuxfromscratch.org/blfs/view/svn/general/bluez.html

::

   $ sudo apt purge bluez bluez-hcidump bluez-obexd libbluetooth-dev

   $ sudo apt install -y libdbus-1-dev libglib2.0-dev libical-dev libreadline-dev libudev-dev libusb-dev
   $ ./configure --enable-library --enable-experimental
   $ make
   $ sudo make install

   $ sudo systemctl reenable bluetooth
   $ sudo systemctl start bluetooth
   $ systemctl status bluetooth

Miscellaneous
-------------

::

   $ hciconfig
   $ sudo hciconfig hci1 up
   $ sudo hciconfig hci0 down

   $ sudo hcitool lescan
   $ sudo hcitool -i hci1 lescan

   $ bluetoothctl

Nerves
======

* http://slack.elixirhq.com/nerves/2016-05-14/

Node
====

* https://github.com/sandeepmistry/noble

::

   $ sudo apt install bluetooth bluez libbluetooth-dev libudev-dev python
   $ npm install noble

Python
======

* https://github.com/ukBaz/python-bluezero
  * https://pythonhosted.org/bluezero/
