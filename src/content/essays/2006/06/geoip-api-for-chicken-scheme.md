---
title: GeoIP API for Chicken Scheme
date: '2006-06-19T20:05:00Z'
categories:
- Technology
tags:
- API
- Chicken
- DNS
- GeoIP
- Lisp
- Scheme
summary: A Chicken Scheme egg for MaxMind's GeoIP library, which maps IP addresses to countries.
original:
  url: http://bendiken.net/2006/06/19/geoip-api-for-chicken-scheme
  archive: https://web.archive.org/web/20080518020554/http://bendiken.net/2006/06/19/geoip-api-for-chicken-scheme
---

> **GeoIP** is a [IP
> geolocation](https://web.archive.org/web/20060619/http://en.wikipedia.org/wiki/Geolocation_software)
> library and database developed by
> [MaxMind](https://web.archive.org/web/20060619/http://www.maxmind.com/). They
> provide a freely available [GeoLite
> Country](https://web.archive.org/web/20060619/http://www.maxmind.com/app/geoip_country)
> database that maps IP address blocks to country codes (with a claimed 97%
> accuracy), and sell several subscription-based commercial databases that
> provide more fine-grained geolocation services such as determining the exact
> region or city based on an IP address.
>
> **Geolocation** is useful in a number of areas. For example, geolocation
> services can be used in web applications to customize content or target ads
> regionally, to select the geographically closest mirror server, or to analyze
> web server logs to [determine the
> countries](https://web.archive.org/web/20060619/http://www.rleeden.no-ip.com/geotool.php)
> that visitors originate from.

As part of a distributed, geographically load-balanced
[DNS](https://web.archive.org/web/20060619/http://en.wikipedia.org/wiki/Domain_name_system)
[daemon](https://web.archive.org/web/20060619/http://en.wikipedia.org/wiki/Daemon_%28computer_software%29)
I’ve been developing in
[Scheme](/tags/scheme),
I’ve put together a set of
[GeoIP](https://web.archive.org/web/20060619/http://www.maxmind.com/app/ip-location)
API bindings for [Chicken
Scheme](https://web.archive.org/web/20060619/http://www.call-with-current-continuation.org/)
that I’m hereby making available under the [MIT
License](https://web.archive.org/web/20060619/http://en.wikipedia.org/wiki/MIT_License).

This was the first
[egg](https://web.archive.org/web/20060619/http://www.call-with-current-continuation.org/eggs/)
I’ve developed for Chicken — not to mention the first time I’d needed to make
any real use of Chicken’s
[FFI](https://web.archive.org/web/20060619/http://community.schemewiki.org/?ffi)
— and I have to say I was pleasantly surprised at how easy it was to create.

It was gratifying to be able to go from zero to completed egg in only a couple
hours simply by looking at some other eggs for examples on how to use
[`foreign-lambda`](https://web.archive.org/web/20060619/http://www.call-with-current-continuation.org/manual/Interface-to-external-functions-and-variables.html),
create a [setup
spec](https://web.archive.org/web/20060619/http://www.call-with-current-continuation.org/manual/chicken-setup.html),
and write the
[eggdoc](https://web.archive.org/web/20060619/http://www.call-with-current-continuation.org/eggs/eggdoc.html)
documentation.

The GeoIP API subset provided by the egg is straightforward to use. Basically,
you feed in a hostname or an IP address, and you get back a country code or
country name. Country codes can be returned as either the
[2-letter](https://web.archive.org/web/20060619/http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
or
[3-letter](https://web.archive.org/web/20060619/http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
codes defined in
[ISO-3166-1](https://web.archive.org/web/20060619/http://en.wikipedia.org/wiki/ISO_3166-1).

Here’s a usage example that you can try out in the [Chicken
interpreter](https://web.archive.org/web/20060619/http://www.call-with-current-continuation.org/manual/Using-the-interpreter.html)
once you’ve installed the GeoIP egg:

```scheme
(use geoip)

; A GeoIP database can be explicitly opened, as follows:
(define chicken "www.call-with-current-continuation.org")
(let ((db (geoip:open-type GEOIP-COUNTRY-EDITION)))
  (geoip:country-code-by-name chicken db))     ; => "DE"

; ...but this is not necessary for working with the freely
; available GeoIP Standard Country database:
(geoip:country-code-by-name chicken)           ; => "DE"
(geoip:country-code-by-addr "194.97.107.133")  ; => "DE"
(geoip:country-code3-by-name "www.google.com") ; => "USA"
(geoip:country-name-by-name "www.bbc.co.uk")   ; => "United Kingdom"
```

Please have a look at the [GeoIP egg
documentation](https://web.archive.org/web/20060619/http://bendiken.net/code/chicken/eggs/geoip/geoip.html)
for more information. Note that the extended region-specific API procedures
meant for use with MaxMind’s commercial databases are not implemented at
present, but could be easily added provided the possibility to test them out.

You can download the egg from
[http://bendiken.net/code/chicken/eggs/geoip.egg](https://web.archive.org/web/20060619/http://bendiken.net/code/chicken/eggs/geoip.egg)
(6 KB). Installation is performed in the normal Chicken fashion with
[chicken-setup](https://web.archive.org/web/20060619/http://www.call-with-current-continuation.org/manual/chicken-setup.html).
Note that you **will** need to have the [GeoIP C
library](https://web.archive.org/web/20060619/http://www.maxmind.com/app/c)
installed in order for the egg to compile successfully.

If you are running OS X and have Chicken and
[DarwinPorts](https://web.archive.org/web/20060619/http://darwinports.org/)
installed, here’s what you would do to get the GeoIP C API and the Chicken
bindings installed:

```bash
$ sudo port install libgeoip
$ wget http://bendiken.net/code/chicken/eggs/geoip.egg
$ sudo chicken-setup geoip
```

Installation should be similarly facile on other Unix-like platforms.

Currently, the GeoIP egg has been tested with Chicken 2.312 and version 1.3.14
of the GeoIP C API (as installed from DarwinPorts). Please report any problems
to the [Chicken mailing
list](https://web.archive.org/web/20060619/http://lists.nongnu.org/mailman/listinfo/chicken-users).
