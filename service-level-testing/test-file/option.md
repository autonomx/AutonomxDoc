# Option

## Option

* Option column is used to overwrite configuration values for Interfaces
* The override is only for the test the option is invoked on
* Format: key value pair
  * Syntax: in csv option column: key:value. eg. WAIT\_FOR\_RESPONSE:5

## RestfulApi Interface Options

#### Retry Options

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

#### Pagination Testing Options

* PAGINATION\_STOP\_CRITERIA

