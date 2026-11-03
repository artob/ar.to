---
title: C++
weight: 1
---

## Presentations

- [atomic Weapons and the C++11 Memory Model, by Herb Sutter](http://herbsutter.com/2013/02/11/atomic-weapons-the-c-memory-model-and-modern-hardware/)

## Snippets

```text
#ifndef __cplusplus
#error "<foobar.h> requires a C++ compiler"
#endif

#if __cplusplus < 201103L
#error "<foobar.h> requires a C++11 compiler (CXXFLAGS='-std=c++11')"
#endif
```

```text
#include <cstdio> /* for std::FILE, std::f*(), fdopen() */

using cstdio_file_ptr = std::unique_ptr<std::FILE, int(*)(std::FILE*)>;

cstdio_file_ptr stream{std::fopen("input.txt", "r"), std::fclose};
```

```text
static_assert(std::is_pod<rfc::sha1>::value, "rfc::sha1 must be a POD type");
```

## Smart Pointers

```text
using cstdio_file_ptr = std::unique_ptr<std::FILE, int(*)(std::FILE*)>;
cstdio_file_ptr stream{std::tmpfile(), std::fclose};

using curl_easy_handle = std::unique_ptr<CURL, void(*)(CURL*)>;
curl_easy_handle curl{nullptr, curl_easy_cleanup};

using curl_multi_handle = std::unique_ptr<CURLM, CURLMcode(*)(CURLM*)>;
curl_multi_handle curlm{nullptr, curl_multi_cleanup};
```

## Skeletons

### Program Skeleton

```cpp
#ifdef HAVE_CONFIG_H
#include <config.h>
#endif

#include <clocale>    /* for LC_ALL, std::setlocale() */
#include <cstdio>     /* for std::printf() */
#include <cstdlib>    /* for std::exit() */
#include <sysexits.h> /* for EX_OK */

int
main(int argc, char* argv[]) {
  (void)argc, (void)argv; /* not used */

  std::setlocale(LC_ALL, "");

  // TODO

  return EX_OK;
}
```

### Class Skeleton

```cpp
/**
 * Represents a widget of some sort or another.
 */
class widget final {
public:
  /**
   * Default constructor.
   */
  widget() noexcept = default;

  /**
   * Copy constructor.
   */
  widget(const widget& other) noexcept = delete;

  /**
   * Move constructor.
   */
  widget(widget&& other) noexcept = delete;

  /**
   * Copy assignment operator.
   */
  widget& operator=(const widget& other) noexcept = delete;

  /**
   * Move assignment operator.
   */
  widget& operator=(widget&& other) noexcept = delete;

  /**
   * Destructor.
   */
  ~widget() noexcept = default;
};
```

### Input Iterator Skeleton

```cpp
#include <cstddef>  /* for std::size_t */
#include <iterator> /* for std::iterator */

/**
 * Class template for input iterator implementations.
 *
 * @see http://www.sgi.com/tech/stl/InputIterator.html
 * @see http://en.cppreference.com/w/cpp/concept/InputIterator
 * @see http://www.cplusplus.com/reference/iterator/InputIterator/
 */
template <typename T>
class input_iterator : public std::iterator<std::input_iterator_tag, T> {
protected:
  /**
   * Default constructor.
   */
  input_iterator() noexcept = default;

public:
  using pointer   = T*;
  using reference = T&;

  /**
   * Copy constructor.
   */
  input_iterator(const input_iterator& other) noexcept = default;

  /**
   * Move constructor.
   */
  input_iterator(input_iterator&& other) noexcept = default;

  /**
   * Destructor.
   */
  ~input_iterator() noexcept = default;

  /**
   * Copy assignment operator.
   */
  input_iterator& operator=(const input_iterator& other) noexcept = default;

  /**
   * Move assignment operator.
   */
  input_iterator& operator=(input_iterator&& other) noexcept = default;

  /**
   * Checks whether this iterator is equal to `other`.
   */
  bool operator==(const input_iterator& other) const noexcept; // TODO

  /**
   * Checks whether this iterator is inequal to `other`.
   */
  bool operator!=(const input_iterator& other) const noexcept {
    return !operator==(other);
  }

  /**
   * Advances this iterator a single step.
   */
  input_iterator& operator++() noexcept; // TODO

  /**
   * @copydoc operator++()
   */
  input_iterator operator++(int) noexcept {
    input_iterator before(*this);
    operator++();
    return before;
  }

  /**
   * Advances this iterator by `count` steps.
   */
  input_iterator& operator+=(std::size_t count) noexcept {
    while (count-- > 0) {
      operator++();
    }
    return *this;
  }

  /**
   * Dereferences this iterator to obtain an element reference.
   */
  reference operator*() const noexcept; // TODO

  /**
   * Dereferences this iterator to obtain an element pointer.
   */
  pointer operator->() const noexcept; // TODO
};
```

## Shared Libraries

### Library Metadata

## Coding Conventions

### Directory Structure

```text
src
├── foobar
│   ├── feature.cc
│   ├── feature.h
│   ├── module.cc
│   ├── module.h
│   ├── version.cc
│   └── version.h.in
└── foobar.h
```

### File Divider

Exactly 80 columns wide:

```text
////////////////////////////////////////////////////////////////////////////////
```

## Best Practices

- Keep a clear and logical distinction between `struct` and `class`: only PODs are to be declared as `struct`.

### Deprecated Features

- `typedef`, `NULL` (replace with `using`, `nullptr`)

### Caveats

- `std::abs()` from `<cmath>` operates on floating-point types; you probably meant the integer-only version from `<cstdlib>`. This is a dangerous function: if you accidentally include the wrong header, both an integer argument and the double result may get silently cast to a double and integer, respectively, without any emitted compiler warnings even at `-Wall -Wextra`. Best to avoid using this function; just use e.g. `std::labs()` instead.

## Debugging

```text
__asm__("int $3"); /* breakpoint for debugger */
```

## Announcements

- <http://www.reddit.com/r/cpp>
