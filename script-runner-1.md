# Script Runner

## Purpose

* Script Server will run the test suites on a web browser
* Script Server will run the tests defined in [Test Suite](https://ehsan-matean.gitbook.io/automationcore/~/edit/drafts/-L_LX4fZgKxC018opI_I/test-suite) 
* This can be used for demos or convenient means of running the test suites

![](.gitbook/assets/image%20%284%29.png)

## Script Server

* Script-server is a Web GUI and a web server for scripts
* [https://github.com/bugy/script-server](https://github.com/bugy/script-server)

## Requirement

Python 3.4 or higher with the following modules:

* Tornado 4/5
* typing _\(for python 3.4 only\)_

## Installation

* run ⁨automation-client⁩ ▸ ⁨runner⁩ ▸ ⁨utils⁩ ▸ ⁨script-server⁩ ▸ setup.sh ⁨

## Generating Tests

* Tests defined in test suites can be converted to be run by Script Runner through executing the generateScript.sh file located at automation-client⁩ ▸ ⁨runner⁩ ▸ generateScripts.sh
* Test scripts will be generated at linux, mac and win folder of the same runner directory
* Script Runner will pick up the bash scripts from the mac directory and run them through the server 

## Run

* run ⁨automation-client⁩ ▸ ⁨runner⁩ ▸ scriptServer.sh
* server will run on [http://localhost:5000](http://localhost:5000/)



![](.gitbook/assets/image%20%284%29.png)

## Admin panel

Admin panel is accessible on admin.html page \(e.g. [http://localhost:5000/admin.html](http://localhost:5000/admin.html)\)

![](.gitbook/assets/image%20%285%29.png)

