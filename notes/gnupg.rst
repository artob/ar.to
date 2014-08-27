Arto's Notes re: GnuPG
======================

Troubleshooting
---------------

pinentry-curses: no LC_CTYPE known - assuming UTF-8
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   $ export GPG_TTY=$(tty)
