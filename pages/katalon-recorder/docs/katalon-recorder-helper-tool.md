---
title: "Katalon Recorder Helper Tool" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-recorder/docs/katalon-recorder-helper-tool.html 
redirect_from:
    - "/display/KR/Katalon+Recorder+Helper+Tool/"
    - "/display/KR/Katalon%20Recorder%20Helper%20Tool/"
    - "/x/PQTR/"
    - "/katalon-recorder/docs/katalon-recorder-helper-tool/"
description: 
---
Introduction
------------

Due to limitations in JavaScript and browsers' API, there are some actions that cannot be done by Katalon Recorder alone. In these cases, Katalon Recorder will send commands to a CLI tool named Katalon Recorder Helper to finish the actions.

Katalon Recorder Helper is an open source project ([https://github.com/katalon-studio/katalon-recorder-helper](https://github.com/katalon-studio/katalon-recorder-helper)). It is actually a very lightweight Java server that listens for commands from Katalon Recorder. It is built on top of the Spring Boot framework.

Usage
-----

1.  Install Java Runtime Environment version 8.x on your machine.
2.  Download the latest file "katalon-recorder-helper.jar" from the releases page [https://github.com/katalon-studio/katalon-recorder-helper/releases](https://github.com/katalon-studio/katalon-recorder-helper/releases).
3.  Run the jar file using the following command
    
    ```groovy
    java -jar katalon-recorder-helper.jar
    ```
    

Katalon Recorder Helper will listen for commands at port 18910.

Working with Katalon Recorder
-----------------------------

### Upload file

For testing input elements with type="file" on Firefox, the command "type | locator | filepath" only works when Katalon Recorder Helper has started. It utilizes Java's Robot to trigger key presses in order to manipulate the "File Upload"  dialog.

For Chrome, Katalon Recorder Helper is not required.

### Executing OS commands

OS commands can be triggered using Katalon Recorder Helper. Users can combine this function with user extensions ([https://docs.katalon.com/x/9APR](/x/9APR)) to extend Katalon Recorder's capability.

For example, a call to the following URL

```groovy
http://localhost:18910/execute?cmd=dir
```

will make the tool execute the "dir" command and return the following response in JSON format

```groovy
{
  "command": "dir",
  "output": [
    " Volume in drive D is Data",
    " Volume Serial Number is 1031-445A",
    "",
    " Directory of D:\\katalon-recorder-helper",
    "",
    "05/17/2018  12:55 PM    <DIR>          .",
    "05/17/2018  12:55 PM    <DIR>          ..",
    "05/15/2018  09:17 AM               268 .gitignore",
    "05/17/2018  01:14 PM    <DIR>          .idea",
    "05/17/2018  11:58 AM             1,090 LICENSE",
    "05/17/2018  12:47 PM             1,488 pom.xml",
    "05/17/2018  12:26 PM               500 README.md",
    "05/15/2018  04:17 PM    <DIR>          src",
    "05/17/2018  12:55 PM    <DIR>          target",
    "               4 File(s)          3,346 bytes",
    "               5 Dir(s)  155,350,253,568 bytes free"
  ]
}
```