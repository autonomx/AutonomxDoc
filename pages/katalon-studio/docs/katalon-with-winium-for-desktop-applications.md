---
title: "Katalon with Winium for Desktop Applications" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/katalon-with-winium-for-desktop-applications.html 
redirect_from:
    - "/display/KD/Katalon+with+Winium+for+Desktop+Applications/"
    - "/display/KD/Katalon%20with%20Winium%20for%20Desktop%20Applications/"
    - "/x/xAzR/"
    - "/katalon-studio/docs/katalon-with-winium-for-desktop-applications/"
description: 
---
As you may know, Katalon Studio only supports WebUI, Mobile, and API automation testing. However, there is a workaround solution to this problem, utilizing Winium .jar package in order to test desktop applications.


Steps : 
1) Download and extract Winium.Desktop.Driver.zip from https://github.com/2gis/Winium.Desktop/releases 
2) Run Winium.Desktop.Driver.exe
3) Download the [jar package](https://jar-download.com/?search_box=com.github.2gis.winium). 
4) From Katalon studio --> Project settings --> External libraries, add two jars winium-elements-desktop-0.2.0-1.jar and winium-webdriver-0.1.0-1.jar (Refer : https://i.imgur.com/haDI84P.png)
5) Use the example below to import the Winium driver and use script into Katalon Studio.

This example works perfect in windows 10.

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
import org.openqa.selenium.By as By
import org.openqa.selenium.WebElement as WebElement
import org.openqa.selenium.winium.DesktopOptions as DesktopOptions
import org.openqa.selenium.winium.WiniumDriver as WiniumDriver
import java.net.MalformedURLException as MalformedURLException
import java.net.URL as URL

WiniumDriver driver = null

String appPath = 'C:/windows/system32/calc.exe'

DesktopOptions option = new DesktopOptions()

option.setApplicationPath(appPath)

option.setDebugConnectToRunningApp(false)

option.setLaunchDelay(2)

driver = new WiniumDriver(new URL('http://localhost:9999'), option)

Thread.sleep(1000)

driver.findElement(By.name('Seven')).click()

driver.findElement(By.name('Plus')).click()

driver.findElement(By.name('Eight')).click()

driver.findElement(By.name('Equals')).click()

driver.close()
```
