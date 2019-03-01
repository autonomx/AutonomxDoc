---
title: "[Mobile] Run iOS App in Background and Wait" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-run-ios-app-in-background-and-wait.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Run+iOS+App+in+Background+and+Wait/"
    - "/display/KD/%5BMobile%5D%20Run%20iOS%20App%20in%20Background%20and%20Wait/"
    - "/x/pI0Y/"
    - "/katalon-studio/docs/mobile-run-ios-app-in-background-and-wait/"
description: 
---
Description  
-------------

Running the active application in the background.

> This keyword is used for iOS application only.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| seconds | int | Required | Amounts of time (in seconds) for the application to run in the background. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to run your iOS application in the background and wait for 10 seconds. 

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

'Start application on current selected android device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

'Run the appication in background and wait for 10 seconds'
Mobile.runIOSAppInBackgroundAndWait(10)

'Close application on current selected android device'
Mobile.closeApplication()
```