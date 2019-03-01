---
title: "Design a Test Suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/design-a-test-suite.html 
redirect_from:
    - "/display/KD/Design+a+Test+Suite/"
    - "/display/KD/Design%20a%20Test%20Suite/"
    - "/x/mAvR/"
    - "/katalon-studio/docs/design-a-test-suite/"
description: 
---

> Since v5.9, Katalon Studio support Test Case duplication within the same Test Suite.

A test suite contains a list of test cases that are intended for testing certain aspects of the application under test.

Modify Execution Information
----------------------------

You can manage additional configurations for test suite execution by expanding the **Execution Information** section, as below:

![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-143A493A29.png)

<table>
   <thead>
      <tr>
         <th>Field</th>
         <th>Description</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <p>Page load timeout:</p>
            <p>&nbsp;<img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-143A563A48.png"></p>
         </td>
         <td>
            <p>The timeout period allowed to wait for a page to be loaded. You can choose among the following options:</p>
            <ul>
               <li><strong>Use default</strong>: the default value defined will be used. Refer to <a href="/pages/viewpage.action?pageId=3179873">Execution Preferences (Version 5.0 and below)</a> for more details.</li>
               <li><strong>User-defined value</strong>: the entered timeout value (in seconds) will be used.</li>
            </ul>
            <p>&nbsp;</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>Retry:</p>
            <p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-153A93A6.png"></p>
         </td>
         <td>
            <p>The <strong>maximum</strong> number of retries for execution until it is successfully passed. You can opt to retry only <strong>failed</strong> test cases.</p>
            <p>&nbsp;</p>
         </td>
      </tr>
      <tr>
         <td>
            <p>Mail Recipients</p>
            <p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-153A123A46.png"></p>
         </td>
         <td>
            <p>The list of recipients who would receive the execution report once the test suite finishes its execution.</p>
            <blockquote class="important">
               <p>There's also another list of recipients who will be receiving all the reports from Katalon by default. Refer to <a href="/display/KD/Emails+Settings">Emails Settings</a> for more details.</p>
            </blockquote>
         </td>
      </tr>
      <tr>
         <td>
            <p>Last run:</p>
            <p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-153A143A55.png"></p>
         </td>
         <td>
            <p>The datetime when the test suite was last executed. You can quickly open the report of this execution by clicking on the <strong>Last run</strong> hyperlink.</p>
            <p>&nbsp;</p>
         </td>
      </tr>
   </tbody>
</table>

Manage Test Case List
---------------------

There are several ways to add Test Cases into Test Suites. You can drag and drop the Test Case into Test Suites or using the Test Suite editor to manually add the test case.

>_Note: Test Cases can be duplicated in the same Test Suite._

Open a test suite, then select option to add **Add Test Case** from command toolbar.  
![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-143A333A40.png)

All test cases in Katalon Studio are displayed in the **Test Case Browser** dialog for you to select your preferred options. The selected test cases will be added in the test case list accordingly.  


> The checkbox at the end of test case row is checked by default. It means that the test case will be executed when running a test suite.

Data-Driven Testing
-------------------

Katalon Studio provides users the ability to define test data that can be used later when executing automation test. Refer to the [Manage Test Data](/display/KD/Manage+Test+Data) for more detailed information about this function. This section shows how to design your automation test using predefined test data.

### Test Data

Using the test suite editor, you can add a predefined test data file object which will be used later in a test case execution by following the steps below:

1.  In test suite editor, select a test case from the test case list. Click on **Show Data Binding** to load its data details.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-24-173A543A22.png)  
      
    
2.  Katalon Studio will expand Data Binding Section with Test Data table and Variable Binding table  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-113A393A32.png)  
      
    
3.  In the expanded **Data Binding** section, select option to add **Test Data** from command toolbar.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-6-30-213A473A37.png)  
      
    
4.  All test data will be displayed in **Test Data Browser**. Select the data for your test case to continue. The selected test data will be added to the list accordingly.
5.  Double click on the **Data Iteration** cell to specify the data range to be used for execution.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-163A53A49.png)  
    where:
    
    <table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Run all rows</td><td>All the data rows in the data file will be used during test execution.</td></tr><tr><td>Run from row ... to row ...</td><td>The data range from a certain row to a certain row in the data file will be used during test execution.</td></tr><tr><td>Run with specific rows</td><td><p>The data rows which are specified here will be used during test execution. You can use <strong>comma</strong> and <strong>hyphen</strong> characters to define the rows.</p><p>For example:</p><ul><li>to use three data rows (row 1, row 2, row 3), enter: 1,2,3</li><li>to use six data rows (row 1, row 2, row 3, row 4, row 5, row 9), enter: 1-5,9</li></ul></td></tr></tbody></table>
    
6.  Click on the **Type** cell to toggle its value. Refer to [Manage Test Data Relationship](#DesignaTestSuite-Managetestdatarelationship) for more details.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-113A533A51.png)  
      
    

#### Manage test data relationship

If you are specifying multiple test data, then you can further define the relationship among them to decide how the final data set used in the test execution will be. There are two types of relationship supported in Katalon Studio:

| Relationship Type | Description |
| --- | --- |
| One | The data set will be indicated as 'One' in the relationship with other data set. |
| Many | The data set will be indicated as 'Many' in the relationship with other data set. |

Therefore, we can have the following combinations among data sets:

<table><thead><tr><th>Relationship</th><th>Example</th></tr></thead><tbody><tr><td>One to One</td><td><p>Given there are two data sets as below:</p><p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-163A473A9.png"></p><p>Then the final data set used for test execution will be:</p><ul><li>a1 b1</li><li>a2 b2</li></ul></td></tr><tr><td>Many to Many</td><td><p>Given there are two data sets as below:</p><p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-163A493A3.png"></p><p>Then the final data set used for test execution will be:</p><ul><li>a1 b1</li><li>a1 b2</li><li>a2 b1</li><li>a2 b2</li><li>a3 b1</li><li>a3 b2</li></ul></td></tr><tr><td>One to Many</td><td><p>Given there are two data sets as below:</p><p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-163A503A53.png"></p><p>Then the final data set used for test execution will be:</p><ul><li>a1 b1</li><li>a2 b1</li><li>a3 b1</li><li>a4 b1</li><li>a1 b2</li><li>a2 b2</li><li>a3 b2</li><li>a4 b2</li></ul></td></tr><tr><td><p>Given there are three data sets as below:</p><p><img src="../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-163A523A41.png"></p><p>Then the final data set used for test execution will be:</p><ul><li>a1 b1 c1</li><li>a1 b1 c2</li><li>a2 b2 c1</li><li>a2 b2 c2</li></ul></td></tr></tbody></table>

### Variable Binding

If there's any [public variable](/display/KD/Variable+Types#VariableTypes-Publicvariables) defined in your test case, then you can manage variable binding for your test case executio--that is, to specify which value would be used for which variables during test execution.

Follow the steps below to manage variable binding for a test case within the test suite:

1.  In test suite editor, select a test case from the test case list. Click on **Show Data Binding** to load its data details.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-24-173A543A22.png)  
      
    
2.  All the public variables defined in that test case will be loaded into the **Variable Binding** section:  
      
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-113A553A3.png)

#### Bind Variable to Test Data

This option allows you to associate the variables with configured [Test Data](/display/KD/Manage+Test+Data)[](/display/KD/Execute+a+test+suite#Executeatestsuite-TestData).

1.  Katalon Studio allows users to **Set Type** for variables all at once if the variables have the **same** t**ype**. In this case Username and Password has the same type as Data Column. Simply highlight both rows. Click on **Set Type** and select **Data Column**:  
      
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-123A23A55.png)  
      
    
2.  Both rows are still highlighted. Click on **Set Test Data** to decide which test data from the list to be used for execution:  
      
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-123A43A41.png)  
      
    
3.  Click on **Value** cell to specify the data field of test data to be used.  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-2-15-183A93A6.png)
4.  All headers of the related test data will be displayed. Select the header to be referred during execution. The selected header will be displayed accordingly in **Variable Binding** section.
5.  Save the test suite when you're done.

In the above example, the global variable _Username_ will look up to the column _u__sername_ of the test data file "_New Excel Data"_ during execution. Users can specify the number of data rows to be used in **Data Iteration **of Test Data table.

> Quick tip
> 
> Using the **Map All** button, users can quickly match Variables of the test case with respective columns in the test data:
> 
> ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-143A333A23.png)
> 
> In order for Katalon to automatically make the variable binding, the Variables need to have its respective columns in Test Data with **the same name**.
> 
> For example: the variables 'Username' and 'Password' of the selected test case can be mapped automatically with columns 'Username' and 'Password' of the test data by Katalon Studio when user clicks on the **Map All** button.

#### Bind to Scripting value

This option allows you to associate the variables with other scripting value.

1.  Highlight rows No. 1 and No.2. Click **Set Type** and Select **Script Variable**:  
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-153A193A20.png)  
      
    
2.  Specify the data to be used in **Value** cell. This value will be utilized this data during execution.   
    ![](../../images/katalon-studio/docs/design-a-test-suite/image2017-8-31-153A213A10.png)

Execute a Test Suite
--------------------

Executing a test suite is more or less the same as executing a test case. Refer to [this documentation](/display/KD/Execute+a+Test+Case+or+a+Test+Suite) for more details.