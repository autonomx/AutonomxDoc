---
title: "Parameterize a Web Service Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/parameterize-a-web-service-object.html 
redirect_from:
    - "/display/KD/Parameterize+a+Web+Service+Object/"
    - "/display/KD/Parameterize%20a%20Web%20Service%20Object/"
    - "/x/egLR/"
    - "/katalon-studio/docs/parameterize-a-web-service-object/"
    - "/display/KD/Parameterize+a+Web+Service+object/"
    - "/display/KD/Parameterize%20a%20Web%20Service%20object/"
description: 
---
> Starting with version 5.7, Katalon Studio provides **Variables** for RESTful and SOAP Web Service Test Objects.
>
> Since Katalon Studio v5.9, Variables is enhanced with a Scripting Editor.

Query Parameters
----------------

Query parameters are a can be added to a REST URL to tailor and filter the response output. When the user inputs a URL, Katalon Studio will detect the query parameters (after the question mark ?) and list them in the table for better management.

![](../../images/katalon-studio/docs/updated-parameterize-a-web-service-object/Screen-Shot-2018-09-18-at-5.04.18-PM.png)

Variables (since 5.7)
---------------------

Having the ability to use variables in an object allows the users to have more control of the objects and fulfill all the testing requirements. The approach is the same with [Web UI object](/x/A4C9). Katalon Studio supports variables for the following information of a Web Service object.

*   **URL**
*   **Query Parameters**
*   **HTTP **Header****
*   **HTTP Body**
*   **Verification**

You can add a new variable and declare its properties within the **Variables **tab. Variables tab is **available** from both **RESTful** and **SOAP** object.

In order to call a variable in a Web Service object, use the syntax **${variable_name}** in any of the supported locations. 

For example, using '**gender**' variable in URL of a RESTful Web Service object.

![](../../images/katalon-studio/docs/updated-parameterize-a-web-service-object/Screen-Shot-2018-09-18-at-5.10.01-PM.png)

These pre-defined variables will be mapped **automatically** when you select a Web Service object from manual mode, so you don't need to define them again manually.

The user can also similarly use variables for a SOAP object.

![](../../images/katalon-studio/docs/updated-parameterize-a-web-service-object/Screen-Shot-2018-09-18-at-5.25.42-PM.png)
