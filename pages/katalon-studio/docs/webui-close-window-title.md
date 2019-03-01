---
title: "[WebUI] Close Window Title" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-close-window-title.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Close+Window+Title/"
    - "/display/KD/%5BWebUI%5D%20Close%20Window%20Title/"
    - "/x/CYsY/"
    - "/katalon-studio/docs/webui-close-window-title/"
description: 
---
Description  
-------------

Close window with the given title.

> If users close the current window, the system will switch to the first window. If current window happens to be the first window, the system will switch to a new first window. However, we strongly recommend users switch to another window before closing current window to prevent any confusion.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| title | String | Required | Title of the window to close. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to close the window that has title "Documentation".

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

'Close Documentation window'
WebUI.closeWindowTitle('Documentation')

'Close browser'
WebUI.closeBrowser()
```