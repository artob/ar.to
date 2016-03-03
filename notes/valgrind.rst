**********************************************************************
Arto's Notes re: `Valgrind <https://en.wikipedia.org/wiki/Valgrind>`__
**********************************************************************

* `Valgrind Quick Start Guide <http://www.valgrind.org/docs/manual/quick-start.html>`__
* `Valgrind User Manual <http://www.valgrind.org/docs/manual/manual.html>`__
* `Valgrind FAQ <http://www.valgrind.org/docs/manual/FAQ.html>`__

::

   $ valgrind --leak-check=yes myprog arg1 arg2
   $ valgrind --leak-check=yes --track-origins=yes myprog arg1 arg2
