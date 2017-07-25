**************************
Arto's Notes re: makefiles
**************************

::

   README.html: README.rst
           $(PANDOC) -o $@ -t html5 -s $<

See Also
========

* `Notes on writing makefiles
  <http://eigenstate.org/notes/makefiles>`__
