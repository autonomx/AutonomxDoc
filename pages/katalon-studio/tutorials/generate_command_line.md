---
title: "Running tests from Command Line"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/generate_command_line.html
redirect_from:
  - "/katalon-studio/tutorials/executing_console_mode.html"
description: "Command line is the quickest way to launch programs and execute the tests. This tutorial will help you generate commands to use in console mode."
---
If the users want to run a test case, they can utilize either the command-line runner or execute the tests directly from Katalon Studio UI.

**Command line** is the quickest way to launch programs and execute the tests. It is convenient for those users who have familiarity with coding and command-line experience.

Before executing the tests from command line, user needs to create test suite/test suite collection. Refer to the [Katalon documentation](/x/A4Ew) to get an idea of test suite/test suite collection.

You can quickly generate commands to use in console mode by following the steps below:

*   Step 1: Click on **Build CMD** from the main toolbar. A new dialog will show up.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-Build-CMD.png)

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-Build-CMD-2.png)

*   Step 2: Click on **browse**. It **lists** out all the **Test Suites** and **Test Suite Collections**. You can choose the Test Suite or Test Suite Collection to be executed.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-Test-suite.png)

*   Step 3: Select **Android** from the list the platform to execute the tests.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-3.png)

The Mobile Device settings will be available when we choose to run with Android. You can configure the location for reports after execution.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-Mobile-device-setting.png)

*   Step 4: **Report File Name**: the name for your generated report.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-4.png)

*   Step 5: By default, post-execution checkbox "**Send Summary Report to recipients**" will be **unchecked**.

You can select the checkbox to enable email configuration to send report to your recipients' list. Other options are available for you to configure the options for console log.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-5.png)

*   Step 6: **Retry Test Suite**: Here, you can set the number of times to run test cases in the test suite. There is also a checkbox for failed test cases only, which means test suite will rerun only for the failed tests.
*   Step 7: Click on **Generate Command** once you're done with the configuration. You can **Copy to Clipboard** and paste to command prompt for execution.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-6.png)

*   Step 8: Open the **command prompt** and navigate to the folder of Katalon Studio, which contains katalon.exe file.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-8.png)

*   Step 9: Paste the **generated command** in Step 9. Enter to start executing the test suite collection.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-9.png)

*   Step 10: After completing execution, a report will be generated in the selected folder with the given name.

![Running tests from Command Line](../../images/katalon-studio/tutorials/generate_command_line/Running-tests-from-Command-Line-10.png)

The source code is available [here](https://github.com/katalon-studio/katalon-mobile-automation). For further instructions and help, please refer to [Console Mode Execution](/display/KD/Console+Mode+Execution) guide and join us on [Katalon Forum](http://forum.katalon.com/).