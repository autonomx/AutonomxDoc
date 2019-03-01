---
title: "Start browsers in private mode" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/start-browsers-in-private-mode.html 
redirect_from:
    - "/display/KD/Start+browsers+in+private+mode/"
    - "/display/KD/Start%20browsers%20in%20private%20mode/"
    - "/x/XAbR/"
    - "/katalon-studio/docs/start-browsers-in-private-mode/"
description: 
---
**1. Firefox:**

*   Open Project -> Settings  
    
*   Select Execution -> Default -> Web UI -> Firefox settings
*   Add new dictionary 'firefox_profile' key.
*   Add browser.privatebrowsing.autostart key with value = true in that dictionary

![](../../images/katalon-studio/docs/start-browsers-in-private-mode/Screen-Shot-2018-06-15-at-15.44.35.png)  

**2\. Chrome:**

*   Open Project -> Settings
*   Select Execution -> Default -> Web UI -> Chrome settings
*   Add a new list args variable with --incognito contained as its value

![](../../images/katalon-studio/docs/start-browsers-in-private-mode/Screen-Shot-2018-06-15-at-15.43.19.png)