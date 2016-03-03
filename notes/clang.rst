****************************************************************
Arto's Notes re: `Clang <https://en.wikipedia.org/wiki/Clang>`__
****************************************************************

`AddressSanitizer <https://en.wikipedia.org/wiki/AddressSanitizer>`__ (aka ASan)
================================================================================

* `AddressSanitizer Overview <http://clang.llvm.org/docs/AddressSanitizer.html>`__
* `AddressSanitizer Wiki <https://github.com/google/sanitizers/wiki/AddressSanitizer>`__
* `AddressSanitizer C/C++ Manual <https://github.com/google/sanitizers/wiki/ThreadSanitizerCppManual>`__

::

   CXXFLAGS="$CXXFLAGS -g -O1 -fsanitize=address -fno-omit-frame-pointer -fno-optimize-sibling-calls"

   ASAN_OPTIONS='check_initialization_order=1'
   ASAN_SYMBOLIZER_PATH=/opt/clang/bin/llvm-symbolizer

LeakSanitizer (aka LSan)
========================

* `LeakSanitizer Overview <http://clang.llvm.org/docs/LeakSanitizer.html>`__
* `LeakSanitizer Wiki <https://github.com/google/sanitizers/wiki/AddressSanitizerLeakSanitizer>`__

::

   CXXFLAGS="$CXXFLAGS -g -O1 -fsanitize=leak"

ThreadSanitizer (aka TSan)
==========================

* `ThreadSanitizer Overview <http://clang.llvm.org/docs/ThreadSanitizer.html>`__
* `ThreadSanitizer C/C++ Manual <https://github.com/google/sanitizers/wiki/ThreadSanitizerCppManual>`__

MemorySanitizer (aka MSan)
==========================

* `MemorySanitizer Overview <http://clang.llvm.org/docs/MemorySanitizer.html>`__
* `MemorySanitizer Wiki <https://github.com/google/sanitizers/wiki/MemorySanitizer>`__

UndefinedBehaviorSanitizer (aka UBSan)
======================================

* `UndefinedBehaviorSanitizer Overview <http://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html>`__

DataFlowSanitizer (aka DFSan)
=============================

* `DataFlowSanitizer Overview <http://clang.llvm.org/docs/DataFlowSanitizer.html>`__
