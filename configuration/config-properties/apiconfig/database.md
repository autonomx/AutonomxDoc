# DataBase

## Description

* Handles database connection info
* ```text
  # Database Server
  db.1.driver = org.postgresql.Driver
  db.1.url = jdbc:postgresql://localhost:5432
  db.1.name = testdb
  db.1.username = postgres
  db.1.password = 123

  db.2.driver = org.postgresql.Driver
  db.2.url = jdbc:postgresql://localhost:5432
  db.2.name = testdb
  db.2.username = postgres
  db.2.password = 123
  ```

* db.1: we can have multiple database connections

  * In this case, this is database 1 and database 2

* In csv we use db.1 by default
* We can use other db's by setting **Option** column:
  * database:2

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
      <td style="text-align:left">db.driver</td>
      <td style="text-align:left">
        <p>driver type.
          <br />postgres: org.postgresql.Driver
          <br />mongodb: mongodb.jdbc.MongoDriver
          <br />For mongo db, special library is used to enable querying mongo db the
          same way as rational db</p>
        <p></p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">db.url</td>
      <td style="text-align:left">url for the database</td>
    </tr>
    <tr>
      <td style="text-align:left">db.name</td>
      <td style="text-align:left">database name</td>
    </tr>
    <tr>
      <td style="text-align:left">db.username</td>
      <td style="text-align:left">username for authentication</td>
    </tr>
    <tr>
      <td style="text-align:left">db.password</td>
      <td style="text-align:left">password for authentication</td>
    </tr>
  </tbody>
</table>