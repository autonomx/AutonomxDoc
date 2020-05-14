# Intellij

## Download Intellij Community Edition

* Go to [https://www.jetbrains.com/idea/download/](https://www.jetbrains.com/idea/download/)

## Clone project

* Go to [https://github.com/autonomx/Autonomx/releases](https://github.com/autonomx/Autonomx/releases)
* Download a release version based on the testing needs: service \(api, db testing\), web, iOS, Android, WinApp. See Getting Started:
  * [Android Tests](https://docs.autonomx.io/getting-started/android-tests)
  * [iOS Tests](https://docs.autonomx.io/getting-started/ios-tests)
  * [WinApp Tests](https://docs.autonomx.io/getting-started/winapp-tests)
  * [Web Tests](https://docs.autonomx.io/getting-started/web-tests)
  * [Service Tests](https://docs.autonomx.io/getting-started/service-tests)
* Unpack

## Run Setup

* Run autonomx -&gt; setup.sh/.bat
  * 

![](../../.gitbook/assets/image%20%2877%29.png)

* Wait until the download of the maven dependencies are complete \(~5 mins\)

## Launch Automation Project Through Intellij

* The automation project is already setup for intellij
* **Launch Intellij -&gt; Open**
* Navigate to: project folder -&gt; autonomx -&gt; automation -&gt; open
* Import maven dependencies from the Intellij 

![](../../.gitbook/assets/image%20%2822%29.png)

## Verify Project

### Enable Annotation Processor 

* Intellij IDEA -&gt; Preferences -&gt; Build, Execution, Deployment -&gt; Compiler -&gt; Annotation Processors 

![](../../.gitbook/assets/image%20%2865%29.png)

### Verify Test

* Navigate to src -&gt; test -&gt; java -&gt; test.modules -&gt; web.tests
* Right click on VerifyLoginTest and select "Run 'VerifyLoginTest'"

![](../../.gitbook/assets/image%20%2834%29.png)

### Verify Results

* Results should be displayed in the testNG panel

![](../../.gitbook/assets/image%20%2820%29.png)



