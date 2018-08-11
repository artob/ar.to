**************************************************************
Arto's Notes re: `CUDA <https://en.wikipedia.org/wiki/CUDA>`__
**************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

Drivers
=======

- https://developer.nvidia.com/vulkan-driver

::

   $ lsmod | fgrep nvidia

   $ nvidia-smi

Driver Installation
-------------------

- https://us.download.nvidia.com/XFree86/Linux-x86_64/390.77/README/
- https://github.com/NVIDIA/nvidia-installer

Driver Installation on Alpine Linux
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

- https://github.com/sgerrand/alpine-pkg-glibc
- https://github.com/sgerrand/alpine-pkg-glibc/releases
- https://wiki.alpinelinux.org/wiki/Running_glibc_programs

::

   $ apk add sudo bash ca-certificates wget xz make gcc linux-headers

   $ wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub

   $ wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.27-r0/glibc-2.27-r0.apk
   $ wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.27-r0/glibc-bin-2.27-r0.apk
   $ wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.27-r0/glibc-dev-2.27-r0.apk
   $ wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.27-r0/glibc-i18n-2.27-r0.apk

   $ apk add glibc-2.27-r0.apk glibc-bin-2.27-r0.apk glibc-dev-2.27-r0.apk glibc-i18n-2.27-r0.apk

   $ /usr/glibc-compat/bin/localedef -i en_US -f UTF-8 en_US.UTF-8

   $ bash NVIDIA-Linux-x86_64-390.77.run --check

   $ bash NVIDIA-Linux-x86_64-390.77.run --extract-only

   $ cd NVIDIA-Linux-x86_64-390.77 && ./nvidia-installer

Driver Uninstallation
---------------------

::

   $ nvidia-uninstall

Driver Troubleshooting
----------------------

#. ``Uncompressing NVIDIA Accelerated Graphics Driver for Linux-x86_64 390.77NVIDIA-Linux-x86_64-390.77.run: line 998: /tmp/makeself.XXX/xz: No such file or directory\nExtraction failed.``

   ::

      $ apk add xz  # Alpine Linux

#. ``bash: ./nvidia-installer: No such file or directory``

   Install the glibc compatibility layer package for Alpine Linux.

#. ``ERROR: You do not appear to have libc header files installed on your system. Please install your distribution's libc development package.``

   ::

      $ apk add musl-dev  # Alpine Linux

#. ``ERROR: Unable to find the kernel source tree for the currently running kernel. Please make sure you have installed the kernel source files for your kernel and that they are properly configured``

   ::

      $ apk add linux-vanilla-dev  # Alpine Linux

#. ``ERROR: Failed to execute `/sbin/ldconfig`: The installer has encountered the following error during installation: 'Failed to execute `/sbin/ldconfig`'. Would you like to continue installation anyway?``

   Continue installation.

----

Toolkit
=======

- https://developer.nvidia.com/cuda-toolkit
- https://docs.nvidia.com/cuda/cuda-toolkit-release-notes/

Toolkit Download
----------------

- https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1604&target_type=runfilelocal

::

   $ wget -c https://developer.nvidia.com/compute/cuda/9.2/Prod2/local_installers/cuda_9.2.148_396.37_linux

Toolkit Installation
--------------------

- https://docs.nvidia.com/cuda/cuda-installation-guide-linux/

Toolkit Installation on Alpine Linux
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   $ apk add sudo bash

   $ sudo bash cuda_9.2.148_396.37_linux

   # You are attempting to install on an unsupported configuration. Do you wish to continue? y
   # Install NVIDIA Accelerated Graphics Driver for Linux-x86_64 396.37? y
   # Do you want to install the OpenGL libraries? y
   # Do you want to run nvidia-xconfig? n
   # Install the CUDA 9.2 Toolkit? y
   # Enter Toolkit Location: /opt/cuda-9.2
   # Do you want to install a symbolic link at /usr/local/cuda? y
   # Install the CUDA 9.2 Samples? y
   # Enter CUDA Samples Location: /opt/cuda-9.2/samples

   $ sudo ln -s cuda-9.2 /opt/cuda

   $ export PATH="/opt/cuda/bin:$PATH"

Toolkit Uninstallation
----------------------

::

   $ sudo /opt/cuda-9.2/bin/uninstall_cuda_9.2.pl

Toolkit Troubleshooting
-----------------------

#. ``Cannot find termcap: Can't find a valid termcap file at /usr/share/perl5/core_perl/Term/ReadLine.pm line 377.``

   ::

      $ export PERL_RL="Perl o=0"

#. ``gcc: error trying to exec 'cc1plus': execvp: No such file or directory``

   ::

      $ apk add g++  # Alpine Linux

#. ``cicc: Relink `/usr/lib/libgcc_s.so.1' with `/usr/glibc-compat/lib/libc.so.6' for IFUNC symbol `memset'``

   https://github.com/sgerrand/alpine-pkg-glibc/issues/58

   ::

      $ scp /lib/x86_64-linux-gnu/libgcc_s.so.1 root@alpine:/usr/glibc-compat/lib/libgcc_s.so.1

      $ sudo /usr/glibc-compat/sbin/ldconfig /usr/glibc-compat/lib /lib /usr/lib

----

`Compiler <https://en.wikipedia.org/wiki/NVIDIA_CUDA_Compiler>`__
=================================================================

- https://docs.nvidia.com/cuda/cuda-compiler-driver-nvcc/

::

   $ nvcc -V

----

Examples
========

TODO

----

See Also
========

- Arto's Notes re: `GPUs <gpu>`__, `OpenCL <opencl>`__

- Arto's Notes re: `Alpine Linux <alpine>`__, `Ubuntu <ubuntu>`__

- https://devblogs.nvidia.com/easy-introduction-cuda-c-and-c/

- https://github.com/nvidia/nvidia-docker/wiki/CUDA
