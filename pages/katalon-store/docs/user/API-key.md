---
title: "API Keys Setting"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-store/docs/user/API-key.html
redirect_from:
    - "/katalon-store/docs/user/API-key/"

description: Guide how to use and manage API Key in KStore
---
# API Keys usage 


In Katalon Studio Commandline Execution, API keys play the role as the user credentials to download and install plugins of the API key owners to Katalon Studio before proceeding execution. 

Without API keys applied, Katalon Studio will execute as no plugins are installed. Therefore, API keys are must-have for using plugin functions during Commandline Execution in Katalon Studio.


# Manage API Keys


## Create a new key



1.  Navigate to Katalon Store **[Settings](https://store.katalon.com/settings)** > **API Keys** tab.
1.  Click on **Generate New Key** button > Input key **Title** > Click **Add key** button > Key list will be shown with the new key added.


## Remove an existing key



1.  Navigate to Katalon Store **[Settings](https://store.katalon.com/settings)** > **API Keys** tab.
1.  Click on the **Remove** button of the key you want to remove > Click **OK** to remove

Note that this action cannot be undone. Once a key is removed, it cannot be used anymore.


# Apply API Keys in Katalon Studio Commandline Execution



1.  Generate a new API key or using an existing key
1.  Add the **apiKey** parameter to the execution command line. \
<span style="text-decoration:underline;">For example:</span> \
`katalon -noSplash  -runMode=console -consoleLog -noExit -projectPath="C:\Users\Katalon Studio\Project\YourProject.prj"` `-retry=` `0` `-testSuitePath="Test Suites/TS_RegressionTest"` <code>-browserType="Chrome (headless) <strong>-apiKey=e4c46ee7-0179-4309-a7bf-c0530bf61d07 \
</strong></code>
1.  Plugins installed by the API key owners will be downloaded and installed to Katalon Studio before execution. Functions of the plugins will be triggered accordingly. 