---
title: "Detecting elements with Xpath in Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/detect_elements_xpath.html
description: "This article shows you how Katalon Studio provides supports to deal with the issue of detecting elements with Xpath."
---
Detecting UI elements of the application under test (AUT) is crucial for automation testing since they are the main objects in test cases and test scripts. However, identifying them manually requires much time and experience in HTML. This task becomes even more challenging for objects that could not be identified by their common attributes or are located deep within another element (nested objects). This article shows you how Katalon Studio provides supports to deal with such cases.

What is XPath?
--------------

XPath expression is a mechanism for navigating through and selecting a node in the XML document. It can also be used to locate an HTML element.

For example, the **Download** link in the script below is an element nested in another.

```groovy
<div class="container">
<div class="navbar-collapse navbar-right" aria-expanded="true">
<div class = "nav-bar-decorated"
<ul class="nav navbar-nav">
<Li>
<a class="pbtn-download" href="#katalon-download">Download</a> <!-- Deeply nested element  -->
</li>
</div>
</div>
</div>

```

Issue in identifying nested elements
------------------------------------

It is difficult to identify a nested element, such as the <a> element in the script above. In order to define the XPath manually, we need to have solid knowledge about DOM structure of the webpage.

How to identify nested elements?
--------------------------------

Identifying XPath is an effective way to find nested elements which can't be identified by common properties such as **ID**, **Name**, or **Class.** There are two ways to find XPath:

*   **Detect XPath by other tools:** Web browsers usually have Adds-on support users to identify XPath. However, It can be a challenge since it depends on alot of the tools.

*   **Detect XPath by Katalon Studio:** Katalon Studio can generate and optimize XPath for HTML elements, regardless of how deeply nested they are. You can use these XPaths to identify elements without having to search through the DOM tree.

The example below illustrates how Katalon Studio generates and optimizes XPath automatically when you spy on the **Sign up now** object (a nested object).

![detecting elements with Xpath by Katalon Studio](../../images/katalon-studio/tutorials/detect_elements_xpath/Sign-up-now.png)

Deal with dynamically changing elements
---------------------------------------

One of the challenging and time-consuming tasks in test automation is to modify test scripts when the AUT is changed, especially in the early stages of software development. Developers may change identifiers and elements quite often from one build to another. In addition, during the execution, the AUT's elements may change dynamically.

To deal with these challenges, automation testers should not set fixed XPaths for elements in test cases, but instead scripting XPaths dynamically based on certain patterns. Katalon Studio supports all **[Xpath Axes](https://www.w3schools.com/xml/xpath_axes.asp)**, such as

*   following-sibling
*   preceding-sibling
*   contains
*   descendant
*   starts-with

Here are a few examples:

| Xpath value | Description |
| --- | --- |
| .//h2\[text()='Make Appointment'\] | Locate the **h2** tag element that has text matching exactly "Make Appointment" |
| //*\[contains(text(),'Login')\] | Locate any element that contains the text "Login" |
| //a\[starts-with(@id='LoginPanel')\] | Locate the **a** tag element that has the ID starting with "LoginPanel" |

Next article "[Generating reliable object selector using Spy Web utility](/katalon-studio/tutorials/generate-css-xpath-selector-spy-web-utility/)" will show you how to input and edit XPath or CSS object to identify objects on Web UI via [Spy Web Utility](http://docs.katalon.com/pages/viewpage.action?pageId=5117668)

For more information on XPath Axes, refer to **[XPath Axes](https://www.w3schools.com/xml/xpath_axes.asp)** from **[www.w3schools.com](https://www.w3schools.com)**.