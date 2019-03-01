---
title: "[Mobile] Wait For Element Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-wait-for-element-present.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Wait+For+Element+Present/"
    - "/display/KD/%5BMobile%5D%20Wait%20For%20Element%20Present/"
    - "/x/iZIY/"
    - "/katalon-studio/docs/mobile-wait-for-element-present/"
description: 
---
Description
-----------

Wait for the given mobile element to present within the given time (in seconds). 

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| timeOut  | int  | Required | Maximum period of time (in seconds) that system will wait to return a result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>Boolean</td><td><ul><li><strong>true</strong>:&nbsp;the element is present&nbsp;within&nbsp;the timeout.</li><li><strong>false</strong>: the element is NOT present within&nbsp;the timeout.</li></ul></td></tr></tbody></table>

Example 
--------

You want to wait for 'App' control to be present in 10 seconds timeout.

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

'Wait for app control to be present in 10 seconds timeout'
Mobile.waitForElementHasAttribute(findTestObject(findTestObject('Object Repository/Application/android.widget.TextView - App')), 'class', 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```