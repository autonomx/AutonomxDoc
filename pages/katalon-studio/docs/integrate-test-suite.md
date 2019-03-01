---
title: "Integrate test suite" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/integrate-test-suite.html 
redirect_from:
    - "/display/KD/Integrate+test+suite/"
    - "/display/KD/Integrate%20test%20suite/"
    - "/x/x4Ew/"
    - "/katalon-studio/docs/integrate-test-suite/"
description: 
---
> The selected **Katalon test suites folder** must be registered in [**Test Suite Repositories** settings](/display/KD/qTest+Integration) before you can upload the test suites within to qTest.

Register qTest location for test suite
--------------------------------------

1.  Navigate to the **Integration** tab of the test suite. Click on the **New parent** button.  
      
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2017-8-6-153A193A52.png)  
      
    
2.  The **Create Test Suite's parent** dialog is displayed where you can select **Parent** folder.
    
      
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-21-153A233A4.png)
    
      
    From the test structure, select the location to be integrated with the Katalon test suite then click **OK** to continue. Further options are as following:
    
    <table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>Create only</td><td><ul><li>Create association between the Katalon test suite and the selected qTest location.</li></ul></td></tr><tr><td>Create and upload</td><td><ul><li>Create association between the Katalon test suite and the selected qTest location.</li><li>Upload the Katalon test suite to the selected qTest location.</li></ul></td></tr><tr><td>Create, upload and set as default</td><td><ul><li>Create association between the Katalon test suite and the selected qTest location.</li><li>Upload the Katalon test suite to the selected qTest location.</li><li>Set the qTest location as default for uploading execution result of the Katalon test suite.</li></ul></td></tr></tbody></table>
    
3.  Once integrated, Katalon Studio will provide details information such as location and name of parent folder on qTest, integration information ( Parent IID, Test Suite ID, and Alias) as shown below:
    
      
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-21-153A503A3.png)
    
    Where:
    
    | Icon | Description |
    | --- | --- |
    | ![](../../images/katalon-studio/docs/integrate-test-suite/84.png) | The Katalon test suite is integrated to the qTest location. |
    | ![](../../images/katalon-studio/docs/integrate-test-suite/85.png) | The Katalon test suite is not integrated to the qTest location. |
    
    If the selected **qTest location** is integrated, then the related information can be viewed in the **Integration Information** section where:
    
    | Field | Description |
    | --- | --- |
    | Test Suite ID | The ID of the integrated qTest test suite. |
    | Alias | The alias of the integrated qTest test suite. |
    | Parent ID | The ID of the integrated qTest location. |
    
4.  You can also quickly navigate to **qTest** **parent** folder where the test suite(s) is uploaded by clicking on the **Navigate** button.  
      
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-21-183A123A57.png)

Upload test suites to qTest
---------------------------

Katalon Studio test suites are usually uploaded automatically by selected options in **Creation Option** when registering.There is a way to upload Katalon Studio test suite manually. Below instruction shows how to do it for a single test suite or test suite folder:

### Upload single test suite

1.  You have two methods to upload a **test suite** to predefined **qTest location**:  
      
    1.  Navigate to the **Integration** tab of the test suite. Select a **qTest location** that is yet to be integrated from the **List of test suite's parent** and click on the **Upload** button.  
          
        ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-143A103A48.png)  
          
        
    2.  In the Tests Explorer view, right click on the test suite to trigger its context menu. Select the **qTest > Upload** option.
        
        ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-143A193A18.png)
        
        > The **Upload** option is available only when:
        > 
        > \+ There must be **at least one** **registered** qTest location as **Parent** of Katalon Studio's test suite
        > 
        > \+ Selected qTest location is **NOT** integrated yet.
        > 
        > _Please be cautious_: **Katalon test suite** will be uploaded to all **qTest locations** that meet the above criteria accordingly.
        
2.  Once the uploading process finishes, you can go to qTest to verify that the **Katalon test suite** is uploaded to the registered **qTest location**.  
      
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-143A343A18.png)

### Upload test suite folder

1.  In the **Tests Explorer** view, right click on the test suite folder to trigger its context menu. Select the **qTest > Upload** option.
    
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-143A573A33.png)
    
    > The **Upload** option is available only when:
    > 
    > \+ There must be **at least one** **registered** qTest location as **Parent** of Katalon Studio's test suite
    > 
    > \+ Selected qTest location is **NOT** integrated yet.
    > 
    > _Please be cautious_: **Katalon test suite folder** will be uploaded to all **qTest locations** that meet the above criteria accordingly.
    
2.  Once the uploading process finishes, you can go to qTest to verify that the **Katalon test suites** within the selected folder are uploaded to the registered **qTest locations**.  
      
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-173A493A23.png)

Disintegrate test suites
------------------------

Remove the integration between **Katalon test suites** and its registered **qTest locations**.

### Disintegrate a test suite from qTest

1.  You have two methods to remove the connection between a test suite and registered qTest locations:
    1.  Navigate to the **Integration** tab of the test suite. Select a **qTest location** and click on the **Disintegrate** button.  
        ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-173A573A5.png)
    2.  In the Tests Explorer view, right click on the **test suite** to trigger its context menu. Select the **qTest > Disintegrate** option.  
        ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-183A33A20.png)  
          
        
2.  Click **OK** on the Confirmation dialog. The integration between this test suite and all registered qTest locations will be removed.

### Disintegrate a test suite folder from qTest

You can remove the integration between a test suite folder (together with all its test suites) and all registered qTest locations by following the steps below:

1.  In the **Tests Explorer** view, right click on the **test suite folder** to trigger its context menu. Select the **qTest > Disintegrate** option.  
    ![](../../images/katalon-studio/docs/integrate-test-suite/image2016-11-22-183A133A46.png)
2.  Click **OK** on the Confirmation dialog. The integration between this folder (as well as all of its test suites) and qTest will be removed.