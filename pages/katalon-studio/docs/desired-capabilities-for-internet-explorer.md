---
title: "Desired Capabilities for Internet Explorer" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/desired-capabilities-for-internet-explorer.html 
redirect_from:
    - "/display/KD/Desired+Capabilities+for+Internet+Explorer/"
    - "/display/KD/Desired%20Capabilities%20for%20Internet%20Explorer/"
    - "/x/TgzR/"
    - "/katalon-studio/docs/desired-capabilities-for-internet-explorer/"
description: 
---
Internet Explorer driver supports some important capabilities which can be used to smooth execution of test on Internet Explorer. Some of these capabilities help us to disable JavaScripts, ignore the security domain setting for IE, persistent hovering, require window focus etc. These capabilities ease the way the for automation testing using Selenium Web Driver on Internet Explorer. More details on the Internet Explorer can be found [here](https://code.google.com/p/selenium/wiki/DesiredCapabilities#IE_specific).

The most common use of Internet Explorer desired capabilities is to configure Internet Explorer without having to complete the instructions from this [page](/display/KD/Internet+Explorer+Configurations). You can pass some desired capabilities to Internet Explorer so you don't need to configure your IE anymore.

![](../../images/katalon-studio/docs/desired-capabilities-for-internet-explorer/IE.png)

*   **ignoreProtectedModeSettings:**Whether to skip the protected mode check. If set, tests may become flaky or unresponsive, and browsers may hang. If not set, and protected mode settings are not the same for all zones, an exception will be thrown on driver construction. Only "best effort" support is provided when using this capability.
*   **ignoreZoomSetting:** Indicates whether to skip checking that the browser's zoom level is set to 100%. Value is set to false by default.
*   **enablePersistentHover: **Determines whether persistent hovering is enabled (true by default). Persistent hovering is achieved by continuously firing mouse over events at the last location the mouse cursor has been moved to.
*   **requireWindowFocus:** Determines whether to require the IE window to focus before performing any user interaction operations (mouse or keyboard events). This capability is false by default but delivers much more accurate native events interactions.

> Code sample can be found in this project: [https://github.com/katalon-studio-samples/tips-and-tricks](https://github.com/katalon-studio-samples/tips-and-tricks)