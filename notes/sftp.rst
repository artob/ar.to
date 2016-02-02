*********************
Arto's Notes re: SFTP
*********************

Configuration
=============

::

   $ diff -u /etc/ssh/sshd_config{.orig,}
   -Subsystem sftp /usr/lib/openssh/sftp-server
   +#Subsystem sftp /usr/lib/openssh/sftp-server
   ...
   +
   +Subsystem sftp internal-sftp
   +Match Group sftp
   +  ChrootDirectory /srv/sftp
   +  ForceCommand internal-sftp
   +  AllowAgentForwarding no
   +  AllowTcpForwarding no
   +  PermitTunnel no
   +  X11Forwarding no

   $ mkdir -p /srv/sftp
   $ chown root:root /srv/sftp
   $ chmod 755 /srv/sftp

   $ sudo groupadd -r sftp

   $ sudo useradd -M -d /jhacker -s /usr/sbin/nologin -g sftp -c "J. Random Hacker" jhacker

   $ mkdir -p /srv/sftp/jhacker
   $ chown jhacker:sftp /srv/sftp/jhacker
   $ chmod 700 /srv/sftp/jhacker

   $ touch /srv/sftp/jhacker/.hushlogin
   $ chmod 400 /srv/sftp/jhacker/.hushlogin

Reference
=========

* https://en.wikibooks.org/wiki/OpenSSH/Cookbook/SFTP
* https://wiki.archlinux.org/index.php/SFTP_chroot

See Also
========

* `SSH <ssh>`__
