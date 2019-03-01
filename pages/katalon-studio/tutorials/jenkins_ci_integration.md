---
title: "How to setup the integration with Jenkins and other CI tools"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/jenkins_ci_integration.html
description: "Katalon Studio supports console mode execution which can be utilized for integration with popular CI tools such as Jenkins and TeamCity."
---
Katalon Studio supports [console mode execution ](/display/KD/Console+Mode+Execution)which can be utilized for integration with popular CI tools such as Jenkins and TeamCity. This tutorial shows you the basic steps to set up integration with a Jenkins server for scheduling Katalon execution.

Prerequisites
-------------

Here are the requirements to be prepared for Jenkins integration:

1. The Katalon Studio command for console mode execution. Refer to the section [Console Mode Execution](/display/KD/Console+Mode+Execution) for how to create a Katalon command. Here is the basic command template:

```groovy
katalon -runMode=console -projectPath="<YOUR PROJECT>" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath=<YOUR TEST SUITE PATH> -browserType="Chrome"

```

Note: the command should NOT include the -noExit and -consoleLog parameters so that CI logs can be displayed directly on the job view.

2\. The CI tool is installed and configured properly. In this example, we will use [Jenkins](https://jenkins.io/) – a popular and easy-to-integrate CI tool.

3\. The command will invoke Katalon Studio for execution so a Katalon build is needed for each execution machine.

Configuration Steps
-------------------

1\. Login to your Jenkins (You need a Jenkins server so either contact your IT admin or set up a new Jenkins instance. You can refer to the following [guide](https://www.tutorialspoint.com/jenkins/jenkins_tomcat_setup.htm) for simple instructions regarding how to set up Jenkins)

![Login to Jenkins](../../images/katalon-studio/tutorials/jenkins_ci_integration/1.-Katalon-Jenkins.png)

2\. Create a job by selecting **New Item** in Jenkins

![Create New item in Jenkins](../../images/katalon-studio/tutorials/jenkins_ci_integration/2.-Katalon-Jenkins-new-item.png)

3\. Enter job name (e.g "Katalon Studio Tests"), and then choose "Freestyle Project"

![Freestyle Project Jenkins](../../images/katalon-studio/tutorials/jenkins_ci_integration/3.-Katalon-Jenskin-Freestyle-projectpng.png)

4\. Add a Katalon execution command

**4.1 For macOS**

*   At the **Build** section, click on **Add build step** and select **Execute shell**

![Add build step for Jenkins integration](../../images/katalon-studio/tutorials/jenkins_ci_integration/4.-Katalon-macOS.png)

*   Paste in the generated Katalon Studio command

```groovy
cd /Applications
 
./Katalon\ Studio.app/Contents/MacOS/katalon --args -runMode=console -projectPath="/Users/admin/Katalon Studio/Samples/Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"

```

![the generated Katalon Studio command](../../images/katalon-studio/tutorials/jenkins_ci_integration/5.-Katalon-execute-shell.png)

Note: The Katalon execution command needs to be executed in the same folder of the Katalon Studio build so you may need to change the current folder to the build folder first as illustrated above.

**4.2 For Windows**

*   At the **Build** section, click on **Add build step** and select the **Execute Windows batch command** option.

![](../../images/katalon-studio/tutorials/jenkins_ci_integration/6.-Katalon-Windows-command.png)

*   Enter your execution command in the **Command** field. The command should include Katalon Studio command to execute test scripts. For example:

```groovy
C:
 
cd C:\Katalon\4.7
 
katalon -runMode=console -projectPath="C:\Project\Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"

```

![Enter execution command in the Command field](../../images/katalon-studio/tutorials/jenkins_ci_integration/7.-Katalon-Windows-command.png)

Note: The Katalon execution command needs to be executed in the same folder of the Katalon Studio build so you may need to change the current folder to the build folder first as illustrated above.

4.3 For Linux

*   At the **Build** section, click on **Add build step** and select **Execute shell**

![Add build step for Jenkins integration](../../images/katalon-studio/tutorials/jenkins_ci_integration/4.-Katalon-macOS.png)

*   Paste in the generated Katalon Studio command:

```groovy


 
./katalon -runMode=console -projectPath="C:\Project\Sample Project.prj" -reportFolder="Reports" -reportFileName="report" -retry=0 -testSuitePath="Test Suites/TS_RegressionTest" -browserType="Chrome"

```

Note: The Katalon execution command needs to be executed in the same folder of the Katalon Studio build so you may need to change the current folder to the build folder first as illustrated above.

Exit Codes
----------

When you execute the Katalon Studio command from CI, an exit code will be generated as the output. You can use this exit code to know whether your execution is successful, passed or failed.

![Katalon Studio Exit Codes](../../images/katalon-studio/tutorials/jenkins_ci_integration/8.-Katalon-exit-code.png)

Below is the list of exit codes:

*   0: the execution passed with no failed or erroneous test case.
*   1: the execution has failed test cases.
*   2: the execution has erroneous test cases.
*   3: the execution has failed test cases and erroneous test cases.
*   4: the execution cannot start because of invalid arguments.

To check test execution report in Katalon. Please refer to this [guide](/display/KD/Test+Report).

Publish JUnit reports
---------------------

From [Katalon Studio 4.7](/display/KD/Version+4.7), JUnit report is generated when you execute a test suite. In order for Jenkins to store, analyze and show results, please add the '[Publish JUnit test result report](https://wiki.jenkins.io/display/JENKINS/JUnit+Plugin)' item.

![Publish JUnit reports](../../images/katalon-studio/tutorials/jenkins_ci_integration/9.-Katalon-JUnit-reports.png)

Set the 'Test Report XMLs' value to your Reports folder to fetch all generated JUnit reports.

![ fetch generated JUnit reports](../../images/katalon-studio/tutorials/jenkins_ci_integration/10.-Katalon-Test-report-XMLs.png)

After executions from the Jenkins job, click on the '[Test Results Analyzer](https://wiki.jenkins.io/display/JENKINS/Test+Results+Analyzer+Plugin)' item.

![Test Results Analyzer](../../images/katalon-studio/tutorials/jenkins_ci_integration/11.-Katalon-Jenkins-Analyzer.png)

All test executions from the folder you've specified will be summarized and visualized as follows.

![Test Results Analyzer chart](../../images/katalon-studio/tutorials/jenkins_ci_integration/12.-Katalon-test-executions.png)

For the visual tutorial on How to set up the integration with Jenkins and other CI tools, please check out the videos created by Katalon Studio's user at:

<iframe width="840" height="473" src="https://www.youtube.com/embed/bk-brXSCcDw?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">&nbsp;</iframe>

<iframe width="840" height="473" src="https://www.youtube.com/embed/dYygHm-OwKc?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">&nbsp;</iframe>