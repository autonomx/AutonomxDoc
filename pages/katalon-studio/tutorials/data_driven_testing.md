---
title: "Data-driven testing approach with Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/data_driven_testing.html
redirect_from:
    - "/katalon-studio/tutorials/data-driven-testing/"

description: "Data-driven testing is a testing method using the tables of test data. This article will show you how to apply data-driven testing using Katalon Studio."
---
1.  [What is Data-driven testing?](#what-is-data-driven-testing)
    *   [The Advantages of Data-driven testing](#data-driven-testing-advantages)
2.  [Data-driven testing approach with Katalon Studio](#data-driven-testing-katalon-studio)
    *   [Create a new test case using Web Record function](#create-test-case)
    *   [Data-driven Tests Execution](#test-execution)
3.  [Tutorial video](#tutorial-video)

What is Data-driven testing?
----------------------------

**Data-driven testing (DDT)** is a common term in the computer software testing area. Its define a testing has been done using a table of conditions directly as test inputs and verifiable outputs. Also, in the data-driven testing process, the test environment settings and control are not hard-coded.

This testing process is quite popular and normally applied right after the record and playback mode. In other words, once a set of testing object under a test case is captured, testers will need to add more input values from the external data files to ensure the application can handle the most number of scenarios in the future.

In the control methodology, the external information is "read" from a database that can be any of the below data files.

*   Datapools
*   Excel files
*   ADO objects
*   CSV files
*   ODBC sources

The most simple way to better understand the explanation of this data testing approach could be under a record of an automated test. In some cases, the values you select during record may not generate any bugs or errors but the external values which is missed during the records may lead them. Then, it is when the tester needs a set of database to diversify their testing inputs.
Also, if there is any change you want to make like putting more or cutting down the data, you are totally free to reshape and customize without causing harm to the hard-coded value. If the change is in hard-coded value itself, so yes, you have to change both in code and data.

Data-driven framework can be best understood by the following diagram:

![data-driven testing using Katalon Studio](../../images/katalon-studio/tutorials/data_driven_testing/data_driven_testing.jpg)

### The Advantages of Data-driven testing

*   The [scripts could generate parallelly](https://www.katalon.com/videos/test-suite-collection-run-test-suites-parallel/) whilst developers are building the application/software. The whole process of designing, planning and running the database is independent towards the application development.
*   The tester can avoid the irrelevant and unneeded duplication of testing scripts generated since we already carry a standard file using for testing inputs and verifying the data.
*   All the outcomes from inputs, outputs to feasible testing results are collected and stored under a well-managed text records.
*   Test cases will be handled under numerous set of data since it is the external information collected separately to the test case. The information is stored under external material which stems from Excel files, XML or any other texting sources.
*   The test data can't be impacted if the test scripts are changing since data-driven testing is running separately with the development. The tester will have no influence towards developers even though they make multiple changes.
*   It is a good news for tester if errors or bugs generated in future will be minimized to the lowest probability since there are multiple scenarios and inputs tested using data-driven framework approach.

Data-driven testing approach with Katalon Studio
------------------------------------------------

Katalon Studio supports data-driven testing which allows users to define data sets and execute test scripts faster and easier compared to data-driven testing in other frameworks.

This tutorial will provide you a simple example of how to create an automation test case and execute it multiple times using different sets of data.

**What You'll Need**

Katalon Studio: available for free, running on both Windows and MacOS with a beta Linux support. Visit Katalon Studio website to get the latest version.

[![API testing interview questions](../../images/katalon-studio/tutorials/data_driven_testing/Untitled-1.png)](https://www.katalon.com/download)

**Before You Dive In**

*   If you do **Web UI** testing, no additional settings are needed. Check [this list](/display/KD/Supported+Environments) for all supported browsers.
*   In case of **Mobile** testing, you need to install **Appium** and enable **USB Debugging mode** on your device first. Please refer to our Mobile Setup [for Windows](/x/jwbR) or [for macOS](/x/9AXR).
*   After launching Katalon Studio, provide your registered username and password to activate this automation tool. The username and password are those used to login to [https://www.katalon.com/](https://www.katalon.com/). If you haven't already, check out [Quick Start](/katalon-studio/tutorials/web/get-started/quick-start/) to familiarize yourself with Katalon Studio.

### The Data-Driven Testing Sample Project

The simple example of Data-driven testing is described through a testing booking service. The booking form has 5 different fields, each field contains multiple options. The data used for a specific case may not cause any error to the application, but for the other sets of data, it probably does. In order to make sure the application will be working probably regardless of the inputs, you may leverage data-driven testing for this scenario to execute the test automatically multiple times using different data tests.

Given a sample test case whose scenario is as below:

*   _Open the login page of the Katalon demo AUT website (http://demoaut.katalon.com/profile.php#login)_
*   _Login using three different accounts_
*   _Validate if the login is success_
*   _Close the browser_

You can use the following steps to automate the above test scenario.

### Prepare the Data

Create a data file in Katalon containing three login accounts. Refer to [Manage Test Data](/display/KD/Manage+Test+Data) for more details on how to create test data from different sources. The following example shows the internal data file with three accounts for [http://demoaut.katalon.com](http://demoaut.katalon.com/profile.php#login) (note that only '**_John Doe_**_'_ is valid):

![prepare data](../../images/katalon-studio/tutorials/data_driven_testing/Picture1-300x132.png)

### Create a new test case using Web Record function

1\. Create a new test case and generate the steps needed to run data-driven testing. You can utilize the [Web Record function](/katalon-studio/tutorials/create-test-case-using-record-playback/) to quickly generate your test case:

*   Access [http://demoaut.katalon.com/profile.php#login](http://demoaut.katalon.com/profile.php#login) (_the Katalon demo AUT website)_
*   Enter username/password
*   Click Login
*   Validate if the Appointment page is displayed

The generated test case should be similar to the following:

![Katalon Test case](../../images/katalon-studio/tutorials/data_driven_testing/2.-Katalon-test-case.png)

You can see that the input values for username and password are hard-coded as what you typed during the recording (in this case it's "admin"/"abc123"). In order to run this script multiple times using different accounts, you need to parameterize these values.

2\. Switch to the _Variables_ tab of the test case and create two variables named 'demo\_usn' and 'demo\_pwd'. Pass in the default values as follows:

![Katalon Variables tab of the test case](../../images/katalon-studio/tutorials/data_driven_testing/3.-Katalon-Variables.png)

3\. Switch back to the Manual view of the test case and set those two variables as inputs for the username/password fields.

![Katalon Manual view](../../images/katalon-studio/tutorials/data_driven_testing/4.-Katalon-manual-view.png)

### Data-driven Tests Execution

From here you can apply Data-driven using two methods, either using **Test Suites** or **Test Cases.**

#### A. Execution from test suites

1\. Next, create a test suite to execute the test case using the defined dataset.

![Katalon New test suite](../../images/katalon-studio/tutorials/data_driven_testing/6.-Katalon-Data-driven.png)

2\. Add the data file to the Test Data section and proceed to bind the two variables 'demo\_usr' and 'demo\_pwd' to the respective columns of the data file. You may refer to [**Data for test** **execution**](/x/mAvR#DesignaTestSuite-Data-DrivenTesting) for more details about variable binding.

![Katalon Test Data driven testing section](../../images/katalon-studio/tutorials/data_driven_testing/7.-Katalon-test-data.png)

3\. You can now execute your test case. It will run three times using the accounts defined in the test data file.

#### B. Execute using a test case

1. We can also implement Data-driven tests in a test case. Just create a new test case and switch to Script Mode. To iterate tests with multiple sets of data, we need to use FOR statement and call the test data objects. Copy and paste below code:

In which:

*   Import InternalData class from Katalon built-in library and define **_data_** variable to locate test data table
*   For [statement to loop](/katalon-studio/tutorials/common-condition-control-statements/) through all row of test data table which indicates how many times the test case will run
*   To get a row value in test data table, use [getRowNumbers()](http://api-docs.katalon.com/studio/v4.6.0.2/api/com/kms/katalon/core/testdata/InternalData.html#getRowNumbers()) method syntax. For example:

_Username field: data.internallyGetValue("demo_usn", index)_

_Password field:  data.internallyGetValue("demo_pwd", index)\_

2\. When you have done in Scripts view, switch back to Manual view, the test case will be showed as the following screenshot:

![Katalon Scripts view](../../images/katalon-studio/tutorials/data_driven_testing/8.-Katalon-Script-view.png)

3\. Finally, you can run the test case, and your login test case will be executed three times using the accounts defined in the test data file.

**Congratulations! You now understand how to approach Data-driven testing with Katalon Studio.**

Tutorial video is contributed by Shiva Raj
------------------------------------------

<iframe width="560" height="315" src="https://www.youtube.com/embed/O95RSICQjus" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>

Learn more:

*   [How To Apply Data Driven By Katalon Studio](https://www.katalon.com/videos/apply-data-driven-katalon-studio/)
*   [Record & playback, Data Driven and Cross browser testing with Katalon Studio for Web UI](https://www.katalon.com/videos/record-playback-data-driven-cross-browser-testing-katalon-studio-web-ui/)