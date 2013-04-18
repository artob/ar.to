#!/usr/bin/env ruby
# This is free and unencumbered software released into the public domain.

BUCKET = 's3://arto'

task :list do
  `s3cmd ls #{BUCKET}/ >&2`
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

task :upload => %w(foaf coding) do
  # Upload FOAF files:
  %w(json nq nt rdf ttl).each do |file_ext|
    fs_path = "foaf.#{file_ext}"
    s3_path = "#{BUCKET}/#{fs_path}"
    s3_type = case file_ext.to_sym
      when :json then 'application/json'
      when :nq   then 'application/n-quads'
      when :nt   then 'application/n-triples'
      when :rdf  then 'application/rdf+xml'
      when :ttl  then 'text/turtle'
    end
    puts "Uploading '#{fs_path}' to '#{s3_path}'..."
    `s3cmd put #{fs_path} #{s3_path} -P -m #{s3_type}`
  end

  # Upload coding notes:
  FileList['coding/*.html'].each do |fs_path|
    s3_path = "#{BUCKET}/#{fs_path.sub('.html', '')}"
    puts "Uploading '#{fs_path}' to '#{s3_path}'..."
    `s3cmd put #{fs_path} #{s3_path} -P -m text/html`
  end
end
