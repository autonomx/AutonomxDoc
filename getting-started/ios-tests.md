# iOS Tests

## Run Setup

* Run autonomx -&gt; setup.sh/.bat
  * 

![](../.gitbook/assets/image%20%2847%29.png)

## Configure iOS app

* resources -&gt; properties -&gt; ios.property
* ```text
  #iOS
  ios.app = "eurika.app"
  ios.appDir = "resources/"
  ios.mobile = "iPhone 7"
  ios.tablet = "iPad Air 2"

  # to add additional capabilities, add capability after the "ios.capabilities." prefix
  ios.capabilties.platform = iOS
  ios.capabilties.platformVersion = 12.1
  ios.capabilties.automationName = XCuiTest
  ios.capabilties.fullReset = false
  ios.capabilties.noReset = true
  ios.capabilties.waitForQuiescence = false
  ios.capabilties.useNewWDA = true
  ios.capabilties.clearSystemFiles = false
  ios.capabilties.shouldUseSingletonTestManager = false
  ios.capabilties.shouldUseTestManagerForVisibilityDetection = false
  ```
* Example project: ⁨autonomx ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨main⁩ ▸ ⁨java⁩ ▸ ⁨modules⁩ ▸ iosApp⁩
  * Setup locators

    iosApp ▸ MainPanel.java
* {% code-tabs %}
  {% code-tabs-item title="Main.java" %}
  ```text
      // Locators
      //--------------------------------------------------------------------------------------------------------    
      public static class elements {
          public static EnhancedBy PLAIN_TABLE_VIEW_STYLE = Element.byAccessibility("Plain Table View Style", "plain table view style");
          public static EnhancedBy LIST_SECTIONS = Element.byAccessibility("List Sections", "list sections");
          public static EnhancedBy EUREKA = Element.byAccessibility("Eureka", "eureka logo");

      }
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}

## Define actions

* iosApp ▸ MainPanel.java
* {% code-tabs %}
  {% code-tabs-item title="Main.java" %}
  ```text
      // Actions
      //--------------------------------------------------------------------------------------------------------    
      public void selectPanel(options panel) {
          switch (panel) {
          case PLAIN_TABLE_VIEW_STYLE:
              Helper.mobile.mobile_scrollToElement(elements.PLAIN_TABLE_VIEW_STYLE);
              Helper.click.clickAndExpect(elements.PLAIN_TABLE_VIEW_STYLE, PlainTableViewPanel.elements.NAME);
              break;
          case LIST_SECTIONS:
              Helper.click.clickAndExpect(elements.LIST_SECTIONS, ListSections.elements.BACK);
              break;
          default:
              throw new IllegalStateException("Unsupported panels " + panel);
          }
      }
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}

## Define objects

* Objects contain test data used for the tests
* In this example, they contain values for the form
* ⁨autonomx⁩ ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨Test ▸ ⁨java⁩ ▸ ⁨module ▸ ⁨ios -&gt; tests
* {% code-tabs %}
  {% code-tabs-item title="PlainTableViewObject.java" %}
  ```text
  @Data
  public class PlainTableViewObject {

  	private static final String NAME = "auto";
  	private static final String USER_NAME = "auto user";
  	private static final String EMAIL_ADDRESS = "test123@email.com";
  	private static final String PASSWORD = "password123";
	
  	public String name = "";
  	public String username = "";
  	public String emailAddress = "";
  	public String password = "";

  }
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}
* ⁨define default values
* {% code-tabs %}
  {% code-tabs-item title="PlainTableViewObject.java" %}
  ```text
  	public PlainTableViewObject withDefaultValues() {
  		PlainTableViewObject view = new PlainTableViewObject();
  		view.name = NAME;
  		view.username = USER_NAME;
  		view.emailAddress = EMAIL_ADDRESS;
  		view.password = PASSWORD;

  		return view;
  	}
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}

## Write Test

* ⁨automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨Test ▸ ⁨java⁩ ▸ ⁨module ▸ ⁨ios -&gt; tests
* setup the android driver
* {% code-tabs %}
  {% code-tabs-item title="RegisterUserTest.java" %}
  ```text
      public void beforeMethod() throws Exception {
          setupWebDriver(app.iosApp.getIosMobileDriver());
      }
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}
* Add Test

```text
  @BeforeMethod
  public void beforeMethod() throws Exception {
     setupWebDriver(app.iosApp.getIosMobileDriver());
  }

 @Test
	public void verifyPlainTableViewForm() {
		PlainTableViewObject form = Data.iosApp.plaintableviewobject().withDefaultValues();

		TestLog.When("I select plain table view object form");
		app.iosApp.main.selectPanel(options.PLAIN_TABLE_VIEW_STYLE);
		
		TestLog.Then("I fill in the form");		
		app.iosApp.plaintableview.fillForm(form);
		
		TestLog.Then("I return to the main panel");
		Helper.verifyElementIsDisplayed(MainPanel.elements.PLAIN_TABLE_VIEW_STYLE);
	}
```

