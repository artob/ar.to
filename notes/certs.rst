*********************************
Arto's Notes re: TLS certificates
*********************************

Let's Encrypt
=============

* https://github.com/letsencrypt/letsencrypt
* https://lyncd.com/2015/12/letsencrypt-dreamhost-howto/
* https://community.letsencrypt.org/t/quick-start-guide/1631

::

   $ git clone https://github.com/letsencrypt/letsencrypt.git
   $ cd letsencrypt
   $ ./letsencrypt-auto --help

   $ ./letsencrypt-auto certonly --manual --manual-public-ip-logging-ok -d example.org

::

   $ tar -cavf letsencrypt.tar.xz \
       /etc/letsencrypt /var/lib/letsencrypt /var/log/letsencrypt
