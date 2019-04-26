# Console Mode Execution

## Command Line Compile

* To compile using command line
  * mvn clean compile

## Run Test Suite

* mvn clean compile test -DsuiteXmlFile=suites/completeTestSuite.xml
* This will compile and run the test suite: completeTestSuite

## Run With Parameters

* We can override any of the parameters in the properties files with appending "-D&lt;property name&gt; to the command
* eg. -DlaunchReportAfterTest=false
* Full command example: 
* mvn clean compile test -DsuiteXmlFile=suites/completeTestSuite.xml -DlaunchReportAfterTest=true





