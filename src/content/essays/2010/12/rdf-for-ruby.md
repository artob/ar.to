---
title: What's New in RDF.rb 0.3.0
date: '2010-12-30T13:00:00Z'
categories:
- Technology
tags:
- RDF
- Ruby
- RDF.rb
- linked data
- semantic web
- SPARQL
projects:
- rdf.rb
summary: RDF.rb 0.3.0 adds transactions, basic graph pattern queries, and fast parsers and serializers for RDFa, Notation3, Turtle, and RDF/XML.
original:
  url: http://blog.datagraph.org/2010/12/rdf-for-ruby
  archive: https://web.archive.org/web/20161228105332/http://blog.datagraph.org/2010/12/rdf-for-ruby
---

It has now been nine months since the [initial public
release](/2010/03/rdf-for-ruby) of
[RDF.rb](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/), our
[RDF](https://web.archive.org/web/20101230/http://www.w3.org/RDF/) library for
[Ruby](https://web.archive.org/web/20101230/http://www.ruby-lang.org/), and
today we're happy to announce the release of RDF.rb 0.3.0, a significant
milestone.

As the
[changelog](https://web.archive.org/web/20101230/https://github.com/bendiken/rdf/compare/0.2.3...0.3.0)
attests, this has been a long release cycle that incorporates 170 commits by 6
different authors. The major new features include transactions and basic graph
pattern (BGP) queries, as well as the availability of robust and fast
parser/serializer plugins for the RDFa, Notation3, Turtle, and RDF/XML formats,
complementing other already previously supported formats. In addition, many bugs
have been fixed and general improvements, including significant performance
improvements, implemented.

RDF.rb 0.3.0 is immediately available via
[RubyGems](https://web.archive.org/web/20101230/http://rubygems.org/), and can
be installed or upgraded to as follows on any Unix box with Ruby and RubyGems:

```console
$ [sudo] gem install rdf
```

In all the code examples that follow below, we will assume that RDF.rb and the
built-in N-Triples parser have already been loaded up like so:

```ruby
require 'rdf'
require 'rdf/ntriples'

# Enable facile references to standard vocabularies:
include RDF
```

## RDFa, N3, Turtle, and RDF/XML Support

While RDF.rb 0.3.0 continues with our [minimalist policy](/2010/03/rdf-for-ruby)
of only supporting the [N-Triples](/2010/03/grepping-ntriples) serialization
format in the core library itself, support for every widely-used RDF
serialization format is now available in the form of plugins.

Thanks to the hard work of [Gregg
Kellogg](https://web.archive.org/web/20101230/http://twitter.com/gkellogg), the
author of
[RdfContext](https://web.archive.org/web/20101230/https://github.com/gkellogg/rdf_context),
there are now RDF.rb 0.3.0-compatible plugins available for the RDFa, Notation3,
Turtle, and RDF/XML formats, complementing the already previously-available
plugins for the RDF/JSON and TriX formats. See [Gregg's blog
post](https://web.archive.org/web/20101230/http://www.kellogg-assoc.com/2010/12/27/rdf-rdfa-0-3-0)
for more details on the particulars of these plugins.

We are also pleased to announce that Gregg has joined the RDF.rb core
development team, which now consists of him, [Ben
Lavender](https://web.archive.org/web/20101230/http://twitter.com/bhuga), and
myself. This merger between the RDF.rb and RdfContext efforts is a perfect
match, given that Ben and I have been focused more on storing and querying RDF
data while Gregg has been busy single-handedly solving all RDF serialization
questions.

To facilitate typical [Linked
Data](https://web.archive.org/web/20101230/http://linkeddata.org/) use cases, we
now also provide a metadistribution of RDF.rb that includes a full set of
parsing/serialization plugins; the following will install all of the `rdf`,
`rdf-isomorphic`, `rdf-json`, `rdf-n3`, `rdf-rdfa`, `rdf-rdfxml`, and `rdf-trix`
gems in one go:

```console
$ [sudo] gem install linkeddata
```

Similarly, instead of loading up support for each RDF serialization format one
at a time, you can simply use the following to load them all; this is helpful
e.g. for the automatic selection of an appropriate parser plugin given a
particular file name or extension:

```ruby
require 'linkeddata'
```

For a tutorial introduction to RDF.rb's
[reader](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Reader.html)
and
[writer](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Writer.html)
APIs, please refer to my previous blog post [Parsing and Serializing RDF Data
with Ruby](/2010/04/parsing-rdf-with-ruby).

## Query API: Basic Graph Patterns (BGPs)

The [query
API](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Query.html)
in RDF.rb 0.3.0 now includes [basic graph
pattern](https://web.archive.org/web/20101230/http://www.w3.org/TR/rdf-sparql-query/#basicpatterns)
(BGP) support, which has been a much-requested feature. BGP queries will already
be a familiar concept to anyone using
[SPARQL](https://web.archive.org/web/20101230/http://en.wikipedia.org/wiki/SPARQL),
and in RDF.rb they are constructed and executed like this:

```ruby
# Load some RDF.rb project information into an in-memory graph:
graph = RDF::Graph.load("http://rdf.rubyforge.org/doap.nt")

# Construct a BGP query for obtaining developers' names and e-mails:
query = RDF::Query.new({
  :person => {
    RDF.type  => FOAF.Person,
    FOAF.name => :name,
    FOAF.mbox => :email,
  }
})

# Execute the query on our in-memory graph, printing out solutions:
query.execute(graph).each do |solution|
  puts "name=#{solution.name} email=#{solution.email}"
end
```

Executing a BGP query returns a solution sequence, encapsulated as an instance
of the
[`RDF::Query::Solutions`](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Query/Solutions.html)
class. Solution sequences provide a number of convenient methods for further
narrowing down the returned solutions to what you're actually looking for:

```ruby
# Filter solutions using a hash:
solutions.filter(:author  => RDF::URI("http://ar.to/#self"))
solutions.filter(:author  => "Arto Bendiken")
solutions.filter(:updated => RDF::Literal(Date.today))

# Filter solutions using a block:
solutions.filter { |solution| solution.author.literal? }
solutions.filter { |solution| solution.title =~ /^SPARQL/ }
solutions.filter { |solution| solution.price < 30.5 }
solutions.filter { |solution| solution.bound?(:date) }
solutions.filter { |solution| solution.age.datatype == XSD.integer }
solutions.filter { |solution| solution.name.language == :es }

# Reorder solutions based on a variable:
solutions.order_by(:updated)
solutions.order_by(:updated, :created)

# Select particular variables only:
solutions.select(:title)
solutions.select(:title, :description)

# Eliminate duplicate solutions:
solutions.distinct

# Limit the number of solutions:
solutions.offset(20).limit(10)

# Count the number of matching solutions:
solutions.count
solutions.count { |solution| solution.price < 30.5 }
```

BGP-capable storage adapters should override and implement the following
[`RDF::Queryable`](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Queryable.html)
method in order to provide storage-specific optimizations for BGP query
evaluation:

```ruby
class MyRepository < RDF::Repository
  def query_execute(query, &block)
    # ...
  end
end
```

## Repository API: Transactions

The [repository
API](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Repository.html)
in RDF.rb 0.3.0 now includes basic transaction support:

```ruby
# Load some RDF.rb project information into an in-memory repository:
repository = RDF::Repository.load("http://rdf.rubyforge.org/doap.nt")

# Delete one statement and insert another, atomically:
repository.transaction do |tx|
  subject = RDF::URI('http://rubygems.org/gems/rdf')

  tx.delete [subject, DOAP.name, nil]
  tx.insert [subject, DOAP.name, "RDF.rb 0.3.0"]
end
```

As you would expect, if the transaction block raises an exception, the current
transaction will be aborted and rolled back; otherwise, the transaction is
automatically committed when the block returns.

Transaction-capable storage adapters should override and implement the following
three
[`RDF::Repository`](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Repository.html)
methods:

```ruby
class MyRepository < RDF::Repository
  def begin_transaction(context)
    # ...
  end

  def rollback_transaction(tx)
    # ...
  end

  def commit_transaction(tx)
    # ...
  end
end
```

The
[`RDF::Transaction`](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/RDF/Transaction.html)
objects passed to these methods consist of a sequence of RDF statements to
delete from, and a sequence of RDF statements to insert into, a given graph. The
default transaction implementation in `RDF::Repository` simply builds up a
transaction object in memory, buffering all inserts/deletes until the
transaction is committed, at which point the operations are then executed
against the repository.

Note that whether transactions are *actually* executed atomically depends on the
particulars of the storage adapter you're using. For instance, the
[`RDF::DataObjects`](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/do/)
plugin, which provides a storage adapter supporting SQLite, PostgreSQL, MySQL,
and other RDBMS solutions, will certainly be able to offer ACID transaction
support (albeit it has not been updated for that, or other 0.3.x features, just
yet.)

On the other hand, not e.g. all [NoSQL](/2010/04/rdf-nosql-diff) solutions
support transactions, so storage adapters for such solutions may choose to omit
explicit transaction support and have it supplied by RDF.rb's default
implementation.

## Performance & Scalability Improvements

In earlier RDF.rb releases, our focus was strongly centered on defining the core
APIs that have enabled the thriving [plugin
ecosystem](https://web.archive.org/web/20101230/http://rubygems.org/search?query=rdf-)
we can witness today. The focus was not so much, therefore, on the performance
of the bundled default implementations of those APIs; in some cases, these
implementations could have been described as being of only proof-of-concept
quality.

In particular, the in-memory graph and repository implementations were
suboptimal in RDF.rb 0.1.x, and only somewhat improved in 0.2.x. However,
reflecting the increasing production-readiness of RDF.rb in general, matters
have been much improved in RDF.rb 0.3.0.

Of course, performance improvements are an open-ended task, and I'm sure we'll
see more work on this front in the future as need arises and time permits. But
it's likely that RDF.rb 0.3.0 now offers a *sufficient* out-of-the-box
performance level for many if not most common use cases.

Scalability has also been addressed by making use of
[enumerators](https://web.archive.org/web/20101230/http://ruby-doc.org/core-1.9/classes/Enumerator.html)
throughout the APIs defined by RDF.rb. That means that all operations are
generally performed in a *streaming* fashion, enabling you to build pipelines
for hundreds of millions of RDF statements to flow through while still
maintaining constant memory usage by ensuring that the statements are processed
one by one.

## RSpec 2.x Compatibility

Lastly, RDF.rb 0.3.0 has been upgraded to use and depend on
[RSpec](https://web.archive.org/web/20101230/http://relishapp.com/rspec) 2.x
instead of the previous 1.3.x branch. This requires minor changes to the
`spec/spec_helper.rb` file in any project that relies on the
[`RDF::Spec`](https://web.archive.org/web/20101230/http://rdf.rubyforge.org/spec/)
library. The most minimal `spec_helper.rb` contents are now as follows:

```ruby
require 'rdf/spec'

RSpec.configure do |config|
  config.include RDF::Spec::Matchers
end
```

## Kudos to Our Contributors

In tandem with the soon [10,000
downloads](https://web.archive.org/web/20101230/http://rubygems.org/gems/rdf) of
RDF.rb on
[RubyGems.org](https://web.archive.org/web/20101230/http://rubygems.org/), a
very positive sign of all the interest and ongoing work around RDF.rb is our
growing contributor list. We thank everyone who has sent in bug reports, and in
particular the following people who have contributed patches to RDF.rb and/or an
RDF.rb plugin; in alphabetical order:

[Călin Ardelean](https://web.archive.org/web/20101230/http://github.com/clnx),
[Christoph Badura](https://web.archive.org/web/20101230/http://github.com/b4d),
[John Fieber](https://web.archive.org/web/20101230/http://github.com/jfieber),
[Joey Geiger](https://web.archive.org/web/20101230/http://github.com/jgeiger),
[James
Hetherington](https://web.archive.org/web/20101230/http://github.com/jamespjh),
[Gabriel
Horner](https://web.archive.org/web/20101230/http://github.com/cldwalker),
[Nicholas Humfrey](https://web.archive.org/web/20101230/http://github.com/njh),
[Fumihiro Kato](https://web.archive.org/web/20101230/http://github.com/fumi),
[David
Nielsen](https://web.archive.org/web/20101230/http://github.com/drankard),
[Thamaraiselvan
Poomalai](https://web.archive.org/web/20101230/http://github.com/selvan), [Keita
Urashima](https://web.archive.org/web/20101230/http://github.com/ursm), [Pius
Uzamere](https://web.archive.org/web/20101230/http://github.com/pius), and
[Hellekin O.
Wolf](https://web.archive.org/web/20101230/http://github.com/hellekin).

(My apologies if I have inadvertently omitted anyone from the previous, and
please let me know about it.)

## Looking Forward to Hearing From You

As always, if you have feedback regarding RDF.rb please contact us either
[privately](https://web.archive.org/web/20101230/http://github.com/datagraph) or
via the
[public-rdf-ruby@w3.org](https://web.archive.org/web/20101230/http://lists.w3.org/Archives/Public/public-rdf-ruby/)
mailing list. Plain and simple bug reports, however, should more preferably go
directly to the [issue
queue](https://web.archive.org/web/20101230/http://github.com/bendiken/rdf/issues)
on GitHub.

Be sure to follow
[@datagraph](https://web.archive.org/web/20101230/http://twitter.com/datagraph),
[@bendiken](https://web.archive.org/web/20101230/http://twitter.com/bendiken),
[@bhuga](https://web.archive.org/web/20101230/http://twitter.com/bhuga), and
[@gkellogg](https://web.archive.org/web/20101230/http://twitter.com/gkellogg) on
Twitter for the latest updates on RDF.rb as they happen.
