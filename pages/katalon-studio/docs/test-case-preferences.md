---
title: "Test Case Preferences"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/test-case-preferences.html
redirect_from:
    - "/display/KD/Test+Case+Preferences/"
    - "/display/KD/Test%20Case%20Preferences/"
    - "/x/ZIUw/"
    - "/katalon-studio/docs/test-case-preferences/"
description:
---
All the preferences under **Test Case** group are for controlling the default behavior that Katalon Studio should perform when test cases are designed.

You can configure these preferences by accessing from main menu: **Window > Katalon Studio Preferences > Katalon > Test Case**

![](../../images/katalon-studio/docs/test-case-preferences/image2017-6-29-163A53A23.png)

Where:

<table><thead><tr><th>Preference Setting</th><th>Description</th></tr></thead><tbody><tr><td>Test Case Calling</td><td><p>This is to specify how Katalon Studio should behave when you are calling another test case in your current test case.</p><p>&nbsp;</p><thead><tr><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>Generate variable with default value</td><td>Called test case uses default values for its variables.</td></tr><tr><td>Generate variable with the same name as the exposed variable of the called test case</td><td>Called test case uses default values which are the same with its variables name.</td></tr><tr><td>Expose variables automatically after choosing the called test case</td><td><p>Called test case uses default values which are the same with its variables name.</p><p>The variables are also added into current test case at 'Variables' tab.</p></td></tr></tbody><table></table><p>&nbsp;</p><p>You might need to refer back to <a href="/display/KD/Variable+Types">Variable Types</a> section for which types of variables are supported in Katalon Studio.</p></td></tr><tr><td>Default Failure Handling</td><td>The default Failure Handling schema that should be used when a new step is added in your test case. Refer to <a href="/display/KD/Failure+Handling">Failure Handling</a> section for more settings to control Failure Handling.</td></tr><tr><td>Default Keyword</td><td>The default keyword that should be used when a new step is added in your test case.</td></tr></tbody></table>

> All the above preferences are saved into the file "**com.kms.katalon.composer.testcase.prefs**" under the "**config\\.metadata\\.plugins\\org.eclipse.core.runtime\\.settings**" location in your Katalon Studio build folder. You can manually modify the values in this file to change these preference settings.