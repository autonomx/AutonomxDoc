# Web

## Description

* Handles configuration for web apps
* ```text
  # Web
  webApp="http://45.76.245.149:1337/admin/"
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

* The format of the parameter is &lt;web application name&gt; = &lt;url&gt;
* The web application name is the name of the module folder



![](../../.gitbook/assets/image%20%2860%29.png)

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">&lt;web application name&gt;. eg. webApp</td>
      <td style="text-align:left">url for the web app</td>
    </tr>
    <tr>
      <td style="text-align:left">web.browserType</td>
      <td style="text-align:left">Options: CHROME, FIREFOX, INTERNET_EXPLORER, MICROSOFT_EDGE, Opera, CHROME_HEADLESS,
        FIREFOX_HEADLESS, SAFARI</td>
    </tr>
    <tr>
      <td style="text-align:left">web.capabilities.takeScreenshot</td>
      <td style="text-align:left">
        <p></p>
        <p>To add additional web desired capabilities, add capability after the prefix:
          &quot;web.capabilities.&quot;</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />chrome.options.start-fullscreen</td>
      <td style="text-align:left">
        <p>
          <br />To add additional chrome options, add options after the prefix: &quot;chrome.options.&quot;</p>
        <ul>
          <li>eg. chrome.options.headless, which equals chrome option argument: --headless</li>
          <li>For more arguments: https://peter.sh/experiments/chromium-command-line-switches/</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">firefox.options.start-fullscreen = false</td>
      <td style="text-align:left">
        <p></p>
        <p>To add additional firefox options, add options after the prefix: &quot;firefox.options.&quot;</p>
        <ul>
          <li>eg. firefox.options.headless, which equals chrome option argument: --headless</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />chrome.pref.intl.accept_languages</td>
      <td style="text-align:left">
        <br />To add additional chrome preferences, add options after the prefix: &quot;chrome.pref.&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />firefox.pref.intl.accept_languages</td>
      <td style="text-align:left">To add additional firefox preferences, add options after the prefix: &quot;firefox.pref.&quot;</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />web.element.highlight.enable</td>
      <td style="text-align:left">
        <br />Highlights click and send key field</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />web.element.highlight.waitDurationInSeconds</td>
      <td style="text-align:left">Duration is time in seconds to pause during highlight</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />web.driverVersion</td>
      <td style="text-align:left">
        <br />Options: LATEST or version number. eg. 56.4</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />web.maximizeBrowser</td>
      <td style="text-align:left">Maximize the browser on start</td>
    </tr>
    <tr>
      <td style="text-align:left">web.webdriverType</td>
      <td style="text-align:left">
        <br />Options: REMOTE_WEBDRIVER, LOCAL_WEBDRIVER</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />web.remote.server.url</td>
      <td style="text-align:left">URL for remote Selenium Grid Server
        <br />Valid when REMOTE_WEBDRIVER is selected</td>
    </tr>
    <tr>
      <td style="text-align:left">
        <br />web.remote.server.port</td>
      <td style="text-align:left">Port for remote Selenium Grid Server</td>
    </tr>
  </tbody>
</table>