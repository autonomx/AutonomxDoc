---
title: "[WebUI] Authenticate" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-authenticate.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Authenticate/"
    - "/display/KD/%5BWebUI%5D%20Authenticate/"
    - "/x/xYgY/"
    - "/katalon-studio/docs/webui-authenticate/"
description: 
---
Description
-----------

Navigate to a page that requires authentication. System will enter username and password.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| url | String | Required | URL of the page to navigate. |
| userName | String | Required | Username to authenticate. |
| password | String | Required | Password to authenticate. |
| timeout | int | Required | Time to wait since navigating to the page until entering username. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to verify if 'Make Appointment' button has attribute id with value: 'btnMakeAppointment' 

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
WebUI.openBrowser('')

'Input username and password on authentication dialog.'
WebUI.authenticate('http://the-internet.herokuapp.com/basic_auth', 'admin', 'admin', 12)

'Close browser'
WebUI.closeBrowser()
```