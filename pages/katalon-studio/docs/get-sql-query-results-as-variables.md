---
title: "Get SQL query results as variables" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/get-sql-query-results-as-variables.html 
redirect_from:
    - "/display/KD/Get+SQL+query+results+as+variables/"
    - "/display/KD/Get%20SQL%20query%20results%20as%20variables/"
    - "/x/RQXR/"
    - "/katalon-studio/docs/get-sql-query-results-as-variables/"
description: 
---
Using the built-in [data files functionalit](/display/KD/Manage+Test+Data)y in Katalon Studio, you can create a data file connecting to my DB and then return the results as a variable with the code below:

```groovy
//get data
def data = findTestData('Data Files/DB Data')
// Get specific data (column, row) as a variable
String record = data.getValue(3, 4)
//print my variable
println record

```

**References:**

*   [TestDataFactory](https://api-docs.katalon.com/com/kms/katalon/core/testdata/TestDataFactory.html)
*   [TestData](https://api-docs.katalon.com/com/kms/katalon/core/testdata/TestData.html)

_Credit to [Anthony](https://forum.katalon.com/discussion/6817/get-sql-query-results-as-variables#Comment_15812)_