# Intellij

## Download Intellij Community Edition

* Go to [https://www.jetbrains.com/idea/download/](https://www.jetbrains.com/idea/download/)

## Clone project

* Go to [https://github.com/autonomx/Autonomx/releases](https://github.com/autonomx/Autonomx/releases)
* Download a release version based on the testing needs: service (api, db testing), web, iOS, Android, WinApp. See Getting Started:
  * [Android Tests](https://docs.autonomx.io/getting-started/android-tests)
  * [iOS Tests](https://docs.autonomx.io/getting-started/ios-tests)
  * [WinApp Tests](https://docs.autonomx.io/getting-started/winapp-tests)
  * [Web Tests](https://docs.autonomx.io/getting-started/web-tests)
  * [Service Tests](https://docs.autonomx.io/getting-started/service-tests)
* Unpack

## Run Setup

* Run autonomx -> setup.sh/.bat
  *

![](<../../.gitbook/assets/image (73).png>)

* Wait until the download of the maven dependencies are complete (\~5 mins)

## Launch Automation Project Through Intellij

* The automation project is already setup for intellij
* **Launch Intellij -> Open**
* Navigate to: project folder -> autonomx -> automation -> open
* Import maven dependencies from the Intellij&#x20;

![](<../../.gitbook/assets/image (26).png>)

## Verify Project

### Enable Annotation Processor&#x20;

* Intellij IDEA -> Preferences -> Build, Execution, Deployment -> Compiler -> Annotation Processors&#x20;

![](<../../.gitbook/assets/image (131).png>)

### Verify Test

* Navigate to src -> test -> java -> test.modules -> web.tests
* Right click on VerifyLoginTest and select "Run 'VerifyLoginTest'"

![](<../../.gitbook/assets/image (23).png>)

### Verify Results

* Results should be displayed in the testNG panel

![](<../../.gitbook/assets/image (24).png>)

