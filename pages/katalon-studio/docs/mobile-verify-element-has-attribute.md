---
title: "[Mobile] Verify Element Has Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-has-attribute.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Has+Attribute/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Has%20Attribute/"
    - "/x/npEY/"
    - "/katalon-studio/docs/mobile-verify-element-has-attribute/"
description: 
---
Description
-----------

Verify if the element has an attribute with a specific name.

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| attributeName  | String  | Required | The name of the attribute to verify |
| timeout  | int | Required | System will wait at most timeout (seconds) to return a result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element has the attribute with a specific name; otherwise, **false**

Example
-------

You want to verify 'App' control has 'class' attribute in 10 seconds timeout.

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
 
'Verify App control has class attribute in 10 seconds timeout'
Mobile.verifyElementExist(findTestObject('Application/android.widget.TextView - App'),'class', 10)
 
Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
 
Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```