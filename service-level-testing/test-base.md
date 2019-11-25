# Test Base

## Purpose

* We can have a test file designated as before/after suite or before/after csv
* Before suite: test file 

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

![](../.gitbook/assets/image%20%2862%29.png)



