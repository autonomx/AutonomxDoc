# Android

To execute the examples over the Android platform you'll need:

* NodeJs
* Android SDK
* Install Android Simulator
* Appium

## Prerequisite

* [Install Java JDK and Maven](https://docs.autonomx.io/prerequisites)

## Install Android Studio And Simulator

* Install Android Studio: [https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)
* Follow Instructions: [https://www.swtestacademy.com/appium-tutorial/](https://www.swtestacademy.com/appium-tutorial/) **Android Studio Installation Section**
* You should now have an Android simulator installed 

## Install NodeJs

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Run command prompt: npm -version
* ```text
  npm -version
  6.13.4

  ```

### Win10

* If the Nodejs is successfully installed and still displays the message like this:

  > 'npm' is not recognized as an internal or external command, operable program or batch file.

  Follow the steps below for Windows users:

  1. Go to **My Computer** Properties
  2. Click **Advanced System Setting** from the Left bar of a window.
  3. Now you have a System Properties window. Click **Advanced**
  4. Then, Click **Environment Variable** button
  5. Now you have Environment variable window: From _System Variable_, Select **Path**
  6. Click **Edit**
  7. At the end of the Variable value, add `;C:\Program Files\nodejs\`

     **Note**: If you have installed _nodejs_ on other drives then please act accordingly.

  8. Click **Ok** all the open dialogue box

  **Very important Note**: _**"Close your Command Prompt And Restart Again"**_ \(It's very important because if you didn't restart your command prompt then changes will not be reflected.\)

  Now you can use the **npm** command anywhere

## Install Appium

* Run command: **npm install -g appium**
* If permission issues: **sudo npm install -g appium --unsafe-perm=true --allow-root**
* Check version in command line:
* ```text
  appium --version
  1.15.1
  ```

## Install Appium Desktop

* Appium desktop:
  * Runs external appium server
  * Includes App inspector to view elements 
* Download appium desktop from [https://github.com/appium/appium-desktop/releases](https://github.com/appium/appium-desktop/releases)
  * Select the proper download based on the OS

![](../.gitbook/assets/image%20%2888%29.png)



### Setup Inspector

* Launch Appium and Start Server

![](../.gitbook/assets/image%20%28120%29.png)

* Select "**Start Inspector Session**" \(magnifying glass, top right icon\)
* Setup Desired Capabilities:
  * **platforName**: Android
  * **automationName**: UiAutomator2
  * **avd**: Simulator name
    * Real Android device: 
      * Connect a real Android device to your computer
      * Command prompt: adb devices
      * Device name: **ENUL6303030010**
      * **In Appium Set: UDID: ENUL6303030010 \(**_do not set avd_**\)**

![](../.gitbook/assets/image%20%2827%29.png)

* * **app**: location of apk file
* **deviceName**: Android
* ```text
  {
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "avd": "Pixel_C_API_25",
    "app": "/Users/Shared/Jenkins/Documents/Selenium/autonomx/autonomx-client/autonomx/automation/resources/selendroid.apk",
    "deviceName": "Android"
  }
  ```

![](../.gitbook/assets/image%20%2826%29.png)

* Start Session

![](../.gitbook/assets/image%20%2825%29.png)

* The app and the page source will be displayed side by side

### UiAutomator Viewer

* **If Errors occur or session cannot start, you may consider using UIAutomator Viewer Instead**
  * [https://www.guru99.com/uiautomatorviewer-tutorial.html](https://www.guru99.com/uiautomatorviewer-tutorial.html)

## Android Test Setup

* Continue with [Android test setup](https://docs.autonomx.io/getting-started/android-tests)

