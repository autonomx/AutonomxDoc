# RestFul Api

![](../../../.gitbook/assets/image%20%28123%29.png)

* Handles Restful Api connection and configuration info
* Located **automation -&gt; resources -&gt; properties -&gt; environment -&gt; dev.property or qa.property**
* ```text
  # global configuration
  service.csv.separator = ","

  api.uriPath = http://demo.autonomx.io

  api.parallelTestcasePath = "../apiTestData/testCases/"
  api.csv.include.subdir = false

  api.actionTestcasePath = "../apiTestData/keywords/action/"
  api.templatePath = "../apiTestData/templates/"
  api.templateDataFile = "../apiTestData/templates/data/"

  api.base.path = "../apiTestData/keywords/testBase/"
  api.base.before.testfile = "TestCases_RunBefore.csv"
  api.base.after.testfile = "TestCases_RunAfter.csv"
  api.base.before.suite = "TestCases_RunBeforeSuite.csv"
  api.base.after.suite = "TestCases_RunAfterSuite.csv"

  # timeout in seconds for api calls to return response
  service.response.timeout.seconds = 60

  # will retry the request, expecting to pass validation for duration of specified duration in seconds
  service.timeout.validation.isEnabled = false
  service.timeout.validation.seconds = 2
  service.timeout.validation.delay.between.attempt.seconds = 3
  service.retry.count = 0
  service.retry.after.seconds = 0

  # set file name to run single csv file
  api.testCaseFile = ""
  api.testCase = ""

  # api url encoding
  api.encoding.url = true
  api.encoding.parameter = false
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
        <td style="text-align:left">api.csv.include.subdir</td>
        <td style="text-align:left">option to read test cases from the sub directories specified by api.parallelTestcasePath</td>
      </tr>
      <tr>
        <td style="text-align:left">api.actionTestCasePath</td>
        <td style="text-align:left">the location of the test case csv files for external csv files.</td>
      </tr>
      <tr>
        <td style="text-align:left">api.templatePath</td>
        <td style="text-align:left">file path for test templates. This could include xml files to be used
          for request body of api calls. See <a href="https://docs.autonomx.io/service-level-testing/test-file/requestbody#templates">template</a> section</td>
      </tr>
      <tr>
        <td style="text-align:left">api.templateDataFile</td>
        <td style="text-align:left">file path for template data directory. See <a href="https://docs.autonomx.io/service-level-testing/test-file/requestbody#data-file">template data file</a>
        </td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />api.base.path</td>
        <td style="text-align:left">See <a href="https://docs.autonomx.io/service-level-testing/interface/external/test-base">Test Base </a>section</td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />api.base.before.testfile</td>
        <td style="text-align:left">See <a href="https://docs.autonomx.io/service-level-testing/interface/external/test-base">Test Base </a>section</td>
      </tr>
      <tr>
        <td style="text-align:left">api.base.after.testfile</td>
        <td style="text-align:left">See <a href="https://docs.autonomx.io/service-level-testing/interface/external/test-base">Test Base </a>section</td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />api.base.before.suite</td>
        <td style="text-align:left">See <a href="https://docs.autonomx.io/service-level-testing/interface/external/test-base">Test Base </a>section</td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />api.base.after.suite</td>
        <td style="text-align:left">See <a href="https://docs.autonomx.io/service-level-testing/interface/external/test-base">Test Base </a>section</td>
      </tr>
      <tr>
        <td style="text-align:left">api.testCaseFile</td>
        <td style="text-align:left">test case file name for running a single csv file</td>
      </tr>
      <tr>
        <td style="text-align:left">api.testCase</td>
        <td style="text-align:left">single test case in a csv file to run. testCaseFile must be set for this
          to be valid</td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />service.response.timeout.seconds</td>
        <td style="text-align:left">timeout duration for getting response from rest api call</td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />service.timeout.validation.isEnabled</td>
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
            <li>
              <p>Validation requirement set at columns:</p>
              <p>RespCodeEx, ExpectedResponse</p>
            </li>
          </ul>
          <p>To disable in CSV file, set in Option column:</p>
          <p>NO_VALIDATION_TIMEOUT</p>
        </td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />service.timeout.validation.seconds</td>
        <td style="text-align:left">Max wait time for validation. Timeout validation will retry tests the
          api test until the validation requirement is met, within the duration specified.</td>
      </tr>
      <tr>
        <td style="text-align:left">
          <p>
            <br />service.timeout.validation.</p>
          <p>delay.between.attempt.seconds</p>
        </td>
        <td style="text-align:left">Delay in seconds between each try attempt.</td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />service.retry.count</td>
        <td style="text-align:left">
          <p>Retry count for Rest api calls. If test fails, it will retry.</p>
          <p>Choose either service.timeout.validation or this option</p>
        </td>
      </tr>
      <tr>
        <td style="text-align:left">
          <br />service.retry.after.seconds</td>
        <td style="text-align:left">Seconds to wait between each retry count</td>
      </tr>
    </tbody>
  </table>

