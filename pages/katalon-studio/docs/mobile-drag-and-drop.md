---
title: "[Mobile] Drag And Drop" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-drag-and-drop.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Drag+And+Drop/"
    - "/display/KD/%5BMobile%5D%20Drag%20And%20Drop/"
    - "/x/L4gY/"
    - "/katalon-studio/docs/mobile-drag-and-drop/"
description: 
---
Description
-----------

Drag and drop an element onto another element

Parameters  
------------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| fromObject  | TestObject  | required | represent the drag-able mobile element |
| toObject  | TestObject | required | represent the drop-able mobile element |
| timeout  | int | required | system will wait at most timeout (seconds) to return result |
| flowControl  | FailureHandling  | optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to drag and drop a button into another frame in 10 seconds timeout.

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
Mobile.dragAndDrop(findTestObject('Application/App/Activity/android.widget.Button'),findTestObject('Application/App/Activity/android.widget.Frame 1'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```