#!/bin/sh
# Renders the link-preview cards in public/og/ from scripts/og/card.html,
# using a local Google Chrome (headless). Rerun after changing the template,
# the portrait, or the texts below; the output is committed.
# Usage: scripts/og-cards.sh
set -eu
cd "$(dirname "$0")/.."
chrome=${CHROME:-'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}
template="file://$PWD/scripts/og/card.html"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

card() { # name, title, subtitle, path, extra query
  png="$tmp/$(echo "$1" | tr / _).png"
  query=$(ruby -ruri -e 'print URI.encode_www_form(title: ARGV[0], subtitle: ARGV[1], path: ARGV[2])' "$2" "$3" "$4")
  "$chrome" --headless=new --disable-gpu --hide-scrollbars \
    --allow-file-access-from-files --force-device-scale-factor=1 \
    --window-size=1200,630 --virtual-time-budget=3000 \
    --screenshot="$png" "$template?$query${5:-}" 2>/dev/null
  sips -s format jpeg -s formatOptions 88 "$png" --out "public/og/$1.jpg" >/dev/null
  echo "public/og/$1.jpg"
}

mkdir -p public/og
card home 'Arto Bendiken' \
  'Autodidact, coder, cypherpunk, entrepreneur, hacker, and maker.' '' '&hero=1'
card talks "Arto's Talks" 'My upcoming & recent presentations.' /talks
card essays "Arto's Essays" 'My scribblings on various topics.' /essays
card publications "Arto's Publications" 'My papers and reports.' /publications
card projects "Arto's Projects" 'My open-source projects & initiatives.' /projects
card reviews "Arto's Reviews" 'My book reviews.' /reviews
card notes "Arto's Notes" 'My notes on hundreds of topics, from 3D graphics to ZFS.' /notes
card tags "Arto's Tags" 'Everything on ar.to, by topic.' /tags

# Entries without a featured image (essays, projects) get their own card at
# public/og/<collection>/<id>.jpg, which src/lib/preview.ts picks up.
ruby -ryaml -rdate -e '
  Dir["src/content/{essays,projects}/**/*.md"].sort.each do |path|
    data = YAML.safe_load(File.read(path)[/\A---\n(.*?)\n---\n/m, 1],
      permitted_classes: [Date, Time])
    next if data["image"] || data["draft"]
    id = path.delete_prefix("src/content/").delete_suffix(".md")
    url = id.start_with?("projects/") ? "/#{id}" : id.sub(%r{\A\w+}, "")
    plain = ->(s) { s.to_s.gsub(/\[([^\]]+)\]\([^)]+\)/, "\\1").gsub(/(^|\s)[_*](.+?)[_*]/, "\\1\\2").delete("`") }
    byline = (data["authors"] || ["Arto Bendiken"]).join(" and ")
    puts [id, data["title"], plain.(data["subtitle"] || data["summary"]), url, byline].join("\t")
  end' | while IFS='	' read -r id title subtitle path byline; do
  mkdir -p "public/og/$(dirname "$id")"
  card "$id" "$title" "$subtitle" "$path" \
    "&byline=$(ruby -ruri -e 'print URI.encode_www_form_component(ARGV[0])' "$byline")"
done
