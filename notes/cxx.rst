********************
Arto's Notes re: C++
********************

Presentations
=============

* `atomic Weapons and the C++11 Memory Model, by Herb Sutter
  <http://herbsutter.com/2013/02/11/atomic-weapons-the-c-memory-model-and-modern-hardware/>`__

Snippets
========

::

   #include <cstdio> /* for std::FILE, std::f*(), fdopen() */

   using cstdio_file_ptr = std::unique_ptr<std::FILE, int(*)(std::FILE*)>;

   cstdio_file_ptr stream{std::fopen("input.txt", "r"), std::fclose};

::

   static_assert(std::is_pod<rfc::sha1>::value, "rfc::sha1 must be a POD type");

Skeletons
=========

Program Skeleton
----------------

.. include:: cxx/program.cc
   :code: cpp

Class Skeleton
--------------

.. include:: cxx/class.cc
   :code: cpp

.. [1] `Rule of Five <http://en.wikipedia.org/wiki/Rule_of_three_(C%2B%2B_programming)>`_

Input Iterator Skeleton
-----------------------

.. include:: cxx/input_iterator.cc
   :code: cpp

Shared Libraries
================

Library Metadata
----------------

Coding Conventions
==================

Directory Structure
-------------------

.. include:: cxx/project.txt
   :code:

File Divider
------------

Exactly 80 columns wide:

::

   ////////////////////////////////////////////////////////////////////////////////

Best Practices
==============

Deprecated Features
-------------------

* ``typedef``, ``NULL`` (replace with ``using``, ``nullptr``)
