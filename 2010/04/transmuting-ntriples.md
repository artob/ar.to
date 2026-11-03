---
title: 'RDF for Intrepid Unix Hackers: Transmuting N-Triples'
date: '2010-04-05T09:00:00Z'
categories:
- Technology
tags:
- RDF
- Unix
- Raptor
- N-Triples
- Turtle
- RDF/XML
- RDF/JSON
- serialization
- tutorial
summary: How to install and use the Raptor RDF parser toolkit to convert RDF data from one serialization format to another, such as to N-Triples.
original:
  url: http://blog.datagraph.org/2010/04/transmuting-ntriples
  archive: https://web.archive.org/web/20161228093752/http://blog.datagraph.org/2010/04/transmuting-ntriples
---

This is the second part in an ongoing *RDF for Intrepid Unix Hackers* article
series. In the [previous part](/2010/03/grepping-ntriples), we learned how to
process [RDF](https://web.archive.org/web/20100405/http://www.w3.org/RDF/) data
in the line-oriented, whitespace-separated
[N-Triples](https://web.archive.org/web/20100405/http://en.wikipedia.org/wiki/N-Triples)
serialization format by pipelining standard Unix tools such as `grep` and `awk`.

That was all well and good, but what to do if your RDF data isn't already in
[N-Triples](https://web.archive.org/web/20100405/http://en.wikipedia.org/wiki/N-Triples)
format? Today we'll see how to install and use the excellent [Raptor RDF Parser
Library](https://web.archive.org/web/20100405/http://librdf.org/raptor/) to
convert RDF from one serialization format to another.

### Installing the Raptor RDF Parser tools

The [Raptor](https://web.archive.org/web/20100405/http://librdf.org/raptor/)
toolkit includes a handy command-line utility called
[`rapper`](https://web.archive.org/web/20100405/http://librdf.org/raptor/rapper.html),
which can be used to convert RDF data between most of the various popular RDF
serialization formats.

Installing Raptor is straightforward on most development and deployment
platforms; here's how to install Raptor on Mac OS X with
[MacPorts](https://web.archive.org/web/20100405/http://www.macports.org/) and on
any of the most common Linux and BSD distributions:

```console
$ [sudo] port install raptor             # Mac OS X with MacPorts
$ [sudo] fink install raptor-bin         # Mac OS X with Fink
$ [sudo] aptitude install raptor-utils   # Ubuntu / Debian
$ [sudo] yum install raptor              # Fedora / CentOS / RHEL
$ [sudo] zypper install raptor           # openSUSE
$ [sudo] emerge raptor                   # Gentoo Linux
$ [sudo] pacman -S raptor                # Arch Linux
$ [sudo] pkg_add -r raptor               # FreeBSD
$ [sudo] pkg_add raptor                  # OpenBSD / NetBSD
```

The subsequent examples all assume that you have successfully installed Raptor
and thus have the `rapper` utility available in your `$PATH`. To make sure that
`rapper` is indeed available, just ask it to output its version number as
follows:

```console
$ rapper --version
1.4.21
```

We'll be using version 1.4.21 for this tutorial, but any 1.4.x release from
1.4.5 onwards should do fine for present purposes -- so don't worry if your
distribution provides a slightly older version.

Should you have any trouble getting `rapper` set up, you can ask for help on the
[\#swig](https://web.archive.org/web/20100405/http://swig.xmlhack.com/) channel
on [IRC](https://web.archive.org/web/20100405/http://freenode.net/) or on the
Raptor [mailing
list](https://web.archive.org/web/20100405/http://librdf.org/lists/).

### Transmuting RDF/XML into N-Triples

[RDF/XML](https://web.archive.org/web/20100405/http://www.w3.org/TR/REC-rdf-syntax/)
is the standard RDF serialization specified by W3C back before the dot-com bust.
Despite some newer, more human-friendly formats, a great deal of the RDF data
out there in the wild is still made available in this format.

For example, every valid [RSS
1.0](https://web.archive.org/web/20100405/http://web.resource.org/rss/1.0/)-compatible
feed is, in principle, also a valid RDF/XML document (but note that the same is
*not* true for non-RDF formats like RSS 2.0 or Atom). So, let's grab the RSS
feed for this blog and define a Bash shell alias for converting RDF/XML into
N-Triples using `rapper`:

```console
$ alias rdf2nt="rapper -i rdfxml -o ntriples"

$ curl http://blog.datagraph.org/index.rss > index.rdf

$ rdf2nt index.rdf > index.nt
rapper: Parsing URI file://index.rdf with parser rdfxml
rapper: Serializing with serializer ntriples
rapper: Parsing returned 106 triples
```

Pretty easy, huh? It gets even easier, because `rapper` actually supports
fetching URLs directly. Typically Raptor is built with `libcurl` support, so it
supports the same set of URL schemes as does the `curl` command itself. This
means that e.g. any `http://`, `https://` and `ftp://` input arguments will work
right out of the box, so that we can combine our previous last two commands as
follows:

```console
$ rdf2nt http://blog.datagraph.org/index.rss > index.nt
rapper: Parsing URI http://blog.datagraph.org/index.rss with parser rdfxml
rapper: Serializing with serializer ntriples
rapper: Parsing returned 106 triples
```

### Transmuting Turtle into N-Triples

After RDF/XML,
[Turtle](https://web.archive.org/web/20100405/http://en.wikipedia.org/wiki/Turtle_(syntax))
is probably the most widespread RDF format out there. It is a subset of
[Notation3](https://web.archive.org/web/20100405/http://en.wikipedia.org/wiki/Notation3)
and a superset of N-Triples, hitting a sweet spot for both expressiveness and
conciseness. It is also much more pleasant to write by hand than XML, so
personal
[FOAF](https://web.archive.org/web/20100405/http://en.wikipedia.org/wiki/FOAF_(software))
files in particular tend to be authored in Turtle and then converted, e.g. using
`rapper`, into a variety of formats when published on the [Linked
Data](https://web.archive.org/web/20100405/http://linkeddata.org/) web.

For this next example, let's grab [my FOAF
file](https://web.archive.org/web/20100405/http://datagraph.org/bendiken/foaf)
in Turtle format and convert it into N-Triples:

```console
$ alias ttl2nt="rapper -i turtle -o ntriples"

$ ttl2nt http://datagraph.org/bendiken/foaf.ttl > foaf.nt
rapper: Parsing URI http://datagraph.org/bendiken/foaf.ttl with parser turtle
rapper: Serializing with serializer ntriples
rapper: Parsing returned 16 triples
```

Just as easy as with RDF/XML. And you'll notice that this time around we did the
downloading and the conversion in a single step by letting `rapper` worry about
fetching the data directly from the URL in question.

### Transmuting N-Triples into other formats

Conversely, you can of course also use `rapper` to convert any N-Triples input
data into other RDF serialization formats such as Turtle, RDF/XML and
[RDF/JSON](https://web.archive.org/web/20100405/http://n2.talis.com/wiki/RDF_JSON_Specification).
You need only swap the arguments to the `-i` and `-o` options and you're good to
go.

So, let's define a couple more handy aliases:

```console
$ alias nt2ttl="rapper -i ntriples -o turtle"
$ alias nt2rdf="rapper -i ntriples -o rdfxml-abbrev"
$ alias nt2json="rapper -i ntriples -o json"
```

Now we can quickly and easily convert any N-Triples data into other RDF formats:

```console
$ nt2ttl  index.nt > index.ttl
$ nt2rdf  index.nt > index.rdf
$ nt2json index.nt > index.json
```

We can define similar aliases for any input/output permutation provided by
`rapper`. To find out the full list of input and output RDF serialization
formats supported by your version of the program, run `rapper --help`:

```console
$ rapper --help
...
Main options:
  -i FORMAT, --input FORMAT   Set the input format/parser to one of:
    rdfxml          RDF/XML (default)
    ntriples        N-Triples
    turtle          Turtle Terse RDF Triple Language
    trig            TriG - Turtle with Named Graphs
    rss-tag-soup    RSS Tag Soup
    grddl           Gleaning Resource Descriptions from Dialects of Languages
    guess           Pick the parser to use using content type and URI
    rdfa            RDF/A via librdfa
...
  -o FORMAT, --output FORMAT  Set the output format/serializer to one of:
    ntriples        N-Triples (default)
    turtle          Turtle
    rdfxml-xmp      RDF/XML (XMP Profile)
    rdfxml-abbrev   RDF/XML (Abbreviated)
    rdfxml          RDF/XML
    rss-1.0         RSS 1.0
    atom            Atom 1.0
    dot             GraphViz DOT format
    json-triples    RDF/JSON Triples
    json            RDF/JSON Resource-Centric
...
```

### Defining more `rapper` aliases

Copy and paste the following code snippet into your `~/.bash_aliases` or
`~/.bash_profile` file, and you will always have these aliases available when
working with RDF data on the command line:

```bash
# rapper aliases from http://blog.datagraph.org/2010/04/transmuting-ntriples
alias any2nt="rapper -i guess -o ntriples"         # Anything to N-Triples
alias any2ttl="rapper -i guess -o turtle"          # Anything to Turtle
alias any2rdf="rapper -i guess -o rdfxml-abbrev"   # Anything to RDF/XML
alias any2json="rapper -i guess -o json"           # Anything to RDF/JSON
alias nt2ttl="rapper -i ntriples -o turtle"        # N-Triples to Turtle
alias nt2rdf="rapper -i ntriples -o rdfxml-abbrev" # N-Triples to RDF/XML
alias nt2json="rapper -i ntriples -o json"         # N-Triples to RDF/JSON
alias ttl2nt="rapper -i turtle -o ntriples"        # Turtle to N-Triples
alias ttl2rdf="rapper -i turtle -o rdfxml-abbrev"  # Turtle to RDF/XML
alias ttl2json="rapper -i turtle -o json"          # Turtle to RDF/JSON
alias rdf2nt="rapper -i rdfxml -o ntriples"        # RDF/XML to N-Triples
alias rdf2ttl="rapper -i rdfxml -o turtle"         # RDF/XML to Turtle
alias rdf2json="rapper -i rdfxml -o json"          # RDF/XML to RDF/JSON
alias json2nt="rapper -i json -o ntriples"         # RDF/JSON to N-Triples
alias json2ttl="rapper -i json -o ntriples"        # RDF/JSON to N-Triples
alias json2rdf="rapper -i json -o ntriples"        # RDF/JSON to N-Triples
```

Since each of these aliases is a mnemonic patterned after the file extensions
for the input and output formats involved, remembering these is easy as pie.
Note also that I've included four `any2*` aliases that specify `guess` as the
input format to let `rapper` try and automatically detect the serialization
format for the input stream.

A big thanks goes out to [Dave
Beckett](https://web.archive.org/web/20100405/http://www.dajobe.org/) for having
developed Raptor and for giving us the superbly useful N-Triples and Turtle
serialization formats. I personally use `rapper` and these aliases just about
every single day, and I hope you find them as useful as I have.

[Stay
tuned](https://web.archive.org/web/20100405/http://feeds.feedburner.com/datagraph)
for more upcoming installments of *RDF for Intrepid Unix Hackers*.

*Lest there be any doubt, all the code in this tutorial is hereby released into
the public domain using the
[Unlicense](https://web.archive.org/web/20100405/http://unlicense.org/). You are
free to copy, modify, publish, use, sell and distribute it in any way you
please, with or without attribution.*
