---
title: "Desired Capabilities for Chrome/Chrome (headless)"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/desired-capabilities-for-chromechrome-headless.html
redirect_from:
    - "/x/SgzR/"
    - "/katalon-studio/docs/desired-capabilities-for-chromechrome-headless/"
description:
---
The Desired Capabilities available for Chrome is listed [here](http://chromedriver.chromium.org/capabilities). You can locate Chrome settings file at this path: **_<Project folder>\\settings\\internal\\com.kms.katalon.core.webui.chrome.properties._**

Please refer to some common examples below regard to how to manage Desired Capabilities for Chrome in Katalon Studio: 

1.  To start Chrome maximized by default: [--start-maximized](https://peter.sh/experiments/chromium-command-line-switches/#start-maximized)

```groovy
{"CHROME_DRIVER":{"args":["--start-maximized"]}}

```

![](../../images/katalon-studio/docs/desired-capabilities-for-chromechrome-headless/Screen-Shot-2018-07-17-at-16.38.57.png)

2\. To disable notification bars : [--disable-infobars](https://peter.sh/experiments/chromium-command-line-switches/#disable-infobars)

```groovy
{"CHROME_DRIVER":{"args":["--start-maximized","--disable-infobars"]}}

```

![](../../images/katalon-studio/docs/desired-capabilities-for-chromechrome-headless/Screen-Shot-2018-07-17-at-17.03.42.png)


3\. To start Chrome in incognito (private) mode : [--incognito](https://peter.sh/experiments/chromium-command-line-switches/#incognito)

```groovy
{"CHROME_DRIVER":{"args":["--start-maximized","--disable-infobars","--incognito"]}}

```

![](../../images/katalon-studio/docs/desired-capabilities-for-chromechrome-headless/Screen-Shot-2018-07-18-at-10.06.27.png)

> Code sample can be found in this project: [https://github.com/katalon-studio-samples/tips-and-tricks](https://github.com/katalon-studio-samples/tips-and-tricks)