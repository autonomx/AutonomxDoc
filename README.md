# Overview

Autonomx provides a complete testing platform for UI \(Web, iOS, Android, Win\) and API testing. It provides a feature rich and viable testing solution for end to end testing. They’re designed to be fast, scalable, reliable and adaptable to any requirements for ever growing projects.

* Open source UI automation testing framework based on Webdriver/Appium, TestNG/Junit, with maven integration.
* Unifies mobile and web testing, using a common, version controlled code base \(Autonomx Core\)
* Each testing project is treated as a client for the Automation Core, meaning one central code base for all UI testing projects
* A client can have multiple test projects, as well as multiple platforms \(web, Android, iOS, Win\), associated with it.
* Modular design. Each project/component is treated as a module,  fully capable of interacting with one another. This allows for multi component and multiplatform testing. Eg. Create user through component A \(API\), validate in component B \(web\), do action in component C \(Android\), validate results in component D \(iOS\)
* All interaction with the UI are through utility functions called Helpers, which are stable and optimized set of wrapper functions, removing inconsistencies in coding styles and enforcing testing best practices
* Integrates seamlessly with the API testing framework for end to end testing
* Detailed reports through ExtentTest reports

## Feature List



| Features | AUTONOMX |
| :--- | :--- |
| Test development platform | Cross-platform |
| Module Based Testing | Yes – End To End Product’s Integration Support |
| Application under test | Web, Mobile apps, Win app, API/Web services, Database testing |
| Scripting languages | Java |
| Programming skills | API: no coding skills required  UI: Low, Recommended for advanced test scripts |
| Framework Extendibility | Full – Can extend the framework for any feature |
| Learning curves | Medium |
| Ease of installation and use | Easy to setup and run |
| Script creation time | Quick |
| Object storage and maintenance | Object repository, Page object mode. Easy maintenance |
| Continuous integrations | Various CI tools \(e.g. Jenkins, Cruise Control, VSTS\) |
| Test Analytics | ExtentReports |
| Product support | Open source community support. |
| License type | Open source MIT |
| Cost | Free |

## Design

* Separated between Logic Core and Client
* 1 Logic Core, many clients
* Each client represents a project
* This allows for centralization of the framework
* Client imports the Logic Core as dependency Jar

![](.gitbook/assets/image%20%28110%29.png)

## 

