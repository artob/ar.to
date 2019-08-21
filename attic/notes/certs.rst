*********************************
Arto's Notes re: TLS certificates
*********************************

Let's Encrypt
=============

* https://github.com/letsencrypt/letsencrypt
* https://lyncd.com/2015/12/letsencrypt-dreamhost-howto/
* https://letsencrypt.org/getting-started/
* https://letsencrypt.readthedocs.org/en/latest/using.html

::

   $ git clone https://github.com/letsencrypt/letsencrypt.git
   $ cd letsencrypt
   $ ./letsencrypt-auto --help

   $ ./letsencrypt-auto certonly --manual --manual-public-ip-logging-ok -d example.org

   # manual verification step goes here

   $ cp -p /etc/letsencrypt/live/example.org/privkey.pem ssl.key
   $ cp -p /etc/letsencrypt/live/example.org/fullchain.pem ssl.crt

::

   $ tar -cavf letsencrypt.tar.xz \
       /etc/letsencrypt /var/lib/letsencrypt /var/log/letsencrypt
