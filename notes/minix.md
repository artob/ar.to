---
title: MINIX
---

## System Administration

### Creating a User Account

<http://wiki.minix3.org/doku.php?id=usersguide:managinguseraccounts>

```text
$ user add -m -g operator -s /bin/bash arto
```

## System Information

## System Configuration

```text
$ echo export TZ=Europe/Berlin > /etc/rc.timezone
```

## Package Management

<http://wiki.minix3.org/doku.php?id=usersguide:installingbinarypackages>

```text
$ pkgin update
```

## Package Installation

```text
$ pkgin install bash
$ pkgin install git-base
$ pkgin install openssh

$ pkgin install clang binutils
```

## References

- [MINIX in Wikipedia](https://en.wikipedia.org/wiki/MINIX)
- [MINIX 3 in Wikipedia](https://en.wikipedia.org/wiki/MINIX_3)
- [MINIX3.org](http://www.minix3.org/)
- [MINIX Wiki](http://wiki.minix3.org/)
