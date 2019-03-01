---
title: "Manual View" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manual-view.html 
redirect_from:
    - "/display/KD/Manual+View/"
    - "/display/KD/Manual%20View/"
    - "/x/9YEw/"
    - "/katalon-studio/docs/manual-view/"
description: 
---
KatalonStudio supports Keywords-Driven testing where test cases consist of keywords that represent actions of users on the applications under test. 

Given a sample test case with the steps as below:

*   _Open the browser_
*   _Navigate to a website_
*   _Click on certain control_
*   _Validate if a control exists on the page_
*   _Close the browser_

Follow these steps to automate the above test scenario in **Manual view**:

1.  Select **File > New > Test Case** from the main menu. The **New Test Case** dialog will be displayed. Provide the name for the new test case, then click **OK** button.  
    ![](../../images/katalon-studio/docs/manual-view/image2017-2-15-93A593A10.png)  
      
    
2.  Once a new test case is created, it is opened in **Manual view**. This view allows users to create automation tests easily with little programming skills required.  
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-18-133A533A45.png)  
      
    
3.  Select **Add > Web UI Keyword** from the command toolbar.
    
    > **Recent keywords** allow users quickly add any of the last 10 recent used keywords in **Item** list.
    
      
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-18-133A543A48.png)  
      
    
      
    
4.  Select the **[Open Browser](/display/KD/%5BWebUI%5D+Open+Browser)** keyword. This keyword will open a browser and navigate to the specified URL if provided. (selected keywords will have their description displayed along for reference)  
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-18-143A13A24.png)  
      
    
5.  Add the **[Navigate To Url](/display/KD/%5BWebUI%5D+Navigate+to+Url)** keyword. This keyword will navigate to a specified URL. Double click on the **Input** cell to provide additional data (parameters) for the keyword.   
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-18-143A363A31.png)  
      
    
6.  The **Input** dialog is displayed.   
    ![](../../images/katalon-studio/docs/manual-view/image2017-6-30-193A63A59.png)  
    Where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>No</td><td>The number of parameter for the selected keyword.</td></tr><tr><td>Param Name</td><td>The name of the parameter.</td></tr><tr><td>Param Type</td><td>The required data type for the parameter.</td></tr><tr><td>Value Type</td><td>The type of your input value (e.g. strings, <a class="external-link" href="/display/KD/Variable+Types" rel="nofollow">variables</a>, <a class="external-link" href="/display/KD/Manage+Test+Data" rel="nofollow">data sources</a>...)</td></tr><tr><td>Value</td><td><p>The input value for this parameter.</p><blockquote class="important"><p>Input value can be varied based on&nbsp;<strong>Value Type</strong>. Refer to&nbsp;<a class="external-link" href="/display/KD/Value+Types" rel="nofollow">Value Types in Katalon</a>&nbsp;for more details.</p></blockquote></td></tr></tbody></table>
    
      
    For now, enter the URL of Katalon demo AUT ([http://demoaut.katalon.com](http://demoaut.katalon.com)) into the **Value** column then click **OK**.   
      
    
7.  Add the **[Click](/display/KD/%5BWebUI%5D+Click)** keyword. This keyword represents the click action on a given object. Double click on the **Object** cell to provide the object for the keyword.   
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-18-143A513A0.png)  
      
    
8.  All captured objects in **Object Repository** are displayed in the **Test Object Input** dialog (Refer to [Spy Object](/display/KD/Record+and+Spy+Utilities) for details regarding how to capture objects). Select your object then click **OK**.  
    ![](../../images/katalon-studio/docs/manual-view/image2017-6-30-193A143A44.png)  
      
    
9.  Add the **[Verify Element Present](/display/KD/%5BWebUI%5D+Verify+Element+Present)** keyword. This keyword validates if a certain object is displayed on the executing browser. Similar to the previous step, you need to specify the object to be used with this keyword.  
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-18-143A543A15.png)  
      
    
10.  Add the **[Close Browser](/display/KD/%5BWebUI%5D+Close+Browser)** keyword and save your test case.  
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-18-143A563A32.png)  
      
    
11.  Click on **Run** in the main toolbar to execute the test case.   
    ![](../../images/katalon-studio/docs/manual-view/image2017-8-11-103A573A37.png)  
      
    Katalon Studio should be able to execute all the steps of the sample test case.

Recent Keywords
---------------

**Recent keywords** allow users quickly add any of the last 10 recent used keywords in **Item** list. For example, let's take test case above. To add another **_Verify Element Present_** after _Step 4_, **recent keywords** feature wouldaccomplished this in seconds.

Highlight _Step 4_. Click on **Recent Keywords** and select **_Verify Element Present_**. An extra step is added after _Step 4_ as illustrated below:

![](../../images/katalon-studio/docs/manual-view/image2017-8-21-123A93A39.png)   ![](../../images/katalon-studio/docs/manual-view/image2017-8-21-123A133A31.png)

Recent Objects and Object Folders
---------------------------------

KatalonStudio allows users to quickly select recently used **Object** or jump directly to recent used **Object Folder** in Object Repository.

Recent list will have two sections: **Object Folder** and **Test Object**

*   **Test Object:** Display the names of the last 5 selected objects
*   **Object Folder:** Display the names of 5 folders that contain anyrecent used objects

![](../../images/katalon-studio/docs/manual-view/image2017-8-25-173A293A39.png)