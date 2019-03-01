---
title: "[Mobile] Get Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-get-text.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Get+Text/"
    - "/display/KD/%5BMobile%5D%20Get%20Text/"
    - "/x/epMY/"
    - "/katalon-studio/docs/mobile-get-text/"
description: 
---
Description
-----------

Get the text of a mobile element.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| timeout | int | Required | Maximum period of time (in seconds) that system will wait to return the result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want to get displayed the message on the dialog.

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)

Mobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)

Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)

Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)

'Get displayed message on the dialog'
def message = Mobile.getText(findTestObject('Application/App/Activity/Custom Dialog/android.widget.TextViewCustomDialog'), 
    10)

'Verify if displayed message is correct'
Mobile.verifyEqual(message, 'Example of how you can use a custom Theme.Dialog theme to make an activity that looks like a customized dialog, here with an ugly frame.')

'Close application on current selected android\'s device'
Mobile.closeApplication()
```