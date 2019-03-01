---
title: "[WebUI] Forward" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-forward.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Forward/"
    - "/display/KD/%5BWebUI%5D%20Forward/"
    - "/x/2IgY/"
    - "/katalon-studio/docs/webui-forward/"
description: 
---
Description
-----------

Simulate users clicking "forward" button on their browser.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to close all windows of the browser.

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

'Open browser'
WebUI.openBrowser('')

'Navigate to demo AUT site'
WebUI.navigateToUrl('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Back to homepage'
WebUI.back()

'Forward to \'Make Appointment\' page'
WebUI.forward()

'Close browser'
WebUI.closeBrowser()
```