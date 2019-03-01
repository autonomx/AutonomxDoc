---
title: "Katalon Studio for Linux (Console Mode)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-studio-for-linux-console-mode.html 
redirect_from:
    - "/x/5QDR/"
    - "/katalon-studio/docs/katalon-studio-for-linux-console-mode/"
description: 
---
Currently, Katalon Studio for Linux has a **Lite** version (Ubuntu tested) which supports only [console mode execution](/display/KD/Console+Mode+Execution). Katalon Studio IDE is **not** supported yet. This guide will cover basic setups and installation steps for the **Linux** version.

Download
--------

Sign in with the registered account on Katalon [website](https://www.katalon.com/) and select **Linux version** to download.

![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/image2018-2-2-113A433A19.png)

Activation
----------

Since **only console mode** execution is supported, users **DON'T** need to activate Katalon Studio. 

Execution
---------

> Be sure to install OpenJDK 8 on your Ubuntu (NOT Oracle JDK).

You can find installation steps from here: [http://openjdk.java.net/install/](http://openjdk.java.net/install/). Make sure that after installation, your OpenJDK information is displayed when you execute 'java -version' command:

![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen-Shot-2018-02-07-at-11.50.50.png)  
To execute tests, follow the following steps:  
- **Prepare project**: If you have an existing project from **Windows** or **MacOS** or from your **source control**, be **SURE** to delete **.project** file first **after** it is delivered on Linux machine.  
- **Generate**[console mode command](/display/KD/Console+Mode+Execution#ConsoleModeExecution-CommandBuilder). This command line builder is **NOT** available in Linux version due to lack of IDE UI. Users can generate CMD directly using either Katalon Studio on **Windows** or **Mac OS**.  
\- After a console mode command is generated or built, ensure to adjust the first parameter to be ./katalon . The correct command should look like as below:

```groovy
./katalon -noSplash  -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

  
\- Now use that console mode command in CLI interface to run the command, e.g:

```groovy
cd /home/katalon/Katalon_5.3 ./katalon -noSplash -runMode=console -consoleLog -projectPath="/Users/nguyenvinh/Katalon Studio/WebTesting/WebTesting.prj" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome (headless)"
```

Troubleshooting
---------------

### Invalid Project Description

This might happen because .project file contains invalid information or Katalon command was executed lines in the SAME folder of project folder ![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen-Shot-2018-02-02-at-11.07.44.png)

You can delete .project file to let Katalon Studio generate back the valid information or execute commands outside of executed project folder.  
![](../../images/katalon-studio/docs/katalon-studio-for-linux-console-mode/Screen-Shot-2018-02-02-at-11.08.52.png)

### 'NoClassDefFoundError' error

This happens because Oracle JDK is used. Please uninstall current Oracle JDK and Install Open JDK8 after that: [http://openjdk.java.net/install/](http://openjdk.java.net/install/).