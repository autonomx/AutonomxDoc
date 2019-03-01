---
title: "[Mobile] Verify Element Attribute Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-element-attribute-value.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Element+Attribute+Value/"
    - "/display/KD/%5BMobile%5D%20Verify%20Element%20Attribute%20Value/"
    - "/x/YpEY/"
    - "/katalon-studio/docs/mobile-verify-element-attribute-value/"
description: 
---
Description
-----------

Verify if the element has an attribute with the specified name and value  

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element. |
| attributeName  | String  | Required | The value of the attribute to verify. |
| attributeValue  | String  | Required | The value of the attribute to verify. |
| timeout  | int | Required | System will wait at most timeout (seconds) to return a result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

**true** if the element has the attribute with the specified name and value; otherwise, **false**

Example
-------

You want to verify if 'App' control has an attribute with name = 'class' and value is 'android.widget.TextView'

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
 
'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)
 
'Verify App control has attribute class with value android.widget.TextView'
Mobile.verifyElementAttributeValue(findTestObject('Application/android.widget.TextView - App'),'class','android.widget.TextView', 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```