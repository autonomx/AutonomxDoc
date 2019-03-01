---
title: "[WebUI] Get Number Of Selected Option" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-number-of-selected-option.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Get+Number+Of+Selected+Option/"
    - "/display/KD/%5BWebUI%5D%20Get%20Number%20Of%20Selected%20Option/"
    - "/x/GZIY/"
    - "/katalon-studio/docs/webui-get-number-of-selected-option/"
description: 
---
Description
-----------

Count the number of options which are being selected the given web element has.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| int | The number of selected option. |

Example
-------

You want to count the number of SELECTED options in the list.

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

'Get number of selected option in Facility list'
WebUI.getNumberOfSelectedOption(findTestObject('Page_CuraAppointment/lst_Facility'))

'Close Browser'
WebUI.closeBrowser()
```