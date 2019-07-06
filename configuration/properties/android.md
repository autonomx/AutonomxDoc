# Android

## Description

* Handles configuration applicable to Android testing
* ```text
  # Android
  android.app = "selendroid.apk"
  android.appDir = "resources/"
  android.mobile = "Pixel_2_XL_API_25"
  android.tablet = "Pixel_2_XL_API_25"

  # udid for real device
  android.UDID = ""

  # to add additional capabilities, add capability after the "android.capabilities." prefix
  # Espresso or UiAutomator2
  android.capabilties.automationName= Espresso
  android.capabilties.deviceName= Android
  android.capabilties.unicodeKeyboard = true
  android.capabilties.resetKeyboard = true
  android.capabilties.fullReset = false
  android.capabilties.noReset = false
  android.capabilties.recreateChromeDriverSessions = true
  android.capabilties.autoGrantPermissions = true
  android.capabilties.newCommandTimeout = 300
  android.capabilties.noSign = true
  ```

* To add additional capabilities, add capability after the "android.capabilities." prefix

## Parameters

| Parameter | Description |
| :--- | :--- |
| android.capabilities.automationName | which engine is used to run the android tests. Options are Espresso or UiAutomator2. Espresso has better synchronization than UiAutomator2, however, in some instance, UiAutomator2 will work better. |
| android.app | android apk name |
| android.app\_dir | directory of android apk, from the root folder |
| android.mobile | simulator name for android mobile. Use android studios to create AVDs. [https://developer.android.com/studio/run/managing-avds](https://developer.android.com/studio/run/managing-avds) |
| android.tablet | simulator name for android tablet. Use android studios to create AVDs. [https://developer.android.com/studio/run/managing-avds](https://developer.android.com/studio/run/managing-avds) |
| android.UDID | UDID of the Android real device. Test will run on the device when UDID is set |
| android.capabilities.unicodeKeyboard | Enable Unicode input, default `false.` |
| android.capabilties.resetKeyboard | Reset keyboard to its original state, after running Unicode tests with `unicodeKeyboard` capability. Ignored if used alone. Default false. More info at [http://appium.io/docs/en/writing-running-appium/caps/](http://appium.io/docs/en/writing-running-appium/caps/) |
| android.capabilities.fullReset | Perform a complete reset. [http://appium.io/docs/en/writing-running-appium/caps/](http://appium.io/docs/en/writing-running-appium/caps/) |
| android.capabilties.noReset | Don't reset app state before this session. [http://appium.io/docs/en/writing-running-appium/caps/](http://appium.io/docs/en/writing-running-appium/caps/) |
| android.home | android home path. Set incase appium does not detect it |
| android.javaHome | java home path. Set incase appium does not detect it |



