# Code Usage

## Purpose

* We can access the config values in code 

## Usage

* Values added to properties files are run through code generation to become accessible 
* Syntax: ConfigVariable.&lt;property name&gt;.to&lt;type&gt;\(\)
* eg.
* ```text
  // Accessing config integer values
  ConfigVariable.globalTimeoutSeconds().toInt();

  // for boolean values
  boolean appiumLogging = ConfigVariable.appiumLogging().toBoolean();

  // for String values
  String appiumLogLevel = ConfigVariable.appiumLogginLevel().toString();
  ```



## Scope

* Config values are scoped based on access layer. 
  * Config value set or updated at before suite, is available to all tests
  * Config value set or updated at before class, is available to all tests in set class
  * Config value set or updated at test method, is available to the test only



