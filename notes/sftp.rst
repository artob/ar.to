*********************
Arto's Notes re: SFTP
*********************

::

   $ diff -u /etc/ssh/sshd_config{.orig,}
   -Subsystem sftp /usr/lib/openssh/sftp-server
   +Subsystem sftp internal-sftp
   +Match Group sftp
   +  ChrootDirectory /srv/sftp
   +  ForceCommand internal-sftp
   +  X11Forwarding no
   +  AllowTcpForwarding no

See Also
========

* `SSH <ssh>`__
