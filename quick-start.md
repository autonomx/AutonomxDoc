# Quick Start

## Quick Test Run Using Generated Scripts

* Download the latest release of [Autonomx](https://github.com/autonomx/Autonomx/releases) based on your project needs

![choose the platform to test](.gitbook/assets/image%20%2867%29.png)

* Run the setup: 
  * setup.bat \(windows\)
  * setup.sh \(osx, linux\)
  * This will download maven if not installed, and all the required dependencies
* Navigate to runner//. eg. runner/mac/restTests.sh
* The run scripts are generated from testng testSuites by runner/generateScripts.sh. Each script is associated with a suite of tests

![](.gitbook/assets/image%20%2879%29.png)

## Manual Run

* Run automation -&gt; setup.bash/.bat
* To compile using command line:
  * at: automation directory:
  * run command: **mvn clean compile test -DsuiteXmlFile=suites/servicesTests.xml**
  * This will compile and run the test suite: serviceTests.xml

## IDE Setup

* For Intellij IDE, navigate to [Intellij Setup Page](https://docs.autonomx.io/getting-started/ide/intellij)
* For Eclipse IDE, navigate to [Eclipse Setup Page](https://docs.autonomx.io/getting-started/ide/eclipse)



