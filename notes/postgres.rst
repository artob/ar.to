Arto's Notes re: PostgreSQL
===========================

https://help.ubuntu.com/community/PostgreSQL

Server Installation
-------------------

::

   $ aptitude install postgresql postgresql-contrib  # on Ubuntu

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

   $ sudo -u postgres createdb mydb  # to create a database
   $ sudo -u postgres psql mydb

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
