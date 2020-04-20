# Header

## Header values

* Header values can be set at the **RequestHeaders** column
* Header values follow the format of Key:value
  * eg. Authorization: Bearer &lt;@accessTokenAdmin&gt;
    * In this example, accessTokenAdmin variable is set in previous step
* We can have multiple header values separated by ";"
  * eg. Authorization:value1; Accept-Ranges:bytes;

## NO\_TOKEN

* We can test without a authorization token set using the NO\_TOKEN key
* This is to test an api call without authentication set

![](../../../../.gitbook/assets/image%20%2837%29.png)



## INVALID\_TOKEN

* We can set our authorization token to be invalid using INVALID\_TOKEN key
* This will take existing token set from previous steps, and invalidate them
* If no token is set, it will set AUTHORIZATION header to "invalid" 

![](../../../../.gitbook/assets/image%20%2833%29.png)



