---
title: "Execute a test case" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/execute-a-test-case.html 
redirect_from:
    - "/display/KD/Execute+a+test+case/"
    - "/display/KD/Execute%20a%20test%20case/"
    - "/x/ugAM/"
    - "/katalon-studio/docs/execute-a-test-case/"
description: 
---
Currently, Katalon Studio supports executing automation test in following environments:

| Execution Environment | Description |
| --- | --- |
| Chrome | Execute a test case in Chrome, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| Firefox | Execute a test case in Firefox, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| IE | Execute a test case in Internet Explorer, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| Safari | Execute a test case in Safari, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| Remote | Execute a test case in a remote environment, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| Android | Execute a test case on Android device, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| iOS | Execute a test case on an iOS device, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| Custom | Execute a test case in a custom environment, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |

Execute on a web application
----------------------------

1.  Open a test case, then select the web browser (Chrome, Firefox, IE, Safari or Edge) to run the test case from **Run** command of the main toolbar.
    
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2-153A143A24.png)
    
    > If you simply click on the **Run** button, the test case will be executed using the default browser defined in [Execution Preferences (Version 5.0 and below)](/pages/viewpage.action?pageId=3179873).
    
2.  The test case will be executed using the selected web browser.
    

Execute in a remote environment
-------------------------------

1.  Setup default configuration for the remote environment in project settings. Refer to [Execution Settings](/display/KD/Execution+Settings) for more details.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2017-6-30-203A533A9.png)  
      
    
2.  Open a test case, then select **Remote** option to run the test case from **Run** command of main toolbar.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2-153A183A13.png)
    
3.  The test case will be executed on a predefined remote environment.

Execute on a mobile application
-------------------------------

1.  Open a test case, then select the preferred mobile OS to run the test case from **Run** command of main toolbar (iOS option is only available in macOS).  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2-153A183A26.png)  
      
    
2.  Select the device from the listed devices.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-1-26-183A543A41.png)
    
    > If there is no device in the list, please make sure the Developer Mode on the phone is turned on, try to unplug and reconnect several times until you are prompted for accepting/trusting this device, make sure you accepted it (Refer to [Mobile on Windows](/pages/viewpage.action?pageId=1606325) & [Mobile on macOS](/display/KD/Mobile+on+macOS) for more details).  
    > 
    > ![](../../images/katalon-studio/docs/execute-a-test-case/image2018-8-2-153A183A54.png)
    
3.  The test case will be executed using selected mobile device.

Execute on a custom environment
-------------------------------

1.  Setup desired capabilities for custom execution in project settings. Refer to [Execution Settings](/display/KD/Execution+Settings) for more details.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2017-6-30-203A533A51.png)  
      
    
2.  Open a test case, then select your preferred custom option to run the test case from **Run** command of the main toolbar.  
    ![](../../images/katalon-studio/docs/execute-a-test-case/image2017-2-14-173A343A14.png)  
      
    
3.  The test case will be executed on selected custom option.

Job Progress
------------

The Job Progress will be triggered automatically to show the progress while your test case is being executed.

![](../../images/katalon-studio/docs/execute-a-test-case/image2017-6-30-203A543A25.png)