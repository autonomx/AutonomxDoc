# Web Tests

## Download Web Test Latest Release

* Go to [https://github.com/autonomx/Autonomx/releases](https://github.com/autonomx/Autonomx/releases)
* Download [autonomx-web-&lt;version&gt;.zip](https://github.com/autonomx/Autonomx/releases/download/v1.0.4/autonomx-web-1.0.4.zip)
* Or download the Web UI + API testing combination: [autonomx-webWithService-&lt;version&gt;.zip](https://github.com/autonomx/Autonomx/releases/download/v1.0.4/autonomx-webWithService-1.0.4.zip)
* Unpack

## Install JDK

* Download Java JDK from:
  * [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html)
* Install: [https://tutorials.visualstudio.com/Java/hello-world/install-jdk](https://tutorials.visualstudio.com/Java/hello-world/install-jdk)
* Command line, run command: javac -version
* ```text
  jenkins@[~/Documents/Selenium]$ javac -version
  javac 1.8.0_162
  ```

## Run Setup

* Run autonomx -&gt; setup.sh/.bat
  * 

![](../.gitbook/assets/image%20%2863%29.png)

* Wait until the download of the maven dependencies are complete \(~5 mins\)

## Load The Project In IDE or Runner

* Open the project in [Intellij](https://docs.autonomx.io/getting-started/ide/intellij) or [Eclipse](https://docs.autonomx.io/getting-started/ide/eclipse) \( Please follow the instructions properly, as the config files are build in\)
* Or use the [Script Server](https://docs.autonomx.io/script-runner-1/installation) to quickly run the tests

## Run Sample Tests

* Run service test suite at "automation -&gt; suites -&gt; webSmokeTests.xml"
* Test results will be displayed at the end of the run

## Configure Web app

* resources -&gt; properties -&gt; web.property
* More Info [Web Config](https://docs.autonomx.io/configuration/properties/web) and [Global Config](https://docs.autonomx.io/configuration/properties/global-config)
* ```text
  # Web
  #key value. key should match the web app test.module name. eg. test.module name = google, therefore: google="http://google.com"
  webApp="http://104.207.156.47:1337/admin/"
  # Options: CHROME,FIREFOX, INTERNET_EXPLORER, MICROSOFT_EDGE, Opera, PHANTOMJS
  web.browserType = CHROME
  # Options: LATEST or version number. eg. 56.4
  web.driverVersion = LATEST
  web.maximizeBrowser = false
  # Options: REMOTE_WEBDRIVER, LOCAL_WEBDRIVER
  web.webdriverType = LOCAL_WEBDRIVER

  # valid when REMOTE_WEBDRIVER is selected
  web.remote.server_url = localhost
  web.remote.server_port = 4444
  ```
* Note: **webApp is the name of the web module. For more Info:** [**Web Properties**](https://app.gitbook.com/@autonomx/s/autonomx/configuration/properties/web)\*\*\*\*
* Example project: autonomx ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨main⁩ ▸ ⁨java⁩ ▸ ⁨modules⁩ ▸ ⁨webApp⁩
  * Setup locators

    webApp ▸ LoginPanel.java

{% tabs %}
{% tab title="LoginPanel.java" %}
```java
        public static class elements {
            public static EnhancedBy USER_NAME_FIELD = Element.byCss("[placeholder='John Doe']", "username field");
            public static EnhancedBy PASSWORD_FIELD = Element.byCss("#password", "password field");
            public static EnhancedBy LOGIN_SUBMIT = Element.byCss("[type='submit']", "submit button");
            public static EnhancedBy LOGOUT_BUTTON = Element.byCss("[href*='logout']", "logout button");
            public static EnhancedBy MAIN_SITE = Element.byCss(".main-site", "main site button");
            public static EnhancedBy ERROR_MESSAGE = Element.byCss("[class*='InputErrors']", "input errors");

            public static EnhancedBy LOADING_INDICATOR = Element.byCss("[class*='Loading']", "loading indicator");

        }
```
{% endtab %}
{% endtabs %}



## Define actions

* webApp ▸ LoginPanel.java

  ```java
       /**
        * enter login info and click login button
        * 
        * @param user
        */
       public void login(User user) {
           setLoginFields(user);
           Helper.form.formSubmit(elements.LOGIN_SUBMIT, MainPanel.elements.ADMIN_LOGO, elements.LOADING_INDICATOR);

       }

       public void loginError(User user) {
           setLoginFields(user);
           Helper.form.formSubmit(elements.LOGIN_SUBMIT, elements.ERROR_MESSAGE);
       }

       public void relogin(User user) {
           manager.main.logout();
           login(user);
       }

       public void setLoginFields(User user) {
           Helper.form.setField(elements.USER_NAME_FIELD, user.username().get());
           Helper.form.setField(elements.PASSWORD_FIELD, user.password().get());
       }
  ```

## Define objects

* ⁨autonomx⁩ ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨main⁩ ▸ ⁨java⁩ ▸ ⁨module ▸ webApp ▸ user.csv
* We are going to use the csv file to setup our data. For more info [Csv](https://app.gitbook.com/@ehsan-matean/s/autonomx/test-object/csv-test-data)

![](../.gitbook/assets/image%20%2825%29.png)

### Setup Tests

{% tabs %}
{% tab title="Verify\_Login\_Test.java" %}
```text



    @BeforeMethod
     public void beforeMethod() throws Exception {
        setupWebDriver(app.webApp.getWebDriver());
    }

    @Test
    public void validate_user_Login() {
        UserObject user = UserObject.user().withAdminLogin();
        TestLog.When("I login with admin user");
        app.strapi.login.login(user);

        TestLog.Then("I verify admin logo is displayed");
        Helper.verifyElementIsDisplayed(MainPanel.elements.ADMIN_LOGO);

        TestLog.When("I logout");
        app.strapi.main.logout();

        TestLog.Then("I should see the login panel");
        Helper.verifyElementIsDisplayed(LoginPanel.elements.LOGIN_SUBMIT);
    }
```
{% endtab %}
{% endtabs %}

