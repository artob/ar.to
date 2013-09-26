/**
 * Represents a widget of some sort or another.
 */
class widget {
public:
  /**
   * Default constructor.
   */
  widget() noexcept = default;

  /**
   * Copy constructor.
   */
  widget(const widget& other) noexcept = default;

  /**
   * Move constructor.
   */
  widget(widget&& other) noexcept = default;

  /**
   * Destructor.
   */
  ~widget() noexcept = default;

  /**
   * Copy assignment operator.
   */
  widget& operator=(const widget& other) noexcept = default;

  /**
   * Move assignment operator.
   */
  widget& operator=(widget&& other) noexcept = default;
};
