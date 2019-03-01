---
title: "Web Locators Settings" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/web-locators-settings.html 
redirect_from:
    - "/display/KD/Web+Locators+Settings"
    - "/x/MwDR"
description: 
---
Since v5.3, Katalon Studio has allowed users to set default Web Locator in **Project Setting** > **Test Design** > **Web Locator**.

This setting helps user eliminate the repetitive tasks of check/un-check locators for each captured objects while recording or spying the application under test. All selected locators in this settings will be applied to all captured objects in Record and Spy Web. 

Custom locators can be added to the list. Pre-selected locators are recommended by Katalon team.

![](../../images/katalon-studio/docs/web-locators-settings/image2018-1-26 14_28_1.png)

Example
-------

1.  By default, **tag** property will be selected. In some cases you really don't want this behavior, so you can change this by:   
    - Add a new property called **tag** and deselect it  
    ![](../../images/katalon-studio/docs/web-locators-settings/image2018-1-26 14_21_20.png)  
      
    When you spy or record test steps, any object having this **tag** property will **not** be used by default  
    ![](../../images/katalon-studio/docs/web-locators-settings/image2018-1-26 14_15_27.png)  
      
    
2.  Working with Angular pages, there are two properties called **ng-model** and **ng-pattern** you would like to use it by default. Added these two properties to the list of current Web Locators.  
    ![](../../images/katalon-studio/docs/web-locators-settings/Screen Shot 2018-01-26 at 13.58.22.png)  
    These selected properties will be checked by default when you Spy or Record your test steps  
      
    ![](../../images/katalon-studio/docs/web-locators-settings/image2018-1-26 14_13_3.png)