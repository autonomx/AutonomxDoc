# Test Object

## Purpose

* Test objects are used to handle test data
* Handling test data in an object allows for a simple way of adding, passing and modifying data associated with tests
* Example: user info data. User info can contain the basic username and password, however, this can grow as the project grows. Using data objects, allows additional of info such as "user id" to be added without changing the dynamics of the methods where user info is used

## Define Variables

* Format:
  * Type is the variable object type
    * String, Boolean, Integer ...
    * eg. src/main/java/module/common/data
* {% code-tabs %}
  {% code-tabs-item title="CommonUser.java" %}
  ```text
  	/**
  	 * variables
  	 */
  	public String name = "";
  	public String username = "";
  	public String password = "";
  	public String email = "";
  	public String language = "";
  	public Boolean acceptAds;
  	public Boolean registerVerify;
  	public Boolean confirmed;
  	public Boolean blocked;
  	public String loginId = "";
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}

## Add Predefined Objects

* Predefined objects are optional
* They define a preset of information for the object. eg. admin user
* {% code-tabs %}
  {% code-tabs-item title="CommonUser.java" %}
  ```text
  	/**
  	 * Predefined objects
  	 * 
  	 * @return
  	 */
  	public CommonUser withAdminLogin() {
  		CommonUser user = new CommonUser();
  		user.username = ADMIN_USER;
  		user.password = ADMIN_PASSWORD;
  		return user;
  	}
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}

## Pass In As Parameter

* To use the CommonUser in the login action, we pass it the CommonUser as a parameter to the login method:
* ```text
  	public void login(CommonUser user) {
  		Helper.form.setField(elements.USER_NAME_FIELD, user.username);
  		Helper.form.setField(elements.PASSWORD_FIELD, user.password);
  	}
  ```

* To get a value from CommonUser, we use the following syntax: user.username

## Use In Test

* To use in test, we create the user object and pass it in to the login method
* The syntax is:
* ```text
  Data.<module>.<csv file>().<method>
  ```
* ```text
  CommonUser user = Data.common.commonuser().withAdminLogin();
  app.webApp.login.login(user);
  ```

## Modify Values

* To modify the values in the CommonUser object, use the following syntax
* ```text
  Data.common.commonuser().username = "new username"
  Data.common.commonuser().password = "new password"
  ```

## Create Data Object

* To create a data object based on the data object template
* ```text
  		CommonUser user = Data.common.commonuser();
  		user.username = "username";
  		user.password = "password";
  ```
* Here, we are creating a new CommonUser object with username and password values



