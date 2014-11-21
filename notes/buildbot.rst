*************************
Arto's Notes re: Buildbot
*************************

Master Installation
===================

::

   $ sudo aptitude install python-pip libpython2.7-dev apache2-utils
   $ sudo pip install buildbot

   $ buildbot create-master -r /home/buildbot/libc11
   $ cp -p /home/buildbot/libc11/master.cfg{.sample,}

Master Configuration
====================

Examples
--------

* `libc11:etc/buildbot/master/ <https://github.com/dryproject/libc11/tree/master/etc/buildbot/master>`__

Master Lifecycle
================

::

   $ buildbot checkconfig /home/buildbot/libc11
   $ buildbot start /home/buildbot/libc11
   $ buildbot reconfig /home/buildbot/libc11
   $ buildbot restart /home/buildbot/libc11
   $ buildbot stop /home/buildbot/libc11

Slave Installation
==================

::

   $ sudo pip install buildbot-slave

   $ buildslave create-slave -r $PROJECT $MASTER_HOST:$MASTER_PORT $SLAVE_NAME $SLAVE_PASSWORD

FreeBSD
-------

::

   $ sudo pkg install buildbot-slave

   $ sudo pw useradd -m -c "Buildbot slave" -n buildbot

   $ buildslave create-slave -r libc11 192.168.1.100:9989 freebsd-10.1-x86_64 pass

NetBSD
------

::

   $ sudo make -C /usr/pkgsrc/devel/py-pip install
   $ sudo pip install buildbot-slave

   $ sudo useradd -m -c "Buildbot slave" buildbot

   $ buildslave create-slave -r libc11 192.168.1.100:9989 netbsd-6.1.5-x86_64 pass

OpenBSD
-------

::

   $ sudo pkg_add py-pip && sudo ln -sf /usr/local/bin/pip-2.7 /usr/local/bin/pip
   $ sudo pip install buildbot-slave

   $ sudo useradd -m -c "Buildbot slave" buildbot

   $ buildslave create-slave -r libc11 192.168.1.100:9989 openbsd-5.6-x86_64 pass

OS X
----

::

   $ sudo port install py27-pip
   $ sudo pip install buildbot-slave && \
       sudo ln -s /opt/local{/Library/Frameworks/Python.framework/Versions/2.7,}/bin/buildslave

   $ buildslave create-slave -r libc11 192.168.1.100:9989 osx-10.7.5-x86_64 pass

Solaris
-------

::

   $ sudo pkg install library/python-2/pip-27
   $ sudo pip install buildbot-slave

   $ sudo useradd -m -c "Buildbot slave" buildbot

   $ buildslave create-slave -r libc11 192.168.1.100:9989 solaris-11.2-x86_64 pass

Ubuntu
------

::

   $ sudo aptitude install python-pip libpython2.7-dev
   $ sudo pip install buildbot-slave

   $ sudo useradd -m -c "Buildbot slave" buildbot

   $ buildslave create-slave -r libc11 192.168.1.100:9989 ubuntu-14.04-x86_64 pass

Slave Configuration
===================

::

   $ echo 'Arto Bendiken <arto@bendiken.net>' > libc11/info/admin
   $ echo "$(uname -s) $(uname -r) ($(uname -m))" > libc11/info/host
   $ echo "ssh://$(hostname)" > libc11/info/access_uri
   $ chmod a-w libc11/info/*

Examples
--------

* `libc11:etc/buildbot/slaves/ <https://github.com/dryproject/libc11/tree/master/etc/buildbot/slaves>`__

Slave Lifecycle
===============

::

   $ buildslave start /home/buildbot/libc11
   $ buildslave restart /home/buildbot/libc11
   $ buildslave stop /home/buildbot/libc11

Slave Troubleshooting
=====================

NetBSD
------

Cloning a ``git`` repository doesn't work out of the box, giving an "SSL
certificate problem" error due to missing CA certificates. Resolve as
follows::

   $ sudo pkgin install mozilla-rootcerts
   $ sudo mozilla-rootcerts install

OpenBSD
-------

Use of ``autoconf`` and ``automake`` requires that the ``AUTOCONF_VERSION``
and ``AUTOMAKE_VERSION`` environment variables are defined. Resolve as
follows::

   $ echo 'export AUTOCONF_VERSION=2.69 AUTOMAKE_VERSION=1.14' >> ~/.profile

References
==========

* `Buildbot in Wikipedia <https://en.wikipedia.org/wiki/Buildbot>`__
* `Buildbot.net <http://buildbot.net/>`__
