Arto's Notes re: Git
====================

http://en.wikipedia.org/wiki/Git_%28software%29

Remote Configuration
--------------------

::

   $ git remote add bitbucket git@bitbucket.org:bendiken/PROJECT.git
   $ git remote add github git@github.com:bendiken/PROJECT.git
   $ git remote add sourceforge ssh://bendiken@git.code.sf.net/p/PROJECT/code
   $ git remote add unfuddle git@ACCOUNT.unfuddle.com:ACCOUNT/PROJECT.git

Signed Tags
-----------

::

   $ git tag -s 0.1.0 -m 'Released version 0.1.0.'
