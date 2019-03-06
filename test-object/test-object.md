# Test Object

## Purpose

* Test objects are used to handle test data
* Handling test data in an object allows for a simple way of adding, passing and modifying data associated with tests
* Example: user info data. User info can contain the basic username and password, however, this can grow as the project grows. Using data objects, allows additional of info such as "user id" to be added without changing the dynamics of the methods where user info is used

## Freebuilder

* [https://github.com/inferred/FreeBuilder](https://github.com/inferred/FreeBuilder)
* Freebuilder is an automatic code generator for creating setters and getters in objects
* With Freebuilder we can define the variables for the objects and the rest of the setters and getters will be generated

## Define Variables

* Format:
  * public abstract Optional&lt;type&gt; variable\(\);
  * Type is the variable object type
    * String, Boolean, Integer ...
* ```text
  @FreeBuilder
  public abstract class UserObject {

  	/**
  	 * variables
  	 */
  	public abstract Optional<String> name();

  	public abstract Optional<String> username();

  	public abstract Optional<String> password();

  	public abstract Optional<String> email();
	
  	public abstract Optional<String> language();
	
  	public abstract Builder toBuilder();
  ```

## Set Builder Class

* Builder class will need to extend the generated class 
* Generated class name has the format: &lt;class name&gt;\_Builder. eg. User\_Builder
* ```text
  	public static class Builder extends User_Builder {
  	}
  ```
* Define builder
* ```text
  public static UserObject user() {
      return new UserObject.Builder().buildPartial();
  }
  ```

## Add Predefined Objects

* Predefined objects are optional
* They define a preset of information for the object. eg. admin user
* ```text
  	public UserObject withAdminLogin() {
  		return new UserObject.Builder()
  				.username("admin1")
  				.password("password1")
  				.buildPartial();
  	}
  ```

## Pass In As Parameter

* To use the UserObject in the login action, we pass it the UserObject as a parameter to the login method:
* ```text
  	public void login(UserObject user) {
  		Helper.form.setField(elements.USER_NAME_FIELD, user.username().get());
  		Helper.form.setField(elements.PASSWORD_FIELD, user.password().get());
  	}
  ```

* To get a value from UserObject, we use the following syntax: user.username\(\).get\(\)
* If the value is not set, null will be returned

## Modify Values

* To modify the values in the UserObject, use the following syntax
* ```text
  user = user.toBuilder().username("usernameUpdated").email("emailUpdated").buildPartial();

  ```



## Use In Test

* To use in test, we create the user object and pass it in to the login method
* ```text
  UserObject user = UserObject.user().withAdminLogin();
  app.webApp.login.login(user);
  ```





