---
title: "Desired Capabilities for Kobiton Devices" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/desired-capabilities-for-kobiton-devices.html 
redirect_from:
    - "/display/KD/Desired+Capabilities+for+Kobiton+Devices/"
    - "/display/KD/Desired%20Capabilities%20for%20Kobiton%20Devices/"
    - "/x/DQrR/"
    - "/katalon-studio/docs/desired-capabilities-for-kobiton-devices/"
    - "/display/KD/Desired+capabilities+for+Kobiton+devices/"
description: 
---
> Prerequisites
> 
> Kobiton integration is enabled, and you have adjusted your existing test scripts accordingly. Refer to this [guide](/display/KD/Mobile+Testing+with+Kobiton+Devices) for more details.

  
There will be cases you want to use additional desired capabilities for Kobiton devices, such as using 'appWaitActivity' capability to troubleshoot issue related to starting an application (check it out [here](/display/KD/Troubleshooting+automated+mobile+testing)). The tips below can help you to overcome this issue and finding a workaround solution. 

1.  [Grab desired capabilities](https://docs.kobiton.com/automation-testing/automation-testing-with-kobiton/) generated from Kobiton portal of the device you want to use and paste it to your test script.  
    ![](../../images/katalon-studio/docs/desired-capabilities-for-kobiton-devices/Screen-Shot-2018-07-05-at-11.40.52.png)  
      
    
2.  Insert '**app**' capability and pass in Kobiton application id for your device, e.g.,
    
    ```groovy
    String kobitonServerUrl = "https://katalon-integration:xxxxxxxxxxxxxxxxxxx@api.kobiton.com/wd/hub";
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("sessionName", "Automation test session");
    capabilities.setCapability("sessionDescription", ""); 
    capabilities.setCapability("deviceOrientation", "portrait");  
    capabilities.setCapability("captureScreenshots", true); 
    capabilities.setCapability("browserName", "chrome"); 
    capabilities.setCapability("deviceGroup", "KOBITON"); 
    capabilities.setCapability("deviceName", "Galaxy J3(2016)");
    capabilities.setCapability("platformVersion", "6.0.1");
    capabilities.setCapability("platformName", "Android"); 
    capabilities.setCapability('app', 'kobiton-store:10717');
    ```
    
    3\. **Replace** 'Start Application' keyword with these lines. These codes will establish a connection to selected Kobiton's device and also create a driver to be used for other built-in keywords. Thus, you don't have to rewrite the whole test script again.
    
    ```groovy
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import org.openqa.selenium.remote.DesiredCapabilities
    import com.kms.katalon.core.appium.driver.AppiumDriverManager
    import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
    import com.kms.katalon.core.mobile.driver.MobileDriverType
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
    import com.kms.katalon.core.util.internal.PathUtil as PathUtil
    import internal.GlobalVariable as GlobalVariable
    import io.appium.java_client.android.AndroidDriver
    
    //Mobile.startApplication('kobiton-store:10717', false)
    String kobitonServerUrl = "https://katalon-integration:xxxxxxxxxxxxxxx@api.kobiton.com/wd/hub";
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("sessionName", "Automation test session");
    capabilities.setCapability("sessionDescription", ""); 
    capabilities.setCapability("deviceOrientation", "portrait");  
    capabilities.setCapability("captureScreenshots", true); 
    capabilities.setCapability("browserName", "chrome"); 
    capabilities.setCapability("deviceGroup", "KOBITON"); 
    capabilities.setCapability("deviceName", "Galaxy J3(2016)");
    capabilities.setCapability("platformVersion", "6.0.1");
    capabilities.setCapability("platformName", "Android"); 
    capabilities.setCapability('app', 'kobiton-store:10717')
    
    AppiumDriverManager.createMobileDriver(MobileDriverType.ANDROID_DRIVER, capabilities, new URL(kobitonServerUrl))
    ```
    
    _If you use an iOS device, then please change MobileDriverType.ANDROID\_DRIVER to MobileDriverType.IOS\_DRIVER._  
      
    Now you've finished adjusting the 'Start Application' keyword. Here is the complete code:
    
    ```groovy
    import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
    import org.openqa.selenium.remote.DesiredCapabilities
    import com.kms.katalon.core.appium.driver.AppiumDriverManager
    import com.kms.katalon.core.configuration.RunConfiguration as RunConfiguration
    import com.kms.katalon.core.mobile.driver.MobileDriverType
    import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
    import com.kms.katalon.core.util.internal.PathUtil as PathUtil
    import internal.GlobalVariable as GlobalVariable
    import io.appium.java_client.android.AndroidDriver
    
    'Instead of using Start Application keyword, we use below code to create a similar driver so that other Mobile built-in keywords can re-use this driver.'
    String kobitonServerUrl = "https://katalon-integration:xxxxxxxxx@api.kobiton.com/wd/hub";
    DesiredCapabilities capabilities = new DesiredCapabilities();
    capabilities.setCapability("sessionName", "Automation test session");
    capabilities.setCapability("sessionDescription", ""); 
    capabilities.setCapability("deviceOrientation", "portrait");  
    capabilities.setCapability("captureScreenshots", true); 
    capabilities.setCapability("browserName", "chrome"); 
    capabilities.setCapability("deviceGroup", "KOBITON"); 
    capabilities.setCapability("deviceName", "Galaxy J3(2016)");
    capabilities.setCapability("platformVersion", "6.0.1");
    capabilities.setCapability("platformName", "Android"); 
    capabilities.setCapability('app', 'kobiton-store:10717')
    AppiumDriverManager.createMobileDriver(MobileDriverType.ANDROID_DRIVER, capabilities, new URL(kobitonServerUrl))
    
    Mobile.tap(findTestObject('Application/android.widget.TextView - App'), 10)
    
    Mobile.tap(findTestObject('Application/App/android.widget.TextView-Activity'), 10)
    
    Mobile.tap(findTestObject('Application/App/Activity/android.widget.TextView-Custom Dialog'), 10)
    
    'Get displayed message on the dialog'
    def message = Mobile.getText(findTestObject('Application/App/Activity/Custom Dialog/android.widget.TextViewCustomDialog'), 
        10)
    
    Mobile.comment('Then the correct dialog message should be displayed')
    
    Mobile.verifyEqual(message, 'Example of how you can use a custom Theme.Dialog theme to make an activity that looks like a customized dialog, here with an ugly frame.')
    
    Mobile.closeApplication()
    ```