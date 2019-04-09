# Csv Test Data

## Purpose

* Test Data can be handled through Csv files
* Handling test data in an object allows for a simple way of adding, passing and modifying data associated with tests
* Example: user info data. User info can contain the basic username and password, however, this can grow as the project grows. Using data objects, allows additional of info such as "user id" to be added without changing the dynamics of the methods where user info is used

## Create CSV FILE

* Add csv file to folder 'data' in the module

![user.csv](../.gitbook/assets/image%20%285%29.png)

* Code generator will pick up the csv files and generate data objects

## Implementation

* To access the data from the csv files, use the following format
* ```text
  Data.<module>.<csv file>().id()
  ```
* In the test call access the data
* ```text
  User user = Data.webApp.user().admin()
  ```
* In this case, we have accessed the admin user in the user.csv file
* To access particular data
* ```text
   Data.webApp.user().admin().getUsername()
  ```
* to set value
* ```text
  Data.webApp.user().admin().withUsername("user2")
  ```

## Create Data Object

* After the csv file has been created, we can use that csv data structure to create our own data objects
* To create a new user programmatically, we can initiate the object as follows
* ```text
  User user = Data.webApp.user().withUsername("username").withPassword("password");
  ```

