---
title: "[Mobile] Verify Element Not Checked" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-not-checked.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Not+Checked/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Not%20Checked/"
    - "/x/fpEY/"
    - "/katalon-studio/docs/mobile-verify-element-not-checked/"
description: 
---
Description
-----------

Verify if a mobile element is not checked.    

Parameters:  
-------------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | required | represent a mobile element |
| timeout  | int | required | system will wait at most timeout (seconds) to return a result |
| flowControl | FailureHandling | optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element is NOT checked; otherwise, **false**

Example
-------

You want to verify if a checkbox is NOT checked 

Manual: 

** ![](../../images/katalon-studio/docs/mobile-verify-element-not-checked/image2016-8-15-93A563A9.png)**

Script:

```groovy
Mobile.verifyElementNotChecked(findTestObject('SampleApp.apk/android.widget.CheckBox - Checkbox0'), 10)
```