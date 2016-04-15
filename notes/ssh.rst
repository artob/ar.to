*********************************************************************
Arto's Notes re: `SSH <https://en.wikipedia.org/wiki/Secure_Shell>`__
*********************************************************************

::

   $ ssh-keygen -t rsa -b 4096 -C jhacker@example.org -f id_rsa.jhacker

SSHFS
=====

::

   $ sudo port install sshfs
   $ sudo kextunload -b com.github.osxfuse.filesystems.osxfusefs

   $ sshfs arto@ubuntu:/home/arto /Volumes/Ubuntu

See Also
========

* `SFTP <sftp>`__
