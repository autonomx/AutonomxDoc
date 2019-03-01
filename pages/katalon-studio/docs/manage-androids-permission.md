---
title: "Manage Android's permission" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/manage-androids-permission.html 
redirect_from:
    - "/display/KD/Manage+Android%27s+permission/"
    - "/display/KD/Manage%20Android%27s%20permission/"
    - "/x/ggXR/"
    - "/katalon-studio/docs/manage-androids-permission/"
description: 
---
To manage Android's permission, you need to set the value of 'autoGrantPermissions' desired capabilities:

```groovy
/**
* Enable all permission
* 
* @param isEnable
*/
@Keyword
public static void EnablePermission(boolean isEnable) {
    DesiredCapabilities.android().setCapability("autoGrantPermissions", isEnable);
}
```