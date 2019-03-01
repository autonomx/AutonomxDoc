---
title: "Console Mode Execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/console-mode-execution.html 
redirect_from:
    - "/display/KD/Console+Mode+Execution/"
    - "/display/KD/Console%20Mode%20Execution/"
    - "/x/WQAM/"
    - "/katalon-studio/docs/console-mode-execution/"
description: 
---
> Only **Chrome, Firefox and Remote** options are supported for console mode execution **using Linux version.**

You can execute automation test without launching Katalon Studio by using command line mode execution. 

Execute Katalon in CMD
----------------------

1.  Open the command prompt and navigate to the folder of your Katalon Studio build, which contains katalon.exe **(**Windows**) **or Applications folder (Mac OS) or katalon (Linux) file.
    
2.  Enter the following syntax to execute automation test:
    
    **Windows:**
    
    ```groovy
    katalon {option1} {option2} ... {optionN}
    ```
    
    **Mac OS:**
    
    ```groovy
    ./Katalon\ Studio.app/Contents/MacOS/katalon --args {option1} {option2} ... {optionN}
    ```
    
    **Linux**:
    
    ```groovy
    ./katalon {option1} {option2} ... {optionN}
    ```
    
      
    where:
    
    | Item | Description |
    | --- | --- |
    | katalon | The command of Katalon Studio to execute automation test. |
    | {option(s)} | The additional [options](/display/KD/Console+Mode+Execution#ConsoleModeExecution-KatalonCommandLineoptions) for the execution. |
    
    For example:
    
    ![](../../images/katalon-studio/docs/console-mode-execution/image2016-4-6-133A153A3.png)  
      
    
3.  Press Enter to start execution.

Katalon Command Line options 
-----------------------------

Here's the list of options supported for the "_katalon_" command:
<table>
   <thead>
      <tr>
         <th>Katalon Command Line Option</th>
         <th>Description</th>
         <th>Mandatory?</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>-runMode=console</td>
         <td>Enable console mode.</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>-consoleLog</td>
         <td>Display log in the console.</td>
         <td>N</td>
      </tr>
      <tr>
         <td>--config -kobiton.authentication.username=[yourKobitonusername]-kobiton.authentication.password=xxxxx</td>
         <td>Passing Kobiton username and password</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-noExit</td>
         <td>Keep the console open after the execution is completed.</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-summaryReport</td>
         <td>Send summary report for a batch run.</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-statusDelay=&lt;seconds&gt;</td>
         <td>System will update execution status of the test suite after the delay period (in seconds) specified.</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-projectPath=&lt;path&gt;</td>
         <td>Specify the project location (include .prj file). The absolute path must be used in this case.</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>-testSuitePath=&lt;path&gt;</td>
         <td>Specify the test suite file (without extension .ts). The relative path (root being project folder) must be used in this case.</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>-testSuiteCollectionPath=&lt;path&gt;</td>
         <td>
            <p>Specify the test suite file (without extension .tsc). The relative path (root being project folder) must be used in this case.</p>
            <p>Note: Available only in 4.4+</p>
         </td>
         <td>Y (<em>If -testSuitePath is not used. Otherwise it's optional</em>)</td>
      </tr>
      <tr>
         <td>-browserType=&lt;browser&gt;</td>
         <td>
            <p>Specify the browser type used for test suite execution.</p>
            <p>The following browsers are supported in Katalon:</p>
            <ul>
               <li>Firefox</li>
               <li>Chrome</li>
               <li>IE</li>
               <li>Safari</li>
               <li>Remote</li>
               <li>Android</li>
               <li>iOS</li>
            </ul>
         </td>
         <td>
            <p>Y</p>
            <p>
               <strong>Only Chrome, Firefox and Remote is available for use in Linux version</strong>
            </p>
         </td>
      </tr>
      <tr>
         <td>-retry=&lt;number of retry times&gt;</td>
         <td>Number of times running test cases in the test suite.</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-retryFailedTestCases=&lt;true, false&gt;</td>
         <td>Retry failed test cases fail in test suite ( override setting in test suite file ). There are 2 options for retry: true if you want run fail test case and otherwise false</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-qTestDestId=&lt;destination's id&gt;</td>
         <td>Id of the destination where the result will be uploaded on it</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-qTestDestType=&lt;destination's type&gt;</td>
         <td>Type of the destination. There are 4 options for destination's type:"test-suite", "test-cycle", &nbsp;"release", and "root".</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-reportFolder=&lt;path&gt;</td>
         <td>Specify the destination folder for saving report files. Can use absolute path or relative path (root being project folder).</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-reportFileName=&lt;name&gt;</td>
         <td>Specify the name for report files (.html, .csv, .log). If not provide, system uses the name "report" (report.html, report.csv, report.log). This option is only taken into account when being used with "-reportFolder" option.</td>
         <td>N</td>
      </tr>
      <tr>
         <td>-sendMail=&lt;e-mail address&gt;</td>
         <td>Specify the e-mail address for receiving report files. If the e-mail address was not specified, the report files will not be sent.</td>
         <td>N</td>
      </tr>
      <tr>
        <td>-remoteWebDriverUrl=&lt;remote web server url&gt;</td>
        <td>Specify the remote web driver URL</td>
        <td>N</td>
      </tr>
      <tr>
         <td>-remoteWebDriverType=&lt;Selenium, Appium&gt;</td>
         <td>Remote web's driver type</td>
         <td>Y <em>(If -remoteWebDriverUrl is used)</em></td>
      </tr>
      <tr>
         <td>-deviceId=&lt;device Id for Android/device uuid for ios&gt;</td>
         <td>Specify the device's ID to execute test scripts using this device</td>
         <td>Y<em> (If -browserType=Android or -browserType=iOS is used)</em></td>
      </tr>
      <tr>
         <td>-email</td>
         <td>Registered e-mail on <a class="external-link" href="https://www.katalon.com/" rel="nofollow">Katalon Studio</a> page</td>
         <td>N <em>(If Katalon Studio is already activated)</em></td>
      </tr>
      <tr>
         <td colspan="3">
            <strong>These proxy options below must be used with --config parameter
            <br><em>(e.g. --config -proxy.option=USE_SYSTEM</em>)</strong>
         </td>
      </tr>
      <tr>
         <td>-proxy.option</td>
         <td>NO_PROXY, USE_SYSTEM, MANUAL_CONFIG</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>-proxy.server.type</td>
         <td>&nbsp;HTTP, HTTPS, or SOCKS</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>-proxy.server.address</td>
         <td>Example: locahost,&nbsp;<a class="external-link" href="http://katalon.com/" rel="nofollow">http://katalon.com</a></td>
         <td>Y</td>
      </tr>
      <tr>
         <td>-proxy.server.port</td>
         <td>Example: 80, 8080, 9999</td>
         <td>Y</td>
      </tr>
      <tr>
         <td>-proxy.username</td>
         <td>Example:&nbsp;MyProxyUsername</td>
         <td>Optional (YES if your proxy server requires authentication)</td>
      </tr>
      <tr>
         <td>-proxy.password</td>
         <td>Example: MyProxyPassword</td>
         <td>Optional (YES if your proxy server requires authentication)</td>
      </tr>
      <tr>
         <td>-executionProfile</td>
         <td>
            <p><strong>Since 5.4</strong></p>
            <p>Specify the&nbsp;<a href="/pages/viewpage.action?pageId=13697476">execution profile</a>&nbsp;to be executed with</p>
         </td>
         <td>N</td>
      </tr>
      <tr>
         <td>-g_XXX</td>
         <td>
            <p><strong>Since 5.9</strong></p>
            <p>Override Execution Profile variables.</p>
            <p>Example:</p>
            <p><code class="java plain"> -g_userName="admin"</code></p>
         </td>
         <td>N</td>
      </tr>
      <tr>
         <td colspan="3"><strong>Example:</strong></td>
      </tr>
      <tr>
         <td colspan ="3"><code class="java plain">katalon -noSplash&nbsp; -runMode=console -consoleLog -noExit -projectPath=</code>
            <code class="java string">"C:\Users\Katalon Studio\Project\YourProject.prj"</code>&nbsp;<code class="java plain">-retry=</code>
            <code class="java value">0</code>&nbsp;<code class="java plain">-testSuitePath=</code>
            <code class="java string">"Test Suites/TS_RegressionTest"</code>&nbsp;<code class="java plain">-browserType=</code>
            <code class="java string">"Chrome (headless)"</code>&nbsp;<code class="java plain">--config -proxy.option=MANUAL_CONFIG -proxy.server.type=HTTP -proxy.server.address=</code>
            <code class="java string">"192.168.12.32"</code>&nbsp;<code class="java plain">-proxy.server.port=</code>
            <code class="java string">"8888"</code>
         </td>
      </tr>
   </tbody>
</table>

Command Builder
---------------

You can quickly generate commands to use in console mode by following the steps below:  

1.  Click on **Build CMD** from the main toolbar.  
    ![](../../images/katalon-studio/docs/console-mode-execution/Screenshot-at-Jun-20-15-42-46.png)  
      
    
2.  The **Generate Command for Console Mode** is displayed. Configure your options as needed.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9-113A443A30.png)  
    where:
    
    <table><thead><tr><th>Section</th><th>Description</th></tr></thead><tbody><tr><td>Test Suite</td><td>The Test Suite or Test Suite Collection to be executed</td></tr><tr><td>Executed Platform</td><td><p>The platform to execute the test on. Select an environment</p><p><img src="../../images/katalon-studio/docs/console-mode-execution/image2018-2-9-123A13A31.png"></p><p>&nbsp;</p></td></tr><tr><td>Other Options</td><td><p><img src="../../images/katalon-studio/docs/console-mode-execution/image2017-2-17-163A193A15.png"></p></td></tr></tbody></table>
    
3.  Click **Generate Command** after you're done with the configuration.  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2017-2-17-173A153A41.png)  
      
    
4.  You can **Copy to Clipboard** and paste to command prompt for execution.  
      
    

Use console.properties file
---------------------------

We support running console mode using **console.properties** file where you can manually modify the content if needed. 

1.  Generate **console.properties** file using our generator:  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2018-2-9-123A33A30.png)  
      
    
2.  The **console.properties** file will be generated at your preferred location. You can open and update the parameters manually as needed.   
    For example:  
    ![](../../images/katalon-studio/docs/console-mode-execution/image2017-2-20-103A303A2.png)  
      
    
3.  Run the **console.properties** file in console mode with the following syntax:
    
    ```groovy
    katalon -propertiesFile="<absolute path to console.properties file>" -runMode=console
    ```
    
    For example:
    
    ```groovy
    katalon -propertiesFile="D:\Katalon\Demo_Project\console.properties" -runMode=console
    ```
    
4.  You can add extra Katalon command options if needed. Any option already defined in the **console.properties** file will be overwritten by the one declared in command line.  
    
    ```groovy
    katalon -propertiesFile="<absolute path to console.properties file" -runMode=console -browserType=IE 
    ```
    
    In the above example, since we also declare _browserType_ option in command line, the automation test will be executed using IE instead of Chrome.
