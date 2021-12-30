# Android Tests

## Purpose

* We can execute our tests through Microsoft Azure CI
* In this example, we will setup jobs for web, android and iOS tests.&#x20;
* For mobile tests, we will use simulators on hosted vms

![](<../../../.gitbook/assets/image (53).png>)

## Android Tests

### Set Agent

* Set Agent as Hosted macOS
* If using a locally hosted vm, select appropriate agent

![](<../../../.gitbook/assets/image (54).png>)

### Install Node 10.x

* Add task Node.js tool installer
* Set version to 10.x

![](<../../../.gitbook/assets/image (55).png>)

### Install Appium

* Add bash script task
* Inline script:&#x20;
* ```
  npm install -g appium
  ```

![](<../../../.gitbook/assets/image (56).png>)

### Run Android Simulator

* Add bash script task
* Inline script:
* ```
  #!/usr/bin/env bash

  echo "y" | $ANDROID_HOME/tools/bin/sdkmanager --install 'system-images;android-27;google_apis;x86'

  $ANDROID_HOME/platform-tools/adb devices

  echo "no" | $ANDROID_HOME/tools/bin/avdmanager create avd -n test_android_emulator -k 'system-images;android-27;google_apis;x86' --force

  nohup $ANDROID_HOME/emulator/emulator -avd test_android_emulator -no-snapshot > /dev/null 2>&1 &
  $ANDROID_HOME/platform-tools/adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed | tr -d '\r') ]]; do sleep 1; done; input keyevent 82' 

  echo "Emulator started"
  ```

![](<../../../.gitbook/assets/image (57).png>)

### Run Appium

* Add bash script task
* Inline script:
* ```
  appium --relaxed-security &
  ```

![](<../../../.gitbook/assets/image (58).png>)

### Run Tests

* Add Bash task with maven command to run the tests
* The script command:
* ```
  mvn clean compile test -DsuiteXmlFile=suites/androidSmokeTests.xml 
  ```
* To add additional configuration parameters, use prefix '-D' to each property value
  * eg.-Dandroid.mobile="test\_android\_emulator"
  * note: There should be no space in setting the key value combination
* Inline script:
* ```
  mvn clean compile test -DsuiteXmlFile=suites/androidSmokeTests.xml -Dandroid.mobile="test_android_emulator" -Dappium.useExternalAppiumServer=true -Drecorder.enableRecording=true 
  ```

![](<../../../.gitbook/assets/image (60).png>)

### Publish the results

* Add publish test results task
* Set Test result files:&#x20;
* ```
  **/junitreports/TEST-*.xml
  ```
* Set: Fail if there are test failures

![](<../../../.gitbook/assets/image (61).png>)
