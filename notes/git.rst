********************
Arto's Notes re: Git
********************

http://en.wikipedia.org/wiki/Git_%28software%29

Remote Configuration
====================

::

   $ git remote add bitbucket git@bitbucket.org:bendiken/PROJECT.git
   $ git remote add github git@github.com:bendiken/PROJECT.git
   $ git remote add sourceforge ssh://bendiken@git.code.sf.net/p/PROJECT/code
   $ git remote add unfuddle git@ACCOUNT.unfuddle.com:ACCOUNT/PROJECT.git

   $ git remote rename origin github

Commit Dates
============

::

   $ export GIT_AUTHOR_DATE='...'
   $ export GIT_COMMITTER_DATE="$GIT_AUTHOR_DATE"

   $ git ci --date='...' file.cc  # overrides AuthorDate, but not CommitDate

   $ git show --pretty=fuller     # verify AuthorDate and CommitDate

Signed Tags
===========

::

   $ git tag -s 0.1.0 -m 'Released version 0.1.0.'

Subtree Merges
==============

TODO

Maintenance
===========

::

   $ git remote prune origin

Rebasing
========

* https://git-scm.com/book/en/v2/Git-Branching-Rebasing
