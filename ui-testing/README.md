# UI Testing

## UI Testing

* UI tests is compromised of Web and Mobile \( Android, iOS, Win\) tests
* Test are written similarly, using the same structure for all UI platforms \( Web, Mobile \)

## Writing UI Tests

* Writing tests involves setting up 
  * [Properties file](https://docs.autonomx.io/configuration/config-properties/properties/web)
  * [Test Data](https://docs.autonomx.io/ui-testing/test-data) \(optional\)
  * [Test Panel](https://docs.autonomx.io/ui-testing/test-panel)
  * [Test Case](https://docs.autonomx.io/ui-testing/test-case)

### Setup Property File

#### Web:

* Set app url at [Web.property](https://docs.autonomx.io/configuration/config-properties/properties/web) and browser type
* ```text
  webApp="http://demo.autonomx.io/admin/"
  web.browserType = CHROME
  ```

#### Android

* Set app apk file, dir, and simulator, or UDID \(real device\) at [android.property](https://docs.autonomx.io/configuration/config-properties/properties/android)
* ```text
  # Android
  android.app = "selendroid.apk"
  android.appDir = "resources/"
  android.mobile = "Pixel_2_XL_API_25"
  android.tablet = "Pixel_2_XL_API_25"

  # udid for real device
  android.UDID = ""
  ```

#### iOS

* Set app file, directory, mobile name or UDID \(real device\) at [ios.property](https://docs.autonomx.io/configuration/config-properties/properties/ios)
* ```text
  #iOS
  ios.app = "eurika.app"
  ios.appDir = "resources/"
  ios.mobile = "iPhone 7"
  ios.tablet = "iPad Air 2"

  # udid for real device
  ios.UDID = ""
  ```

#### Win

* Set app path at win.property
* ```text
  #win
  win.app = "Microsoft.WindowsCalculator_8wekyb3d8bbwe!App"
  ```

### Set Test Data \( Optional \)

* If test case requires data, such as user information for login, we can add test data using 3 different methods:
  * [Data Provider](https://docs.autonomx.io/ui-testing/test-data/data-provider): For running same test cases with different data sets
  * [Csv Test Data](https://docs.autonomx.io/ui-testing/test-data/csv-test-data): Test data stored in external csv file
    * Advantage:
      * External storage of data sets
      * Easier to create and group
    * Disadvantage: Less flexible than setting data programmatically 
  * [Test Object](https://docs.autonomx.io/ui-testing/test-data/test-object): Test data stored programmatically in class file
    * Advantage: 
      * Flexible to manipulate data as required 
    * Disadvantage: 
      * Data is internal in code

### Set Test Panel

* Using page object model, we specify page info in test panel class
* For each page, panel,  or feature in our application, we can create a panel
* Panel class includes 2 sections:
  * [Locator](https://docs.autonomx.io/ui-testing/test-panel/locators): Specify all page element locators in this section. eg. username field, password field
  * [Action](https://docs.autonomx.io/ui-testing/test-panel/actions): All methods/actions associated with page in this section. eg. login method

### Write Test Case

* Test case class involves:
  *  [Setting up the driver](https://docs.autonomx.io/ui-testing/test-case/test-case-structure)
  *  [Writing test methods](https://docs.autonomx.io/ui-testing/test-case/test-method)

#### Sample Test Class

```text
public class VerifyLoginTest extends TestBase {

		@BeforeMethod
		public void beforeMethod() throws Exception {
			setupWebDriver(app.webApp.getHybridDriver());
		}
	
	  @Test()
		public void verifyAdminUserWithCsvData() {
			
		  User user = Data.webApp.user().admin();
			TestLog.When("I login with user " + user.getUsername());
			app.webApp.login.loginWithCsvData(user);
					
			TestLog.Then("I verify admin logo is displayed");
			Helper.verifyElementIsDisplayed(MainPanel.elements.ADMIN_LOGO);
			
			TestLog.When("I logout");
			app.webApp.main.logout();
	
			TestLog.Then("I should see the login panel");
			Helper.verifyElementIsDisplayed(LoginPanel.elements.LOGIN_SUBMIT);
		}
	}
```

