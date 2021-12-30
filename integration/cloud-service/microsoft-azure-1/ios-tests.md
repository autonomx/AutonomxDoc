# iOS Tests

## Purpose

* We can execute our tests through Microsoft Azure CI
* In this example, we will setup jobs for web, android and iOS tests.&#x20;
* For mobile tests, we will use simulators on hosted vms

![](<../../../.gitbook/assets/image (62).png>)

## iOS Tests

### Set Agent

* Set Agent as Hosted macOS
* If using a locally hosted vm, select appropriate agent

![](<../../../.gitbook/assets/image (63).png>)

### Install Node 10.x

* Add task Node.js tool installer
* Set version to 10.x

![](<../../../.gitbook/assets/image (64).png>)

### Install Appium

* Add bash script task
* Inline script:&#x20;
* ```
  npm install -g appium
  ```

![](<../../../.gitbook/assets/image (65).png>)

### Install MJPEG Consumer

* Add bash script task
* Inline script:
* ```
  brew install ffmpeg
  ```

![](<../../../.gitbook/assets/image (66).png>)

### Run Appium

* Add bash script task
* Inline script:
* ```
  appium --relaxed-security &
  ```

![](<../../../.gitbook/assets/image (67).png>)

### Run Tests

* Add Bash task with maven command to run the tests
* The script command:
* ```
  mvn clean compile test -DsuiteXmlFile=suites/iosSmokeTests.xml 
  ```
* To add additional configuration parameters, use prefix '-D' to each property value
  * eg.-Dandroid.mobile="test\_android\_emulator"
  * note: There should be no space in setting the key value combination
* Inline script:
* ```
  mvn clean compile test -DsuiteXmlFile=suites/iosSmokeTests.xml -Dios.capabilties.platformVersion=10.0 -Dios.mobile="iPhone 6" -Dappium.useExternalAppiumServer=true  -Drecorder.enableRecording=true 
  ```

![](<../../../.gitbook/assets/image (68).png>)

### Publish the results

* Add publish test results task
* Set Test result files:&#x20;
* ```
  **/junitreports/TEST-*.xml
  ```
* Set: Fail if there are test failures

![](<../../../.gitbook/assets/image (69).png>)
