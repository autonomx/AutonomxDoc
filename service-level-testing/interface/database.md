# Database

## Purpose

* We can run relational database queries, and verify the response through the csv based tests

## Implementation

* We can set the columns in the csv file as follows:

![apiTestData/testCases/sampleTests/TestCases\_database.csv](../../.gitbook/assets/image%20%2871%29.png)

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
      <td style="text-align:left">TcPostgres</td>
      <td style="text-align:left">getUsers</td>
      <td style="text-align:left">Y</td>
      <td style="text-align:left">verify user</td>
      <td style="text-align:left">SQLDB</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">SELECT * FROM COMPANY</td>
      <td style="text-align:left">NAME:1:&lt;$name&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">
        <p>ID:1: equalTo(1);</p>
        <p>ID:equalTo(1,2,3,4);</p>
        <p>NAME:1: contains(Paul);</p>
        <p>NAME:contains(Paul,Allen,Teddy,Mark);</p>
        <p>AGE:1: equalTo(32);</p>
        <p>ADDRESS:1: isNotEmpty, SALARY:1: equalTo(20000)</p>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">TcPostgres</td>
      <td style="text-align:left">getUsersByName</td>
      <td style="text-align:left">Y</td>
      <td style="text-align:left">verify user data</td>
      <td style="text-align:left">SQLDB</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
      <td style="text-align:left">SELECT * FROM COMPANY WHERE NAME = &apos;&lt;@name&gt;&apos;</td>
      <td style="text-align:left">AGE:1:&lt;$age&gt;</td>
      <td style="text-align:left"></td>
      <td style="text-align:left">ID:1: equalTo(1);</td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>## Column Values

* **TestSuite**: The name of the test series
  * Tests can be combined by using postfix: \_step\#
    * ```text
      createNewUser_step1
      createNewUser_step2
      createNewUser_step3
      ```
* **TestCaseID**: Unique test id for each test
* **RunFlag**: set 'Y' to run the test. Set 'N' to skip.
* **Description**: Short description of the test.
* **InterfaceType**: SQLDB
* **UriPath**: 
* **ContentType**: 
* **Method**: 
* **Option**: 
* **RequestHeaders**: 
* **TemplateFile**: 
* **RequestBody**: Relational database query
* **OutputParams**: We can store response values into variables defined here. The variables will then be available for other tests.
  *  Syntax: &lt;$variable&gt;. eg. NAME:1:&lt;$name&gt;. the variable "name" can then be access through syntax &lt;@name&gt; in subsequent tests
* **RespCodeExp**: 
* **ExpectedResponse**: Verification of the response goes here. More description in the interface sections.
* **TcComment:** comment for the tests. eg. disable for such and such reasons.

## Response Verification

* Verification are separated by ";"

### Row Equal

```text
ID:1: equalTo(1);
```

* Column "ID", at row 1 equals "1"

### All Rows Equal

```text
ID:equalTo(1,2,3,4);
```

* We have 4 rows with column name "ID" which have values: 1, 2, 3, 4

### Row Contain

```text
NAME:1: contains(Paul);
```

* Column "NAME" at row 1 contains the text: Paul

### All Rows Contain

```text
NAME:contains(Paul,Allen,Teddy,Mark);
```

* We have 4 or more rows with column "Name" which contain: Paul, Allen, Teddy, Mark

### Row Value Not Empty

```text
ADDRESS:1:isNotEmpty;
```

* Column "Address" at row 1 is not empty
* Usefully if we want to check a value exists but don't want to verify the value. eg. time stamp

