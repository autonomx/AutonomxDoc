---
title: "[WebUI] Drag And Drop To Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-drag-and-drop-to-object.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Drag+And+Drop+To+Object/"
    - "/display/KD/%5BWebUI%5D%20Drag%20And%20Drop%20To%20Object/"
    - "/x/QokY/"
    - "/katalon-studio/docs/webui-drag-and-drop-to-object/"
description: 
---
Description
-----------

Drag an object and drop it onto another object.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| sourceObject | TestObject | Required | The source object. |
| destinationObject | TestObject | Required | The destination object. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to drag 'Drop me to target' div and drop it to 'Drop here' div

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

WebUI.openBrowser('https://jqueryui.com/droppable/')

'Drag \'Drop me to target\' div and drop it to \'Drop here\' div'
WebUI.dragAndDropToObject(findTestObject('Page_jQuery_Droppable/div_draggable'), findTestObject('Page_jQuery_Droppable/div_droppable'))

WebUI.closeBrowser()
```