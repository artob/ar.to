Arto's Notes re: Common Lisp
============================

http://en.wikipedia.org/wiki/Common_Lisp

Scripting with Common Lisp
--------------------------

`Shebang lines <http://cliki.net/Unix%20shell%20scripting>`_ only work with
CLISP, ECL, GCL, and SBCL. The more general solution is to create a simple
two-line wrapper shell script, as follows (for SBCL, in this example):

::

   #!/bin/sh
   exec sbcl --script $0.lisp

For example, if the Lisp program is named ``hello.lisp``, the wrapper script
would be accordingly named ``hello`` and would have its executable bit set.

The ``exec`` line should be adjusted for an available ANSI Common Lisp
implementation per the following reference guidelines:

::

   # Armed Bear Common Lisp (ABCL)
   # http://abcl.org/releases/1.3.0/abcl-20140127a.pdf section 2.1
   abcl --noinform --noinit --batch --load $0.lisp
   
   # Clozure CL (CCL)
   # http://ccl.clozure.com/manual/chapter2.5.html#Command-Line-Options
   ccl64 --no-init --terminal-encoding utf-8 --load $0.lisp --eval '(ccl:quit)'
   
   # GNU CLISP
   # http://www.clisp.org/impnotes/quickstart.html#quickstart-unix
   clisp -norc -ansi $0.lisp
   
   # CMU Common Lisp (CMUCL)
   # http://common-lisp.net/project/cmucl/doc/cmu-user/introduction.html#toc2
   cmucl -quiet -noinit -load $0.lisp -eval '(unix:unix-exit)'
   
   # Embeddable Common Lisp (ECL)
   # http://manpages.ubuntu.com/manpages/trusty/man1/ecl.1.html
   ecl -q -norc -shell $0.lisp
   
   # GNU Common Lisp (GCL)
   # http://manpages.ubuntu.com/manpages/trusty/man1/gcl.1L.html
   gcl -f $0.lisp
   
   # Steel Bank Common Lisp (SBCL)
   # http://www.sbcl.org/manual/#Shebang-Scripts
   # http://www.sbcl.org/manual/#Command-Line-Options
   sbcl --script $0.lisp

Feature Conditionals for Implementations
----------------------------------------

http://cliki.net/Features

::

   #+abcl    ; Armed Bear Common Lisp (ABCL)
   #+ccl     ; Clozure CL (CCL)
   #+clisp   ; GNU CLISP
   #+cmu     ; CMU Common Lisp (CMUCL)
   #+ecl     ; Embeddable Common Lisp (ECL)
   #+gcl     ; GNU Common Lisp (GCL)
   #+mkcl    ; ManKai Common Lisp (MKCL)
   #+sbcl    ; Steel Bank Common Lisp (SBCL)
   #+xcl     ; XCL

Project Directory Structure
---------------------------

::

   ├── .gitignore
   ├── AUTHORS
   ├── CREDITS
   ├── Makefile.am
   ├── README -> README.rst
   ├── README.rst
   ├── TODO
   ├── UNLICENSE
   ├── VERSION
   ├── autogen.sh
   ├── bin
   ├── configure.ac
   ├── doc
   │   ├── Makefile.am
   │   ├── examples
   │   │   └── .gitkeep
   │   └── manual
   │       └── .gitkeep
   ├── etc
   │   ├── aclocal
   │   │   └── .gitkeep
   │   └── macports
   │       └── .gitkeep
   ├── lib
   ├── src
   │   ├── Makefile.am
   │   ├── cl-foo.asd
   │   └── package.lisp
   └── test
       ├── Makefile.am
       ├── cl-foo-test.asd
       └── package.lisp
