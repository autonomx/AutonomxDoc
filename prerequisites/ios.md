# iOS

To execute the examples over the iOS platform you'l need:

* MacOS machine 
* Xcode installed
* iPhone simulator 

## Prerequisite

* [Install Java JDK and Maven](https://docs.autonomx.io/prerequisites)

## Setup Environment

### Install NodeJs

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Run command prompt: npm -version
* Alternatively, you install via brew: brew install node
* ```text
  npm -version
  6.13.4
  ```

### Install Homebrew

Homebrew is a package management software that will make it much simpler for us to install a few other software.

To install, follow the instructions on this page: [https://brew.sh/](https://brew.sh/)  
This step will also install the Xcode Command Line Tools as part of the process.

### Install Xcode And Simulators

* Launch the Mac AppStore and download/install Xcode
* Once installed, Launch Xcode and select Xcode &gt; Preferences &gt; Components to install the simulators that you might want to test against.

### Install Carthage

Carthage is a dependency manager. In our case, it is required by WebDriverAgent.

In [terminal](https://www.macworld.co.uk/how-to/mac-software/how-use-terminal-on-mac-3608274/), enter the following:

```text
brew install carthage
```

### Install authorize-ios

[authorize-ios](https://github.com/appium/authorize-ios) is a little utility that pre-authorizes Instruments to run UIAutomation scripts against iOS devices. You need this utility to run tests on real devices

In terminal, enter the following:

```text
npm install -g authorize-ios
```

### Install ideviceinstaller

[ideviceinstaller](https://github.com/libimobiledevice/ideviceinstaller) is a tool to interact with the installation\_proxy  
of an iOS device allowing to install, upgrade, uninstall, archive, restore  
and enumerate installed or archived apps. You also need this utility to run tests on real devices.

```text
brew install ideviceinstaller
```

\*\*If you are macOS High Sierra or Mojave you may encounter an error involving “invalid active developer path” in which case run the following command in terminal:

```text
xcode-select --install
sudo xcode-select -r
```

Then try install ideviceinstaller one more time.

## Install Appium

* Run command: **npm install -g appium**
* If permission issues: **sudo npm install -g appium --unsafe-perm=true --allow-root**
* Check version in command line:
* ```text
  appium --version
  1.15.1
  ```

## Install Appium Doctor

* Appium doctor checks preconditions for appium
* In terminal, enter the following:

```text
npm install -g appium-doctor
```

To run appium doctor, set the following into terminal:

```text
appium-doctor
```

* appium-doctor’s output should look something like this:![](https://miro.medium.com/max/3036/1*znQbz_vbtZXkdX4LOJWuzg.png)
* Android Home, adb, android and emulator errors can be ignored as they relate to automation testing on Android devices.
* Follow instructions on missing components

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
      * Connect a real Android device to your computer
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



