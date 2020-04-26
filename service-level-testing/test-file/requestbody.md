# RequestBody

## Json Body

* Json body can be set in the RequestBody
* Content type should be set in ContentType column
* eg. 

![](../../.gitbook/assets/image%20%2846%29.png)

## Xml Body

* Similar to Json body, xml request can be set in the RequestBody column
* Content type should be set in ContentType column

## Form Body

* Form parameters are set as key:value separated by ","
* Content type must be set. eg. application/x-www-form-urlencoded
* eg.
* ```text
  username:zzz_test<@_TIME16>,
  email:testuser+<@_TIME16>@gmail.com,
  password:password<@_TIME16>,
  confirmed:true
  ```

![](../../.gitbook/assets/image%20%281%29.png)

## Templates

* We can use template files for our request body and overwrite their values
* The advantage of template file is that it is centralized and reusable
* Template files are located at **apiTestData -&gt; templates** directory

![](../../.gitbook/assets/image%20%2893%29.png)

### Json Template

* We set csv columns:
  * **TemplateFile**:  Filename.extension
    * eg. Quiz.json
    * We set the file name at the TemplateFile column
  * **RequestBody**: [jsonPath](https://docs.autonomx.io/service-level-testing/interface/rest-api/json-path):value
    * We identify field to overwrite using [jsonPath](https://docs.autonomx.io/service-level-testing/interface/rest-api/json-path)
    * eg. quiz.sport.q1.options:2
    * Multiple replacements are separated by ";"

### XML Template

* We set csv columns:
  * **TemplateFile**: Filename.extension
    * eg. Defects.xml
    * We set the file name at TemplateFile column
  * **RequestBody**: Field:position:value
    * eg. soi:EquipmentID:1:test33
      * soi.EquipmentId: is the field name
      * 1: first occurrence of this field 
      * test33: value to set or overwrite the value in xml file
    * Multiple replacements are separated by ";"



## Dynamic Values

* Variables can be set using &lt;@variable&gt; syntax
* Variables can be set at [**apiConfig.properties**](https://docs.autonomx.io/configuration/apiconfig) file, or set in the test file using [&lt;$variable&gt; syntax, or using a keyword](https://docs.autonomx.io/service-level-testing/features/configuration#storing-values)

