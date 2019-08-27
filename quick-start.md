# Quick Start

## Quick Test Run Using Generated Scripts

* Clone the repository [Autonomx](https://github.com/autonomx/Autonomx)
* Navigate to runner//. eg. runner/mac/restTests.sh
* The run scripts are generated from testng testSuites by runner/generateScripts.sh. Each script is associated with a suite of tests

![](.gitbook/assets/image%20%2840%29.png)

## Manual Run

* To compile using command line:
  * mvn clean compile test -DsuiteXmlFile=suites/servicesTests.xml
  * This will compile and run the test suite: serviceTests.xml

## IDE Setup

* For Intellij IDE, navigate to [Intellij Setup Page](https://docs.autonomx.io/getting-started/ide/intellij)
* For Eclipse IDE, navigate to [Eclipse Setup Page](https://docs.autonomx.io/getting-started/ide/eclipse)



