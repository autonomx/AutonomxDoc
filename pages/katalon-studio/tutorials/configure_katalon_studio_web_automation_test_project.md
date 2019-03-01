---
title: "Configuring Katalon Studio for Web Testing"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project.html
description: "Katalon Studio supports functional testing of web applications on many browsers. This tutorial explains how to setup a test project in Katalon Studio."
---
Katalon Studio supports functional testing of web applications on Internet Explorer, Edge, Chrome, Firefox and Safari.

This tutorial explains how to setup a test project in Katalon Studio. We assume that you are familiar with general principles of automated testing and have minimal knowledge of the Katalon Studio IDE.

Internet Explorer Configurations
--------------------------------

Skip this section if you do not wish to run your automated tests on Internet Expolorer. Otherwise, you need the following setup:

– For IE 7 to IE 11, set the **Security** level for all zones (_Internet, Local Intranet, Trusted sites_ and _Restricted sites_) to the same value. To access this setting, choose **Internet Options** from **Control Panel** of Windows, then switch to the **Security** tab:

![Internet Options](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/1.-Katalon-Security.png)

– For IE 10 or later, uncheck **Enable Enhanced Protected Mode*** in the **Advanced** tab.

![Enable Enhanced Protected Mode](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/2.-Katalon-Security.png)

– Set the **Zoom** level on IE to **100%** so that native mouse events can be identified correctly.

![Zoom level on IE for web automation](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/3.-Katalon-IE.png)

– For IE 11, you need to set a registry entry on the target computer so that the Katalon driver can maintain a connection to the IE instances that it creates.

1.Type '**_regedit_**' into **Command Prompt** to open **Registry Editor**

2\. Locate the **FEATURE_BFCACHE** subkey (create the **FEATURE_BFCACHE** subkey in case it is not there):

2.1 For 32-bit Windows, the key is at _HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BFCACHE_.

2.2. For 64-bit Windows, the key is at _HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Wow6432Node\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_BFCACHE_.

3\. Inside this subkey, create a value named **iexplore.exe** with the Type as **REG_DWORD** and the Data as **0**.

![create a value named iexplore.exe](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/4.-Katalon-Reg_Dword.png)

Katalon Addon for Chrome
------------------------

Katalon Utility, a [**Katalon addon**](https://chrome.google.com/webstore/detail/katalon-utility/ljdobmomdgdljniojadhoplhkpialdid) for Chrome, is required if capturing objects on your active Chrome browsers. You can install this Katalon addon for Chrome from [here](https://chrome.google.com/webstore/detail/katalon-utility/ljdobmomdgdljniojadhoplhkpialdid). Refer to [Web Object Spy](/x/5BZO) and [Record & Playback](/x/RwnR) for more details.

![Katalon Utility](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/5.-Katalon-Addon.png)

Port Configuration
------------------

This configuration allows you to decide which port to be used for sending data between Katalon Utility and Katalon Studio.

1. Once Katalon Utility is added to Chrome, right-click on its icon at the top right of your browser and open the **Options** setting to specify a preferred port to communicate with Katalon Studio (default value is 50000).

![open the Options setting](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/6.Katalon-Utility.png)

2\. Open preferences for Katalon Utility in Katalon Studio by accessing **Window > Preferences > Katalon > Utility Addon**. Enter the same port number to be used for communicating with Katalon Utility.

![Katalon Utility Addon](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/7.-Katalon-Utility-Addon.png)

Proxy Settings
--------------

There may be a situation when your machine is setup within a restricted network with a policy to only allow Internet connection through a proxy server. In such a case, proxy settings can be configured from **Preferences > Proxy**. The settings affect both WebUI and WebService test execution. (Contact your network administrator to have necessary information for these settings).

![Katalon Proxy Settings](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/8.-Katalon-Proxy-Settings.png)

Certificate Settings
--------------------

Users may find their computers operating in a network that requires some certification in order to access the Internet.

Katalon Studio supports the capability to bypass certificate validation so that users with restricted network policies can work with Katalon Studio as usual. This setting can be found from **Project > Settings > Network**. This setting affects both WebUI and WebService testing.

![Katalon Certificate Settings](../../images/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project/9.-Katalon-Certificate-settings.png)
