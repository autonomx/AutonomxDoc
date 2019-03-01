---
title: "[Mobile] Set Slider Value" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mobile-set-slider-value.html 
redirect_from:
    - "/display/KD/%5BMobile%5D+Set+Slider+Value/"
    - "/display/KD/%5BMobile%5D%20Set%20Slider%20Value/"
    - "/x/6IgY/"
    - "/katalon-studio/docs/mobile-set-slider-value/"
description: 
---
Description
-----------

Set the value for Slider control (android.widget.SeekBar for Android, UIASlider for iOS) at specific percentage

Parameters
----------

| Parameter | Parameter Type | Mandatory | Description |
| --- | --- | --- | --- |
| to | TestObject  | Required | Represent a mobile element (android.widget.SeekBar for Android, UIASlider for iOS) |
| percent  | Number  | Required | Percentage value to set to the slider ( 0 <= percent <= 100 ) |
| timeout  | int | Required | System will wait at most timeout (seconds) to return result |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

You want to set slider value at 50% of the slider

```groovy
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.util.internal.PathUtil as PathUtil

'Start application on current selected android\'s device'
Mobile.startApplication(GlobalVariable.G_AndroidApp, false)
 
'Set slider value at 50% of the slider'
Mobile.setSliderValue(findTestObject('/Application/App/android.widget.SeekBar0'), 50, 10)
 
'Close application on current selected android\'s device'
Mobile.closeApplication()
```