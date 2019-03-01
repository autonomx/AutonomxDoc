---
title: "Extension Scripts (AKA user-extensions.js) for Custom Locator Builders and Actions" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions.html 
redirect_from:
    - "/display/KR/Extension+Scripts+%28AKA+user-extensions.js%29+for+Custom+Locator+Builders+and+Actions/"
    - "/display/KR/Extension%20Scripts%20%28AKA%20user-extensions.js%29%20for%20Custom%20Locator%20Builders%20and%20Actions/"
    - "/x/9APR/"
    - "/katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions/"
description: 
---
Starting from version 3.5.0 Katalon Recorder supports extension scripts (AKA user-extensions.js in the deprecated version of Selenium IDE on Firefox). At this moment this feature allows you to add custom locator builders (1) and your own actions (2) to Katalon Recorder. Please see a sample script at [https://github.com/katalon-studio/katalon-recorder-samples](https://github.com/katalon-studio/katalon-recorder-samples).

**After installing extension scripts, please restart Katalon Recorder and refresh the web page you want to work on.**

![](../../images/katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions/Screenshot-from-2018-04-23-11-21-42.png)

The following instructions were based on the original documentation ([https://www.seleniumhq.org/docs/08\_user\_extensions.jsp](https://www.seleniumhq.org/docs/08_user_extensions.jsp)).

Locator builders
----------------

A locator in Selenium is a means of identifying an element for the selenium command. A locator builder creates each of these locators for you.

```groovy
LocatorBuilders.add('custom locator id goes here', function(e) {
    if (e.id) {
        return "css=" + e.tagName + '#' + e.id;
    }
    return null;
});
```

Custom order for locator builders
---------------------------------

The preferred order for locator builders can be customized.

```groovy
// built-in locators: "id", "link", "name", "dom:name", "xpath:link", "xpath:img", "xpath:attributes", "xpath:idRelative", "xpath:href", "dom:index", "xpath:position", "css"
LocatorBuilders._preferredOrder = ['xpath:position', 'my super locator'];
// Change the default order to preferredOrder
LocatorBuilders._orderChanged();
```

Actions
-------

All methods on the Selenium prototype beginning with "do" are added as actions. For each action "foo", there is also an action "fooAndWait" registered. An action method can take up to two parameters, which will be passed the second and third column values in the test. Example: Add a "typeRepeated" action to Selenium, which types the text twice into a text box.

```groovy
Selenium.prototype.doTypeRepeated = function(locator, text) {
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);

    // Create the text to type
    var valueToType = text + text;

    // Replace the element text with the new text
    this.page().replaceText(element, valueToType);
};
```

Accessors/Assertions
--------------------

All "getFoo" and "isFoo" methods on the Selenium prototype are added as accessors ("storeFoo"). For each accessor there is an "assertFoo", "verifyFoo" and "waitForFoo" registered. An assert method can take up to two parameters, which will be passed the second and third column values in the test. You can also define your own assertions literally as simple "assert" methods, which will also auto-generate "verify" and "waitFor" commands. Example: Add a "valueRepeated" assertion, that makes sure that the element value consists of the supplied text repeated. The two commands that would be available in tests would be "assertValueRepeated" and "verifyValueRepeated".

```groovy
Selenium.prototype.assertValueRepeated = function(locator, text) {
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);

    // Create the text to verify
    var expectedValue = text + text;

    // Get the actual element value
    var actualValue = element.value;

    // Make sure the actual value matches the expected
    Assert.matches(expectedValue, actualValue);
};
```

### Prototype generates additional commands

All "getFoo" and "isFoo" methods on the Selenium prototype automatically result in the availability of "storeFoo", "assertFoo", "assertNotFoo", "verifyFoo", "verifyNotFoo", "waitForFoo", and "waitForNotFoo" commands. Example, if you add a "getTextLength()" method, the following commands will automatically be available: "storeTextLength", "assertTextLength", "assertNotTextLength", "verifyTextLength", "verifyNotTextLength", "waitForTextLength", and "waitForNotTextLength" commands.

```groovy
Selenium.prototype.getTextLength = function(locator, text) {
    return this.getText(locator).length;
};
```

Also note that the "assertValueRepeated" method described above could have been implemented using "isValueRepeated", with the added benefit of also automatically getting "assertNotValueRepeated", "storeValueRepeated", "waitForValueRepeated" and "waitForNotValueRepeated".

Adding extension scripts into Katalon Recorder
----------------------------------------------

To add an extension script, click the "Extension Scripts" tab on the bottom panel, and click the "Add Extension Script" button. **Please remember to refresh the tabs you want to work on because the new extension script only has effects on tabs opened after being added.**

![](../../images/katalon-recorder/docs/extension-scripts-aka-user-extensionsjs-for-custom-locator-builders-and-actions/Screenshot-from-2018-04-23-11-45-06.png)
