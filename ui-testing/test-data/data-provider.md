# Data Provider

## Purpose

* The purpose of data provider is to allow rerunning of the same test with different data sets
* This is useful for validating forms with different data sets

## Data Setup

* We first setup the data in a csv file under the "data" folder
* The first column is @id which identifies the data and the rest are data values

![UserInvalid.csv](../../.gitbook/assets/image%20%28113%29.png)

## Implementation

* We generate the data object based on the csv file
* To Implement in the test, we first create a test method with data provider annotation

{% code title="VerifyLoginTest.java" %}
```text
	/**
	 * uses data from UserInvalid.csv at webApp.data
	 * reruns the test per row of csv file
	 * @param username
	 * @param password
	 */
	@Test(dataProvider = "DataRunner", dataProviderClass = UserInvalid.class)
	public void invalidUserLogin(String username, String password) {
		TestLog.ConsoleLog("username "  + username);
		TestLog.ConsoleLog("password "  + password);

		User user = Data.webApp.user().withUsername(username).withPassword(password);
		TestLog.When("I login with invalid user");
		app.webApp.login.loginError(user);
	}
```
{% endcode %}

* We set the dataProvider name to "DataRunner". This is used for all dataProviders.
* The dataProviderClass is set to the csv file name. This refers to the generated class for the csv file
* We pass in the data column as parameters
* We then create a user object based on the user.csv template to pass into the loginError function
* ```text
  User user = Data.webApp.user().withUsername(username).withPassword(password);
  ```



