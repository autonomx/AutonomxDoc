# OutputParam

## Output Parameters

* We can store values from the Json or XML response using the **OutputParam** column

## JSON Response

* Format: [jsonpath](https://docs.autonomx.io/service-level-testing/interface/rest-api/json-path):<$variable>&#x20;
* The stored variable can be accessed using <@variable> syntax
* Multiple variables can be stored, separated by ";"&#x20;
* eg.&#x20;
  * user.role.id:<$role>
    * Here, we're storing value from "user.role.id" at "role" variable
    * We can access this value in other tests using the syntax: <@role>.
      * See: [Configuration and Variables ](https://docs.autonomx.io/service-level-testing/features/configuration#accessing-config-values)section

![](<../../.gitbook/assets/image (94).png>)

## XML Response

* Format: Field:position:value
* The stored variable can be accessed using <@variable> syntax
* Multiple variables can be stored, separated by ";"&#x20;
* eg.
  * soi.equipmentId:1:<$equipment>
  * Here we're storing the field value in XML file named "soi.equipmentId" at first occurrence at variable "equipment"
  * We can access this value in other tests using the syntax: <@equipment>.
    * See: [Configuration and Variables ](https://docs.autonomx.io/service-level-testing/features/configuration#accessing-config-values)section

