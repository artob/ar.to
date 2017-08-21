*************************************************************************************
Arto's Notes re: `Java <https://en.wikipedia.org/wiki/Java_(programming_language)>`__
*************************************************************************************

::

   $ java -version
   $ javac -version

Reference
=========

`Java SE <https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition>`__
---------------------------------------------------------------------------

* `java.awt
  <http://docs.oracle.com/javase/8/docs/api/java/awt/package-summary.html>`__
* `java.io
  <http://docs.oracle.com/javase/8/docs/api/java/io/package-summary.html>`__
* `java.lang
  <http://docs.oracle.com/javase/8/docs/api/java/lang/package-summary.html>`__
* `java.math
  <http://docs.oracle.com/javase/8/docs/api/java/math/package-summary.html>`__
* `java.net
  <http://docs.oracle.com/javase/8/docs/api/java/net/package-summary.html>`__
* `java.nio
  <http://docs.oracle.com/javase/8/docs/api/java/nio/package-summary.html>`__
* `java.security
  <http://docs.oracle.com/javase/8/docs/api/java/security/package-summary.html>`__
* `java.sql
  <http://docs.oracle.com/javase/8/docs/api/java/sql/package-summary.html>`__
* `java.text
  <http://docs.oracle.com/javase/8/docs/api/java/text/package-summary.html>`__
* `java.time
  <http://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html>`__
* `java.util
  <http://docs.oracle.com/javase/8/docs/api/java/util/package-summary.html>`__

`Java EE <https://en.wikipedia.org/wiki/Java_Platform,_Enterprise_Edition>`__
-----------------------------------------------------------------------------

* `javax.servlet.http
  <https://docs.oracle.com/javaee/7/api/javax/servlet/http/package-summary.html>`__

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

See Also
========

`Android <android>`__,
`Gradle <gradle>`__,
`JVM <jvm>`__,
`Kotlin <kotlin>`__,
`Maven <maven>`__,
`Tomcat <tomcat>`__
