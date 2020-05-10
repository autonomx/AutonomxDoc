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

![](../.gitbook/assets/image%20%2851%29.png)

* **TestSuite**: The name of the test series
* \*\*\*\*[**TestCaseID**](https://docs.autonomx.io/service-level-testing/test-file/testcaseid): Unique test id for each test
* **RunFlag**: set 'Y' to run the test. Set 'N' to skip.
* **Description**: Short description of the test.
* **InterfaceType**: The type of testing. Options: RESTfulAPI, SQL. Additional testing types can be added.
* \*\*\*\*[**UriPath**](https://docs.autonomx.io/service-level-testing/test-file/uripath): The uri path appended to the based uri in the config folder. Applicable to rest api tests.
* \*\*\*\*[**ContentType**](https://docs.autonomx.io/service-level-testing/test-file/contenttype): Type of request. Applicable to rest api tests.
* \*\*\*\*[**Method**](https://docs.autonomx.io/service-level-testing/test-file/method): For Rest API: type of call made: POST, GET, PUT, DELETE
* \*\*\*\*[**Option**](https://docs.autonomx.io/service-level-testing/test-file/option): Additional options to be added for the interface type. Currently, API and SQL do not make use of it.
* \*\*\*\*[**RequestHeaders**](https://docs.autonomx.io/service-level-testing/test-file/header): For API: headers values are added here. The format is key:value separated by ";". eg. Authorization:somekey
* **TemplateFile**: template file to be used for requests. 
* \*\*\*\*[**RequestBody**](https://docs.autonomx.io/service-level-testing/test-file/requestbody): For API: the request goes here. For sql: the query goes here. We can use values set in api config file through the syntax: &lt;@variable&gt;. eg. &lt;@username&gt;, where username="admin" defined in apiConfig.property file.
* \*\*\*\*[**OutputParams**](https://docs.autonomx.io/service-level-testing/test-file/outputparam): We can store response values into variables defined here. The variables will then be available for other tests. Syntax: &lt;$variable&gt;. eg. userid=&lt;$adminUserId&gt;. the variable "adminUserId" can then be access by &lt;@adminUserId&gt; in subsequent tests
* **RespCodeExp**: For API: the expected response code. eg. 200
* \*\*\*\*[**ExpectedResponse**](https://docs.autonomx.io/service-level-testing/test-file/expectedresponse): Verification of the response goes here. More description in the interface sections.
* **TcComment:** comment for the tests. eg. disable for such and such reasons.

## Service Tests Location

* Service tests are located at: apiTestData -&gt; testCases
* We can specify custom location through apiTestData -&gt; apiConfig.property 
* {% code title="apiConfig.properties" %}
  ```text
  api.parallelTestcasePath = "../apiTestData/testCases/"
  ```
  {% endcode %}
* The location is from the root of the project \( where pom.xml file is located \)

## Writing Service Tests

* Writing service tests involved setting the proper values at the csv column

### Restful Api Tests

* Configuration: RestApi base url and other config info can be found at [RestApi config section](https://docs.autonomx.io/configuration/config-properties/apiconfig/api)
* See [Restful Api](https://docs.autonomx.io/service-level-testing/interface/rest-api) section for writing tests
* Third party applications can be used to test out the Rest Api calls before adding them to the csv file, such as [Postman](https://www.postman.com/). 
  * Same values can be copied over from postman to csv test file

### Database Tests

* Configuration: Database connection info can be found at the [database config section](https://docs.autonomx.io/configuration/config-properties/apiconfig/database)
* See [Database testing](https://docs.autonomx.io/service-level-testing/interface/database) section for writing tests

### RabbitMQ Tests

* Configuration: RMQ connection info configuration can be found at [RabbitMQ configuration section](https://docs.autonomx.io/configuration/config-properties/apiconfig/rabbitmq)
* See [RabbitMQ section](https://docs.autonomx.io/service-level-testing/interface/rabbit-mq) for writing tests

### Kafka

* Configuration: Kafka connection info configuration can be found at [Kafka configuration section](https://docs.autonomx.io/configuration/config-properties/apiconfig/kafka)
* See [Kafka section](https://docs.autonomx.io/service-level-testing/interface/kafka) for writing tests

### Service Bus

* Configuration: Service Bus connection info configuration can be found at [Service Bus configuration section](https://docs.autonomx.io/configuration/config-properties/apiconfig/service-bus)
* See [Service Bus](https://docs.autonomx.io/service-level-testing/interface/service-bus) section for writing tests

## Running Service Tests

* We can run the service tests from apiTestData -&gt; runner -&gt; &lt;os&gt; -&gt; apiRunner file

![](../.gitbook/assets/image%20%2815%29.png)

* We can also run the service test using the test suite

![](../.gitbook/assets/image%20%2897%29.png)



