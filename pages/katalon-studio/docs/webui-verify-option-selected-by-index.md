---
title: "[WebUI] Verify Option Selected By Index" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-verify-option-selected-by-index.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Verify+Option+Selected+By+Index/"
    - "/display/KD/%5BWebUI%5D%20Verify%20Option%20Selected%20By%20Index/"
    - "/x/mpIY/"
    - "/katalon-studio/docs/webui-verify-option-selected-by-index/"
description: 
---
**Verify if the options at the given indices are selected.**

**Parameters:  **

*   to - TestObject (required): represent a web element
*   range - Object (required): list of indexes of the options to be verified if being
*   timeout - int (requiredl): system will wait at most timeout (seconds) to return result
*   flowControl - FailureHandling (optional): specify failure handling schema to determine whether the execution should be allowed to continue or stop. More details are in this page: [Failure handling](/x/qAAM)

Returns
-------

*   **true:** if options with given indices are selected
*   **false:** if options with given indices are not selected

Example: You want to verify if the option 1 is selected in the list
-------------------------------------------------------------------

Manual: 

![](../../images/katalon-studio/docs/webui-verify-option-selected-by-index/image2016-8-15-193A283A13.png)

Script:

```groovy
WebUI.verifyOptionSelectedByIndex(findTestObject('The Second Landing Page/select_js-intent'), 1, 2)
```