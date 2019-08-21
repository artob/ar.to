****************************************************************
Arto's Notes re: `macOS <https://en.wikipedia.org/wiki/MacOS>`__
****************************************************************

Missing POSIX Features
======================

* [POSIX.1-2008] Directory-relative operations: ``fdopendir(3)``, ``openat(2)``, etc.
* [POSIX.1-2008] Memory streams: ``fmemopen(3)``, ``open_memstream(3)``
* [POSIX.1-2001] Message queues: ``mq_open(3)``, ``mq_send(3)``, ``mq_receive(3)``, etc.
* [POSIX.1-2001] Unnamed semaphores: ``sem_init(3)``, ``sem_destroy(3)``

Missing GNU Features
====================

* ``fopencookie(3)`` (substitute ``funopen(3)`` instead)
