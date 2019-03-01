---
title: "[WebUI] Get Alert Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-alert-text.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Get+Alert+Text/"
    - "/display/KD/%5BWebUI%5D%20Get%20Alert%20Text/"
    - "/x/-4cY/"
    - "/katalon-studio/docs/webui-get-alert-text/"
description: 
---
Description
-----------

Get displayed text of an alert popup (alert, confirmation popup, prompt popup)

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param | Param Type | Description |
| --- | --- | --- |
| text | String | Text of an alert popup |

Example
-------

You want to get text of an alert popup and verify it

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

'Open browser and navigate to website which will show alert'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Get text alert on the alert when it\'s shown'
alertText = WebUI.getAlertText()

'Verify text alert is correct or not'
WebUI.verifyMatch(alertText, 'This is an alert', false)

'Close browser'
WebUI.closeBrowser()

```