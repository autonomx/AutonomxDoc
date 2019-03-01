---
title: "Execute Windows commands" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-windows-commands.html 
redirect_from:
    - "/display/KD/Execute+Windows+commands/"
    - "/display/KD/Execute%20Windows%20commands/"
    - "/x/QQXR/"
    - "/katalon-studio/docs/execute-windows-commands/"
description: 
---
To execute Windows command line, simply use this script in your test case:

```groovy
String cmd = "Your command"
Runtime.getRuntime().exec(cmd)
```

**Example 1:**

*   Call taskkill command

```groovy
String cmd = "taskkill /F firefox.exe"
Runtime.getRuntime().exec(cmd)
```

*   Launch external program:

```groovy
Runtime.runtime.exec("path/to/vlc.exe")

```

*   Execute a batch file

```groovy
import com.kms.katalon.core.configuration.RunConfiguration
  /**
   * Execute a batch file situated in the KS project directory.
   * @param batchFile (String) e.g. "myfile.bat"
   */
  static void runBatchFile(String batchFile) {
    String bf = RunConfiguration.getProjectDir() + '/' + batchFile
    comment("Running batch file: " + bf)
    Runtime.runtime.exec(bf)
  }
```

References
----------

*   [RunConfiguration](https://api-docs.katalon.com/com/kms/katalon/core/configuration/RunConfiguration.html)
    
*   [Runtime](https://docs.oracle.com/javase/7/docs/api/java/lang/Runtime.html)
*   [Windows command line](https://www.lifewire.com/list-of-command-prompt-commands-4092302)