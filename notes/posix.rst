Arto's Notes re: POSIX
======================

http://en.wikipedia.org/wiki/POSIX

``PIPE_BUF``
------------

+---------------+-------------+------------------------------------+
| POSIX.1-2001  |         512 | ``limits.h``         [#posix2001]_ |
+---------------+-------------+------------------------------------+
| POSIX.1-2004  |         512 | ``limits.h``         [#posix2004]_ |
+---------------+-------------+------------------------------------+
| POSIX.1-2008  |         512 | ``limits.h``         [#posix2008]_ |
+---------------+-------------+------------------------------------+
| Linux         |       4,096 | ``linux/limits.h``   [#linux]_     |
+---------------+-------------+------------------------------------+
| Mac OS X      |         512 | ``sys/syslimits.h``  [#darwin]_    |
+---------------+-------------+------------------------------------+
| FreeBSD       |         512 | ``sys/syslimits.h``  [#freebsd]_   |
+---------------+-------------+------------------------------------+
| DragonFly BSD |         512 | ``sys/syslimits.h``  [#dfbsd]_     |
+---------------+-------------+------------------------------------+
| OpenBSD       |         512 | ``sys/syslimits.h``  [#openbsd]_   |
+---------------+-------------+------------------------------------+
| NetBSD        |         512 | ``sys/syslimits.h``  [#netbsd]_    |
+---------------+-------------+------------------------------------+
| MINIX 3       |      32,768 | ``sys/syslimits.h``  [#minix]_     |
+---------------+-------------+------------------------------------+
| illumos       |       5,120 | ``limits.h``         [#illumos]_   |
+---------------+-------------+------------------------------------+
| QNX Neutrino  |       5,120 | ``limits.h``         [#qnx]_       |
+---------------+-------------+------------------------------------+
| OSv           |       4,096 | ``api/limits.h``     [#osv]_       |
+---------------+-------------+------------------------------------+
| Plan 9        |       8,192 | ``ape/sys/limits.h`` [#plan9]_     |
+---------------+-------------+------------------------------------+

.. [#posix2001] http://pubs.opengroup.org/onlinepubs/000095399/basedefs/limits.h.html
.. [#posix2004] http://pubs.opengroup.org/onlinepubs/000095399/basedefs/limits.h.html
.. [#posix2008] http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/limits.h.html
.. [#linux]     https://github.com/torvalds/linux/blob/master/include/uapi/linux/limits.h#L13
.. [#darwin]    http://src.gnu-darwin.org/src/sys/sys/syslimits.h.html
.. [#freebsd]   https://github.com/freebsd/freebsd/blob/master/sys/sys/syslimits.h#L64
.. [#dfbsd]     http://www.dragonflybsd.org/cvsweb/src/sys/sys/syslimits.h?rev=HEAD
.. [#openbsd]   http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/sys/sys/syslimits.h?rev=HEAD&content-type=text/x-cvsweb-markup
.. [#netbsd]    http://cvsweb.netbsd.org/bsdweb.cgi/src/sys/sys/syslimits.h?rev=HEAD&content-type=text/x-cvsweb-markup&only_with_tag=MAIN
.. [#minix]     https://github.com/minix3/minix/blob/master/sys/sys/syslimits.h#L62
.. [#illumos]   https://github.com/illumos/illumos-gate/blob/31c6d826a7f7a4ee7d83c8e99f25d82a4a248076/usr/src/head/limits.h#L91
.. [#qnx]       http://www.qnx.com/developers/docs/660/index.jsp?topic=%2Fcom.qnx.doc.neutrino.utilities%2Ftopic%2Fp%2Fpipe.html
.. [#osv]       https://github.com/cloudius-systems/osv/blob/master/include/api/limits.h#L42
.. [#plan9]     https://github.com/cao-xx/plan-9/blob/b27a35643e4ee0ede5ed91ecb3a4ed98f8164454/sys/include/ape/sys/limits.h#L24
