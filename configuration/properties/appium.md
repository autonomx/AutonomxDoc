# Appium



## Description

* Handles configuration applicable to appium
* ```text
  #Appium
  appium.path = "/usr/local/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
  # set to DEFAULT or version. eg.2.41. version match: http://appium.io/docs/en/writing-running-appium/web/chromedriver/
  appium.chromeVersion = "DEFAULT"
  appium.logging = false
  # info or debug
  appium.logginLevel = info  
  # external server 
  appium.useExternalAppiumServer = false
  appium.externalPort = 4723
  ```

## Parameters

| Parameter | Description |
| :--- | :--- |
| appium.path | system path used for appium. Incase of running into environmental path issues. Optional |
| appium.chromeVersion | chrome version for hybrid apps. Used for switching between web view and native view. Set to DEFAULT or version. eg.2.41. version match: http://appium.io/docs/en/writing-running-appium/web/chromedriver/ |
| appium.logging | is appium logging enabled. Turn on when appium internal server is failing. Internal appium server is appium server running through code rather than through command line or appium desktop. |
| appium.loggingLevel | the level of logging for appium. Info or debug. |
| appium.useExternalAppiumServer | use an external appium server. eg. appium desktop or run from command line. Use this in case the internal appium server fails. Internal appium server is appium server running through code rather than through command line or appium desktop. |
| appium.externalPort | port for external server. By default its 4723. |

