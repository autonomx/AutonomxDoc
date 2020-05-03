---
description: to be added
---

# Test Case

## Structure

* Test cases involve setting up the driver and calling the panel actions in the test method
* The test methods are compromised of test steps forming a test
* The test steps are compromised of:
  * Step comment
  * Definition of the data object
  * Call the panel action

## Sample Test Class

* See sections: 
  * [Setting up driver](https://docs.autonomx.io/ui-testing/test-case/test-case-structure)
  * [Writing test method](https://docs.autonomx.io/ui-testing/test-case/test-method)

```text
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

