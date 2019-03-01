---
title: "[Mobile] Send Keys" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-send-keys.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Send+Keys/"
    - "/display/KD/%5BMobile%5D%20Send%20Keys/"
    - "/x/kg9O/"
    - "/katalon-studio/docs/mobile-send-keys/"
description: 
---
Description 
------------

Simulates keystroke events on the specified element, as though you typed the value key-by-key. 

Parameters 
-----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| strKeys | String | Required | The combination of keys to type. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to send 'Katalon Studio' keys into all element by pressing the value key-by-key.

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

Mobile.startApplication(appPath, false)
 
Mobile.tap(findTestObject('Application/android.widget.TextView - EditName'), GlobalVariable.G_Timeout)
 
Mobile.sendKeys('Katalon Studio')

Mobile.closeApplication()
```