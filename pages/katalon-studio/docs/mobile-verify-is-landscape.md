---
title: "[Mobile] Verify Is Landscape" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-verify-is-landscape.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Verify+Is+Landscape/"
    - "/display/KD/%5BMobile%5D%20Verify%20Is%20Landscape/"
    - "/x/NZEY/"
    - "/katalon-studio/docs/mobile-verify-is-landscape/"
description: 
---
Description  
-------------

Verify if the current device is in landscape mode.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

| Param Type | Description |
| --- | --- |
| Boolean | true, if the device is in landscape mode; otherwise, false. |

Example 
--------

You want to verify if the current device is in landscape mode.

*   Manual view    
    ![](../../images/katalon-studio/docs/mobile-verify-is-landscape/image2017-3-3-153A103A59.png)
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
    
    'Verify if the current device is in landscape mode'
    Mobile.verifyIsLandscape()
    
    'Close application on current selected android device'
    Mobile.closeApplication()
    
    
    ```