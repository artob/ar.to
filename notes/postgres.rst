**************************************************************************
Arto's Notes re: `PostgreSQL <https://en.wikipedia.org/wiki/PostgreSQL>`__
**************************************************************************

https://help.ubuntu.com/community/PostgreSQL

Server Installation
-------------------

::

   $ aptitude install postgresql postgresql-contrib  # on Ubuntu

   $ brew install postgresql --without-perl --without-tcl
   $ brew services start postgresql
   $ pg_ctl -D /opt/homebrew/var/postgres start
   $ pg_ctl -D /opt/homebrew/var/postgres stop
   $ createdb `whoami`
   $ psql `whoami`

   $ brew services restart postgresql

Server Configuration
--------------------

::

   $ sudo -u postgres psql  # execute the "\password" command

::

   $ sudo cp -p /etc/postgresql/9.3/main/postgresql.conf{,.orig}
   $ sudo joe /etc/postgresql/9.3/main/postgresql.conf

::

   $ sudo service postgresql reload

Server Monitoring
-----------------

::

   $ tailf /var/log/postgresql/postgresql-9.3-main.log

Database Administration
-----------------------

::

   $ sudo -u postgres psql -h localhost  # to connect over network socket

::

   $ sudo -u postgres createdb mydb  # to create a database
   $ sudo -u postgres psql mydb
   $ sudo -u postgres dropdb mydb    # to drop a database

::

   $ sudo -u postgres pg_dump -c mydb | xz -9 > mydb.sql.xz

Manual Pages
------------

* `createdb(1) <http://www.postgresql.org/docs/9.3/static/app-createdb.html>`_
* `createuser(1) <http://www.postgresql.org/docs/9.3/static/app-createuser.html>`_
* `dropdb(1) <http://www.postgresql.org/docs/9.3/static/app-dropdb.html>`_
* `dropuser(1) <http://www.postgresql.org/docs/9.3/static/app-dropuser.html>`_
* `pg_config(1) <http://www.postgresql.org/docs/9.3/static/app-pgconfig.html>`_
* `pg_dump(1) <http://www.postgresql.org/docs/9.3/static/app-pgdump.html>`_
* `pg_dumpall(1) <http://www.postgresql.org/docs/9.3/static/app-pg-dumpall.html>`_
* `pg_restore(1) <http://www.postgresql.org/docs/9.3/static/app-pgrestore.html>`_
* `psql(1) <http://www.postgresql.org/docs/9.3/static/app-psql.html>`_
* `reindexdb(1) <http://www.postgresql.org/docs/9.3/static/app-reindexdb.html>`_
* `vacuumdb(1) <http://www.postgresql.org/docs/9.3/static/app-vacuumdb.html>`_

`Extensions <https://www.postgresql.org/docs/current/static/contrib.html>`__
----------------------------------------------------------------------------

* https://www.postgresql.org/docs/current/static/auto-explain.html
* https://www.postgresql.org/docs/current/static/bloom.html
* https://www.postgresql.org/docs/current/static/btree-gin.html
* https://www.postgresql.org/docs/current/static/btree-gist.html
* https://www.postgresql.org/docs/current/static/citext.html
* https://www.postgresql.org/docs/current/static/file-fdw.html
* https://www.postgresql.org/docs/current/static/pgcrypto.html
* https://www.postgresql.org/docs/current/static/postgres-fdw.html
* https://www.postgresql.org/docs/current/static/seg.html
* https://www.postgresql.org/docs/current/static/contrib-spi.html
* https://www.postgresql.org/docs/current/static/uuid-ossp.html

PostGIS
^^^^^^^

* http://postgis.net/install/
* http://postgis.net/docs/

::

   $ brew install postgis --without-sfcgal

Languages
---------

* `PL/pgSQL
  <https://www.postgresql.org/docs/current/static/plpgsql.html>`__
* `PL/Lua
  <http://pllua.projects.pgfoundry.org/>`__

Bindings
--------

* `C++ (libpqxx) <https://github.com/jtv/libpqxx>`__
