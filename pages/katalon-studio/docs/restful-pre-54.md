---
title: "RESTful (Pre-5.4)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/restful-pre-54.html 
redirect_from:
    - "/x/0BNO/"
    - "/katalon-studio/docs/restful-pre-54/"
description: 
---
Create REST Object
------------------

1.  Select **File > New > Web Service Request** from the main menu. The **New Web Service Request** dialog will be displayed.  
    ![](../../images/katalon-studio/docs/restful-pre-54/image2017-2-13-113A223A17.png)  
    Provide the name for the new service request object, select **RESTful** as **Request Type** then click **OK**.  
      
    
2.  A new service request object is created under **Object Repository** of Katalon Studio.  
    ![](../../images/katalon-studio/docs/restful-pre-54/image2017-2-13-113A403A54.png)  
      
    
3.  In the opened editor of the new service request object, enter all required information.  
    ![](../../images/katalon-studio/docs/restful-pre-54/image2017-2-13-113A413A59.png)  
    where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Request Method</td><td>The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following methods for REST services: GET, POST, PUT, DELETE.</td></tr><tr><td>Request URL</td><td>The URL registered for the RESTful web service.</td></tr><tr><td>Parameters</td><td>Any parameter that you want to pass along with this RESTful request object.</td></tr><tr><td><p>Authorization</p></td><td><p>Credentials for HTTP authentication.<br></p><p>Type: <strong>Basic, OAuth 1.0, </strong>or <strong></strong><strong>No Authorization</strong><br></p><p><img src="../../images/katalon-studio/docs/restful-pre-54/image2017-2-13-133A313A8.png">&nbsp;&nbsp;&nbsp; <img src="../../images/katalon-studio/docs/restful-pre-54/image2017-8-28-93A493A5.png"></p></td></tr><tr><td>HTTP Headers</td><td><p>The header information that you want to transmit in this RESTful request object.</p><p>You can select headers from the list of suggested options (by double clicking on the <strong>Name</strong> cell) or enter another header of your interest. Refer to&nbsp;<a href="#RESTful(Pre-5.4)-SupportedHTTPHeaders">Supported HTTP Headers</a>&nbsp;for more details.</p><p><img src="../../images/katalon-studio/docs/restful-pre-54/image2017-2-13-133A333A57.png"></p></td></tr><tr><td>HTTP Body</td><td><p>The information that you want to transmit in this RESTful request object. You can enter directly or import content from external text files. <img src="../../images/katalon-studio/docs/restful-pre-54/image2017-2-13-133A383A29.png"></p></td></tr><tr><td>Response</td><td><p>The retrieved message from web service server when you click <strong>Test Request</strong>.</p><p><img src="../../images/katalon-studio/docs/restful-pre-54/image2017-2-13-133A583A30.png"></p></td></tr></tbody></table>
    
4.  Save the service request object when you're done. The service request defined here can be utilized in other test cases. Refer to [Use WebService in Test Case](#RESTful(Pre-5.4)-UseWebServiceinTestCase) for more details.