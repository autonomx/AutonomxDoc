---
title: "[Mobile] Verify Element Not Visible" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-visible.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Not+Visible/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Visible/"
    - "/x/75EY/"
    - "/katalon-studio/docs/mobile-verify-element-not-visible/"
description: 
---
Description
-----------

Verify if a mobile element is NOT visible.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| timeout  | int | Required | System will wait at most timeout (seconds) to return a result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element is NOT visible; otherwise,** false**

Example
-------

You want to verify if 'Go to TimePicker' button is NOT visible.

```groovy
Mobile.verifyElementNotExist(findTestObject('android.widget.Button5 - Go to TimePicker'), 10)
```