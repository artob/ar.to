---
title: "[Nerves](http://nerves-project.org/)"
---

## Slides

- [Enhanced Embedded Systems with Nerves](http://www.slideshare.net/JustinSchneck/enhanced-embedded-systems-with-nerves) \[2016\]
- [Embedded Erlang, Nerves, and SumoBots](http://www.slideshare.net/fhunleth/embedded-erlang-nerves) \[2015\]
- [Building a Network IP Camera using Erlang](http://www.slideshare.net/fhunleth/building-a-network-ip-camera-using-erlang) \[2014\]
- [Nerves Project Intro to ErlangDC](http://www.slideshare.net/fhunleth/nerves-presentation-to-erlangdc) \[2012\]

## Reference

### Remote Shell

```text
$ iex --sname debug --cookie mycookie --remsh mynode@myrpi2
```

### Root Filesystem

```text
$ unsquashfs -ll _build/$NERVES_TARGET/$MIX_ENV/nerves/system/images/rootfs.squashfs | less
$ unsquashfs -ll .nerves/cache/system/nerves_system_$NERVES_TARGET-0.6.0/images/rootfs.squashfs | less

$ unzip -oj _images/$NERVES_TARGET/*.fw data/rootfs.img && unsquashfs -ll rootfs.img | less
```

## See Also

- [Elixir](elixir)
- [Erlang](erlang)
