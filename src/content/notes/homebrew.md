---
title: "[Homebrew](https://en.wikipedia.org/wiki/Homebrew_(package_management_software))"
weight: 1
---

## Installation

- [homebrew/blob/master/share/doc/homebrew/Installation.md](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/Installation.md)
- [bendiken/dotfiles/blob/master/.profile.d/homebrew.sh](https://github.com/bendiken/dotfiles/blob/master/.profile.d/homebrew.sh)

```text
$ sudo mkdir -p /opt
$ sudo chown $USER: /opt
$ git clone git@github.com:Homebrew/homebrew.git /opt/homebrew
```

## Maintenance

```text
$ brew update

$ brew unlink foobar

$ brew upgrade foobar

$ brew install foobar

$ brew tap caskroom/cask
```

## Formulae

- `brew install ffmpeg --with-opus`
- `brew install gnuplot --without-lua`

## See Also

- [MacPorts](macports)
