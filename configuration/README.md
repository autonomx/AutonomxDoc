# Configuration

* Properties can be found at ⁨automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨resources⁩ ▸ properties.property
  * Contains properties pertaining web, ios, android, and winApp tests
* apiConfig can be found at automation-client⁩ ▸ ⁨apiTestData ▸ apiConfig.property
  * Contains properties pertaining backend tests
* Configuration files .property and .conf are loaded into memory at run time
* Additional .conf or .property files can be added to resource folder and they will load at run time
* Additional folder locations can be added to properties.property file with prefix "config." and the location relative to root directory
* Config values are test local, meaning each test will have a copy of the copy properties. Values added or modified in config are only applicable to the current test.
* Additional configuration values can be added and retrieved using:
* ```text
  // for String values
  Config.getValue(key);
  //eg. Config.getValue("api.uriPath")

  // for boolean values
  Config.getBooleanValue(key)

  // for int values
  Config.getIntValue(key)
  ```
* Values can be added to config using :
* ```text
  Config.putValue(key, value)  //key and value are String type
  ```

