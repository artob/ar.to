**********************************************************************************
Arto's Notes re: `GPUs <https://en.wikipedia.org/wiki/Graphics_processing_unit>`__
**********************************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

GPUs are useful for, among other things, the following:

- `deep learning <dl>`__

- `3D graphics <3d>`__ and `virtual reality (VR) <vr>`__

- computer vision (e.g., `OpenCV <opencv>`__) and image/video processing

- signal processing

- cryptocurrency mining

----

NVIDIA
======

`GeForce 10 series (Pascal) <https://en.wikipedia.org/wiki/GeForce_10_series>`__
--------------------------------------------------------------------------------

.. list-table::
   :widths: 20 10 10 10 10 10 10 10 10
   :header-rows: 1

   * - GPU Model
     - GPU Cores
     - GPU Speed
     - RAM Type
     - RAM Size
     - RAM BW
     - TBP
     - Launched
     - MSRP

   * - `GTX 1050 <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1050/specifications>`__
     - 640×
     - 1,354 MHz
     - GDDR5
     - 2 GB
     - 112 GB/s
     - 75W
     - Q4/2016
     - $109

   * - `GTX 1050 Ti <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1050-ti/specifications>`__
     - 768×
     - 1,290 MHz
     - GDDR5
     - 4 GB
     - 112 GB/s
     - 75W
     - Q4/2016
     - $139

   * - `GTX 1060 3GB <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1060/specifications>`__
     - 1,152×
     - 1,506 MHz
     - GDDR5
     - 3 GB
     - 192 GB/s
     - 120W
     - Q3/2016
     - $199

   * - `GTX 1060 6GB <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1060/specifications>`__
     - 1,280×
     - 1,506 MHz
     - GDDR5
     - 6 GB
     - 192 GB/s
     - 120W
     - Q3/2016
     - $249

   * - `GTX 1070 <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1070/specifications>`__
     - 1,920×
     - 1,506 MHz
     - GDDR5
     - 8 GB
     - 256 GB/s
     - 150W
     - Q2/2016
     - $399

   * - `GTX 1070 Ti <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1070-ti/specifications>`__
     - 2,423×
     - 1,607 MHz
     - GDDR5
     - 8 GB
     - 256 GB/s
     - 180W
     - Q4/2016
     - $449

   * - `GTX 1080 <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1080/specifications>`__
     - 2,560×
     - 1,607 MHz
     - GDDR5X
     - 8 GB
     - 320 GB/s
     - 180W
     - Q2/2016
     - $549

   * - `GTX 1080 Ti <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-1080-ti/specifications>`__
     - 3,584×
     - 1,480 MHz
     - GDDR5X
     - 11 GB
     - 484 GB/s
     - 250W
     - Q1/2016
     - $699

   * - `Titan X <https://www.geforce.com/hardware/desktop-gpus/geforce-gtx-titan-x/specifications>`__
     - 3,072×
     - 1,075 MHz
     - GDDR5X
     - 12 GB
     - 337 GB/s
     - 250W
     - Q3/2016
     - $1,200

   * - `Titan Xp <https://www.nvidia.com/en-us/titan/titan-xp/>`__
     - 3,840×
     - 1,405 MHz
     - GDDR5X
     - 12 GB
     - 548 GB/s
     - 250W
     - Q2/2017
     - $1,200

`GeForce 11 series (Turing) <https://en.wikipedia.org/wiki/GeForce_11_series>`__
--------------------------------------------------------------------------------

- https://www.techradar.com/news/nvidia-turing

`Tesla Volta series (Volta) <https://en.wikipedia.org/wiki/Volta_(microarchitecture)>`__
----------------------------------------------------------------------------------------

- https://www.techradar.com/news/nvidia-volta

.. list-table::
   :widths: 20 10 10 10 10 10 10 10 10
   :header-rows: 1

   * - GPU Model
     - GPU Cores
     - GPU Speed
     - RAM Type
     - RAM Size
     - RAM BW
     - TBP
     - Launched
     - MSRP

   * - `Titan V <#>`__
     - 5,120×
     - 1,200 MHz
     - HBM2
     - 12 GB
     - 653 GB/s
     - 250W
     - Q4/2017
     - $2,999

----

AMD
===

`Radeon RX Vega series (GCN 5th gen) <https://en.wikipedia.org/wiki/AMD_RX_Vega_series>`__
------------------------------------------------------------------------------------------

.. list-table::
   :widths: 20 10 10 10 10 10 10 10 10
   :header-rows: 1

   * - GPU Model
     - GPU Cores
     - GPU Speed
     - RAM Type
     - RAM Size
     - RAM BW
     - TBP
     - Launched
     - MSRP

   * - `Radeon RX Vega 56 <https://www.amd.com/en/products/graphics/radeon-rx-vega-56>`__
     - 3,584×
     - 1,156 MHz
     - HBM2
     - 8 GB
     - 410 GB/s
     - 210W
     - Q3/2017
     - $399

   * - `Radeon RX Vega 64 <https://www.amd.com/en/products/graphics/radeon-rx-vega-64>`__
     - 4,096×
     - 1,247 MHz
     - HBM2
     - 8 GB
     - 484 GB/s
     - 295W
     - Q3/2017
     - $499

`Radeon Instinct series <https://en.wikipedia.org/wiki/Radeon_Instinct>`__
--------------------------------------------------------------------------

- https://www.amd.com/en/graphics/servers-radeon-instinct-mi

- https://www.anandtech.com/show/12910/amd-demos-7nm-vega-radeon-instinct-shipping-2018

- https://www.tomshardware.com/news/amd-7nm-gpu-vega-gaming,37228.html

.. list-table::
   :widths: 20 10 10 10 10 10 10 10 10
   :header-rows: 1

   * - GPU Model
     - GPU Cores
     - GPU Speed
     - RAM Type
     - RAM Size
     - RAM BW
     - TBP
     - Launched
     - MSRP

   * - `Radeon Instinct MI6 <https://www.amd.com/en/products/professional-graphics/instinct-mi6>`__
     - 2,304×
     - ? MHz
     - GDDR5
     - 16 GB
     - 224 GB/s
     - 150W
     - Q2/2017
     - $2K?

   * - `Radeon Instinct MI8 <https://www.amd.com/en/products/professional-graphics/instinct-mi8>`__
     - 4,096×
     - ? MHz
     - HBM
     - 4 GB
     - 512 GB/s
     - 175W
     - Q2/2017
     - $3K?

   * - `Radeon Instinct MI25 <https://www.amd.com/en/products/professional-graphics/instinct-mi25>`__
     - 4,096×
     - ? MHz
     - HBM2
     - 16 GB
     - 484 GB/s
     - 300W
     - Q2/2017
     - $7.8K?

----

See Also
========

- https://news.ycombinator.com/item?id=17491604

- https://www.hetzner.com/dedicated-rootserver/ex51-ssd-gpu

- https://www.techspot.com/article/1626-gpu-pricing-q2-2018/

- APIs: `CUDA <cuda>`__, `OpenCL <opencl>`__

- uses: `deep learning <dl>`__
