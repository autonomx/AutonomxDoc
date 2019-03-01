---
title: "[Mobile] Get Attribute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-get-attribute.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Get+Attribute/"
    - "/display/KD/%5BMobile%5D%20Get%20Attribute/"
    - "/x/_o0Y/"
    - "/katalon-studio/docs/mobile-get-attribute/"
description: 
---
Description  
-------------

Get a specific attribute of a mobile element.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject | Required | Represent a mobile element. |
| name | String | Required | Name of the attribute to get. |
| timeout | int | Required | Maximum period of time (in seconds) that system will wait to return a result. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| String | Value of the attribute. |

Example 
--------

You want to get the attribute "text" of the object "android.widget.TextView - App".

*   Manual view    
    ![](../../images/katalon-studio/docs/mobile-get-attribute/image2017-3-3-113A113A38.png)
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
    
    'Get text of android.widget.TextView - App'
    Mobile.getAttribute(findTestObject('Application/android.widget.TextView - App'), 'text', 5)
    
    'Close application on current selected android device'
    Mobile.closeApplication()
    
    
    ```