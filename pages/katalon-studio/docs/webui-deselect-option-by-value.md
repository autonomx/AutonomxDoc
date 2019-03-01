---
title: "[WebUI] Deselect Option By Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-deselect-option-by-value.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Deselect+Option+By+Value/"
    - "/display/KD/%5BWebUI%5D%20Deselect%20Option%20By%20Value/"
    - "/x/EZIY/"
    - "/katalon-studio/docs/webui-deselect-option-by-value/"
description: 
---
Description
-----------

Deselect the options with the given value.

![](../../images/katalon-studio/docs/webui-deselect-option-by-value/image2017-3-1-153A103A55.png)

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| value | String | Required | Value of the options to be deselected. |
| isRegex | boolean | Required | true if the label is a regular expression, otherwise false |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or st |

Example
-------

You want to deselect option which value is "Hongkong CURA Healthcare Center" in the list.

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

'Open browser and navigate to demo AUT site'
WebUI.openBrowser('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraAppointment/btn_BookAppointment'))

'Select \"Hongkong CURA Healthcare Center\" option'
WebUI.selectOptionByValue(findTestObject('Page_CuraAppointment/lst_Facility'), 'Hongkong CURA Healthcare Center', false)

'Deselect \"Hongkong CURA Healthcare Center\" option'
WebUI.deselectOptionByValue(findTestObject('Page_CuraAppointment/lst_Facility'), 'Hongkong CURA Healthcare Center', false)

'Close Browser'
WebUI.closeBrowser()
```