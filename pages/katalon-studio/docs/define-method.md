---
title: "Define Method" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/define-method.html 
redirect_from:
    - "/display/KD/Define+Method/"
    - "/display/KD/Define%20Method/"
    - "/x/tgAM/"
    - "/katalon-studio/docs/define-method/"
    - "/display/KD/Define+method/"
description: 
---
A method consists of instructions to perform a specific task. Defined methods can be called for reused later. Refer to [Method Call Statements](/display/KD/Method+Call+Statements) for more details regarding how to call a defined method.

Define a method in Manual view
------------------------------

1.  Open a test case in **Manual** view, then select to add **Method** from command toolbar.  
    ![](../../images/katalon-studio/docs/define-method/image2017-6-30-203A453A48.png)  
      
    
2.  The **Method builder** dialog is displayed.   
    ![](../../images/katalon-studio/docs/define-method/image2017-2-10-153A483A9.png)  
    Specify the required information for your method as following:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Name</td><td>The name of the method.</td></tr><tr><td>Return type</td><td><p>The object type that this method will return after its execution.</p></td></tr><tr><td>Setup, Teardown options</td><td>Select any checkbox to indicate whether it should be a setup() or teardown() method. Refer to <a href="#DefineMethod-SetUp()andTearDown()inManualview">SetUp() and TearDown() in Manual view</a> for more details.</td></tr><tr><td>Parameter list</td><td><p>Any parameter needed to pass into the method.</p><p>By clicking on the <strong>Insert</strong> button, a row will be appended into the grid. You can then change the type and name of the parameter by double clicking and editing the appropriate cell.</p></td></tr></tbody></table>
    
    Click **OK** after configuring the method details.
    
3.  A test step representing the recently defined method is added to the test case. You can switch to **Script** view to [define content for the method](/display/KD/Define+method#Definemethod-DefineamethodinScriptingview).  
    ![](../../images/katalon-studio/docs/define-method/image2017-2-28-143A553A16.png)  
      
    
4.  Save the test case when you're done.
    
    > Once a test step is defined as **Method**, it will **not** be allowed to change into another keyword.
    

### SetUp() and TearDown() in Manual view

Automation testers usually want to specify prerequisite and clean-up configuration for their test cases.

With the prerequisite configuration, certain actions must be taken before starting test execution. For clean-up configuration, some actions must be carried out after the test execution finishes.

This can be achieved using the setup() and teardown() methods. 

<table><thead><tr><th>Method</th><th>Description</th><th>Common Usage</th></tr></thead><tbody><tr><td>Set Up</td><td>This method is always called <strong>first</strong> prior to executing main test steps.<br><br></td><td><p>Prepare testing environment such as:</p><ul><li>Starting new browser with clean cookies</li><li>Creating temporary &amp; proxy databases, directories</li><li>Starting a server process</li><li>...</li></ul></td></tr><tr><td>Tear Down If Failed</td><td>This method will be called after executing all steps of the test case <strong>and</strong> one of those steps has <strong>Failed</strong> status.</td><td><p>Clean-up testing environment such as:</p><ul><li>Closing browsers</li><li>Disclosing opened connections to database or server</li><li>...</li></ul><p>&nbsp;</p></td></tr><tr><td>Tear Down If Passed</td><td>This method will be called after executing all steps of the test case <strong>and</strong> all of those steps have <strong>Pass</strong> status.</td></tr><tr><td>Tear Down If Error</td><td>This method will be called after executing all steps of the test case <strong>and</strong> one of those steps has <strong>Error</strong> status.</td></tr><tr><td>Tear Down</td><td>This method will be called <strong>finally</strong>.</td></tr></tbody></table>

> The SetUp()/TearDown() methods will have **Error** status if there is any issue occurred during their execution. The only exception to this is when _AssertionError_ Class is used or the methods are skipped.

Define a method in Scripting view
---------------------------------

The **Script** view of a test case allows you to programmatically define and handle methods easily using either Groovy or Java language. Refer to [http://groovy-lang.org/structure.html#_methods](http://groovy-lang.org/structure.html#_methods) for details about methods in Groovy.

For example:

![](../../images/katalon-studio/docs/define-method/1.png)

### SetUp() and TearDown() in Scripting view

You can declare a method as setup() or teardown() method using the appropriated annotation above it:

```groovy
@com.kms.katalon.core.annotation.SetUp
@com.kms.katalon.core.annotation.TearDown
@com.kms.katalon.core.annotation.TearDownIfFailed
@com.kms.katalon.core.annotation.TearDownIfPassed
@com.kms.katalon.core.annotation.TearDownIfError
```

For example:

![](../../images/katalon-studio/docs/define-method/image2017-2-28-153A103A1.png)