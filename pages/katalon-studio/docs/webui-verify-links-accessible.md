---
title: "[WebUI] Verify Links Accessible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-links-accessible.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Links+Accessible/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Links%20Accessible/"
    - "/x/DBBO/"
    - "/katalon-studio/docs/webui-verify-links-accessible/"
description: 
---
Description
-----------

Verify a list of links (URLs) are accessible.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| links | List | Required | A list of links (URLs). |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to verify if '[http://demoaut.katalon.com](http://demoaut.katalon.com)' and '[https://katalon.com](https://katalon.com)' are accessible.

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

WebUI.verifyLinksAccessible(['http://demoaut.katalon.com', 'https://katalon.com'])
```