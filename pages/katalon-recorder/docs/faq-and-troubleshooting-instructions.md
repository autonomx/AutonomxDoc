---
title: "FAQ & Troubleshooting Instructions"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-recorder/docs/faq-and-troubleshooting-instructions.html
redirect_from:
    - "/x/7gHR/"
    - "/katalon-recorder/docs/faq-and-troubleshooting-instructions/"
description:
---
Product information
-------------------

**Does Katalon Recorder add-on collect the data and send to external services?**

Katalon team do NOT collect any end-users data. Katalon Recorder's autosave feature will only save test artifacts on the local machine.

**Will Katalon Recorder be maintained regularly?**

Katalon team commit to maintaining both Katalon Recorder and Katalon Studio up to date and keeping the tools free of charge. 2018 Products Roadmap will be soon available to all users.

**Is Katalon Recorder available for commercial use?**

Katalon Recorder is free to use on any projects (commercial or not) of yours. But it's prohibited for you to sell/redistribute/decode Katalon Recorder.

Upload files
------------

Currently, only the Chrome version of Katalon Recorder supports file uploading. The action was completed using "type" command. Example:

```groovy
type | id=file-upload | C:\file.txt (or /home/me/file.txt for Linux)
```

We are still actively looking for a solution for Firefox. If you have any question or suggestion, please join the discussion [here](https://forum.katalon.com/discussion/4833/katalon-automation-recorder-how-to-do-a-file-upload-htmlinputelement).

Drag and drop
-------------

If the drag-and-drop feature was built with HTML5, please use command "dragAndDropToObject". If it was built with jQuery UI, please use command "dragAndDropToObjectByJqueryUI".

Set text values for text-based input elements
---------------------------------------------

Due to the differences between web pages, there are three commands you can use to set text values for text-based input elements (e.g. type="text" or "number"). If you encounter troubles setting text values, please try those commands in this order:

1.  type
2.  sendKeys
3.  setText

**For input elements with type=**"**number", you have to use "setText" to set negative values.**

Content Security Policy errors
------------------------------

We are looking for a solution right now. Technically, it's possible to overwrite CSP rules with add-ons, but it would be insecure to do that on every web page.

For now, to work around the issue on Chrome, users can use a third-party add-on (e.g. Disable Content-Security-Policy [https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden?hl=en](https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden?hl=en)) to disable CSP rules, then execute the test in KR as usual. **Don't forget to disable that add-on when unused.**

On Firefox, please disable the "security.csp.enable" option in "about:config" to achieve the same effect. **Don't forget to enable it when unused.**