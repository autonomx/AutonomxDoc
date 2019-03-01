---
title: "[WebUI] Submit" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-submit.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Submit/"
    - "/display/KD/%5BWebUI%5D%20Submit/"
    - "/x/EIgY/"
    - "/katalon-studio/docs/webui-submit/"
description: 
---
Description
-----------

If the current element is a form or an element within a form, then this will be submitted. If this causes the current page to change, then this method will block until the new page is loaded.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to submit a form after entering username and password.

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

'Open browser and navigate to login form'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Input username'
WebUI.setText(findTestObject('txt_UserName'), Username)

'Input password'
WebUI.setText(findTestObject('txt_Password'), Password)

'Submit form'
WebUI.submit(findTestObject('frm_Login'))

'Close browser'
WebUI.closeBrowser()
```