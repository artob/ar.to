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
