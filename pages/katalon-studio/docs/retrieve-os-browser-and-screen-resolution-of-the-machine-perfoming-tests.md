---
title: "Retrieve OS, browser and screen resolution of the machine perfoming tests" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/retrieve-os-browser-and-screen-resolution-of-the-machine-perfoming-tests.html 
redirect_from:
    - "/display/KD/Retrieve+OS%2C+browser+and+screen+resolution+of+the+machine+perfoming+tests/"
    - "/display/KD/Retrieve%20OS%2C%20browser%20and%20screen%20resolution%20of%20the%20machine%20perfoming%20tests/"
    - "/x/XgXR/"
    - "/katalon-studio/docs/retrieve-os-browser-and-screen-resolution-of-the-machine-perfoming-tests/"
description: 
---
During or after test executions, you may want to capture additional information about OS, browser, and screen resolution of the machine performing tests. Below are some sample custom keywords to help you with this task:

```groovy
package com.mycompany

import regular.stuff.here

import org.openqa.selenium.Capabilities
import org.openqa.selenium.WebDriver
import org.openqa.selenium.remote.RemoteWebDriver
import com.kms.katalon.core.webui.driver.DriverFactory
import java.awt.*

public class GetTestingConfig {
@Keyword
def getOperatingSystem () {
	println System.getProperty('os.name')
}

@Keyword
def getBrowserAndVersion() {
	WebDriver driver = DriverFactory.getWebDriver()
	Capabilities caps = ((RemoteWebDriver) driver).getCapabilities()
	String browserName = caps.getBrowserName().capitalize()
	String browserVersion = caps.getVersion()
	println browserName + ' ' + browserVersion
}

@Keyword
def getScreenResolution() {
	Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize()
	Integer screenHeight = screenSize.height
	Integer screenWidth = screenSize.width
	println screenWidth + 'x' + screenHeight }
}
```

**References:**[ ](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/Capabilities.html)

*   [Capabilities](https://seleniumhq.github.io/selenium/docs/api/java/org/openqa/selenium/Capabilities.html)

*   [RemoteWebDriver  
    ](https://github.com/SeleniumHQ/selenium/blob/master/java/client/src/org/openqa/selenium/remote/RemoteWebDriver.java)
*   [D](https://github.com/SeleniumHQ/selenium/blob/master/java/client/src/org/openqa/selenium/remote/RemoteWebDriver.java)[riverFactory](https://api-docs.katalon.com/com/kms/katalon/core/webui/driver/DriverFactory.html)

_Credit to [Drunda Ninbel](https://forum.katalon.com/discussion/6853/how-to-retrieve-os-browser-and-screen-resolution-of-the-machine-performing-my-test-suite#Comment_15742)_