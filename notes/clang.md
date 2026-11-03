---
title: "[Clang](https://en.wikipedia.org/wiki/Clang)"
weight: 1
---

## [AddressSanitizer](https://en.wikipedia.org/wiki/AddressSanitizer) (aka ASan)

- [AddressSanitizer Overview](http://clang.llvm.org/docs/AddressSanitizer.html)
- [AddressSanitizer Wiki](https://github.com/google/sanitizers/wiki/AddressSanitizer)
- [AddressSanitizer C/C++ Manual](https://github.com/google/sanitizers/wiki/ThreadSanitizerCppManual)

```text
CXXFLAGS="$CXXFLAGS -g -O1 -fsanitize=address -fno-omit-frame-pointer -fno-optimize-sibling-calls"

ASAN_OPTIONS='check_initialization_order=1'
ASAN_SYMBOLIZER_PATH=/opt/clang/bin/llvm-symbolizer
```

## LeakSanitizer (aka LSan)

- [LeakSanitizer Overview](http://clang.llvm.org/docs/LeakSanitizer.html)
- [LeakSanitizer Wiki](https://github.com/google/sanitizers/wiki/AddressSanitizerLeakSanitizer)

```text
CXXFLAGS="$CXXFLAGS -g -O1 -fsanitize=leak"
```

## ThreadSanitizer (aka TSan)

- [ThreadSanitizer Overview](http://clang.llvm.org/docs/ThreadSanitizer.html)
- [ThreadSanitizer C/C++ Manual](https://github.com/google/sanitizers/wiki/ThreadSanitizerCppManual)

## MemorySanitizer (aka MSan)

- [MemorySanitizer Overview](http://clang.llvm.org/docs/MemorySanitizer.html)
- [MemorySanitizer Wiki](https://github.com/google/sanitizers/wiki/MemorySanitizer)

## UndefinedBehaviorSanitizer (aka UBSan)

- [UndefinedBehaviorSanitizer Overview](http://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html)

```text
CXXFLAGS="$CXXFLAGS -g -O1 -fsanitize=undefined,integer -fno-sanitize-recover"

UBSAN_OPTIONS='print_stacktrace=1'
UBSAN_SYMBOLIZER_PATH=/opt/clang/bin/llvm-symbolizer
```

## DataFlowSanitizer (aka DFSan)

- [DataFlowSanitizer Overview](http://clang.llvm.org/docs/DataFlowSanitizer.html)
