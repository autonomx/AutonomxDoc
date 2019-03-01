---
title: "SOAP Request"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/soap.html
redirect_from:
    - "/display/KD/SOAP/"
    - "/display/KD/SOAP/"
    - "/x/LwLR/"
    - "/katalon-studio/docs/soap/"
description:
---
> *   Web Services Request can be parameterized. Refer to this [documentation](/x/egLR).
> *   Learn more about [Verification Snippets](/x/EwjR).

1.  Select **File > New > Web Service Request** from the main menu. The **New Web Service Request** dialog will be displayed. Select 'SOAP' from Request Type list to create a new SOAP object.

    ![](../../images/katalon-studio/docs/soap-request/image2018-9-5-143A213A46.png)


2.  A _new_ service request object is created under the** Object Repository** of Katalon Studio. In the opened editor of the _new_ service request object, enter all the required information. An example of SOAP request and response are shown in the screenshot below

    ```groovy
    Request URL: http://www.dneonline.com/calculator.asmx?WSDL
    ```


    ![](../../images/katalon-studio/docs/soap-request/Screen-Shot-2018-09-21-at-1.13.00-PM.png)

    _where_

    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Request Method</td><td>The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following SOAP methods: SOAP, SOAP 1.2, POST, GET.</td></tr><tr><td>Request URL</td><td>The WSDL address registered for the SOAP web service.</td></tr><tr><td>Service Function</td><td><p>The function/method of the SOAP web service that you want to use in this SOAP request. The list will be retrieved after clicking&nbsp;<strong>Load from WSDL</strong>.</p><p><img src="../../images/katalon-studio/docs/soap-request/image2018-9-5-163A493A12.png"></p></td></tr><tr><td>Authorization</td><td><p>Credential for HTTP authentication.</p><p><img src="../../images/katalon-studio/docs/soap-request/image2018-9-5-143A213A10.png"></p></td></tr><tr><td>HTTP Headers</td><td><p>The header information that you want to transmit in this SOAP request object.</p><p>You can select headers from the list of suggested options (by double-clicking on the&nbsp;<strong>Name</strong>&nbsp;cell) or enter another header of your interest. Refer to&nbsp;<a class="external-link" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" rel="nofollow">Supported HTTP Headers</a>&nbsp;for more details.</p><p><img src="../../images/katalon-studio/docs/soap-request/image2018-9-5-143A213A24.png"></p></td></tr><tr><td>Request Message</td><td><p>The information that you want to transmit in this SOAP request object.&nbsp;You can enter directly or import content from external text files.&nbsp;</p><p><img src="../../images/katalon-studio/docs/soap-request/image2018-9-5-163A493A25.png"></p></td></tr><tr><td>Response</td><td><p>The retrieved message from web service server when you click&nbsp;<strong>Test Request </strong>button. You can view details information of the response including <strong>Status</strong>, <strong>Elapsed Time</strong>, <strong>Size.</strong></p><p>There are 2 viewing format: <strong>pretty</strong> or <strong>raw</strong></p><p><img src="../../images/katalon-studio/docs/soap-request/image2018-9-5-163A503A39.png"><img src="../../images/katalon-studio/docs/soap-request/image2018-9-5-163A503A6.png"></p></td></tr></tbody></table>

3.  Save the service request object when you're done. The service request defined here can be utilized in other test cases. Refer to [Use Web Service in Test Case](/display/KD/Using+Web+Services+in+a+Test+Case) for more details.

**See also:**

*   [Parameterize a Web Service Object](/display/KD/Parameterize+a+Web+Service+Object)
*   [Verification Snippets](/display/KD/Verification+Snippets)
*   [Using Web Services in a Test Case](/display/KD/Using+Web+Services+in+a+Test+Case)