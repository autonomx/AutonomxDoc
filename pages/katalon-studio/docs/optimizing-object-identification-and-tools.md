---
title: "Optimizing Object Identification and Tools" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/optimizing-object-identification-and-tools.html 
redirect_from:
    - "/display/KD/Optimizing+Object+Identification+and+Tools/"
    - "/display/KD/Optimizing%20Object%20Identification%20and%20Tools/"
    - "/x/fhlO/"
    - "/katalon-studio/docs/optimizing-object-identification-and-tools/"
description: 
---
> **If your test execution encounters errors related to your Test Object can't be found due to some specific reasons, you can refer to troubleshooting guide [here](/display/KD/Troubleshooting+common+issues+related+to+interacting+with+an+element) first before trying to optimize your Test Object's properties**

1.  Always try to use fixed ID attribute if available. Try to communicate with development team to put the Id on each web element at front-end development side. In case the ID is dynamic (changed in every page load), should try to use other properties and below tips.
2.  Depending on your system under test, try to use attributes that rarely changes when SUT makes changes, for example: name, ID, text, etc.
3.  Do not use attributes that can be changed when running on other environments such as hwdn, dynamic id, properties depending on screen resolution (width, height, x, y), etc.
4.  If ID attribute is not available, we can use other attributes which identifies uniquely the object. Plus, use the combination of attributes to make the XPath more specific. For example, "_//input\[@name ='qty' and @type='text'\]_". These attributes should have the meaning for end-users, such as name, title, text, etc.
5.  Make sure that we don't overuse multiple attributes. When capturing objects, first focus on one attribute only. Depend on each situation, then we can add more later.
6.  Use the Relative XPath instead of Absolute XPath statements
7.  Always avoid using indexes in XPath to identify an object in capturing and static defining objects. It is not reliable and with smallest modification, XPath may break.
8.  Use XPath functions in XPath wherever necessary to better identification such as _position(); last(); starts-with(); contains()_
9.  In case there are two objects with the same property value in a specific web page, try to identify a nearby object with unique identification and then locate to intended object.
10.  There are still debates in using CSS or XPath. People in favor of CSS say that it is more readable and faster. However those in favor of XPath claim that it's ability to transverse the page while CSS cannot. Most of these debates always are outdated. You should define your own strategy to determine the best approach for you and your team. In practical experience from our internal QA experts and some from outside, CSS tends to be better than XPath. CSS is more readable, brief, concise and behaves same in all browsers, especially dealing with IE browser. XPath will behave differently in IE browser. However, using CSS, when you defining an object, it's hard to identify its parents .
11.  **Tools** to identify objects on web applications:
    *   **Firebug** and **FirePath**: add-ons of Firefox browser. Please be noticed that the only difference from Automation tester point of view is FireBug returns Absolute XPath and FirePath returns Relative XPath.
    *   Developer tool of Chrome browser
    *   **XPath Helper**, **XPath Checker**:  adds-on of Chrome browser
    *   **WebDriver Element Locator**: an add-on of Firefox browser