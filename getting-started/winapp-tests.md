# WinApp Tests

## Prerequisite

* [Install Java JDK and Maven](https://docs.autonomx.io/prerequisites)

## Run Setup

* Run autonomx -> setup.sh/.bat
  *

![](<../.gitbook/assets/image (73).png>)



## Configure WebApp app

* resources -> properties -> win.property
* ```
  #win
  win.app = "Microsoft.WindowsCalculator_8wekyb3d8bbwe!App"
  ```
*
  * Example project: ⁨autonomx ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨main⁩ ▸ ⁨java⁩ ▸ ⁨modules⁩ ▸ windowsApp⁩
  *   Setup locators

      windowsApp ▸ CalculatorPanel.java
* {% code title="calculatePanel.java" %}
  ```
      // Locators
      //--------------------------------------------------------------------------------------------------------    
      public static class elements {
          public static EnhancedBy ONE = Element.byName("One", "one button");
          public static EnhancedBy TWO = Element.byName("Two", "two button");
          public static EnhancedBy PLUS = Element.byName("Plus", "plus button");
          public static EnhancedBy EQUALS = Element.byName("Equals", "equal button");
          public static EnhancedBy RESULTS = Element.byAccessibility("CalculatorResults", "calculator results");
      }
  ```
  {% endcode %}

## Define actions

* windowsApp ▸ CalculatorPanel.java
* {% code title="CalculatorPanel.java" %}
  ```
      // Actions
      //--------------------------------------------------------------------------------------------------------    
      /**
       * 
       */
      public void calculate() {
          Helper.click.clickAndExpect(elements.ONE, elements.TWO);
          Helper.click.clickAndExpect(elements.PLUS, elements.TWO);
          Helper.click.clickAndExpect(elements.TWO, elements.EQUALS);
          Helper.click.clickAndExpect(elements.EQUALS, elements.RESULTS);
          verifyResults("3");
      }

      protected void verifyResults(String val)
      {
          // trim extra text and whitespace off of the display value

         String result =  Helper.form.getTextValue(elements.RESULTS).replace("Display is", "").trim();
         Helper.assertEquals(val, result);
      }
  ```
  {% endcode %}

## Write Test

* ⁨automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨test ▸ ⁨java⁩ ▸ ⁨module ▸ ⁨win -> tests
* setup the windows driver
* {% code title="VerifyCalculatorTest.java" %}
  ```
      @BeforeMethod
      public void beforeMethod() throws Exception {
          setupWebDriver(app.windowsApp.getWinAppDriver());
      }
  ```
  {% endcode %}
* Add Test
*   \`\`\`text public class VerifyCalculatorTest extends TestBase {

    ```
    @BeforeMethod
    public void beforeMethod() throws Exception {
        setupWebDriver(app.windowsApp.getWinAppDriver());
    }
    ```

```
  @Test(enabled=true) 
  public void validateCalculator() {

      TestLog.When("I calculate 2 numbers");
      app.windowsApp.calculate.calculate();
  }
```
