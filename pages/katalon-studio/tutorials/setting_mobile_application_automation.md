---
title: "Configuring Katalon Studio for Mobile Testing on Windows"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/setting_mobile_application_automation.html
description: "Test automation for mobile app required to set up testing environment before performing any test. Learn how to perform mobile testing in Katalon Studio."
---
Test automation for mobile application required users to set up proper testing environment before performing any test. To perform Mobile testing on Katalon Studio required:

*   Node.js
*   Appium
*   Android/iOS device/emulator set up
*   AndroidSDK (packaged with Katalon Studio)

This tutorial illustrates how to set up environment for mobile app automation on both Windows operating systems.

Installing Node.js
------------------

Navigate to URL '[https://nodejs.org/en/download/](https://nodejs.org/en/download/)' to download _Node.js_. Download the file according to the bit size of your operating system (32 bit or 64 bit) and install it.

For more details on how to install Node.js, please refer to [http://blog.teamtreehouse.com/install-node-js-npm-windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)

In order to successfully utilize Katalon Studio for mobile application automation, you will need to be able to run Node.js +6 and npm +3.  To make sure you have the appropriate version of **Node** and **npm** installed,

Open Windows Command Prompt/MacOS Terminal and type node -v for Node and npm -v for npm.

![run Node.js in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Install-Node.JS.png)

Installing Appium
-----------------

Open Command Prompt/Terminal and type the following command to install Appium:

**npm install –g appium**

To see if Appium is installed successfully, open Command Prompt/Terminal and type **appium**. This should show you the current version of your installed Appium (e.g: v1.6.5).

![Installing Appium in Katalon Studio](../../images/katalon-studio/tutorials/setting_mobile_application_automation/Install-Appium.png)

Appium directory needs to be set after this installation.

Setting Up the Appium Directory
-------------------------------

1.  Open Katalon Studio and Go to **Window** Menu in the toolbar.
2.  Select **Katalon Studio Preferences > Katalon > Mobile**
3.  Set **Appium Directory** to the installed folder. User can browse or can paste the path.

By default, it's usually installed at _C:\\Users\\{user  login account}\\AppData\\Roaming\\npm\\node_modules\\appium._