---
title: "Update SQL query in a Test Data dynamically" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/update-sql-query-in-a-test-data-dynamically.html 
redirect_from:
    - "/display/KD/Update+SQL+query+in+a+Test+Data+dynamically/"
    - "/display/KD/Update%20SQL%20query%20in%20a%20Test%20Data%20dynamically/"
    - "/x/UgXR/"
    - "/katalon-studio/docs/update-sql-query-in-a-test-data-dynamically/"
description: 
---
To update SQL query in a Test Data dynamically, you can refer to sample code below:

```groovy
DBData dbTestData = findTestData('######')
dbTestData.fetchedData = dbTestData.fetchData()
```

  

**References:**

*   [DBData](https://api-docs.katalon.com/com/kms/katalon/core/testdata/DBData.html)

_Credit to [Trong Bui](https://forum.katalon.com/discussion/5799/dynamically-update-sql-generated-test-data-files-before-test-suite-case-execution#Comment_13181)_