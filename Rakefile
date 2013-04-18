#!/usr/bin/env ruby
# This is free and unencumbered software released into the public domain.

BUCKET = 's3://arto/'

task :list do
  `s3cmd ls #{BUCKET} >&2`
end

rule '.html' => '.rst' do |task|
  `rst2html.py #{task.source} > #{task.name}`
end

rule '.json' => '.ttl' do |task|
  `rapper -i turtle -o json #{task.source} > #{task.name}`
end

rule '.nq' => '.ttl' do |task|
  `rapper -i turtle -o ntriples #{task.source} | sort > #{task.name}`
end

rule '.nt' => '.ttl' do |task|
  `rapper -i turtle -o ntriples #{task.source} | sort > #{task.name}`
end

rule '.rdf' => '.ttl' do |task|
  `rapper -i turtle -o rdfxml-abbrev #{task.source} > #{task.name}`
end

task :foaf => %w(foaf.json foaf.nq foaf.nt foaf.rdf)

task :coding => FileList['coding/*.rst'].map { |p| p.sub('.rst', '.html') }

task :upload => %w(foaf) do
  `s3cmd put foaf.json #{BUCKET} -P -m application/json -v`
  `s3cmd put foaf.nq #{BUCKET} -P -m application/n-quads -v`
  `s3cmd put foaf.nt #{BUCKET} -P -m application/n-triples -v`
  `s3cmd put foaf.rdf #{BUCKET} -P -m application/rdf+xml -v`
  `s3cmd put foaf.ttl #{BUCKET} -P -m text/turtle -v`
  `s3cmd put foaf.ttl #{BUCKET}/coding -P -m text/html -v`
end
