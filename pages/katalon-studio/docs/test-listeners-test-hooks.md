---
title: "Test Listeners (Test Hooks)"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-listeners-test-hooks.html
redirect_from:
    - "/x/7zhO/"
    - "/katalon-studio/docs/test-listeners-test-hooks/"
description:
---
> Available since Katalon Studio v[5.2](/display/KD/Version+5.2)

_Test Listeners_ is a new feature of Katalon Studio introduced since version 5.2. It is a great and flexible way to help you extend your current testing flows. In simple term, _Test Listeners_ are test steps that created based on your own criterias and will be executed when the condition is matched. The follwing guide contains all useful information to get you started with _Test Listeners_.

Manage Test Listeners
---------------------

Test Listeners can be treated the same as other test artifacts, which means you can perform all basic operations such as **create, copy/cut, rename or delete**. We will not talk much about these actions except **Create** one. Test Listeners locate in Test Explorer pane. To create **New** Test Listener:

**Right click** on Test Listeners in **Tests Explorer**. Select **New** \> **New Test Listener**.

![](../../images/katalon-studio/docs/test-listeners-test-hooks/image2017-12-5-103A353A3.png)

When creating a new test listener, you can see there are 4 options in **New Test Listener** dialog:

![](../../images/katalon-studio/docs/test-listeners-test-hooks/image2017-12-5-103A353A38.png)

| Generate sample Before Test Case method | A sample listener will be generated before every test case starts. |
| --- | --- |
| Generate sample After Test Case method | A sample listener will be generated **after every** test case ends. |
| Generate sample Before Test Suite method | A sample listener will be generated **before every** test suite starts. |
| Generate sample After Test Suite method | A sample listenerwill be generated **after every** test suite ends. |

You can select **one** or **multiple** options. Once finished, Katalon Studio will generate a sample template accordingly:

Expand source

```groovy
class NewTestListener {
	/**
	 * Executes before every test case starts.
	 * @param testCaseContext related information of the executed test case.
	 */
	@BeforeTestCase
	def sampleBeforeTestCase(TestCaseContext testCaseContext) {
		println testCaseContext.getTestCaseId()
		println testCaseContext.getTestCaseVariables()
	}

	/**
	 * Executes after every test case ends.
	 * @param testCaseContext related information of the executed test case.
	 */
	@AfterTestCase
	def sampleAfterTestCase(TestCaseContext testCaseContext) {
		println testCaseContext.getTestCaseId()
		println testCaseContext.getTestCaseStatus()
	}

	/**
	 * Executes before every test suite starts.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	@BeforeTestSuite
	def sampleBeforeTestSuite(TestSuiteContext testSuiteContext) {
		println testSuiteContext.getTestSuiteId()
	}
	/**
	 * Executes after every test suite ends.
	 * @param testSuiteContext: related information of the executed test suite.
	 */
	@AfterTestSuite
	def sampleAfterTestSuite(TestSuiteContext testSuiteContext) {
		println testSuiteContext.getTestSuiteId()
	}
}
```

As you can see from the code above, a sample generated template has already added necessary annotations, libraries and supported functions to help you extend your current testing flows to a higher level. 

> *   There is **no limit** on Test Listeners. Users can create as **many** as preferred.
> *   If you have **more** than **one** Test Listener class, the classes themselves are instantiated in Katalon storage in alphabetically order, only then are the individual listener methods executed **top-down**.
> *   Execution **status** of any steps **within** Test Listers will **NOT** affect the **overall status** of the executed test case (e.g: if you have a FAILED output in any of your Test Listeners but final status of the executed test case is PASSED, then test case's status will be PASSED).

Visualized Workflow
-------------------

To not get confused with [setUp and tearDown](/display/Documentation/Define+method#Definemethod-SetUp()andTearDown()inManualview), the visualized workflows below demonstrate how Katalon Studio will execute test automation project with/without setUp and tearDown methods.

![](../../images/katalon-studio/docs/test-listeners-test-hooks/image2018-9-27-123A333A20.png)

### Example

Define multiple environments as different Global Variables by using Test Listeners. Simply change the environment variable to the preferred environment before test case execution.

```groovy
/**
 * Executes before every test case starts.
 * @param testCaseContext related information of the executed test case.
 */

@BeforeTestCase
def sampleBeforeTestCase(TestCaseContext testCaseContext) {
    if (GlobalVariable.gl_Environment == 'Local') {
        GlobalVariable.gl_Url = 'localhost'
    } else if (GlobalVariable.gl_Environment == 'Staging') {
        GlobalVariable.gl_Url = 'staging'
    }
}
```