---
title: "[Mobile] Tap And Hold At Position" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-tap-and-hold-at-position.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Tap+And+Hold+At+Position/"
    - "/display/KD/%5BMobile%5D%20Tap%20And%20Hold%20At%20Position/"
    - "/x/N5MY/"
    - "/katalon-studio/docs/mobile-tap-and-hold-at-position/"
description: 
---
Description
-----------

Tap and hold at a specific position on the screen of the mobile device.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | Number | Required | x position |
| y | Number | Required | y position |
| duration | Number | Required | Duration (in seconds) that the tap is held on the element, if set to <= 0 then will use default duration |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to tap at (200,400) position and hold it for 10 seconds.

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

'Tap at 200,400 position and hold it for 10 seconds'
Mobile.tapAndHoldAtPosition(200, 400, 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```