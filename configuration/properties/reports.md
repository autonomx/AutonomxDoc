# Reports



## Description

* Handles configuration applicable to reports
* ```text
  # report options
  report.launchReportAfterTest = false
  report.enableDetailedReport = true

  report.audioCommentary = false
  report.audioCommentaryType = "MARY"
  report.enableBatchLogging = false
  report.reportExpireDays = 5

  # klov reporting info
  klov.server.url = http://localhost
  klov.mongodb.url = "localhost:27017"
  console.annotation.debug = false
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
| klov.server.url | klov report is a version of Extent Test Report with database backend for storing test history. Please refer to Reports/Persistent Report for more details |
| klov.mongodb.url | url for mongo db database used by klov report |
| console.annotation.debug | enable debug info for generated code using annotations. eg. code generated by @Panel, @Data... annotations |

