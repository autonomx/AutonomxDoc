---
title: "[Mobile] Verify Element Checked" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-checked.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Checked/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Checked/"
    - "/x/cJEY/"
    - "/katalon-studio/docs/mobile-verify-element-checked/"
description: 
---
Description
-----------

Verify if a mobile element is checked.    

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| timeout  | int | Required | System will wait at most timeout (seconds) to return result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element is checked; otherwise, **false**

Example
-------

You want to verify if subscribe checkbox is checked 

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
 
'Check on subscribe checkbox'
Mobile.checkElement(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)

'Verify subscribe checkbox is checked or not'
Mobile.verifyElementChecked(findTestObject('Application/App/Activity/android.widget.Check - Subscribe'), 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```