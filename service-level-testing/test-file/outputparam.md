# OutputParam

## Output Parameters

* We can store values from the Json or XML response using the **OutputParam** column

## JSON Response

* Format: [jsonpath](https://docs.autonomx.io/service-level-testing/interface/rest-api/json-path):&lt;$variable&gt; 
* The stored variable can be accessed using &lt;@variable&gt; syntax
* Multiple variables can be stored, separated by ";" 
* eg. 
  * user.role.id:&lt;$role&gt;
    * Here, we're storing value from "user.role.id" at "role" variable
    * We can access this value in other tests using the syntax: &lt;@role&gt;.
      * See: [Configuration and Variables ](https://docs.autonomx.io/service-level-testing/features/configuration#accessing-config-values)section

![](../../.gitbook/assets/image%20%2847%29.png)

## XML Response

* Format: Field:position:value
* The stored variable can be accessed using &lt;@variable&gt; syntax
* Multiple variables can be stored, separated by ";" 
* eg.
  * soi.equipmentId:1:&lt;$equipment&gt;
  * Here we're storing the field value in XML file named "soi.equipmentId" at first occurrence at variable "equipment"
  * We can access this value in other tests using the syntax: &lt;@equipment&gt;.
    * See: [Configuration and Variables ](https://docs.autonomx.io/service-level-testing/features/configuration#accessing-config-values)section



