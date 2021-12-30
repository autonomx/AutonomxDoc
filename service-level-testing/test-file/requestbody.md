# RequestBody

## Json Body

* Json body can be set in the RequestBody
* Content type should be set in ContentType column
* eg.&#x20;

![](<../../.gitbook/assets/image (91).png>)

## Xml Body

* Similar to Json body, xml request can be set in the RequestBody column
* Content type should be set in ContentType column

## Form Body

* Form parameters are set as key:value separated by ","
* Content type must be set. eg. application/x-www-form-urlencoded
* eg.
* ```
  username:zzz_test<@_TIME16>,
  email:testuser+<@_TIME16>@gmail.com,
  password:password<@_TIME16>,
  confirmed:true
  ```

![](<../../.gitbook/assets/image (93).png>)

## Templates

* We can use template files for our request body and overwrite their values
* The advantage of template file is that it is centralized and reusable
* Template files are located at **apiTestData -> templates** directory

![](<../../.gitbook/assets/image (109).png>)

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
      * 1: first occurrence of this field&#x20;
      * test33: value to set or overwrite the value in xml file
    * Multiple replacements are separated by ";"

### Data File

* We can use data files to store values to replace/overwrite template file values
* Example: for json template, we set columns:
  * **TemplateFile**: Car.json
    * The file name at **apiTestData -> templates** Directory
  * **RequestBody**: DataFile:Filename:dataId
    * eg. DataFile:Car:ninja
      * Car: Car.csv data file
      * ninja: dataId
    * Data File:
      * **dataId**: unique id for each data row
      * **column names**: Identifier of field for either json, or xml file
        * For Json template: we use  [jsonPath](https://docs.autonomx.io/service-level-testing/interface/rest-api/json-path)
          * eg. .model, .year, .type
          * Example: Car.csv
        * For XML template: we use Field:position to identify the field to set/overwrite.&#x20;
          * Example: Defects.csv

![Car.csv](<../../.gitbook/assets/image (110).png>)

![Defects.csv](<../../.gitbook/assets/image (111).png>)

## Dynamic Values

* Variables can be set using <@variable> syntax
* Variables can be set at [**apiConfig.properties**](https://docs.autonomx.io/configuration/apiconfig) file, or set in the test file using [<$variable> syntax, or using a keyword](https://docs.autonomx.io/service-level-testing/features/configuration#storing-values)
