# iOS Tests

## Prerequisite

* [Install Java JDK and Maven](https://docs.autonomx.io/prerequisites)
* [Setup iOS Environment](https://docs.autonomx.io/prerequisites/ios)

## Run Setup

* Run autonomx -> setup.sh/.bat
  *

![](<../.gitbook/assets/image (73).png>)

## IDE Setup

* For Intellij IDE, navigate to [Intellij Setup Page](https://docs.autonomx.io/getting-started/ide/intellij)
* For Eclipse IDE, navigate to [Eclipse Setup Page](https://docs.autonomx.io/getting-started/ide/eclipse)

## Configure iOS app

* resources -> properties -> ios.property
* ```
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
  *   Setup locators

      iosApp ▸ MainPanel.java
* {% code title="Main.java" %}
  ```
      // Locators
      //--------------------------------------------------------------------------------------------------------    
      public static class elements {
          public static EnhancedBy PLAIN_TABLE_VIEW_STYLE = Element.byAccessibility("Plain Table View Style", "plain table view style");
          public static EnhancedBy LIST_SECTIONS = Element.byAccessibility("List Sections", "list sections");
          public static EnhancedBy EUREKA = Element.byAccessibility("Eureka", "eureka logo");

      }
  ```
  {% endcode %}

## Define actions

* iosApp ▸ MainPanel.java
* {% code title="Main.java" %}
  ```
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
  {% endcode %}

## Define objects

* Objects contain test data used for the tests
* In this example, they contain values for the form
* ⁨autonomx⁩ ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨Test ▸ ⁨java⁩ ▸ ⁨module ▸ ⁨ios -> tests
* {% code title="PlainTableViewObject.java" %}
  ```
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
  {% endcode %}
* ⁨define default values
* {% code title="PlainTableViewObject.java" %}
  ```
  	public PlainTableViewObject withDefaultValues() {
  		PlainTableViewObject view = new PlainTableViewObject();
  		view.name = NAME;
  		view.username = USER_NAME;
  		view.emailAddress = EMAIL_ADDRESS;
  		view.password = PASSWORD;

  		return view;
  	}
  ```
  {% endcode %}

## Write Test

* ⁨automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨Test ▸ ⁨java⁩ ▸ ⁨module ▸ ⁨ios -> tests
* setup the android driver
* {% code title="RegisterUserTest.java" %}
  ```
      public void beforeMethod() throws Exception {
          setupWebDriver(app.iosApp.getIosMobileDriver());
      }
  ```
  {% endcode %}
* Add Test

```
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
