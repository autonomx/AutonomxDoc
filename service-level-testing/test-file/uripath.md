# UriPath

## UriPath

* **Applicable to Restful API**
* UriPath column in CSV appends the Uri path to the base Url defined in the apiConfig.properties file
* ```text
  apiConfig.properties:

  # global configuration
  api.uriPath = http://demo.autonomx.io
  ```
* Uri path value is then appened to the api.uriPath value
* eg. We append /auth/local to base url: http://demo.autonomx.io

![](../../.gitbook/assets/image%20%2864%29.png)

## Override Uri Path

* We can override the base url value through setting the full url in the UriPath column
* eg. http://www.google.com
* The url must start with http or https

## Dynamic URI Values

* We can use stored values from config or set in the test file to set the uri path
* eg. &lt;@site1&gt; where site1 is set in apiConfig.properties
* ```text
  apiConfig.properties:

  # global configuration
  api.uriPath = http://demo.autonomx.io
  site1 = http://www.google.ca
  ```
* or &lt;@site1&gt;&lt;@uri1&gt;. This then becomes http://www.google.ca/auth/local
* ```text
  apiConfig.properties:

  # global configuration
  api.uriPath = http://demo.autonomx.io
  site1 = http://www.google.ca
  uri1 = /auth/local    
  ```

## Query Parameters

* Query Parameters can be set by appending to the UriPath 
* eg. /content-manager/explorer/user/?source=users-permissions
* Multiple query path can be added by & 
* /content-manager/explorer/user/?source=users-permissions&key=value

![](../../.gitbook/assets/image%20%28124%29.png)

