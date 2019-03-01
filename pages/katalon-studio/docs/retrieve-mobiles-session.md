---
title: "Retrieve mobile's session" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/retrieve-mobiles-session.html 
redirect_from:
    - "/display/KD/Retrieve+mobile%27s+session/"
    - "/display/KD/Retrieve%20mobile%27s%20session/"
    - "/x/fwXR/"
    - "/katalon-studio/docs/retrieve-mobiles-session/"
description: 
---
To get current mobile's session after using 'Start Application' built-in keyword, use the sample code below:

```groovy
import org.openqa.selenium.WebDriver
import org.openqa.selenium.WebElement
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import io.appium.java_client.AppiumDriver 

Mobile.startApplication("Your Application", false)
AppiumDriver<?> driver = MobileDriverFactory.getDriver()
```

**References:**

*   [Start Application](/display/KD/%5BMobile%5D+Start+Application)