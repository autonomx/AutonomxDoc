# Additional Helpers

## Additional Helpers

* We try to cover most of the utility functions in the Helper classes, however, if additional helper methods are required, they can be added in the AdditionalHelper package
* Additional helpers can be added to **src/main/java/AdditionalHelper** package
* example:
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
  WebElement webDriver = targetElement.get(0); //0 is index
  ```

To Use these helpers, we call them in our Panel class or Test classes as follows:

```text
HelperExt.hoverBySample(elements.ICON_BUTTON)
```

