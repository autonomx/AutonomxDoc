---
title: "Upload Reports" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-analytics/docs/upload-reports.html 
redirect_from:
    - "/display/KA/Upload+Reports"
    - "/x/wBxO"
description: 
---
Uploading **Katalon Studio test execution reports** to Katalon Analytics does not require much technical skills. There are several ways to achieve this.

*   If you are new to Katalon Studio, we recommend to [enable Katalon Analytics integration](/display/KA/Integration+with+Katalon+Studio) and check Automatically submit test run in Project Settings for any future test execution.
*   If you have been using Katalon Studio and would like to take advantage of Katalon Analytics
    *   For uploading single reports, please refer to manual upload section.
    *   For uploading mass reports, please use Windows Command Line section. 

> *   For uploading from Command Line
>     *   Download Katalon Studio **Reports Uploader** [here](http://download.katalon.com/resources/katalon-report-uploader-0.0.1.jar)
>     *   [Java JRE](https://www.java.com/en/download/manual.jsp) installed (How to set up Java environment [guide](https://www.tutorialspoint.com/java/java_environment_setup.htm))

From Katalon Studio
-------------------

### Automatically

In Katalon Studio, select **Project** \> **Settings** \> **Integration** \> **Katalon Analytics**. Before proceeding, fill in your email and password that you've used to activate Katalon Studio. Click **Connect** and you will be able to select Team and Project to upload your report.

![](../../images/katalon-analytics/docs/upload-reports/image2017-10-20 15_40_40.png)  
  
Checked **'Automatically submit test run result'** option. Katalon Studio will automatically upload Test Suite execution Reports to Katalon Analytics. Users can also select options to attach screenshot:

![](../../images/katalon-analytics/docs/upload-reports/image2018-7-31 11_10_16.png)

### Manually

To manually submit Katalon Studio test suite execution reports, navigate to **Reports** section in **Test Explorers**. Select report to view.

![](../../images/katalon-analytics/docs/upload-reports/image2017-10-9 18_0_42.png)

In Test Report detail views ,click **Katalon Analytics** button > **Upload**.

![](../../images/katalon-analytics/docs/upload-reports/image2018-7-31 14_57_2.png)

> Once successfully uploaded to Katalon Analytics, you can double check on Katalon Analytics web app to make sure the report has been uploaded.

From Command Line
-----------------

> For Mac OS users, please change the **path** of of Katalon Reports folder when using the syntax in **Terminal**

1.  Download Katalon Studio Reports Uploader [here](http://download.katalon.com/resources/katalon-report-uploader-0.0.1.jar).
2.  In Katalon Analytics, navigate to **Settings > Projects**. Provide a **name** for the new project. Click **Create**. Once a project is **created**, Katalon Analytics will generate a **Project ID**. You will **need** this **ID** to **upload** Katalon Studio execution **report** later.  
    ![](../../images/katalon-analytics/docs/upload-reports/image2017-10-20 10_15_39.png)  
      
    
3.  In Katalon Studio. Navigate to Test Explorers, select Report folder. Right-click > Open Containing Folder. Get the path of your Katalon Report folders.  
    i.e: C:\\Users\\abc\\Katalon Studio\\Web Sample\\Reports
4.  Start Command Prompt, use the below syntax to upload Katalon Report to Katalon Analytics

```groovy
java -jar katalon-report-uploader-0.0.1.jar --kit.server.api=https://analytics.katalon.com --projectId=3 --path="d:\katalon-reports" --email=admin@mail.me --password=admin
```

  
Where:

| katalon-report-uploader-0.0.1-SNAPSHOT.jar | Jar file path can be absolute path or relative path |
| --- | --- |
| projectId | Katalon Analytics project ID |
| path=" " | Local path of Katalon Studio Reports folder that you located from step 1 |
| email and password | Katalon Analytics credentials |