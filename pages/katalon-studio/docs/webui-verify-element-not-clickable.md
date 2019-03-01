---
title: "[WebUI] Verify Element Not Clickable" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-element-not-clickable.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Element+Not+Clickable/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Element%20Not%20Clickable/"
    - "/x/3okY/"
    - "/katalon-studio/docs/webui-verify-element-not-clickable/"
description: 
---
> This keyword only works with Element has **tag** _<input>_ with attribute **disable.**
> 
> _![](../../images/katalon-studio/docs/webui-verify-element-not-clickable/uua9rf0a0ve6.png)_

Description
-----------

Verify if the given element is NOT clickable. 

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>to</td><td>TestObject</td><td>Required</td><td><p>&nbsp;</p><p>Represent a web element.</p></td></tr><tr><td>flowControl</td><td>FailureHandling</td><td>Optional</td><td>Specify <a class="external-link" href="/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Returns
-------

<table><thead><tr><th>Param Type</th><th>Description</th></tr></thead><tbody><tr><td>boolean</td><td><ul><li><p><strong>true: </strong>the element is present and NOT clickable.</p></li><li><strong>false: </strong>the element is present and clickable.</li></ul></td></tr></tbody></table>

Example
-------

You want to verify if 'Make Appointment' button is NOT clickable.

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS

'Open browser and navigate to demo AUT site.'
WebUI.openBrowser(GlobalVariable.G_SiteURL)

'Verify \'Make Appoint\' button is NOT clickable'
WebUI.verifyElementNotClickable(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Close browser'
WebUI.closeBrowser()
```