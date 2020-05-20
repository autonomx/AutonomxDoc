# Cross Module Testing

## Purpose

* We can have an end to end tests across multiple modules within the same project
* eg. creating order in Android and validating in Web test module
* Modules are sub projects in our project
  * eg. Gardening app with have Web, Android and iOS module

## Implementation

* Within any test case in our project, we can call any Panel method or element from other modules
* This allows us to have end to end module testing among different application within the same project
* To call Panel methods from another module:
  * Syntax: app.&lt;module&gt;.&lt;panel&gt;.&lt;method&gt;
  * ```text
    app.webApp.login.loginWithCsvData(user);
    ```

### Example

* In this example, we have an app which consists of both web and android app
* In the web app, we will login to the web app, create an order, and logout
* Then we switch to Android app and verify the order is displayed in the main panel 
* ```text
  		setupWebDriver(app.webApp.getWebDriver());
		
  		TestLog.And("I create an order");
  		String orderId = app.webApp.main.createOrder();
		
  		Testlog.Then("I logout");
  		app.webApp.main.logout();
  		Helper.quitCurrentDriver();
		
		
  		TestLog.When("I switch to android app");
  		setupWebDriver(app.androidApp.getAndroidMobileDriver());
		
  		TestLog.Then("I verify order is displayed");
  		app.androidApp.main.verifyOrderIsDisplayed(orderId);
  ```







