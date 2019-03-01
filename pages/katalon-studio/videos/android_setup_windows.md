---
title: "Android setup on Windows"
sidebar: katalon_studio_videos_sidebar
permalink: katalon-studio/videos/android_setup_windows.html
redirect_from:
    - "/x/tYIY/"

description: "A quick guide for Android setup on Windows using Katalon Studio, a complete test automation tool, built on the top of Selenium and Appium"
---
<iframe width="560" height="349" src="https://www.youtube.com/embed/XRw50gtMcbM?autoplay=1" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>

**A quick guide for Android setup on Windows using Katalon Studio, a complete test automation tool, built on the top of Selenium and Appium. Katalon Studio helps you start automation testing on web on mobile with the least efforts and no costs. Free download at [www.katalon.com](https://www.katalon.com)**

**Read full guideline [here.](https://docs.katalon.com/katalon-studio/docs/mobile-on-windows.html)**

With [Katalon Studio](https://www.katalon.com/), let's setup for Mobile testing in Windows by implementing _4 steps_:

1.  **Install Node.js**

*   Download and install Node.js using the **Windows installer** on: [https://nodejs.org/en/download](https://nodejs.org/en/download). Make sure you install Node.js into a location where you have full **Read** and **Write** permissions.
*   When installing Node.js, make sure that the **Add to PATH** option is checked. To make sure Node.js is installed correctly, you can open Windows command line and type the command: **where node** to see if system can find Node.js.

2.  **Install Appium**

*   Open **Command Prompt** of Windows and input following command to install Appium.

```groovy
npm install -g appium

```

*   Open Katalon Studio and go to the **Windows > Katalon Studio Preferences > Katalon > Mobile** settings. Set **Appium Directory** to the installed folder. By default, it's usually installed at _C:\\Users\\{your login account}\\AppData\\Roaming\\npm\\node_modules\\appium_.

3.  **Setup Devices**

*   Install **USB Driver** for your phone, you can download it from the device manufacturer site. (If your Android phone is one of Google Nexus series, please skip this step because Android SDK already include the driver).
*   Turn on the phone developer mode (go to **Settings -> Developer options**).
*   Connect your Android device to the computer using USB cable. Just confirm if prompted for accepting/trusting the phone.

4.  **Test Execution**

*   Launch Katalon Studio.
*   Open a test project.
*   Open a test case or test suite.
*   Select the option to execute with the Android device from the **Run** button of the main toolbar. (Katalon Studio for Windows only supports Android devices).
*   Select your device from the **Android Devices** list. Click **OK**.

Congratulations! Now you know how to setup for Mobile testing in Windows with Katalon Studio.

For further instructions and help, please refer to _[Katalon User Guide](/x/oArR)_ or _[Katalon Forum](https://forum.katalon.com/)_