# Restful API

## Purpose

* We can run restful api tests through csv files
* A single row in csv will have request, response and validation
* This allows for writing large number of tests quickly covering the requirements

## Implementation

* We can set the values in the csv file as follows:

![apiTestData/testCases/TestTestCases\_database.csv](<../../../.gitbook/assets/image (35).png>)

* Following example gets authentication token and calls create user api

| TestSuite | TestCaseID    | RunFlag | Description                                | InterfaceType | UriPath                                                  | ContentType                       | Method | Option | RequestHeader                             | TemplateFile | RequestBody                                                                                                                                                                         | OutputParam                                                                                   | RespCodeExp | ExpectedResponse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | TcComments |
| --------- | ------------- | ------- | ------------------------------------------ | ------------- | -------------------------------------------------------- | --------------------------------- | ------ | ------ | ----------------------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| TsUser    | getAdminToken | Y       | Retrieve a token from Token GeneratorSQLDB | RESTfulAPI    | /auth/local                                              | application/json                  | Post   |        |                                           |              | <p>{</p><p>"identifier": "&#x3C;@adminUserName>",</p><p>"password": "&#x3C;@adminUserPassword>"</p><p>}</p>                                                                         | <p>user.role.id:&#x3C;$roles>; jwt:&#x3C;$accessTokenAdmin>;</p><p>user.id:&#x3C;$userId></p> | 200         | <p>{</p><p>       "user": {</p><p>        "username":  "&#x3C;@adminUserName>",</p><p>        "email": "autouser313@gmail.com",</p><p>        "provider": "local",</p><p>        "confirmed": true,</p><p>        "blocked": null</p><p>    }</p><p>}</p><p>&#x26;&#x26;</p><p>_VERIFY_JSON_PART_</p><p>"user.username":1: hasItems("&#x3C;@adminUserName>");</p><p>"user.email":1:: equalTo("autouser313@gmail.com");</p><p>"user.provider":1: isNotEmpty;</p><p>"user.role.name":1: contains("Administrator")</p><p>&#x26;&#x26; </p><p>_NOT_EMPTY_</p> |            |
| TsUser    | createUser    | Y       | create user                                | RESTfulAPI    | /content-manager/explorer/user/?source=users-permissions | application/x-www-form-urlencoded | Post   |        | Authorization: Bearer <@accessTokenAdmin> |              | <p>{</p><p>"username":"zzz_test&#x3C;@_TIME16>",</p><p>"email":"testuser+&#x3C;@_TIME16>@gmail.com",</p><p>"password":"password&#x3C;@_TIME16>",</p><p>"confirmed":true</p><p>}</p> | id:<$userId>                                                                                  | 201         | <p>{</p><p>    "provider": "local",</p><p>    "blocked": null</p><p>}</p><p>&#x26;&#x26;</p><p>_VERIFY_JSON_PART_</p><p>"id": isNotEmpty</p>                                                                                                                                                                                                                                                                                                                                                                                                              |            |

## Column Values

* **TestSuite**: The unique name of the test series
* ****[**TestCaseID**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/testcaseid): Unique test id for each test
* **RunFlag**: set 'Y' to run the test. Set 'N' to skip.
* **Description**: Short description of the test.
* **InterfaceType**: RESTfulAPI
* ****[**UriPath**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/uripath):&#x20;
  * URI path append to the base URI defined in apiConfig.property
  * Full URL path can be used. If value starts with "http", then the url will not be appended to the base URI. eg. http://www.site.com/api/login
* ****[**ContentType**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/contenttype): The content type of the request
* Method:  type of call made: POST, GET, PUT, DELETE
* **Option**:&#x20;
* ****[**RequestHeaders**](../../test-file/header.md): The header values, separated by ";".&#x20;
  * eg. Authorization: Bearer <@accessTokenAdmin>
* **TemplateFile**:&#x20;
* ****[**RequestBody**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/requestbody): The request body goes here. We can use values set in api config file through the syntax: <@variable>. eg. <@username>, where username="admin" defined in apiConfig.property file.
* ****[**OutputParams**](../../test-file/outputparam.md): We can store response values into variables defined here. The variables will then be available for other tests.
  * &#x20;Syntax: <$variable>. eg. NAME:1:<$name>. the variable "name" can then be access through syntax <@name> in subsequent tests
* **RespCodeExp**: expected response code value from the api call
* **ExpectedResponse**: Verification of the response goes here. More description in the interface sections.
* **TcComment:** comment for the tests. eg. disable for such and such reasons.

