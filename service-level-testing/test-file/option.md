# Option

## Option

* Option column is used to overwrite configuration values for Interfaces
* The override is only for the test the option is invoked on
* Format: key value pair
  * Syntax: in csv option column: key:value. eg. WAIT\_FOR\_RESPONSE:5
  * Multiple values are separated by ";"

## RestfulApi Interface Options

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

### Pagination Testing Options

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

