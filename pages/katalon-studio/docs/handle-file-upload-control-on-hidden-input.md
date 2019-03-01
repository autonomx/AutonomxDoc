---
title: "Handle file upload control on hidden input" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle-file-upload-control-on-hidden-input.html 
redirect_from:
    - "/display/KD/Handle+file+upload+control+on+hidden+input/"
    - "/display/KD/Handle%20file%20upload%20control%20on%20hidden%20input/"
    - "/x/eQXR/"
    - "/katalon-studio/docs/handle-file-upload-control-on-hidden-input/"
description: 
---
Hidden input controls have CSS display property of [none](https://www.w3schools.com/css/css_display_visibility.asp). To handle this case, we have two approaches below:

1.  CSS Overwrite:

```groovy
WebDriver driver = DriverFactory.getWebDriver();
JavascriptExecutor js = (JavascriptExecutor) driver;
js.executeScript("document.getElementById('chooseFile0').style.display='inline-block'");
WebUI.uploadFile(findTestObject('input_FrontImage'), path+imagePath)
js.executeScript("document.getElementById('chooseFile0').style.display='none'");
```

  
2\. Java Robot:

```groovy
StringSelection s = new StringSelection(filePath);
Toolkit.getDefaultToolkit().getSystemClipboard().setContents(s, null);
Robot robot = new Robot();
robot.keyPress(java.awt.event.KeyEvent.VK_CONTROL);
robot.keyPress(java.awt.event.KeyEvent.VK_V);
Thread.sleep(1000);
robot.keyPress(java.awt.event.KeyEvent.VK_ENTER);
```

**References:**

*   **[Java Robot](https://docs.oracle.com/javase/7/docs/api/java/awt/Robot.html)**
*   **[JavascriptExecutor](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/JavascriptExecutor.html)**
*   **[getWebDriver()](https://api-docs.katalon.com/com/kms/katalon/core/webui/driver/DriverFactory.html#getWebDriver())**

_Credit to [Jason Truman](https://forum.katalon.com/discussion/1860/handling-file-uploads-on-hidden-input#Comment_2331)_