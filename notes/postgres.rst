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

Database Administration
-----------------------

::

   $ sudo -u postgres createdb mydb  # to create a database
   $ sudo -u postgres psql mydb
