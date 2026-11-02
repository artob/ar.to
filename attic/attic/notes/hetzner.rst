************************
Arto's Notes re: Hetzner
************************

http://wiki.hetzner.de/index.php/Hauptseite/en

Rescue System
=============

http://wiki.hetzner.de/index.php/Hetzner_Rescue-System/en

::

   $ installimage -h                  # help
   $ installimage                     # interactive mode
   $ installimage -a -c install.conf  # batch mode

   $ cat install.conf
   DRIVE1 /dev/sda
   DRIVE2 /dev/sdb
   SWRAID 1
   SWRAIDLEVEL 1
   BOOTLOADER grub
   HOSTNAME us1.example.org
   PART swap swap 4G
   PART /boot ext3 1G
   PART / ext4 16G
   PART /srv ext4 all
   IMAGE /root/.oldroot/nfs/install/../images/Ubuntu-1404-trusty-64-minimal.tar.gz
