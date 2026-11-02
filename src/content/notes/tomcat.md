---
title: "[Tomcat](https://en.wikipedia.org/wiki/Apache_Tomcat)"
---

    $ brew info tomcat

    $ catalina version

    $ catalina configtest

    $ catalina run

    $ cp -p *.war /opt/homebrew/opt/tomcat/libexec/webapps/

## Configuration

### <span class="title-ref">conf/tomcat-users.xml</span>

    $ diff -u /opt/homebrew/opt/tomcat/libexec/conf/tomcat-users.xml{.orig,}
    --- tomcat-users.xml.orig
    +++ tomcat-users.xml
    @@ -41,4 +41,6 @@
       <user username="both" password="<must-be-changed>" roles="tomcat,role1"/>
       <user username="role1" password="<must-be-changed>" roles="role1"/>
     -->
    +  <role rolename="manager-gui"/>
    +  <user username="admin" password="PASSWORD" roles="manager-gui"/>
     </tomcat-users>

## See Also

[Homebrew](homebrew), [Java](java), [JVM](jvm)
