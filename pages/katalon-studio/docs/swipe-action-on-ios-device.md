---
title: "Swipe action on iOS device" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/swipe-action-on-ios-device.html 
redirect_from:
    - "/display/KD/Swipe+action+on+iOS+device/"
    - "/display/KD/Swipe%20action%20on%20iOS%20device/"
    - "/x/rgnR/"
    - "/katalon-studio/docs/swipe-action-on-ios-device/"
description: 
---
Instead of using 'Swipe' keyword which requires you to pass in coordinates, you can utilize supported backend mobile gestures from [Appium](http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-gestures/index.html#mobile-swipe). Below is sample custom keyword:

```groovy
import org.openqa.selenium.JavascriptExecutor
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import io.appium.java_client.AppiumDriver	
 
    @Keyword
	def swipeDirection(String direction){
		JavascriptExecutor js = (JavascriptExecutor) getCurrentSessionMobileDriver()
		HashMap<String, String> scrollObject = new HashMap<String, String>()
		scrollObject.put("direction", direction)
		js.executeScript("mobile: swipe", scrollObject)
	}

	@Keyword
	def AppiumDriver getCurrentSessionMobileDriver() {
		return MobileDriverFactory.getDriver();
	}
```