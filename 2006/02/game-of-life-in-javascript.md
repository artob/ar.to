---
title: Conway's Game of Life in JavaScript
date: '2006-02-26T19:56:00Z'
categories:
- Technology
tags:
- artificial life
- cellular automaton
- emergence
- Game of Life
- JavaScript
- Turing machine
summary: Conway's Game of Life, hacked up in an afternoon to get to grips with the new HTML Canvas element.
original:
  url: http://bendiken.net/2006/02/26/game-of-life-in-javascript
  archive: https://web.archive.org/web/20080725103217/http://bendiken.net/2006/02/26/game-of-life-in-javascript
notice: Its live demo did not survive the move from the original site.
---

*A little something that I hacked up this afternoon to get to grips with the new
Canvas HTML element...*

The [Game of
Life](https://web.archive.org/web/20060226/http://en.wikipedia.org/wiki/Conway's_Game_of_Life)
is the best-known example of a two-dimensional cellular automaton. It was
invented by the mathematician John Conway in 1970 and has become a textbook
demonstration of emergence: complex and counter-intuitive behavior arising from
fundamentally simple rules and interactions. The Game of Life is based on just
[four simple and elegant
rules](https://web.archive.org/web/20060226/http://mathworld.wolfram.com/Life.html),
but the patterns it is capable of producing are far from trivial; indeed it has
been shown to be capable of acting as a universal Turing machine.

This version of Life is implemented entirely in JavaScript, utilizing the
[Canvas HTML extension for procedural
graphics](https://web.archive.org/web/20060226/http://en.wikipedia.org/wiki/Canvas_%28HTML_element%29)
supported at least by Firefox 1.5, Safari 1.3, Opera 9.0 and later versions of
these browsers. (It will not work on Internet Explorer.)
