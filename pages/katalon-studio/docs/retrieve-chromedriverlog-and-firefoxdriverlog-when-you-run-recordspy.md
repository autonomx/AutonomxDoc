---
title: "Retrieve chromedriver.log and firefoxdriver.log when you run Record/Spy" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/retrieve-chromedriverlog-and-firefoxdriverlog-when-you-run-recordspy.html 
redirect_from:
    - "/x/cAXR/"
    - "/katalon-studio/docs/retrieve-chromedriverlog-and-firefoxdriverlog-when-you-run-recordspy/"
description: 
---
There will be cases that Katalon Studio failed to start Chrome or Firefox when you run Record/Spy. The only way to retrieve its logs directly is using the approach below:

*   Open katalon.ini file in Katalon Studio folder
*   Add these lines at the bottom of this file:

```groovy
-Dwebdriver.chrome.logfile=C:/temp/chromedriver.log
-Dwebdriver.firefox.logfile=C:/temp/firefoxdriver.log
```

*   Your katalon.ini file should look like this:

```groovy
-startup
plugins/org.eclipse.equinox.launcher_1.3.201.v20161025-1711.jar
--launcher.library
plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.1.401.v20161122-1740
-data
config
-vmargs
-Xms256m
-Xmx4048m
-Dwebdriver.chrome.logfile=C:/temp/chromedriver.log
-Dwebdriver.firefox.logfile=C:/temp/firefoxdriver.log
```

*   Open Command Line and execute these commands:

```groovy
cd  %KATALON_STUDIO_INSTALLED_FOLDER%
eclipsec.exe -clean
```

"$**eclipsec.exe -clean**" operation is necessary in order to clean the internal cache of Eclipse and make the change in the katalon.ini file effective. Everytime Katalon Studio fails to start Chrome or Firefox when you run Record/Spy, just open .log files that you have defined in katalon.ini to find logs regarding the failed reasons.

_Credit to [kazurayam](https://forum.katalon.com/discussion/6736/getting-chromedriver-log-when-you-run-record-spy-web-to-investigate-why-ks-failed-to-start-chrome)_