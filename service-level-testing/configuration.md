# Configuration

* Service level Integration configuration file can be found at:
  * automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨resources⁩ ▸ properties ▸ apiConfig.property
* RestApi Configuration: [RestApi](https://docs.autonomx.io/configuration/apiconfig/api)
* Database Configuration: [Database](https://docs.autonomx.io/configuration/apiconfig/database)

## Accessing Config Values

* Config values can be accessed in test file using &lt;@variable&gt; syntax
* We can use the config variables at the following columns:
  * UriPath
  * RequestHeader
  * RequestBody
  * ExpectedResponse

## Storing Values

* Values can be stored using &lt;$variable&gt; syntax
* Storing values can be done at the OutputParam column

## Predefined Values

* We can use predefined values in our test
* These include random values and current time
  * Random value: &lt;@\_RAND5&gt;
    * Number 12 is the length of the random string. Max length is 31
    * One random string is generated per test file
    * eg. &lt;@\_RAND5&gt; becomes a9t5a
  * Time: &lt;@\_TIME16&gt;
    * Time variable gets the current time 
    * 16 is the length of the time string we want
    * eg. &lt;@\_TIME16&gt; becomes 2019112419531400



