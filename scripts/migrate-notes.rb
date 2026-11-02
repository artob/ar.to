#!/usr/bin/env ruby
# Migrates the pre-Hugo reStructuredText notes in `attic/attic/notes/` into
# the `notes` content collection in `src/content/notes/`. Requires `pandoc`.
# Idempotent: rerunning overwrites the output.
# Usage: ruby scripts/migrate-notes.rb
require 'fileutils'
require 'open3'
require 'yaml'

ROOT = File.expand_path('..', __dir__)
SRC = File.join(ROOT, 'attic/attic/notes')
DST = File.join(ROOT, 'src/content/notes')

# Index weights (0-5; higher means more prominent), keyed by note name.
WEIGHTS = File.readlines(File.join(SRC, '.weights.tsv'), chomp: true)
  .to_h { |row| name, weight = row.split("\t"); [name, weight.to_i] }

def pandoc(rst, *args)
  out, err, status = Open3.capture3(
    'pandoc', '--from=rst', '--to=gfm', '--wrap=none',
    "--lua-filter=#{File.join(__dir__, 'pandoc-fence.lua')}", *args,
    stdin_data: rst, chdir: SRC,
  )
  abort "pandoc failed: #{err}" unless status.success?
  warn err unless err.empty?
  out.sub(/\A\n+/, '').rstrip
end

def migrate(path)
  name = File.basename(path, '.rst')
  lines = File.readlines(path)
  # The title block is an overline, `Arto's Notes re: <title>`, and an
  # underline, all within the first three lines.
  index = lines.first(3).index { _1.include?(" re: ") }
  abort "missing title in #{path}" unless index
  title = pandoc(lines[index].split(' re: ', 2).last)
  body = lines.drop(index + 2).join

  data = { 'title' => title }
  data['weight'] = WEIGHTS[name] if WEIGHTS[name]&.positive?
  yaml = data.to_yaml(line_width: -1).delete_prefix("---\n")
  body = pandoc(body, '--shift-heading-level-by=1')
    .gsub(%r{<span class="strike">(.*?)</span>}, '~~\1~~')
    .gsub(/^> \[!NOTE\]\n> /, '> **Note:** ')
    .gsub(/^``` (\w+)$/, '```\1')
  File.write(File.join(DST, "#{name}.md"), "---\n#{yaml}---\n\n#{body}\n")
  name
end

FileUtils.rm_rf(DST)
FileUtils.mkdir_p(DST)
# Only notes tracked in git were ever published.
tracked = Dir.chdir(SRC) { `git ls-files -- '*.rst'`.split("\n") }
tracked.sort.each { puts migrate(File.join(SRC, _1)) }
