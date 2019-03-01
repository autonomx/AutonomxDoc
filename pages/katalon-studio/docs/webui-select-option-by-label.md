---
title: "[WebUI] Select Option By Label" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-select-option-by-label.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Select+Option+By+Label/"
    - "/display/KD/%5BWebUI%5D%20Select%20Option%20By%20Label/"
    - "/x/KZIY/"
    - "/katalon-studio/docs/webui-select-option-by-label/"
description: 
---
Description
-----------

 Select the options with the given label (displayed text).

![](../../images/katalon-studio/docs/webui-select-option-by-label/label.jpg)

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| labelText | String | Required | Displayed text of the options to be selected. |
| isRegex | boolean | Required | true if the label is a regular expression, otherwise false |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop |

Example
-------

You want to select "Hongkong CURA Healthcare Center" option in the list.

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
import org.openqa.selenium.Keys as Keys

'Open browser and navigate to demo AUT site'
WebUI.openBrowser('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraAppointment/btn_BookAppointment'))

'Select \"Hongkong CURA Healthcare Center\" option'
WebUI.selectOptionByValue(findTestObject('Page_CuraAppointment/lst_Facility'), 'Hongkong CURA Healthcare Center', false)

'Close Browser'
WebUI.closeBrowser()
```