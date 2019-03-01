---
title: "How to create a custom keyword"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/create_custom_keyword.html
description: "In addition to the built-in keywords, Katalon Studio users can define custom keyword to extend the capability and reuse them across projects"
---
In addition to the built-in keywords, users can define custom keywords to extend the capability of Katalon Studio. Once created, custom keywords can be used in test cases just like other built-in keywords. This feature allows users to expand keywords and reuse them across projects.

Create a Package
----------------

A package allows you to group custom keywords into a specific category, making keywords easier to search and use.

1. Select **File > New > Package** from the main menu to open the **New Keyword Package** dialog. Enter the name for your package and click **OK**.

![New custom Keyword Package](../../images/katalon-studio/tutorials/create_custom_keyword/1.-Katalon-Keyword-package.png)

2\. A new package is created under **Keywords** of Katalon Studio accordingly.

![Keywords of Katalon Studio](../../images/katalon-studio/tutorials/create_custom_keyword/2.-Katalon-Keyword.png)

Create a Custom Keyword
-----------------------

1. Select **File > New > Keyword** from the main menu to open the **New Keyword** dialog. Enter the name for your keyword and select a **package** for the keyword. Click **OK**.

![New Keyword dialog](../../images/katalon-studio/tutorials/create_custom_keyword/3.-Katalon-New-Keyword.png)

2. A new keyword is created under the specified **package** accordingly.

![new keyword is created](../../images/katalon-studio/tutorials/create_custom_keyword/4.-Katalon-new-keyword.png)

3. Enter the following block of code in your class to define a custom keyword in Java/Groovy:  

where:

| Item | Description |
| --- | --- |
| @Keyword | The annotation to indicate that the block of code below is the definition of a keyword. |
| keywordName | The name that you would like to use for your custom keyword |
| parameters | The list of parameters that would be used in the custom keyword |

For example:

![define a custom keyword in Java/Groovy](../../images/katalon-studio/tutorials/create_custom_keyword/5.-Katalon-keyword-groovy.png)  

4\. Save the **Keyword** file when you're done.

Custom keywords in Manual view
------------------------------

Follow the steps below to use your defined custom keywords in the **Manual view** of a test case:

1. Open a test case in **Manual** **view**, then add **Custom Keyword** in script from the command toolbar.

![add Custom Keyword in Manual View](../../images/katalon-studio/tutorials/create_custom_keyword/6.-Katalon-Manual-view.png)

2. A new test step is added with a list of all defined custom keywords. Select your recently created keyword here.

![defined custom keywords](../../images/katalon-studio/tutorials/create_custom_keyword/7.-Katalon-new-test-case.png)

Custom keywords in Scripting view
---------------------------------

Follow the steps below to use your defined custom keywords in the **Scripting view** of a test case:

*   The **Class** _CustomKeywords_ allows you to access all custom keywords. Enter the following syntax into the script editor:

```groovy


 
CustomKeywords.

```

*   The **Content Assist** function will be invoked immediately after you type the **dot** character. **Content Assist** provides context-sensitive suggestions for code completion. Therefore, all the custom keywords defined in your test project will be displayed as below:

![Content Assist function](../../images/katalon-studio/tutorials/create_custom_keyword/8.-Katalon-Conten-assist.png)

*   Select the recently created keyword and provide all parameters as required.

The following API docs provide details on the functions used to work with custom keywords:

| Class | Method | Description |
| --- | --- | --- |
| [**Driver Factory**](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html) | [getWebDriver()](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/webui/driver/DriverFactory.html#getWebDriver()) | Get the currently active web driver. |
| [**Test Object**](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html) | [addProperty(String name, ConditionType condition, String value)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#addProperty(java.lang.String,%20com.kms.katalon.core.testobject.ConditionType,%20java.lang.String)) | Add a new property to a test object |
| setProperties(List<TestObjectProperty> properties)  | Set properties of a test object |
| [getObjectId()](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#getObjectId()) | Get object ID. |
| [findPropertyValue(String name, boolean caseSensitive)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testobject/TestObject.html#findPropertyValue(java.lang.String,%20boolean)) | Find the value of a property using its name |
| [**Keyword Util**](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html) | [logInfo(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#logInfo(java.lang.String)) | Log message |
| [markError(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markError(java.lang.String)) | Mark a keyword as an error |
| [markErrorAndStop(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markErrorAndStop(java.lang.String)) | Mark a keyword as an error and stop execution |
| [markFailed(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailed(java.lang.String)) | Mark a keyword as failed and continue execution |
| [markFailedAndStop(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markFailedAndStop(java.lang.String)) | Mark a keyword as failed and stop execution |
| [markPassed(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markPassed(java.lang.String)) | Mark a keyword as passed |
| [markWarning(String message)](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/util/KeywordUtil.html#markWarning(java.lang.String)) | Mark a keyword as warning |

You can download [this project](https://github.com/katalon-studio/CustomKeywords) for example regarding custom keyword.