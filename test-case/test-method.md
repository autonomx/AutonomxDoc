# Test Method

## Structure

* Test methods are compromised of test steps
* Test steps are compromised of
  * Step comment
  * Data object
  * Panel action
  * {% code-tabs %}
    {% code-tabs-item title="Verify\_Login\_Test.java" %}
    ```text
    		TestLog.When("I login with admin user");
    		UserObject user = UserObject.user().withAdminLogin();
    		app.webApp.login.login(user);
    ```
    {% endcode-tabs-item %}
    {% endcode-tabs %}

## Step Comments

* {% code-tabs %}
  {% code-tabs-item title="Verify\_Login\_Test.java" %}
  ```text
  TestLog.When("I login with admin user");
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}
* Comments follow the Gherkins natural language model 
* [https://www.guru99.com/gherkin-test-cucumber.html](https://www.guru99.com/gherkin-test-cucumber.html)
* These comments are displayed in the extent test report 
* Options are: Given, When, And, Then, But, Background

## Data Objects

* Data objects describe the data we want to use in the actions
* {% code-tabs %}
  {% code-tabs-item title="Verify\_Login\_Test.java" %}
  ```text
  UserObject user = UserObject.user().withAdminLogin();
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}
* Refer to 

