# Api



* Handles database connection info
* ```text
  #UriPath= https://de-qa.azurefd.net
  api.uriPath = http://45.76.245.149:1337
  api.parallelTestcasePath = "../apiTestData/testcases/"
  api.actionTestcasePath = "../apiTestData/keywords/action/"
  api.templaePath=""

  # set file name to run single csv file
  api.testCaseFile = ""
  api.testCase = ""

  # timeout in seconds
  api.timeout.connect.seconds = 5

  # will retry the request, expecting to pass validation for duration of specified duration in seconds
  api.timeout.validation.isEnabled = false
  api.timeout.validation.seconds = 2
  ```



  **Parameters**

  <table>
    <thead>
      <tr>
        <th style="text-align:left">parameters</th>
        <th style="text-align:left">description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:left">api.uriPath</td>
        <td style="text-align:left">base uri path for the api requests</td>
      </tr>
      <tr>
        <td style="text-align:left">api.parallelTestcasePath</td>
        <td style="text-align:left">the location of the test case csv files for parallel runs</td>
      </tr>
      <tr>
        <td style="text-align:left">api.actionTestCasePath</td>
        <td style="text-align:left">the location of the test case csv files for external csv files.</td>
      </tr>
      <tr>
        <td style="text-align:left">api.templatePath</td>
        <td style="text-align:left">file path for test templates. This could include xml files to be used
          for request body of api calls</td>
      </tr>
      <tr>
        <td style="text-align:left">api.testCaseFile</td>
        <td style="text-align:left">test case file name for running a single csv file. Located at either parallelTestcasePath
          or sequentialTestcasePath, depending on what type of tests are executed</td>
      </tr>
      <tr>
        <td style="text-align:left">api.testCase</td>
        <td style="text-align:left">single test case in a csv file to run. testCaseFile must be set for this
          to be valid</td>
      </tr>
      <tr>
        <td style="text-align:left">api.timeout.connect.seconds</td>
        <td style="text-align:left">timeout duration for connecting to the api url</td>
      </tr>
      <tr>
        <td style="text-align:left">api.timeout.validation.enabled</td>
        <td style="text-align:left">
          <p>Enable timeout validation. Timeout validation will retry tests the api
            test until the validation requirement is met, within the duration specified.</p>
          <p></p>
          <p>Can be set in CSV file as well, in the RestFulAPI Interface, Option column.</p>
          <ul>
            <li>will override value set in Config file</li>
          </ul>
          <p>eg. WAIT_FOR_RESPONSE:2</p>
          <ul>
            <li>2 is the number of seconds to wait for the validation requirement to be
              met.</li>
          </ul>
          <p>To disable in CSV file, set in Option column:</p>
          <p>NO_VALIDATION_TIMEOUT</p>
        </td>
      </tr>
      <tr>
        <td style="text-align:left">api.timeout.validation.seconds</td>
        <td style="text-align:left">Max wait time for validation. Timeout validation will retry tests the
          api test until the validation requirement is met, within the duration specified.</td>
      </tr>
      <tr>
        <td style="text-align:left"></td>
        <td style="text-align:left"></td>
      </tr>
    </tbody>
  </table>

