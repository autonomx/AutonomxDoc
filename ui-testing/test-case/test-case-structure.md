# Setting Up Driver

## Driver Setup

* Before starting the test, we need to setup the web driver
* {% code title="Verify_Login_Test.java" %}
  ```
  	@BeforeMethod
  	public void beforeMethod() throws Exception {
  		setupWebDriver(app.webApp.getWebDriver());
  	}
  ```
  {% endcode %}
* In this example, we setup a web driver for the webApp module

## Syntax

* We call setupWebDriver function and pass in the driver type as a parameter
* We specify the module we want and the driver type associated with it
* app.\<module>.\<driver type>
* The module name is the name of module folder
* Each module has access to all the driver types

## Driver types

* List of driver types
  * web driver: getWebDriver()
  * web driver: getWebDriver(String url)
  * ios tablet: getIosTabletDriver()
  * ios mobile: getIosMobileDriver()
  * android tablet: getAndroidTabletDriver()
  * android mobile: getAndroidMobileTablet()
  * windows app: getWinAppDriver()
  * api driver: getApiDriver()
  * generic driver: getGenericDriver()
* Api or generic drivers are automatically created if no driver is specified
* For api tests, driver does not need to be created
