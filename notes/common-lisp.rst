Arto's Notes re: Common Lisp
============================

http://en.wikipedia.org/wiki/Common_Lisp

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
