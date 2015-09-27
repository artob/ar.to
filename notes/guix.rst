*********************
Arto's Notes re: Guix
*********************

Installation
------------

* https://www.gnu.org/software/guix/download/
* https://www.gnu.org/software/guix/manual/html_node/Binary-Installation.html
* https://www.gnu.org/software/guix/manual/html_node/Build-Environment-Setup.html

::

   cd /tmp

   wget ftp://alpha.gnu.org/gnu/guix/guix-binary-0.8.3.x86_64-linux.tar.xz
   tar xf guix-binary-0.8.3.x86_64-linux.tar.xz

   mv var/guix /var/ && mv gnu /
   ln -sf /var/guix/profiles/per-user/root/guix-profile ~root/.guix-profile

   groupadd --system guixbuild

   for i in `seq -w 1 10`;
   do
    useradd -g guixbuild -G guixbuild           \
            -d /var/empty -s `which nologin`    \
            -c "Guix build user $i" --system    \
            guixbuilder$i;
   done

   ~root/.guix-profile/bin/guix-daemon --build-users-group=guixbuild &

   mkdir -p /usr/local/bin
   ln -sf /var/guix/profiles/per-user/root/guix-profile/bin/guix /usr/local/bin/guix

Configuration
-------------

* https://www.gnu.org/software/guix/manual/html_node/Application-Setup.html#Locales-1

::

   guix package -i glibc-utf8-locales

Searching for Packages
----------------------

::

   guix package -s clang

Installing Packages
-------------------

::

   guix package -i clang
