# Profile

## Purpose

* We can specify **single property file** profile using the Profile feature
* This is useful if we want to specify different environment 

## Implementation

* In automation -&gt; resource directory, we create a directory pertaining to our profile. eg. environment
* We then add the different profile property files, each containing info about the different environments to test on
  * eg. dev.property, qa.property...

![](../../.gitbook/assets/image%20%283%29.png)

## Define profile

* We then specify the profile in the **properties.property** file
* ```text
  # single config files. prefix: 'config.profile.'. select profile from inside the path
  config.profile.environment = "./resources/properties/environment/"    
  ```

  * We prefix the profile with "config.profile" and then the profile name
  * Additional profiles can be added using same syntax
    * eg:
    * ```text
      config.profile.suite = "./resources/properties/suite/"    
      ```

      * Here, we create new profile called "suite"

## Specify Profile

* We can the specify the desired profile in Properties.property file
* ```text
  # environment
  profile.environment = dev
  ```

  * Syntax: profile.profileName = profile
  * **environment**: the profile name we specified
    * ```text
      config.profile.environment = "./resources/properties/environment/"        
      ```
  * **dev**: The property file containing the profile info. In this case: **dev.property**



