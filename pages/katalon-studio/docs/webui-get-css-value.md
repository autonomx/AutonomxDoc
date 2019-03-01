---
title: "[WebUI] Get CSS Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-css-value.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Get+CSS+Value/"
    - "/display/KD/%5BWebUI%5D%20Get%20CSS%20Value/"
    - "/x/voYw/"
    - "/katalon-studio/docs/webui-get-css-value/"
description: 
---
Description
-----------

Get the [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) value of a web element.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| String | CSS value of a web element |

Example
-------

You want to get 'font-size' CSS value of 'Book Appointment' button

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

'Get \'font-size\' CSS value of \'Book Appointment\' button'
WebUI.getCSSValue(findTestObject('Page_CuraAppointment/btn_BookAppointment'), 'font-size')

'Close browser'
WebUI.closeBrowser()
```