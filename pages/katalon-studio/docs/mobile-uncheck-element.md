---
title: "[Mobile] Uncheck Element" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-uncheck-element.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Uncheck+Element/"
    - "/display/KD/%5BMobile%5D%20Uncheck%20Element/"
    - "/x/BIkY/"
    - "/katalon-studio/docs/mobile-uncheck-element/"
description: 
---
Description
-----------

Un-check a check-box mobile element (android.widget.CheckBox for Android, UIASwitch for iOS)

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element. |
| timeout  | int | Required | System will wait at most timeout (seconds) to return a result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to uncheck 'Subscribe' checkbox.

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
 
'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)
 
'Tap and hold app control for 10 seconds'
Mobile.tapAndHold(findTestObject('Application/android.widget.TextView - App'),10, 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)
 
'Uncheck subscribe checkbox'
Mobile.uncheckElement(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```