---
title: "[Mobile] Tap And Hold" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-tap-and-hold.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Tap+And+Hold/"
    - "/display/KD/%5BMobile%5D%20Tap%20And%20Hold/"
    - "/x/9IgY/"
    - "/katalon-studio/docs/mobile-tap-and-hold/"
description: 
---
Description
-----------

Tap and hold on a mobile element for a duration

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element. |
| duration | Number  | Required | Duration (in seconds) that the tap is held on the element, if set to <= 0 then will use default duration. |
| timeout  | int | Required | System will wait at most timeout (seconds) to return the result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to tap on 'App' control and hold it for 10 seconds.

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
 
'Check on subscribe checkbox'
Mobile.checkElement(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```