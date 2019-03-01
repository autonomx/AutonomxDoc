---
title: "[Common] Verify Match" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-match.html 
redirect_from:
    - "/display/KD/%5BCommon%5D+Verify+Match/"
    - "/display/KD/%5BCommon%5D%20Verify%20Match/"
    - "/x/RYIi/"
    - "/katalon-studio/docs/common-verify-match/"
description: 
---
Description  
-------------

Verify if two strings match each other, the second string can be a regular expression.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| actualText | String | Required | Represent the actual text. |
| expectedText | String | Required | Represent the expected text (can be a regular expression). |
| isRegex | Boolean | Required | Indicate whether the expected text is a regular expression. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| Boolean | **true**, if two given strings match each other; otherwise, **false**. |

Example  
---------

You want to verify if the text "Katalon" matches the regular expression "(K|T)atalon".

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
WebUI.verifyMatch('Katalon', '(K|T)atalon', true)
 
'Use Mobile keyword'
Mobile.verifyMatch('Katalon', '(K|T)atalon', true)

'Use Web Service keyword'
WS.verifyMatch('Katalon', '(K|T)atalon', true)
```