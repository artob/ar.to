*************************************************************************************
Arto's Notes re: `Java <https://en.wikipedia.org/wiki/Java_(programming_language)>`__
*************************************************************************************

::

   $ java -version
   $ javac -version

Servlets
========

::

   $ brew info tomcat

   $ catalina run

   $ cp -p *.war /opt/homebrew/opt/tomcat/libexec/webapps/

Exceptions
==========

Null Argument Exceptions
------------------------

Throw a ``NullPointerException``, not an ``IllegalArgumentException``.

References
^^^^^^^^^^

* `java.util.Objects#requireNonNull() in Java 7
  <http://docs.oracle.com/javase/7/docs/api/java/util/Objects.html#requireNonNull(T)>`__
* `IllegalArgumentException or NullPointerException for a null parameter?
  <http://stackoverflow.com/questions/3881/illegalargumentexception-or-nullpointerexception-for-a-null-parameter>`__
* `Apache Commons Mailing List: Re: commons lang3: NullArgumentException missing?
  <http://mail-archives.apache.org/mod_mbox/commons-user/201112.mbox/%3cCABLGb9w813MsWhMWM4Je=SiFo+x=XuwcTOgGfgzgfXPai2Tdtw@mail.gmail.com%3e>`__
* `Guava Idea Graveyard: Preconditions.checkArgumentNotNull() (throws IllegalArgumentException)
  <https://code.google.com/p/guava-libraries/wiki/IdeaGraveyard#Preconditions.checkArgumentNotNull()_(throws_IllegalArgumentExce>`__

Null Pointer Exceptions
-----------------------

References
^^^^^^^^^^

* `CERT Oracle Coding Standard for Java: ERR08-J. Do not catch NullPointerException or any of its ancestors
  <https://www.securecoding.cert.org/confluence/display/java/ERR08-J.+Do+not+catch+NullPointerException+or+any+of+its+ancestors>`__
