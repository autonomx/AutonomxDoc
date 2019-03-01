---
title: "GUI Overview" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-recorder/docs/gui-overview.html 
redirect_from:
    - "/display/KR/GUI+Overview/"
    - "/display/KR/GUI%20Overview/"
    - "/x/LAHR/"
    - "/katalon-recorder/docs/gui-overview/"
description: 
---
Katalon Automation Recorder main UI contains 4 sections as follow

*   Main Toolbar
*   Test Case/ Suite Explorer
*   Test Case Details View
*   Log/Reference/Variable

![](../../images/katalon-recorder/docs/gui-overview/image2018-3-1-183A563A39.png)

**1\. Toolbar**

Katalon Recorder main toolbar contains buttons to help you to manage web recording process.

|  Button |  Description |
| --- | --- |
|  New |  Create new test case or test suite |
|  Record |  For recording automation test |
|  Play |  Execute selected single test case |
|  Play Suite |  Execute selected test suite |
|  Play All |  Execute all test suites |
|  Pause/Resume |  Pause and Resume current execution |
|  Stop |  Stop recording or the current execution |
|  Export |  Export current test suite/test case to various scripting languages and framework |
|  Speed |  Adjust execution speed |
|  Setting |  Port configuration for Katalon Studio Users. Allow users to change the default port used by Katalon Studio to communicate with the active browser |
|  Help icon |  Katalon Automation Recorder User Guide |

**2\. Test case explorer**

The Test case explorer view displays the structure of the test suite and its test cases, helping users to organize, browse and quick access to any test cases. Open/Add Test Suite can be performed quickly by clicking on correspondent icons on the upper right corner.

Test execution status is also displayed here at the bottom. Users can immediately aware of the number of passed or failed tests.

**3. Test case details view**

Katalon Automation Recorder will display recorded test script in the test case window. It displays **command** and its parameters in table format. Users can also **Drag and Drop** any test step to organize the test case.

_Editing Test Case_

Katalon Automation Recorder allows the user to edit any recorded commands or added the new command at any point in the steps.

**Command, Target, Value** display information of currently selected command. This entry field is modifiable.

To edit, select the step to be changed and edit it using the **Command**,** Target**, and **Value** fields.

Command text field will display a drop-down menu to suggest commands based on the entering characters. Katalon Automation Recorder supports most of the common Selenium commands.

*   Actions – Commands that reproduce user interaction on the application under test.
*   Accessors – Commands are used to store the results in variables.
*   Assertions – Commands that verify the application under test behave as expected.

For more details about Selenium commands, refer to [this link](http://www.seleniumhq.org/docs/02_selenium_ide.jsp#selenium-commands-selenese).

For more detail list of support commands, refer to [this document](/display/KR/Selenese+%28Selenium+IDE%29+Commands+Reference).

_Context menu_

Right-click on any space in test case detail views to display the context menu. Users can perform most of the essential actions for command at any preferred test step. Context menu contains:

a. Managing Test Case

| AddCommand | Insert a new command in the currently selected step |
| --- | --- |
| Delete Command | Remove a single selected command |
| Delete All Command | Remove all commands of the currently selected test case |
| Copy Command | Copy the currently selected command |
| Paste Command | Paste a command at a particular test step |

b. Debugging Test Case

| Toggle Breakpoint | Set a breakpoint to stop at a specific command for debugging purposes |
| --- | --- |

c. Execute

| Execute This Command | Run a single command for prompt feedback |
| --- | --- |

Users have multiple options when it comes to executing test cases in Katalon Automation Recorder including **Play **a single test case, **Play All** test cases in test suites, **Pause** and **Resume**, or even execute a **single** **Command** from context menu while composing automation test.

**4. Log/Screenshots/Variables/Test Data/Reference**

**![](../../images/katalon-recorder/docs/gui-overview/image2018-3-1-183A583A48.png)**

**_Log_**

The Console Log Viewer shows the real-time report/log of the test execution. All execution errors message, information message and execution progress is displayed here.

**_Screenshot_**

This tab shows all captured screenshot of the keyword "captureEntirePageScreenshot" in Test Case.

**_Reference_**

_The Reference tab displays the detail documentation of selected command. It helps users to ensure the correct types and the number of parameters for the command._

**_Variable_**

The Variable tab display detail information the currently selected command. Users can view command name, target, and values in this tab while the test is executing.

**_Test Data_**

The Test Data tab allows the user to upload CSV file for Data Driven Testing. The user also can manage test data file by editing the name or removing unwanted data file.

_**Katalon Analytics (Cloud icon)**_

Upload execution logs to Katalon Analytics to keep track of execution history, access to the test automation smart dashboard, and reports.