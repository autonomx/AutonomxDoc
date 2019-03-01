---
title: "[WebUI] Get Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-attribute.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Get+Attribute/"
    - "/display/KD/%5BWebUI%5D%20Get%20Attribute/"
    - "/x/u4gY/"
    - "/katalon-studio/docs/webui-get-attribute/"
description: 
---
Description
-----------

Get the attribute of a web element.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element |
| attribute | String | Required | Name of the attribute |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| String | Value of the object's attribute |

Example
-------

You want to get 'class' attribute's value of 'Make Appointment' button on Demo AUT site

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

'Get \'class\' attribute value of make appointment button'
attribute = WebUI.getAttribute(findTestObject('Page_CuraHomepage/btn_MakeAppointment'), 'class')

'Verify if \'class\' attribute value is correct for the button.'
WebUI.verifyMatch(attribute, 'btn btn-dark btn-lg', false)

'Close browser'
WebUI.closeBrowser()
```