**************************************************************************************
Arto's Notes re: the `.NET Framework <https://en.wikipedia.org/wiki/.NET_Framework>`__
**************************************************************************************

Installation
============

::

   brew update && brew install mono && brew install nuget

   export MONO_GAC_PREFIX=/opt/homebrew

Compilation
===========

::

   mcs hello.cs && mono hello.exe  # program binary (hello.exe)

   mcs /target:library foobar.cs   # shared library (foobar.dll)

Languages
=========

* `C# <https://en.wikipedia.org/wiki/C_Sharp_(programming_language)>`__
* `F# <https://en.wikipedia.org/wiki/F_Sharp_(programming_language)>`__
* `IronPython <https://en.wikipedia.org/wiki/IronPython>`__
* `VB.NET <https://en.wikipedia.org/wiki/Visual_Basic_.NET>`__

Packages
========

* https://www.nuget.org/packages

Packaging
=========

* https://docs.microsoft.com/en-us/nuget/quickstart/create-and-publish-a-package
* https://docs.microsoft.com/en-us/nuget/create-packages/creating-a-package
* https://docs.microsoft.com/en-us/nuget/create-packages/prerelease-packages
* https://docs.microsoft.com/en-us/nuget/guides/create-cross-platform-packages
* https://docs.microsoft.com/en-us/nuget/schema/nuspec
* https://docs.microsoft.com/en-us/nuget/policies/nuget-faq
* http://staging.nuget.org/

Unsorted
========

* https://en.wikipedia.org/wiki/.NET_Framework_version_history
* http://firstfloorsoftware.com/Media/DiffLists/.NET%204.5-vs-.NET%204.5.1.html
* http://www.mono-project.com/docs/about-mono/supported-platforms/osx/
* http://www.mono-project.com/docs/getting-started/application-deployment/
* http://www.mono-project.com/docs/advanced/assemblies-and-the-gac/
* http://www.mono-project.com/docs/database-access/
* http://lastexitcode.com/projects/NuGet/FileLocations/
