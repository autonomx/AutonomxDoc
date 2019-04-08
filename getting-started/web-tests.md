# Web Tests

## Configure Web app

* resources -&gt; properties -&gt; web.property
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
* Note: **webApp is the name of the web module**
* Example project: autonomx ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨main⁩ ▸ ⁨java⁩ ▸ ⁨modules⁩ ▸ ⁨webApp⁩
  * Setup locators

    webApp ▸ LoginPanel.java

{% code-tabs %}
{% code-tabs-item title="LoginPanel.java" %}
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
{% endcode-tabs-item %}
{% endcode-tabs %}

## Define actions

* webApp ▸ LoginPanel.java

  {% code-tabs %}
  {% code-tabs-item title="LoginPanel.java" %}
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
  {% endcode-tabs-item %}
  {% endcode-tabs %}

## Define objects

* ⁨autonomx⁩ ▸ ⁨automation⁩ ▸ ⁨src⁩ ▸ ⁨main⁩ ▸ ⁨java⁩ ▸ ⁨module ▸ webApp ▸ user.csv
* We are going to use the csv file to setup our data

![](../.gitbook/assets/image%20%284%29.png)

{% code-tabs %}
{% code-tabs-item title="Verify\_Login\_Test.java" %}
```text
* setup test


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
{% endcode-tabs-item %}
{% endcode-tabs %}

