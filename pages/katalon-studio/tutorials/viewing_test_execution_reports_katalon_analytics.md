---
title: "Viewing test execution reports in Katalon Analytics"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics.html
description: "This tutorial will show you how to leverage Katalon Analytics powerful dashboard to pivot your test automation strategy, focus on the high-risk areas."
---
1.  [Status Report](#StatusReport)
2.  [Duration Report](#DurationReport)
3.  [Execution Report](#ExecutionReport)
4.  [Execution Detail View](#ExecutionDetailView)
5.  [Performance and History](#PerformanceandHistory)

This tutorial will show you how to leverage Katalon Analytics powerful dashboard to pivot your test automation strategy, focus on the high-risk areas, detect flakiness tests and to have a better control of the product quality.

For this tutorial, let's assume that you already uploaded Katalon Studio execution reports to [Katalon Analytics](https://analytics.katalon.com). If not, refer to [this tutorial](/katalon-studio/tutorials/upload-test-execution-reports-katalon-analytics/).

Status Report
-------------

The graph presents an overview of test status over a series of executions within the report. This is the quickest way to check the status of Automation Test of the AUT, which also indicates the quality of Automation Test. There are 4 possible results when a test is run: **Passed**, **Failed**, **Error**, **Incomplete**. You can **click** on an **unwanted result** on the Status Report graph to **filter** it out.

![Overview of test status](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/8.png)

As shown in the chart above, the 1st execution has most test cases which were passed while most test cases were failed in the second test execution. The last execution has many passed and failed test cases. This chart gives you an idea of trends in test execution.

Hovering the mouse cursor over the graph line, you will be able to see how many test cases with their status in each execution.

Incomplete test cases are shown as failed test cases. To view Incomplete test cases only, click on Passed, Failed, Error status to filter.

![Incomplete test cases Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/9.png)

As depicted in the chart above, there are two incomplete test cases and the other test cases are not shown.

Duration Report
---------------

The duration reports graph indicates how much time each execution took to complete. Any significant changes in execution time can be a sign to let you know that there are performance issues.

Let's take a look at Duration Report Graph of the Katalon Keywords project below, the execution #2 took more than 21 hrs to complete while the execution #5 took only 18 minutes. These differences indicate which execution needs to be reviewed.

![Duration Report Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/10.png)

Execution Report
----------------

The Execution Report displays a list of all test executions and their details within a report. Execution Report contains a table that combines data from Status Report and Duration Report.

![Execution Report Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/11-1024x432.png)

You can also filter a preferred status by clicking the icon on top of the Status column.

For example, select Passed in Status if you want to see only executions that are passed. To reset, simply click on the x icon or on Clear all.

![Filter status Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/12-1024x257.png)

Execution Detail View
---------------------

Katalon Analytics provides a detail view to help you have a better understanding of each execution. To view details, simply click on a preferred execution **ID**. A dashboard for the selected execution will be displayed.

Let's take Katalon Keywords as an example. By viewing the Result section, you can obtain a quick summary of the execution.

![Execution Detail View Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/13-1024x460.png)

| Status: Failed | The overall status of the 7th execution is Failed |
| --- | --- |
| Total: 242 (+228) | The total number of test cases is 247, and there are 228 test cases added since the last execution (execution #6) |
| Passed: 179 ( +168) | Execution #7 has 179 passed test cases. There are additional 168 passed test cases since the last execution |
| Failed: 63 ( +61) | Execution #7 has 63 failed test case. This execution has 61 more failed test cases compared to the last execution |
| Error: 0 | Zero erroneous test case |
| Incomplete: 0 ( -1) | Zero incomplete test case compared to 1 incomplete test case in the last execution. |
| Started and Duration | Exact date and time of the execution, and the time taken to complete. |

Next, you can hover the mouse over the pie chart to see the total percentage of passed and failed test cases. (e.g. 73.97% fassed, 26.03% failed for the Katalon Keyword Project).

![hover the mouse over the pie chart to see the total percentage of passed and failed test cases](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/14.png)

All Failed Tests report is designed for a quick access to all test cases with failed status for a specific execution. This list shows ID, Name, Folder (test case folder), Started (time and date), Duration (time), Status, Age, and Flakiness of each test case. Katalon Analytics groups test cases according to their status. You can drill down to a specific status by filtering through the Status column.

![drill down to a specific status by filtering through the Status column. ](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/15-1024x460.png)

**Test Result Age: Age** is an interesting and useful metric in Katalon Analytics. **Age** is the number of consecutive test executions that have the same present status. For example, the Age of 2 for the test case 839 indicates that this test case consecutively failed two times in the previous two executions. This metric suggest how persistent a test case is in its current status.  

**Test Result Flakiness:** One of the most useful features of Katalon Analytics is **flaky analysis**. Flaky tests are those producing both passed and failed results for the same configuration. They are critical to the quality of automation test executions and hard to detect. Sometimes tests failed due to various reasons such as data synchronization, improper test management, and dependency issues. As your project grows, which means more features and complex test case structures, flaky tests are even harder to detect. Katalon Analytics helps you solve this problem by visualizing and analyzing test execution reports to help you easily identify which test cases are likely to cause the problem.

Flakiness is the percentage of changes in the results (passed and failed) over the total number of executions employing the same configuration for the same test case. The **higher** the **flakiness** percentage the **less stable** of that test case.

Katalon Analytics also maps the structure of Test Suites and Folders from Katalon Studio Project into its dashboard. You can view detailed information about Test Suites in a table containing execution environment (OS, browsers), filterable status, total test cases, the number of test cases on each status category.

For example, refer to the screenshot below, the Katalon Keywords project has a test suite named **TS_Alert Keywords**. It was run on Mac OS X 64bit, FF v54.0, on 8/29/2017 09:03:17, taking 4m46s to run with all 7 passed test cases.

![Katalon Keywords project has a test suite named TS_Alert Keywords](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/16-1024x382.png)

You can view the same detailed information with the Folders table

![Folders table Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/17-1024x220.png)

You can also view all tests in one table, as shown in the screenshot below. From this table, you can filter the list based on test status.

![view all tests in one table Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/18-1024x512.png)

Performance and History
-----------------------

Katalon Analytics takes users even deeper into the performance and history of executions of test suites, test cases, and folders. Performance and history charts allow users to have a more comprehensive view of their tests in order to take actions concerning the quality of the application under test.

Let's continue with the Katalon Keywords project, click on **ID** of the test suite **TS_Alert Keywords** to view its detailed execution information. Next, click on **View all executions of this Test Suite**. Katalon Analytics will show the **History** dashboard of TS_Alert Keywords test suite where you can view its **Performance** graph and execution history.

![Performance graph and execution history Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/19-1024x366.png)

The Performance line graph shows the execution time of each run for the test suite. Hovering on each point on the graph to see the execution time. By detecting possible trends on the Performance graph, you can quickly figure out performance issues.

![Performance Report Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/20.png)

Next, the **History** table displays the execution history of for the selected test suite where you can view execution environment, the number of test cases, and status. As shown above, the **TS_Alert Keyword**'s **Performance** graph indicates that the executions #21, #35 and #45 are all failed. The **History** table below provides  insights on why these test executions failed.

![History table Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/21-1024x410.png)

For example, the execution #45 has 6 passed test cases and 1 failed test case. This one failed test case causes the whole execution to fail. To examine further, click on the execution ID to view key metrics at the test case level, as shown below.

![the execution ID Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/221.png)

The Result report above shows 7 total test cases (6 passed and 1 failed) in this execution. The number in the parentheses indicates the difference between this and the previous execution.  On this screen, you can also view all failed tests with information about age and flakiness.

![ view all failed tests with information](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/23-1024x563.png)

Click on the **ID** of the failed test case (ID: 495) to view the execution history, detailed execution information, and logs.

![detailed execution information & logs Katalon Analytics](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/241.png)

To investigate further, click **View all executions of this Test Case**. The **History** and **Performance** graphs will be displayed, and you will able to get insights on how this test case performs over time.

![View all executions of this Test Case](../../images/katalon-studio/tutorials/viewing_test_execution_reports_katalon_analytics/251.png)

Congratulation! Now you know how to navigate around the Katalon Analytics dashboard, investigate test executions, and detect potential problems and their causes. Katalon Analytics visualizes test execution reports in such a way that product owners and project teams can quickly evaluate execution tests, make informed decisions to improve the quality of the application under test.