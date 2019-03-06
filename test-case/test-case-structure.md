# Setting Up Driver

## Driver Setup

* Before starting the test, we need to setup the web driver
* {% code-tabs %}
  {% code-tabs-item title="Verify\_Login\_Test.java" %}
  ```text
  	@BeforeMethod
  	public void beforeMethod() throws Exception {
  		setupWebDriver(app.webApp.getWebDriver());
  	}
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}
* In this example, we setup a web driver for the webApp module

## Syntax

* We call setupWebDriver function and pass in the driver type as a parameter
* We specify the module we want and the driver type associated with it
* app.&lt;module&gt;.&lt;driver type&gt;
* The module name is the name of module folder
* Each module has access to all the driver types

## Driver types

* List of driver types
  * web driver: getWebDriver\(\)
  * web driver: getWebDriver\(String url\)
  * ios tablet: getIosTabletDriver\(\)
  * ios mobile: getIosMobileDriver\(\)
  * android tablet: getAndroidTabletDriver\(\)
  * android mobile: getAndroidMobileTablet\(\)
  * windows app: getWinAppDriver\(\)
  * api driver: getApiDriver\(\)
  * generic driver: getGenericDriver\(\)

