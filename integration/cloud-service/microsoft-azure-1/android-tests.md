# Android Tests

## Purpose

* We can execute our tests through Microsoft Azure CI
* In this example, we will setup jobs for web, android and iOS tests. 
* For mobile tests, we will use simulators on hosted vms

![](../../../.gitbook/assets/image%20%2848%29.png)

## Android Tests

### Set Agent

* Set Agent as Hosted macOS
* If using a locally hosted vm, select appropriate agent

![](../../../.gitbook/assets/image%20%2896%29.png)

### Install Node 10.x

* Add task Node.js tool installer
* Set version to 10.x

![](../../../.gitbook/assets/image%20%2850%29.png)

### Install Appium

* Add bash script task
* Inline script: 
* ```text
  npm install -g appium
  ```

![](../../../.gitbook/assets/image%20%2830%29.png)

### Run Android Simulator

* Add bash script task
* Inline script:
* ```text
  #!/usr/bin/env bash

  echo "y" | $ANDROID_HOME/tools/bin/sdkmanager --install 'system-images;android-27;google_apis;x86'

  $ANDROID_HOME/platform-tools/adb devices

  echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n test_android_emulator -k 'system-images;android-27;google_apis;x86' --force

  nohup $ANDROID_HOME/emulator/emulator -avd test_android_emulator -no-snapshot > /dev/null 2>&1 &
  $ANDROID_HOME/platform-tools/adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed | tr -d '\r') ]]; do sleep 1; done; input keyevent 82' 

  echo "Emulator started"
  ```

![](../../../.gitbook/assets/image%20%2819%29.png)

### Run Appium

* Add bash script task
* Inline script:
* ```text
  appium --relaxed-security &
  ```

![](../../../.gitbook/assets/image%20%284%29.png)

### Run Tests

* Add Bash task with maven command to run the tests
* The script command:
* ```text
  mvn clean compile test -DsuiteXmlFile=suites/androidSmokeTests.xml 
  ```
* To add additional configuration parameters, use prefix '-D' to each property value
  * eg.-Dandroid.mobile="test\_android\_emulator"
  * note: There should be no space in setting the key value combination
* Inline script:
* ```text
  mvn clean compile test -DsuiteXmlFile=suites/androidSmokeTests.xml -Dandroid.mobile="test_android_emulator" -Dappium.useExternalAppiumServer=true -Drecorder.enableRecording=true 
  ```

![](../../../.gitbook/assets/image%20%2866%29.png)

### Publish the results

* Add publish test results task
* Set Test result files: 
* ```text
  **/junitreports/TEST-*.xml
  ```
* Set: Fail if there are test failures

![](../../../.gitbook/assets/image%20%2817%29.png)

