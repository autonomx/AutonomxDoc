---
title: "[WebUI] Mouse Over Offset" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-mouse-over-offset.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Mouse+Over+Offset/"
    - "/display/KD/%5BWebUI%5D%20Mouse%20Over%20Offset/"
    - "/x/dA9O/"
    - "/katalon-studio/docs/webui-mouse-over-offset/"
description: 
---
Description
-----------

Simulate users hovering a mouse over the given element with the relative position (x, y) from the top-left corner of that element.

Parameters

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| offsetX | int | Required | x position in relative to the element. |
| offsetY | int | Required | y position in relative to the element. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to mouse over 'Make Appointment' button.

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

WebUI.openBrowser('http://www.chartjs.org/samples/latest/charts/bar/stacked.html')
WebUI.mouseOverOffset(findTestObject('Page_Bar Chart/canvas_chart'), 20, 30)
WebUI.closeBrowser()
```