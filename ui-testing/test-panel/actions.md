# Actions

## Purpose

* The actions are method associated with actions that can be taken on the panel
* eg. login method for the login panel

## Structure

* Actions can use data objects as parameters \( see Test Data section \)
* Within the actions we want to reduce the use of written logic and use the Helper functions to interact with the application
* Hence, an Action is therefore a method that groups Helper functions to interact with the application
* This ensures consistent test logic structure, and more maintainable code base

## Example

* In this example, the login Action, takes the user object as a parameter and calls the set field helpers for setting the username and password fields
* Then calls the formSubmit Helper to submit the form 
* ```text
  	/**
  	 * enter login info and click login button
  	 * 
  	 * @param user
  	 */
  	public void login(UserObject user) {
  		Helper.form.setField(elements.USER_NAME_FIELD, user.username().get());
  		Helper.form.setField(elements.PASSWORD_FIELD, user.password().get());
  		Helper.form.formSubmit(elements.LOGIN_SUBMIT, MainPanel.elements.ADMIN_LOGO, elements.LOADING_INDICATOR);
  	}
  ```

## Interacting With Actions In Other Panels

* Actions from other panels can be access through the manager
* ```text
  manager.main.logout();
  ```
* Here, we are accessing logout function from the main panel





