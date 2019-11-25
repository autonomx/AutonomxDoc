# Service Tests

## 

* Service level testing encompasses any backend, service, api, and database level testing
* These tests are compromised of: request, response, and verification
* Since these follow the same template, we have opted for using csv file to write the tests
* 1 line 1 complete test 
* This allows us to add lots of tests to each csv file, covering large number of permutations
* This falls in line with the [pyramid of testing](https://app.gitbook.com/@ehsan-matean/s/autonomx/testing-tips/pyramid-of-testing)

## Download Service Test Latest Release

* Go to [https://github.com/autonomx/Autonomx/releases](https://github.com/autonomx/Autonomx/releases)
* Download [autonomx-webWithService-&lt;version&gt;.zip](https://github.com/autonomx/Autonomx/releases/download/v1.0.4/autonomx-webWithService-1.0.4.zip)
* Or download the Web UI + API testing combination: [autonomx-webWithService-&lt;version&gt;.zip](https://github.com/autonomx/Autonomx/releases/download/v1.0.4/autonomx-webWithService-1.0.4.zip)
* Unpack 

## Run Setup

* Run autonomx -&gt; setup.sh/.bat
  * 

![](../.gitbook/assets/image%20%2855%29.png)

* Wait until the download of the maven dependencies are complete \(~10 mins\)

## Load The Project In IDE or Runner

* Open the project in [Intellij](https://docs.autonomx.io/getting-started/ide/intellij) or [Eclipse](https://docs.autonomx.io/getting-started/ide/eclipse) \( Please follow the instructions properly, as the config files are build in\)
* Or use the [Script Server](https://docs.autonomx.io/script-runner-1/installation) to quickly run the tests

## Run Sample Tests

* Run service test suite at "automation -&gt; suites -&gt; serviceTests.xml"
* If using web + service project, also run 
  * "automation -&gt; suites -&gt; serviceIntegration.xml"
* Test results will be displayed at the end of the run

## Create Tests

* Create new tests by modifying the api properties file: 
  *  ⁨automation⁩ -&gt; ⁨resources⁩ -&gt; properties -&gt; apiConfig.property
  * More Info [API Config](https://docs.autonomx.io/configuration/apiconfig/api)
* Create CSV files at "apiTestData -&gt; testCases" directory
* Instructions: [Rest API Tests](https://docs.autonomx.io/service-level-testing/rest-api)

