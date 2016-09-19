****************************************************************
Arto's Notes re: `D-Bus <https://en.wikipedia.org/wiki/D-Bus>`__
****************************************************************

CLI
===

::

   dbus-send --system --dest=org.freedesktop.DBus           \
     --type=method_call --print-reply /org/freedesktop/DBus \
     org.freedesktop.DBus.ListNames

   dbus-send --system --dest=org.freedesktop.DBus           \
     --type=method_call --print-reply /org/freedesktop/DBus \
     org.freedesktop.DBus.Introspectable.Introspect

Elixir
======

* https://hex.pm/packages/dbux
  * https://github.com/mspanc/dbux
  * https://lists.freedesktop.org/archives/dbus/2016-June/016916.html

Erlang
======

* https://hex.pm/packages/dbus
  * https://github.com/lizenn/erlang-dbus

Python
======

* https://pypi.python.org/pypi/pydbus
  * https://github.com/LEW21/pydbus
  * https://github.com/LEW21/pydbus/blob/master/doc/tutorial.rst
* https://wiki.python.org/moin/DbusExamples

::

   sudo apt install python3-gi
   sudo pip3 install pydbus
