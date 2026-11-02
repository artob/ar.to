********************************************************
Arto's Notes re: `Conreality <https://conreality.org>`__
********************************************************

.. contents:: Table of Contents
   :local:
   :depth: 1
   :backlinks: none

----

- https://conreality.org

- https://github.com/conreality

- https://twitter.com/ConrealityGame

- https://www.facebook.com/conreality

----

Client Apps
===========

- `Conreality Player <https://github.com/conreality/conreality-player>`__
  for Android & iOS

----

Game Development Kit (GDK)
==========================

TODO

----

Software Development Kits (SDKs)
================================

Languages
---------

.. list-table::
   :widths: 10 20 60 10
   :header-rows: 1

   * - Language
     - Source Code
     - Rationale
     - Status

   * - `C++ <https://sdk.conreality.org/cpp/>`__
     - `conreality/conreality-sdk <https://github.com/conreality/conreality-sdk>`__
     - Conreality DDK, performance, Unreal, Qt, ROS
     - Planning

   * - `Dart <https://sdk.conreality.org/dart/>`__
     - `conreality/conreality.dart <https://github.com/conreality/conreality.dart>`__
     - Conreality Player, Conreality Console, Flutter (Android, iOS), AngularDart
     - WIP

   * - `Elixir <https://sdk.conreality.org/elixir/>`__
     - `conreality/conreality.ex <https://github.com/conreality/conreality.ex>`__
     - Conreality Master & Slave, Phoenix
     - Planning

   * - `Go <https://sdk.conreality.org/go/>`__
     - `conreality/conreality.go <https://github.com/conreality/conreality.go>`__
     - Conreality CLI, tooling
     - WIP

   * - `Kotlin <https://sdk.conreality.org/kotlin/>`__
     - `conreality/conreality.kt <https://github.com/conreality/conreality.kt>`__
     - enterprise, Android, JVM languages (Java, Groovy, Scala, etc)
     - Planning

   * - `.NET <https://sdk.conreality.org/.net/>`__
     - `conreality/conreality.net <https://github.com/conreality/conreality.net>`__
     - enterprise, Unity, .NET languages (C#, F#, etc)
     - Planning

   * - `Python <https://sdk.conreality.org/python/>`__
     - `conreality/conreality.py <https://github.com/conreality/conreality.py>`__
     - prototyping, scripting, analysis, Qt, ROS
     - WIP

   * - `Ruby <https://sdk.conreality.org/ruby/>`__
     - `conreality/conreality.rb <https://github.com/conreality/conreality.rb>`__
     - prototyping, scripting, Rails
     - WIP

   * - `SQL <https://sdk.conreality.org/sql/>`__
     - `conreality/conreality.sql <https://github.com/conreality/conreality.sql>`__
     - Conreality Master, analysis, archival
     - WIP

Packaging
---------

.. list-table::
   :widths: 10 20 60 10
   :header-rows: 1

   * - Language
     - Packaging
     - Installation
     - Status

   * - `C++ <https://sdk.conreality.org/cpp/>`__
     - Conan?
     - ``$ git clone https://github.com/conreality/conreality-sdk``
     - TODO

   * - `Dart <https://sdk.conreality.org/dart/>`__
     - `Pub <https://pub.dartlang.org/packages/conreality>`__
     - ``$ echo 'dependencies: conreality: ^0.0.0' >> pubspec.yaml``
     - Published

   * - `Elixir <https://sdk.conreality.org/elixir/>`__
     - `Hex <https://hex.pm/packages/conreality>`__
     - ``$ echo '{:conreality, "~> 0.0.0"}' >> mix.exs``
     - TODO

   * - `Go <https://sdk.conreality.org/go/>`__
     - `GitHub <https://github.com/conreality/conreality.go>`__
     - ``$ go get github.com/conreality/conreality.go/sdk``
     - Hosted

   * - `Kotlin <https://sdk.conreality.org/kotlin/>`__
     - `Bintray <https://bintray.com/conreality>`__
     - ``$ echo 'org.conreality.sdk:conreality-sdk:0.0.0' >> build.gradle``
     - TODO

   * - `.NET <https://sdk.conreality.org/.net/>`__
     - `NuGet Gallery <https://www.nuget.org/packages/Conreality/>`__
     - ``$ dotnet add package Conreality``
     - Published

   * - `Python <https://sdk.conreality.org/python/>`__
     - `PyPI <https://pypi.org/project/conreality/>`__
     - ``$ pip install conreality``
     - Published

   * - `Ruby <https://sdk.conreality.org/ruby/>`__
     - `RubyGems <https://rubygems.org/gems/conreality>`__
     - ``$ gem install conreality``
     - Published

   * - `SQL <https://sdk.conreality.org/sql/>`__
     - N/A
     - ``$ git clone https://github.com/conreality/conreality.sql``
     - Hosted

Modules
-------

TODO

Types
-----

.. list-table::
   :header-rows: 1

   * - C++
     - Dart
     - Elixir
     - Go
     - Kotlin
     - Python
     - Ruby
     - SQL

   * - 
     - 
     - 
     - ``sdk.Action``
     - 
     - ``sdk.Action``
     - ``SDK::Action``
     - TODO

   * - 
     - 
     - 
     - ``sdk.Client``
     - 
     - ``sdk.AsyncClient``
     - ``SDK::Client``
     - N/A

   * - 
     - 
     - 
     - ``sdk.Client``
     - 
     - ``sdk.Client``
     - ``SDK::Client``
     - N/A

   * - 
     - 
     - 
     - ``sdk.Session``
     - 
     - ``sdk.Session``
     - ``SDK::Session``
     - N/A

   * - 
     - 
     - 
     - ``sdk.Asset``
     - 
     - ``sdk.Asset``
     - ``SDK::Asset``
     - ``asset``

   * - 
     - 
     - 
     - ``sdk.Binary``
     - 
     - ``sdk.Binary``
     - ``SDK::Binary``
     - ``binary``

   * - 
     - 
     - 
     - ``sdk.Camera``
     - 
     - ``sdk.Camera``
     - ``SDK::Camera``
     - ``camera``

   * - 
     - 
     - 
     - ``sdk.Event``
     - 
     - ``sdk.Event``
     - ``SDK::Event``
     - ``event``

   * - 
     - 
     - 
     - ``sdk.Game``
     - 
     - ``sdk.Game``
     - ``SDK::Game``
     - N/A

   * - 
     - 
     - 
     - ``sdk.Message``
     - 
     - ``sdk.Message``
     - ``SDK::Message``
     - ``message``

   * - 
     - 
     - 
     - ``sdk.Object``
     - 
     - ``sdk.Object``
     - ``SDK::Object``
     - ``object``

   * - 
     - 
     - 
     - ``sdk.Player``
     - 
     - ``sdk.Player``
     - ``SDK::Player``
     - ``player``

   * - 
     - 
     - 
     - ``sdk.Theater``
     - 
     - ``sdk.Theater``
     - ``SDK::Theater``
     - ``theater``

----

Driver Development Kit (DDK)
============================

TODO

----

Tracking
========

- https://github.com/topics/conreality

- https://twitter.com/hashtag/conreality?f=tweets

- https://www.google.com/search?q=conreality

----

See Also
========

- Arto's Notes re: `MILSIM <milsim>`__, `airsoft <airsoft>`__
