---
title: "[WebUI] Remove Object Property" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-remove-object-property.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Remove+Object+Property/"
    - "/display/KD/%5BWebUI%5D%20Remove%20Object%20Property/"
    - "/x/wooY/"
    - "/katalon-studio/docs/webui-remove-object-property/"
description: 
---
Description  
-------------

Remove existing property of test object. Use when test object has attributes changing in runtime. This keyword does not modify the object saved in Object Repository, instead, it creates another test object, modify and return this test object. Hence, users must use a variable to store the returned object.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| testObject | Test Object | Required | Represent a web element. |
| propertyName | String | Required | Name of the property, for example, xpath, id, name,... |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| TestObject | The newly created TestObject. |

Example 
--------

You want to remove property "class" of the object "btn\_Login" and saved the modified object as "new\_btn".

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

'Open browser and navigate to AUT'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), Username)

'Input password'
WebUI.setText(findTestObject('Page_Login/txt_Password'), Password)

'Remove property class of \'Login\' button'
new_btn = WebUI.removeObjectProperty(findTestObject('Page_Login/btn_Login'), 'class')
 
'Click on new_btn'
WebUI.click(findTestObject('new_btn'))

'Close browser'
WebUI.closeBrowser()
```