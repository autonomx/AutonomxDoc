---
title: "Creating test case using script mode"
sidebar: katalon_studio_videos_sidebar
permalink: katalon-studio/videos/create_test_case_script_mode.html
description: "A quick guide to create test case using Script mode of Katalon Studio, a complete test automation tool."
---
<iframe width="560" height="349" src="https://www.youtube.com/embed/Bh222T1oaXk?autoplay=1" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>

**A quick guide to create test case using Script mode of Katalon Studio, a complete test automation tool, built on the top of Selenium and Appium. Katalon Studio helps you start automation testing on web on mobile with the least efforts and no costs. Free download at [www.katalon.com](https://www.katalon.com)**

**Read full guideline [/x/Y4Iw](/x/Y4Iw)**

Given a sample test case with the steps as below:

*   Open the browser
*   Navigate to a website
*   Click on certain control
*   Validate if a control exists on the page
*   Close the browser

Follow these steps to automate the above test scenario in **Script view**:

1.  1.  Select **File > New > Test Case** from the main menu. The **New Test Case** dialog will be displayed. Provide the name for the new test case, then click **OK**.
    2.  Once a new test case is created, you can switch to **Script view** using the corresponding tab at the footer of the test case editor and observe how test steps of **Manual view** are translated into Groovy script of **Script view**.
    3.  To use a built-in **WebUI** keyword, enter the following syntax into the editor. The Content Assist function will be invoked after users enter the **dot** character. **Content Assist** provides users with context-sensitive suggestion for code completion.
    4.  Select the [Open Browser](/display/KD/%5BWebUI%5D+Open+Browser) keyword. This keyword will open a browser and navigate to the specified URL if provided. Selected keywords will have their description displayed along for reference.
    5.  Enter the [Navigate To Url](/display/KD/%5BWebUI%5D+Navigate+to+Url) keyword. This keyword will navigate to a specified URL. For now, enter the URL of Katalon Studio ([katalon.com](https://katalon.com/)) as input parameter.
    6.  Enter the [Click](/display/KD/%5BWebUI%5D+Click) keyword. This keyword represents the click action on a given object. You need to specify an object for this action.
    7.  Use the following syntax to refer to an object in **Object Repository** (alternatively, you can drag and drop the object to test case editor to generate the syntax):

        ```groovy
        findTestObject('{Object ID}')

        ```


        Where **Object ID** is the ID of that object in Katalon Studio. You can find object ID from its Properties dialog.
    8.  Enter the [Verify Element Present](/display/KD/%5BWebUI%5D+Verify+Element+Present) keyword. This keyword validates if a certain object is displayed on the executing browser. Similar to the previous step, you need to specify the object to be used with this keyword.
    9.  Add the [Close Browser](/display/KD/%5BWebUI%5D+Close+Browser) keyword and save your test case.
    10.  Click on **Run** in main toolbar to execute the test case.
    11.  Katalon Studio should be able to execute all the steps of the sample test case.

Now you know how to create automation test in Script view of Katalon Studio!

For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/)