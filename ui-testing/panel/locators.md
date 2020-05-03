# Locators

## Locators

* Locators are defined as static variables
* The locator object is defined as the By object of web driver element, rather than the web element itself
* This is cause we want to restrict the usage of UI interaction through the helper functions only, allowing for greater control over the quality of the tests

## Syntax

* Locator objects are of type EnhnacedBy
  * EnhancedBy contains the by value of the locator, with additional info
* To create a locator object
* ```text
  public static EnhancedBy PASSWORD_FIELD = Element.byCss(String locator, String name);
  ```
* locator: the locator value base on the locator type. eg
* ```text
  Element.byCss("#password", "password field")
  ```

## Types

* The types of locators supported are
  * css:  Element.byCss\(String locator, String name\)
  * id: Element.byId\(String locator, String name\)
  * name: Element.byName\(String locator, String name\)
  * xpath: Element.byXpath\(String locator, String name\)
  * class: Element.byClass\(String locator, String name\)
  * accessibility id: byAccessibility\(String locator, String name\)

## Multiple Locators

* Additional locators can be added through chaining to the locator
* The case where it would be necessary to define multiple locators, is when dealing with hybrid apps where the final locator can vary for different builds
* Syntax: 
* ```text
  Element.byCss("[placeholder='John Doe2']", "username field")
         .byCss("[placeholder='John Doe']");
  ```
* The first locator item will be evaluated f
  * ```text
    byCss("[placeholder='John Doe2']"
    ```
* Then, if not found, the second locator will be evaluated 
  * ```text
    .byCss("[placeholder='John Doe']")
    ```

## Dynamic Locators

* Dynamic locators allow for the locator to be dynamically modified based on context
* eg. 
* ```text
  	// dynamic element
  		public static EnhancedBy question(String question) {
  			return Element.byAccessibility(question, question + " field");
  		}
  ```
* In this example, the question can be dynamically set
* We don't need to defined a new locator for each question







## 

