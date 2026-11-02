*************************************************************************
Arto's Notes re: the `Crazyflie <https://www.bitcraze.io/crazyflie-2/>`__
*************************************************************************

Guides
======

* `Getting Started with the Crazyflie 2.0
  <https://www.bitcraze.io/getting-started-with-the-crazyflie-2-0/>`__

LEDs
====

.. image:: https://www.bitcraze.io/images/getting-started/frontCF.png
   :target: https://www.bitcraze.io/images/getting-started/frontCF.png
   :width: 160
   :align: right
   :class: pull-right
   :alt: Crazyflie LEDs

* **Power on and all is good**:
  The blue LEDs (2 and 3) are fully lit and the front right LED (1) is
  blinking red twice every second.

* **Power on and all is good but sensors are not yet calibrated**:
  The blue LEDs (2 and 3) are fully lit and the front right LED (1) is
  blinking red with 2 seconds interval. Put the Crazyflie on a level
  surface and keep it absolutely still to calibrate.

* **Radio connected**:
  The front left LED (4) is flickering in read and/or green.

* **Battery low**:
  The front right LED (1) is fully lit in red. It's time to land and
  recharge the battery.

* **Charging**:
  The back left blue LED (3) is blinking while the right back blue LED (4) is lit.

* **Boot loader mode**:
  The blue LEDs (2 and 3) at the back are blinking approximately once every second.

* **Self test fail**:
  The right front LED (1) is repeatedly blinking five short red pulses with
  a longer pause between groups.

To charge the battery, plug in a micro-USB cable. Make sure the Crazyflie
is powered on. While the battery is charging, the back left blue LED (3)
will blink. When the LED is fully lit the battery is charged.

Apps
====

* `Crazyflie Client
  <https://play.google.com/store/apps/details?id=se.bitcraze.crazyfliecontrol2>`__
  for Android
* `Crazyflie 2.0
  <https://itunes.apple.com/us/app/crazyflie-2.0/id946151480?mt=8>`__
  for iOS
