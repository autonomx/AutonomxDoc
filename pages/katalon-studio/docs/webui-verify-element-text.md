---
title: "[WebUI] Verify Element Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-text.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Element+Text/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Element%20Text/"
    - "/x/DA5O/"
    - "/katalon-studio/docs/webui-verify-element-text/"
description: 
---
Description
-----------

Verify text of an element.

Parameters

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| expectedText | String | Required | Text of the element to verify. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop |

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><p class="p1"><strong>true</strong> if the element has the desired text, otherwise <strong>false</strong>.</p><p>&nbsp;</p></td></tr></tbody></table>

Example
-------

You want to verify 'Make Appointment' button has the correct 'Make Appointment' label 

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpointfsdf
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
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.testobject.TestObject as TestObject


WebUI.openBrowser(GlobalVariable.G_SiteURL)
'Verify Make Appointment button has correct label'
WebUI.verifyElementText(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 'Make Appointment')

'Click on \'Book Appointment\' button'
WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

WebUI.closeBrowser()
```