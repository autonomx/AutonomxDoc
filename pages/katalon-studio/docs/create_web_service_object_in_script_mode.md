---
title: "Create Web Service Object in Script Mode"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/create_web_service_object_in_script_mode.html
redirect_from:
    - "/katalon-studio/docs/create_web_service_object_in_script_mode/"
    
description: 
---


Katalon Studio provides API testing capabilities with REST and SOAP services which are easily accessible through an intuitive User Interface. However, you can also create and manipulate such web service objects directly within test cases in script view. 

The following example demonstrates how to create, send and verify a simple request to Jira Web Service API. You can see the result for yourself following the steps below: 
- Open Katalon Studio.
- Open a test case.
- Switch to Script mode.
- Copy and paste the following code.
- Execute the test case

```groovy
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.HttpBodyContent
import com.kms.katalon.core.testobject.impl.HttpTextBodyContent
import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.TestObjectProperty
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import java.util.List
import java.util.ArrayList
import java.util.HashMap

// Put body content properties into a map
HashMap<String, Object> innerBodyContentMap = new HashMap<>();
HashMap<String, Object> projectMap = new HashMap<>();
projectMap.put('key', 'KD')
innerBodyContentMap.put('project', projectMap)

innerBodyContentMap.put('summary', 'REST - Create new issue using API')
innerBodyContentMap.put('description', 'Creating of an issue using project keys and issue type names using the REST API')

HashMap<String, Object> issueTypeMap = new HashMap<>()
issueTypeMap.put('name', 'Story')
innerBodyContentMap.put('issuetype', issueTypeMap)


HashMap<String, Object> priorityMap = new HashMap<>()
priorityMap.put('name', 'High')
innerBodyContentMap.put('priority', priorityMap)

// Convert map into Json
def jsonBodyContent = new groovy.json.JsonBuilder()
jsonBodyContent fields: innerBodyContentMap

// Convert Json into String 
String bodyContent =  jsonBodyContent.toString()
// Create body content property
HttpTextBodyContent httpBodyContent = new HttpTextBodyContent(bodyContent);

// Create header properties
List<TestObjectProperty> httpHeaderProperties = new ArrayList<>()
httpHeaderProperties.add(new TestObjectProperty("Content-Type", ConditionType.EQUALS, 'application/json'))
httpHeaderProperties.add(new TestObjectProperty("Authorization", ConditionType.EQUALS, 'Basic ZGVtb0BrYXRhbG9uLmNvbTpWQm5jZXRPU083MEU0TlZMWVFuaDlCMkQ='))

RequestObject scriptedWso = new RequestObject('Create a new issue with script')
scriptedWso.setBodyContent(httpBodyContent)
scriptedWso.setServiceType('REST')
scriptedWso.setHttpHeaderProperties(httpHeaderProperties)
scriptedWso.setRestUrl('https://katalon.atlassian.net/rest/api/2/issue/?')
scriptedWso.setRestRequestMethod('POST')

// Send the request and get the response
response = WS.sendRequest(scriptedWso)
	
// Verify the response
WS.verifyResponseStatusCode(response, 201)
// Result: Test case successfully executed 
```

The test case will be executed successfully. You can achieve the same result by manually creating  a Web Service Object then add the same information. These manually created objects will be saved in repository and are easily referenced in test cases without huge chunk of code. 

However, if you are interested in a one time request without the reusability, then programmatically creating a web service object is a good practice. If you desire both reusability and customizability, you can create your own Custom Keyword that builds a Web Service Object in the above manner and call it in your test cases.
