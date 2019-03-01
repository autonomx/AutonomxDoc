---
title: "Step Definitions" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/step-definitions.html 
redirect_from:
    - "/display/KD/Step+Definitions/"
    - "/display/KD/Step%20Definitions/"
    - "/x/OxLR/"
    - "/katalon-studio/docs/step-definitions/"
description: 
---
Each Gherkin step in the _Features_ file needs to be defined as a set of programming code so that the machine can execute the actions of these steps. These _Step Definitions_ can be implemented in _Keyword_ folder by leveraging the **Script Mode**. Katalon Studio built-in keywords can also be re-used in step definition files as well. When Katalon Studio executes any _Features_ files in the test case, it will also look for the matching step definitions in the source folder.

> *   Step Definitions can be written in any Cucumber-supported programming languages including Groovy and Java.

  
For example, let's take the Gherkin scenarios from _Features_ File above and define the steps:

![](../../images/katalon-studio/docs/step-definitions/Screen-Shot-2018-08-30-at-2.11.31-PM.png)

**Step Definitions**

```groovy
class MyStepDefinition {

	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	@Given("I navigate to Cura System homepage")
	def I_navigate_to_Cura_System_homepage() {

		WebUI.openBrowser("http://demoaut.katalon.com")
		//WebUI.waitForPageLoad(30)
	}

	@When("I click Make Appointment button")
	def I_click_makeAppointment_button() {

		WebUI.click(findTestObject('Page_CURA Healthcare Service/a_Make Appointment'))
	}
 
	@And("I enter username (.*) and password (.*)")
	def I_enter_valid_username_password(String username, String password) {

		WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_userName'), username)
		WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_password'), password)
	}
 
	@And("I click Log in button")
	def I_click_login_btn() {

		WebUI.click(findTestObject('Page_CURA Healthcare Service/button_Login'))
	}
 
	@Then("I should be able to login successfully")
	def I_login_successfully() {

		WebUI.click(findTestObject('Page_CURA Healthcare Service/button_Login'))
		WebUI.verifyTextPresent('Make Appointment', false)
		WebUI.closeBrowser()
	}

	@And("I enter an invalid username (.*) and password (.*)")
	def I_enter_invalid_username_password(String username, String password) {
		
		WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_userName'), username)
		WebUI.setText(findTestObject('Page_CURA Healthcare Service/input_password'), password)
	}

 
	@Then("I should NOT be able to login successfully")
	def I_login_unsuccessfully() {

		WebUI.verifyTextPresent('Login failed! Please ensure the username and password are valid.', false)
		WebUI.closeBrowser()
	}

}


```
