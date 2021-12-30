# Test Method

## Structure

* Test methods are compromised of test steps
* Test steps are compromised of
  * Step comment
  * Data object
  * Panel action
  * {% code title="VerifyLoginTest.java" %}
    ```
    		TestLog.When("I login with admin user");
    		UserObject user = UserObject.user().withAdminLogin();
    		app.webApp.login.login(user);
    ```
    {% endcode %}

## Step Comments

* ```
  TestLog.When("I login with admin user");
  ```
* Comments follow the Gherkins natural language model&#x20;
* [https://www.guru99.com/gherkin-test-cucumber.html](https://www.guru99.com/gherkin-test-cucumber.html)
* These comments are displayed in the extent test report&#x20;
* Options are: Given, When, And, Then, But, Background

## Data Objects

* Data objects describe the data we want to use in the actions
* {% code title="VerifyLoginTest.java" %}
  ```
  UserObject user = UserObject.user().withAdminLogin();
  ```
  {% endcode %}
* Refer to [Test Object](https://ehsan-matean.gitbook.io/automationcore/\~/edit/drafts/-L\_G98XxUqlCKVCkJFH2/test-object/test-object) section for more info

## Panel Action

* Actions refer to methods described in Panel classes&#x20;
* ```
  app.webApp.login.login(user);
  ```
* Syntax: app.\<module>.\<panel>.\<action>
* We can call any of the modules and actions in our test environment
* This allows for cross platform and cross application testing
* eg. testing android and web together in one test method

## Sample Test Class

```
public class VerifyLoginTest extends TestBase {

		@BeforeMethod
		public void beforeMethod() throws Exception {
			setupWebDriver(app.webApp.getHybridDriver());
		}
	
	  @Test()
		public void verifyAdminUserWithCsvData() {
			
		  User user = Data.webApp.user().admin();
			TestLog.When("I login with user " + user.getUsername());
			app.webApp.login.loginWithCsvData(user);
					
			TestLog.Then("I verify admin logo is displayed");
			Helper.verifyElementIsDisplayed(MainPanel.elements.ADMIN_LOGO);
			
			TestLog.When("I logout");
			app.webApp.main.logout();
	
			TestLog.Then("I should see the login panel");
			Helper.verifyElementIsDisplayed(LoginPanel.elements.LOGIN_SUBMIT);
		}
	}
```

