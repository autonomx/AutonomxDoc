# Intellij

## Download Intellij Community Edition

* Go to [https://www.jetbrains.com/idea/download/](https://www.jetbrains.com/idea/download/)

## Clone project

* Clone the Autonomx project from github
* [https://github.com/autonomx/Autonomx](https://github.com/autonomx/Autonomx) or [https://github.com/autonomx/AutonomxWeb](https://github.com/autonomx/AutonomxWeb) \(for just web + api testing\)
* Select "clone or download" -&gt; Download as zip
* or Clone with command: git clone [https://github.com/autonomx/AutonomxWeb.git](https://github.com/autonomx/Autonomx.git)

## Launch Automation Project Through Intellij

* The automation project is already setup for intellij
* **Launch Intellij -&gt; Open**
* Navigate to: project folder -&gt; autonomx -&gt; automation -&gt; open
* Import maven dependencies from the Intellij 

![](../../.gitbook/assets/image%20%2810%29.png)

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

![](../../.gitbook/assets/image%20%2829%29.png)

### Verify Annotation Processor 

* Ensure the annotation processor is disabled
* Autonomx uses maven through Ant file to generate annotation class files

![](../../.gitbook/assets/image%20%287%29.png)

### Verify Test

* Navigate to src -&gt; test -&gt; java -&gt; test.modules -&gt; web.tests
* Right click on VerifyLoginTest and select "Run 'VerifyLoginTest'"

![](../../.gitbook/assets/image%20%2816%29.png)

### Verify Results

* Results should be displayed in the testNG panel

![](../../.gitbook/assets/image%20%289%29.png)



