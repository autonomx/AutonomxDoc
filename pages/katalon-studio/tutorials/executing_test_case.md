---
title: "Executing test case"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/executing_test_case.html
description: "Katalon Studio supports executing test case in multiple environments, allowing testers to validate their tests across browsers/platforms."
---
Katalon Studio supports executing automation tests in multiple environments, allowing testers to validate their tests across browsers/platforms. This tutorial will walk you through the steps needed to execute test cases in the Katalon Studio supported environments.  

Currently, Katalon Studio supports executing automation test in the following environments:

| Execution Environment | Description |
| --- | --- |
| Chrome | Execute a test case in Chrome, using the Desired Capabilities settings defined in [Execution Settings](/display/KD/Execution+Settings). |
| Firefox | Execute a test case in Firefox, using the Desired Capabilities settings defined in Execution Settings. |
| IE | Execute a test case in Internet Explorer, using the Desired Capabilities settings defined in Execution Settings. |
| Safari | Execute a test case in Safari, using the Desired Capabilities settings defined in Execution Settings. |
| Edge | Execute a test case in Edge, using the Desired Capabilities settings defined in Execution Settings. |
| Remote | Execute a test case in a remote environment, using the Desired Capabilities settings defined in Execution Settings. |
| Headless | Execute a test case in headless mode, using the Desired Capabilities settings defined in Execution Settings. |
| Android | Execute a test case on Android device, using the Desired Capabilities settings defined in Execution Settings. |
| iOS | Execute a test case on an iOS device, using the Desired Capabilities settings defined in Execution Settings. |
| Custom | Execute a test case in a custom environment, using the Desired Capabilities settings defined in Execution Settings. |

### Execute on Web

1\. Open a test case, then select the web browser (Chrome, Firefox, IE, Safari or Edge) to run the test case from the **Run** command of the main toolbar.

Note: If you simply click on **Run**, the test case will be executed using the default browser specified in [Execution Preferences](/pages/viewpage.action?pageId=3179873).

2\. The test case is executed using the selected web browser.

### Execute in a remote environment

1\. Access the Remote Web setting from **Main Menu > Project > Settings > Execution > Default > Web UI > Remote Web**.

2\. Setup default configuration for the remote environment in Project Settings. Refer to [Execution Settings](/display/KD/Execution+Settings) for more details.  
![Project Settings](../../images/katalon-studio/tutorials/executing_test_case/Execution-Settings.png)

3\. Open a test case, then select **Remote** to run the test case from the **Run** command of the main toolbar.  
![Select Remote to run the test case](../../images/katalon-studio/tutorials/executing_test_case/select-Remote.png)  

4\. The test case is executed on the predefined remote environment.

### Execute in the headless mode

1\. Open a test case, then select the Headless option to run it from the **Run** command of the main toolbar.  
![Headless option in Katalon Studio](../../images/katalon-studio/tutorials/executing_test_case/select-the-Headless.png)

2\. The test case is executed without launching any browser.

### Execute on mobile

1\. Open a test case, then select the Android (or iOS) option to run it from the **Run** command of the main toolbar (the iOS option is only available on macOS).  
![Select the Android (or iOS) option](../../images/katalon-studio/tutorials/executing_test_case/select-the-Android.png)

2\. Select the device from the listed devices.  
![Select the device for executing test case](../../images/katalon-studio/tutorials/executing_test_case/Select-the-device.png)  
Note: If there is no device in the list, please make sure that the Developer Mode on the device is turned on, try to unplug and reconnect several times until you are prompted for accepting/trusting this device, make sure you accept it (Refer to [Mobile on Windows](/display/KD/Mobile+on+Windows) & [Mobile on macOS](/display/KD/Mobile+on+macOS) for more details).

3\. The test case is executed on the selected mobile device.

### Execute in a custom environment

1\. Access the Custom setting from **Main Menu > Project > Settings > Execution > Custom**.

2\. Configure Desired Capabilities for custom execution in Project Settings. Refer to [Execution Settings](/display/KD/Execution+Settings) for more details.  
![Custom execution in Project Settings](../../images/katalon-studio/tutorials/executing_test_case/Execution-Settings-2.png)

3\. Open a test case, then select your preferred custom option to run the test case from the **Run** command of the main toolbar.  
![run the test case from the Run command](../../images/katalon-studio/tutorials/executing_test_case/select-your-preferred-custom.png)

4\. The test case is executed in the selected custom environment.

### Job Progress

The Job Progress window will be triggered automatically to show the progress while your test case is being executed. You can switch the Job Progress of different executions to review their details accordingly.

![Switch the Job Progress of different executions](../../images/katalon-studio/tutorials/executing_test_case/Job-progress.png)