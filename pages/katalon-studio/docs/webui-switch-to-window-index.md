---
title: "[WebUI] Switch To Window Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-switch-to-window-index.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Switch+To+Window+Index/"
    - "/display/KD/%5BWebUI%5D%20Switch%20To%20Window%20Index/"
    - "/x/Bo0Y/"
    - "/katalon-studio/docs/webui-switch-to-window-index/"
description: 
---
Description  
-------------

Switch to the window with given index. 

> Window index is counted by order of window's appearance and starts from 0. After switching, window index does NOT change, i.e. the first window still has index 0, the second window still has index 1 and so on.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | int | Required | The index of the window to switch to, the index is a 0-based number. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to switch to the second window (index 1).

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

'Click on Documentation to open another window'
WebUI.click(findTestObject('Page_Katalon Studio/a_Documentation'))

'Switch to Documentation window'
WebUI.switchToWindowIndex(1)

'Close browser'
WebUI.closeBrowser()
```