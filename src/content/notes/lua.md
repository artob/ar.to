---
title: "[Lua](https://en.wikipedia.org/wiki/Lua_(programming_language))"
weight: 1
---

<https://www.lua.org/>

## Installation

### macOS

    $ brew install lua@5.3   # or lua@5.2, lua@5.1

### Ubuntu

    $ sudo apt install lua5.2

## Reference

- [Lua 5.3 Reference Manual](http://www.lua.org/manual/5.3/)
- [Lua 5.2 Reference Manual](http://www.lua.org/manual/5.2/)
- [Lua 5.1 Reference Manual](http://www.lua.org/manual/5.1/)

## Libraries

- [BitOp](https://github.com/LuaDist/luabitop) <http://bitop.luajit.org/> `sudo apt install lua-bitop`
- [CJSON](https://github.com/mpx/lua-cjson) <http://www.kyne.com.au/~mark/software/lua-cjson.php> `sudo apt install lua-cjson`
- [Lua-CURL](https://github.com/Lua-cURL/Lua-cURLv3) <https://lua-curl.github.io/>
- [LuaFileSystem](https://github.com/keplerproject/luafilesystem) <https://keplerproject.github.io/luafilesystem/> `sudo apt install lua-filesystem`
- [Penlight](https://github.com/stevedonovan/Penlight) <https://stevedonovan.github.io/Penlight/> `sudo apt install lua-penlight`
- [luaposix](https://github.com/luaposix/luaposix) <https://luaposix.github.io/luaposix/> `sudo apt install lua-posix`
- [LuaSocket](https://github.com/diegonehab/luasocket) <http://w3.impa.br/~diego/software/luasocket/> `sudo apt install lua-socket`

## Tools

    $ luarocks install busted
    $ luarocks install luacheck
    $ luarocks install luacov

- [LDoc](https://github.com/stevedonovan/LDoc) `sudo apt install install lua-ldoc`
- [LuaRocks](https://luarocks.org/)
- [Busted](http://olivinelabs.com/busted/)
- [Luacheck](https://luacheck.readthedocs.io/)
- [LuaCov](https://keplerproject.github.io/luacov/)

## Use Cases

### Configuration

- <https://www.netbsd.org/~mbalmer/lua/lua_config.pdf>
- <http://www.fysx.org/2013/10/16/using-lua-scripts-as-config-files-from-c/>
- <https://eliasdaler.wordpress.com/2014/07/18/using-lua-with-cpp-luabridge/>
- <https://eliasdaler.wordpress.com/2013/10/11/lua_cpp_binder/>
- <http://windrealm.org/tutorials/reading-a-lua-configuration-file-from-c.php>

### Templating

- <http://developers.slashdot.org/story/12/02/01/1429229/wikipedia-chooses-lua-as-its-new-template-language>

## Embedding

### Embedding in C++

### Embedding in OCaml

- [OCaml-Lua](http://ocaml-lua.forge.ocamlcore.org/) compatible with Lua 5.1.

### Embedding in Python

- [Lupa](https://pypi.python.org/pypi/lupa) `sudo pip install lupa` works on OS X and Ubuntu both.
- <https://lupy.readthedocs.org/en/latest/>
- [Lunatic Python](https://github.com/bastibe/lunatic-python) compatible with Python 2.7 and Lua 5.1. N/A on PyPi.
- [python-lua](https://github.com/wijnen/python-lua) in Debian and Ubuntu as system package [python-lua](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=672344). N/A on PyPI.
- <https://pypi.python.org/pypi/PyLua>

## Unsorted

- <https://github.com/LuaDist/srlua>
- <http://webserver2.tecgraf.puc-rio.br/~lhf/ftp/lua/#srlua>

## See Also

- [Lua in Wikipedia](https://en.wikipedia.org/wiki/Lua_(programming_language))
