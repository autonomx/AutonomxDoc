---
title: "Verification Snippets" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/verification-snippets.html 
redirect_from:
    - "/display/KD/Verification+Snippets/"
    - "/display/KD/Verification%20Snippets/"
    - "/x/EwjR/"
    - "/katalon-studio/docs/verification-snippets/"
description: 
---
Katalon Studio supports the ability to write verification scripts directly in Web Service object's details. This support will greatly reduce the time of going back and forth between the test case and request object to add test scripts. Verify the response can be done instaneously.

Verification snippets can be accessed by clicking on the **Verification** tab within Web Service object's view.

![](../../images/katalon-studio/docs/copy-of-verification-snippets/Screen-Shot-2018-10-09-at-5.39.33-PM.png)

Using Verification Snippets
---------------------------

When you click on one of the available snippets, Katalon Studio will automatically generate a snippet for you. 

> The generated snippet is ONLY an example. DON'T try to use them immediately without making adjustments to match your needs.

You can also verify the data of XML or JSON Response Body. To do this, in Response panel, switch to JSON or XML response page, select the data and press key combination 'Ctrl/Command + K' to add verification scripts. 
![](../../images/katalon-studio/docs/verification-snippets/hotkey.png) 

Katalon Studio will compare the values in Response Body with the predefined values in verifcation scripts.

Once the verification snippets are generated, you can use it in either in your current Web Service's object or in your Test Case

*   **_In Web Service's object_**: Click on drop-down button next to '**Play**' button in Web Service object's details and select 'Test Request and Verify'.   
    ![](../../images/katalon-studio/docs/copy-of-verification-snippets/Untitled3.png)  
      
    It will send the current request and also execute verification snippets. Verification logs executed using verification snippets will be displayed on '**Verification Log**' tab. If you don't want to send a test request using current verification snippets, then just click on '**Play'** button.  
    ![](../../images/katalon-studio/docs/copy-of-verification-snippets/Screenshot_14.png)
*   **_In test case_**:  Use '[Send Request and Verify](/display/KD/%5BWS%5D+Send+Request+And+Verify)' keyword. This will also send the current request and execute verification snippets. 
    
    ```groovy
    WS.sendRequestAndVerify(findTestObject('REST_CommentDetails'))
    ```
    
    Execution results will be displayed in '**Log Viewer**' tab.
    
    ![](../../images/katalon-studio/docs/copy-of-verification-snippets/Untitled2.png)
    

List of Available Verification Snippets
---------------------------------------

On the right panel of 'Verification' tab is the list of common pre-built snippets which can assist you in most of the verification cases. 

| Snippet | Description | Available Since |
| --- | --- | --- |
| Get current response | Return response object after sending a request successfully. | 5.5 |
| Get a global variable | Return a Global Variable's value. |
| Get a variable | Return the value of a [variable](/pages/viewpage.action?pageId=13701134#ParameterizeaWebServiceObject(latest)-Variables(since5.7)) that you've created in the Web Service Test Object. | 5.7 |
| Response body: Contains string | Verify if response's body contains a specific string. | 5.5 |
| Response body: Convert to JSON Object | Convert response's body to JSON. |
| Response headers: Content-Type header | Verify Content-Type header's value. |
| Status code: Code is 200 | Verify if response's status code is 200 or no. |
| Status code: Successfully request | Verify if the request is sent successfully |
| Response body: number of elements | Verify number of elements from response |
| Response body: element not empty | Verify specified element is not empty |
| Response: Array contains | Verify specified arrays contain values |
| Response: Get single info of array list | Get single info of array list |