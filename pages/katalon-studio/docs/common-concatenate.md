---
title: "[Common] Concatenate" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-concatenate.html 
redirect_from:
    - "/display/KD/%5BCommon%5D+Concatenate/"
    - "/display/KD/%5BCommon%5D%20Concatenate/"
    - "/x/a4Ii/"
    - "/katalon-studio/docs/common-concatenate/"
description: 
---
Description  
-------------

Concatenate all strings end-to-end into one string.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| stringList | String\[\] | Required | List of strings to concatenate. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns  
---------

| Param Type | Description |
| --- | --- |
| String | A concatenated string from the list of strings. |

Example  
---------

You want to concatenate two strings "Katalon Studio" and "Automation Tool" into one string "Katalon Studio Automation Tool".

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

'Use WebUI keyword'
WebUI.concatenate(['Katalon', 'Automation Tool'] as String[], FailureHandling.STOP_ON_FAILURE)
  
'Use Mobile keyword'
Mobile.concatenate(['Katalon', 'Automation Tool'] as String[], FailureHandling.STOP_ON_FAILURE)
  
'Use Web Service keyword'
WS.concatenate(['Katalon', 'Automation Tool'] as String[], FailureHandling.STOP_ON_FAILURE)
```