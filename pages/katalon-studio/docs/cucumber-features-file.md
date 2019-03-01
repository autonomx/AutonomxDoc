---
title: "Cucumber Features File" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/cucumber-features-file.html 
redirect_from:
    - "/display/KD/Cucumber+Features+File/"
    - "/display/KD/Cucumber%20Features%20File/"
    - "/x/OBLR/"
    - "/katalon-studio/docs/cucumber-features-file/"
description: 
---
Overview
--------

> *   For the best performance, please clean up the Katalon workspace frequently. Navigate to **File** \> **Clean up**.

Features File is located within **'Include/'features'** folder from your project folder and can be seen from _Tests Explorer_:

![](../../images/katalon-studio/docs/cucumber-features-file/Screenshot-at-Sep-04-11-17-22.png)

The content of _Features_ File will follow BDD conventions (_Given, When, The_n). When creating a new _Features_ File, there will be an option to '**Generate sample Feature template**' which will generate a sample template for your _Features_ File. This will ensure that the created _Features_ File matches with BDD convention so that you will reduce efforts in creating _Features_ File in the correct format. 

![](../../images/katalon-studio/docs/cucumber-features-file/Screen-Shot-2018-09-06-at-11.34.52-AM.png)

Let's look at an example of Katalon Demo Cura System ([http://demoaut.katalon.com).](http://demoaut.katalon.com%29./) We want to test the _Login_ feature with a valid and invalid credential so the content will be something like this:

> Tags are a great way to organize Features and Scenarios. [Read more...](https://docs.cucumber.io/cucumber/api/#tags)

![](../../images/katalon-studio/docs/cucumber-features-file/Screen-Shot-2018-09-06-at-9.00.58-AM.png)

**Sample Features File **

```groovy
#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Login
Feature: Login Feature
  
  As a user, I want to login to Cura System
  so that I can make an appointment.

  @Valid
  Scenario Outline: Login with a valid credential
    Given I navigate to Cura System homepage
    When I click Make Appointment button
    And I enter username <username> and password <password>
    And I click Log in button 
	Then I should be able to login successfully

    Examples: 
      | username | password           |
      | John Doe | ThisIsNotAPassword |

  @InValid
  Scenario Outline: Login with an invalid credential
    Given I navigate to Cura System homepage
    When I click Make Appointment button
    And I enter an invalid username <username> and password <password>
    And I click Log in button
	Then I should NOT be able to login successfully

    Examples: 
      | username | password           |
      | Jane Doe | ThisIsNotAPassword |
```

Maintain Features File
----------------------

> *   Katalon Studio code inspection will detect and highlight any missing _Step Definitions_ in _Features File_ to help the user create the required step definitions.

  
There will be cases the current _Features_ File meet one of the following maintenance difficulties:

*   The current format is not organized properly.
*   Figure out which _Step Definitions_ is mapped with current _Gherkin_ step.
*   Recalculate steps in the _Features_ file when there are changes in _Step Definitions_.

Above difficulties have been handled directly from the context menu of Feature File editor.

![](../../images/katalon-studio/docs/cucumber-features-file/Screen-Shot-2018-09-06-at-9.04.08-AM.png)

| Action | Description |
| --- | --- |
| Pretty Format | Re-do the format. |
| Find Step | Find relevant step of current Gherkin step in existing Step Definitions files. |
| Recalculate steps | Recalculate steps in the Feature file when there are changes in Step Definitions. |