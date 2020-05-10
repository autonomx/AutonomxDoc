# Kafka

## MessageQueue Configuration

* Message queue configuration applies to Rabbitmq, Service Bus and Kafka interfaces
* ```text
  # timeout in seconds for api calls to return response
  service.response.timeout.seconds = 60
  ```

| Parameter | Description |
| :--- | :--- |
| service.response.timeout.seconds | numbers of seconds to seek new messages until the expected message arrives |

## Kafka Configuration

* Handles connection and sending/receiving configuration
* ```text
  # Kafka 
  kafka.bootstrap.servers = ""
  kafka.clientId = ""
  kafka.topic = ""
  kafka.outbound.topic = ""
  kafka.group.id = ""
  kafka.msgId.prefix = "kafkaTestMsgID"
  ```

