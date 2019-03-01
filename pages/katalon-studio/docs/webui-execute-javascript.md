---
title: "[WebUI] Execute JavaScript" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-execute-javascript.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Execute+JavaScript/"
    - "/display/KD/%5BWebUI%5D%20Execute%20JavaScript/"
    - "/x/XhdO/"
    - "/katalon-studio/docs/webui-execute-javascript/"
description: 
---
Description  
-------------

Execute JavaScript on the currently selected frame or window. The provided script fragment will be executed as the body of an anonymous function.

###### Since 5.0

Parameters  
------------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| script | String | Required | The JavaScript to execute. |
| argument | List | Required | The arguments to the script. Can be empty or null. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Returns
-------

*   Boolean, Long, Double, String, List, Web Element, or Null

Example 

Make an alert on the web page

```groovy
'Use Javascript to make an alert'
WebUI.executeJavaScript("alert('This is an alert')", null)
```

Return WebElement based on its id:

```groovy
WebElement element = WebUI.executeJavaScript("return document.getElementById('someId');", null)
```

Interact with returned WebElement

```groovy
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].style.border='3px solid blue'", Arrays.asList(element))
```

Click on returned WebElement:

```groovy
WebElement element = WebUiCommonHelper.findWebElement(findTestObject('your/object'),30)
WebUI.executeJavaScript("arguments[0].click()", Arrays.asList(element))
```
