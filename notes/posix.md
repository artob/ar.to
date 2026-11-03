---
title: "[POSIX](https://en.wikipedia.org/wiki/POSIX)"
weight: 1
---

## `PATH_MAX`

Include the `<limits.h>` or `<sys/param.h>` header files.

## `PIPE_BUF`

<table style="width:93%;">
<colgroup>
<col style="width: 22%" />
<col style="width: 19%" />
<col style="width: 51%" />
</colgroup>
<tbody>
<tr>
<td><p>POSIX.1-2001</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>limits.h</code><a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></p></td>
</tr>
<tr>
<td><p>POSIX.1-2004</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>limits.h</code><a href="#fn2" class="footnote-ref" id="fnref2" role="doc-noteref"><sup>2</sup></a></p></td>
</tr>
<tr>
<td><p>POSIX.1-2008</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>limits.h</code><a href="#fn3" class="footnote-ref" id="fnref3" role="doc-noteref"><sup>3</sup></a></p></td>
</tr>
<tr>
<td><p>Linux</p></td>
<td><blockquote>
<p>4,096</p>
</blockquote></td>
<td><p><code>linux/limits.h</code><a href="#fn4" class="footnote-ref" id="fnref4" role="doc-noteref"><sup>4</sup></a></p></td>
</tr>
<tr>
<td><p>Mac OS X</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>sys/syslimits.h</code><a href="#fn5" class="footnote-ref" id="fnref5" role="doc-noteref"><sup>5</sup></a></p></td>
</tr>
<tr>
<td><p>FreeBSD</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>sys/syslimits.h</code><a href="#fn6" class="footnote-ref" id="fnref6" role="doc-noteref"><sup>6</sup></a></p></td>
</tr>
<tr>
<td><p>DragonFly BSD</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>sys/syslimits.h</code><a href="#fn7" class="footnote-ref" id="fnref7" role="doc-noteref"><sup>7</sup></a></p></td>
</tr>
<tr>
<td><p>OpenBSD</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>sys/syslimits.h</code><a href="#fn8" class="footnote-ref" id="fnref8" role="doc-noteref"><sup>8</sup></a></p></td>
</tr>
<tr>
<td><p>NetBSD</p></td>
<td><blockquote>
<p>512</p>
</blockquote></td>
<td><p><code>sys/syslimits.h</code><a href="#fn9" class="footnote-ref" id="fnref9" role="doc-noteref"><sup>9</sup></a></p></td>
</tr>
<tr>
<td><p>MINIX 3</p></td>
<td><blockquote>
<p>32,768</p>
</blockquote></td>
<td><p><code>sys/syslimits.h</code><a href="#fn10" class="footnote-ref" id="fnref10" role="doc-noteref"><sup>10</sup></a></p></td>
</tr>
<tr>
<td><p>illumos</p></td>
<td><blockquote>
<p>5,120</p>
</blockquote></td>
<td><p><code>limits.h</code><a href="#fn11" class="footnote-ref" id="fnref11" role="doc-noteref"><sup>11</sup></a></p></td>
</tr>
<tr>
<td><p>QNX Neutrino</p></td>
<td><blockquote>
<p>5,120</p>
</blockquote></td>
<td><p><code>limits.h</code><a href="#fn12" class="footnote-ref" id="fnref12" role="doc-noteref"><sup>12</sup></a></p></td>
</tr>
<tr>
<td><p>OSv</p></td>
<td><blockquote>
<p>4,096</p>
</blockquote></td>
<td><p><code>api/limits.h</code><a href="#fn13" class="footnote-ref" id="fnref13" role="doc-noteref"><sup>13</sup></a></p></td>
</tr>
<tr>
<td><p>Plan 9</p></td>
<td><blockquote>
<p>8,192</p>
</blockquote></td>
<td><p><code>ape/sys/limits.h</code><a href="#fn14" class="footnote-ref" id="fnref14" role="doc-noteref"><sup>14</sup></a></p></td>
</tr>
</tbody>
</table>
<section id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p><a href="http://pubs.opengroup.org/onlinepubs/000095399/basedefs/limits.h.html">http://pubs.opengroup.org/onlinepubs/000095399/basedefs/limits.h.html</a><a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn2"><p><a href="http://pubs.opengroup.org/onlinepubs/000095399/basedefs/limits.h.html">http://pubs.opengroup.org/onlinepubs/000095399/basedefs/limits.h.html</a><a href="#fnref2" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn3"><p><a href="http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/limits.h.html">http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/limits.h.html</a><a href="#fnref3" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn4"><p><a href="https://github.com/torvalds/linux/blob/master/include/uapi/linux/limits.h#L13">https://github.com/torvalds/linux/blob/master/include/uapi/linux/limits.h#L13</a><a href="#fnref4" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn5"><p><a href="http://src.gnu-darwin.org/src/sys/sys/syslimits.h.html">http://src.gnu-darwin.org/src/sys/sys/syslimits.h.html</a><a href="#fnref5" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn6"><p><a href="https://github.com/freebsd/freebsd/blob/master/sys/sys/syslimits.h#L64">https://github.com/freebsd/freebsd/blob/master/sys/sys/syslimits.h#L64</a><a href="#fnref6" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn7"><p><a href="http://www.dragonflybsd.org/cvsweb/src/sys/sys/syslimits.h?rev=HEAD">http://www.dragonflybsd.org/cvsweb/src/sys/sys/syslimits.h?rev=HEAD</a><a href="#fnref7" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn8"><p><a href="http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/sys/sys/syslimits.h?rev=HEAD&amp;content-type=text/x-cvsweb-markup">http://cvsweb.openbsd.org/cgi-bin/cvsweb/src/sys/sys/syslimits.h?rev=HEAD&amp;content-type=text/x-cvsweb-markup</a><a href="#fnref8" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn9"><p><a href="http://cvsweb.netbsd.org/bsdweb.cgi/src/sys/sys/syslimits.h?rev=HEAD&amp;content-type=text/x-cvsweb-markup&amp;only_with_tag=MAIN">http://cvsweb.netbsd.org/bsdweb.cgi/src/sys/sys/syslimits.h?rev=HEAD&amp;content-type=text/x-cvsweb-markup&amp;only_with_tag=MAIN</a><a href="#fnref9" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn10"><p><a href="https://github.com/minix3/minix/blob/master/sys/sys/syslimits.h#L62">https://github.com/minix3/minix/blob/master/sys/sys/syslimits.h#L62</a><a href="#fnref10" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn11"><p><a href="https://github.com/illumos/illumos-gate/blob/31c6d826a7f7a4ee7d83c8e99f25d82a4a248076/usr/src/head/limits.h#L91">https://github.com/illumos/illumos-gate/blob/31c6d826a7f7a4ee7d83c8e99f25d82a4a248076/usr/src/head/limits.h#L91</a><a href="#fnref11" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn12"><p><a href="http://www.qnx.com/developers/docs/660/index.jsp?topic=%2Fcom.qnx.doc.neutrino.utilities%2Ftopic%2Fp%2Fpipe.html">http://www.qnx.com/developers/docs/660/index.jsp?topic=%2Fcom.qnx.doc.neutrino.utilities%2Ftopic%2Fp%2Fpipe.html</a><a href="#fnref12" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn13"><p><a href="https://github.com/cloudius-systems/osv/blob/master/include/api/limits.h#L42">https://github.com/cloudius-systems/osv/blob/master/include/api/limits.h#L42</a><a href="#fnref13" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
<li id="fn14"><p><a href="https://github.com/cao-xx/plan-9/blob/b27a35643e4ee0ede5ed91ecb3a4ed98f8164454/sys/include/ape/sys/limits.h#L24">https://github.com/cao-xx/plan-9/blob/b27a35643e4ee0ede5ed91ecb3a4ed98f8164454/sys/include/ape/sys/limits.h#L24</a><a href="#fnref14" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>

## `/dev/{kmem,mem}`

- Linux: [limited](http://man7.org/linux/man-pages/man4/mem.4.html)
- Mac OS X: [N/A](http://osxbook.com/book/bonus/chapter8/kma/)

## References

- [POSIX in Wikipedia](https://en.wikipedia.org/wiki/POSIX)
