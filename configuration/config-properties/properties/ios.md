# iOS

## Description

* Handles configuration applicable to Android testing
* ```text
  #iOS
  ios.app = "eurika.app"
  ios.appDir = "resources/"
  ios.mobile = "iPhone 7"
  ios.tablet = "iPad Air 2"

  # udid for real device
  ios.UDID = ""

  ios.keyboard.dismissIfBlocking = false
  ios.keyboard.dismiss.Strategy = keyPress
  ios.keyboard.dismissByKeyPress = Done, DONE, Hide keyboard, Hide, Next

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

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">ios.app</td>
      <td style="text-align:left">ios app name</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.app_dir</td>
      <td style="text-align:left">ios app directory</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.mobile</td>
      <td style="text-align:left">mobile emulator name. If real device is connected, the real device will
        be selected</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.tablet</td>
      <td style="text-align:left">tablet emulator name. If real device is connected, the real device will
        be selected</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.UDID</td>
      <td style="text-align:left">UDID of the iOS real device. Test will run on the device when UDID is
        set</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.keyboard.dismissIfBlocking</td>
      <td style="text-align:left">dismiss keyboard if sendKey or formSubmit element is blocked by keyboard</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.keyboard.dismiss.Strategy</td>
      <td style="text-align:left">strategies: keyPress, tapOutside</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.keyboard.dismissByKeyPress</td>
      <td style="text-align:left">
        <p>for keyPress strategy: will press the following keys to dismiss keyboard.
          Will iterate through the list. change order based on priority. eg.
          <br />Done, DONE, Hide keyboard, Hide, Next.</p>
        <p>First will look for Done button, if not exist, DONE and so on...</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ios.deviceVersion</td>
      <td style="text-align:left">version of the simulator</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilties.fullReset</td>
      <td style="text-align:left">Perform a complete reset. <a href="http://appium.io/docs/en/writing-running-appium/caps/#ios-only">http://appium.io/docs/en/writing-running-appium/caps/#ios-only</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilties.noReset</td>
      <td style="text-align:left">on&apos;t reset app state before this session. <a href="http://appium.io/docs/en/writing-running-appium/caps/#ios-only">http://appium.io/docs/en/writing-running-appium/caps/#ios-only</a>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilties.orientation</td>
      <td style="text-align:left">(Sim/Emu-only) start in a certain orientation</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilities.waitForQuiescence</td>
      <td style="text-align:left">It allows to turn on/off waiting for application quiescence in WebDriverAgent,
        while performing queries. The default value is <code>true</code>. You can
        avoid <a href="https://github.com/appium/appium/issues/11132">this kind of issues</a> if
        you turn it off.</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilities.useNewWDA</td>
      <td style="text-align:left">If <code>true</code>, forces uninstall of any existing WebDriverAgent app
        on device. Set it to <code>true</code> if you want to apply different startup
        options for WebDriverAgent for each session. Although, it is only guaranteed
        to work stable on Simulator. Real devices require WebDriverAgent client
        to run for as long as possible without reinstall/restart to avoid issues
        like</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilities.clearSystemFiles</td>
      <td style="text-align:left">delete temporary app</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilities.shouldUseSingletonTestManager</td>
      <td style="text-align:left">Use default proxy for test management within WebDriverAgent. Setting this
        to <code>false</code> sometimes helps with socket hangup problems. Defaults
        to <code>true</code>.</td>
    </tr>
    <tr>
      <td style="text-align:left">ios.capabilities.shouldUseTestManagerForVisibleDetection</td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>