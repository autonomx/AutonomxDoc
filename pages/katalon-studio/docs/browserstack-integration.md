---
title: "BrowserStack Integration" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/browserstack-integration.html 
redirect_from:
    - "/display/KD/BrowserStack+Integration/"
    - "/display/KD/BrowserStack%20Integration/"
    - "/x/mRdO/"
    - "/katalon-studio/docs/browserstack-integration/"
description: 
---
To integrate with BrowserStack, you need to execute your test scripts using '[Remote](/display/KD/Execute+a+test+case#Executeatestcase-Executeinaremoteenvironment)' option based on BrowserStack provided capabilities of your choices. Below are steps on how to get your desire SauceLabs capabilities.

1.  Login to BrowserStack
2.  On the left side of BrowserStack account page, you will see Username and Access Key value. These values are needed for remote connection using their BrowserStack remote URL
    
    ```groovy
    http://username:accessKey@hub-cloud.browserstack.com/wd/hub
    Example: http://abcdef121:affdfsr543xyz@hub-cloud.browserstack.com/wd/hub
    ```
    
    Please note this URL for later input.
    
3.  Navigate to this page: [https://www.browserstack.com/automate/junit#configure-capabilities](https://www.browserstack.com/automate/junit#configure-capabilities)
4.  Select desired capabilities you would like to use, in my case I select iOS and device's name is: iPhone 6S Plus. Desired capabilities values are generated upon your selection.  
    ![](../../images/katalon-studio/docs/browserstack-integration/Screen-Shot-2017-10-04-at-10.07.23.png)

4.In Katalon Studio, open ['Remote' ](/display/KD/Execute+a+test+case#Executeatestcase-Executeinaremoteenvironment)settings and pass SauceLabs settings from step #2 and #3 with some adjustments:

*   Remote Web Server URL (retrieved from step #2): 
    
    ```groovy
    http://abcdef121:affdfsr543xyz@hub-cloud.browserstack.com/wd/hub
    ```
    
*   Other settings are gotten from step #4.

![](../../images/katalon-studio/docs/browserstack-integration/Screen-Shot-2017-10-04-at-13.36.34.png)

5\. The final step will be selecting '**Remote**' item for execution.