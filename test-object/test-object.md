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
* ```text
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

## Add Predefined Objects

* Predefined objects are optional
* They define a preset of information for the object. eg. admin user
* ```text
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

## Full Class Structure

```text
package module.common.data;


import core.helpers.Helper;
import core.support.annotation.Data;

@Data
public class CommonUser {

	private static final String ADMIN_USER = "autoAdmin1";
	private static final String ADMIN_PASSWORD = "autoPass1";
	private static final String USER_PREFIX = "zzz_";

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
	
	public CommonUser withDefaultUser() {
		String rand = Helper.generateRandomString(5);
		CommonUser user = new CommonUser();
		user.name = USER_PREFIX + "auto" + rand;
		user.username = USER_PREFIX + "autoUser" + rand;
		user.email = "autoUser" + rand + "@email.com";
		user.password = USER_PREFIX + "autoPass" + rand;
		user.language = "Java";
		user.acceptAds = true;
		user.confirmed = true;
		user.blocked = false;
		
		return user;
	}
	
	public CommonUser withEdittUser() {
		String rand = Helper.generateRandomString(5);
		CommonUser user = new CommonUser();
		user.username = USER_PREFIX + "editUser" + rand;
		user.password = USER_PREFIX + "editPass" + rand;
		user.email = "editUser" + rand + "@email.com";
		user.confirmed = true;
		user.blocked = false;
		
		return user;
	}
}
```

