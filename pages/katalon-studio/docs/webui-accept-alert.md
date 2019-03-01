---
title: "[WebUI] Accept Alert" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-accept-alert.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Accept+Alert/"
    - "/display/KD/%5BWebUI%5D%20Accept%20Alert/"
    - "/x/RYcY/"
    - "/katalon-studio/docs/webui-accept-alert/"
    - "/display/KD/Built-in+Keywords/"
    - "/x/tQTR/"
description: 
---
Description
-----------

Simulate users clicking on "OK" button of an alert popup (alert, confirmation popup, prompt popup).

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to click on 'OK' button (accept) of an alert

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

'Accept alert when the alert is shown'
WebUI.acceptAlert()

'Close browser'
WebUI.closeBrowser()
```