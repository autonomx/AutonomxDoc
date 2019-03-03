# Global Config



## Description

* Handles configuration applicable to all projects
* ```text
  # global configuration
  global.timeoutSeconds=60
  global.parallelTestCount = 1
  global.retryCount = 1
  global.isSingleSignIn = false
  ```

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
      <td style="text-align:left">global.timeoutSeconds</td>
      <td style="text-align:left">Specifies the test timeout</td>
    </tr>
    <tr>
      <td style="text-align:left">global.parallelTestCount</td>
      <td style="text-align:left">
        <p>Sets the number of tests running in parallel</p>
        <p>Applicable to Backend, Web, iOS, Android</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">global.retryCount</td>
      <td style="text-align:left">Sets test retry count on failure</td>
    </tr>
    <tr>
      <td style="text-align:left">global.isSingleSignIn</td>
      <td style="text-align:left">Specifies if the driver will quite after each test or continue using the
        same driver. Applicable to Web, iOS and Web. Useful for mobile testing
        where relaunching the app and logging in is expensive.</td>
    </tr>
    <tr>
      <td style="text-align:left"></td>
      <td style="text-align:left"></td>
    </tr>
  </tbody>
</table>