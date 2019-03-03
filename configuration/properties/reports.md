# Reports



## Description

* Handles configuration applicable to reports
* ```text
  # report options
  report.launchReportAfterTest = false
  report.enableDetailedReport = true
  report.audioCommentary = false
  # Options: MARY
  report.audioCommentaryType = "MARY"
  report.enableBatchLogging = false
  report.reportExpireDays = 5
  ```

## Parameters

| Parameter | Description |
| :--- | :--- |
| report.launchReportAfterTest | will launch the extent test report after the tests have completed  |
| report.enableDetailedReport | set false to remove test sub steps from the extent report, leaving only the high level gherkins test steps |
| report.audioCommentary | will enable text to speech for reading out the test steps. good for demos |
| report.audioCommentaryType | the text to speech voice to use |
| report.enableBatchLogging | will print out the console log once the test is complete. Useful for parallel runs, where you would want all the results displayed together  |
| report.reportExpireDays | the number of days to keep the test reports before deleting |

