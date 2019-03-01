---
title: "[WS] Verify Element Property Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/ws-verify-element-property-value.html 
redirect_from:
    - "/display/KD/%5BWS%5D+Verify+Element+Property+Value/"
    - "/display/KD/%5BWS%5D%20Verify%20Element%20Property%20Value/"
    - "/x/bZQY/"
    - "/katalon-studio/docs/ws-verify-element-property-value/"
description: 
---
Description
-----------

Verify that there is an element with expected property value appeared in the returned data from a web service call.

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| response | ResponseObject | Required | Represent an HTTP Response, the user can get responded content type, data, header properties (sometimes the user may want to get cookies from response header) |
| locator | String | Required | An expression Katalon will use to go through and look for the expected element(s), please refer to our user guide on how to write it: [Handle Web Service Response object](/display/KD/Handle+Response+Messages) |
| value  | String | Required | The expected value of element you want to verify in the responded data (usually is JSON/XML) |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

*   **true**, if your expectation is met, otherwise **false**.
    

Example
-------

You want to verify if the response contains 'Eliseo@gardner.biz' in the email list.

```groovy
'Send a SOAP request and returns its response'
def response = WS.sendRequest(findTestObject('REST_CommentDetails'))

'Verify if comment\'s email after sending request is correct or not'
WS.verifyElementPropertyValue(response, '[0].email', 'Eliseo@gardner.biz')
```