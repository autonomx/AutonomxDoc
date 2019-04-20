# Console Mode Execution

## Command Line Compile

* To compile using command line
  * mvn clean compiler:compile compiler:testCompile

## Run Test Suite

* mvn clean compiler:compile compiler:testCompile surefire:test -Dsurefire.suiteXmlFiles=suites/completeTestSuite.xml
* This will compile and run the test suite: completeTestSuite





