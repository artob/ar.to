#!/bin/sh
# Renders the favicons and app icons in public/ from the portrait in
# src/assets/arto.png, via scripts/og/icon.html and a local headless Chrome:
# a tight round crop for browser tabs (favicon.ico with 16, 32, and 48px),
# and a looser opaque square crop for home screens (apple-touch-icon.png,
# icon-192.png, icon-512.png). Rerun after replacing the portrait.
# Usage: scripts/favicons.sh
set -eu
cd "$(dirname "$0")/.."
chrome=${CHROME:-'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}
template="file://$PWD/scripts/og/icon.html"
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

for shape in circle square; do
  "$chrome" --headless=new --disable-gpu --hide-scrollbars \
    --allow-file-access-from-files --force-device-scale-factor=1 \
    --default-background-color=00000000 --window-size=512,512 \
    --virtual-time-budget=3000 --screenshot="$tmp/$shape.png" \
    "$template?shape=$shape" 2>/dev/null
done

size() { # master, size, output
  sips -z "$2" "$2" "$tmp/$1.png" --out "$3" >/dev/null
}
size circle 16 "$tmp/16.png"
size circle 32 "$tmp/32.png"
size circle 48 "$tmp/48.png"
size square 180 public/apple-touch-icon.png
size square 192 public/icon-192.png
cp "$tmp/square.png" public/icon-512.png

# Pack the PNGs into a multi-size ICO (PNG-compressed entries).
ruby -e '
  images = ARGV.map { File.binread(_1) }
  sizes = [16, 32, 48]
  offset = 6 + 16 * images.size
  ico = [0, 1, images.size].pack("v3")
  images.each_with_index do |png, i|
    ico << [sizes[i], sizes[i], 0, 0, 1, 32, png.bytesize, offset].pack("C4v2V2")
    offset += png.bytesize
  end
  File.binwrite("public/favicon.ico", ico + images.join)
' "$tmp/16.png" "$tmp/32.png" "$tmp/48.png"
ls -l public/favicon.ico public/apple-touch-icon.png public/icon-*.png
