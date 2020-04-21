# TestCaseID

## Test Case Id

* TestCaseID column is unique identifier of the test within a test csv file
* Test case Id must be 
  * Unique
  * Without Space
* eg. createNewUser

## Test Step \( Combining Tests \)

* Tests can be combined to form single test
* To accomplish this add postfix "\_step" + number to the test id
  * eg.
  * ```text
    createNewUser_step1
    createNewUser_step2
    createNewUser_step3
    ```
* All these 3 test rows will be combined into a single test

