---
title: "[Mobile] Set Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-set-text.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Set+Text/"
    - "/display/KD/%5BMobile%5D%20Set%20Text/"
    - "/x/lZMY/"
    - "/katalon-studio/docs/mobile-set-text/"
description: 
---
Description
-----------

Set text to a mobile element.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| text | String | Required | The text to set on the mobile element. |
| timeout | int | Required | maximum period of time (in seconds) that system will wait to return a result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to set text on textbox control.

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

'Scroll to element which displayed text is Xfermodes'
Mobile.scrollToText('Xfermodes')

'Set text on textbox control'
Mobile.setText(findTestObject('Application/Graphics/android.widget.TextView - Xfermodes'),'Your text here', GlobalVariable.G_Timeout)

'Verify if item\'s label is equal to \"Xfermodes\"'
Mobile.verifyEqual(itemText, 'Xfermodes')

'Close application on current selected android\'s device'
Mobile.closeApplication()
```