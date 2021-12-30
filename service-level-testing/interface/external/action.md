# Action

## Purpose

* Actions allow for calling external test file within the current test
* Variables saved through <$variable> syntax will be passed on to the current test

## Config

* We can set the location value in the apiConfig.properties file&#x20;
* ```
  api.actionTestcasePath = "../apiTestData/keywords/action/" 
  ```
* We can store the test files in that location

## Location

* We can place any test file in "action" folder and call them directly from our test case files
*

![](<../../../.gitbook/assets/image (97).png>)

## Example

![](<../../../.gitbook/assets/image (83).png>)

* We set:
  * **Interface**: EXTERNAL
  * **Method**: action:createDeleteUser.csv;&#x20;
* In this example, we are calling createDeleteUser.csv file during test
* We can call multiple files, separated by ";"



