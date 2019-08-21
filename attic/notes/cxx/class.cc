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
