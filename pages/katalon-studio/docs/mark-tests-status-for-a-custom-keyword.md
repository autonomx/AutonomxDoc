---
title: "Mark test's status for a Custom Keyword" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/mark-tests-status-for-a-custom-keyword.html 
redirect_from:
    - "/display/KD/Mark+test%27s+status+for+a+Custom+Keyword/"
    - "/display/KD/Mark%20test%27s%20status%20for%20a%20Custom%20Keyword/"
    - "/x/xgXR/"
    - "/katalon-studio/docs/mark-tests-status-for-a-custom-keyword/"
description: 
---
Unlike built-in keywords, there will be no overall status for a Custom Keyword unless you define what your expected result is within the Custom Keyword. To generate a status for this one, Katalon Studio provides a couple of functions:

```groovy
import org.openqa.selenium.By
import org.openqa.selenium.WebElement
import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.util.KeywordUtil
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords
 
/**
* Check if element present in timeout
* @param to Katalon test object
* @param timeout time to wait for element to show up 
* @return true if element present, otherwise false
*/
@Keyword
def isElementPresent(TestObject to, int timeout){
//Use Katalon built-in function to find elements with time out 1 seconds
List<WebElement> elements = WebUiBuiltInKeywords.findWebElements(to, timeout)
if (elements.size() > 0)
{
//Mark Passed status after this step
KeywordUtil.markPassed("Element is Present")
}
else
{
//Mark Failed status after this step
KeywordUtil.markFailed("Element is not presebt")
}
```

**References:**

*   [KeywordUtil](https://api-docs.katalon.com/com/kms/katalon/core/util/KeywordUtil.html)