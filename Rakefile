#!/usr/bin/env ruby
# This is free and unencumbered software released into the public domain.

BUCKET = 's3://arto/'

file 'foaf.json' => 'foaf.ttl' do
  `rapper -i turtle -o json foaf.ttl > foaf.json`
end

file 'foaf.nq' => 'foaf.ttl' do
  `rapper -i turtle -o ntriples foaf.ttl | sort > foaf.nq`
end

file 'foaf.nt' => 'foaf.ttl' do
  `rapper -i turtle -o ntriples foaf.ttl | sort > foaf.nt`
end

file 'foaf.rdf' => 'foaf.ttl' do
  `rapper -i turtle -o rdfxml-abbrev foaf.ttl > foaf.rdf`
end

task :foaf => %w(foaf.json foaf.nq foaf.nt foaf.rdf)

task :list do
  `s3cmd ls #{BUCKET} >&2`
end

task :upload => %w(foaf) do
  `s3cmd put foaf.json #{BUCKET} -P -m application/json -v`
  `s3cmd put foaf.nq #{BUCKET} -P -m application/n-quads -v`
  `s3cmd put foaf.nt #{BUCKET} -P -m application/n-triples -v`
  `s3cmd put foaf.rdf #{BUCKET} -P -m application/rdf+xml -v`
  `s3cmd put foaf.ttl #{BUCKET} -P -m text/turtle -v`
end
