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
* Launch Intellij -&gt; Open
* Navigate to: project folder -&gt; automation -&gt; open

## Verify Project

### Verify Ant Build

* Ensure Ant build is available
* Select Ant build from the right side panel
* Ant build is used to generate source code

![](../../.gitbook/assets/image%20%286%29.png)

### Verify Test

* Navigate to src -&gt; test -&gt; java -&gt; test.modules -&gt; web.tests
* Right click on VerifyLoginTest and select "Run 'VerifyLoginTest'"

![](../../.gitbook/assets/image%20%289%29.png)

### Verify Results

* Results should be displayed in the testNG panel

![](../../.gitbook/assets/image%20%284%29.png)

