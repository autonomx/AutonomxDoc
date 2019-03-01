---
title: "Creation of Test Object in Object Repository in Runtime" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/creation-of-test-object-in-object-repository-in-runtime.html 
redirect_from:
    - "/display/KD/Creation+of+Test+Object+in+Object+Repository+in+Runtime/"
    - "/display/KD/Creation%20of%20Test%20Object%20in%20Object%20Repository%20in%20Runtime/"
    - "/x/SAXR/"
    - "/katalon-studio/docs/creation-of-test-object-in-object-repository-in-runtime/"
description: 
---
You can create a new Test Object in Object Repository during runtime using this custom keyword:

```groovy
/**
* Construct a Katalon-compatible TestObject in memory.
* @param css (String) The CSS selector used to find the target element.
* @return (TestObject) The constructed TestObject. 
*/
@Keyword
static TestObject makeTO(String css) {
	TestObject to = new TestObject()
	to.addProperty("css", ConditionType.EQUALS, css)
	return to
}

```

_Credit to [Russ Thomas](https://forum.katalon.com/discussion/6171/creation-of-test-object-in-object-repository-in-runtime#Comment_13991)_