---
description: Rabbit MQ
---

# Rabbit MQ

## Purpose

* We can run rabbit mq tests through csv files
* A single row in csv will have request, response and validation
* This allows for writing large number of tests quickly covering the requirements

## Implementation

* We can set the values in the csv file as follows:

![](../../.gitbook/assets/image%20%2894%29.png)



| TestSuite | TestCaseID | RunFlag | Description | InterfaceType | UriPath | ContentType | Method | Option | RequestHeader | TemplateFile | RequestBody | OutputParam | RespCodeExp | ExpectedResponse | TcComments |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TsUser | rabbitmqTest | Y | sample rabbitmq test | RABBITMQ |  |  |  | response.identifier:&lt;@\_RAND7&gt; |  |  | { "event": { "breadcrumbId":   "BREADCRU-SING-PART-INDI-AAAA11111111", "profiles": \["de.group.ingestion-1.0.0.json"\], "data": { "groups": { "event": { "breadcrumbId": "BREADCRU-SING-PART-INDI-AAAA11111111", "dataFabricId": "AAAAAAAA-AAAA-AAAA-AAAA-AAAA11111111", "domain": "PARTY", "profile": "de.group-1.0.0.json", "data": { "groupUUID": "&lt;@\_RAND7&gt;", "groupType": "individual", "individualId": "AAAAAAAA-AAAA-1111", "familyName": "AAAA1", "groupStatus": "inactive", "communication": \[\] } } } } } } |  |  | EXPECTED_MESSAGE\_COUNT:1; && \_VERIFY.JSON.PART_ event.data.groups..data.groupUUID:contains\(uuid3n0\) |  |

* Important values:

  * **IntrfaceType**: RABBITMQ
  * **Option**: response.identifier:&lt;@\_RAND7&gt;
    * We collect all the response messages from the queue and identify the message we need through the identifier, which is a unique identifier we expect in the response. 
    * In this example, its the random value we use in the request body
  * **Request Body**: json, or xml body to send as message
  * **Expected Response**: 
    * EXPECTED_MESSAGE\_COUNT:1;_ 
      * The number of messages we expect in the response \(optional\)
    * _\_VERIFY.JSON.PART_ event.data.groups..data.groupUUID:contains\(uuid3n0\)
      * Json path validation
    * We can validate Json or XML responses. More info at the [Validation section](https://docs.autonomx.io/service-level-testing/validation)

