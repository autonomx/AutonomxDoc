---
title: "[Mobile] Select List Item By Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-select-list-item-by-index.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Select+List+Item+By+Index/"
    - "/display/KD/%5BMobile%5D%20Select%20List%20Item%20By%20Index/"
    - "/x/hogY/"
    - "/katalon-studio/docs/mobile-select-list-item-by-index/"
description: 
---
Description
-----------

Select item of listview control by its index. Have not implemented for Android because its list view is async loaded

Parameters  
------------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element |
| index  | int | Required | Item index (1-based indexed) |
| timeout  | int | Required | System will wait at most timeout (seconds) to return result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to select the third item in the list

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

'Select the third item in the list'
Mobile.selectListItemByIndex(findTestObject('Object Repository/Application/App/android.widget.TextView-Activity'), 3, 10)

'Close application on current selected android\'s device'
Mobile.closeApplication()
```