---
title: "[Erlang](https://www.erlang.org/)"
weight: 1
---

## Installation

### Installation on macOS

```text
$ brew install erlang --with-native-libs --without-wxmac
```

### Installation on Alpine

```text
# TODO
```

### Installation on Ubuntu

<https://www.erlang-solutions.com/resources/download.html>

```text
$ wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb
$ sudo dpkg -i erlang-solutions_1.0_all.deb
$ apt update

$ apt install erlang erlang-doc erlang-manpages
```

## Essence

- A functional programming language (Erlang)
- A set of design principles (OTP)
- A virtual machine (BEAM)

## Talks

- [The Mess We're In](https://www.youtube.com/watch?v=lKXe3HUG2l4) (2014)
- [Systems that Run Forever Self-heal and Scale](https://www.infoq.com/presentations/self-heal-scalable-system) (2013)
- [How to Make an Optimizing Compiler in a few Months](http://www.infoq.com/presentations/ECC-Fun-Writing-Compilers) (2011)
- <http://www.infoq.com/author/Joe-Armstrong>

## Books

- [Programming Erlang: Software for a Concurrent World](https://www.goodreads.com/book/show/20899661-programming-erlang) by Joe Armstrong

## Papers

- [Making reliable distributed systems in the presence of software errors](http://ftp.nsysu.edu.tw/FreeBSD/ports/distfiles/erlang/armstrong_thesis_2003.pdf)

## Blogs

- [Joe Armstrong](https://joearms.github.io/) (@joeerl)

## Conferences

- [Erlang User Conference 2016](http://www.erlang-factory.com/euc2016) (Sep 8-9, 2016 in Stockholm)
- <https://www.erlang.org/events>

## Implementations

- BEAM (the Erlang VM)
- [LING](https://github.com/cloudozer/ling) for Xen

## Interoperability

### Java

- <http://erlang.org/doc/apps/jinterface/jinterface_users_guide.html>
- <http://erlang.org/doc/apps/jinterface/java/com/ericsson/otp/erlang/package-summary.html>
- <https://github.com/fredlund/JavaErlang>
- <https://github.com/trifork/erjang>

## OTP

### Behaviors

- GenStage
- [gen_leader](https://github.com/knusbaum/gen_leader_revival)

## Use Cases

### Embedded

- <http://www.erlang-embedded.com/>
- [Erlang/ALE](http://opensource.erlang-solutions.com/erlang_ale/)
- <https://www.infoq.com/interviews/kilic-erlang-embedded>
- <http://www.slideshare.net/fhunleth/erlangdc-2013>
- <http://www.slideshare.net/breakpointer/using-erlang-on-the-raspberrypi>
- <http://www.erlang-factory.com/upload/presentations/451/Wiger-erlangforembedded.pdf>
- <http://www.diva-portal.org/smash/get/diva2:431592/FULLTEXT01.pdf>
- <https://lumenosys.com/>

### Robotics

- <http://erlang.org/workshop/2007/proceedings/11santor.pdf>
- <http://www.erlang-factory.com/upload/presentations/160/StenGruner.pdf>

### Unikernels

- [Look ma, no OS!](http://slides.com/technolo-g/intro-to-unikernels-and-erlang-on-xen-ling-demo) \[2015\]
- [CIF16: Rethinking Foundations for Zero-devops Clouds](http://www.slideshare.net/xen_com_mgr/cif16-rethinking-foundations-for-zerodevops-clouds-maxim-kharchenko-cloudozer-cto) \[2016\]
- [XPDS13: Erlang on Xen - Redefining the Cloud Software Stack](http://www.slideshare.net/xen_com_mgr/xpds13-erlang-on-xen) \[2013\]

## Reference

- [Installation Guide: Cross Compiling Erlang/OTP](http://erlang.org/doc/installation_guide/INSTALL-CROSS.html)
- [Embedded Systems User's Guide](http://erlang.org/doc/embedded/users_guide.html)
- [System Principles User's Guide](http://erlang.org/doc/system_principles/system_principles.html)
