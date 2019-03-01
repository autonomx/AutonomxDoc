---
title: "Web Services Builder" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/web-services-builder.html 
redirect_from:
    - "/display/KD/Web+Services+Builder/"
    - "/display/KD/Web%20Services%20Builder/"
    - "/x/IAPR/"
    - "/katalon-studio/docs/web-services-builder/"
description: 
---
> Since Katalon Studio 5.4

**RestRequestObjectBuilder** class provides functions to create a RESTful object easily and quickly in scripting view. You can find details regarding to API docs specifications from this [page](https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html).

<table><thead><tr><th>Type</th><th>Name and description</th></tr></thead><tbody><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RequestObject.html" rel="nofollow">RequestObject</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#build()" rel="nofollow">build</a></strong>()</code></td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withFileBodyContent(java.lang.String)" rel="nofollow">withFileBodyContent</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String">String</a>&nbsp;filePath)</code><br>Specify the binary body content</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withHttpHeaders(List%3CTestObjectProperty%3E)" rel="nofollow">withHttpHeaders</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List">List</a>&lt;<a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/TestObjectProperty.html" rel="nofollow" title="TestObjectProperty">TestObjectProperty</a>&gt; httpHeaderProperties)</code><br>Specify HTTP headers for the request object</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withMultipartFormDataBodyContent(List%3CFormDataBodyParameter%3E)" rel="nofollow">withMultipartFormDataBodyContent</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List">List</a>&lt;<a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/FormDataBodyParameter.html" rel="nofollow" title="FormDataBodyParameter">FormDataBodyParameter</a>&gt; parameters)</code><br>Specify the body content for multipart/form-data type, default charset UTF-8</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestParameters(List%3CTestObjectProperty%3E)" rel="nofollow">withRestParameters</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List">List</a>&lt;<a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/TestObjectProperty.html" rel="nofollow" title="TestObjectProperty">TestObjectProperty</a>&gt; restParameters)</code><br>Specify the REST parameters for the request object</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestRequestMethod(java.lang.String)" rel="nofollow">withRestRequestMethod</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String">String</a>&nbsp;requestMethod)</code><br>Specify method for the request object</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withRestUrl(java.lang.String)" rel="nofollow">withRestUrl</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String">String</a>&nbsp;url)</code></td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withTextBodyContent(java.lang.String)" rel="nofollow">withTextBodyContent</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String">String</a>&nbsp;text)</code><br>Specify the text body content, default charset UTF-8</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withTextBodyContent(java.lang.String,%20java.lang.String)" rel="nofollow">withTextBodyContent</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String">String</a>&nbsp;text,&nbsp;<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String">String</a>&nbsp;charset)</code><br>Specify the text body content</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withUrlEncodedBodyContent(List%3CUrlEncodedBodyParameter%3E)" rel="nofollow">withUrlEncodedBodyContent</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List">List</a>&lt;<a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/UrlEncodedBodyParameter.html" rel="nofollow" title="UrlEncodedBodyParameter">UrlEncodedBodyParameter</a>&gt; parameters)</code><br>Specify the body content that composes of a list of url-encoded pairs, default charset UTF-8</td></tr><tr><td><code><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html" rel="nofollow">RestRequestObjectBuilder</a></code></td><td><code><strong><a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/RestRequestObjectBuilder.html#withUrlEncodedBodyContent(List%3CUrlEncodedBodyParameter%3E,%20java.lang.String)" rel="nofollow">withUrlEncodedBodyContent</a></strong>(<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/util/List.html" rel="nofollow" title="List">List</a>&lt;<a class="external-link" href="https://api-docs.katalon.com/com/kms/katalon/core/testobject/UrlEncodedBodyParameter.html" rel="nofollow" title="UrlEncodedBodyParameter">UrlEncodedBodyParameter</a>&gt; parameters,&nbsp;<a class="external-link" href="http://download.oracle.com/javase/6/docs/api/java/lang/String.html" rel="nofollow" title="String">String</a>&nbsp;charset)</code><br>Specify the body content that composes of a list of url-encoded pairs</td></tr></tbody></table>

  
Examples regard how to use them:

1.  **Create a 'GET' RESTful request:**
    
    ```groovy
    import com.kms.katalon.core.testobject.ConditionType as ConditionType
    import com.kms.katalon.core.testobject.RestRequestObjectBuilder
    import com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty
    import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
    
    'Create a new GET object using builder'
    def builder = new RestRequestObjectBuilder()
    def requestObject = builder
    	.withRestRequestMethod("GET")
    	.withRestUrl("http://jsonplaceholder.typicode.com/comments")
    	.withRestParameters([
    		new TestObjectProperty("postId", ConditionType.EQUALS, "1"),
    		new TestObjectProperty("id", ConditionType.EQUALS, "1")
    	])
    	.withHttpHeaders([
    		new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/json")
    	])
    	.build()
    'Send a request'
    def response = WS.sendRequest(requestObject)
    
    'Verify if comment\'s email after sending request is correct or not'
    WS.verifyElementPropertyValue(response, '[0].email', 'Eliseo@gardner.biz')
    
    
    ```
    
2.  **Create a 'POST' RESTful request:**
    
    ```groovy
    import com.kms.katalon.core.testobject.ConditionType as ConditionType
    import com.kms.katalon.core.testobject.RestRequestObjectBuilder
    import com.kms.katalon.core.testobject.TestObjectProperty as TestObjectProperty
    import com.kms.katalon.core.testobject.UrlEncodedBodyParameter
    import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
     
    def builder = new RestRequestObjectBuilder()
      
    'Create a new POST object using builder'
    def requestObject = builder
        .withRestRequestMethod("POST")
        .withRestUrl("https://sample-web-service-aut.herokuapp.com/api/users/urlencoded")
        .withHttpHeaders([
            new TestObjectProperty("Content-Type", ConditionType.EQUALS, "application/x-www-form-urlencoded")
        ])
        .withUrlEncodedBodyContent([
            new UrlEncodedBodyParameter("username", "myUsername"),
            new UrlEncodedBodyParameter("password", "myPassword"),
            new UrlEncodedBodyParameter("gender", "MALE"),
            new UrlEncodedBodyParameter("age", "20"),
    		new UrlEncodedBodyParameter("avatar", "AAA"),
        ])
        .build()
         
    def response = WS.sendRequest(requestObject)
      
    assert response.getStatusCode() == 200
    ```