---
title: Roaring Bitmaps at the AI Paper Reading Club
subtitle: My paper reading at the AI Paper Reading Club at Frontier Tower in San Francisco on May 4, 2026.
date: '2026-05-04T17:00:00Z'
dateEnd: '2026-05-04T18:30:00Z'
event: AI Paper Reading Club (Week 14)
eventUrl: https://luma.com/frontier-tower-ai-paper-reading-club-wee-37d6
location: Frontier Tower, San Francisco
tags:
- Roaring Bitmaps
- data structures
- compression
- databases
- Rust
- ASIMOV Protocol
projects:
- asimov
summary: My reading of Daniel Lemire's Roaring Bitmaps papers, with a sneak peek at how we use compressed bitsets at ASIMOV to power complex on-device queries on large social graphs.
abstract: Compressed bitmaps are a core data structure behind databases, search engines, and analytics systems, helping represent large sets of IDs efficiently while supporting fast operations like union, intersection, and filtering. Roaring Bitmaps is a hybrid format that combines arrays, uncompressed bitmaps, and run-length encoded segments to get both speed and compression. The key idea is that no single representation works best for every density pattern, so Roaring splits the integer space into chunks and chooses the best container type for each one.
slides: https://speakerdeck.com/arto/roaring-bitmaps-at-the-ai-paper-reading-club
pdf: https://files.speakerdeck.com/presentations/a8addd6f5b71481ea928d9168d7463a2/Roaring_Bitmaps.pdf
code: https://github.com/artob/roaring-bitmaps-talk
image: "https://raw.githubusercontent.com/artob/ar.to/master/src/content/talks/2026/05/roaring-bitmaps.jpg"
tweet:
  url: https://x.com/bendiken/status/2051928569316847874
  date: '2026-05-06T07:34:28Z'
  text: |-
    **My first paper reading for the AI Paper Reading Club at [@frontiertower](https://x.com/frontiertower) was blessed with a rapt audience!**

    I presented [@lemire](https://x.com/lemire)'s Roaring Bitmaps papers and gave a sneak peek on how we use compressed bitsets at [@ASIMOV_Protocol](https://x.com/ASIMOV_Protocol) to power complex on-device queries on large social graphs!

    Find my slide deck here →
    [speakerdeck.com/arto/roaring-bitmaps-at-the-ai-paper-reading-club](https://speakerdeck.com/arto/roaring-bitmaps-at-the-ai-paper-reading-club)

    Kudos to [@tms7331](https://x.com/tms7331) [@WPReadingClub](https://x.com/WPReadingClub) for the invitation to lead this session!
  replies: 1
  reposts: 7
  likes: 46
  bookmarks: 11
  views: 70302
---

The primary reading was [_Consistently Faster and Smaller Compressed Bitmaps
with Roaring_](https://arxiv.org/abs/1603.06549) by Daniel Lemire, Gregory
Ssi-Yan-Kai, and Owen Kaser, and the follow-along code uses the Rust
implementation, [roaring-rs](https://github.com/RoaringBitmap/roaring-rs).

![Explaining the intersection of two Roaring array containers](https://raw.githubusercontent.com/artob/ar.to/master/src/content/talks/2026/05/roaring-bitmaps-slide.jpg)

![The audience at the AI Paper Reading Club at Frontier Tower](https://raw.githubusercontent.com/artob/ar.to/master/src/content/talks/2026/05/roaring-bitmaps-audience.jpg)
