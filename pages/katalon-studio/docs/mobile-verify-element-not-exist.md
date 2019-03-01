---
title: "[Mobile] Verify Element Not Exist" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-exist.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Not+Exist/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Exist/"
    - "/x/vZEY/"
    - "/katalon-studio/docs/mobile-verify-element-not-exist/"
description: 
---
Description
-----------

Verify if a mobile element is not present.

Parameters  
------------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element is NOT present; otherwise,** false**

Example
-------

You want to verify if 'App' button is NOT presented in 10 seconds timeout.

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
 
'Verify App control is presented in 10 seconds timeout'
Mobile.verifyElementNotExist(findTestObject('Application/android.widget.TextView - App'), 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```