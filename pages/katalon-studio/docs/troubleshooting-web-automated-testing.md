---
title: "Troubleshooting web automated testing" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/troubleshooting-web-automated-testing.html 
redirect_from:
    - "/display/KD/Troubleshooting+web+automated+testing/"
    - "/display/KD/Troubleshooting%20web%20automated%20testing/"
    - "/x/5BpO/"
    - "/katalon-studio/docs/troubleshooting-web-automated-testing/"
description: 
---
The following article will help you troubleshoot some problems during web automated testing using Katalon Studio.

Timed out waiting for driver server to start
--------------------------------------------

*   *   Root cause: Incompatible issue when using current Edge driver
        
    *   Solution:
        
        *   Download correct Edge driver from this page: [https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) based on your OS build (Go to **Start** > **Settings** > **System** > **About** and locate the number next to OS Build on the screen)
            
        *   Copy downloaded Edge driver and replace it in existing edgedriver folder of Katalon Studio, e.g: **C:\\Katalon\_Studio\_Windows_64-4.8\\configuration\\resources\\drivers\\edgedriver**
            

Unable to record on Internet Explorer
-------------------------------------

1.  *   Root cause: Add-on on Internet Explorer is not turned on.
        
    *   Solution:
        
        *   Open 'Manage Add-ons' in Internet Explorer: [https://support.microsoft.com/en-us/help/17447/windows-internet-explorer-11-manage-add-ons](https://support.microsoft.com/en-us/help/17447/windows-internet-explorer-11-manage-add-ons)
            
        *   Enable the RecorderExtension.RecorderBHO
            

              ![](../../images/katalon-studio/docs/troubleshooting-web-automated-testing/image2017-10-27-163A293A17.png)

Unable to connect to Katalon server
-----------------------------------

Root cause: Windows Firewall blocks connection between Katalon Studio and browser's drivers

Solution: You need to allow the following .exe files:

*   *   geckodriver.exe
    *   chromedriver.exe
    *   iedriverserver.exe

to communicate through Windows Firewall. Here is the full [guide](https://www.howtogeek.com/howto/uncategorized/how-to-create-exceptions-in-windows-vista-firewall/) for to access this interface.

These executable files can be located in : **<Katalon Studio folder>\\configuration\\resources\\drivers**

**![](../../images/katalon-studio/docs/troubleshooting-web-automated-testing/Screen-Shot-2018-04-24-at-13.51.51.png)![](../../images/katalon-studio/docs/troubleshooting-web-automated-testing/Screen-Shot-2018-04-24-at-13.51.41.png)  
**

You may also need to add Google Chrome (chrome.exe) and Firefox (firefox.exe) in the worst case if your current Windows Firewall block them as well.

Use different browser versions
------------------------------

In case you want Katalon Studio to use different versions besides the current installed version, there are two ways to do it:

*   Use custom keywords

*   *   These Firefox instances should be installed on your machine first.
    *   Create a [custom keyword](/display/KD/Define+custom+keywords) to open the browser. Press Ctrl + Shift + O to automatically import necessary packages: 

```groovy
package com.example

import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import org.openqa.selenium.firefox.FirefoxDriver
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.webui.driver.DriverFactory

public class WebUICustomKeywords {
 @Keyword
 def openFirefoxBrowser(String firefoxPath, String firefoxDriver) {
  //Set path to Firefox version
  System.setProperty("webdriver.firefox.bin", firefoxPath)
  //Set path to Firefox driver: <Katalon Studio folder>\configuration\resources\drivers\firefox_win64\geckodriver.exe
  System.setProperty("webdriver.gecko.driver", firefoxDriver)
  WebDriver driver = new FirefoxDriver()
  DriverFactory.changeWebDriver(driver)
 }

 @Keyword

 def openChromeBrowser(String chromeDriverPath, String chromePath)
 {
//Set path to chromedriver driver: <Katalon Studio folder>\configuration\resources\drivers\chrome_win32\chromedriver.exe
  System.setProperty("webdriver.chrome.driver", chromeDriverPath)
  ChromeOptions options = new ChromeOptions()
  //Set path to Chrome binary
  options.setBinary(chromePath)
  WebDriver driver = new ChromeDriver(options)
  DriverFactory.changeWebDriver(driver)
 }
}
```

*   *   In a test case, **use this custom keyword instead of 'Open Browser' keyword**, e.g:

```groovy
CustomKeywords.'com.example.WebUICustomKeywords.openFirefoxBrowser'('C:\\Program Files\\Mozilla Firefox 52\\firefox.exe', 
 'C:\\5.4\\Katalon Studio Windows 64\\configuration\\resources\\drivers\\firefox_win64\\geckodriver.exe')

WebUI.navigateToUrl(GlobalVariable.G_SiteURL)

WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))
```

*   Downgrade browser's version:  
    Another approach is downgrade your current browser's version to a version you want. If you want to use a very old version of your current browser, you may need to downgrade or upgrade browser's drivers as well as Selenium WebDriver, please refer to this guide: [https://docs.katalon.com/display/KD/Update+or+Replace+Web+Browser+Drivers+and+Selenium](/display/KD/Update+or+Replace+Web+Browser+Drivers+and+Selenium)