# Structure

## Purpose

* Test panel follows the page object model, where the page \(panel\) contains the element locators and actions associated with a page.
* It is called Panel, because it's applicable to more than just web pages, including mobile app panels, and sections of pages \(eg. side bar\). Hence, the name Panel is a more comprehensive.

## Structure

* Panel compromises of 3 parts: Constructor, Locator, and Action
* On compile, panel manager is generated using Java annotations
* The panel manager takes care of linking the panels, so they can interact with one another

## Constructor

* The constructor allows for the panels in the same project to interact with another
* Note: ensure the proper panel manager is imported, containing project "module name"
  * eg. moduleManager.module.&lt;module name&gt;.PanelManager
  * This is because the PanelManager class is generated, and has the same name for each module \( project \)
* ```text
  	// ensure the proper panel manager is imported, containing project "module name".
  	//eg. moduleManager.module.<module name>.PanelManager
  	PanelManager manager;
  	public LoginPanel(PanelManager manager) {
  		this.manager = manager;
  	}
  ```
* We can call methods from another panel with the following command
* ```text
  manager.main.logout();
  ```
* main is the panel class name and logout is the function

