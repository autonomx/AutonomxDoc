# Constructor

## 

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

