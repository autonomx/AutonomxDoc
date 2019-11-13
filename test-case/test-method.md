# Test Method

## Structure

* Test methods are compromised of test steps
* Test steps are compromised of
  * Step comment
  * Data object
  * Panel action
  * ```text
    		TestLog.When("I login with admin user");
    		UserObject user = UserObject.user().withAdminLogin();
    		app.webApp.login.login(user);
    ```

## Step Comments

* ```text
  TestLog.When("I login with admin user");
  ```
* Comments follow the Gherkins natural language model 
* [https://www.guru99.com/gherkin-test-cucumber.html](https://www.guru99.com/gherkin-test-cucumber.html)
* These comments are displayed in the extent test report 
* Options are: Given, When, And, Then, But, Background

## Data Objects

* Data objects describe the data we want to use in the actions
* ```text
  UserObject user = UserObject.user().withAdminLogin();
  ```
* Refer to [Test Object](https://ehsan-matean.gitbook.io/automationcore/~/edit/drafts/-L_G98XxUqlCKVCkJFH2/test-object/test-object) section for more info

## Panel Action

* Actions refer to methods described in Panel classes 
* ```text
  app.webApp.login.login(user);
  ```
* Syntax: app.&lt;module&gt;.&lt;panel&gt;.&lt;action&gt;
* We can call any of the modules and actions in our test environment
* This allows for cross platform and cross application testing
* eg. testing android and web together in one test method





