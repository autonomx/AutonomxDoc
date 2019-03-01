---
title: "[WebUI] Modify Object Property" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-modify-object-property.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Modify+Object+Property/"
    - "/display/KD/%5BWebUI%5D%20Modify%20Object%20Property/"
    - "/x/q4oY/"
    - "/katalon-studio/docs/webui-modify-object-property/"
description: 
---
Description  
-------------

Modify existing property or add a new property to test object. Use when test object has attributes changing in runtime. This keyword does not modify the object saved in Object Repository, instead, it creates another test object, modifies and returns this test object. Hence, users must use a variable to store the returned object.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| testObject | Test Object | Required | Represent a web element. |
| propertyName | String | Required | Name of the property, for example, xpath, id, name,... If the property already exists in the object, the keyword will modify its related artifacts; if not, the keyword will add a new property. |
| matchCondition | String | Required | Condition to match property name with property value, for example, equals, not equals,... In case the property already exists, input null to this argument to keep the old value of match condition. |
| modifyValue | String | Required | Value of the property. In case the property already exists, input null to this argument to keep the old property value. |
| isActive | Boolean | Required | True if the property is checked (used to find the test object); otherwise, false. In case the property already exists, input null to this argument to keep the old value. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| TestObject | The newly created TestObject. |

Example 
--------

You want to modify property "xpath" of the object "btn\_Login" and saved the modified object as "new\_btn".

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
 
'Modify xpath of \'Login\' button'
new_btn = WebUI.modifyObjectProperty(findTestObject('Page_Login/btn_Login'), 'xpath', 'equals', '//*[@type=\"button\"]', false)
 
'Click on new_btn'
WebUI.click(new_btn)

'Close browser'
WebUI.closeBrowser()
```