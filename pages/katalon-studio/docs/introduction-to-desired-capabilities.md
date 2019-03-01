---
title: "Introduction to Desired Capabilities" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/introduction-to-desired-capabilities.html 
redirect_from:
    - "/display/KD/Introduction+to+Desired+Capabilities/"
    - "/display/KD/Introduction%20to%20Desired%20Capabilities/"
    - "/x/ywbR/"
    - "/katalon-studio/docs/introduction-to-desired-capabilities/"
description: 
---
What are Desired Capabilities?
------------------------------

Desired Capabilities are key/value pairs that tell the browser properties such as browser name, browser version, the path of the browser driver in the system, etc. to determine the behavior of the browser at runtime. Besides SeleniumWebDriver, desired capabilities can be used to configure additional driver instances like FirefoxDriver, ChromeDriver, InternetExplorerDriver. Desired Capabilities are useful in cases like:

*   In mobile application automation, where the browser properties and the device properties can be set.
*   In web application automation, where additional settings can be added to the browser.

Katalon Studio allows you to define these Desired Capabilities in [Execution Settings](/display/KD/Execution+Settings).

Understand the Settings
-----------------------

Before adding Desired Capabilities in Katalon Studio, you need to identify which the environment you want to customize its behaviors. Below is the list of supported environments as well as their locations in Katalon Studio settings

<table><thead><tr><th>Settings</th><th>Description</th></tr></thead><tbody><tr><td><p><strong>Project &gt; Settings &gt; Execution &gt; Custom</strong></p></td><td><p>Define a custom option for execution along with its Desired Capabilities.</p></td></tr><tr><td><p><strong>Project &gt; Settings &gt; Execution &gt; Default &gt; WebUI &gt; Chrome</strong> (Firefox, IE, Safari, Edge)</p></td><td><p>Define Desired Capabilities for local execution using Chrome, Firefox, IE, Safari or Edge.</p></td></tr><tr><td><p><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; WebUI &gt; Remote Web</strong></p></td><td><p>Define Desired Capabilities for execution on a remote web server.</p></td></tr><tr><td><p><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; Mobile &gt; Android</strong> (iOS is only available in macOS)</p></td><td><p>Define Desired Capabilities for execution with Android and iOS devices.</p></td></tr><tr><td><p><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; WebUI &gt; Chrome (Headless)</strong></p></td><td><p>Define Desired Capabilities for execution with a headless instance using Chrome.</p></td></tr><tr><td><strong><strong>Project &gt; Settings &gt; </strong>Execution &gt; Default &gt; WebUI &gt; Firefox (Headless) </strong></td><td>Define Desired Capabilities for execution with a headless instance using Firefox.</td></tr></tbody></table>

> As indicated above, any changes made '**Default**' settings will apply to the current environment immediately when you [execute a test](/display/KD/Execute+a+Test+Case+or+a+Test+Suite#ExecuteaTestCaseoraTestSuite-ExecuteanEntireTestCaseorTestSuite). If you want to make a list of your own custom Desired Capabilities for some environments, then it's suggested to use '**Custom**' settings in this case.

Modify Desired Capabilities in Katalon Studio
---------------------------------------------

After you select the environment you want to modify its desired capabilities, there will a simple dialog displayed to let you add the settings you want. This section covers how to add or remove these desired capabilities. 

*   **Add**:
    *   Click the **Add** button of command toolbar above the Desired Capabilities list. A new row will be added to the list.
    *   Provide the name of the property that you'd like to configure and its type under the Type column.
    *   Define value for the property. Refer to [Value Types](/display/KD/Value+Types) for details regarding how to input value for different types.
*   **Delete**: This will delete selected records.
*   **Clear**: This will clear all existing records

Please refer to specific guides below for the environment you want to set up

> Desired Capabilities for Mobile
> 
> In case of Mobile execution, you need to select the device when configuring Desired Capabilities.
> 
> ![](../../images/katalon-studio/docs/introduction-to-desired-capabilities/image2016-11-1-133A593A38.png)
> 
> Where:
> 
> *   **Device Name**: the device to apply Desired Capabilities settings on.

*   [Desired Capabilities for Firefox/Firefox (headless)](/pages/viewpage.action?pageId=13700172)
*   [Desired Capabilities for Chrome/Chrome (headless)](/pages/viewpage.action?pageId=13700170)
*   [Desired Capabilities for Internet Explorer](/display/KD/Desired+Capabilities+for+Internet+Explorer)
*   [Remote Desired Capabilities](/display/KD/Remote+Desired+Capabilities)