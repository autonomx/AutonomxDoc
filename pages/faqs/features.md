---
title: "Features"
sidebar: faqs_sidebar
permalink: faqs/features.html
description:
---
### Q: What is Katalon Studio's scripting language? 
------------------------------------------------

Katalon Studio uses Apache Groovy, a scripting language for the Java platform. Groovy is a powerful dynamic language, which is ideal for creating test scripts. For test execution, Java libraries and Java compatible languages like JRuby and Jython are supported.

### Q: Does Katalon Studio support plugins or external libraries? 
--------------------------------------------------------------

Yes, Katalon Studio supports Java code/libraries to build custom keywords. Refer to [How to create a Custom Keyword](https://docs.katalon.com/katalon-studio/tutorials/create_custom_keyword.html) and [How to import a Java library](https://docs.katalon.com/katalon-studio/tutorials/import_java_library.html) for more detail.

### Q: Can I import my Selenium scripts into Katalon Studio? 
---------------------------------------------------------

You will have to modify Selenium test scripts to execute them with Katalon Studio. Unfortunately, there is no migration tool for Katalon Studio. It may change in the future.

### Q: Will this work with my CI?
-----------------------------

Yes. Katalon Studio supports [non-GUI mode](/display/KD/Console+Mode+Execution) for [CI/CD integration](https://docs.katalon.com/katalon-studio/docs/jenkins-integration.html).

### Q: Can Katalon Studio be integrated with a test management system?
------------------------------------------------------------------

Yes, Katalon Studio supports the built-in integration with [qTest](https://www.qasymphony.com/software-testing-tools/), a powerful and easy-to-use test management system.

### Q: Can I perform distributed testing?
-------------------------------------

Katalon Studio does not support distributed testing. However, Katalon Studio team is working on analytics tool to support Katalon Studio's reports.

### Q: I'm looking for a certain feature. How can I find out if Katalon Studio has it? 
-----------------------------------------------------------------------------------

Please refer to [Resources](/katalon-studio/tutorials/) section of Katalon Studio website. If you can't find what you are looking for please submit your feature request via our [support channel](https://forum.katalon.com/).

### Q: Can I handle the execution flow in case of failure?
------------------------------------------------------

Please refer to Katalon Studio documentation on [how to handle execution flow](https://docs.katalon.com/katalon-studio/docs/failure-handling.html).

### Q: Does Katalon Studio support testing on flex application?
-----------------------------------------------------------

Katalon Studio has built-in keywords to work with image elements. Users can leverage this to automate Flex application. In case of custom keywords are required, Katalon Studio also allows the users to create custom keywords. Please refer to [https://www.katalon.com/resources-center/tutorials/create-custom-keyword/](/katalon-studio/tutorials/create-custom-keyword/)

### Q: Can I execute test steps on an opened browser?
-------------------------------------------------

Yes. Please refer to [this guide](/display/KD/Execute+a+Test+Case+or+a+Test+Suite#ExecuteaTestCaseoraTestSuite-ExecutefromaSelectedStep).

### Q: Is there any roadmap available for future features?
------------------------------------------------------

Katalon Studio's roadmap is driven by our target to be the top automation tool and addressing users' feedback.

### Q: Can I apply data-driven testing in Katalon Studio?
-----------------------------------------------------

Yes. Katalon Studio supports data-driven testing. Please visit [https://www.katalon.com/resources-center/tutorials/data-driven-testing/](/katalon-studio/tutorials/data-driven-testing/).

### Q: Can I apply performance and load testing with Katalon Studio?
----------------------------------------------------------------

Unfortunately, Katalon Studio does not support performance and load testing yet.

### Q: Can I debug my current test case when it is executing?
---------------------------------------------------------

Yes. Katalon Studio allows users to debug a test case while it is executing. Simply follow [this guide](/display/KD/Debug+Automation+Test).

### Q: Can I use Katalon as a replacement/alternative to Selenium IDE? 
-------------------------------------------------------------------

Katalon Studio is a test automation solution that leverages Selenium's core engine. Although it uses several Selenium functionalities, it is not simply a Selenium wrapper. This [document](https://www.katalon.com/resources-center/blog/katalon-studio-vs-selenium-based-open-source-frameworks/) offers a detailed comparison of Katalon and Selenium-based open-source frameworks, focusing on key features such as target users, deployment, test management and scripting language support, performance, usability, and integration with other tools. A large number of users have been successfully moved from Selenium IDE to Katalon Studio.

### Q: Can Katalon Studio automate desktop application? 
----------------------------------------------------

Currently, Katalon Studio only supports Web, Mobile, and API automation testing. Testing desktop applications is not our focus for now, so it is not automatable using Katalon Studio.
