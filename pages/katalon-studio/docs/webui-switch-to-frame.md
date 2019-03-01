---
title: "[WebUI] Switch To Frame" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-switch-to-frame.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Switch+To+Frame/"
    - "/display/KD/%5BWebUI%5D%20Switch%20To%20Frame/"
    - "/x/JYgY/"
    - "/katalon-studio/docs/webui-switch-to-frame/"
description: 
---
Description
-----------

Switch the current context into an iframe.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a web element. |
| timeOut  | Integer | Required | Maximum period of time (in seconds) that system will wait to return result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

*   **true** if the current context is switched to the iframe.
    
*   **false** if the current context is NOT switched to the iframe.
    

Example 
--------

You want to switch to "ifr_TextArea" iframe (timeout 5 seconds) to set a text to the textarea.

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

'Open browser and navigate to a site that has an iframe'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Switch to iframe'
WebUI.switchToFrame(findTestObject('ifr_TextArea'), 5)

'Set text to element inside iframe'
WebUI.setText(findTestObject('txt_TextArea'), 'Your text here')

'Close browser'
WebUI.closeBrowser()




```