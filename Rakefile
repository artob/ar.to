#!/usr/bin/env ruby
# This is free and unencumbered software released into the public domain.
require 'rake/clean'

GIT_FILES = `git ls-files`.split("\n").freeze
BASE_URI  = 'http://ar.to'
S3_BUCKET = 's3://arto'
NOTES     = FileList['notes/*.rst'].exclude { |f| !GIT_FILES.include?(f) }

NOTES_OUTPUT = NOTES.ext('.html')

CLEAN.include('notes/index.html')
CLEAN.include(NOTES_OUTPUT)

def render(locals = {})
  footer = locals.delete(:footer)
  %w(title body_pre_docinfo docinfo body).each do |var|
    locals[var] ||= '' # default value
  end
  locals[:body] += '<hr/>%s' % File.read('.rst2html/footer.html') if footer
  html = File.read('.rst2html/template.html')
  locals.each { |k, v| html.gsub!("%(#{k})s", v) }
  html
end

task :default do sh "rake -T" end

task :list do
  sh "s3cmd ls #{S3_BUCKET}/ >&2"
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

task :index => 'notes/index.html'

task 'notes/index.html' => NOTES do |task|
  title = "Arto's Notes".freeze
  title_regexp = / re: (.*)$/.freeze
  notes = {}
  task.sources.each do |note|
    header = File.open(note).readlines.first(3).detect { |line| title_regexp === line }
    next if header.nil?
    header.chomp =~ title_regexp
    abort "missing title for #{note}" if $1.nil?
    notes[note.ext('')] = $1
  end
  File.open(task.name, 'w') do |output|
    output.write(render({
      title: title,
      body_pre_docinfo: %Q(<h1 class="title">#{title}</h1>),
      body: notes.inject("") do |body, (path, title)|
        body << (%Q(<a href="#{BASE_URI}/%s">%s</a>&nbsp;&nbsp;\n) % [path, title])
      end,
      footer: true
    }))
  end
end

multitask :notes => NOTES_OUTPUT
#task :notes => NOTES_OUTPUT

task :upload => %w(foaf notes) do
  puts "Uploading 'index.html' to '#{S3_BUCKET}/'..."
  sh "s3cmd put index.html #{S3_BUCKET}/ -P -m application/xhtml+xml"
  return

  # Upload FOAF files:
  %w(json nq nt rdf ttl).each do |file_ext|
    fs_path = "foaf.#{file_ext}"
    s3_path = "#{S3_BUCKET}/#{fs_path}"
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
  FileList['notes/*.html'].exclude('notes/index.html').each do |fs_path|
    s3_path = "#{S3_BUCKET}/#{fs_path.sub('.html', '')}"
    puts "Uploading '#{fs_path}' to '#{s3_path}'..."
    #sh "s3cmd del #{s3_path}"
    sh "s3cmd put #{fs_path} #{s3_path} -P -m text/html --add-header=Cache-Control:max-age=60"
  end

  # Upload notes index:
  puts "Uploading 'notes/index.html' to '#{S3_BUCKET}/notes'..."
  sh "s3cmd put notes/index.html #{S3_BUCKET}/notes -P -m text/html --add-header=Cache-Control:max-age=60"
end
