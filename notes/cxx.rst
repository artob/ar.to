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

   #ifndef __cplusplus
   #error "<foobar.h> requires a C++ compiler"
   #endif

   #if __cplusplus < 201103L
   #error "<foobar.h> requires a C++11 compiler (CXXFLAGS='-std=c++11')"
   #endif

::

   #include <cstdio> /* for std::FILE, std::f*(), fdopen() */

   using cstdio_file_ptr = std::unique_ptr<std::FILE, int(*)(std::FILE*)>;

   cstdio_file_ptr stream{std::fopen("input.txt", "r"), std::fclose};

::

   static_assert(std::is_pod<rfc::sha1>::value, "rfc::sha1 must be a POD type");

Smart Pointers
==============

::

   using cstdio_file_ptr = std::unique_ptr<std::FILE, int(*)(std::FILE*)>;
   cstdio_file_ptr stream{std::tmpfile(), std::fclose};

   using curl_easy_handle = std::unique_ptr<CURL, void(*)(CURL*)>;
   curl_easy_handle curl{nullptr, curl_easy_cleanup};

   using curl_multi_handle = std::unique_ptr<CURLM, CURLMcode(*)(CURLM*)>;
   curl_multi_handle curlm{nullptr, curl_multi_cleanup};

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

* Keep a clear and logical distinction between ``struct`` and ``class``:
  only PODs are to be declared as ``struct``.

Deprecated Features
-------------------

* ``typedef``, ``NULL`` (replace with ``using``, ``nullptr``)

Caveats
-------

* ``std::abs()`` from ``<cmath>`` operates on floating-point types;
  you probably meant the integer-only version from ``<cstdlib>``.
  This is a dangerous function: if you accidentally include the wrong
  header, both an integer argument and the double result may get silently
  cast to a double and integer, respectively, without any emitted compiler
  warnings even at ``-Wall
  -Wextra``.
  Best to avoid using this function; just use e.g. ``std::labs()`` instead.

Debugging
=========

::

   __asm__("int $3"); /* breakpoint for debugger */

Announcements
=============

* http://www.reddit.com/r/cpp
