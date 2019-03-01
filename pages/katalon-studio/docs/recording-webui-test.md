---
title: "Recording WebUI Test" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/recording-webui-test.html 
redirect_from:
    - "/display/KD/Recording+WebUI+Test/"
    - "/display/KD/Recording%20WebUI%20Test/"
    - "/x/IA3R/"
    - "/katalon-studio/docs/recording-webui-test/"
description: 
---
Follow these basic steps to get familiar with the Record & Playback features for WebUI Test:  

1.  Click on the **New Test Case** button on the main toolbar. Provide a name for your test case and click **OK**. An empty test case will be created.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-2-23-113A473A35.png)  
      
    
2.  Click on **Record **from the main toolbar.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-5-21-133A213A16.png)  
      
    
3.  The **Record** dialog is displayed.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-30-193A333A17.png)  
      
    
4.  Click on the **Record** button to start recording test case.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-1-9-173A83A37.png)  
    Where:
    
    <table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>New Browsers</td><td>Launch a new browser and start recording actions from that browser.</td></tr><tr><td>Active Browsers</td><td><p>Focus on <strong>the current active Chrome browser</strong> and start recording actions from it. You will be asked for installation of Katalon Utility:</p><p><img src="../../images/katalon-studio/docs/recording-webui-test/image2017-2-23-113A543A29.png"></p><p>Refer to <a href="/pages/viewpage.action?pageId=5123595">Katalon Addon for Chrome</a> for more details.</p></td></tr></tbody></table>
    
5.  Execute all your test steps on the browser. All of your actions performed on the browser will be recorded by Katalon Studio.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-28-163A143A6.png)  
    For the scope of this tutorials, let's access [demoaut.katalon.com](http://demoaut.katalon.com/), click on the Make Appointment button, then click on the Login button.  
      
    
6.  You can **Stop** or **Pause** recording if needed. When you are done with recording, click **OK** to save recorded actions into Katalon Studio.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-28-163A183A28.png)  
      
    
7.  You will be prompted to save captured objects into Object Repository of Katalon Studio. Click **OK** to continue.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-6-28-163A203A9.png)  
      
    
8.  Recorded objects and actions are saved in the test case as shown below.  
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-8-21-133A393A4.png)  
      
    
9.  Click on the **Run** button on the main **Toolbar** to execute the script. You can specify the target browser to run by selecting it from the drop-down list.   
    ![](../../images/katalon-studio/docs/recording-webui-test/image2017-2-23-133A93A28.png)  
      
    

> The steps above create and run a simple test case. For advanced features such as branching, looping or validation, you can refer to following articles: 
> 
> *   [Common Validation](https://www.katalon.com/tutorials/common-validation/) 
> *   [Control Statements](/pages/viewpage.action?pageId=5124781)