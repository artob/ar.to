*************************************************************************************
Arto's Notes re: `Java <https://en.wikipedia.org/wiki/Java_(programming_language)>`__
*************************************************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

::

   $ java -version
   $ javac -version

   $ jshell

Installation
============

Installation on macOS
---------------------

- https://docs.oracle.com/javase/9/install/installation-jdk-and-jre-macos.htm

Reference
=========

`Java SE <https://en.wikipedia.org/wiki/Java_Platform,_Standard_Edition>`__
---------------------------------------------------------------------------

- `java.awt
  <https://docs.oracle.com/javase/10/docs/api/java/awt/package-summary.html>`__:
  `BufferedImage <https://docs.oracle.com/javase/10/docs/api/java/awt/image/BufferedImage.html>`__

- `java.io
  <https://docs.oracle.com/javase/10/docs/api/java/io/package-summary.html>`__:
  `Closeable <https://docs.oracle.com/javase/10/docs/api/java/io/Closeable.html>`__,
  `File <https://docs.oracle.com/javase/10/docs/api/java/io/File.html>`__,
  `Reader <https://docs.oracle.com/javase/10/docs/api/java/io/Reader.html>`__,
  `Writer <https://docs.oracle.com/javase/10/docs/api/java/io/Writer.html>`__

- `java.lang
  <https://docs.oracle.com/javase/10/docs/api/java/lang/package-summary.html>`__:
  `Class <https://docs.oracle.com/javase/10/docs/api/java/lang/Class.html>`__,
  `Math <https://docs.oracle.com/javase/10/docs/api/java/lang/Math.html>`__,
  `Number <https://docs.oracle.com/javase/10/docs/api/java/lang/Number.html>`__,
  `Object <https://docs.oracle.com/javase/10/docs/api/java/lang/Object.html>`__,
  `ProcessBuilder <https://docs.oracle.com/javase/10/docs/api/java/lang/ProcessBuilder.html>`__,
  `Runtime <https://docs.oracle.com/javase/10/docs/api/java/lang/Runtime.html>`__,
  `String <https://docs.oracle.com/javase/10/docs/api/java/lang/String.html>`__,
  `System <https://docs.oracle.com/javase/10/docs/api/java/lang/System.html>`__,
  `Thread <https://docs.oracle.com/javase/10/docs/api/java/lang/Thread.html>`__,
  `Throwable <https://docs.oracle.com/javase/10/docs/api/java/lang/Throwable.html>`__

- `java.math
  <https://docs.oracle.com/javase/10/docs/api/java/math/package-summary.html>`__:
  `BigDecimal <https://docs.oracle.com/javase/10/docs/api/java/math/BigDecimal.html>`__,
  `BigInteger <https://docs.oracle.com/javase/10/docs/api/java/math/BigInteger.html>`__

- `java.net
  <https://docs.oracle.com/javase/10/docs/api/java/net/package-summary.html>`__:
  `InetAddress <https://docs.oracle.com/javase/10/docs/api/java/net/InetAddress.html>`__,
  `URI <https://docs.oracle.com/javase/10/docs/api/java/net/URI.html>`__,
  `URL <https://docs.oracle.com/javase/10/docs/api/java/net/URL.html>`__

- `java.nio
  <https://docs.oracle.com/javase/10/docs/api/java/nio/package-summary.html>`__:
  `Buffer <https://docs.oracle.com/javase/10/docs/api/java/nio/Buffer.html>`__,
  `ByteBuffer <https://docs.oracle.com/javase/10/docs/api/java/nio/ByteBuffer.html>`__ 

- `java.nio.channels
  <https://docs.oracle.com/javase/10/docs/api/java/nio/channels/package-summary.html>`__:
  `Channel <https://docs.oracle.com/javase/10/docs/api/java/nio/channels/Channel.html>`__

- `java.nio.charset
  <https://docs.oracle.com/javase/10/docs/api/java/nio/charset/package-summary.html>`__:
  `Charset <https://docs.oracle.com/javase/10/docs/api/java/nio/charset/Charset.html>`__

- `java.nio.file
  <https://docs.oracle.com/javase/10/docs/api/java/nio/file/package-summary.html>`__:
  `Path <https://docs.oracle.com/javase/10/docs/api/java/nio/file/Path.html>`__

- `java.nio.file.attribute
  <https://docs.oracle.com/javase/10/docs/api/java/nio/file/attribute/package-summary.html>`__:
  `FileAttribute <https://docs.oracle.com/javase/10/docs/api/java/nio/file/attribute/FileAttribute.html>`__

- `java.security
  <https://docs.oracle.com/javase/10/docs/api/java/security/package-summary.html>`__:
  `MessageDigest <https://docs.oracle.com/javase/10/docs/api/java/security/MessageDigest.html>`__,
  `SecureRandom <https://docs.oracle.com/javase/10/docs/api/java/security/SecureRandom.html>`__

- `java.sql
  <https://docs.oracle.com/javase/10/docs/api/java/sql/package-summary.html>`__:
  `Connection <https://docs.oracle.com/javase/10/docs/api/java/sql/Connection.html>`__,
  `ResultSet <https://docs.oracle.com/javase/10/docs/api/java/sql/ResultSet.html>`__,
  `Statement <https://docs.oracle.com/javase/10/docs/api/java/sql/Statement.html>`__

- `java.text
  <https://docs.oracle.com/javase/10/docs/api/java/text/package-summary.html>`__:
  `NumberFormat <https://docs.oracle.com/javase/10/docs/api/java/text/NumberFormat.html>`__

- `java.time
  <https://docs.oracle.com/javase/10/docs/api/java/time/package-summary.html>`__:
  `Duration <https://docs.oracle.com/javase/10/docs/api/java/time/Duration.html>`__,
  `Instant <https://docs.oracle.com/javase/10/docs/api/java/time/Instant.html>`__

- `java.util
  <https://docs.oracle.com/javase/10/docs/api/java/util/package-summary.html>`__:
  `Base64 <https://docs.oracle.com/javase/10/docs/api/java/util/Base64.html>`__,
  `Colleciton <https://docs.oracle.com/javase/10/docs/api/java/util/Collection.html>`__,
  `Date <https://docs.oracle.com/javase/10/docs/api/java/util/Date.html>`__,
  `Iterator <https://docs.oracle.com/javase/10/docs/api/java/util/Iterator.html>`__,
  `List <https://docs.oracle.com/javase/10/docs/api/java/util/List.html>`__,
  `Map <https://docs.oracle.com/javase/10/docs/api/java/util/Map.html>`__,
  `Optional <https://docs.oracle.com/javase/10/docs/api/java/util/Optional.html>`__,
  `Set <https://docs.oracle.com/javase/10/docs/api/java/util/Set.html>`__,
  `UUID <https://docs.oracle.com/javase/10/docs/api/java/util/UUID.html>`__

`Java EE <https://en.wikipedia.org/wiki/Java_Platform,_Enterprise_Edition>`__
-----------------------------------------------------------------------------

- `javax.servlet.http
  <https://docs.oracle.com/javaee/7/api/javax/servlet/http/package-summary.html>`__:
  `HttpServlet <https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServlet.html>`__,
  `HttpServletRequest <https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletRequest.html>`__,
  `HttpServletResponse <https://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpServletResponse.html>`__

History
=======

Java 10
-------

- `JDK 10 Release Notes
  <http://www.oracle.com/technetwork/java/javase/10-relnote-issues-4108729.html>`__

- `Java SE 10 (18.3) (JSR 383)
  <http://cr.openjdk.java.net/~iris/se/10/latestSpec/>`__

- http://jdk.java.net/10/

- http://openjdk.java.net/projects/jdk/10/

- http://www.baeldung.com/java-10

Java 9
------

- `What's New in Oracle JDK 9
  <https://docs.oracle.com/javase/9/whatsnew/toc.htm>`__

- http://www.baeldung.com/new-java-9

Java 8
------

- `What's New in Oracle JDK 8
  <http://www.oracle.com/technetwork/java/javase/8-whats-new-2157071.html>`__

- http://www.baeldung.com/java-8-new-features

- https://leanpub.com/whatsnewinjava8/read

Exceptions
==========

Null Argument Exceptions
------------------------

Throw a ``NullPointerException``, not an ``IllegalArgumentException``.

References
^^^^^^^^^^

- `java.util.Objects#requireNonNull() in Java 7
  <https://docs.oracle.com/javase/10/docs/api/java/util/Objects.html#requireNonNull(T)>`__

- `IllegalArgumentException or NullPointerException for a null parameter?
  <http://stackoverflow.com/questions/3881/illegalargumentexception-or-nullpointerexception-for-a-null-parameter>`__

- `Apache Commons Mailing List: Re: commons lang3: NullArgumentException missing?
  <http://mail-archives.apache.org/mod_mbox/commons-user/201112.mbox/%3cCABLGb9w813MsWhMWM4Je=SiFo+x=XuwcTOgGfgzgfXPai2Tdtw@mail.gmail.com%3e>`__

- `Guava Idea Graveyard: Preconditions.checkArgumentNotNull() (throws IllegalArgumentException)
  <https://code.google.com/p/guava-libraries/wiki/IdeaGraveyard#Preconditions.checkArgumentNotNull()_(throws_IllegalArgumentExce>`__

Null Pointer Exceptions
-----------------------

References
^^^^^^^^^^

- `CERT Oracle Coding Standard for Java: ERR08-J. Do not catch NullPointerException or any of its ancestors
  <https://www.securecoding.cert.org/confluence/display/java/ERR08-J.+Do+not+catch+NullPointerException+or+any+of+its+ancestors>`__

Testing
=======

Unit Testing
------------

Test Frameworks
^^^^^^^^^^^^^^^

- `JUnit <https://junit.org/junit5/>`__
  (`user guide <https://junit.org/junit5/docs/current/user-guide/>`__)

- `TestNG <http://testng.org/doc/>`__

Assertion Libraries
^^^^^^^^^^^^^^^^^^^

- `AssertJ <http://joel-costigliola.github.io/assertj/>`__

- `Truth <http://google.github.io/truth/>`__
  (`comparison to AssertJ <http://google.github.io/truth/comparison>`__)

- `Hamcrest <http://hamcrest.org/JavaHamcrest/>`__ (legacy)

Hosting
=======

- `Heroku <https://devcenter.heroku.com/articles/deploying-gradle-apps-on-heroku>`__

- `AWS Elastic Beanstalk <https://aws.amazon.com/elasticbeanstalk/>`__

  - `Using the AWS Elastic Beanstalk Tomcat Platform
    <https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-tomcat-platform.html>`__

- `Google Cloud Platform <https://cloud.google.com/java/>`__

See Also
========

- `Android <android>`__,
  `Gradle <gradle>`__,
  `JVM <jvm>`__,
  `Kotlin <kotlin>`__,
  `Maven <maven>`__,
  `Tomcat <tomcat>`__

- `programming <programming>`__

- http://openjdk.java.net/projects/jigsaw/
