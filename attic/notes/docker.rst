*************************************************
Arto's Notes re: `Docker <https://docker.com/>`__
*************************************************

Templates
=========

Dockerfile
----------

::

   FROM alpine:3.7
   LABEL maintainer="Arto Bendiken <arto@bendiken.net>"
   VOLUME /srv
   ENTRYPOINT ["/bin/sh"]

Installation
============

Installation on macOS
---------------------

* https://store.docker.com/editions/community/docker-ce-desktop-mac
* https://docs.docker.com/docker-for-mac/install/

Installation on Ubuntu
----------------------

* https://docs.docker.com/install/linux/docker-ce/ubuntu/

Installation on Ubuntu 16.04
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

::

   $ sudo apt install docker.io docker-compose
   $ sudo adduser $USER docker  # log out and back in
   $ docker info

Tutorials
=========

* https://docs.docker.com/get-started/

Best Practices
--------------

* https://docs.docker.com/develop/dev-best-practices/
* https://docs.docker.com/develop/develop-images/dockerfile_best-practices/

Reference
=========

* `Dockerfile reference
  <https://docs.docker.com/engine/reference/builder/>`__

* `docker-compose.yml reference
  <https://docs.docker.com/compose/compose-file/>`__

Commands
========

::

   $ docker version
   $ docker image ls
   $ docker container ls --all

Tools
=====

* https://github.com/ncopa/su-exec

* https://github.com/tianon/gosu

* https://github.com/krallin/tini

Images
======

* https://hub.docker.com/_/alpine/
* https://hub.docker.com/_/busybox/
* https://hub.docker.com/_/ubuntu/
* https://hub.docker.com/_/ubuntu-upstart/
* https://hub.docker.com/_/crux/
* https://hub.docker.com/_/postgres/
* https://hub.docker.com/_/mysql/
* https://hub.docker.com/_/nginx/
* https://hub.docker.com/_/scratch/
