---
title: "[WebUI] Drag And Drop By Offset" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-drag-and-drop-by-offset.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Drag+And+Drop+By+Offset/"
    - "/display/KD/%5BWebUI%5D%20Drag%20And%20Drop%20By%20Offset/"
    - "/x/PokY/"
    - "/katalon-studio/docs/webui-drag-and-drop-by-offset/"
description: 
---
Description
-----------

Drag an object and drop it to an offset location.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceObject | TestObject | Required | The source object. |
| xOffset | int | Required | x offset. |
| yOffset | int | Required | y offset. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to drag an element into (200,400) location on the screen.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS

'Open browser and navigate to demo AUT site.'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Drag and drop an element to (200,400) location'
WebUI.dragAndDropByOffset(findTestObject('Page_CURA/div_dragMe'), 200, 400)

'Close browser'
WebUI.closeBrowser()
```