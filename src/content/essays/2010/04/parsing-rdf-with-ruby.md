---
title: Parsing and Serializing RDF Data with Ruby
date: '2010-04-21T16:00:00Z'
categories:
- Technology
tags:
- RDF
- Ruby
- RDF.rb
- parsing
- serialization
- tutorial
projects:
- rdf.rb
summary: A tutorial on parsing and serializing the various RDF-based Linked Data formats with the RDF.rb library for Ruby.
original:
  url: http://blog.datagraph.org/2010/04/parsing-rdf-with-ruby
  archive: https://web.archive.org/web/20161228142059/http://blog.datagraph.org/2010/04/parsing-rdf-with-ruby
---

In this tutorial we'll learn how to parse and serialize
[RDF](https://web.archive.org/web/20100421/http://www.w3.org/RDF/) data using
the [RDF.rb](/2010/03/rdf-for-ruby) library for
[Ruby](https://web.archive.org/web/20100421/http://ruby-lang.org/). There exist
a number of [Linked
Data](https://web.archive.org/web/20100421/http://linkeddata.org/) serialization
formats based on RDF, and you can use most of them with RDF.rb.

To follow along and try out the code examples in this tutorial, you need only a
computer with Ruby and
[RubyGems](https://web.archive.org/web/20100421/http://rubygems.org/) installed.
Any recent Ruby 1.8.x or 1.9.x version will do fine, as will JRuby 1.4.0 or
newer.

## Supported RDF formats

These are the RDF serialization formats that you can parse and serialize with
RDF.rb at present:

```ruby
Format      | Implementation        | RubyGems gem
------------|-----------------------|-------------
N-Triples   | RDF::NTriples         | rdf
Turtle      | RDF::Raptor::Turtle   | rdf-raptor
RDF/XML     | RDF::Raptor::RDFXML   | rdf-raptor
RDFa        | RDF::Raptor::RDFa     | rdf-raptor
RDF/JSON    | RDF::JSON             | rdf-json
TriX        | RDF::TriX             | rdf-trix
```

RDF.rb in and of itself is a relatively lightweight gem that includes built-in
support only for the [N-Triples](/2010/03/grepping-ntriples) format. Support for
the other listed formats is available through add-on plugins such as
[RDF::Raptor](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/raptor/),
[RDF::JSON](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/json/)
and
[RDF::TriX](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/trix/),
each one packaged as a separate gem. This approach keeps the core library fleet
on its metaphorical feet and avoids introducing any XML or JSON parser
dependencies for RDF.rb itself.

Installing support for all these formats in one go is easy enough:

```console
$ sudo gem install rdf rdf-raptor rdf-json rdf-trix
Successfully installed rdf-0.1.9
Successfully installed rdf-raptor-0.2.1
Successfully installed rdf-json-0.1.0
Successfully installed rdf-trix-0.0.3
4 gems installed
```

Note that the RDF::Raptor gem requires that the [Raptor RDF
Parser](https://web.archive.org/web/20100421/http://librdf.org/raptor/) library
and command-line tools be available on the system where it is used. Here follow
quick and easy Raptor installation instructions for the Mac and the most common
Linux and BSD distributions:

```console
$ sudo port install raptor             # Mac OS X with MacPorts
$ sudo fink install raptor-bin         # Mac OS X with Fink
$ sudo aptitude install raptor-utils   # Ubuntu / Debian
$ sudo yum install raptor              # Fedora / CentOS / RHEL
$ sudo zypper install raptor           # openSUSE
$ sudo emerge raptor                   # Gentoo Linux
$ sudo pkg_add -r raptor               # FreeBSD
$ sudo pkg_add raptor                  # OpenBSD / NetBSD
```

*For more information on installing and using Raptor, see our previous tutorial
[RDF for Intrepid Unix Hackers: Transmuting
N-Triples](/2010/04/transmuting-ntriples).*

## Consuming RDF data

If you're in a hurry and just want to get to consuming RDF data right away, the
following is really the only thing you need to know:

```ruby
require 'rdf'
require 'rdf/ntriples'

graph = RDF::Graph.load("http://datagraph.org/jhacker/foaf.nt")
```

In this example, we first load up RDF.rb as well as support for the N-Triples
format. After that, we use a convenience method on the
[`RDF::Graph`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Graph.html)
class to fetch and parse RDF data directly from a web URL in one go. (The `load`
method can take either a file name or a URL.)

All RDF.rb parser plugins declare which MIME content types and file extensions
they are capable of handling, which is why in the above example RDF.rb knows how
to instantiate an N-Triples parser to read the `foaf.nt` file at the given URL.

In the same way, RDF.rb will auto-detect any other RDF file formats as long as
you've loaded up support for them using one or more of the following:

```ruby
require 'rdf/ntriples' # Support for N-Triples (.nt)
require 'rdf/raptor'   # Support for RDF/XML (.rdf) and Turtle (.ttl)
require 'rdf/json'     # Support for RDF/JSON (.json)
require 'rdf/trix'     # Support for TriX (.xml)
```

Note that if you need to read RDF files containing multiple named graphs (in a
serialization format that supports named graphs, such as TriX), you probably
want to be using
[`RDF::Repository`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Repository.html)
instead of `RDF::Graph`:

```ruby
repository = RDF::Repository.load("http://datagraph.org/jhacker/foaf.nt")
```

The difference between the two is that RDF statements in `RDF::Repository`
instances can contain an optional context (i.e. they can be *quads*), whereas
statements in an `RDF::Graph` instance always have the same context (i.e. they
are *triples*). In other words, repositories contain one or more graphs, which
you can access as follows:

```ruby
repository.each_graph do |graph|
  puts graph.inspect
end
```

## Introspecting RDF formats

RDF.rb's parsing and serialization APIs are based on the following three base
classes:

- [`RDF::Format`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Format.html)
  is used to describe particular RDF serialization formats.
- [`RDF::Reader`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Reader.html)
  is the base class for RDF parser implementations.
- [`RDF::Writer`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Writer.html)
  is the base class for RDF serializer implementations.

If you know something about the file format you want to parse or serialize, you
can obtain a format specifier class for it in any of the following ways:

```ruby
require 'rdf/raptor'

RDF::Format.for(:rdfxml)       #=> RDF::Raptor::RDFXML::Format
RDF::Format.for("input.rdf")
RDF::Format.for(:file_name      => "input.rdf")
RDF::Format.for(:file_extension => "rdf")
RDF::Format.for(:content_type   => "application/rdf+xml")
```

Once you have such a format specifier class, you can then obtain the
parser/serializer implementations for it as follows:

```ruby
format = RDF::Format.for("input.nt")   #=> RDF::NTriples::Format
reader = format.reader                 #=> RDF::NTriples::Reader
writer = format.writer                 #=> RDF::NTriples::Writer
```

There also exist corresponding factory methods on `RDF::Reader` and
`RDF::Writer` directly:

```ruby
reader = RDF::Reader.for("input.nt")   #=> RDF::NTriples::Reader
writer = RDF::Writer.for("output.nt")  #=> RDF::NTriples::Writer
```

The above is what RDF.rb relies on internally to obtain the correct parser
implementation when you pass in a URL or file name to `RDF::Graph.load` -- or
indeed to any other method that needs to auto-detect a serialization format and
to delegate responsibility for parsing/serialization to the appropriate
implementation class.

## Parsing RDF data

If you need to be more explicit about parsing RDF data, for instance because the
dataset won't fit into memory and you wish to process it statement by statement,
you'll need to use
[`RDF::Reader`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Reader.html)
directly.

### Parsing RDF statements from a file

RDF parser implementations generally support a streaming-compatible subset of
the
[`RDF::Enumerable`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Enumerable.html)
interface, all of which is based on the `#each_statement` method. Here's how to
read in an RDF file enumerated statement by statement:

```ruby
require 'rdf/raptor'

RDF::Reader.open("foaf.rdf") do |reader|
  reader.each_statement do |statement|
    puts statement.inspect
  end
end
```

Using `RDF::Reader.open` with a Ruby block ensures that the input file is
automatically closed after you're done with it.

### Parsing RDF statements from a URL

As before, you can generally use an `http://` or `https://` URL anywhere that
you could use a file name:

```ruby
require 'rdf/json'

RDF::Reader.open("http://datagraph.org/jhacker/foaf.json") do |reader|
  reader.each_statement do |statement|
    puts statement.inspect
  end
end
```

### Parsing RDF statements from a string

Sometimes you already have the serialized RDF contents in a memory buffer
somewhere, for example as retrieved from a database. In such a case, you'll want
to obtain the parser implementation class as shown before, and then use
`RDF::Reader.new` directly:

```ruby
require 'rdf/ntriples'

input = open('http://datagraph.org/jhacker/foaf.nt').read

RDF::Reader.for(:ntriples).new(input) do |reader|
  reader.each_statement do |statement|
    puts statement.inspect
  end
end
```

The `RDF::Reader` constructor uses duck typing and accepts any input (for
example, `IO` or `StringIO` objects) that responds to the `#readline` method. If
no input argument is given, input data will by default be read from the standard
input.

## Serializing RDF data

Serializing RDF data works much the same way as parsing: when serializing to a
named output file, the correct serializer implementation is auto-detected based
on the given file extension.

### Serializing RDF statements into an output file

RDF serializer implementations generally support an append-only subset of the
[`RDF::Mutable`](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/RDF/Mutable.html)
interface, primarily the `#insert` method and its alias `#<<`. Here's how to
write out an RDF file statement by statement:

```ruby
require 'rdf/ntriples'
require 'rdf/raptor'

data = RDF::Graph.load("http://datagraph.org/jhacker/foaf.nt")

RDF::Writer.open("output.rdf") do |writer|
  data.each_statement do |statement|
    writer << statement
  end
end
```

Once again, using `RDF::Writer.open` with a Ruby block ensures that the output
file is automatically flushed and closed after you're done writing to it.

### Serializing RDF statements into a string result

A common use case is serializing an RDF graph into a string buffer, for example
when serving RDF data from a
[Rails](https://web.archive.org/web/20100421/http://www.rubyonrails.org/)
application. `RDF::Writer` has a convenience `buffer` class method that builds
up output in a `StringIO` under the covers and then returns a string when all is
said and done:

```ruby
require 'rdf/ntriples'

output = RDF::Writer.for(:ntriples).buffer do |writer|
  subject = RDF::Node.new
  writer << [subject, RDF.type, RDF::FOAF.Person]
  writer << [subject, RDF::FOAF.name, "J. Random Hacker"]
  writer << [subject, RDF::FOAF.mbox, RDF::URI("mailto:jhacker@example.org")]
  writer << [subject, RDF::FOAF.nick, "jhacker"]
end
```

### Customizing the serializer output

If a particular serializer implementation supports options such as namespace
prefix declarations or a base URI, you can pass in those options to
`RDF::Writer.open` or `RDF::Writer.new` as keyword arguments:

```ruby
RDF::Writer.open("output.ttl", :base_uri => "http://rdf.rubyforge.org/")
RDF::Writer.for(:rdfxml).new($stdout, :base_uri => "http://rdf.rubyforge.org/")
```

## Support channels

That's all for now, folks. For more information on the APIs touched upon in this
tutorial, please refer to the RDF.rb [API
documention](https://web.archive.org/web/20100421/http://rdf.rubyforge.org/). If
you have any questions, don't hesitate to ask for help on
[\#swig](https://web.archive.org/web/20100421/http://swig.xmlhack.com/) or the
[public-rdf-ruby@w3.org](https://web.archive.org/web/20100421/http://lists.w3.org/Archives/Public/public-rdf-ruby/)
mailing list.
