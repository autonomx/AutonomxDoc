# Localization Testing

## Purpose

* We can test our application in different language 

## Implementation

### Create CSV File

* At automation -&gt; resources -&gt; localization directory, create a csv file to include the translations
  * 

![](../.gitbook/assets/image%20%28134%29.png)

* We set English as the baseline and set the different languages in corresponding columns
* We can configure the location of the localization file at automation -&gt; resources -&gt; properties -&gt; global.property
  * localize.path = resources/localization/
* We can set the default localization file at the same location
  * localize.file = localization.csv

### Create Localization Test

* We can overwrite the default localization directory in code: 
  * ```text
    		ConfigVariable.localizeFile().setValue("local.csv");
    ```
* We then set the language under test
  * ```text
    // French corresponds to the column name in csv of target language
    Helper.localizationSetupCsv("French");
    ```

#### Launch Localized Browser

* We set browser to be localized in our test language
  * ```text
    ConfigVariable.setValue("chrome.pref.intl.accept_languages" , "fr");
    setupWebDriver(app.framework.getWebDriver());
    ```
  * In this case, we're using **Chrome** browser, and setting the language using chrome preferences

#### Write Test

* Our test page:

![](../.gitbook/assets/image%20%28132%29.png)

* We want to validate the username and password labels are localized
* We define the elements for the labels in the panel class:
  * ```text
    public static EnhancedBy PASSWORD_LABEL = Element.byCss("[for='password']", "username label");
    public static EnhancedBy USERNAME_LABEL = Element.byCss("[for='identifier']", "password label");
    ```
* We, then get the text value of these elements and compare them to the translated values in our csv
* ```text
      String usernameLabel = Helper.getTextValue(LoginPanel.USERNAME_LABEL);
  		String password = Helper.getTextValue(LoginPanel.PASSWORD_LABEL);
		
  		// optional validation
  		Helper.assertEquals("Nom d'utilisateur", usernameLabel);
  		Helper.assertEquals("Mot de Passe", password);
		
  		// validating against csv translation
  		Helper.assertEquals(usernameLabel, Helper.localize("Username"));
  		Helper.assertEquals(password, Helper.localize("Password"));
  ```

#### Complete Test

```text
@BeforeMethod
	public void beforeMethod() throws Exception {
		ConfigVariable.localizeFile().setValue("local.csv");
		Helper.localizationSetupCsv("French");
		ConfigVariable.setValue("chrome.pref.intl.accept_languages" , "fr");
		
		setupWebDriver(app.framework.getWebDriver());
	}
	
	@Test(description = "test localization and validation feature")
	public void verifyCrossProjectManager() {
		
		TestLog.Then("I verify username and password localized labels: Username = Nom d'utilisateur");
		Helper.verifyTextDisplayed("utilisateur");
		Helper.verifyTextDisplayed("Mot de Passe");
		
		String usernameLabel = Helper.getTextValue(LoginPanel.USERNAME_LABEL);
		String password = Helper.getTextValue(LoginPanel.PASSWORD_LABEL);
		
		Helper.assertEquals("Nom d'utilisateur", usernameLabel);
		Helper.assertEquals("Mot de Passe", password);
		
		Helper.assertEquals(usernameLabel, Helper.localize("Username"));
		Helper.assertEquals(password, Helper.localize("Password"));
	}
```

