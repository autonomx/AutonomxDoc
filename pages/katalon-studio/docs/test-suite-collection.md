---
title: "Test Suite Collection" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-suite-collection.html 
redirect_from:
    - "/display/KD/Test+Suite+Collection/"
    - "/display/KD/Test%20Suite%20Collection/"
    - "/x/NgvR/"
    - "/katalon-studio/docs/test-suite-collection/"
    - "/display/KD/Execute+a+test+suite+collection/"
description: 
---
A Test Suite Collection contains a list of test suites to allow users more options for planning their test execution. 

Manage Execution Information
----------------------------

You can manage additional configurations for test suite collection execution by expanding the **Execution Information** section, as below:

![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17-113A463A21.png)

where:

<table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><p><img src="../../images/katalon-studio/docs/test-suite-collection/image2017-2-17-113A473A25.png"></p></td><td><p>The order to execute test suites within the collection.</p><ul><li><strong>Sequential</strong>: the test suites will be executed one after another.</li><li><strong>Parallel</strong>: the test suites will be executed at the same time.</li></ul></td></tr></tbody></table>

Manage Test Suite List
----------------------

You can add a test suite into a collection by following the steps below:

1.  Open a test suite collection, then select an option to add **Add Test Suite** from command toolbar.  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17-133A243A44.png)  
      
    
2.  All test suites in Katalon Studio are displayed in **Test Suite Browser**. Select your test suites to be executed then click **OK**.  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2017-2-17-133A283A17.png)  
      
    
3.  The selected test suites will be added to the test suite collection accordingly  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2018-5-7-153A373A21.png)  
    where:
    
    <table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td>Run with</td><td><p>The environment to be executed with the Test Suite.</p></td></tr><tr><td>Run configuration</td><td><p>Extra information for executing with the selected environment.</p><p><strong>For example:</strong> Select mobile devices to be executed for Android environment</p><p><img src="../../images/katalon-studio/docs/test-suite-collection/image2017-2-17-133A533A7.png"></p></td></tr><tr><td>Profile</td><td><a class="external-link" href="/x/xAHR" rel="nofollow">Execution Profile</a> that contains all variables values for each Test Suite execution.</td></tr><tr><td>Run</td><td>This is checked by default. It means that the test case will be executed when running the collection.</td></tr></tbody></table>
    
      
    
    > You can add one test suite to the collection multiple times. This is particularly helpful when the users want to execute the same suite on different environments.
    

Execute a Test Suite Collection
-------------------------------

1.  To run a Test Suite Collection, click **Execute** at toolbar as illustrated below:  
    ![](../../images/katalon-studio/docs/test-suite-collection/image2018-5-7-163A33A11.png)  
      
    
2.  All test suites will be executed accordingly.
3.  Data of historical execution can be found in Reports. Refer to [Test Suite Collection Report](/display/KD/Test+Suite+Collection+Report) for more details.