# Service Level Testing

## Purpose

* Service level testing encompasses any backend, service, api, and database level testing
* These tests are compromised of: request, response, and verification
* Since these follow the same template, we have opted for using csv file to write the tests
* 1 line 1 complete test 
* This allows us to add lots of tests to each csv file, covering large number of permutations
* This falls in line with the [pyramid of testing](https://app.gitbook.com/@ehsan-matean/s/autonomx/testing-tips/pyramid-of-testing)

## Format

* The csv files are based on template with the following columns

![](../.gitbook/assets/image%20%2820%29.png)

* **TestSuite**: The name of the test series
* **TestCaseID**: Unique test id for each test
* **RunFlag**: set 'Y' to run the test. Set 'N' to skip.
* **Description**: Short description of the test.
* **InterfaceType**: The type of testing. Options: RESTfulAPI, SQL. Additional testing types can be added.
* **UriPath**: The uri path appended to the based uri in the config folder. Applicable to rest api tests.
* **ContentType**: Type of request. Applicable to rest api tests.
* **Method**: For Rest API: type of call made: POST, GET, PUT, DELETE
* **Option**: Additional options to be added for the interface type. Currently, API and SQL do not make use of it.
* **RequestHeaders**: For API: headers values are added here. The format is key:value separated by ";". eg. Authorization:somekey
* **TemplateFile**: template file to be used for requests. 
* **RequestBody**: For API: the request goes here. For sql: the query goes here. We can use values set in api config file through the syntax: &lt;@variable&gt;. eg. &lt;@username&gt;, where username="admin" defined in apiConfig.property file.
* **OutputParams**: We can store response values into variables defined here. The variables will then be available for other tests. Syntax: &lt;$variable&gt;. eg. userid=&lt;$adminUserId&gt;. the variable "adminUserId" can then be access by &lt;@adminUserId&gt; in subsequent tests
* **RespCodeExp**: For API: the expected response code. eg. 200
* **ExpectedResponse**: Verification of the response goes here. More description in the interface sections.
* **TcComment:** comment for the tests. eg. disable for such and such reasons.

## Service Tests Location

* Service tests are located at: apiTestData -&gt; testCases
* We can specify custom location through apiTestData -&gt; apiConfig.property 
* {% code-tabs %}
  {% code-tabs-item title="apiConfig.properties" %}
  ```text
  api.parallelTestcasePath = "../apiTestData/testCases/"
  ```
  {% endcode-tabs-item %}
  {% endcode-tabs %}
* The location is from the root of the project \( where pom.xml file is located \)

## Running Service Tests

* We can run the service tests from apiTestData -&gt; runner -&gt; &lt;os&gt; -&gt; apiRunner file

![](../.gitbook/assets/image%20%286%29.png)

* We can also run the test directly located at module: test.module.service.tests: ServiceTestRunner.java

![](../.gitbook/assets/image%20%2823%29.png)



