---
title: "Katalon Studio 22: How to do Mobile (iOS) Testing via 10 Steps"
sidebar: katalon_studio_videos_sidebar
permalink: katalon-studio/videos/ios_mobile_testing.html
description: "Learn how to get started to perform Mobile (iOS) Testing using Katalon Studio via 10 steps tutorial from Raghav Pal."
---
<iframe width="840" height="473" src="https://www.youtube.com/embed/73hgLeIBrgA?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">&nbsp;</iframe>

In this tutorial, Raghav will show you how to:

1.  Install Homebrew
2.  Install Node.js
3.  Install Appium
4.  Install and Configure Xcode
5.  Configuration of iOS Device/Simulator
6.  Run test on mobile

**Get started to perform Mobile (iOS) Testing via 10 steps:**

*   Step 1: Install Homebrew  
    https://brew.sh/  
    brew -v  
    which brew
*   Step 2: Install Node.js  
    brew install node  
    node -v  
    npm -v  
    which node
*   Step 3: Install Appium  
    npm install -g appium  
    npm install -g appium@xxx  
    appium -v  
    which appium
*   Step 4: Open Katalon Studio  
    Add location of Appium
*   Step 5: Get Xcode  
    Xcode – IDE for mac
*   Step 6: Connect your iOS device/simulator  
    get UDID of your device  
    npm install -g ios-deploy  
    ios-deploy -c  
    instruments -s devices  
    Xcode – Devices  
    A9F18306-6B22-442B-99F4-F217A5EE8D38
*   Step 7: Initialize WebDriverAgent Projectbrew install carthage  
    cd /usr/local/lib/node\_modules/appium/node\_modules/appium-xcuitest-driver/WebDriverAgent  
    mkdir -p Resources/WebDriverAgent.bundle  
    sh ./Scripts/bootstrap.sh -d

*   Step 8: Open webDriverAgent.xcodeproj in Xcode  
    Build project with targets as shown in demo
*   Step 9: Build WebDriverAgent  
    xcodebuild -project WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -destination 'id=A9F18306-6B22-442B-99F4-F217A5EE8D38' test
*   Step 10: Goto Katalon Studio  
    Connect to iOS device/simulator  
    Test, Run and Validate

**Reference:**

1.   [Mobile on macOS](/display/KD/Mobile+on+macOS) documentation.
2.  [The XCUITest Driver for iOS](http://appium.io/docs/en/drivers/ios-xcuitest/).
3.  [Appium iOS driver](https://github.com/appium/appium-xcuitest-driver).

_**Note: This video is contributed by [Raghav Pal](https://www.youtube.com/channel/UCTt7pyY-o0eltq14glaG5dg). **_