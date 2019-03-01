---
title: "Installing and Setting up Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/install_setup_katalon_studio.html
description: "This guide gives you a quick introduction to Katalon Studio, from downloading to activating and running your first automation test."
---
Katalon Studio is a simple and powerful test automation solution for not only web and mobile applications but also web services, a revolution of the Selenium and Appium frameworks. Katalon Studio allows users with less experience in programming to work effortlessly by providing a predefined automation framework with hundreds of built-in keywords. This guide explains all the basic steps, from downloading to activating the build, so that new users can start Katalon Studio for the first time.

Download Katalon Studio
-----------------------

Katalon Studio is available for free, supporting both Windows and Mac. Visit the [Katalon Studio Website](https://www.katalon.com/) to download the latest version.

Environment Configuration
-------------------------

First you need to verify if your computer meets the [System Requirements](http://docs.katalon.com/display/KD/System+Requirements) to automate using Katalon Studio.

For **Web UI** automation, no additional settings are needed except making sure the required browsers are installed. Check [this list](/x/dAAM) for all supported browsers.

Note: in case you are Windows users, you may want to disable the **User Access Control (UAC)** settings so that Katalon Studio can launch Chrome/Firefox browsers properly. Refer to [this guide](https://www.howtogeek.com/howto/windows-vista/disable-user-account-control-uac-the-easy-way-on-windows-vista/) for steps to disable the UAC settings on different Windows.

For **Mobile** app automation, you need to install **Node.js** and **Appium** and enable the **USB Debugging mode** on your device. Please refer to the [Installation Guide](https://docs.katalon.com/katalon-studio/tutorials/setting_mobile_application_automation.html) for more details.

Start Katalon Studio
--------------------

To start Katalon Studio, double-click on the **katalon.exe** (Microsoft Windows)

![Download and Start Katalon Studio](../../images/katalon-studio/tutorials/install_setup_katalon_studio/Starting-Katalon-Studio.png)

or **Katalon Studio** (macOS) file in the directory where you unpack Katalon Studio. For example:

![](../../images/katalon-studio/tutorials/install_setup_katalon_studio/Katalon-MacOS.png "init-size")

Once started, the application should display the splash screen similar to the following screenshot:

![Katalon Studio Loading](../../images/katalon-studio/tutorials/install_setup_katalon_studio/image2016-10-20-143A113A21.png)

Activate Katalon Studio
-----------------------

After launching Katalon Studio, provide your registered username and password to activate your Katalon Studio. The username and password are the same as the one with which you've registered to download Katalon Studio from [https://www.katalon.com/](https://www.katalon.com/).

![Katalon Studio Activation pop-up](../../images/katalon-studio/tutorials/install_setup_katalon_studio/image2017-2-16-173A303A12.png)

If you have troubles activating Katalon Studio due to proxy issues, you can click on [Config Proxy](/display/KD/Proxy+Preferences) to configure the proxy setting accordingly.

If you are unable to access the Internet for activation, you can select Offline Activation to activate offline. You need to request an Offline Activation Code [here](https://www.katalon.com/activation/).

When your build is activated, the **Quick Guide** screen is displayed to guide you through all major features. You can skip this and view the Quick Guide later from the **Help** menu.

![Katalon Studio Quick Guide Overview](../../images/katalon-studio/tutorials/install_setup_katalon_studio/image2017-2-20-113A303A20.png)

You have successfully downloaded and activated Katalon Studio. Next, please refer to the following  guides to setup your test project:

*   [Setting up Web automation project](https://docs.katalon.com/katalon-studio/tutorials/configure_katalon_studio_web_automation_test_project.html)
*   [Setting up Mobile automation project in Windows](https://docs.katalon.com/katalon-studio/tutorials/setting_mobile_application_automation.html)
*   [Setting up Mobile automation project in macOS](https://docs.katalon.com/katalon-studio/tutorials/set_up_mobile_automation_project_macos.html)
*   [Setting up API automation project](https://docs.katalon.com/katalon-studio/tutorials/create_first_api_test_katalon_studio.html)
