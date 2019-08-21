**************************
Arto's Notes re: Travis CI
**************************

http://about.travis-ci.org/docs/user/build-configuration/

Configuration for C
-------------------

http://docs.travis-ci.com/user/languages/c/

::

   language: c
   compiler:
     - clang
     - gcc
   before_script:
     - ./autogen.sh
   script:
     - ./configure && make && make check
   branches:
     only:
       - master

Configuration for C++
---------------------

http://docs.travis-ci.com/user/languages/cpp/

::

   language: cpp
   compiler:
     - clang
     - gcc
   before_script:
     - ./autogen.sh
   script:
     - ./configure && make && make check
   branches:
     only:
       - master

Configuration for C++11
-----------------------

http://docs.travis-ci.com/user/languages/cpp/

::

   language: cpp
   compiler:
     - clang
     - gcc
   before_install:
     - if [ "$CXX" = "g++" ]; then sudo add-apt-repository ppa:ubuntu-toolchain-r/test -y; fi
     - sudo apt-get update -qq
     - if [ "$CXX" = "g++" ]; then sudo apt-get install -qq g++-4.8; fi
     - if [ "$CXX" = "g++" ]; then export CXX="g++-4.8" CC="gcc-4.8"; fi
   before_script:
     - ./autogen.sh
   script:
     - ./configure && make && make check
   branches:
     only:
       - master
