# Create Test Suite

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





