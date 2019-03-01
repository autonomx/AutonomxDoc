---
title: "[WebUI] Verify Alert Not Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-alert-not-present.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Alert+Not+Present/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Alert%20Not%20Present/"
    - "/x/iYgY/"
    - "/katalon-studio/docs/webui-verify-alert-not-present/"
description: 
---
Description
-----------

Verify if alert does not present

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| timeout | int | Required | Timeout waiting for alert to NOT present. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li>true if alert is not present</li><li>otherwise, false</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if an alert is NOT present in 20 seconds.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable

'Open browser and navigate to website which alert is not present'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Verify alert is not present after 20 seconds'
WebUI.verifyAlertNotPresent(20)

'Close browser'
WebUI.closeBrowser()
```