---
title: Macro Expansion Hook for Gauche
date: '2006-01-12T18:26:53Z'
categories:
- Technology
tags:
- Gauche
- Lisp
- macros
- Scheme
summary: A snippet for debugging Scheme macros in Gauche, inspired by Common Lisp's `*macroexpand-hook*`.
original:
  url: http://bendiken.net/2006/01/12/macro-expansion-hook-for-gauche
  archive: https://web.archive.org/web/20080725102411/http://bendiken.net/2006/01/12/macro-expansion-hook-for-gauche
---

Inspired by [Common
Lisp’s](/tags/common-lisp)
[`*macroexpand-hook*`](https://web.archive.org/web/20060112/http://www.lisp.org/HyperSpec/Body/var_stmacroexpand-hookst.html),
here’s a pretty useful snippet I recently hacked together to assist me in
debugging
[Scheme](/tags/scheme)
macros for
[Gauche](https://web.archive.org/web/20060112/http://practical-scheme.net/gauche/).

```scheme
(define-macro (define-macroexpand-hook hook)
  `((with-module gauche define-macro) (define-macro formals . body)
    (cond
      ((list? formals)
        `(define-macro ,(car formals)
          (lambda (,@(cdr formals)) ,@body)))
      ((symbol? formals)
        `((with-module gauche define-macro) ,formals
          (lambda args (apply ,',hook ,@body ',formals args))))
      (else
        (error "symbol required, but got" formals)))))
```

`define-macroexpand-hook` is a straightforward (well, not too hairy, anyway)
macro-generating macro that overwrites the binding of the `define-macro` special
form in the current module, with the result that any macros subsequently defined
will include a call to a user-defined procedure (passed as the argument to
`define-macroexpand-hook`), which will be invoked whenever the macro is applied.

(The immense power inherent in this brief code snippet will not, sadly, be
something most programmers unfamiliar with
[Lisp](https://web.archive.org/web/20060112/http://lispers.org/) can appreciate.
What this is doing is essentially dynamically injecting additional code into the
Scheme compiler itself — it’s not every language that lets you patch the
compiler on the fly, while running.)

The hook procedure is expected to perform the actual macro expansion by applying
the supplied transformer. This allows the hook to actually modify the macro
code, or even suppress the macro’s expansion altogether. An example will make
this clearer, so here follows a snippet that shows how to use
`define-macroexpand-hook` to print out a debug message whenever a macro is
applied. The output will contain a pretty-printed version of the expression that
caused the macro application, as well as the macro’s actual expansion. This
makes debugging most macros a fair bit easier while working in the REPL:

```scheme
(use slib)
(require 'pretty-print)

(define-macroexpand-hook
  (lambda (transformer name . args)
    (let1 expanded (apply transformer args)
      (format #t "DEBUG: macro expansion ~a => ~a"
        (pretty-print->string (cons name args))
        (pretty-print->string expanded))
      (newline)
      expanded)))
```

Here’s a brief example session in Gauche’s REPL:

```scheme
gosh> (define-macro while-not-perfect
        (lambda (universe . body)
          `(let loop ()
            (unless (= 42 (answer-to-life-and-everything ,universe))
              (begin ,@body))
            (increment-version! ,universe)
            (loop))))

gosh> (while-not-perfect *universe*
        (randomize *universe*)
        (reboot *universe*))

DEBUG: macro expansion (while-not-perfect
  *universe*
  (randomize *universe*)
  (reboot *universe*))
 => (let loop ()
  (unless
    (= 42 (answer-to-life-and-everything *universe*))
    (begin
      (randomize *universe*)
      (reboot *universe*)))
  (increment-version! *universe*)
  (loop))

^C*** UNHANDLED-SIGNAL-ERROR: unhandled signal 2 (SIGINT)
```

*Note that the definition of `answer-to-life-and-everything` has been omitted
due to space constraints.*

`define-macroexpand-hook` is related to some exploration I’ve doing lately on
hooking into and overriding Gauche’s syntax primitives, as reported on the
[Gauche mailing
list](https://web.archive.org/web/20060112/http://sourceforge.net/mailarchive/forum.php?thread_id=9389715&forum_id=2043).

*Updated in April 2006 to utilize the extended `with-module` form now available
in [Gauche
0.8.7](https://web.archive.org/web/20060112/http://www.shiro.dreamhost.com/scheme/gauche/ChangeLog.txt),
making the code less hairy.*
