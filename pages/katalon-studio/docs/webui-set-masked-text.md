---
title: "[WebUI] Set Masked Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-set-masked-text.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Set+Masked+Text/"
    - "/display/KD/%5BWebUI%5D%20Set%20Masked%20Text/"
    - "/x/JBBO/"
    - "/katalon-studio/docs/webui-set-masked-text/"
description: 
---
Description  
-------------

Set the value of an input field, as though you type it in. It also clears the previous value of the input field. The text value will be masked.

Parameters  

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to  | TestObject | Required | Represent a web element. |
| text | String | Required | The text to type in. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example  
---------

You want to set the masked text to **Password** fieldof a login form.

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
WebUI.setMaskedText(findTestObject('Page_Login/txt_Password'), Password)

'Click on \'Login\' button'
WebUI.click(findTestObject('Page_Login/btn_Login'))

'Close browser'
WebUI.closeBrowser()
```