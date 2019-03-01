---
title: "Video Capturing" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/video-capturing.html 
redirect_from:
    - "/display/KD/Video+Capturing/"
    - "/display/KD/Video%20Capturing/"
    - "/x/qRJO/"
    - "/katalon-studio/docs/video-capturing/"
description: 
---
Compatibilty

> *   [K-Lite Codec](https://www.codecguide.com/download_kl.htm) is recommended to play Katalon Studio test execution video
> *   Support Test Suite level execution
> *   Support all browsers **except** Remote | Headless | Kobiton | Custom
> 
> *   Recording **parallel execution is NOT** **supported** yet
>     

Debugging can be time consuming and challenging tasks to many automation testers. Katalon Studio helps solve this problem by supporting users the ability to capture test execution via video format. Users can simply enable video capturing feature in Project Settings.

Follow the steps below to see how work with Katalon Studio video capturing feature

1.  After creating a test suite in Katalon Studio, select **Project > Settings** to open _Project Settings dialog_ box. Navigate to **Report** section  
    ![](../../images/katalon-studio/docs/video-capturing/image2017-8-25-143A243A12.png)  
      
    
2.  Check option "**Enable Video Recorder during execution**". By **default**, Katalon Studio will only capture **Failed** test cases. However, users can select options to capture: only **Passed** test cases, only **Failed** test cases or capture both.  
    ![](../../images/katalon-studio/docs/video-capturing/image2017-8-25-153A43A45.png)  
      
    
    Video setting can be specified depend on users preferences. Katalon Studio recommends AVI (.avi) format and Low quality to save disk space. The higher the video qualiy the bigger file size will be.
    
    <table><thead><tr><th>&nbsp;</th><th>Options</th></tr></thead><tbody><tr><td><strong>Video format</strong></td><td>AVI (.avi)<br>MOV (.mov)</td></tr><tr><td><strong>Video quality</strong></td><td>Low<br>Medium<br>High</td></tr></tbody></table>
    
      
      
    
3.  After test suite is executed. In **Tests Explorer**, navigate to **Reports** and select the most recent report to view test suite execution results. The list of test cases will be displayed in test case table with its video attached accordingly. Click on the play icon in 'Video' column to play the video. Test steps descriptions are embeded as subtitle. For example, please take a look at below screenshot  
    ![](../../images/katalon-studio/docs/video-capturing/image2017-8-25-153A353A13.png)

By watching how automation test was executed, testing team able to identify exactly where the test had failed. Thus, time and resources are managed more efficiently and effectively.