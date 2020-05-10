# Option

## Option

* Option column is used to overwrite configuration values for Interfaces
* The override is only for the test the option is invoked on
* Format: key value pair
  * Syntax: in csv option column: key:value. eg. WAIT\_FOR\_RESPONSE:5
  * Multiple values are separated by ";"

## Global

* Global options apply to all Interfaces
* [RUN\_COUNT](https://docs.autonomx.io/service-level-testing/features/multirun): how many times to run the current tests case
  * eg. creating multiple orders
  * eg. RUN\_COUNT:3;
* DEPENDS\_ON\_TEST: specify which previous test the current test depends on
  * If dependent test fail, the current test will be skipped
  * Syntax: 
    * DEPENDS\_ON\_TEST:&lt;testCaseId&gt;
  * eg. DEPENDS\_ON\_TEST:testId1;

## RestfulApi Interface

### Retry Options

* **NO\_VALIDATION\_TIMEOUT:** disabled timeout validation**.** Sets property ****service.timeout.validation.isEnabled to false
  * There is no value associated with this
  * Timeout validation means waiting in seconds for expected response. Expected response values can be in both expected RespCodeExp and ExpectedResponse columns.
* **WAIT\_FOR\_RESPONSE**: enables timeout validation.Sets value in seconds.
  * Timeout validation means waiting in seconds for expected response. Expected response values can be in both expected RespCodeExp and ExpectedResponse columns.
  * eg. WAIT\_FOR\_RESPONSE:5 
* **WAIT\_FOR\_RESPONSE\_DELAY\_SECONDS:** wait time between each timeout validation response in seconds
  * Overwrites properties value:  service.timeout.validation.delay.between.attempt.seconds
  * Timeout validation means waiting in seconds for expected response. Expected response values can be in both expected RespCodeExp and ExpectedResponse columns.
* **RETRY\_COUNT**: Set retry count if validation at RespCodeExp or ExpectedResponse column is not met. 

  * This is different from Timeout Validation as that is based on time, this is based on count
  * Overwrites property value: service.retry.count
  * eg. RETRY\_COUNT:3

 

* **RETRY\_AFTER\_SECONDS**: Seconds to wait between each test retry. 
  * Set with RETRY\_COUNT
  * Overwrites property value: service.retry.after.seconds
  * eg. RETRY\_AFTER\_SECONDS:3

### Pagination Testing

* Pagination testing, refers to rest api calls with response separated in pages; hence, we need to navigate through the pages to find the desired result
* **PAGINATION\_STOP\_CRITERIA**: [Json path](https://docs.autonomx.io/service-level-testing/interface/rest-api/json-path) criteria to stop searching
  * The Json path would refer to an item on the page that we expect to be available on each page that has content. Once the result returns empty, then we stop searching
  * eg. PAGINATION\_STOP\_CRITERIA**:** .id
    * if no id's are returned, we stop
* **PAGINATION\_MAX\_PAGES**: Maximum number of pages to navigate before stopping
  * eg. PAGINATION\_MAX\_PAGES:10
* **PAGINATION\_FROM**: Starting page to starting searching for results
  * eg. PAGINATION\_FROM:1
* **PAGINATION\_INCREMENT**: How many pages are incremented each time
  * eg. PAGINATION\_INCREMENT:1

## Database Interface

* **database**: specify the database number to use
  * database sets in config file
  * eg. database:2
    * selects database set 2 to use in the current test
  * ```text
    # Database Server
    db.1.driver = org.postgresql.Driver
    db.1.url=jdbc:postgresql://localhost:5432
    db.1.name=testdb
    db.1.username=postgres
    db.1.password=123

    db.2.driver = org.postgresql.Driver
    db.2.url=jdbc:postgresql://localhost:5432
    db.2.name=testdb2
    db.2.username=postgres
    db.2.password=123
    ```



### Retry Options

* **NO\_VALIDATION\_TIMEOUT:** disabled timeout validation**.** Sets property ****service.timeout.validation.isEnabled to false
  * There is no value associated with this
  * Timeout validation means waiting in seconds for expected response. Expected response values can be in both expected RespCodeExp and ExpectedResponse columns.
* **WAIT\_FOR\_RESPONSE**: enables timeout validation.Sets value in seconds.
  * Timeout validation means waiting in seconds for expected response. Expected response values can be in both expected RespCodeExp and ExpectedResponse columns.
  * eg. WAIT\_FOR\_RESPONSE:5 
* **WAIT\_FOR\_RESPONSE\_DELAY\_SECONDS:** wait time between each timeout validation response in seconds
  * Overwrites properties value:  service.timeout.validation.delay.between.attempt.seconds
  * Timeout validation means waiting in seconds for expected response. Expected response values can be in both expected RespCodeExp and ExpectedResponse columns

## Rabbit MQ

* **exchange**: exchange to send messages
  * eg. exchange:exchange1
* **queue**: queue to send messages
  * eg. queue:queue1
* **outbound\_exchange**: exchange to receive messages
  * eg. outbound\_exchange:outboundExchange1
* **outbound\_queue**: queue to receive messages
  * eg. outbound\_queue:outboundqueue1
* **response\_identifier**: unique identifier for message received
  * This is the means we associate the receiving messages with the current test
  * eg. response\_identifier:order5434
* **WAIT\_FOR\_RESPONSE**: how long in seconds we wait for the desired message to appear
  * eg. WAIT\_FOR\_RESPONSE:60

## KAFKA

* **topic**: kafka topic to receive messages
* **response\_identifier**: unique identifier for message received
  * This is the means we associate the receiving messages with the current test
  * eg. response\_identifier:order5434
* **WAIT\_FOR\_RESPONSE**: how long in seconds we wait for the desired message to appear
  * eg. WAIT\_FOR\_RESPONSE:60

## SERVICE BUS

* **topic**: topic to send message
* **outbound\_topic**: topic to receive message
* **host**: host to connect to
* **response\_identifier**: unique identifier for message received
  * This is the means we associate the receiving messages with the current test
  * eg. response\_identifier:order5434
* **WAIT\_FOR\_RESPONSE**: how long in seconds we wait for the desired message to appear
  * eg. WAIT\_FOR\_RESPONSE:60



