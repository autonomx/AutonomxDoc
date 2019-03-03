# Api



* Handles database connection info
* ```text
  #UriPath= https://de-qa.azurefd.net
  api.uriPath = http://45.76.245.149:1337
  api.parallelTestcasePath = "../apiTestData/testcases/"
  api.sequentialTestcasePath = "../apiTestData/testcases/"
  api.templaePath=""

  # set file name to run single csv file
  api.testCaseFile = ""
  api.testCase = ""
  ```



  **Parameters**

  | parameters | description |
  | :--- | :--- |
  | api.uriPath | base uri path for the api requests |
  | api.parallelTestcasePath | the location of the test case csv files for parallel runs |
  | api.sequentialTestcasePath | the location of the test case csv files for sequential runs |
  | api.templatePath | file path for  test templates. This could include xml files to be used for request body of api calls |
  | api.testCaseFile | test case file name for running a single csv file. Located at either parallelTestcasePath or sequentialTestcasePath, depending on what type of tests are executed |
  | api.testCase | single test case in a csv file to run. testCaseFile must be set for this to be valid |
  |  |  |

