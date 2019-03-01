---
title: "[WebUI] Verify Option Not Present By Label" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-option-not-present-by-label.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Option+Not+Present+By+Label/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Option%20Not%20Present%20By%20Label/"
    - "/x/PpIY/"
    - "/katalon-studio/docs/webui-verify-option-not-present-by-label/"
description: 
---
Description
-----------

Verify if the option with the given displayed text does not exist.

![](../../images/katalon-studio/docs/webui-verify-option-not-present-by-label/label.jpg)

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| label | String | Required | Displayed texts of the options to be verified if not existing. |
| isRegex | boolean | Required | True if the label is a regular expression, false by default. |
| timeout | int | Required | System will wait at most timeout (seconds)to return the result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true:</strong>&nbsp;if options with given displayed text do NOT present.</li><li><strong>false:</strong>&nbsp;if options with given displayed text present.</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if "HongKong Cura Health Center" option does not present in the list.

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

'Click on \'Book Appointment\' button'
WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Verify \'HongKong Cura Health Center\' option in \'Facility\' list is not present'
WebUI.verifyOptionNotPresentByLabel(findTestObject('Page_CuraAppointment/lst_Facility'), 'HongKong Cura Health Center', false, 
    20)

'Close browser'
WebUI.closeBrowser()
```