# Quick Start

## Quick Test Run Using Generated Scripts

* Clone the repository [Autonomx](https://github.com/autonomx/Autonomx)
* Navigate to runner//. eg. runner/mac/restTests.sh
* The run scripts are generated from testng testSuites by runner/generateScripts.sh. Each script is associated with a suite of tests

## Manual Run

* To compile using command line:
  * mvn clean compile test -DsuiteXmlFile=suites/servicesTests.xml
  * This will compile and run the test suite: serviceTests.xml



