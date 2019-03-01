---
title: "[WebUI] Set Encrypted Text" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/webui-set-encrypted-text.html 
redirect_from:
    - "/display/KD/%5BWebUI%5D+Set+Encrypted+Text/"
    - "/display/KD/%5BWebUI%5D%20Set%20Encrypted%20Text/"
    - "/x/6AHR/"
    - "/katalon-studio/docs/webui-set-encrypted-text/"
description: 
---
Description
-----------

Set encrypted text into an input field. It also clears the previous value of the input field. To encrypt raw text, go to **Help > Encrypt Text**.

_Manual mode_

The pop-up dialog has been shown when calling keyword "**Set Encrypted Text**". Input raw text and select insert.

**_Script Mode_**

Go to **Help > Encrypt Text**, input raw text to encrypt. Next, copy and paste encrypted text into the test scripts.

 Parameters
-----------

| Param | Param Type | Mandatory | Description |
| --- | --- | --- | --- |
| to  | TestObject | Required | Represent a web element. |
| text | String | Required | The encrypted text. |
| flowControl | FailureHandling | Optional | Specify [failure handling](/x/qAAM) schema to determine whether the execution should be allowed to continue or stop. |

Example
-------

Set the encrypted text to txt_Password of a login form.

```groovy
'Open browser and navigate to AUT'
WebUI.openBrowser('http://demoaut.katalon.com/profile.php#login')

'Input username'
WebUI.setText(findTestObject('Page_Login/txt_UserName'), 'John Doe')

'Input password'
WebUI.setEncryptedText(findTestObject('Page_Login/txt_Password'), 'g3/DOGG74jC3Flrr3yH+3D/yKbOqqUNM')

'Click on "Login" button'
WebUI.click(findTestObject('Page_Login/btn_Login'))

'Close browser'
WebUI.closeBrowser()
```