---
title: "Install Chrome extensions at runtime" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/install-chrome-extensions-at-runtime.html 
redirect_from:
    - "/display/KD/Install+Chrome+extensions+at+runtime/"
    - "/display/KD/Install%20Chrome%20extensions%20at%20runtime/"
    - "/x/ZQXR/"
    - "/katalon-studio/docs/install-chrome-extensions-at-runtime/"
description: 
---
To install Chrome extensions before you start the browser, you can either use packed or unpacked extensions. The sample code below refer to packed extensions, so if you want to use unpacked extensions, please refer to this page: [https://sites.google.com/a/chromium.org/chromedriver/extensions](https://sites.google.com/a/chromium.org/chromedriver/extensions)

```groovy
import org.openqa.selenium.WebDriver
import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions
import org.openqa.selenium.remote.DesiredCapabilities
import com.kms.katalon.core.webui.driver.DriverFactory

System.setProperty("webdriver.chrome.driver", "C:\\Users\\usuario\\katalon\\Test\\Driver\\chromedriver.exe");
ChromeOptions options = new ChromeOptions()
options.addExtensions(new File("C:\\Users\\usuario\\Desktop\\Firma-con-token.crx"))
DesiredCapabilities capabilities = new DesiredCapabilities()
capabilities.setCapability(ChromeOptions.CAPABILITY, options)
WebDriver driver = new ChromeDriver(capabilities)
DriverFactory.changeWebDriver(driver)
```

**References:**

*   [DriverFactory](https://api-docs.katalon.com/com/kms/katalon/core/webui/driver/DriverFactory.html)
*   [Chrome desired capabilities](http://chromedriver.chromium.org/capabilities)
*   [Install Chrome extensions](https://sites.google.com/a/chromium.org/chromedriver/extensions)