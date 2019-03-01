---
title: "[Mobile] Get Element Left Position" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-get-element-left-position.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Get+Element+Left+Position/"
    - "/display/KD/%5BMobile%5D%20Get%20Element%20Left%20Position/"
    - "/x/eY8Y/"
    - "/katalon-studio/docs/mobile-get-element-left-position/"
description: 
---
Description  
-------------

Get the left position of a mobile element.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| timeout | int | Required | Maximum period of time (in seconds) that system will wait to return a result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| int | The left position of the mobile element. |

Example 
--------

You want to get the left position of the object "android.widget.TextView - App" , then store it into "left_position" variable.

*   Manual view    
    ![](../../images/katalon-studio/docs/mobile-get-element-left-position/image2017-3-3-143A183A35.png)
*   Script view 
    
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
    
    'Start application on current selected android device'
    Mobile.startApplication(GlobalVariable.G_AndroidApp, false)
    
    'Get left position of android.widget.TextView - App'
    left_position = Mobile.getElementLeftPosition(findTestObject('android.widget.TextView - App'), 5)
    
    'Close application on current selected android device'
    Mobile.closeApplication()
    
    
    ```