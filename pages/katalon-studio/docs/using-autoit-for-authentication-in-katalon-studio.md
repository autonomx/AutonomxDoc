---
title: "Using autoIT for authentication in Katalon Studio" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/using-autoit-for-authentication-in-katalon-studio.html 
redirect_from:
    - "/display/KD/Using+autoIT+for+authentication+in+Katalon+Studio/"
    - "/display/KD/Using%20autoIT%20for%20authentication%20in%20Katalon%20Studio/"
    - "/x/9xxO/"
    - "/katalon-studio/docs/using-autoit-for-authentication-in-katalon-studio/"
description: 
---
[WebUI.authenticate](/display/KD/%5BWebUI%5D+Authenticate) keyword in Katalon Studio would work well on Firefox browser, but the function might not work on other browsers due to unknown reasons. This guide will provide you a workaround solution for handling authentication on different browsers is using autoIT.

This would be applicable for Chrome, Firefox and Edge.

**Requirements**

*   Get the latest version of Katalon Studio: [https://www.katalon.com/](https://www.katalon.com/)
    
*   Install autoIT (Autoit Full Installation and AutoIt Script Editor) at [https://www.autoitscript.com/site/autoit/downloads/](https://www.autoitscript.com/site/autoit/downloads/)
    

![](../../images/katalon-studio/docs/using-autoit-for-authentication-in-katalon-studio/wpMJM58XL4bJUF-zmJZPMKebEtKP5jEyWJJpawmha20-V2RugS)

3\. **Steps Details:**

1.  Working with AutoIt file:
    

*   *   *   Proceed to edit credential to your own account:
            
            *   Open autoIt Script Editor (SciTE)
                
            *   Open (or create new) autoit file with contents:
                

> Change your own credential at "Username" and "Password" fields

```groovy
WinWaitActive("","Authentication Required","10")
WinFlash("", "Authentication Required",4,500)
If WinExists("","Authentication Required") Then
  Send("Username{TAB}")
  Send("Password{Enter}")
ElseIf WinExists("","Chrome Legacy Window")Then
  Send("Username{TAB}")
  Send("Password{Enter}")
ElseIf WinExists("","Windows Security") Then
  Send("Username{TAB}")
  Send("Password{Enter}")
EndIf
```

*   Save this file to your desired location. You would have a file with *au3 format. Right click on file and select "Compile Script" option to create .exe file.
    
             b. Adding steps to call autoIt (*.exe) file in Katalon Studio Script Mode
    

```groovy
WebUI.openBrowser('') 
autoit_prj = '[your_autoit_file_path].exe' 
Runtime.getRuntime().exec(autoit_prj) 
Thread.sleep(3000);
WebUI.navigateToUrl('Your test site url')
```

For example:

```groovy
WebUI.openBrowser('')
 
//Sample path. Change it to your saved location of autoIT script
autoit_prj = 'D:\\PS-Katalon\\AutoIT\\Authentication_Custom.exe'
Runtime.getRuntime().exec(autoit_prj)
Thread.sleep(3000);
 
//Sample URL. Please change it to your authentication URL
WebUI.navigateToUrl('http://the-internet.herokuapp.com/basic_auth')
```

  
Now it's all done. You can run your test case to see how it works.