# RabbitMQ

## MessageQueue Configuration

* Message queue configuration applies to Rabbitmq, Service Bus and Kafka interfaces
*  * ```text
    # timeout in seconds for api calls to return response
    service.response.timeout.seconds = 60
    ```

| Parameter | Description |
| :--- | :--- |
| service.response.timeout.seconds | numbers of seconds to seek new messages until the expected message arrives |

## RabbitMq Configuration

* Rabbitmq connection info are set here
* ```text
  # Rabbit MQ
  rabbitMQ.host = "localhost"
  rabbitMQ.port = ""
  rabbitMQ.virtualhost = ""
  rabbitMQ.user = ""
  rabbitMQ.password = ""
  rabbitMQ.exchange = ""
  rabbitMQ.outbound.exchange = ""
  rabbitMQ.exchange.type = ""
  rabbitMQ.queue = ""
  rabbitMQ.outbound.queue = ""
  rabbitMQ.queue.declare = true
  rabbitMQ.Queue.durable = true
  rabbitMQ.msgId.prefix = "rabbitTestMsgID"
  ```



