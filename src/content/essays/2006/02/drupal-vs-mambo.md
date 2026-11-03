---
title: Drupal vs Mambo
date: '2006-02-08T14:15:00Z'
categories:
- Technology
tags:
- content management
- Drupal
- Joomla
- PHP
- search engine friendly
summary: My 2005 article on why we abandoned Mambo for Drupal at Xaneon, republished at the request of readers.
original:
  url: http://bendiken.net/2006/02/08/drupal-vs-mambo
  archive: https://web.archive.org/web/20060605170456/http://bendiken.net/2006/02/08/drupal-vs-mambo
---

I originally wrote this article for the Xaneon Development site way back in
August 2005. After Xaneon shut down and this article became unavailable, a
number of people e-mailed me to ask for it, so I dug up my local copy and
decided to publish it here. Note that since this was written, Mambo has become
[Joomla](https://web.archive.org/web/20060208/http://www.joomla.org/) and both
Drupal and Joomla have evolved and come out with new releases. Nevertheless, for
what it’s worth, here follows the article in its original form.

--------------------------------------------------------------------------------

*Since our announcement regarding the impending demise of XE2, we’ve received a
ton of e-mail from people asking us to elaborate on the reasons we decided to
“defect” from
[Mambo](https://web.archive.org/web/20060208/http://www.opensourcematters.org/)
to [Drupal](https://web.archive.org/web/20060208/http://www.drupal.org/).
Instead of answering this question over and over, we’ve decided to publish a
brief (well, that was the intention, anyway…) overview of what has led us to,
ultimately, abandon Mambo.*

**Table of Contents:**

- General Comparison (page 2)
- Where Mambo Shines (page 2)
- Technical & Architectural Differences (page 3)
- Application Programming Interface (page 3)
- Internationalization (page 4)
- Search Engine Friendly URLs (page 5)
- Multiple Sites with One Installation (page 6)
- Fine-Grained Access Control (page 6)
- Other Considerations (page 7)
- In Conclusion (page 7)

Now, when making any comparison such as this, the first thing to realize is that
**it’s unlikely that one tool will fit every need and purpose**. To an extent,
comparing Mambo and Drupal is comparing apples to oranges. They are two very
different systems, with widely differing goals and intended audiences. They just
both happen to fit under the convenient heading of “content management systems”,
meaning you can create decent websites with either one of them.

Also, the people on our team probably don’t represent the broad cross-section of
Mambo users out there; our needs don’t necessarily fit their needs. We are. for
the most part, people with strong technical backgrounds. Some of our reasons for
abandoning Mambo may not resonate at all with the “average user”, if there is
such a person. Unless you are a programmer, or have an equally deep technical
understanding, take everything we say with a grain of salt.

Let’s start off with some background: we’ve used Mambo for a long time, and
we’ve written a multitude of components, modules and mambots for various
versions of Mambo, as well as contributed patches and improvements to existing
Mambo add-ons. Most of our own projects were coded for internal purposes or
limited distribution only, but some, like our popular XE2 component, which
provided Search Engine Friendly (SEF) URLs for Mambo, were released to the Mambo
community under open-source terms.

It was only recently, in the last few months, that we “became aware” of Drupal
and overcame the initial threshold of trying it out. Funnily enough, this was
mostly to steal some good ideas from their SEF implementation; instead, Drupal
ended stealing us away from Mambo. So it goes sometimes. Read on for what caused
us to abandon all the time and effort we had invested into the Mambo platform…

*(…continued on next page)*

--------------------------------------------------------------------------------

### General Comparison

Mambo has, for a long time, been ahead of competing CMS projects with regards to
marketing. Mambo’s public image is pretty, appealing and very marketable to
management. Mambo has no doubt benefited from the sponsoring company and
trademark owner Miro’s advertising dollars in this regard.

*Of course, this was all before the recent hostile project takeover by Miro;
while there are people who will argue that any publicity is good publicity,
we’ll just have to sit and see how this particular move will play out.*

Drupal, in contrast, has been a community project from the start. There’s been
no single strong corporate sponsor (though that’s changing with entities such as
CivicSpace throwing their weight behind the project) to hold sway over the
project, and the overall image has been somewhat less glitzy and more
downplayed.

### Where Mambo Shines

Mambo is certainly “easy on the eyes”: most people react very favorably to
seeing the administration interface for the first time. Another aspect where
Mambo is definitely ahead of the game is in installation friendliness, as well
as add-on management (installation and uninstallation of components, modules,
etc.)

In comparison, Drupal requires one to manually unzip add-ons on the server,
possibly create the necessary SQL tables from supplied scripts, and there is no
friendly installation “wizard” to guide you through first-time installation.
(This is all evolving, though; it shouldn’t be many months before there is a
comprehensive installation system available in Drupal.)

If the above points are very important considerations to you, as they certainly
might be to less technically-savvy users, then you may not really benefit from
this article. As stated, our team hails from a quite different user segment.

*(…continued on next page)*

--------------------------------------------------------------------------------

### Technical & Architectural Differences

Now we come to the real meat of the matter. During our sojourn into the dark art
known as Mambo SEF, we’ve necessarily become quite familiar with the internal
workings of Mambo. To be candidly honest, it’s not exactly impressive.

Mambo is a very *limiting* design. Pretty much the only “hook” into Mambo’s
core, to allow any significant third-party extension to Mambo’s base
functionality without modifying the core files, is the SEF support. (A cynical
person might argue that even this “hook” exists only for the benefit of a
certain commercial SEF extension developed by a former core developer.)

When we originally designed Xaneon Extensions for Mambo, the most interesting
aspect for us was to provide a general “core extension” framework which would
allow multiple components to utilize XE2 to tap into the core without disturbing
the SEF support or interface. Essentially, a “multiplexing” of the one and only
core hook, for the benefit of all. XE2’s own code is **very** extensible,
allowing other developers or site administrators to override functionality as
they need to. Hopefully someone else will take this idea, or even our code, and
run with it.

Drupal’s architecture, in comparison to Mambo’s, is like a breath of fresh air.
First off, reading through the core code was a pleasant experience: it’s not
only cleanly designed, and with extensibility constantly in mind; it’s also well
commented and
[documented](https://web.archive.org/web/20060208/http://drupaldocs.org/). The
design is incredibly flexible from the view point of an add-on developer coming
from Mambo: there is no need for separate “components”, “modules” and “mambots”,
as one Drupal module can perform the tasks of each, and much more besides. There
is a general-purpose, all-pervasive “hook” system in place, allowing modules to
override functionality in the entire lifecycle of content objects (known as
“nodes” in Drupal), as well as perform actions at certain points in the handling
of page requests.

### Application Programming Interface

In Drupal **there is actually an API** for modules to use; this is a very
important point. One reason for the inconsistent quality of Mambo components,
and the proliferation of non-standard user interfaces, is no doubt that there
**are** no standards, or at least no significant high-level programming
interface that would facilitate the creation of third-party add-ons.
Essentially, to create a Mambo add-on, one needs to start from scratch and
reinvent the wheel every time. It gets frustrating after a while, even though
the developer may learn to refactor and reuse some of his code.

*(…continued on next page)*

--------------------------------------------------------------------------------

Nowhere are the above-mentioned design considerations more visible than in two
add-on features we consider absolutely essential for both Mambo and Drupal:
internationalization (i18n) and search engine friendly (SEF) URL addresses. Both
require fairly low-level “hooks” into core functionality to function.

### Internationalization

There is i18n support available in both systems, but in both Mambo and Drupal
some patches are required to the core; this in our opinion is inexcusable, in
both cases. Only unilingual users and websites would **not** need i18n, and
those kind of websites are a luxury on the European side of the Big Pond, at
least.

However, compare the patching required, and how the add-on is implemented in
each case: that is, in Mambelfish versus Drupal’s i18n module. In such a
comparison, Drupal’s clean design shines through very favorably: the i18n module
is much less of a “dirty hack” than what’s required for Mambo, and builds upon
the superb localization feature of Drupal. In fact, Drupal’s i18n patch is only
about two dozen one-line code additions, and would be trivial to integrate into
the Drupal core in a future release, should Drupal’s project leadership decide
to do so.

More so, now having lots of practical experience building multilingual sites
with both Mambo and Drupal, Drupal’s i18n works very well and as it is intended
to, and feels fully integrated into the system, not “hackish” in any way.

This is not, however, intended to knock down the developer of Mambelfish; having
reviewed the code and contributed patches to Mambelfish, we think he’s done
pretty much the best job that’s possible in the constraints Mambo’s architecture
places on him, and should rather be commended for his ingenuity in providing an
adequate solution to a difficult problem.

*(…continued on next page)*

--------------------------------------------------------------------------------

### Search Engine Friendly URLs

This is a subject that has become intimately familiar to us. One of our earliest
requirements for a CMS was adequate support for free-form, human-readable URLs.
At the time we started to use Mambo, there really wasn’t any solution to this
aside from some hacks shared in the Mambo forum, and a commercial SEF add-on for
Mambo developed by one of the core developers.

To solve the problem, we wrote Xaneon Alias Manager 1.0, which allowed us to
define friendly URLs manually for all of Mambo’s content pages. While it worked
quite well, and hundreds of websites are still using XAM today, it was a
labor-intensive solution for larger sites. Eventually, out of dissatisfaction
with having to maintain the friendly URLs manually grew Xaneon Extensions 2.0
(XE2) for Mambo, which introduced automated friendly URLs for both content items
and component-generated paths.

Unfortunately, while achieving a good measure of automation, the component’s
complexity skyrocketed. Mambo itself is simply not designed for friendly URLs,
and what’s worse, most of the third-party components for Mambo don’t take any
measures to even try to support friendly URLs. As a result, writing a “perfect”
SEF solution for Mambo is an incredibly labor-intensive task. We welcome anyone
to try it as a Sunday-afternoon exercise…

Over the last year, many people have privately expressed their concerns to us
about the fact that a Mambo core developer is charging for a SEF component that
should, in their view, be integrated in Mambo’s core. From our own “inside
perspective”, we can, on one hand, understand this developer charging for his
component, since we know the work involved in developing a comprehensive Mambo
SEF solution. (Come to think of it, charging for ours might have motivated us to
actually finish it.) On the other hand, we must agree that Mambo should come
with significantly better SEF support out-of-the-box, and that the current
situation is curious, to say the least. We do believe the (former) core team to
be in serious error on this matter.

Fortunately, the situation with Drupal is much better. SEF support, on a level
comparable to our Alias Manager component, is fully integrated into the Drupal
core, and there is an open-source add-on available which adds automated friendly
URLs in a manner comparable to XE2. There are a few small convenience features
we are considering implementing and contributing, but already Drupal’s SEF
support is more integrated and usable than we could ever achieve in Mambo
without patches to the core. It simply works as intended, and the code and
solution is elegant.

*(…continued on next page)*

--------------------------------------------------------------------------------

### Multiple Sites with One Installation

Imagine if you could set up several sites with just one installation; all
installed add-ons and themes would be instantly available for use in all these
sites, and any security patches you need to apply (after all, all software has
bugs, as we know all too well), need only be applied once.

And, to make it all even sweeter, imagine if you selectively share the
configuration settings and databases tables between these sites so that, for
instance, you could share user accounts between some sites, or maintain only one
large content archive, selectively using and sharing articles between your
sites. **Wouldn’t this be great?**

Guess what. Drupal does all of the above, and it works perfectly. It’s not too
bad to set up, and once done, saves a bunch of time and effort.

We figured out a way to do most of the above in Mambo as well, since XE2 has
some access to the relevant PHP variables before handing control over to Mambo’s
core. The multi-site support in current beta versions of XE2 is buggy, but the
concept should be sound. It would take a lot of work to bring it up to Drupal’s
current level, though.

### Fine-Grained Access Control

As far as access controls go, this is simply a no-contest. We all know how
lacking Mambo’s access control scheme is; hopefully there will one day be an
improvement to it.

Drupal allows us to define arbitary roles (for instance, “moderator”) for users,
and assign permissions to these roles on a module-by-module basis (for example,
one selection is “moderate comments”). It’s intuitive, very fine-grained and
very flexible. There is even a module available that will automatically handle
giving a user a new role after they’ve paid for a subscription with PayPal, as
well as many other add-ons that allow true micromanagement of the website’s
access control policies, should that be necessary.

*(…continued on next page)*

--------------------------------------------------------------------------------

### Other Considerations

Let’s just say the list of goodies Drupal delivers us is pretty long. We haven’t
even discussed Drupal’s templating system (keywords: XHTML, CSS, total
customizability, and optionally, Smarty) or the unlimited content hierarchies
you can create with the built-in Drupal module called, appropriately enough,
“taxonomy”.

We could go on for two dozen pages. It wouldn’t be difficult at all. But we
don’t need to convince anyone, and our reasons aren’t necessarily reasons why
someone else would switch. It would be silly to get religious about something
like a content management system. As always, just pick the right tool for the
job at hand. For us, that has for now in most cases proven to be Drupal.

### In Conclusion

The bottom line is simply that Drupal allows us to be significantly more
productive. In our experience, we are able to put together complex sites in a
fraction of the time it would have taken us with Mambo. We can use Drupal
modules such as Flexinode, which brings to mind some of the power of Lotus
Notes, to quickly solve needs that would have cost us a lot of custom
programming (or buying a custom component) in Mambo. We can take advantage of
Drupal’s excellent templating to produce truly unique-looking sites with not
much effort.

This site, xaneon.com, is at the moment still a Mambo installation, running our
Xaneon Extensions for Mambo. It’s the last bastion of the old, standing against
the coming wave of change. It’s unlikely to hold out much longer, though…

We don’t regret the time we spent with Mambo; we will always have a soft spot
for it and appreciate the many friends and acquaintances we made along the way.
We sympatize with the current plight of the “true” Mambo core development team
and wish them the best of fortunes in their new endeavour. As we’ve stated
previously, we might pop in at [Open Source
Matters](https://web.archive.org/web/20060208/http://www.opensourcematters.org/)
from time to time to catch up on how the “rebel Mambo” project is doing.
**Goodbye, and thanks for all the fish!**

**References and discussion regarding this article:**

- [Some good examples of websites built with
  Drupal](https://web.archive.org/web/20060208/http://drupal.org/handbook/drupal/gallery)
- [Drupal-related case studies for different types of
  websites](https://web.archive.org/web/20060208/http://drupal.org/cases)
- [Why Linux Journal converted to Drupal and how it
  went](https://web.archive.org/web/20060208/http://drupal.org/node/15223)
- [Forum discussion at
  opensourcematters.org](https://web.archive.org/web/20060208/http://forum.opensourcematters.org/index.php/topic,1676.0.html)
- [Forum discussion at
  drupal.org](https://web.archive.org/web/20060208/http://drupal.org/node/29819)
