# iOS

To execute the examples over the iOS platform you'l need:

* MacOS machine 
* Xcode installed
* iPhone simulator 

## Prerequisite

* [Install Java JDK and Maven](https://docs.autonomx.io/prerequisites)

## Install NodeJs

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Run command prompt: npm -version
* Alternatively, you install via brew: brew install node
* ```text
  npm -version
  6.13.4
  ```

## Install Homebrew

Homebrew is a package management software that will make it much simpler for us to install a few other software.

To install, follow the instructions on this page: [https://brew.sh/](https://brew.sh/)  
This step will also install the Xcode Command Line Tools as part of the process.

## Install Xcode And Simulators

* Launch the Mac AppStore and download/install Xcode
* Once installed, Launch Xcode and select Xcode &gt; Preferences &gt; Components to install the simulators that you might want to test against.

## Install Carthage

Carthage is a dependency manager. In our case, it is required by WebDriverAgent.

In [terminal](https://www.macworld.co.uk/how-to/mac-software/how-use-terminal-on-mac-3608274/), enter the following:

```text
brew install carthage
```

## Install authorize-ios

[authorize-ios](https://github.com/appium/authorize-ios) is a little utility that pre-authorizes Instruments to run UIAutomation scripts against iOS devices. You need this utility to run tests on real devices

In terminal, enter the following:

```text
npm install -g authorize-ios
```

## Install ideviceinstaller

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



