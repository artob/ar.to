**************************************************************************************
Arto's Notes re: `RTOSes <https://en.wikipedia.org/wiki/Real-time_operating_system>`__
**************************************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

Contenders
==========

.. list-table::
   :widths: 20 40 10 10 10 10
   :header-rows: 1

   * - Name
     - License
     - `RISC-V <riscv>`__
     - `Cortex-M <arm>`__
     - `Cortex-A <arm>`__
     - `x86-32 <x86>`__

   * - `FreeRTOS <https://en.wikipedia.org/wiki/FreeRTOS>`__
     - MIT
     - ✗
     - ✓
     - ✓
     - ✓

   * - `Mynewt <mynewt>`__
     - Apache
     - ✓
     - ✓
     - ✗
     - sim

   * - `NuttX <https://en.wikipedia.org/wiki/NuttX>`__
     - BSD
     - ✓
     - ✓
     - ✓
     - ✓

   * - `RIOT <https://en.wikipedia.org/wiki/RIOT_(operating_system)>`__
     - LGPLv2.1
     - ✗
     - ✓
     - ✗
     - ✓

   * - `RTEMS <https://en.wikipedia.org/wiki/RTEMS>`__
     - GPLv2+
     - ✓
     - ✓
     - ✓
     - ✓

   * - `Zephyr <https://en.wikipedia.org/wiki/Zephyr_(operating_system)>`__
     - Apache
     - ✓
     - ✓
     - `✗ <https://github.com/zephyrproject-rtos/zephyr/issues/11172>`__
     - ✓

----

See Also
========

- Arto's Notes re: `electronics <electronics>`__, `OpenOCD <openocd>`__
