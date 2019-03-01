---
title: "[WebUI] Close Window Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-close-window-index.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Close+Window+Index/"
    - "/display/KD/%5BWebUI%5D%20Close%20Window%20Index/"
    - "/x/8ooY/"
    - "/katalon-studio/docs/webui-close-window-index/"
description: 
---
Description  
-------------

Close window with the given index.

> *   Window index is counted by order of window's appearance and starts from 0. After closing a window, all windows appeared after that window will have index decreased by 1.
> *   For example: we have 4 windows (index: 0, 1, 2, 3); close window index 1, after closing, the window with old index 2 will become new index 1, the window with old index 3 will become new index 2.
> *   If users close current window, system will switch to the first window. If current window happens to be the first window, system will switch to the new first window. However we strongly recommend users switch to another window before closing current window to prevent any confusion.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | Object | Required | The index of the window to close, index is 0-based number. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to close the window that has index 1.

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
WebUI.closeWindowIndex(1)

'Close browser'
WebUI.closeBrowser()
```