# Persistent Report

![](../.gitbook/assets/image%20%2845%29.png)

## Purpose

* We are connecting the Extent Report to MongoDB backend to keep history of the test runs

## Installation

* We will need to install MongoDB and the Klov server 

### MongoDB

* [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
* Select the OS and follow the installation instructions

![](../.gitbook/assets/image%20%2894%29.png)

### Klov Server

* [https://github.com/extent-framework/klov-server](https://github.com/extent-framework/klov-server)
* Official documentation for Klov: [http://extentreports.com/docs/versions/4/java/klov.html](http://extentreports.com/docs/versions/4/java/klov.html)
* Navigate to runner -&gt; utils -&gt; klov -&gt; downloadKlovServer.sh or downloadKlovServer.bat based on OS. This will download the klov jar file
* Navigate to runner -&gt; utils -&gt; klov -&gt; runKlovServer.sh or runKlovServer.bat based on OS

![](../.gitbook/assets/image%20%2848%29.png)

* On Browser: [http://localhost](http://localhost) for login page
  * Username: klovadmin
  *  Password: password
* The password can be changed in the My Account settings page

## Usage

* Set report type to "klov"
* At resources -&gt; properties -&gt; report.property
* ```text
  # report types: html (single html page) or klov (server using mongodb)
  report.reporterType = klov
  ```
* Navigate to [http://localhost](http://localhost) to view the report



