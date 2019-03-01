---
title: "[WebUI] Navigate to Url" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-navigate-to-url.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Navigate+to+Url/"
    - "/display/KD/%5BWebUI%5D%20Navigate%20to%20Url/"
    - "/x/3IgY/"
    - "/katalon-studio/docs/webui-navigate-to-url/"
description: 
---
Description
-----------

Navigate to the specified web page.

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>rawUrl</td><td>String</td><td>Required</td><td><p>URL of web page to navigate to.If rawUrl doesn't contain protocol prefix, the&nbsp;the protocol&nbsp;will be&nbsp;<a rel="nofollow">http://.</a></p><p>Example:&nbsp;</p><ul><li>&nbsp;<a class="external-link" href="http://katalon.com" rel="nofollow">http://katalon.com/;</a>&nbsp;</li><li>&nbsp;<a class="external-link" href="https://www.google.com" rel="nofollow">https://www.google.com;</a>&nbsp;</li><li>file:///D:Development/index.html;</li><li>kms-technology.com =&gt; http://kms-tecnology.com</li></ul></td></tr><tr><td>flowControl</td><td>FailureHandling</td><td>Optional</td><td>Specify <a class="external-link" href="/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

You want to navigate to '[http://demoaut.katalon.com](http://demoaut.katalon.com)' website.

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
import org.openqa.selenium.Keys as Keys

'Open browser'
WebUI.openBrowser('')

'Navigate to demo AUT site'
WebUI.navigateToUrl('http://demoaut.katalon.com/')

'Click on \'Make Appointment\' button'
WebUI.click(findTestObject('Page_CuraHomepage/btn_MakeAppointment'))

'Close browser'
WebUI.closeBrowser()
```