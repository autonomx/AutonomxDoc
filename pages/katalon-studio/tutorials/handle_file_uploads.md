---
title: "How to Handle File Uploads"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/handle_file_uploads.html
description: "This tutorial will show you how to handle the file upload feature and verifying downloaded files using Katalon Studio."
---
In general, we need to automate scenarios like uploading a file into the application for attaching profile pictures or documents. This tutorial demonstrates handling the file upload feature and verifying downloaded files using Katalon Studio.

What is File Upload in testing?
-------------------------------

The file upload widget is the input tag having attribute **type** equal to **file**. It allows us to upload all file formats (.jpg, .png, .txt…)

Let's work on the case in which we need to upload a file and validate whether the file is uploaded.

Steps:

*   Launch the URL of the application
*   Maximize the window
*   Use the file upload widget to upload a file

**Manual Mode**:

![Handle File Uploads testing Manual Mode](../../images/katalon-studio/tutorials/handle_file_uploads/Handle-File-Uploads-Manual-Mode-1024x167.png)

We can also use the **script mode**. Below script is the code to upload a file and validate the uploaded file.

**Script Mode:**

```groovy
'Open browser and navigate to given URL'
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\Katalon Articles\\\\File Upload\\\\UploadFile.html')
'Maximize the window\r\n'
WebUI.maximizeWindow()
'Passing the path of the file'
WebUI.uploadFile(findTestObject('Upload File'), 'C:\\\\Users\\\\Public\\\\Pictures\\\\Sample Pictures\\\\Desert.jpg')
 
'Capturing the file name after upload and storing it in a variable'
FilePath = WebUI.getAttribute(findTestObject('Upload File'), 'value')
 
'Verifying the Actual path and Expected path of file'
WebUI.verifyMatch(FilePath, 'C:\\fakepath\\Desert.jpg', false)

```

File upload using Send Keys
---------------------------

We can also upload files by using the **Send Keys** method. **Send Keys** works for the **input** tag having **type** equal to **file**.

Steps:

*   Launch the URL of the application
*   Maximize the window
*   Use the Send Keys method to upload a file.
*   Send Keys accepts file URL as string.

**Manual Mode:**

![File Uploads using send key](../../images/katalon-studio/tutorials/handle_file_uploads/Sendkeys_Upload_file_Manual-1024x208.png)

**Script Mode:**

```groovy
'Open browser and navigate to given URL'
 
WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\Katalon Articles\\\\File Upload\\\\UploadFile.html')
 
'Maximize the window\r\n'
WebUI.maximizeWindow()
 
'Uploading the File using Send Keys method by passing the File path'
WebUI.sendKeys(findTestObject('Upload File'), 'C:\\\\Users\\\\Public\\\\Pictures\\\\Sample Pictures\\\\Desert.jpg')
 
'Capturing the file name after upload and storing it in a variable'
FilePath = WebUI.getAttribute(findTestObject('Upload File'), 'value')
 
'Verifying the Actual path and Expected path of file'
WebUI.verifyMatch(FilePath, 'C:\\fakepath\\Desert.jpg', false)

```

Verify a Downloaded File
------------------------

After downloading a file from the application we need to verify whether the file is successfully downloaded and saved in a folder.

For that, we need to set preferences for Firefox, as shown in the Image below.

![Verify a Downloaded file](../../images/katalon-studio/tutorials/handle_file_uploads/Verify-a-Downloaded-File.png)

**Script Mode:**

```groovy
import org.openqa.selenium.By as By
import org.openqa.selenium.WebDriver as WebDriver
import org.testng.Assert as Assert
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
 
'Define Custom Path where file needs to be downloaded'
String downloadPath = 'D:\\FileDownloadChecking'
 
'Launch a browser and Navigate to URL'
WebUI.openBrowser(GlobalVariable.FileDownloadCheckingURL)
 
WebDriver driver = DriverFactory.getWebDriver()
 
'Clicking on a Link text to download a file'
driver.findElement(By.linkText('smilechart.xls')).click()
'Wait for Some time so that file gets downloaded and Stored in user defined path'
WebUI.delay(10)
 
'Verifying the file is download in the User defined Path'
Assert.assertTrue(isFileDownloaded(downloadPath, 'smilechart.xls'), 'Failed to download Expected document')
 
boolean isFileDownloaded(String downloadPath, String fileName) {
boolean flag = false
'Creating an object for File and passing the download Path as argument'
File dir = new File(downloadPath)
'Creating an Array where it will store all the files from that folder'
File[] dir_contents = dir.listFiles()
 
println('Total Files Available in the folder are : ' + dir_contents.length)
'Iterating a loop for number of files available in the folder to verify file name in the folder'
for (int i = 0; i < dir_contents.length; i++) {
println('File Name at 0 is : ' + dir_contents[i].getName())
'Verifying the file name is available in the folder '
if (dir_contents[i].getName().equals(fileName)) {
'If the file is found then it will return a value as true'
return flag = true
}
}
'If the file is found then it will return a value as false'
return flag
}

```

We have just learned how to handle file uploads and verify downloaded files using Katalon Studio. You can download the source code [here](https://github.com/katalon-studio/katalon-web-automation).

For further instructions and help, please refer to [Upload File](/display/KD/%5BWebUI%5D+Upload+File) guideline.