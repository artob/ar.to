---
title: Courier-IMAP to Dovecot Migration Script
date: '2005-11-03T21:42:53Z'
categories:
- Technology
tags:
- Dovecot
- e-mail
- hosting
- IMAP
- Unix
summary: A shell script for converting Courier-IMAP maildirs to Dovecot format, which saves a fair bit of typing when migrating hundreds of mail accounts.
---

<p><em><small>Originally published at <a href="https://web.archive.org/web/20080724200752/http://bendiken.net/2005/11/03/courier-imap-to-dovecot-migration-script">http://bendiken.net/2005/11/03/courier-imap-to-dovecot-migration-script</a>.</small></em></p>

I’ve just migrated a couple of servers from Courier-IMAP to
[Dovecot](https://web.archive.org/web/20051103/http://www.dovecot.org/), and am
very happy with the latter so far. I thought I’d share the **courier2dovecot**
shell script I whipped together (based on the instructions I found in the
[migration
how-to](https://web.archive.org/web/20051103/http://wiki.dovecot.org/)), for
converting Courier-IMAP
[maildirs](https://web.archive.org/web/20051103/http://en.wikipedia.org/wiki/Maildir)
to Dovecot format.

While the script is rather simple, it can save a fair bit of typing when
migrating some hundreds of mail accounts, especially since Courier stores some
of its own state files recursively in each folder of the maildir hierarchy,
making it a real pain to otherwise manually rename or remove all of them.

Here’s a plain-English summary of what the script currently does, when given a
Courier maildir path as an argument:

- Check that the given path is indeed a valid Courier maildir, and exit if not.
- Rename the file ‘courierimapsubscribed’ to ‘subscriptions’, and strip the
  ‘INBOX.’ prefix from its contents.
- Recursively rename all of files of the name ‘courierimapuiddb’ to
  ‘dovecot-uidlist’.
- Recursively delete all of files of the name ‘courierimaphieracl’,
  ‘courierimapacl’ and ‘courierimapkeywords’.

The script will also verbosely print out each action it performs, handy for
redirecting the output to a log file for a large migration.

Hopefully people about to jump ship from Courier to Dovecot find this useful. If
anyone comes up with improvements to the script, please send them my way.

```bash
#!/bin/sh
#
# courier2dovecot -- Converts a Courier maildir to Dovecot format.
# Copyright (c) 2005 Arto Bendiken. Released under the GNU GPL.
# Newest version available from http://bendiken.net/scripts/
#
# 2005-10-21 initial version for Dovecot 1.0.
#
dir="$1"
if [ -z "$dir" ] || [ "$dir" = "-?" ] || [ "$dir" = "-h" ] || [ "$dir" = "--help" ]; then
  echo "Usage: $0 maildirpath"
  exit 1
fi
if [ ! -d "$dir" ] || [ ! -e "$dir/courierimapsubscribed" ]; then
  echo "$dir is not a path to a Courier maildir"
  exit 1
fi
find $dir -name courierimapsubscribed -print0 | xargs -0r rename -v 's/courierimapsubscribed/subscriptions/'
find $dir -name subscriptions -print0 | xargs -0r sed -i 's/INBOX\.//'
find $dir -name courierimapuiddb -print0 | xargs -0r rename -v 's/courierimapuiddb/dovecot-uidlist/'
find $dir -name courierimaphieracl -print0 | xargs -0r rm -vrf
find $dir -name courierimapacl -print0 | xargs -0r rm -vf
find $dir -name courierimapkeywords -print0 | xargs -0r rm -vrf
```
