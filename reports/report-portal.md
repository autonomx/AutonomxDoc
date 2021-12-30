# Report Portal

![](<../.gitbook/assets/image (135).png>)

## Installation

* Install Server through docker
  * [https://reportportal.io/docs/Deploy-with-Docker](https://reportportal.io/docs/Deploy-with-Docker)
* Once server is up and running, it can be accessed at `http://<server>:8080. eg. http://localhost:8080`

## Setup

* Set server info at properties file
* At resources -> properties -> report.property
* ![](<../.gitbook/assets/image (136).png>)
* Set end point
  * `rp.endpoint = http://localhost:8080`
* Set enabled
  * `rp.enable = true`
* Set Launcher name
  * `rp.launch = Autonomx`
* Set uuid
  * uuid is access token provided at user profile page
  * ![](<../.gitbook/assets/image (138).png>)
  * `rp.uuid =`&#x20;
* Set Project
  * `rp.project = superadmin_personal`

## Create Dashboard

* Dashboard can be created for each project
* ![](<../.gitbook/assets/image (137).png>)
* Widgets and charts can be added to the dashboard
* [https://reportportal.io/docs/Dashboards-and-Widgets](https://reportportal.io/docs/Dashboards-and-Widgets)



* [ ] ``
