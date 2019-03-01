---
title: "[WebUI] Upload File" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-upload-file.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Upload+File/"
    - "/display/KD/%5BWebUI%5D%20Upload%20File/"
    - "/x/gYkY/"
    - "/katalon-studio/docs/webui-upload-file/"
description: 
---
Description
-----------

Upload file to an input with type = "file"**.**

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| fileAbsolutePath  | String | Required | Absolute path of the file on local machine. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example  
---------

You want to upload "test-photo.png" located in "D:\\" to the object "input_browse" on web page.

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

'Upload test-photo.png to input_browse'
WebUI.uploadFile(findTestObject('input_browse'), 'D:\\test-photo.png')

'Close browser'
WebUI.closeBrowser()
```