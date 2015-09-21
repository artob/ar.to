#!/usr/bin/env ruby
# This is free and unencumbered software released into the public domain.
require 'rake/clean'

GIT_FILES = `git ls-files`.split("\n").freeze
BUCKET    = 's3://arto'
NOTES     = FileList['notes/*.rst'].exclude { |f| !GIT_FILES.include?(f) }

NOTES_OUTPUT = NOTES.ext('.html')

CLEAN.include(NOTES_OUTPUT)

task :default => :help

task :list do
  sh "s3cmd ls #{BUCKET}/ >&2"
end

rule '.html' => '.rst' do |task|
  sh "python .rst2html/rst2html.py #{task.source} > #{task.name}"
end

rule '.json' => '.ttl' do |task|
  sh "rapper -i turtle -o json #{task.source} > #{task.name}"
end

rule '.nq' => '.ttl' do |task|
  sh "rapper -i turtle -o ntriples #{task.source} | sort > #{task.name}"
end

rule '.nt' => '.ttl' do |task|
  sh "rapper -i turtle -o ntriples #{task.source} | sort > #{task.name}"
end

rule '.rdf' => '.ttl' do |task|
  sh "rapper -i turtle -o rdfxml-abbrev #{task.source} > #{task.name}"
end

task :foaf => %w(foaf.json foaf.nq foaf.nt foaf.rdf)

#multitask :notes => NOTES_OUTPUT
task :notes => NOTES_OUTPUT

task :upload => %w(foaf notes) do
  puts "Uploading 'index.html' to '#{BUCKET}/'..."
  #sh "s3cmd put index.html #{BUCKET}/ -P -m application/xhtml+xml"

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
    #sh "s3cmd put #{fs_path} #{s3_path} -P -m #{s3_type}"
  end

  # Upload notes:
  FileList['notes/*.html'].each do |fs_path|
    s3_path = "#{BUCKET}/#{fs_path.sub('.html', '')}"
    puts "Uploading '#{fs_path}' to '#{s3_path}'..."
    #sh "s3cmd del #{s3_path}"
    sh "s3cmd put #{fs_path} #{s3_path} -P -m text/html --add-header=Cache-Control:max-age=60"
  end
end
