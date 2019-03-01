---
title: "Writing Custom Script Formatter" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-recorder/docs/writing-custom-script-formatter.html 
redirect_from:
    - "/display/KR/Writing+Custom+Script+Formatter/"
    - "/display/KR/Writing%20Custom%20Script%20Formatter/"
    - "/x/igHR/"
    - "/katalon-recorder/docs/writing-custom-script-formatter/"
description: 
---
Introduction
------------

Starting from version 3.4.0, Katalon Recorder provides a plugin platform for people to extend its capabilities.

List of Plugins
---------------

PHPUnit formatter for Katalon Recorder ([Chrome](https://chrome.google.com/webstore/detail/phpunit-formatter-for-kat/gelokgfkbnkkcdbokielchgpfnphoalk?utm_source=chrome-ntp-icon)) by Jan Esser.

Sample
------

This is a sample plugin for Katalon Recorder [https://github.com/katalon-studio/katalon-recorder-sample-plugin](https://github.com/katalon-studio/katalon-recorder-sample-plugin). This sample plugin adds plain text format, e.g.

```groovy
open | https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html | 
click | id=first-name | 
type | id=first-name | Alex 
type | id=last-name | Smith
```

See the following demos for Chrome and Firefox.