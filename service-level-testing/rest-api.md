# Restful Api

## Purpose

* We can run restful api tests through csv files
* A single row in csv will have request, response and validation
* This allows for writing large number of tests quickly covering the requirements

## Implementation

* We can set the values in the csv file as follows:

![apiTestData/testCases/TestTestCases\_database.csv](../.gitbook/assets/image%20%2827%29.png)



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
* **TestCaseID**: Unique test id for each test
* **RunFlag**: set 'Y' to run the test. Set 'N' to skip.
* **Description**: Short description of the test.
* **InterfaceType**: RESTfulAPI
* **UriPath**: 
  * URI path append to the base URI defined in apiConfig.property
  * Full URL path can be used. If value starts with "http", then the url will not be appended to the base URI. eg. http://www.site.com/api/login
* **ContentType**: The content type of the request
* **Method**:  type of call made: POST, GET, PUT, DELETE
* **Option**: 
* **RequestHeaders**: The header values, separated by ";". 
  * eg. Authorization: Bearer &lt;@accessTokenAdmin&gt;
* **TemplateFile**: 
* **RequestBody**: The request body goes here. We can use values set in api config file through the syntax: &lt;@variable&gt;. eg. &lt;@username&gt;, where username="admin" defined in apiConfig.property file.
* **OutputParams**: We can store response values into variables defined here. The variables will then be available for other tests.
  *  Syntax: &lt;$variable&gt;. eg. NAME:1:&lt;$name&gt;. the variable "name" can then be access through syntax &lt;@name&gt; in subsequent tests
* **RespCodeExp**: expected response code value from the api call
* **ExpectedResponse**: Verification of the response goes here. More description in the interface sections.
* **TcComment:** comment for the tests. eg. disable for such and such reasons.



## Json Body Verification

* We can verify json body and structure through "lenient" verification
* ```text
  {
         "user": {
          "username":  "<@adminUserName>",
          "email": "autouser313@gmail.com",
          "provider": "local",
          "confirmed": true,
          "blocked": null
      }
  }
  ```
* We are using json body to verify the response
* The json body is strictly enforced, however, the variables are optional
  * eg. we're not including fields such as "date"
* We can use variables as part of response
* ```
   "username":  "<@adminUserName>",
  ```
* **Json body verification and Json Path verification are sepearted by "&&"**
  * ```text
    {
           "user": {
            "username":  "<@adminUserName>",
            "email": "autouser313@gmail.com",
            "provider": "local",
            "confirmed": true,
            "blocked": null
        }
    }
    &&
    _VERIFY_JSON_PART_
    "user.username": hasItems("<@adminUserName>");
    ```

## Jason Path Verification

* Verification are separated by ";"

### Json Path Equals

```text
"user.email":1: equalTo("autouser313@gmail.com");
```

* first instance of user.email equals "autouser313@gmail.com"

### All Values In Json Path Equals

```text
"user.email": equalTo("autouser313@gmail.com");
```

* All user.email values will be stored in an array, and compared to the value
* eg. if we have response of 2 users: 
* ```text
  {
         "user": {
          "username":  user1,
          "email": "autouser1@gmail.com",
          "provider": "local",
          "confirmed": true,
          "blocked": null
      }
      "user": {
          "username":  user2,
          "email": "autouser2@gmail.com",
          "provider": "local",
          "confirmed": true,
          "blocked": null
      }
  }
  ```
* Then are verification becomes:
* ```text
  "user.email": equalTo("autouser1@gmail.com","autouser2@gmail.com");
  ```

### Jason Path Contains

```text
NAME:1: contains(Paul);
```

* Column "NAME" at row 1 contains the text: Paul

### All Values in Json Path Contain

```text
NAME:contains(Paul,Allen,Teddy,Mark);
```

* We have 4 or more rows with column "Name" which contain: Paul, Allen, Teddy, Mark

### Json Path Not Empty

```text
ADDRESS:1:isNotEmpty;
```

* Column "Address" at row 1 is not empty
* Usefully if we want to check a value exists but don't want to verify the value. eg. time stamp

