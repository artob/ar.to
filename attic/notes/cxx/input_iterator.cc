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
