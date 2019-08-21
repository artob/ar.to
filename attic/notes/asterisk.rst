****************************************************************************
Arto's Notes re: `Asterisk <https://en.wikipedia.org/wiki/Asterisk_(PBX)>`__
****************************************************************************

* https://wiki.asterisk.org/wiki/display/AST/Asterisk+Versions
* https://wiki.asterisk.org/wiki/display/AST/Hello+World

::

   $ apt install asterisk

   $ asterisk -c        # start Asterisk in the foreground
   $ asterisk -cvvv     # start Asterisk in the foreground, verbosely

   $ asterisk -r        # connect to daemonized Asterisk

   $ asterisk -rx 'core show channels'
   $ asterisk -rx 'sip reload'
   $ asterisk -rx 'iax2 reload'
   $ asterisk -rx 'dialplan reload'

   *CLI> exit           # exit the CLI
   *CLI> core stop now  # terminate Asterisk

   iax2 show peers
   iax2 show users

Reference
=========

* `IAX2
  <https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817132>`__

See Also
========

* `FreeSWITCH <freeswitch>`__
* `Yate <https://en.wikipedia.org/wiki/Yate_(telephony_engine)>`__
