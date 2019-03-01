---
title: "Desired Capabilities for Firefox/Firefox (headless)"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless.html
redirect_from:
    - "/x/TAzR/"
    - "/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless/"
description:
---
You can locate Firefox settings file at this path: **_<Project folder>\\settings\\internal\\com.kms.katalon.core.webui.firefox.properties._**

You can access the useful Desired Capabilities for Firefox through:

1.  Open Firefox browser
2.  On the address bar type in 'about:config'
3.  Search for 'browser' keys
4.  Create a key called 'firefox_profile' in Katalon Studio settings and add your settings there.

![](../../images/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless/Untitled.png)

Some common Desired Capabilities:

1.  Start Firefox at default page: browser.startup.homepage

    ```groovy
    {"FIREFOX_DRIVER":{"firefox_profile":{"browser.startup.homepage":"www.google.com"}}}
    ```


    ![](../../images/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless/Untitled2.png)

2.   Never ask for file download for file MIME type mentioned. The list of MIME type can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types).

```groovy
{"FIREFOX_DRIVER":{"firefox_profile":{"browser.download.folderList":"2","browser.helperApps.alwaysAsk.force":false,"browser.download.manager.showWhenStarting":false,"browser.download.dir":"C:\\Downloads","browser.download.downloadDir":"C:\\Downloads","browser.download.defaultFolder":"C:\\Downloads","browser.helperApps.neverAsk.saveToDisk":"text/html"}}}
```

![](../../images/katalon-studio/docs/desired-capabilities-for-firefoxfirefox-headless/Untitled.png)



> Code sample can be found in this project: [https://github.com/katalon-studio-samples/tips-and-tricks](https://github.com/katalon-studio-samples/tips-and-tricks)