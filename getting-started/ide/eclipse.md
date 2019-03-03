# Eclipse

## Download Eclipse

* [https://www.eclipse.org/downloads/eclipse-packages/](https://www.eclipse.org/downloads/eclipse-packages/)
* Download Eclipse IDE for Java Developers

## Launch Automation Project Through Eclipse

* Open eclipse
* Select File → Import → Maven → Import existing maven project
* Select Next
* Root Directory: Select the automation project folder
* Select the project

![](../../.gitbook/assets/image.png)

* Select finish

## Download Eclipse Plugin

* Select Help -&gt; Eclipse Marketplace
* Search for Testng
* Install and restart

## Enable Annotations

* Right click on the project folder -&gt; properties -&gt; Java Compiler -&gt; Annotation Processing
* Enable "Enable Annotation Process"
* Set "Generated source directory" to "./target/generated-sources/annotations"
* Apply and Close
* 
![](../../.gitbook/assets/image%20%287%29.png)

## Select Package View

* Select Package Explorer → Package Presentation → Hierarchical
* ![](../../.gitbook/assets/image%20%281%29.png)

## Verify The Setup

* Select login test from:
  * src → test → java → module -&gt; web -&gt; tests → VerifyLoginTest.java
  * Right click and select: Run As → TestNG Tests
  * 

![](../../.gitbook/assets/image%20%282%29.png)

* * Test should pass
  * 

![](../../.gitbook/assets/image%20%283%29.png)

