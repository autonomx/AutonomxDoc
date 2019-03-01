---
title: "[WebUI] Get Viewport Height" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-viewport-height.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Get+Viewport+Height/"
    - "/display/KD/%5BWebUI%5D%20Get%20Viewport%20Height/"
    - "/x/r4sY/"
    - "/katalon-studio/docs/webui-get-viewport-height/"
description: 
---
Description  
-------------

Get current viewport's height value.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| flowControl | FailureHandling | Optional | Specify [failure handling](/display/KD/Failure+handling) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| int | Current viewport's height. |

Example 
--------

You want to get viewport height value of web browser. The output is stored in variable "viewport_height".

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

'Open browser and navigate to AUT'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Get current viewport height'
viewport_height = WebUI.getViewportHeight()

'Close browser'
WebUI.closeBrowser()
```