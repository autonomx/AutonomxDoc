# Eclipse

## Download Eclipse

* [https://www.eclipse.org/downloads/eclipse-packages/](https://www.eclipse.org/downloads/eclipse-packages/)
* Download Eclipse IDE for Java Developers

## Clone Project

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

![](../../.gitbook/assets/image%20%2851%29.png)

* Wait until the download of the maven dependencies are complete \(~5 mins\)

## Launch Automation Project Through Eclipse

* Open eclipse
* Select File → Import → Maven → Import existing maven project
* Select Next
* Root Directory: Select the automation project folder
* Select the project

![](../../.gitbook/assets/image%20%2883%29.png)

* Select finish
* **If project has errors, Clean the project**
  * Projects -&gt; Clean...

![](../../.gitbook/assets/image%20%2880%29.png)

## Download TestNG Plugin

* Select Help -&gt; Eclipse Marketplace
* Search for Testng
* Install and restart



### Install Plugin Manually

* If the TestNG plugin is not found in the eclipse market place:
* Go to url [http://dl.bintray.com/testng-team/testng-eclipse-release//](http://dl.bintray.com/testng-team/testng-eclipse-release//)
* Go to latest TestNG version link
* Copy the url of the version. eg. [http://dl.bintray.com/testng-team/testng-eclipse-release/6.14.3/](http://dl.bintray.com/testng-team/testng-eclipse-release/6.14.3/)
* In Eclipse: Navigate: Help -&gt; Install New Software
* Paste the link in the work with field

![](../../.gitbook/assets/image%20%281%29.png)

* Select Add
* Set Name: testNG
* Select testNG from the result and then Next
* 
![](../../.gitbook/assets/image%20%2838%29.png)

* Security warning could be displayed. Install anyways
* Restart eclipse to apply changes
* TestNG plugin should now be installed

## Disable Refresh Using Native Hooks Or Polling

* Select Eclipse -&gt; Preferences -&gt; Workspace
* Deselect "Refresh using native hooks or polling"
* This is important, so the code generator will not be called more than once per file update

![](../../.gitbook/assets/image%20%2830%29.png)



## Install CSV plugin

* CSV plugin allows for the csv files to be displayed 
* Go to: Helper -&gt; Eclipse Marketplace -&gt; Search for csv Edit resurrector
* Install the csv Edit resurrector plugin

![](../../.gitbook/assets/image%20%2866%29.png)

* Csv Files will not look like this:

![](../../.gitbook/assets/image%20%2811%29.png)

## Enable Annotations

* Right click on the project folder -&gt; properties -&gt; Java Compiler -&gt; Annotation Processing
* Enable "Enable Annotation Process"
* Set "Generated source directory" to "./target/generated-sources/annotations"
* Apply and Close

![](../../.gitbook/assets/image%20%2852%29.png)

## Select Package View

* Select Package Explorer → Package Presentation → Hierarchical
* ![](../../.gitbook/assets/image%20%2869%29.png)

## Verify The Setup

* Select login test from:
  * src → test → java → module -&gt; web -&gt; tests → VerifyLoginTest.java
  * Right click and select: Run As → TestNG Tests

![](../../.gitbook/assets/image%20%2840%29.png)

* * Test should pass

![](../../.gitbook/assets/image%20%2822%29.png)

