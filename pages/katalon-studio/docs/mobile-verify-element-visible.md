---
title: "[Mobile] Verify Element Visible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-visible.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Visible/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Visible/"
    - "/x/3ZEY/"
    - "/katalon-studio/docs/mobile-verify-element-visible/"
description: 
---
Description
-----------

Verify if a mobile element is visible.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| timeout  | int | Required | System will wait at most timeout (seconds) to return a result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element is visible; otherwise,** false**

Example
-------

You want to verify 'App' control is visible.

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

'Verify app control is visible'
Mobile.verifyElementVisible(findTestObject(findTestObject('Object Repository/Application/android.widget.TextView - App')), 20)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```