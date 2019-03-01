---
title: "[WebUI] Get All Links On Current Page" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-get-all-links-on-current-page.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Get+All+Links+On+Current+Page/"
    - "/display/KD/%5BWebUI%5D%20Get%20All%20Links%20On%20Current%20Page/"
    - "/x/CBBO/"
    - "/katalon-studio/docs/webui-get-all-links-on-current-page/"
description: 
---
Description
-----------

Get all links on the current page.

Parameters
----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| isIncludedExternalLinks | boolean | Required | If false, only target to links on the same HOST. Otherwise, target to all links. |
| excludedLinks | List | Required | A list of excluded links (URLs). |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to get all links on '[http://demoaut.katalon.com](http://demoaut.katalon.com)' page.

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

WebUI.openBrowser('http://demoaut.katalon.com')

list = WebUI.getAllLinksOnCurrentPage(true, [])

WebUI.closeBrowser()
```