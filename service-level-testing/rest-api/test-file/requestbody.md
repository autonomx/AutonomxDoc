# RequestBody

## Json Body

* Json body can be set in the RequestBody
* Content type should be set in ContentType column
* eg. 

![](../../../.gitbook/assets/image%20%2841%29.png)

## Form Body

* Form parameters are set as key:value separated by ","
* Content type must be set. eg. application/x-www-form-urlencoded
* eg.
* ```text
  username:zzz_test<@_TIME16>,
  email:testuser+<@_TIME16>@gmail.com,
  password:password<@_TIME16>,
  confirmed:true
  ```

![](../../../.gitbook/assets/image%20%281%29.png)

## Dynamic Values

* Variables can be set using &lt;@variable&gt; syntax
* Variables can be set at [**apiConfig.properties**](https://docs.autonomx.io/configuration/apiconfig) file, or set in the test file using &lt;$variable&gt; syntax, or using a keyword

