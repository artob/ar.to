#!/bin/sh
# Fails if any HTML page or XML feed published on the `gh-pages` branch is
# missing from the build in `dist/`, so that no existing URL breaks.
# Usage: npm run build && scripts/check-urls.sh [<ref>]
set -eu
ref=${1:-origin/gh-pages}

# Legacy URLs that were deliberately dropped; see DESIGN.md.
dropped='^(categories|authors)(/|\.html$)|/page/|^tags/index\.xml$|^js/|^sitemap\.xml$'

missing=$(
  git ls-tree -r --name-only "$ref" |
    grep -E '\.(html|xml)$' |
    grep -vE "$dropped" |
    while read -r path; do
      [ -e "dist/$path" ] || echo "$path"
    done
)

if [ -n "$missing" ]; then
  echo "Missing from dist/ (published on $ref):" >&2
  echo "$missing" | sed 's/^/  /' >&2
  exit 1
fi
echo "All URLs published on $ref are present in dist/."
