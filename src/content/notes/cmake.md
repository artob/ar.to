---
title: "[CMake](https://en.wikipedia.org/wiki/CMake)"
---

<div class="contents" data-local="" data-depth="1" data-backlinks="none">

Table of Contents

</div>

------------------------------------------------------------------------

<https://cmake.org>

------------------------------------------------------------------------

## Usage

### Building a CMake Project

```text
$ mkdir build && cd build
$ cmake ..
$ make && sudo make install

$ cmake -DCMAKE_RULE_MESSAGES:BOOL=OFF -DCMAKE_VERBOSE_MAKEFILE:BOOL=ON ..
```

------------------------------------------------------------------------

## Templates

### Template for C++

```text
cmake_minimum_required(VERSION 3.8 FATAL_ERROR)

project(foobar VERSION 1.0.0 LANGUAGES CXX)

find_package(PkgConfig)
pkg_check_modules(DRYLIB REQUIRED drylib-cpp)

add_executable(foobar foobar.cpp)
set_target_properties(foobar PROPERTIES
  CXX_STANDARD 17
  CXX_STANDARD_REQUIRED YES
  CXX_EXTENSIONS NO
)
target_compile_options(foobar PUBLIC ${DRYLIB_CFLAGS_OTHER})
target_include_directories(foobar PUBLIC ${DRYLIB_INCLUDE_DIRS})
target_link_libraries(foobar ${DRYLIB_LIBRARIES})
```

------------------------------------------------------------------------

## See Also

- Arto's Notes re: [makefiles](makefile)
