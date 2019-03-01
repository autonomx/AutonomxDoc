---
title: "[WebUI] Verify Options Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-options-present.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Options+Present/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Options%20Present/"
    - "/x/xw1O/"
    - "/katalon-studio/docs/webui-verify-options-present/"
description: 
---
Description
-----------

Verify if all expected options are present within the given test object.

![](../../images/katalon-studio/docs/webui-verify-options-present/label.jpg)

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| expectedOptions | List | Required | The list of all expected options for the given web element. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><strong>true:</strong>&nbsp;if all expected options are present.</li><li><strong>false:</strong>&nbsp;if one of the expected options are NOT present.</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if 'HongKong Cura Health Center' is present in the list.

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

'Verify both \'HongKong Cura Health Center\' and \'Seoul CURA Healthcare Center\' in \'Facility\' list are all present'
WebUI.verifyOptionsPresent(findTestObject('Page_CuraAppointment/lst_Facility'), ['HongKong Cura Health Center', 'Seoul CURA Healthcare Center'])

'Close browser'
WebUI.closeBrowser()
```