# Additional Helpers

## Additional Helpers

* We try to cover most of the utility functions in the Helper classes, however, if additional helper methods are required, they can be added in the AdditionalHelper package
* Additional helpers can be added to **src/main/java/AdditionalHelper** package

### Example 1

* Example:
  * ```text
    /**
    	 * hover element using action
    	 * WebElement value: targetElement.get(0)
    	 * @param by
    	 */
    	public static void hoverBySample(EnhancedBy by) {
    		Actions actions = new Actions(AbstractDriver.getWebDriver());
    		EnhancedWebElement targetElement = findElements(by);
		
    		WebElement webDriver = targetElement.get(0);
    		actions.moveToElement(webDriver).build().perform();
		
    		Helper.waitForSeconds(0.5);
    	}
    ```
* We pass in Element through EnhancedBy parameter
* We can get WebElement value by:
* ```text
  EnhancedWebElement targetElement = findElements(by);
  WebElement webElement = targetElement.get(0); //0 is index
  ```

### Example 2

* In this example we will use EnhancedWebElement functionality in the Helper method
* ```text
  	/**
  	 * click using enhancedWebElement
  	 * @param by
  	 * @param index
  	 */
  	public static void clickSample(EnhancedBy by, int index) {
  		EnhancedWebElement element = findElements(by);
  		element.click(index);
  	}
  ```
* Here, element.click\(index\) is using our enhanced web element functionality. We recommend using this methodology as opposed to:
* ```text
  EnhancedWebElement element = findElements(by);
  // not recommended
  targetElement.get(0).click()
  ```
* This is because the EnhancedWebElement adds additional checks for: error handling, retries, optimization, and cross platform compatibility 

## Usage

* To Use these helpers, we call them in our Panel class or Test classes as follows:

```text
HelperExt.hoverBySample(elements.ICON_BUTTON)
```

