# Group

## Purpose

* We can specify a **group of property files** profile using the Group feature
* This is useful if we want to specify different environment containing multiple property files

## Implementation

* In automation -> resource directory, we create a directory pertaining to our group. eg. environment
* We then add the different group property files, each containing info about the different environments to test on
  * eg. regression directory will contain all property files for regression environment
  *

![](<../../.gitbook/assets/image (113).png>)

## Define Group

* We then specify the groups in the **properties.property** file
* ```
  config.group.suite.default = "./resources/properties/suiteConfig/default/"
  config.group.suite.regression = "./resources/properties/suiteConfig/regression/"
  ```
  * Syntax: config.group.\<groupname>.\<groupId>
  * **prefix**:  "config.group"
  * **group name**: suite
  * **group Id**: regression

## Specify Group

* We can the specify the desired group in Properties.property file
* ```
  # suite group
  profile.group.suite = regression
  ```
  * Syntax: profile.group.\<group name> = \<group id>
  * We can specify different group as:&#x20;
    * ```
      profile.group.suite = default
      ```

