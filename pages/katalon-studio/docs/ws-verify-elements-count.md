---
title: "[WS] Verify Elements Count" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-verify-elements-count.html 
redirect_from:
    - "/display/KD/%5BWS%5D+Verify+Elements+Count/"
    - "/display/KD/%5BWS%5D%20Verify%20Elements%20Count/"
    - "/x/pJQY/"
    - "/katalon-studio/docs/ws-verify-elements-count/"
description: 
---
Description
-----------

Verify the number of expected elements (JSON/XML) in the response (output) of a web service call.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | ResponseObject | Required | Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header) |
| locator | String | Required | An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide for how to write it: [Handle Web Service Response object](/display/KD/Introduction+to+Web+Services+Test+Object) |
| count  | int  | Required | The expected number of element(s) should appear in the responded data (usually is JSON/XML) |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true**, if your expectation is met, otherwise; **false**.

Example
-------

You want to verify number of expected elements in the response is 3

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
def response = WS.sendRequest(findTestObject('REST_EmployeeInfo'))

'Verify number of expected employee contact records'
WS.verifyElementsCount(resObj, 'employee.contacts', 3)
```