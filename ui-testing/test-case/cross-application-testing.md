# Cross Application Testing



## Cross Application Testing

* We can test multiple apps together in one test method
* We will need to create the appropriate drivers for each app and run the test actions associated with them

### Setup Driver

* ```
  WebDriver webDriver = setupWebDriver(app.webApp.getWebDriver());
  ```
* Assign the driver to a WebDriver object, so we can switch back and forth between the different apps
* The web browser will now launch

### Write Test Steps

* Write required test steps for the app
*   ```
    TestLog.When("I login with admin user");
    		UserObject user = UserObject.user().withAdminLogin();
    		app.webApp.login.login(user);

    		TestLog.Then("I verify admin logo is displayed");
    		Helper.verifyElementIsDisplayed(MainPanel.elements.ADMIN_LOGO);
    ```



### Switch To Android App

* Switch to driver of a different app
* ```
  // switch to android app
  WebDriver androidDriver = setupWebDriver(app.androidApp.getAndroidMobileDriver());
  ```
* We switched to an android driver from the "androidApp" module
* The android simulator will now launch

### Write Test Steps For Android App

* ```
  app.androidApp.main.selectRegisterPanel();
  ```
* We are selecting the registration panel in the android app

### Switch Back To The webApp

* ```
  TestLog.When("I logout");
  app.webApp.main.logout();

  TestLog.Then("I should see the login panel");
  Helper.verifyElementIsDisplayed(LoginPanel.elements.LOGIN_SUBMIT);
  ```
* The driver will switch to the web application and continue with the test

### All Togather

* ```
  	@Test
  	public void cross_application_test() throws Exception {
  		
  		WebDriver webDriver = setupWebDriver(app.webApp.getWebDriver());
  		
  		TestLog.When("I login with admin user");
  		UserObject user = UserObject.user().withAdminLogin();
  		app.webApp.login.login(user);

  		TestLog.Then("I verify admin logo is displayed");
  		Helper.verifyElementIsDisplayed(MainPanel.elements.ADMIN_LOGO);
  		
  		// switch to android app
  		WebDriver androidDriver = setupWebDriver(app.androidApp.getAndroidMobileDriver());
  		app.androidApp.main.selectRegisterPanel();
  		
  		// Switch to web app		
  		Helper.switchDriver(webDriver);

  		TestLog.When("I logout");
  		app.webApp.main.logout();

  		TestLog.Then("I should see the login panel");
  		Helper.verifyElementIsDisplayed(LoginPanel.elements.LOGIN_SUBMIT);
  	}
  ```
