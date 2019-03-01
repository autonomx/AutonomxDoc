---
title: "[Mobile] Swipe" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-swipe.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Swipe/"
    - "/display/KD/%5BMobile%5D%20Swipe/"
    - "/x/-pIY/"
    - "/katalon-studio/docs/mobile-swipe/"
description: 
---
Description
-----------

Simulate swiping fingers on the mobile device.

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th><th>Note</th></tr></thead><tbody><tr><td>startX</td><td>int</td><td>Required</td><td>Starting x position</td><td>&nbsp;</td></tr><tr><td>startY</td><td>int</td><td>Required</td><td>Starting y position</td><td>&nbsp;</td></tr><tr><td>endX</td><td>int</td><td>Required</td><td>Ending x position</td><td>Since 5.1.0.2:<br>Relative x position of startX</td></tr><tr><td>endY</td><td>int</td><td>Required</td><td>Ending y position</td><td>Since 5.1.0.2<br>Relative y position of start Y</td></tr><tr><td>flowControl</td><td>FailureHandling</td><td>Optional</td><td>Specify <a class="external-link" href="/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td><td>&nbsp;</td></tr></tbody></table>

Example 
--------

You want to swipe from (200,300) position to (400,600) position on current screen.

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

Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

'Swipe from 200,300 to 400,600 posisition on screen'
Mobile.swipe(200, 300, 400, 600)
 
'Since 5.1.0.2, endX and endY will be relative position of (startX, startY) position
Mobile.swipe(200, 300, 200, 300)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```