---
title: The Universal Timeline Aggregator
date: '2006-12-29T17:37:02Z'
categories:
- Technology
tags:
- Atom
- Drupal
- JSON
- mashups
- RSS
- services
- SimplePie
- timeline
summary: A web service that renders any Atom or RSS feed as an interactive timeline, using the MIT Simile project's Timeline widget.
---

<p><em><small>Originally published at <a href="https://web.archive.org/web/20080725102459/http://bendiken.net/2006/12/29/the-universal-timeline-aggregator">http://bendiken.net/2006/12/29/the-universal-timeline-aggregator</a>. Some of its images were not archived.</small></em></p>

![Timeline](./20061229-timeline-sundial.png)

For those who haven’t yet come across it somewhere on the web, may I recommend
checking out the
[Timeline](https://web.archive.org/web/20061229/http://simile.mit.edu/timeline/)
widget developed by [David F.
Huynh](https://web.archive.org/web/20061229/http://people.csail.mit.edu/people/dfhuynh/)
of the [MIT Simile](https://web.archive.org/web/20061229/http://simile.mit.edu/)
project. It’s a snazzy DHTML/JavaScript tool for visualizing chronological
events on a scrollable, graphical timeline — sort of a Google Maps for temporal
information.

I’ve been working quite a bit with the Simile widget lately, co-developing (with
[David Donohue](https://web.archive.org/web/20061229/http://drdonohue.com/)) a
[module](https://web.archive.org/web/20061229/http://drupal.org/project/timeline)
that integrates the widget into
[Drupal](https://web.archive.org/web/20061229/http://drupal.org/), allowing
Drupal sites to display any
[CCK](https://web.archive.org/web/20061229/http://drupal.org/project/cck) /
[Views](https://web.archive.org/web/20061229/http://drupal.org/project/views)
content as graphical timelines.

Today, inspired by [Alexandre
Passant’s](https://web.archive.org/web/20061229/http://apassant.net/blog/)
[RSS2Timeline](https://web.archive.org/web/20061229/http://apassant.net/home/2006/07/rss2timeline/)
implementation, I sat down to code up a generic web service that can take any
Atom or RSS feed and convert it into a
[JSON-based](https://web.archive.org/web/20061229/http://en.wikipedia.org/wiki/JSON)
event source for the Timeline widget. My goal was to make it absolutely trivial
to embed live Atom/RSS timelines into blogs and whatnot, so that anyone with
basic HTML skills could use timelines without having to go through the
relatively complex technical setup the widget requires.

I hereby present the **[Universal Timeline
Aggregator](https://web.archive.org/web/20061229/http://timeline.to/)**,
available at
**[http://timeline.to/](https://web.archive.org/web/20061229/http://timeline.to/)**
(I’ve been snapping up Tonga’s [dot-to
domains](https://web.archive.org/web/20061229/http://en.wikipedia.org/wiki/.to)
since getting the ultimate [vanity
domain](https://web.archive.org/web/20061229/http://en.wikipedia.org/wiki/Vanity_domain),
[ar.to](https://web.archive.org/web/20061229/http://ar.to/), as a Christmas
present; the “to” preposition works rather nicely for the present purpose, too.)

Here’s a screen capture (and live example, if you click on it) of the sort of
timeline display you can create in a minute or two using the
**[timeline.to](https://web.archive.org/web/20061229/http://timeline.to/)**
service:

Embedding a live, interactive Atom or RSS timeline into any site is now as easy
as copying and pasting the following HTML snippet, with the appropriate
modifications:

```html
<iframe src="http://timeline.to/http://www.mysite.com/rss.xml"
  width="500" height="400"
  scrolling="no" frameborder="1"
  marginwidth="0" marginheight="0"></iframe>
```

Just replace `http://www.mysite.com/rss.xml` with a real URL address to an Atom
or RSS feed, and modify the width and height as you like.
[Autodiscovery](https://web.archive.org/web/20061229/http://diveintomark.org/archives/2002/08/15/ultraliberal_rss_locator)
of feeds is supported to a reasonable extent, so in most cases you won’t even
need the exact URL to the feed; the website’s URL address itself will do.

Here’s another example as a screen capture, this time showing the popup box that
opens when a timeline event is clicked:

Starting out on the
**[timeline.to](https://web.archive.org/web/20061229/http://timeline.to/)**
implementation today, I had to actually pause a moment to contemplate which
technology to use: Python, Ruby or PHP — it wasn’t quite as clear-cut a decision
as usual.

Case in point, while I haven’t done much Python coding recently (since defecting
to the Ruby camp), the language does have some excellent libraries and
frameworks going for it — including arguably the best Atom/RSS parser in
existence, the [Universal Feed
Parser](https://web.archive.org/web/20061229/http://feedparser.org/) written by
[Mark Pilgrim](https://web.archive.org/web/20061229/http://diveintomark.org/).
Considering the [staggering
number](https://web.archive.org/web/20061229/http://diveintomark.org/archives/2002/08/20/how_liberal_is_too_liberal)
[of malformed and invalid
feeds](https://web.archive.org/web/20061229/http://diveintomark.org/archives/2003/01/22/parse_at_all_costs)
out there, a good parser is essential (I won’t get further, right this moment,
into the delicious irony of having to parse XML formats using regular
expressions).

On the other hand, Ruby also has (at least) two relatively comprehensive and
decent libraries for feed parsing,
[FeedTools](https://web.archive.org/web/20061229/http://rubyforge.org/projects/feedtools/)
and
[Syndication](https://web.archive.org/web/20061229/http://rubyforge.org/projects/syndication/).
Unfortunately, in my experience neither library is quite up there with the
Universal Feed Parser yet, and neither seems [particularly
active](https://web.archive.org/web/20061229/http://rubyforge.org/tracker/index.php?func=detail&aid=4843&group_id=775&atid=3061)
recently.

In the end, underdog PHP won out on this project on purely practical points:
since my [Timeline
module](https://web.archive.org/web/20061229/http://drupal.org/project/timeline)
for [Drupal](https://web.archive.org/web/20061229/http://drupal.org/) is written
in PHP, it makes sense to try and reuse code both ways between the
**[timeline.to](https://web.archive.org/web/20061229/http://timeline.to/)**
service and Drupal.

Investigating the current best way to parse both Atom and RSS feeds with PHP, I
learned of a new feed parser library for PHP called
[SimplePie](https://web.archive.org/web/20061229/http://simplepie.org/), which
has been gaining a lot of momentum lately (indeed, it seems to be on track for
eventually surpassing
[MagpieRSS](https://web.archive.org/web/20061229/http://magpierss.sourceforge.net/)
as the de-facto RSS parser for PHP). The SimplePie developers are apparently in
the process of porting the 3000+ unit tests from Pilgrim’s parser, which
certainly seems a promising prospect for creating a truly robust parser.

SimplePie is also bundled with the
[Feedparser](https://web.archive.org/web/20061229/http://drupal.org/project/feedparser)
Drupal module, so again, it all just makes sense. The library turned out to be
quite painless to work with, and has, so far, been able to parse all the feeds
I’ve thrown at it. (I did have to disable SimplePie’s ad-removal feature, as
that was eating up the entry descriptions on some Atom feeds.)

[Feedback](https://web.archive.org/web/20061229/http://bendiken.net/contact) on
the **[timeline.to](https://web.archive.org/web/20061229/http://timeline.to/)**
service is welcome. If there’s sufficient interest, I will consider adding
further functionality such as
[iCalendar](https://web.archive.org/web/20061229/http://en.wikipedia.org/wiki/ICalendar)
support, and perhaps
[mashup](https://web.archive.org/web/20061229/http://en.wikipedia.org/wiki/Mashup_%28web_application_hybrid%29)
features allowing multiple feeds and data sources to be combined into a single
timeline display.
