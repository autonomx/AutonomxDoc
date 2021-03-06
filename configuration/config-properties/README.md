# Config Properties

## Properties Config

* Main configuration file is **Properties.property** located at automation -&gt; resources directory
* Here we set [config profile](https://docs.autonomx.io/configuration/config-properties/profile) and [config group](https://docs.autonomx.io/configuration/config-properties/group) for our properties
* ```text
  # properties/conf file location. add additional locations by prefixing with "config". eg. config.api = "../apiTestData/"
  # location from root directory ( where pom.xml file is located at )
  # note: to have config properties generated for new directory, add location to ant.xml file ( root directory, where pom.xml is )
  # at checkforCsvAndConfigchanges section. eg. <srcfiles dir="resources" includes="**/*.property"/>

  # main properties
  profile.group.root = main

  # environment
  profile.environment = dev

  # single config files. prefix: 'config.profile.'. select profile from inside the path
  config.profile.environment = "./resources/properties/environment/"

  # read all config files in . prefix: config.group.
  config.group.root.main = "./resources/properties/"
  ```
* [Config Profile](https://docs.autonomx.io/configuration/config-properties/profile): Single file property specifying an profile
* [Config Group](https://docs.autonomx.io/configuration/config-properties/group): Multiple property files specifying an profile
* User can create as many profiles and groups as needed

