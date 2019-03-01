---
title: "[WebUI] Set View Port Size" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-set-view-port-size.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Set+View+Port+Size/"
    - "/display/KD/%5BWebUI%5D%20Set%20View%20Port%20Size/"
    - "/x/4YwY/"
    - "/katalon-studio/docs/webui-set-view-port-size/"
description: 
---
Description  
-------------

Set the size of the current window. This will change the outer window dimension and the viewport, synonymous to window.resizeTo() in Javascript.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | int | Required | The target viewport width. |
| height | int | Required | The target viewport height. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/display/KD/Failure+handling) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to set viewport size (703 x 374) for a web browser.

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
'Open browser and navigate to website katalon.com'
WebUI.openBrowser('https://www.katalon.com/')

'Set viewport size 703x347'
WebUI.setViewPortSize(703, 347)

'Close browser'
WebUI.closeBrowser()
```