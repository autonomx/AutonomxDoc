---
title: "Viewing test suite reports"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/viewing_test_suite_reports.html
description: "This guide will give you an overview of test suite reports and related supported basic functions when testing with Katalon Studio."
---
Katalon Studio is designed to ease many challenges that manual testers are facing. In a large project, there may be hundreds or even thousands of test cases and test executions. Test suite reports produced by Katalon Studio allow users to monitor their test status and have a better understanding of their project's test coverage. This guide will give you an overview of reports and related supported basic functions.

Once a test suite finishes its execution, a historical report is automatically generated and stored in the Reports section of Tests Explorer. Test suite execution reports are placed in chronological order with the most recent one on top.

For example:

![test suite reports](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Tests-Explorer.png)

The report will be named with following the naming convention: _YYYYMMDD_HHmmss_, which is the datetime when the test suite starts its execution.

Report Overview
---------------

In **Test Explorer** view, double-click on a historical execution of a test suite to view its details:

![Test Explorer view](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Report-Overview.png)

where:

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Test Cases Table</td>
            <td>List of executed test cases.</td>
        </tr>
        <tr>
            <td>Summary</td>
            <td>Summary information of executed environment.</td>
        </tr>
        <tr>
            <td>Execution Settings</td>
            <td>
                Settings for execution which include information about how to handle a failed test case, page loading timeout, etc. For example:
                <p><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Execution-Settings1.png"></p>
            </td>
        </tr>
        <tr>
            <td>Execution Environment</td>
            <td>
                Information concerning the execution environment, including Host Name, Operating System (os), Katalon Studio version, browser, etc. For example:
                <p><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Execution-Environment.png"></p>
            </td>
        </tr>
    </tbody>
</table>

Test Cases List
---------------

*   The Test Case Table displays the list of all executed test cases in a test suite. If [data-driven testing](/katalon-studio/tutorials/data-driven-testing/) is used, each test case will be executed through a number of times (iterations) that are defined in the Data Iteration column of the current test suite as shown in the steps No. 5 to 7 below.

![Katalon Studio Test Case Table](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Cases-List.png)

Users can easily determine what information to display by using the filters.

<table>
    <thead>
        <tr>
            <th>Filter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Passed1.png">Passed </td>
            <td>Show only iterations which are passed.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Failed1.png">Failed</td>
            <td>Show only iterations which are failed.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Error1.png">Error</td>
            <td>Show only iterations having errors.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Incomplete.png">Incomplete</td>
            <td>Show only incomplete iterations</td>
        </tr>
    </tbody>
</table>

*   By selecting an **iteration** in **Test Case Table** and click **Show Test Case Details**, you can view details regarding its executed logs.
*   If **qTest** and **JIRA** are configured in Project Settings, you can submit the results to these systems. Refer to [qTest Integration](/display/KD/qTest+Integration) and [JIRA Integration](/display/KD/JIRA+Integration) for more details.

Test Suite Summary
------------------

This section explains the information on the test execution summary report for a test suite, as shown below.

![test execution summary report](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Suite-Summary.png)

The fields include:

| Field | Description |
| --- | --- |
| Test Suite ID | The ID of the executed test suite in Katalon Studio. Once clicked, the test suite is opened. |
| Hostname / OS / Platform | The environment where the test suite is executed |
| Start / End / Elapse | Execution start/end date time and duration |
| Total TC | The total number of test cases, grouped into four status groups, Passed, Failed, Error, and Incomplete. |

Test Case's Log
---------------

**Test Case's Log** shows the detail of a test case after execution. Users can view such details in three tabs **Test Log**, **Information**, and **Integration**. Double-click on a test case in **Test Cases Table** to display the **Test Case's Log** window.

### Test Log Tab

*   Details of the executed steps and their status are displayed in this tab.
    ![Details of the executed steps](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Test-Cases-Log.png)

Detail of the items:

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Log Information</td>
            <td>
                Information of the selected iteration in the <b>Test Case's Log</b> section:
                <ul>
                    <li>
                        <ul>
                            <li><b>Name</b> of the test step (the name of the keyword used in the test step)</li>
                            <li>Execution <b>Start/End</b> date time and duration</li>
                            <li><b>Description</b> of the test step</li>
                            <li>Any system <b>Message</b> raised when the test step is executed.</li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Log Image</td>
            <td>
                The screenshot taken from the application under test, it is captured in either of the following situations:
                <ul>
                    <li>
                        <ul>
                            <li>An error occurs during test execution</li>
                            <li>The <a href="/display/KD/%5BWebUI%5D+Take+Screenshot">Take Screenshot</a> keyword is used</li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

*   Users can easily determine which type of information to be displayed by using the provided filters:

<table>
    <thead>
        <tr>
            <th>Filter</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Info1.png">Info</td>
            <td>Show the messages logged for information/reference.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Passed-2.png">Passed</td>
            <td>Show the steps which are successfully executed.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Failed-2.png">Failed</td>
            <td>Show the steps which failed to execute.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Error-2.png">Error</td>
            <td>Show the steps having errors.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Incomplete-2.png">Incomplete</td>
            <td>Show incomplete steps.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Warning1.png">Warning</td>
            <td>Show the steps which have warning status.</td>
        </tr>
        <tr>
            <td><img src="../../images/katalon-studio/tutorials/viewing_test_suite_reports/Not-Run1.png">Not Run</td>
            <td>Show the skipped steps.</td>
        </tr>
    </tbody>
</table>

*   If **JIRA** is configured in Project Settings, users can submit a ticket to this system. Refer to [JIRA Integration](/display/KD/JIRA+Integration) for more details.
*   Screenshots are taken for the failed steps and users can hover the mouse cursor over the attachment icon to review.

### Information Tab

Users can find the summary information of the test case in this tab.

![ summary information of the test case](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Information-Tab.png)

The items include:

| Field | Description |
| --- | --- |
| Test Case ID | The ID of the executed test case in Katalon Studio. Once clicked, the system navigates users to the respective test case. |
| Start / End / Elapse | Execution start/end date time and duration. |
| Description | Description of the test case. |
| Message | Any system message raised when this **iteration** is executed. |

### Integration Tab

The information regarding qTest Integration of this iteration is displayed in this tab.

![The information regarding qTest Integration](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Integration-Tab.png)

The fields include:

| Field | Description |
| --- | --- |
| Test Log ID | The ID of the integrated qTest **Test Run**. Once clicked, the system navigates users to the respective qTest page. |
| Test Run Alias | The alias of the integrated qTest **Test Run**. |
| Attachment | Indicate whether all execution logs and reports are placed in a zipped file to be sent to qTest as an attachment. |

Export to other formats
-----------------------

For the purpose of sharing, users can generate reports of test suites into other formats such as **HTML**, **CSV**, **PDF** and **JUnit** using the context menu in Test Explorer as the example below:

![generate reports of test suites into other formats](../../images/katalon-studio/tutorials/viewing_test_suite_reports/Export-to-other-formats.png)

Katalon Studio's Reports feature allows users to have an overview of test execution by providing most important details and necessary information from PASSED/FAILED result to details on the execution environment, test summary, or logs. Using this information, test managers and QAs can better manage and track test activities, resulting in improved testing productivity.