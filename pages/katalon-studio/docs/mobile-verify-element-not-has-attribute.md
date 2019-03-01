---
title: "[Mobile] Verify Element Not Has Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-has-attribute.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Not+Has+Attribute/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Has%20Attribute/"
    - "/x/zZEY/"
    - "/katalon-studio/docs/mobile-verify-element-not-has-attribute/"
description: 
---
Description
-----------

Verify if the element has an attribute with the specified name 

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element. |
| attirbuteName | String | Required | The name of the attribute to verify. |
| timeout  | int | Required | System will wait at most timeout (seconds) to return result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element doesn't have the attribute with the specified name; otherwise, **false**

Example
-------

You want to verify 'graphics' control doesn't have 'package' attribute

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

Mobile.scrollToText('Xfermodes')


'Verify graphics control doesn\'t have \'package\' attribute'
Mobile.verifyElementNotHasAttribute(findTestObject('Application/android.widget.TextView - Graphics'), 'package', 12)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```