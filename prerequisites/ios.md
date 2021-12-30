# iOS

To execute the examples over the iOS platform you'l need:

* MacOS machine&#x20;
* Xcode installed
* iPhone simulator&#x20;

## Prerequisite

* [Install Java JDK and Maven](https://docs.autonomx.io/prerequisites)

## Setup Environment

### Install NodeJs

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Run command prompt: npm -version
* Alternatively, you install via brew: brew install node
* ```
  npm -version
  6.13.4
  ```

### Install Homebrew

Homebrew is a package management software that will make it much simpler for us to install a few other software.

To install, follow the instructions on this page: [https://brew.sh/](https://brew.sh)\
This step will also install the Xcode Command Line Tools as part of the process.

### Install Xcode And Simulators

* Launch the Mac AppStore and download/install Xcode
* Once installed, Launch Xcode and select Xcode > Preferences > Components to install the simulators that you might want to test against.

### Install Carthage

Carthage is a dependency manager. In our case, it is required by WebDriverAgent.

In [terminal](https://www.macworld.co.uk/how-to/mac-software/how-use-terminal-on-mac-3608274/), enter the following:

```
brew install carthage
```

### Install authorize-ios

[authorize-ios](https://github.com/appium/authorize-ios) is a little utility that pre-authorizes Instruments to run UIAutomation scripts against iOS devices. You need this utility to run tests on real devices

In terminal, enter the following:

```
npm install -g authorize-ios
```

### Install ideviceinstaller

[ideviceinstaller](https://github.com/libimobiledevice/ideviceinstaller) is a tool to interact with the installation\_proxy\
of an iOS device allowing to install, upgrade, uninstall, archive, restore\
and enumerate installed or archived apps. You also need this utility to run tests on real devices.

```
brew install ideviceinstaller
```

\*\*If you are macOS High Sierra or Mojave you may encounter an error involving “invalid active developer path” in which case run the following command in terminal:

```
xcode-select --install
sudo xcode-select -r
```

Then try install ideviceinstaller one more time.

## Install Appium

* Run command: **npm install -g appium**
* If permission issues: **sudo npm install -g appium --unsafe-perm=true --allow-root**
* Check version in command line:
* ```
  appium --version
  1.15.1
  ```

## Install Appium Doctor

* Appium doctor checks preconditions for appium
* In terminal, enter the following:

```
npm install -g appium-doctor
```

To run appium doctor, set the following into terminal:

```
appium-doctor
```

* appium-doctor’s output should look something like this:![](https://miro.medium.com/max/3036/1\*znQbz\_vbtZXkdX4LOJWuzg.png)
* Android Home, adb, android and emulator errors can be ignored as they relate to automation testing on Android devices.
* Follow instructions on missing components

## Install Appium Desktop

* Appium desktop:
  * Runs external appium server
  * Includes App inspector to view elements&#x20;
* Download appium desktop from [https://github.com/appium/appium-desktop/releases](https://github.com/appium/appium-desktop/releases)
  * Select the proper download based on the OS

![](<../.gitbook/assets/image (116).png>)



### Setup Inspector

* Launch Appium and Start Server

![](<../.gitbook/assets/image (118).png>)

* Select "**Start Inspector Session**" (magnifying glass, top right icon)
* Setup Desired Capabilities:
  * **platforName**: iOS
  * **platformVersion**: version of iOS simulator
  * **deviceName**: Simulator name
  *
    * Real Android device:&#x20;
      * Connect a real Android device to your computer
      * Command prompt: adb devices
      * Device name: **ENUL6303030010**
      * **In Appium Set: UDID: ENUL6303030010**

![](<../.gitbook/assets/image (120).png>)

* **app**: location of app file
* ```
  {
    "platformName": "iOS",
    "platformVersion": "12.1",
    "deviceName": "iPhone XR",
    "app": "/Users/Shared/Jenkins/Documents/Selenium/automation-client/selenium/resources/eurika.app"
  }
  ```

![](<../.gitbook/assets/image (122).png>)

* Start Session
* The app and the page source will be displayed side by side

### UiAutomator Viewer

* **If Errors occur or session cannot start, you may consider using UIAutomator Viewer Instead**
  * [https://www.guru99.com/uiautomatorviewer-tutorial.html](https://www.guru99.com/uiautomatorviewer-tutorial.html)

## iOS Test Setup

* Continue with [iOS Test Setup](https://docs.autonomx.io/getting-started/ios-tests)
