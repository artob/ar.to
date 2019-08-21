*********************
Arto's Notes re: Bash
*********************

Prelude for Scripts
===================

::

   set -e -u -o pipefail; IFS=$'\n\t'

Repeat Last Command
===================

::

   $ !!
