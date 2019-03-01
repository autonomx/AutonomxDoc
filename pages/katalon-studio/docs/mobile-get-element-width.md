---
title: "[Mobile] Get Element Width" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-get-element-width.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Get+Element+Width/"
    - "/display/KD/%5BMobile%5D%20Get%20Element%20Width/"
    - "/x/e4gY/"
    - "/katalon-studio/docs/mobile-get-element-width/"
description: 
---
Description
-----------

Get the width of a mobile element

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element |
| timeout  | int | Required | System will wait at most timeout (seconds) to return result |
| flowControl  | FailureHandling  | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| int | width of a mobile element |

Example
-------

You want to get the width of a button in 10 seconds timeout.

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil

'Get full directory\'s path of android application'
def appPath = PathUtil.relativeToAbsolutePath(GlobalVariable.G_AndroidApp, RunConfiguration.getProjectDir())

'Start application on current selected android\'s device'
Mobile.startApplication(appPath, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)

Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)

Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Drag and drop a button into another frame'
Mobile.getElementWidth(findTestObject('Application/App/Activity/android.widget.Button'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```