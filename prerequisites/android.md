# Android

To execute the examples over the Android platform you'll need:

* Android SDK
* Install Android Simulator
* Appium

## Install Android Studio And Install Simulator

* Install Android Studio: [https://developer.android.com/studio/index.html](https://developer.android.com/studio/index.html)
* Follow Instructions: [https://www.swtestacademy.com/appium-tutorial/](https://www.swtestacademy.com/appium-tutorial/) **Android Studio Installation Section**
* You should now have an Android simulator installed 

## Install Appium

* Run command: **npm install -g appium**
* If permission issues: **sudo npm install -g appium --unsafe-perm=true --allow-root**

## Install Appium Desktop

* Appium desktop:
  * Runs external appium server
  * Includes App inspector to view elements 
* Download appium desktop from [https://github.com/appium/appium-desktop/releases](https://github.com/appium/appium-desktop/releases)
  * Select the proper download based on the OS

![](../.gitbook/assets/image%20%2884%29.png)



### Setup Inspector

* Launch Appium and Start Server

![](../.gitbook/assets/image%20%28112%29.png)

* Select "**Start Inspector Session**" \(magnifying glass, top right icon\)
* Setup Desired Capabilities:
  * **platforName**: Android
  * **automationName**: UiAutomator2
  * **avd**: Simulator name
    * Real Android device: 
      * Command prompt: adb devices
      * Device name: **ENUL6303030010**
      * **In Appium Set: UDID: ENUL6303030010 \(**_do not set avd_**\)**

![](../.gitbook/assets/image%20%2826%29.png)

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

![](../.gitbook/assets/image%20%2825%29.png)

* Start Session

![](../.gitbook/assets/image%20%2824%29.png)

* The app and the page source will be displayed side by side

### UiAutomator Viewer

* **If Errors occur or session cannot start, you may consider using UIAutomator Viewer Instead**
  * [https://www.guru99.com/uiautomatorviewer-tutorial.html](https://www.guru99.com/uiautomatorviewer-tutorial.html)

