---
title: "[Mobile] Select List Item By Label" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-select-list-item-by-label.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Select+List+Item+By+Label/"
    - "/display/KD/%5BMobile%5D%20Select%20List%20Item%20By%20Label/"
    - "/x/pIgY/"
    - "/katalon-studio/docs/mobile-select-list-item-by-label/"
description: 
---
Description
-----------

Select item of listview control by its label.

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| label  | String | Required | Label item |
| timeout  | int | Required | System will wait at most timeout (seconds) to return a result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

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

Mobile.tap(findTestObject('Application/android.widget.TextView - Graphics'), GlobalVariable.G_Timeout)

Mobile.scrollToText('Xfermodes')

'Select \'Record 1\' item in the list'
Mobile.selectListItemByLabel(findTestObject('android.widget.Button1 - Go to List'), 'Record 1', 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```