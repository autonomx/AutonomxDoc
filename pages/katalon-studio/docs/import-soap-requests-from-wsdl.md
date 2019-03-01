---
title: "Import SOAP requests from WSDL" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/import-soap-requests-from-wsdl.html 
redirect_from:
    - "/display/KD/Import+SOAP+requests+from+WSDL/"
    - "/display/KD/Import%20SOAP%20requests%20from%20WSDL/"
    - "/x/BhbR/"
    - "/katalon-studio/docs/import-soap-requests-from-wsdl/"
description: 
---
To import Web Service objects from a WSDL File or URL depending on the type of your Katalon Studio project, follow the following:

Generic Project
---------------

*   In Tests Explorer, right-click on any folder within **Object Repository** to display the context menu and select **Import > From WSDL**.

![](../../images/katalon-studio/docs/import-soap-requests-from-wsdl/Screen-Shot-2018-10-08-at-3.42.49-PM.png)

API/Web Service Project
-----------------------

There are two ways to import existing WSDL request:

*   In Tests Explorer, right-click on any folder within **Object Repository** to display the context menu and select **Import > From WSDL.**

*   Click on '**Import WSDL**' icon on the main toolbar or Quickstart wizard.   
    ![](../../images/katalon-studio/docs/import-soap-requests-from-wsdl/Screen-Shot-2018-10-09-at-4.41.24-PM.png)  
      
    

Katalon Studio displays the input dialog accepts either a local File or a remote URL (e.g: [h](https://mysite/swagger.json,)[http://www.dneonline.com/calculator.asmx?WSDL](http://www.dneonline.com/calculator.asmx?WSDL)). Since both inputs are using the same definition, Katalon Studio will load the specification and generate SOAP request objects.

![](../../images/katalon-studio/docs/import-soap-requests-from-wsdl/Screen-Shot-2018-10-02-at-13.29.39.png)

**Katalon Studio automatically imports and generates:**

> You will need to manually provide in the inputs for the Request Message.

*   Web Service objects (SOAP) are added under the right-clicked directory.
*   _Request Message_.
*   _Service Function_.
*   _HTTP Body_, _form-data_, and _encoded URL parameters_ are parsed.