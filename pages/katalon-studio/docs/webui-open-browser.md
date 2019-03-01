---
title: "[WebUI] Open Browser" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-open-browser.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Open+Browser/"
    - "/display/KD/%5BWebUI%5D%20Open%20Browser/"
    - "/x/9ogY/"
    - "/katalon-studio/docs/webui-open-browser/"
description: 
---
Description
-----------

Open a browser and navigate to the specified URL. If the URL is left empty then just open a browser.

Parameters
----------

<table><thead><tr><th>Param</th><th>Param Type</th><th>Mandatory</th><th>Description</th></tr></thead><tbody><tr><td>rawUrl</td><td>String</td><td>Optional</td><td><p>URL of the web page to be opened can be left empty or null. If rawUrl doesn't contain protocol prefix, the protocol will be&nbsp;<a rel="nofollow">http://.</a>&nbsp;For example:&nbsp;</p><ul><li class="blockList"><p><a class="external-link" href="https://www.google.com" rel="nofollow">https://www.google.com</a>&nbsp;</p></li><li class="blockList"><p>file:///D:/Development/index.html&nbsp;</p></li><li class="blockList"><p><a class="external-link" href="http://kms-technology.com" rel="nofollow">kms-technology.com</a> =&gt; <a class="external-link" href="http://kms-technology.com" rel="nofollow">http://kms-technology.com</a></p></li><li class="blockList"><p><a rel="nofollow">http://katalon.com/</a>&nbsp;</p></li></ul></td></tr><tr><td>flowControl</td><td>FailureHandling</td><td>Optional</td><td>Specify <a class="external-link" href="/x/qAAM" rel="nofollow">failure handling</a> schema to determine whether the execution should be allowed to continue or stop.</td></tr></tbody></table>

Example
-------

1.  You want to open a browser and navigate to '[http://demoaut.katalon.com/](http://demoaut.katalon.com/)' URL:
    
    ```groovy
    import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
    import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
    import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
    import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
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
    
    WebUI.openBrowser('http://demoaut.katalon.com/')
    
    WebUI.closeBrowser()
    ```
    
2.  You want to open browser only
    
    ```groovy
    import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
    import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
    import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
    import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
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
    
    WebUI.openBrowser('')
    
    WebUI.closeBrowser()
    ```