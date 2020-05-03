# Group

## Purpose

* We can specify a **group of property files** profile using the Group feature
* This is useful if we want to specify different environment containing multiple property files

## Implementation

* In automation -&gt; resource directory, we create a directory pertaining to our group. eg. environment
* We then add the different group property files, each containing info about the different environments to test on
  * eg. regression directory will contain all property files for regression environment
  * 

![](../../.gitbook/assets/image%20%2869%29.png)

## Define Group

* We then specify the groups in the **properties.property** file
* ```text
  config.group.suite.default = "./resources/properties/suiteConfig/default/"
  config.group.suite.regression = "./resources/properties/suiteConfig/regression/"
  ```

  * Syntax: config.group.&lt;groupname&gt;.&lt;groupId&gt;
  * **prefix**:  "config.group"
  * **group name**: suite
  * **group Id**: regression

## Specify Group

* We can the specify the desired group in Properties.property file
* ```text
  # suite group
  profile.group.suite = regression
  ```

  * Syntax: profile.group.&lt;group name&gt; = &lt;group id&gt;
  * We can specify different group as: 
    * ```text
      profile.group.suite = default
      ```



