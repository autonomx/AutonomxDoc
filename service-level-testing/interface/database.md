# Database

## Purpose

* We can run relational database queries, and verify the response through the csv based tests

## Implementation

*   We can set the columns in the csv file as follows:



![apiTestData/testCases/sampleTests/TestCases\_database.csv](<../../.gitbook/assets/image (34).png>)

| TestSuite  | TestCaseID     | RunFlag | Description      | InterfaceType | UriPath | ContentType | Method | Option | RequestHeader | TemplateFile | RequestBody                                   | OutputParam    | RespCodeExp | ExpectedResponse                                                                                                                                                                                              | TcComments |
| ---------- | -------------- | ------- | ---------------- | ------------- | ------- | ----------- | ------ | ------ | ------------- | ------------ | --------------------------------------------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| TcPostgres | getUsers       | Y       | verify user      | SQLDB         |         |             |        |        |               |              | SELECT \* FROM COMPANY                        | NAME:1:<$name> |             | <p>ID:1: equalTo(1);</p><p>ID:equalTo(1,2,3,4);</p><p>NAME:1: contains(Paul);</p><p>NAME:contains(Paul,Allen,Teddy,Mark);</p><p>AGE:1: equalTo(32);</p><p>ADDRESS:1: isNotEmpty, SALARY:1: equalTo(20000)</p> |            |
| TcPostgres | getUsersByName | Y       | verify user data | SQLDB         |         |             |        |        |               |              | SELECT \* FROM COMPANY WHERE NAME = '<@name>' | AGE:1:<$age>   |             | ID:1: equalTo(1);                                                                                                                                                                                             |            |

## Column Values

* **TestSuite**: The name of the test series
  * Tests can be combined by using postfix: \_step#
    * ```
      createNewUser_step1
      createNewUser_step2
      createNewUser_step3
      ```
* **TestSuite**: Unique identifier of the test file
* **TestCaseID**: Unique test id for each test
* **RunFlag**: set 'Y' to run the test. Set 'N' to skip.
* **Description**: Short description of the test.
* **InterfaceType**: SQLDB
* **UriPath**:&#x20;
* **ContentType**:&#x20;
* **Method**:&#x20;
* **Option**:&#x20;
* **RequestHeaders**:&#x20;
* **TemplateFile**:&#x20;
* **RequestBody**: Relational database query
* **OutputParams**: We can store response values into variables defined here. The variables will then be available for other tests.
  * &#x20;Syntax: <$variable>. eg. NAME:1:<$name>. the variable "name" can then be access through syntax <@name> in subsequent tests
* **RespCodeExp**:&#x20;
* **ExpectedResponse**: Verification of the response goes here. More description in the interface sections.
* **TcComment:** comment for the tests. eg. disable for such and such reasons.

## Response Verification

* Verification are separated by ";"

### Row Equal

```
ID:1: equalTo(1);
```

* Column "ID", at row 1 equals "1"

### All Rows Equal

```
ID:equalTo(1,2,3,4);
```

* We have 4 rows with column name "ID" which have values: 1, 2, 3, 4

### Row Contain

```
NAME:1: contains(Paul);
```

* Column "NAME" at row 1 contains the text: Paul

### All Rows Contain

```
NAME:contains(Paul,Allen,Teddy,Mark);
```

* We have 4 or more rows with column "Name" which contain: Paul, Allen, Teddy, Mark

### Row Value Not Empty

```
ADDRESS:1:isNotEmpty;
```

* Column "Address" at row 1 is not empty
* Usefully if we want to check a value exists but don't want to verify the value. eg. time stamp
