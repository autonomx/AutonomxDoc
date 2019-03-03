# iOS



## Description

* Handles configuration applicable to Android testing
* ```text
  #iOS
  ios.app = "eurika.app"
  ios.appDir = "resources/"
  ios.mobile = "iPhone 7"
  ios.tablet = "iPad Air 2"

  # to add additional capabilities, add capability after the "ios.capabilities." prefix
  ios.capabilties.platform = iOS
  ios.capabilties.platformVersion = 12.1
  ios.capabilties.automationName = XCuiTest
  ios.capabilties.fullReset = false
  ios.capabilties.noReset = true
  ios.capabilties.waitForQuiescence = false
  ios.capabilties.useNewWDA = true
  ios.capabilties.clearSystemFiles = false
  ios.capabilties.shouldUseSingletonTestManager = false
  ios.capabilties.shouldUseTestManagerForVisibilityDetection = false
  ```

* To add additional capabilities, add capability after the "ios.capabilities." prefix

## Parameters

| Parameter | Description |
| :--- | :--- |
| ios.app | ios app name |
| ios.app\_dir | ios app directory |
| ios.mobile | mobile emulator name |
| ios.tablet | tablet emulator name |
| ios.deviceVersion | version of the simulator |
| ios.capabilties.fullReset | Perform a complete reset. [http://appium.io/docs/en/writing-running-appium/caps/\#ios-only](http://appium.io/docs/en/writing-running-appium/caps/#ios-only) |
| ios.capabilties.noReset | on't reset app state before this session. [http://appium.io/docs/en/writing-running-appium/caps/\#ios-only](http://appium.io/docs/en/writing-running-appium/caps/#ios-only) |
| ios.capabilties.orientation | \(Sim/Emu-only\) start in a certain orientation |
| ios.capabilities.waitForQuiescence | It allows to turn on/off waiting for application quiescence in WebDriverAgent, while performing queries. The default value is `true`. You can avoid [this kind of issues](https://github.com/appium/appium/issues/11132) if you turn it off. |
| ios.capabilities.useNewWDA | If `true`, forces uninstall of any existing WebDriverAgent app on device. Set it to `true` if you want to apply different startup options for WebDriverAgent for each session. Although, it is only guaranteed to work stable on Simulator. Real devices require WebDriverAgent client to run for as long as possible without reinstall/restart to avoid issues like  |
| ios.capabilities.clearSystemFiles | delete temporary app |
| ios.capabilities.shouldUseSingletonTestManager | Use default proxy for test management within WebDriverAgent. Setting this to `false` sometimes helps with socket hangup problems. Defaults to `true`. |
| ios.capabilities.shouldUseTestManagerForVisibleDetection |  |

