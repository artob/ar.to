---
title: "[Git](https://en.wikipedia.org/wiki/Git_%28software%29)"
weight: 1
---

```text
$ sudo port install git +bash_completion
```

## `.gitignore`

```text
.DS_Store
README.html
*~
```

## `.gitattributes`

```text
*.min.js -diff
```

## Remote Configuration

```text
$ git remote add bitbucket git@bitbucket.org:bendiken/PROJECT.git
$ git remote add github git@github.com:bendiken/PROJECT.git
$ git remote add sourceforge ssh://bendiken@git.code.sf.net/p/PROJECT/code
$ git remote add unfuddle git@ACCOUNT.unfuddle.com:ACCOUNT/PROJECT.git

$ git remote rename origin github
```

## Commit Dates

```text
$ export GIT_AUTHOR_DATE='...'
$ export GIT_COMMITTER_DATE="$GIT_AUTHOR_DATE"

$ git ci --date='...' file.cc  # overrides AuthorDate, but not CommitDate

$ git show --pretty=fuller     # verify AuthorDate and CommitDate
```

## Signed Tags

```text
$ git ci -m 'Bumped the version to 0.1.0.' VERSION
$ git tag -s 0.1.0 -m 'Released version 0.1.0.'
$ echo 0.2.0-dev > VERSION
$ git ci -m 'Bumped the version to 0.2.0-dev.' VERSION
```

## Subtree Merges

TODO

## Maintenance

```text
$ git remote prune origin
```

## Rebasing

- <https://git-scm.com/book/en/v2/Git-Branching-Rebasing>
