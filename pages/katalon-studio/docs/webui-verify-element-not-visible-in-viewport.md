---
title: "[WebUI] Verify Element Not Visible In Viewport" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-not-visible-in-viewport.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Element+Not+Visible+In+Viewport/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Visible%20In%20Viewport/"
    - "/x/HooY/"
    - "/katalon-studio/docs/webui-verify-element-not-visible-in-viewport/"
description: 
---
Description
-----------

Verify if given web element is NOT visible in the current viewport.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| timeout | int | Required | System will wait at most timeout (seconds) to return a result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true:</strong> the element is visible in the current viewport.</li><li><strong>false: </strong>the element is visible is not visible in the current viewport.</li></ul></td></tr></tbody></table>

Example
-------

You want to verify 'Make Appointment'  button is not visible in the current viewport.

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

'Verify \'Make Appointment\' button is not visible in the current viewport.'
WebUI.verifyElementNotVisibleInViewport(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 20)

'Close browser'
WebUI.closeBrowser()
```