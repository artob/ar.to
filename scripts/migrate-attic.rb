#!/usr/bin/env ruby
# Migrates the legacy Hugo content in `attic/content/` into Astro content
# collections in `src/content/`. Idempotent: rerunning overwrites the output.
# Usage: ruby scripts/migrate-attic.rb
require 'date'
require 'fileutils'
require 'yaml'

ROOT = File.expand_path('..', __dir__)
SRC = File.join(ROOT, 'attic/content')
DST = File.join(ROOT, 'src/content')
SECTIONS = %w[essays talks reviews projects].freeze

# Legacy key => new key, in output order. Keys not listed here are dropped
# (`type`, `url`, `featured`, `publishDate`).
KEYS = {
  'title' => 'title',
  'subtitle' => 'subtitle',
  'date' => 'date',
  'date_end' => 'dateEnd',
  'all_day' => 'allDay',
  'lastmod' => 'updated',
  'draft' => 'draft',
  'authors' => 'authors',
  'event' => 'event',
  'event_url' => 'eventUrl',
  'location' => 'location',
  'categories' => 'categories',
  'tags' => 'tags',
  'projects' => 'projects',
  'summary' => 'summary',
  'abstract' => 'abstract',
  'url_video' => 'video',
  'url_slides' => 'slides',
  'url_pdf' => 'pdf',
  'url_code' => 'code',
  'links' => 'links',
}.freeze

def blank?(value)
  value.nil? || value == false || (value.respond_to?(:empty?) && value.empty?)
end

def youtube_embed(id)
  %(<iframe class="video" src="https://www.youtube-nocookie.com/embed/#{id}" ) +
    %(title="YouTube video" loading="lazy" allowfullscreen></iframe>)
end

def migrate(path)
  section, rest = path.delete_prefix("#{SRC}/").split('/', 2)
  # Page bundles (`2017/03/foo/index.md`) become leaf files (`2017/03/foo.md`).
  id = rest.delete_suffix('/index.md').delete_suffix('.md')
  _, yaml, body = File.read(path).split(/^---\n/, 3)
  old = YAML.safe_load(yaml, permitted_classes: [Date, Time])

  new = {}
  KEYS.each do |from, to|
    value = old[from]
    value = value.iso8601 if value.is_a?(Time) || value.is_a?(Date)
    new[to] = value unless blank?(value)
  end
  new.delete('authors') if new['authors'] == ['arto']
  new.delete('abstract') if new['abstract'] == new['summary']
  # Drop boilerplate "Follow" links; keep only name and URL.
  links = Array(new.delete('links')).reject { _1['name'] == 'Follow' }
  new['links'] = links.map { _1.slice('name', 'url') } unless links.empty?
  new['lang'] = 'uk' if new['title'].match?(/\p{Cyrillic}/)

  out = File.join(DST, section, "#{id}.md")
  FileUtils.mkdir_p(File.dirname(out))
  slug = File.basename(id)

  # A page bundle's featured image becomes a sibling `<slug>.<ext>` file.
  if path.end_with?('/index.md')
    featured = Dir[File.join(File.dirname(path), '*featured.*')].first
    if featured
      image = "#{slug}#{File.extname(featured)}"
      FileUtils.cp(featured, File.join(File.dirname(out), image))
      new['image'] = "./#{image}"
    end
  end

  body = body.gsub(/\{\{<\s*youtube\s+(\S+)\s*>\}\}/) { youtube_embed($1) }
  # The one essay whose body references a month-directory image.
  refs = body.scan(%r{\(/#{section}/(\d{4}/\d{2}/featured\.\w+)\)})
  refs.flatten.uniq.each do |ref|
    image = "#{slug}#{File.extname(ref)}"
    source = File.join(SRC, section, ref)
    FileUtils.cp(source, File.join(File.dirname(out), image))
    body = body.gsub("(/#{section}/#{ref})", "(./#{image})")
  end

  yaml = new.to_yaml(line_width: -1).delete_prefix("---\n")
  File.write(out, "---\n#{yaml}---\n#{body}")
  out
end

SECTIONS.each { FileUtils.rm_rf(File.join(DST, _1)) }
files = Dir[File.join(SRC, "{#{SECTIONS.join(',')}}/**/*.md")]
files.reject { File.basename(_1) == '_index.md' }.sort.each do |path|
  puts migrate(path).delete_prefix("#{ROOT}/")
end
