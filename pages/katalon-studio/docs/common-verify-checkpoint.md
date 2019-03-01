---
title: "[Common] Verify Checkpoint"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/common-verify-checkpoint.html
redirect_from:
    - "/display/KD/%5BCommon%5D+Verify+Checkpoint/"
    - "/display/KD/%5BCommon%5D%20Verify%20Checkpoint/"
    - "/x/oIIi/"
    - "/katalon-studio/docs/common-verify-checkpoint/"
description:
---
Description  
-------------

Verify if checked data of checkpoint matches their source data.

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| checkpoint | Checkpoint | Required | Represent the input checkpoint. |
| logChangedValues | Boolean | Required | true will log all the changed values between checkpoint data and the source, false will not log any changed value. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

<table>
    <thead>
        <tr>
            <th>Param Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Boolean</td>
            <td>
                <ul>
                    <li><strong>true</strong>, if checked data of checkpoint matches their source data.</li>
                    <li><strong>false</strong>, if checked data of checkpoint NOT matches their source data.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

Example 
--------

You want to verify the checkpoint and don't print out changed values between checkpoint data and the source.

*   Manual view  
    ![](../../images/katalon-studio/docs/common-verify-checkpoint/image2017-3-3-173A563A28.png)
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

    'Use WebUI keyword'
    WebUI.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)

    'Use Mobile keyword'
    Mobile.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)

    'Use Web Service keyword'
    WS.verifyCheckpoint(findCheckpoint('Checkpoints/chk_DataSnapshot'), false)

    ```