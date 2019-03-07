# Test Suite

## Purpose

* Test suites allow for running a collection of tests
* The tests are defined in XML format
* We can use test suites to create test collection:
  * Sanity tests: a basic test to quickly evaluate whether the application is functional
  * Smoke tests: is performed after a software build to ascertain that the critical functionalities of the program are working fine. It is executed "before" any detailed functional or regression tests are executed on the software build
  * Regression tests: testing all existing features. Regression testing is a type of software testing which verifies that software which was previously developed and tested still performs correctly after it was changed or interfaced with other software

## Setup

* ```text
  <suite name="Web Test">

    <test name="web smoke tests">
  
      <classes>
         <class name="module.web.Tests.Verify_Login_Test"/>
         <class name="module.web.Tests.Verify_userCreate_test"/>
      </classes>
    </test>

  </suite>
  ```

* In this example, we set the suite name, test name, and included classes 
* The class name is the package.classname

## Include And Exclude Tests

* We can included and exclude tests from classes
* Include
* ```text
  <suite name="Web Test">
    <test name="web smoke tests"> 
      <classes>
         <class name="module.web.Tests.Verify_Login_Test">
  		       <methods>
  		        <include name="testMethod" />
  		      </methods>
  	     </class>   
         <class name="module.web.Tests.Verify_userCreate_test"/>
      </classes>
    </test>
  </suite>
  ```

* Exclude
* ```text
  <suite name="Web Test">
    <test name="web smoke tests"> 
      <classes>
         <class name="module.web.Tests.Verify_Login_Test">
  		       <methods>
  		        <exclude name="testMethod" />
  		      </methods>
  	     </class>   
         <class name="module.web.Tests.Verify_userCreate_test"/>
      </classes>
    </test>
  </suite>
  ```

* Any combination of include and excludes can work together to get the desired outcome





