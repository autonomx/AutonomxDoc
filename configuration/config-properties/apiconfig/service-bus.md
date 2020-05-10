# Service Bus

## MessageQueue Configuration

* Message queue configuration applies to Rabbitmq, Service Bus and Kafka interfaces
* ```text
  # timeout in seconds for api calls to return response
  service.response.timeout.seconds = 60
  ```

| Parameter | Description |
| :--- | :--- |
| service.response.timeout.seconds | numbers of seconds to seek new messages until the expected message arrives |

## Service Bus Configuration

* Handles connection and sending/receiving configuration
* ```text
  # Servicebus
  servicebus.connectionString = ""
  servicebus.queue = ""
  servicebus.topic = ""
  servicebus.outbound.topic = ""
  servicebus.host = ""
  servicebus.msgId.prefix = "servicebusTestMsgID"
  ```

