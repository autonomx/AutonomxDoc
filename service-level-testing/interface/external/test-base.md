# Test Base

## Purpose

* We can have a test file designated as before/after suite or before/after csv
* Before suite: test file run once before suite
* After suite: test file run once after suite
* Before test file: test file run before each csv test file
* After test file: test file run after each csv test file
* Config values stores using &lt;$variable&gt; syntax, will propagate to the test file
  * Value set at before suite/test file will be available for the test
  * eg. can authenticate once in before suite and use the token for the entire test run, override as needed per test

## Configuration

* At Config file:

  * automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨resources⁩ ▸ properties ▸ apiConfig.property
  * ```text
    api.base.path = "../apiTestData/keywords/testBase/"
    api.base.before.testfile = "TestCases_RunBefore.csv"
    api.base.after.testfile = "TestCases_RunAfter.csv"
    api.base.before.suite = "TestCases_RunBeforeSuite.csv"
    api.base.after.suite = "TestCases_RunAfterSuite.csv"
    ```

  * | parameters | description |
    | :--- | :--- |
    | api.base.path | base directory for before/after test suite/test |
    | api.base.before.testfile | before test csv file |
    | api.base.after.testfile | after test csv file |
    | api.base.before.suite | before test suite file |
    | api.base.after.suite | after test suite file |

* Test base location:

![](../../../.gitbook/assets/image%20%2897%29.png)

## Override Values

* We can override the default before/after test file values in the csv file 
* We can also disable them in the test file
* Example
  * We set:
    * **Interface**: External
    * **Method**: beforeCsvFile:none; afterCsvFile:none;
    * or, we can set beforeCsvFile:beforeFile2.csv; afterCsvFile:afterFile2.csv

![](../../../.gitbook/assets/image%20%2828%29.png)

