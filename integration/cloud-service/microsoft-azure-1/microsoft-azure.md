# Web/Service Tests

## Purpose

* We can execute our tests through Microsoft Azure CI
* In this example, we will setup jobs for web, android and iOS tests. 
* For mobile tests, we will use simulators on hosted vms
* 
![Autonomx pipeline setup](../../../.gitbook/assets/image%20%28106%29.png)

## Web Tests

### Set Agent

* Set Agent as Hosted VS2017
* If using a locally hosted vm, select appropriate agent

![](../../../.gitbook/assets/image%20%289%29.png)

### Run Tests

* Add Bash task with maven command to run the tests
* The script command:
* ```text
  mvn clean compile test -DsuiteXmlFile=suites/webSmokeTests.xml
  ```
* To add additional configuration parameters, use prefix '-D' to each property value
  * eg.-Dweb.maximizeBrowser=true 
  * note: There should be no space in setting the key value combination

![](../../../.gitbook/assets/image%20%2848%29.png)

### Publish the results

* Add publish test results task
* Set Test result files: 
* ```text
  **/junitreports/TEST-*.xml
  ```
* Set: Fail if there are test failures

![](../../../.gitbook/assets/image%20%2867%29.png)

