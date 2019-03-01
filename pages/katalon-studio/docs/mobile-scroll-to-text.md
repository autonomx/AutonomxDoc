---
title: "[Mobile] Scroll To Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-scroll-to-text.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Scroll+To+Text/"
    - "/display/KD/%5BMobile%5D%20Scroll%20To%20Text/"
    - "/x/h5MY/"
    - "/katalon-studio/docs/mobile-scroll-to-text/"
description: 
---
Description
-----------

Scroll to an element which contains the given text.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | String | Required | Text of the element to scroll to |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

Scroll to the element which the displayed text is Xfermodes.

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

'Get item\'s label'
def itemText = Mobile.getText(findTestObject('Application/Graphics/android.widget.TextView - Xfermodes'), GlobalVariable.G_Timeout)

'Verify if item\'s label is equal to \"Xfermodes\"'
Mobile.verifyEqual(itemText, 'Xfermodes')

'Close application on current selected android\'s device'
Mobile.closeApplication()
```