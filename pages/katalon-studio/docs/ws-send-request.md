---
title: "[WS] Send Request" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-send-request.html 
redirect_from:
    - "/display/KD/%5BWS%5D+Send+Request/"
    - "/display/KD/%5BWS%5D%20Send%20Request/"
    - "/x/f5QY/"
    - "/katalon-studio/docs/ws-send-request/"
description: 
---
Description
-----------

Send an HTTP Request to a web server.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| request  | RequestObject  | Required | Represent a HTTP Request, user needs to define it from Object Repository > New > Web Service Request |
| flowControl  | FailureHandling  | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| ResponseObject | A response object |

Example
-------

You want to send a HTTP request to web server

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.testobject.ConditionType as ConditionType
import com.kms.katalon.core.testobject.RequestObject as RequestObject
import com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WebAPI
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Send a SOAP request and returns its response'
def response = WS.sendRequest(findTestObject('SOAP_ConvertWeight'))

'Verify converted weight after sending request is correct or not'
WS.verifyElementText(response, 'ConvertWeightResult', '3000')
```