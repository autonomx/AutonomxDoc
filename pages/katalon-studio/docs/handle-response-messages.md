---
title: "Handle Response Messages" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handle-response-messages.html 
redirect_from:
    - "/display/KD/Handle+Response+Messages/"
    - "/display/KD/Handle%20Response%20Messages/"
    - "/x/BxRO/"
    - "/katalon-studio/docs/handle-response-messages/"
description: 
---
Most of the keywords for handling web service result will ask for a **ResponseObject** (return from the keyword _WSBuiltInKeywords.sendRequest_) or an **element locator**.

**ResponseObject** (return from _WSBuiltInKeywords.sendRequest_) is a convenient class to wrap the HTTP content returned from a Web Service call, here are some helpful functions to handle the result:

*   getContentType: the response data type from web service, some typical data types are: application/json, text/xml, application/xml, application/soap+xml…
*   getResponseText(): the whole text content returned from web service

**Element locator** is the concept utilized by Katalon Studio to explore into hierarchical data structure such as JSON or XML to look for the expected data. Following are some examples about its usage on JSON/XML data.

*   JSON data usually have a root node (a parent element to wrap all content) consists of many child nodes. **Element locator** syntax will begin with element name, child element and its index (if it has children nodes, index is zero-based numbering), name of the property we want to get its value. Those parts of element locator are separated by **dot** character. The example below shows how to get employee email and the first phone number:  
    ![](../../images/katalon-studio/docs/handle-response-messages/1.png)

*   XML data are similar both in the structure and the way we define **element locator**, our expected info may come from: the attribute of XML tag (in example below, "_no"_ is an attribute of "_contacts"_ tag) or from inner child tag, you can use keywords for handling text (e.g. verifyElementText) or property (e.g. verifyElementPropertyValue) respectively.  
    ![](../../images/katalon-studio/docs/handle-response-messages/2.png)

*   In case of the returned data don't have a root node, prefix the **element locator** by "\[index number\]", where index is zero-based numbering. See example below:  
    ![](../../images/katalon-studio/docs/handle-response-messages/3.png)