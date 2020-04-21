# Restful API

## Purpose

* We can run restful api tests through csv files
* A single row in csv will have request, response and validation
* This allows for writing large number of tests quickly covering the requirements

## Implementation

* We can set the values in the csv file as follows:

![apiTestData/testCases/TestTestCases\_database.csv](../../../.gitbook/assets/image%20%2858%29.png)

* Following example gets authentication token and calls create user api

<table>
  <thead>
    <tr>
      <th style="text-align:left">TestSuite</th>
      <th style="text-align:left">TestCaseID</th>
      <th style="text-align:left">RunFlag</th>
      <th style="text-align:left">Description</th>
      <th style="text-align:left">InterfaceType</th>
      <th style="text-align:left">UriPath</th>
      <th style="text-align:left">ContentType</th>
      <th style="text-align:left">Method</th>
      <th style="text-align:left">Option</th>
      <th style="text-align:left">RequestHeader</th>
      <th style="text-align:left">TemplateFile</th>
      <th style="text-align:left">RequestBody</th>
      <th style="text-align:left">OutputParam</th>
      <th style="text-align:left">RespCodeExp</th>
      <th style="text-align:left">ExpectedResponse</th>
      <th style="text-align:left">TcComments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">TsUser</td>
      <td style="text-align:left">getAdminToken</td>
      <td style="text-align:left">Y</td>
      <td style="text-align:left">Retrieve a token from Token GeneratorSQLDB</td>
      <td style="text-align:left">RESTfulAPI</td>
      <td style="text-align:left">/auth/local</td>
      <td style="text-align:left">application/json</td>
      <td style="text-align:left">Post</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p>{</p>
        <p>&quot;identifier&quot;: &quot;&lt;@adminUserName&gt;&quot;,</p>
        <p>&quot;password&quot;: &quot;&lt;@adminUserPassword&gt;&quot;</p>
        <p>}</p>
      </td>
      <td style="text-align:left">
        <p>user.role.id:&lt;$roles&gt;; jwt:&lt;$accessTokenAdmin&gt;;</p>
        <p>user.id:&lt;$userId&gt;</p>
      </td>
      <td style="text-align:left">200</td>
      <td style="text-align:left">
        <p>{</p>
        <p>&quot;user&quot;: {</p>
        <p>&quot;username&quot;: &quot;&lt;@adminUserName&gt;&quot;,</p>
        <p>&quot;email&quot;: &quot;autouser313@gmail.com&quot;,</p>
        <p>&quot;provider&quot;: &quot;local&quot;,</p>
        <p>&quot;confirmed&quot;: true,</p>
        <p>&quot;blocked&quot;: null</p>
        <p>}</p>
        <p>}</p>
        <p>&amp;&amp;</p>
        <p>_VERIFY_JSON_PART_</p>
        <p>&quot;user.username&quot;:1: hasItems(&quot;&lt;@adminUserName&gt;&quot;);</p>
        <p>&quot;user.email&quot;:1:: equalTo(&quot;autouser313@gmail.com&quot;);</p>
        <p>&quot;user.provider&quot;:1: isNotEmpty;</p>
        <p>&quot;user.role.name&quot;:1: contains(&quot;Administrator&quot;)</p>
        <p>&amp;&amp;</p>
        <p>_NOT_EMPTY_</p>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">TsUser</td>
      <td style="text-align:left">createUser</td>
      <td style="text-align:left">Y</td>
      <td style="text-align:left">create user</td>
      <td style="text-align:left">RESTfulAPI</td>
      <td style="text-align:left">/content-manager/explorer/user/?source=users-permissions</td>
      <td style="text-align:left">application/x-www-form-urlencoded</td>
      <td style="text-align:left">Post</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">Authorization: Bearer &lt;@accessTokenAdmin&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p>{</p>
        <p>&quot;username&quot;:&quot;zzz_test&lt;@_TIME16&gt;&quot;,</p>
        <p>&quot;email&quot;:&quot;testuser+&lt;@_TIME16&gt;@gmail.com&quot;,</p>
        <p>&quot;password&quot;:&quot;password&lt;@_TIME16&gt;&quot;,</p>
        <p>&quot;confirmed&quot;:true</p>
        <p>}</p>
      </td>
      <td style="text-align:left">id:&lt;$userId&gt;</td>
      <td style="text-align:left">201</td>
      <td style="text-align:left">
        <p>{</p>
        <p>&quot;provider&quot;: &quot;local&quot;,</p>
        <p>&quot;blocked&quot;: null</p>
        <p>}</p>
        <p>&amp;&amp;</p>
        <p>_VERIFY_JSON_PART_</p>
        <p>&quot;id&quot;: isNotEmpty</p>
      </td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>## Column Values

* **TestSuite**: The name of the test series
* \*\*\*\*[**TestCaseID**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/testcaseid): Unique test id for each test
* **RunFlag**: set 'Y' to run the test. Set 'N' to skip.
* **Description**: Short description of the test.
* **InterfaceType**: RESTfulAPI
* \*\*\*\*[**UriPath**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/uripath): 
  * URI path append to the base URI defined in apiConfig.property
  * Full URL path can be used. If value starts with "http", then the url will not be appended to the base URI. eg. http://www.site.com/api/login
* \*\*\*\*[**ContentType**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/contenttype): The content type of the request
* Method:  type of call made: POST, GET, PUT, DELETE
* **Option**: 
* \*\*\*\*[**RequestHeaders**](test-file/header.md): The header values, separated by ";". 
  * eg. Authorization: Bearer &lt;@accessTokenAdmin&gt;
* **TemplateFile**: 
* \*\*\*\*[**RequestBody**](https://docs.autonomx.io/service-level-testing/interface/rest-api/test-file/requestbody): The request body goes here. We can use values set in api config file through the syntax: &lt;@variable&gt;. eg. &lt;@username&gt;, where username="admin" defined in apiConfig.property file.
* \*\*\*\*[**OutputParams**](test-file/outputparam.md): We can store response values into variables defined here. The variables will then be available for other tests.
  *  Syntax: &lt;$variable&gt;. eg. NAME:1:&lt;$name&gt;. the variable "name" can then be access through syntax &lt;@name&gt; in subsequent tests
* **RespCodeExp**: expected response code value from the api call
* **ExpectedResponse**: Verification of the response goes here. More description in the interface sections.
* **TcComment:** comment for the tests. eg. disable for such and such reasons.



