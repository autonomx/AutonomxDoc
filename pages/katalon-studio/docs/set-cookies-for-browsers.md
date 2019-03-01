---
title: "Set cookies for browsers" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/set-cookies-for-browsers.html 
redirect_from:
    - "/display/KD/Set+cookies+for+browsers/"
    - "/display/KD/Set%20cookies%20for%20browsers/"
    - "/x/WgXR/"
    - "/katalon-studio/docs/set-cookies-for-browsers/"
description: 
---
To set cookies for browsers:

```groovy
import org.openqa.selenium.Cookie
import org.openqa.selenium.WebDriver
import com.kms.katalon.core.webui.driver.DriverFactory

WebUI.openBrowser('')
Cookie ck = new Cookie("name", "value");
WebDriver driver = DriverFactory.getWebDriver()
driver.manage().addCookie(ck)
```

**References:**

*   [Open Browser](/display/KD/%5BWebUI%5D+Open+Browser)

_Credit to [Ana Hong](https://forum.katalon.com/discussion/4607/how-can-i-set-cookies-for-my-browsers-in-katalon#Comment_9644)_