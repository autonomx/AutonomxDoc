---
title: "[WebUI] Verify Element Checked" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-checked.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Element+Checked/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Element%20Checked/"
    - "/x/HYkY/"
    - "/katalon-studio/docs/webui-verify-element-checked/"
description: 
---
Description
-----------

Verify if the given web element is checked.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| timeout | int | Required | System will wait at most timeout (seconds) to return result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><p>Result of verification:</p><ul><li>true if the element is checked.</li><li>false if the element is unchecked.</li></ul><p>&nbsp;</p></td></tr></tbody></table>

Example
-------

You want to verify if the 'Medicaid' checkbox is checked in 10 seconds timeout.

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
import org.openqa.selenium.Keys as Keys

'Open browser and navigate to demo AUT site'
WebUI.openBrowser('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraAppointment/btn_BookAppointment'))

WebUI.verifyElementChecked(findTestObject('Page_CuraAppointment/chk_Medicaid'), 10)

'Close Browser'
WebUI.closeBrowser()
```