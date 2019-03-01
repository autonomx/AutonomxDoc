---
title: "Import REST requests from Swagger 2.0" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/import-rest-requests-from-swagger-20.html 
redirect_from:
    - "/display/KD/Import+REST+requests+from+Swagger+2.0/"
    - "/display/KD/Import%20REST%20requests%20from%20Swagger%202.0/"
    - "/x/8hXR/"
    - "/katalon-studio/docs/import-rest-requests-from-swagger-20/"
description: 
---
> [Read more about Swagger 2.0...](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md)

To import Web Service objects from a **Swagger 2.0 **_File_ or _URL_ depending on the type of your Katalon Studio project, follow the following:

Generic Project
---------------

*   In Tests Explorer, right-click on any folder within **Object Repository** to display the context menu and select **Import > From Swagger**.

![](../../images/katalon-studio/docs/import-rest-requests-from-swagger-20/Screen-Shot-2018-10-08-at-4.07.36-PM.png)

API/Web Service Project
-----------------------

There are two ways to import existing Swagger request:

*   *   In Tests Explorer, right-click on any folder within **Object Repository** to display the context menu and select **Import > From Swagger.**
    *   Click on '**Import Swagger**' icon on the main toolbar or Quickstart wizard.   
        ![](../../images/katalon-studio/docs/import-rest-requests-from-swagger-20/Screen-Shot-2018-10-09-at-4.41.24-PM.png)

Katalon Studio displays the input dialog accepts either a _local file_ or a _remote URL_, e.g: [https://mySite/swagger.json](https://mySite/swagger.json,). Since both inputs are using the same definition, Katalon Studio will load the specs and generate REST requests.

![](../../images/katalon-studio/docs/import-rest-requests-from-swagger-20/Screen-Shot-2018-10-02-at-12.02.20.png)

**Katalon automatically imports and generates:**

*   Web Service _objects_ (REST) are added under the right-clicked directory.
*   _Query Parameters_, _variables_ _HTTP Headers_.
*   _HTTP body_, _form-data_, and _encoded URL_ parameters are parsed.  
      
    

> **Known Issues**:
> 
> *   No Raw text content in HTTP Body parsed from Swagger.
> *   No Authorization parsed from Swagger.
> *   Variables and Parameters should be adjusted manually.