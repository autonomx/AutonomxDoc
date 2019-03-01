---
title: "Using the WebDriver Object" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/using-the-webdriver-object.html 
redirect_from:
    - "/display/KD/Using+the+WebDriver+Object/"
    - "/display/KD/Using%20the%20WebDriver%20Object/"
    - "/x/OAXR/"
    - "/katalon-studio/docs/using-the-webdriver-object/"
description: 
---
To use the current session created by Katalon Studio, you can refer to example code below:  
  

```groovy
WebDriver driver = DriverFactory.getWebDriver()

```

  
The returned '**driver**' parameter will use the current browser's session launched by Katalon Studio. You need to import necessary libraries also (can be done by pressing **Ctrl + Shift + O**)