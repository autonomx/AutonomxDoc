# Web/Service Tests

## Purpose

* We can execute our tests through Microsoft Azure CI
* In this example, we will setup jobs for web, android and iOS tests.&#x20;
* For mobile tests, we will use simulators on hosted vms
*

![Autonomx pipeline setup](<../../../.gitbook/assets/image (49).png>)

## Web Tests

### Set Agent

* Set Agent as Hosted VS2017
* If using a locally hosted vm, select appropriate agent

![](<../../../.gitbook/assets/image (50).png>)

### Run Tests

* Add Bash task with maven command to run the tests
* The script command:
* ```
  mvn clean compile test -DsuiteXmlFile=suites/webSmokeTests.xml
  ```
* To add additional configuration parameters, use prefix '-D' to each property value
  * eg.-Dweb.maximizeBrowser=true&#x20;
  * note: There should be no space in setting the key value combination

![](<../../../.gitbook/assets/image (70).png>)

### Publish the results

* Add publish test results task
* Set Test result files:&#x20;
* ```
  **/junitreports/TEST-*.xml
  ```
* Set: Fail if there are test failures

![](<../../../.gitbook/assets/image (52).png>)
