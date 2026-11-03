---
title: 'RDF for Intrepid Unix Hackers: Grepping N-Triples'
date: '2010-03-04T16:00:00Z'
categories:
- Technology
tags:
- RDF
- Unix
- AWK
- N-Triples
- DBpedia
- Drupal
summary: How to process RDF data in the line-oriented N-Triples format by pipelining standard Unix tools such as `grep`, `cut`, `awk`, `sort`, and `uniq`.
original:
  url: http://blog.datagraph.org/2010/03/grepping-ntriples
  archive: https://web.archive.org/web/20161228112200/http://blog.datagraph.org/2010/03/grepping-ntriples
---

The
[N-Triples](https://web.archive.org/web/20100304/http://en.wikipedia.org/wiki/N-Triples)
format is the lowest common denominator for
[RDF](https://web.archive.org/web/20100304/http://www.w3.org/RDF/) serialization
formats, and turns out to be a very good fit to the Unix paradigm of
line-oriented, whitespace-separated data processing. In this tutorial we'll see
how to process N-Triples data by
[pipelining](https://web.archive.org/web/20100304/http://en.wikipedia.org/wiki/Pipeline_(Unix))
standard Unix tools such as `grep`, `wc`, `cut`, `awk`, `sort`, `uniq`, `head`
and `tail`.

To follow along, you will need access to a Unix box (Mac OS X, Linux, or BSD)
with a
[Bash](https://web.archive.org/web/20100304/http://en.wikipedia.org/wiki/Bash)-compatible
shell. We'll be using
[`curl`](https://web.archive.org/web/20100304/http://curl.haxx.se/) to fetch
data over HTTP, but you can substitute `wget` or `fetch` if necessary. A couple
of the examples require a modern
[AWK](https://web.archive.org/web/20100304/http://en.wikipedia.org/wiki/AWK)
version such as
[`gawk`](https://web.archive.org/web/20100304/http://www.gnu.org/software/gawk/)
or
[`mawk`](https://web.archive.org/web/20100304/http://invisible-island.net/mawk/mawk.html);
on Linux distributions you should be okay by default, but on Mac OS X you will
need to install `gawk` or `mawk` from
[MacPorts](https://web.archive.org/web/20100304/http://www.macports.org/) as
follows:

```console
$ sudo port install mawk
$ alias awk=mawk
```

## Grokking N-Triples

Each N-Triples line encodes one RDF statement, also known as a *triple*. Each
line consists of the subject (a URI or a blank node identifier), one or more
characters of whitespace, the predicate (a URI), some more whitespace, and
finally the object (a URI, blank node identifier, or literal) followed by a dot
and a newline. For example, the following N-Triples statement asserts the title
of my website:

```turtle
<http://ar.to/> <http://purl.org/dc/terms/title> "Arto Bendiken" .
```

This is an almost perfect format for Unix tooling; the only possible further
improvement would have been to define the statement component separator to be a
tab character, which would have simplified obtaining the object component of
statements -- as we'll see in a bit.

## Getting N-Triples

Many RDF data dumps are made available as compressed N-Triples files.
[DBpedia](https://web.archive.org/web/20100304/http://dbpedia.org/), the
RDFization of Wikipedia, is a prominent example. For purposes of this tutorial
I've prepared an N-Triples dataset containing all
[Drupal](https://web.archive.org/web/20100304/http://drupal.org/)-related RDF
statements from [DBpedia
3.4](https://web.archive.org/web/20100304/http://wiki.dbpedia.org/Downloads34),
which is the latest release at the moment and reflects Wikipedia as of late
September 2009.

I prepared the sample dataset by downloading all English-language core datasets
(20 N-Triples files totaling 2.1 GB when compressed) and crunching through them
as follows:

```console
$ bzgrep Drupal *.nt.bz2 > drupal.nt
```

To save you from gigabyte-sized downloads and an hour of data crunching, you can
just grab a copy of the resulting
[`drupal.nt`](/2010/03/grepping-ntriples/drupal.nt)
file as follows:

```console
$ curl https://ar.to/2010/03/grepping-ntriples/drupal.nt > drupal.nt
```

The sample dataset totals 294 RDF statements and weighs in at 70 KB.

## Counting N-Triples

The first thing we want to do is count the number of triples in an N-Triples
dataset. This is straightforward to do, since each triple is represented by one
line in an N-Triples input file and there are a number of Unix tools that can be
used to count input lines. For example, we could use either of the following
commands:

```console
$ cat drupal.nt | wc -l
294

$ cat drupal.nt | awk 'END { print NR }'
294
```

Since we'll be using a lot more of
[AWK](https://web.archive.org/web/20100304/http://en.wikipedia.org/wiki/AWK)
throughout this tutorial, let's stick with `awk` and define a handy shell alias
for this operation:

```console
$ alias rdf-count="awk 'END { print NR }'"

$ cat drupal.nt | rdf-count
294
```

Note that, for reasons of comprehensibility, the previous examples as well as
most of the subsequent ones assume that we're dealing with "clean" N-Triples
datasets that don't contain comment lines or other miscellania. The DBpedia data
dumps fit this bill very well. However, further onwards I will give "fortified"
versions of these commands that can correctly deal with arbitrary N-Triples
files.

## Measuring N-Triples

We at Datagraph frequently use the N-Triples representation as the canonical
lexical form of an RDF statement, and work with [content-addressable storage
systems for RDF
data](https://web.archive.org/web/20100304/http://rdfcache.rubyforge.org/) that
in fact *store* statements using their N-Triples representation. In such cases,
it is often useful to know some statistical characteristics of the data to be
loaded in a mass import, so as to e.g. be able to fine-tune the underlying
storage for optimum space efficiency.

A first useful statistic is to know the typical size of a datum, i.e. the line
length of an N-Triples statement, in the dataset we're dealing with. AWK yields
us N-Triples line lengths without much trouble:

```console
$ alias rdf-lengths="awk '{ print length }'"

$ cat drupal.nt | rdf-lengths | head -n5
162
150
155
137
150
```

Note that N-Triples is an ASCII format, so the numbers above reflect both the
byte sizes of input lines as well as the ASCII character count of input lines.
All non-ASCII characters are escaped in N-Triples, and for present purposes
we'll be talking in terms of ASCII characters only.

The above list of line lengths in and of itself won't do us much good; we want
to obtain aggregate information for the whole dataset at hand, not for
individual statements. It's too bad that Unix doesn't provide commands for
simple numeric aggregate operations such as the minimum, maximum and average of
a list of numbers, so let's see if we can remedy that.

One way to define such operations would be to pipe the above output to an
[RPN](https://web.archive.org/web/20100304/http://en.wikipedia.org/wiki/Reverse_Polish_notation)
shell calculator such as `dc` and have it perform the needed calculations. The
complexity of this would go somewhat beyond mere shell aliases, however.
Thankfully, it turns out that AWK is well-suited to writing these aggregate
operations as well. Here's how we can extend our earlier pipeline to boil the
list of line lengths down to an average:

```console
$ alias avg="awk '{ s += \$1 } END { print s / NR }'"

$ cat drupal.nt | rdf-lengths | avg
242.517
```

The above, incidentally, is an example of a simple
[map/reduce](https://web.archive.org/web/20100304/http://en.wikipedia.org/wiki/MapReduce)
operation: a sequence of input values is *mapped* through a function, in this
case `length(line)`, to give a sequence of output values (the line lengths) that
is then *reduced* to a single aggregate value (the average line length). Though
I won't go further into this just now, it is worth mentioning in passing that
N-Triples is an ideal format for massively parallel processing of RDF data using
[Hadoop](https://web.archive.org/web/20100304/http://hadoop.apache.org/) and the
like.

Now, we can still optimize and simplify the above some by combining both steps
of the operation into a single alias that outputs an average line length for the
given input stream, like so:

```console
$ alias rdf-length-avg="awk '\
  { s += length }
  END { print s / NR }'"
```

Likewise, it doesn't take much more to define an alias for obtaining the maximum
line length in the input dataset:

```console
$ alias rdf-length-max="awk '\
  BEGIN { n = 0 } \
  { if (length > n) n = length } \
  END { print n }'"
```

Getting the minimum line length is only slightly more complicated. Instead of
comparing against a zero baseline like above, we need to instead define a "roof"
value to compare against. In the following, I've picked an arbitrarily large
number, making the (at present) reasonable assumption that no N-Triples line
will be longer than a billion ASCII characters, which would amount to somewhat
less than a binary gigabyte:

```console
$ alias rdf-length-min="awk '\
  BEGIN { n = 1e9 } \
  { if (length > 0 && length < n) n = length } \
  END { print (n < 1e9 ? n : 0) }'"
```

Now that we have some aggregate operations to crunch N-Triples data with, let's
analyze our sample DBpedia dataset using the three aliases defined above:

```console
$ cat drupal.nt | rdf-length-avg
242.517

$ cat drupal.nt | rdf-length-max
2179

$ cat drupal.nt | rdf-length-min
84
```

We can see from the output that N-Triples line lengths in this dataset vary
considerably: from less than a hundred bytes to several kilobytes, but being on
average in the range of two hundred bytes. This variability is to be expected
for DBpedia data, given that many RDF statements in such a dataset contain a
long textual description as their object literal whereas others contain merely a
simple integer literal.

Many other statistics, such as the median line length or the standard deviation
of the line lengths, could conceivably be obtained in a manner similar to what
I've shown above. I'll leave those as exercises for the reader, however, as
further stats regarding the raw N-Triples lines are unlikely to be all that
generally interesting.

## Parsing N-Triples

It's time to move on to getting at the three components -- the subject, the
predicate and the object -- that constitute RDF statements.

We have two straightforward choices for obtaining the subject and predicate: the
`cut` command and good old `awk`. I'll show both aliases:

```console
$ alias rdf-subjects="cut -d' ' -f 1 | uniq"
$ alias rdf-subjects="awk '{ print \$1 }' | uniq"
```

While `cut` might shave off some microseconds compared to `awk` here, AWK is
still the better choice for the general case, as it allows us to expand the
alias definition to ignore empty lines and comments, as we'll see later. On our
sample data, though, either form works fine.

You may have noticed and wondered about the pipelined `uniq` after `cut` and
`awk`. This is simply a low-cost, low-grade deduplication filter: it drops
consequent duplicate values. For an ordered dataset (where the input N-Triples
lines are already sorted in lexical order), it will get rid of all duplicate
subjects. In an unordered dataset, it won't do much good, but it won't do much
harm either (what's a microsecond here or there?)

To fully deduplicate the list of subjects for a (potentially) unordered dataset,
apply another `uniq` filter after a `sort` operation as follows:

```console
$ cat drupal.nt | rdf-subjects | sort | uniq | head -n5
<http://dbpedia.org/resource/Acquia_Drupal>
<http://dbpedia.org/resource/Adland>
<http://dbpedia.org/resource/Advomatic>
<http://dbpedia.org/resource/Apadravya>
<http://dbpedia.org/resource/Application_programming_interface>
```

I've not made `sort` an integral part of the `rdf-subjects` alias because
sorting the subjects is an expensive operation with resource usage proportional
to the number of statements processed; when processing a billion-triple
N-Triples stream, it is usually simply better to not care too much about
ordering.

Getting the predicates from N-Triples data works exactly the same way as getting
the subjects:

```console
$ alias rdf-predicates="cut -d' ' -f 2 | uniq"
$ alias rdf-predicates="awk '{ print \$2 }' | uniq"
```

Again, you can apply `sort` in conjunction with `uniq` to get the list of unique
predicate URIs in the dataset:

```console
$ cat drupal.nt | rdf-predicates | sort | uniq | tail -n5
<http://www.w3.org/2000/01/rdf-schema#label>
<http://www.w3.org/2004/02/skos/core#subject>
<http://xmlns.com/foaf/0.1/depiction>
<http://xmlns.com/foaf/0.1/homepage>
<http://xmlns.com/foaf/0.1/page>
```

Obtaining the object component of N-Triples statements, however, is somewhat
more complicated than getting the subject or the predicate. This is due to the
fact that object literals can contain whitespace that will throw off the
whitespace-separated field handling of `cut` and `awk` that we've relied on so
far. Not to worry, AWK can still get us the results we want, but I won't attempt
to explain how the following alias works; just be happy that it does:

```console
$ alias rdf-objects="awk '{ ORS=\"\"; for (i=3;i<=NF-1;i++) print \$i \" \"; print \"\n\" }' | uniq"
```

The output of `rdf-objects` is the N-Triples encoded object URI, blank node
identifier or object literal. URIs are output in the same format as subjects and
predicates, with enclosing angle brackets; language-tagged literals include the
language tag, and datatyped literals include the datatype URI:

```console
$ cat drupal.nt | rdf-objects | sort | uniq | head -n5
"09"^^<http://www.w3.org/2001/XMLSchema#integer>
"16"^^<http://www.w3.org/2001/XMLSchema#integer>
"2001-01"^^<http://www.w3.org/2001/XMLSchema#gYearMonth>
"2009"^^<http://www.w3.org/2001/XMLSchema#integer>
"6.14"^^<http://www.w3.org/2001/XMLSchema#decimal>
```

Another very useful operation to have is getting the list of object literal
datatypes used in an N-Triples dataset. This is also a somewhat involved alias
definition, and requires a modern AWK version such as
[`gawk`](https://web.archive.org/web/20100304/http://www.gnu.org/software/gawk/)
or
[`mawk`](https://web.archive.org/web/20100304/http://invisible-island.net/mawk/mawk.html):

```console
$ alias rdf-datatypes="awk -F'\x5E' '/\"\^\^</ { print substr(\$3, 1, length(\$3)-2) }' | uniq"

$ cat drupal.nt | rdf-datatypes | sort | uniq
<http://www.w3.org/2001/XMLSchema#decimal>
<http://www.w3.org/2001/XMLSchema#gYearMonth>
<http://www.w3.org/2001/XMLSchema#integer>
```

As we can see, most object literals in this dataset are untyped strings, but
there are some decimal and integer values as well as year + month literals.

## Aliasing N-Triples

As promised, here follow more robust versions of all the aforementioned Bash
aliases. Just copy and paste the following code snippet into your
`~/.bash_aliases` or `~/.bash_profile` file, and you will always have these
aliases available when working with N-Triples data on the command line.

```bash
# N-Triples aliases from http://blog.datagraph.org/2010/03/grepping-ntriples
alias rdf-count="awk '/^\s*[^#]/ { n += 1 } END { print n }'"
alias rdf-lengths="awk '/^\s*[^#]/ { print length }'"
alias rdf-length-avg="awk '/^\s*[^#]/ { n += 1; s += length } END { print s/n }'"
alias rdf-length-max="awk 'BEGIN { n=0 } /^\s*[^#]/ { if (length>n) n=length } END { print n }'"
alias rdf-length-min="awk 'BEGIN { n=1e9 } /^\s*[^#]/ { if (length>0 && length<n) n=length } END { print (n<1e9 ? n : 0) }'"
alias rdf-subjects="awk '/^\s*[^#]/ { print \$1 }' | uniq"
alias rdf-predicates="awk '/^\s*[^#]/ { print \$2 }' | uniq"
alias rdf-objects="awk '/^\s*[^#]/ { ORS=\"\"; for (i=3;i<=NF-1;i++) print \$i \" \"; print \"\n\" }' | uniq"
alias rdf-datatypes="awk -F'\x5E' '/\"\^\^</ { print substr(\$3, 2, length(\$3)-4) }' | uniq"
```

I should also note that though I've spoken throughout only in terms of
N-Triples, most of the above aliases will work fine also for input in
[N-Quads](https://web.archive.org/web/20100304/http://sw.deri.org/2008/07/n-quads/)
format.

In the next installments of *RDF for Intrepid Unix Hackers*, we'll attempt
something a little more ambitious: building a `rdf-query` alias to perform
subject-predicate-object queries on N-Triples input. We'll also see [what to do
if your RDF data isn't already in N-Triples
format](/2010/04/transmuting-ntriples), learning how to install and use the
[Raptor RDF Parser
Library](https://web.archive.org/web/20100304/http://librdf.org/raptor/) to
convert RDF data between the various popular RDF serialization formats. [Stay
tuned](https://web.archive.org/web/20100304/http://feeds.feedburner.com/datagraph).

*Lest there be any doubt, all the code in this tutorial is hereby released into
the public domain using the
[Unlicense](https://web.archive.org/web/20100304/http://unlicense.org/). You are
free to copy, modify, publish, use, sell and distribute it in any way you
please, with or without attribution.*
