# Configuration and Variables

* Service level Integration configuration file can be found at:
  * automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨resources⁩ ▸ properties ▸ apiConfig.property
* RestApi configuration: [RestApi](https://docs.autonomx.io/configuration/apiconfig/api)
* Database configuration: [Database](https://docs.autonomx.io/configuration/apiconfig/database)
* RabbitMQ configuration: [RabbitMQ](https://docs.autonomx.io/configuration/config-properties/apiconfig/rabbitmq)
* Kafka configuration: [Kafka](https://docs.autonomx.io/configuration/config-properties/apiconfig/kafka)
* Service Bus configuration: [Service Bus ](https://docs.autonomx.io/configuration/config-properties/apiconfig/service-bus)

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
* Scope of stored value is the entire csv test file
  * Values stored in one test can be accessed by the subsequent tests

## Predefined Values

### Random String

* We can use predefined values in our test
* These include random values and current time
  * Random value: &lt;@\_RAND5&gt;
    * Number 12 is the length of the random string. Max length is 31
    * One random string is generated per test file
    * eg. &lt;@\_RAND5&gt; becomes a9t5a

### Time

* Time: &lt;@\_TIME\_20&gt;
  * Time variable gets the current time UTC timezone
  * 20 is the length of the time string we want
  * eg. &lt;@\_TIME20&gt; becomes 2020-04-23T14:23:33Z
* Time Epoch: &lt;@\_TIME\_MS\_13&gt;
  * Time variable gets the current time UTC timezone
  * 13is the length of the time string we want
  * eg. &lt;@\_TIME\_MS\_13&gt; becomes 1587609999109
* Time String: &lt;@\_TIME\_STRING\_17&gt;
  * Time variable gets the current time UTC timezone
  * 13is the length of the time string we want
  * eg. &lt;@\_TIME\_STRING\_17&gt; becomes 20200423024730910

### Time Modification

* Modify Weeks
  * &lt;@\_TIME24+1w&gt; -&gt; adds 1 week
  * &lt;@\_TIME24-1w&gt; -&gt; subtracts 1 week
* Modify Days
  * &lt;@\_TIME24+3d&gt; -&gt; adds 3 days
  * &lt;@\_TIME24-3d&gt; -&gt; subtracts 3 days
* Modify Hours
  * &lt;@\_TIME24+72h&gt; -&gt; adds 72 hours
  * &lt;@\_TIME24-72h -&gt; subtracts 72 hours
* Modify Minutes
  * &lt;@\_TIME24+10m&gt; -&gt; adds 10 minutes
  * &lt;@\_TIME24-10m&gt; -&gt; subtracts 10 minutes

### Set Time

* Set Month
  * &lt;@\_TIME\_24;setMonth:January&gt;
  * Sets month to January
  * Command is separated by ";"
* Set Day
  * &lt;@\_TIME\_24;setDay:Tuesday&gt;
  * Sets day to Tuesday for current week
* Set Time
  * &lt;@\_TIME\_24;setTime:14:23:33&gt;
  * Sets time to 14:23:33

### Time Zone

* Default time zone is UTC
* &lt;@\_TIME\_24;ZONE:Asia/Kolkata&gt;
  * Sets timezone to Asia/Kolkata

### Time Format

* &lt;@\_TIME\_24;FORMAT:dd-M-yyyy hh:mm:ss&gt;
  * We set time format to dd-M-yyy hh:mm:ss
  * We can set the format to any valid format 

### Combined Time Modifications

* We can combine multiple modification commands, separated by ";"
* eg. &lt;@\_TIME\_24+1d;ZONE:Asia/Kolkata;FORMAT:dd-M-yyyy hh:mm:ss&gt;

