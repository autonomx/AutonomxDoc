# Configuration

* Properties can be found at ⁨automation-client⁩ ▸ ⁨automation⁩ ▸ ⁨resources⁩ ▸ properties.property
  * Contains properties pertaining web, ios, android, api, and winApp tests
* Configuration files .property and .conf are loaded into memory at run time
* Additional .conf or .property files can be added to resource folder and they will load at run time
* Additional folder locations can be added to properties.property file with prefix "config." and the location relative to root directory
* Config values are scoped based on access layer. 
  * Config value set or updated at before suite, is available to all tests
  * Config value set or updated at before class, is available to all tests in set class
  * Config value set or updated at test method, is available to the test only
* Additional configuration values can be added and retrieved using:
* ```text
  // Accessing config integer values
  ConfigVariable.globalTimeoutSeconds().toInt();

  // for boolean values
  boolean appiumLogging = ConfigVariable.appiumLogging().toBoolean();

  // for String values
  String appiumLogLevel = ConfigVariable.appiumLogginLevel().toString();
  ```
* Values can be updating to config using :
* ```text
  ConfigVariable.globalTimeoutSeconds().setValue(90); 
  ```
* Values can be added to config using
* ```text
  ConfigVariable.setValue("sample.value", true);

  To access added value:
  boolean value = ConfigVariable.getBooleanValue("sample.value");

  if Integer:
  int value = ConfigVariable.getIntegerValue("sample.value");

  if String:
  String value = ConfigVariable.getStringValue("sample.value");
  ```

