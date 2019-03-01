---
title: "Running Cucumber Features File" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/running-cucumber-features-file.html 
redirect_from:
    - "/display/KD/Running+Cucumber+Features+File/"
    - "/display/KD/Running%20Cucumber%20Features%20File/"
    - "/x/PhLR/"
    - "/katalon-studio/docs/running-cucumber-features-file/"
description: 
---
From a Feature File
-------------------

Katalon Studio allows you to run the feature file instantly by itself to make sure it works properly. Open the desired **Features** file, click the **Play** button on the main toolbar.

![](../../images/katalon-studio/docs/running-cucumber-features-file/Screen-Shot-2018-09-06-at-10.11.40-AM.png)

In Test Cases
-------------

Katalon Studio supports Cucumber keywords along with the original built-in keywords. The user doesn't have to import Cucumber libraries into Katalon Studio.

To include Cucumber _Feature_ file in Katalon Studio test case: 

1.  **Execute a single Feature File:**

*   Create a _New Test Case_ and use Cucumber built-in keyword "_[runFeatureFile](https://api-docs.katalon.com/com/kms/katalon/core/cucumber/keyword/CucumberBuiltinKeywords.html#runFeatureFile(java.lang.String,%20com.kms.katalon.core.model.FailureHandling))_" as demonstrated example below.
*   **[Execute](/display/KD/Execute+a+test+case)** the Test Case normal
    
    ```groovy
    CucumberKW.runFeatureFile('Include/features/New Feature File.feature')
    ```
    
      
    ![](../../images/katalon-studio/docs/running-cucumber-features-file/Screen-Shot-2018-09-04-at-19.56.32.png)  
      
    
    **2\. Execute multiple Feature Files **  
    You can execute **multiple**_Feature__Files_ as long as they are within the same '**features**' folder using '**_[runFeatureFolder](https://api-docs.katalon.com/com/kms/katalon/core/cucumber/keyword/CucumberBuiltinKeywords.html#runFeatureFolder(java.lang.String,%20com.kms.katalon.core.model.FailureHandling))_**' built-in keyword. 
    
    ```groovy
    CucumberKW.runFeatureFolder('Include/features/New Feature File.feature')
    ```
    
      
    ![](../../images/katalon-studio/docs/running-cucumber-features-file/Screen-Shot-2018-09-04-at-19.57.32.png)
    
    3\. Execute using [Cucumber Runner](http://toolsqa.com/cucumber/junit-test-runner-class/):
    
    Using '**[runWithCucumberRunner](https://api-docs.katalon.com/com/kms/katalon/core/cucumber/keyword/CucumberBuiltinKeywords.html#runWithCucumberRunner(java.lang.Class,%20com.kms.katalon.core.model.FailureHandling))**' keyword, you can execute a Feature File with a set of options. Example you've created a Step Definitions called **MyCucumberRunner** within scripts folder ("Include/scripts/groovy" folder).
    
    ```groovy
    CucumberKW.runWithCucumberRunner(MyCucumberRunner.class)
    
    ```
    
    **![](../../images/katalon-studio/docs/running-cucumber-features-file/Screen-Shot-2018-09-06-at-17.13.04.png)  
    **
    
    *   **Example #1**: Run all Feature files in **Include/features** Folder
        
        ```groovy
         import org.junit.runner.RunWith;
         import cucumber.api.CucumberOptions;
         import cucumber.api.junit.Cucumber;
         
         @RunWith(Cucumber.class)
         @CucumberOptions(features = "Include/features", glue = "")
         public class MyCucumberRunner {}
         
        ```
        
    *   **Example #2**: Run all Feature files in a specified file/folder
        
        ```groovy
         import org.junit.runner.RunWith;
         import cucumber.api.CucumberOptions;
         import cucumber.api.junit.Cucumber;
         
         @RunWith(Cucumber.class)
         @CucumberOptions(features = "Your_Folder_Or_File_Path", glue = "")
         public class MyCucumberRunner {}
         
        ```
        
    *   **Example #3**: Run all Feature files in a specified file/folder, generate JUnit Cucumber report with XML pretty format, and copy to a specified folder
        
        ```groovy
         import org.junit.runner.RunWith;
         import cucumber.api.CucumberOptions;
         import cucumber.api.junit.Cucumber;
         @RunWith(Cucumber.class)
         @CucumberOptions(features="Your_Folder_Path", glue="", plugin = ["pretty",
                              "junit:Folder_Name/cucumber.xml"])
         public class MyCucumberRunner {
         }
         
        ```
        
    *   **Example #4**: Run all Feature files in a specified file/folder, generate multi Cucumber reports with XML, JSON, HTML pretty format, and copy to a specified folder
        
        ```groovy
         import org.junit.runner.RunWith;
         import cucumber.api.CucumberOptions;
         import cucumber.api.junit.Cucumber;
         @RunWith(Cucumber.class)
         @CucumberOptions(features="Your_Folder_Path", glue="", plugin = ["pretty",
                              "junit:Folder_Name/cucumber.xml",
                              "html:Folder_Name",
                              "json:Folder_Name/cucumber.json"])
         public class MyCucumberRunner {
         }
        ```
        

Cucumber Reports
----------------

There is **NO** custom report for executing Feature File. Katalon Studio uses only generated Cucumber **reports** for **Test Suite/Test Suite Collection** execution **level**, in which the test cases contain the Cucumber Features file. The generated Cucumber report of Test Suite/Test Suite Collection will be located in the same folder of Katalon Studio report's folder:

*   In Katalon Studio Tests Explorer, right-click at the desired **Report > Open Containing Folder**. Katalon Studio will redirect you to the local folder where Cucumber Reports are stored. 
*   Katalon Studio supports **three** formats for Cucumber reports: 
    *   JSON
    *   XML
    *   HTML

![](../../images/katalon-studio/docs/running-cucumber-features-file/Screenshot-at-Sep-04-20-01-21.png)