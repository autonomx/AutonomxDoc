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

![](../.gitbook/assets/image%20%2815%29.png)

* TestSuite: The name of the test series
* TestCaseID: Unique test id for each test
* RunFlag: set 'Y' to run the test. Set 'N' to skip.
* Description: Short description of the test.
* InterfaceType: The type of testing. Options: RESTfulAPI, SQL. Additional testing types can be added.
* UriPath: The uri path appended to the based uri in the config folder. Applicable to rest api tests.
* ContentType: Type of request. Applicable to rest api tests.
* Method: For Rest API: type of call made: POST, GET, PUT, DELETE
* Option:
* RequestHeaders:
* TemplateFile:
* RequestBodyL
* OutputParams:
* RespCodeExp:
* ExpectedResponse:
* TcComment:

