---
title: "Value Types" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/value-types.html 
redirect_from:
    - "/display/KD/Value+Types/"
    - "/display/KD/Value%20Types/"
    - "/x/6IIw/"
    - "/katalon-studio/docs/value-types/"
description: 
---
While designing automation test in Katalon Studio, users usually need to configure data for certain test steps, such as:

*   Pass input parameters to a test step.
*   Get the output value from a test step.

You can select from a wide range of value types supported by Katalon Studio as showed below:

| Value Type | Description |
| --- | --- |
| Constant | The data is a value that will not change over time. |
| Variable | The data is a value that might be changed during execution. This type of data can only be referred within the scope of the test case where it is defined. |
| Global Variable | The data is a value that might be changed during execution. This type of data can be referred anywhere in the project. |
| Test Data Value | The data is a value coming from a test data file. |
| Binary | The data is a binary expression. |
| Boolean | The data is a Boolean value that can be evaluated from a Boolean expression. |
| Test Case | The data is a test case. |
| Test Data | The data is a test data file. |
| Test Object | The data is a test object. |
| Method Call | The data is a method call. |
| Property | The data is a public property value of an object. |
| List | The data is a list of values. |
| Dictionary | The data is a collection of keys and values. |

This list describes how to provide data for each data type:

<table><thead><tr><th>Value Type</th><th>How to provide value for the property?</th></tr></thead><tbody><tr><td><ul><li>String</li><li>Integer</li></ul></td><td><p>Enter value directly into the <strong>Value</strong> cell.</p><p><img src="../../images/katalon-studio/docs/value-types/image2017-2-24-223A13A4.png"></p></td></tr><tr><td><ul><li>Variable</li><li>Global Variable</li></ul></td><td><p>Select preferred option from the <strong>Value</strong> drop-down list.</p><p><img src="../../images/katalon-studio/docs/value-types/image2017-2-24-223A33A11.png"></p></td></tr><tr><td>Boolean</td><td><p>Select preferred option from the <strong>Value</strong> drop-down list.</p><p><img src="../../images/katalon-studio/docs/value-types/image2017-2-24-213A583A55.png"></p></td></tr><tr><td>List</td><td><ul><li>Click on the <strong>Value</strong> cell.</li><li>A popup which looks like the following will be displayed:<br><img src="../../images/katalon-studio/docs/value-types/Screen-Shot-2017-07-13-at-14.37.49.png"></li><li>Continue&nbsp;to add as many items as you want in the above popup.<br><img src="../../images/katalon-studio/docs/value-types/Screen-Shot-2017-07-13-at-14.26.51.png"></li><li>Then press the <strong>OK</strong> button.</li><li>Those defined values will be displayed in the <strong>Value</strong> cell, as illustrated below:<br><img src="../../images/katalon-studio/docs/value-types/Screen-Shot-2017-07-13-at-14.27.28.png"></li></ul><p>&nbsp;</p></td></tr><tr><td>Dictionary</td><td><ul><li>Click on the <strong>Value</strong> cell.</li><li>A popup which looks like the following will be displayed:</li></ul><p><img src="../../images/katalon-studio/docs/value-types/Screen-Shot-2017-07-13-at-14.39.13.png"></p><p>Continue to add as many items as you want in the above popup.</p><p><img src="../../images/katalon-studio/docs/value-types/Screen-Shot-2017-07-13-at-14.41.07.png"></p><ul><li>Then press the <strong>OK</strong> button</li><li>Those defined values will be displayed in the <strong>Value</strong> cell, as illustrated below.<br><img src="../../images/katalon-studio/docs/value-types/Screen-Shot-2017-07-13-at-14.31.40.png"></li></ul></td></tr></tbody></table>