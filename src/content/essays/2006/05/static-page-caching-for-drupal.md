---
title: Static Page Caching for Drupal 4.7
date: '2006-05-28T19:34:53Z'
categories:
- Technology
tags:
- caching
- Drupal
- modules
- performance
- PHP
projects:
- boost
summary: A Drupal module that caches pages as static files, serving anonymous visitors without touching PHP or the database.
---

<p><em><small>Originally published at <a href="https://web.archive.org/web/20080511200705/http://bendiken.net/2006/05/28/static-page-caching-for-drupal">http://bendiken.net/2006/05/28/static-page-caching-for-drupal</a>. Its images were not archived.</small></em></p>

This weekend I tackled coding up a
[Drupal](https://web.archive.org/web/20060528/http://drupal.org/) feature I’ve
been sorely missing on many a past project: static page caching. My
yet-to-be-named module is a replacement for Drupal 4.7’s built-in caching.
Instead of storing the pre-generated cached pages in the database, the module
stores them in a cache directory on the file system.

Big deal, right? Actually, as I’ll demonstrate below, it makes all the
difference.

What Drupal’s built-in caching does is just cut down on the code that needs to
run on each page request, while reducing the database access to a single query
that retrieves the cached page to display. This in itself provides a marked
speed-up, sure enough, but still necessitates invoking PHP on each page request,
and what’s worse, opening a connection to the backend database. Those
connections become a scarce resource once the going gets tough.

In contrast, my cache module exports Drupal pages into plain old static HTML
files. When a page request can be satisfied from the static cache, PHP is
bypassed in its entirety, and the web server serves the cached file straight
from the disk at whatever ultimate top speed it is capable of (most HTTP servers
these days, including [behemoth
Apache](https://web.archive.org/web/20060528/http://www.stdlib.net/~colmmacc/Apachecon-EU2005/scaling-apache-handout.pdf),
are able to saturate a 100 Mbit/s pipe when serving static files from an
adequate server box).

Here’s what this looks like in practice, from a quick benchmark on my PowerBook
(1.67GHz PowerPC G4). The yellow bars represent page requests served from
Drupal’s standard, database-backed cache storage, and the bluish bars shooting
waaay to the right of them are how many page requests can be served when we
throw off the yoke of PHP and shed our dependance on SQL:

As you can see, even in this trivial benchmark, the performance boost was more
than an order of magnitude.

*(This was a makeshift benchmark on an underpowered laptop. The benchmark
consisted of timing a Drupal installation’s 16K front page using
[Siege](https://web.archive.org/web/20060528/http://www.joedog.org/JoeDog/Siege).
This was with Drupal 4.7.1, PHP 4.4.1, Apache 2.2.2 and MySQL 4.1, the latter
three binaries as compiled and installed from
[DarwinPorts](https://web.archive.org/web/20060528/http://www.darwinports.org/),
all running pretty much with their stock settings. Additionally, I threw
[eAccelerator](https://web.archive.org/web/20060528/http://eaccelerator.net/)
0.9.5b2 into the mix as well, to give PHP performance a hand, since without it,
Drupal’s database-backed caching had trouble completing the higher concurrency
levels.)*

Requests per second isn’t the whole story, either. The above chart doesn’t show
the detrimental increase the standard caching experienced with regards to page
response times (i.e. the time the visitor has to wait for a page to finish
loading) as the load factor grew. In the chart below, shorter bars signify
faster page loads:

The best thing about caching a Drupal site as static pages is that it’s dead
simple, in every respect: it’s trivial to setup, easy to manage, and facile to
scale. Throw in a good lightweight web server
([Lighttpd](https://web.archive.org/web/20060528/http://www.lighttpd.net/) comes
to mind), and you’ll scale to the very limits of your hardware, with few
arbitrary road blocks to hold you back. That’s not the case with Drupal’s
database caching, which requires you to
[tune](https://web.archive.org/web/20060528/http://drupal.org/node/51263) the
MySQL configuration, and more often than not, mess around with operating system
settings, such as file descriptor limits, to handle even moderate traffic.

As a testament to the above, it took me over an hour to configure the MySQL 4.1
daemon on my laptop in order to enable the database-backed cache to even pass
the 100x concurrency level benchmark. Before I figured out how to adjust the
measly limit of 256 file descriptors that Mac OS X gives processes by default,
every other page request was failing with Drupal complaining of not being able
to connect to the database. Unless you happen to have stocked away some sysadmin
experience, a situation like this could have you scratching your head for a bit.

What’s worse, on a shared host mucking around with system-level stuff is often
not even possible nor permitted. Many hosts also impose implicit, arbitary
limits on the CPU time that you are allowed to consume on a daily basis, meaning
that if you run a popular site with a dynamic CMS like Drupal, you may be facing
a forced upgrade to a dedicated server.

Serving out static pages, on the other hand, is what web servers do best. You
can run even a very popular site, as a static version, off a shared host without
receiving that dreaded e-mail from the billing department.

Come to think of it, with this module, you might e-mail **them** for a discount
since you wouldn’t even be using, or needing, your “fair share” of server
resources. Better yet, depending on what kind of site you run, you might install
Drupal on your own computer, downgrade to a cheaper hosting account that doesn’t
provide PHP & MySQL support in the first place, and just upload the generated
HTML files via FTP or
[rsync](https://web.archive.org/web/20060528/http://samba.anu.edu.au/rsync/).
The static page caching is multisite-compatible, meaning you could keep a
single, private “master” copy of Drupal to manage and publish all your sites.

So, what’s the catch, you ask? Well, the usefulness of static page caching
really depends directly on what kind of site you run; namely, how “dynamic” your
site is. Obviously, if you make use of forms or features that submit information
from the visitor back to Drupal (e.g. comments, the
[feedback](https://web.archive.org/web/20060528/http://drupal.org/project/feedback)
module, etc.), your site can’t be exported into a 100% static format, since
something still needs to handle receiving the form submissions (or to put it
technically,
[POST](https://web.archive.org/web/20060528/http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
requests are not cached).

A similar example would be if you have, for instance, a
[quotes](https://web.archive.org/web/20060528/http://drupal.org/project/quotes)
block and consider it very important that it updates with a random quote on
every page request, instead of every 5 minutes (say), as would be the case using
static caching.

Other than the above considerations, the module’s first and foremost current
limitation, shared with Drupal’s standard caching, is that only pages served to
anonymous visitors are cached; requests from logged-in users are passed through
to Drupal in a normal fashion. This means that if you run a large community
where users need to register and login to participate, most of the user
interaction will still need to be dynamic. (I have figured out a way to keep a
user-specific cache, as well, but I’m not yet sure the implementation is worth
the effort or complexity. If you think otherwise, please leave a comment to that
effect, or drop me a [private e-mail](mailto:arto.bendiken@gmail.com).)

What the static page cache is ideal for, then, are personal blogs, corporate
sites, portals, directories & the like, where most of the site is targeted at
anonymous users, and only the occasional feature (say, posting a comment or
sending feedback) will need to bypass the cache and be handled by Drupal. For
these kind of sites, you can probably benefit from static caching in over a good
95% of your site.

I have a long list of client sites running Drupal 4.6 that I’ll be upgrading to
4.7 as soon as possible in order to let them benefit from this module. But
first, I will need to test the module on a couple different shared hosts, and of
course, implement it on this site. I’ll polish the module up for general
distribution soon after I complete the above. (For the time being, if you wish
to give it a spin, please [drop me a line](mailto:arto.bendiken@gmail.com).)

Till then, here are a couple of screenshots to tide everyone over:

**Update** (2006/06): some additional details are available from [my post to the
Drupal development mailing
list](https://web.archive.org/web/20060528/http://lists.drupal.org/pipermail/development/2006-June/016784.html).

**Update** (2006/10): there’s now a [project site and issue
tracker](https://web.archive.org/web/20060528/http://drupal.org/project/boost)
on [drupal.org](https://web.archive.org/web/20060528/http://drupal.org/). Please
note that the appropriate place to post support requests is in the issue
tracker, not as comments to this page (support request comments will get
summarily ignored).

**Update** (2007/07): [Justin
Miller](https://web.archive.org/web/20060528/http://codesorcery.net/) has [a
great write-up about using Boost on Drupal
5.x](https://web.archive.org/web/20060528/http://codesorcery.net/2007/07/23/boost-your-drupal-site/),
with lotsa technical details and a very cool logo to boot.

**Update** (2007/08): Boost is [now available for Drupal
5.x](https://web.archive.org/web/20060528/http://drupal.org/project/boost), too.
Many thanks to [Alexander
Grafov](https://web.archive.org/web/20060528/http://drupal.org/user/7013) for
the initial porting work.
