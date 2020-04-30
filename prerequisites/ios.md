# iOS

To execute the examples over the iOS platform you'l need:

* MacOS machine 
* Xcode installed
* iPhone simulator 

## Prerequisite

* [Install Java JDK and Maven](https://docs.autonomx.io/prerequisites)

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

## Install NodeJs

* [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Run command prompt: npm -version
* Alternatively, you install via brew: brew install node
* ```text
  npm -version
  6.13.4
  ```

## Install Appium

* Run command: **npm install -g appium**
* If permission issues: **sudo npm install -g appium --unsafe-perm=true --allow-root**
* Check version in command line:
* ```text
  appium --version
  1.15.1
  ```

