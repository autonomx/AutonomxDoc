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

![](../../.gitbook/assets/image%20%2850%29.png)

* Wait until the download of the maven dependencies are complete \(~5 mins\)

## Launch Automation Project Through Intellij

* The automation project is already setup for intellij
* **Launch Intellij -&gt; Open**
* Navigate to: project folder -&gt; autonomx -&gt; automation -&gt; open
* Import maven dependencies from the Intellij 

![](../../.gitbook/assets/image%20%2813%29.png)

## Add Save Actions Plugin

* Save Actions plugin allows for the Ant code generator to run on save
* Navigate to preferences -&gt; plugins
  * search for Save Actions, install and restart

![](../../.gitbook/assets/image%20%2858%29.png)

* At preferences -&gt; Other Settings -&gt; Save Actions
  * Set "Activate save actions on save"
  * Set "No action if compile time errors"

![](../../.gitbook/assets/image%20%2883%29.png)

## Verify Project

### Verify Ant Build

* Ensure Ant build is available
* Select Ant build from the right side panel
* Ant build is used to generate source code
* If ant.xml is not available, try manually adding the file
  * Select Ant tool window: View -&gt; Tool Windows -&gt; Ant \([https://www.jetbrains.com/help/idea/ant-build-tool-window.html](https://www.jetbrains.com/help/idea/ant-build-tool-window.html)\)
  * Select + button to add ant file in Ant build tool window
  * Select ant.xml from root directory \( where pom.xml is \)
  * Right click on mvn-clean-generate target, and select Execute on -&gt; Before Compilation

![](../../.gitbook/assets/image%20%2848%29.png)

### Verify Annotation Processor 

* Ensure the annotation processor is disabled
* Autonomx uses maven through Ant file to generate annotation class files

![](../../.gitbook/assets/image%20%289%29.png)

### Verify Test

* Navigate to src -&gt; test -&gt; java -&gt; test.modules -&gt; web.tests
* Right click on VerifyLoginTest and select "Run 'VerifyLoginTest'"

![](../../.gitbook/assets/image%20%2822%29.png)

### Verify Results

* Results should be displayed in the testNG panel

![](../../.gitbook/assets/image%20%2811%29.png)



