---
title: "[Mobile] Open Notifications" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-open-notifications.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Open+Notifications/"
    - "/display/KD/%5BMobile%5D%20Open%20Notifications/"
    - "/x/m5IY/"
    - "/katalon-studio/docs/mobile-open-notifications/"
description: 
---
Description
-----------

Simulate opening notification action on mobile device.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example 
--------

You want open notification on the current mobile device.

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

'Open any sudden notifications'
Mobile.openNotifications()

'Close application on current selected android\'s device'
Mobile.closeApplication()
```