---
title: "SOAP (Pre-5.4)" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/soap-pre-54.html 
redirect_from:
    - "/x/0hNO/"
    - "/katalon-studio/docs/soap-pre-54/"
description: 
---
Create SOAP Object
------------------

1.  Select **File > New > Web Service Request** from the main menu. The **New Web Service Request** dialog will be displayed.  
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13-143A43A53.png)  
    Provide the name for the new service request object, select **SOAP** as **Request Type** then click **OK**.  
      
    
2.  A new service request object is created under **Object Repository** of Katalon Studio.  
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-2-13-143A53A47.png)  
      
    
3.  In the opened editor of the new service request object, enter all required information.  
    ![](../../images/katalon-studio/docs/soap-pre-54/image2017-6-30-203A483A48.png)  
    where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Request Method</td><td>The request method indicates the expected action to be executed on the specified resource. Katalon Studio supports following SOAP methods: SOAP, SOAP 1.2, POST, GET.</td></tr><tr><td>Request URL</td><td>The WSDL address registered for the SOAP web service.</td></tr><tr><td>Service Function</td><td>The function/method of the SOAP web service that you want to use in this SOAP request. The list will be retrieved after clicking <strong>Load from WSDL</strong>.</td></tr><tr><td>Authorization</td><td><p>Credential for HTTP authentication.</p><p><img src="../../images/katalon-studio/docs/soap-pre-54/image2017-2-13-133A313A8.png"></p></td></tr><tr><td>HTTP Headers</td><td><p>The header information that you want to transmit in this SOAP request object.</p><p>You can select headers from the list of suggested options (by double clicking on the <strong>Name</strong> cell) or enter another header of your interest. Refer to&nbsp;<a href="#SOAP(Pre-5.4)-SupportedHTTPHeaders">Supported HTTP Headers</a>&nbsp;for more details.</p><p><img src="../../images/katalon-studio/docs/soap-pre-54/image2017-2-13-133A333A57.png"></p></td></tr><tr><td>Request Message</td><td><p>The information that you want to transmit in this SOAP request object. You can enter directly or import content from external text files. <img src="../../images/katalon-studio/docs/soap-pre-54/image2017-2-13-143A203A16.png"></p></td></tr><tr><td>Response</td><td><p>The retrieved message from web service server when you click <strong>Test Request</strong>.</p><p><img src="../../images/katalon-studio/docs/soap-pre-54/image2017-2-13-143A213A55.png"></p></td></tr></tbody></table>
    
4.  Save the service request object when you're done. The service request defined here can be utilized in other test cases. Refer to [Use WebService in Test Case](#SOAP(Pre-5.4)-UseWebServiceinTestCase) for more details.

Supported HTTP Headers 
-----------------------

Here's the list of HTTP headers initially supported in Katalon Studio:

| Header field name | Description |
| --- | --- |
| Accept | Content-Type items acceptable for the response. |
| Accept-Charset | Character sets that are acceptable. |
| Accept-Encoding | List of acceptable encodings. |
| Accept-Language | List of acceptable human languages for response. |
| Authorization | Authentication credentials for HTTP authentication. |
| Cache-Control | Used to specify directives that must be obeyed by all caching mechanisms along the request-response chain |
| Connection | Control options for the current connection and list of hop-by-hop request fields. |
| Content-Length | The length of the request body in octets (8-bit bytes) |
| Content-Type | The MIME type of the body of the request (used with POST and PUT requests). |
| Cookie | An HTTP cookie previously sent by the server with Set-Cookie. |
| DNT | Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track header field (since Firefox 4.0 Beta 11). Safari and IE9 also have support for this field. |
| Date | The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231 Date/Time Formats. |
| Expect | Indicates that particular server behaviors are required by the client. |
| From | The email address of the user making the request. |
| Front-End-Https | Non-standard header field used by Microsoft applications and load-balancers. |
| Host | The domain name of the server (for virtual hosting), and the TCP port number on which the server is listening. The port number may be omitted if the port is the standard port for the service requested. Mandatory since HTTP/1.1. |
| If-Match | Only perform the action if the client supplied entity matches the same entity on the server. This is mainly for methods like PUT to only update a resource if it has not been modified since the user last updated it. |
| If-Modified-Since | Allows a 304 Not Modified to be returned if content is unchanged. |
| If-None-Match | Allows a 304 Not Modified to be returned if content is unchanged. |
| If-Range | If the entity is unchanged, send me the part(s) that I am missing; otherwise, send me the entire new entity. |
| If-Unmodified-Since | Only send the response if the entity has not been modified since a specific time. |
| Max-Forwards | Limit the number of times the message can be forwarded through proxies or gateways. |
| Origin | Initiates a request for cross-origin resource sharing (asks server for an 'Access-Control-Allow-Origin' response field). |
| Pragma | Implementation-specific fields that may have various effects anywhere along the request-response chain. |
| Proxy-Authorization | Authorization credentials for connecting to a proxy. |
| Proxy-Connection | Implemented as a misunderstanding of the HTTP specifications. Common because of mistakes in implementations of early HTTP versions. Has exactly the same functionality as standard Connection field. |
| Range | Request only part of an entity. Bytes are numbered from 0. |
| Referer | This is the address of the previous web page from which a link to the currently requested page was followed. (The word "referrer" has been misspelled in the RFC as well as in most implementations to the point that it has become standard usage and is considered correct terminology). |
| TE | The transfer encodings the user agent is willing to accept: the same values as for the response header field Transfer-Encoding can be used, plus the "trailers" value (related to the "chunked" transfer method) to notify the server it expects to receive additional fields in the trailer after the last, zero-sized, chunk. |
| Upgrade | Ask the server to upgrade to another protocol. |
| User-Agent | The user agent string of the user agent. |
| Via | Informs the server of proxies through which the request was sent. |
| Warning | A general warning about possible problems with the entity body. |
| X-ATT-DeviceId | Allows easier parsing of the MakeModel/Firmware that is usually found in the User-Agent String of AT&T Devices |
| X-Csrf-Token | Used to prevent cross-site request forgery. Alternative header names are: X-CSRFToken and X-XSRF-TOKEN. |
| X-Forwarded-For | A de facto standard for identifying the originating IP address of a client connecting to a web server through an HTTP proxy or load balancer. |
| X-Forwarded-Host | A de facto standard for identifying the original host requested by the client in the Host HTTP request header, since the host name and/or port of the reverse proxy (load balancer) may differ from the origin server handling the request. |
| X-Forwarded-Proto | A de facto standard for identifying the originating protocol of an HTTP request, since a reverse proxy (or a load balancer) may communicate with a web server using HTTP even if the request to the reverse proxy is HTTPS. An alternative form of the header (X-ProxyUser-Ip) is used by Google clients talking to Google servers. |
| X-Http-Method-Override | Requests a web application override the method specified in the request (typically POST) with the method given in the header field (typically PUT or DELETE). Can be used when a user agent or firewall prevents PUT or DELETE methods from being sent directly (note that this either a bug in the software component, which ought to be fixed, or an intentional configuration, in which case bypassing it may be the wrong thing to do). |
| X-Requested-With | Mainly used to identify Ajax requests. Most JavaScript frameworks send this field with value of XMLHttpRequest. |
| X-UIDH | Server-side deep packet insertion of a unique ID identifying customers of Verizon Wireless; also known as "perma-cookie" or "supercookie". |
| X-Wap-Profile | Links to an XML file on the Internet with a full description and details about the device currently connecting. In the example to the right is an XML file for an AT&T Samsung Galaxy S2. |

Refer to [https://en.wikipedia.org/wiki/List\_of\_HTTP\_header\_fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields) for more info.