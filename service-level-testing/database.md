# Database

## Purpose

* We can run relational database queries, and verify the response through the csv based tests

## Implementation

* We can set the columns in the csv file as follows:

![](../.gitbook/assets/image%20%2821%29.png)

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
      <th style="text-align:left"></th>
      <th style="text-align:left"></th>
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
      <td style="text-align:left">NAME:&lt;$name&gt;</td>
      <td style="text-align:left">
        <p>ID:1: equalTo(1);</p>
        <p>ID:equalTo(1,2,3,4);</p>
        <p>NAME:1: contains(Paul);</p>
        <p>NAME:contains(Paul,Allen,Teddy,Mark);</p>
        <p>AGE:1: equalTo(32);</p>
        <p>ADDRESS:1: isNotEmpty, SALARY:1: equalTo(20000)</p>
      </td>
      <td style="text-align:left"></td>
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
      <td style="text-align:left">ID:1: equalTo(1);</td>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>