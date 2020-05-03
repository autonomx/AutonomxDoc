# UI Testing

## UI Testing

* UI tests is compromised of Web and Mobile \( Android, iOS, Win\) tests

## Writing UI Tests

* Writing tests involves setting up 
  * Properties file
  * [Test Data](https://docs.autonomx.io/ui-testing/test-data) \(optional\)
  * [Test Panel](https://docs.autonomx.io/ui-testing/test-panel)
  * [Test Case](https://docs.autonomx.io/ui-testing/test-case)

### Set Test Data \( Optional \)

* If test case requires data, such as user information for login, we can add test data using 3 different methods:
  * [Data Provider](https://docs.autonomx.io/ui-testing/test-data/data-provider): For running same test cases with different data sets
  * [Csv Test Data](https://docs.autonomx.io/ui-testing/test-data/csv-test-data): Test data stored in external csv file
    * Advantage:
      * External storage of data sets
      * Easier to create and group
    * Disadvantage: Less flexible than setting data programmatically 
  * [Test Object](https://docs.autonomx.io/ui-testing/test-data/test-object): Test data stored programmatically in class file
    * Advantage: 
      * Flexible to manipulate data as required 
    * Disadvantage: 
      * Data is internal in code

### Set Test Panel

* Using page object model, we specify page info in test panel class
* For each page, panel,  or feature in our application, we can create a panel
* Panel class includes 2 sections:
  * [Locator](https://docs.autonomx.io/ui-testing/test-panel/locators): Specify all page element locators in this section. eg. username field, password field
  * [Action](https://docs.autonomx.io/ui-testing/test-panel/actions): All methods/actions associated with page in this section. eg. login method

### Write Test Case

* 
