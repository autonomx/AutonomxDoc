# Table of contents

* [Overview](README.md)
* [Prerequisites](prerequisites/README.md)
  * [Android](prerequisites/android.md)
  * [iOS](prerequisites/ios.md)
* [Getting Started](getting-started/README.md)
  * [Quick Start](getting-started/quick-start.md)
  * [Android Tests](getting-started/android-tests.md)
  * [iOS Tests](getting-started/ios-tests.md)
  * [WinApp Tests](getting-started/winapp-tests.md)
  * [Web Tests](getting-started/web-tests.md)
  * [Service Tests](getting-started/service-tests.md)
  * [IDE](getting-started/ide/README.md)
    * [Intellij](getting-started/ide/intellij.md)
    * [Eclipse](getting-started/ide/eclipse.md)
* [Helpers](helpers/README.md)
  * [Localization Testing](helpers/localization-testing.md)
  * [Additional Helpers](helpers/additional-helpers.md)
* [Configuration](configuration/README.md)
  * [Config Properties](configuration/config-properties/README.md)
    * [Profile](configuration/config-properties/profile.md)
    * [Group](configuration/config-properties/group.md)
    * [Service Testing configuration](configuration/config-properties/apiconfig/README.md)
      * [RestFul Api](configuration/config-properties/apiconfig/api.md)
      * [DataBase](configuration/config-properties/apiconfig/database.md)
      * [Kafka](configuration/config-properties/apiconfig/kafka.md)
      * [Service Bus](configuration/config-properties/apiconfig/service-bus.md)
      * [RabbitMQ](configuration/config-properties/apiconfig/rabbitmq.md)
    * [UI Testing Properties](configuration/config-properties/properties/README.md)
      * [Email](configuration/config-properties/properties/email.md)
      * [Screen Recorder](configuration/config-properties/properties/screen-recorder.md)
      * [Slack](configuration/config-properties/properties/slack.md)
      * [Global Config](configuration/config-properties/properties/global-config.md)
      * [Appium](configuration/config-properties/properties/appium.md)
      * [iOS](configuration/config-properties/properties/ios.md)
      * [Android](configuration/config-properties/properties/android.md)
      * [Web](configuration/config-properties/properties/web.md)
      * [Reports](configuration/config-properties/properties/reports.md)
  * [Code Usage](configuration/code-usage.md)
* [UI Testing](ui-testing/README.md)
  * [Test Data](ui-testing/test-data/README.md)
    * [Data Provider](ui-testing/test-data/data-provider.md)
    * [Csv Test Data](ui-testing/test-data/csv-test-data.md)
    * [Test Object](ui-testing/test-data/test-object.md)
  * [Test Panel](ui-testing/test-panel/README.md)
    * [Constructor](ui-testing/test-panel/structure.md)
    * [Locators](ui-testing/test-panel/locators.md)
    * [Actions](ui-testing/test-panel/actions.md)
  * [Test Case](ui-testing/test-case/README.md)
    * [Setting Up Driver](ui-testing/test-case/test-case-structure.md)
    * [Test Method](ui-testing/test-case/test-method.md)
    * [Cross Application Testing](ui-testing/test-case/cross-application-testing.md)
* [Service Level Testing](service-level-testing/README.md)
  * [Features](service-level-testing/features/README.md)
    * [Configuration and Variables](service-level-testing/features/configuration.md)
    * [Service Code Integration](service-level-testing/features/service-code-integration.md)
    * [MultiRun](service-level-testing/features/multirun.md)
  * [Test File](service-level-testing/test-file/README.md)
    * [TestSuite](service-level-testing/test-file/testsuite.md)
    * [TestCaseID](service-level-testing/test-file/testcaseid.md)
    * [UriPath](service-level-testing/test-file/uripath.md)
    * [ContentType](service-level-testing/test-file/contenttype.md)
    * [Method](service-level-testing/test-file/method.md)
    * [Header](service-level-testing/test-file/header.md)
    * [RequestBody](service-level-testing/test-file/requestbody.md)
    * [Option](service-level-testing/test-file/option.md)
    * [OutputParam](service-level-testing/test-file/outputparam.md)
    * [ExpectedResponse](service-level-testing/test-file/expectedresponse.md)
  * [Validation](service-level-testing/validation/README.md)
    * [Validation By XML Body](service-level-testing/validation/validation-by-xml-body.md)
    * [Validation By Partial Json](service-level-testing/validation/validation-by-partial-json.md)
    * [Validation By Response Body](service-level-testing/validation/validation-by-response-body.md)
    * [Validation By Json Body](service-level-testing/validation/validation-by-json-body.md)
    * [Custom Validation](service-level-testing/validation/custom-validation.md)
    * [Validation By Json Path](service-level-testing/validation/validation-by-json-path.md)
  * [Interface](service-level-testing/interface/README.md)
    * [Restful API](service-level-testing/interface/rest-api/README.md)
      * [Json Path](service-level-testing/interface/rest-api/json-path.md)
      * [Validation](service-level-testing/interface/rest-api/validation.md)
    * [Database](service-level-testing/interface/database.md)
    * [Service Bus](service-level-testing/interface/service-bus.md)
    * [Kafka](service-level-testing/interface/kafka.md)
    * [Rabbit MQ](service-level-testing/interface/rabbit-mq.md)
    * [External](service-level-testing/interface/external/README.md)
      * [Custom Method](service-level-testing/interface/external/custom-method.md)
      * [Test Base](service-level-testing/interface/external/test-base.md)
      * [Action](service-level-testing/interface/external/action.md)
    * [Custom Interface](service-level-testing/interface/custom-interface.md)
* [End-To-End Testing](end-to-end-testing/README.md)
  * [Cross Module Testing](end-to-end-testing/cross-module-testing.md)
  * [Cross Project Testing](end-to-end-testing/cross-project-testing.md)
* [Test Suite](test-suite/README.md)
  * [Create Test Suite](test-suite/create-test-suite.md)
  * [Run From Command Line](test-suite/run-from-command-line.md)
* [Script Runner](script-runner/README.md)
  * [Installation](script-runner/installation.md)
  * [Generating Tests Scripts](script-runner/generating-tests-scripts.md)
  * [Running Tests](script-runner/execute-tests.md)
* [Reports](reports/README.md)
  * [Report Portal](reports/report-portal.md)
  * [Persistent Report](reports/persistant-report.md)
  * [HTML Report](reports/reports.md)
  * [TestNG Report](reports/testng-report.md)
* [Integration](integration/README.md)
  * [Continuous Integration](integration/cloud-service/README.md)
    * [Microsoft Azure](integration/cloud-service/microsoft-azure-1/README.md)
      * [Web/Service Tests](integration/cloud-service/microsoft-azure-1/microsoft-azure.md)
      * [Android Tests](integration/cloud-service/microsoft-azure-1/android-tests.md)
      * [iOS Tests](integration/cloud-service/microsoft-azure-1/ios-tests.md)
  * [Cloud Services](integration/continuous-integration.md)
  * [Console Mode Execution](integration/console-mode-execution.md)
* [Testing Tips](testing-tips/README.md)
  * [Pyramid Of Testing](testing-tips/pyramid-of-testing.md)
