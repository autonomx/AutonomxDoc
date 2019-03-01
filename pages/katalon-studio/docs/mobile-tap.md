---
title: "[Mobile] Tap" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-tap.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Tap/"
    - "/display/KD/%5BMobile%5D%20Tap/"
    - "/x/LpMY/"
    - "/katalon-studio/docs/mobile-tap/"
description: 
---
Description
-----------

Tap on a mobile element.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| timeout | int | Required | Maximum period of time (in seconds) that system will wait to return result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to tap on 'Graphics' control.

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

'Tap on graphics control'
Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```