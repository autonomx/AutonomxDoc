# iOS Tests

## Purpose

* We can execute our tests through Microsoft Azure CI
* In this example, we will setup jobs for web, android and iOS tests. 
* For mobile tests, we will use simulators on hosted vms

![](../../../.gitbook/assets/image%20%2862%29.png)

## iOS Tests

### Set Agent

* Set Agent as Hosted macOS
* If using a locally hosted vm, select appropriate agent

![](../../../.gitbook/assets/image%20%2837%29.png)

### Install Node 10.x

* Add task Node.js tool installer
* Set version to 10.x

![](../../../.gitbook/assets/image%20%2846%29.png)

### Install Appium

* Add bash script task
* Inline script: 
* ```text
  npm install -g appium
  ```

![](../../../.gitbook/assets/image%20%2889%29.png)

### Install MJPEG Consumer

* Add bash script task
* Inline script:
* ```text
  brew install ffmpeg
  ```

![](../../../.gitbook/assets/image%20%28103%29.png)

### Run Appium

* Add bash script task
* Inline script:
* ```text
  appium --relaxed-security &
  ```

![](../../../.gitbook/assets/image%20%28116%29.png)

### Run Tests

* Add Bash task with maven command to run the tests
* The script command:
* ```text
  mvn clean compile test -DsuiteXmlFile=suites/iosSmokeTests.xml 
  ```
* To add additional configuration parameters, use prefix '-D' to each property value
  * eg.-Dandroid.mobile="test\_android\_emulator"
  * note: There should be no space in setting the key value combination
* Inline script:
* ```text
  mvn clean compile test -DsuiteXmlFile=suites/iosSmokeTests.xml -Dios.capabilties.platformVersion=10.0 -Dios.mobile="iPhone 6" -Dappium.useExternalAppiumServer=true  -Drecorder.enableRecording=true 
  ```

![](../../../.gitbook/assets/image%20%28111%29.png)

### Publish the results

* Add publish test results task
* Set Test result files: 
* ```text
  **/junitreports/TEST-*.xml
  ```
* Set: Fail if there are test failures

![](../../../.gitbook/assets/image%20%28100%29.png)

