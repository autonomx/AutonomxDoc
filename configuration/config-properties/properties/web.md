# Web

## Description

* Handles configuration for web apps
* ```
  # Web
  webApp="http://demo.autonomx.io/admin/"
  web.browserType = CHROME
  web.capabilities.takesScreenshot = true
  chrome.options.start-fullscreen = false
  firefox.options.start-fullscreen = false
  chrome.pref.intl.accept_languages = language
  firefox.pref.intl.accept_languages = language
  web.element.highlight.enable = false
  web.element.highlight.waitDurationInSeconds = 0.1
  web.driverVersion = LATEST
  web.maximizeBrowser = false
  web.webdriverType = LOCAL_WEBDRIVER
  web.remote.server.url = localhost
  web.remote.server.port = 4444
  ```

## Parameters

* The format of the parameter is \<web application name> = \<url>
* The web application name is the name of the module folder



![](<../../../.gitbook/assets/image (6).png>)

| Parameter                                              | Description                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \<web application name>. eg. webApp                    | url for the web app                                                                                                                                                                                                                                                                 |
| web.browserType                                        | Options: CHROME, FIREFOX, INTERNET\_EXPLORER, MICROSOFT\_EDGE, Opera, CHROME\_HEADLESS, FIREFOX\_HEADLESS, SAFARI                                                                                                                                                                   |
| web.capabilities.takeScreenshot                        | <p></p><p>To add additional web desired capabilities, add capability after the prefix: "web.capabilities."</p>                                                                                                                                                                      |
| <p><br>chrome.options.start-fullscreen</p>             | <p><br>To add additional chrome options, add options after the prefix: "chrome.options."</p><ul><li>eg. chrome.options.headless, which equals chrome option argument: --headless</li><li>For more arguments: https://peter.sh/experiments/chromium-command-line-switches/</li></ul> |
| firefox.options.start-fullscreen = false               | <p></p><p>To add additional firefox options, add options after the prefix: "firefox.options."</p><ul><li>eg. firefox.options.headless, which equals chrome option argument: --headless</li></ul>                                                                                    |
| <p><br>chrome.pref.intl.accept_languages </p>          | <p><br>To add additional chrome preferences, add options after the prefix: "chrome.pref."</p>                                                                                                                                                                                       |
| <p><br>firefox.pref.intl.accept_languages</p>          | To add additional firefox preferences, add options after the prefix: "firefox.pref."                                                                                                                                                                                                |
| <p><br>web.element.highlight.enable</p>                | <p><br>Highlights click and send key field</p>                                                                                                                                                                                                                                      |
| <p><br>web.element.highlight.waitDurationInSeconds</p> | Duration is time in seconds to pause during highlight                                                                                                                                                                                                                               |
| <p><br>web.driverVersion</p>                           | <p><br>Options: LATEST or version number. eg. 56.4</p>                                                                                                                                                                                                                              |
| <p><br>web.maximizeBrowser</p>                         | Maximize the browser on start                                                                                                                                                                                                                                                       |
| web.webdriverType                                      | <p><br>Options: REMOTE_WEBDRIVER, LOCAL_WEBDRIVER</p>                                                                                                                                                                                                                               |
| <p><br>web.remote.server.url</p>                       | <p>URL for remote Selenium Grid Server <br>Valid when REMOTE_WEBDRIVER is selected</p>                                                                                                                                                                                              |
| <p><br>web.remote.server.port</p>                      | Port for remote Selenium Grid Server                                                                                                                                                                                                                                                |
