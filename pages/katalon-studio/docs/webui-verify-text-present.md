---
title: "[WebUI] Verify Text Present" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-text-present.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Text+Present/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Text%20Present/"
    - "/x/YIoY/"
    - "/katalon-studio/docs/webui-verify-text-present/"
description: 
---
Description  
-------------

Verify if the given text presents anywhere in the page source.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | String | Required | Text to be verified if presenting anywhere in the page source. |
| isRegex | Boolean | Required | Indicate whether the expected text is a regular expression. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| Boolean | true, if text presents anywhere in the page source; otherwise, false. |

Example 
--------

You want to verify if the text "Login successfully" presents in the current page.

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

'Open browser and navigate to AUT'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)

'Input password'
WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)

'Click on \'Login\' button'
WebUI.click(findTestObject('Page_Login/btn_Login'))

'Verify message after logging in'
WebUI.verifyTextPresent("Login successfully", false)

'Close browser'
WebUI.closeBrowser()
```