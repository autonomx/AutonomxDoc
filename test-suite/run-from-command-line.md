# Run From Command Line

## Command Line

* Test suites can run from command line using maven 
* ```text
  mvn clean compiler:compile compiler:testCompile surefire:test -Dsurefire.suiteXmlFiles=suites/webSmokeTests.xml
  ```
* In this example, we are calling the webSmokeTests.xml test suite from the suites folder 
* The location is relative to the root folder of the project \( where pom file is located \)
* We first compile the project, then run the test suite

## Parameters

* We can override any of the parameters in the [Api configuration](https://ehsan-matean.gitbook.io/automationcore/~/edit/drafts/-L_QvuoFoSynl6igDOcX/configuration/apiconfig) and 

