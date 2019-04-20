# Quick Start



* Clone the repository [Autonomx](https://github.com/autonomx/Autonomx)
* Navigate to runner//. eg. runner/mac/restTests.sh
* The run scripts are generated from testng testSuites by runner/generateScripts.sh. Each script is associated with a suite of tests

## Manual Run

* To compile using command line:
  * mvn clean compiler:compile compiler:testCompile surefire:test -Dsurefire.suiteXmlFiles=suites/completeTestSuite.xml
  * This will compile and run the test suite: completeTestSuite.xml



