---
title: "Advanced Search" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/advanced-search.html

description: 
---
Searching manually for test artifacts can be time-consuming. The advanced search in Katalon Studio helps reduce time on finding the desired test artifacts based on given criteria.

The search function is used for various test artifacts such as test case, test suite, and folder.
There are two ways to use the Search function in Katalon Studio: input search criteria directly on the **Search bar**, or use the **Advanced Search** button.

The **Advanced Search** button is located on the top right of the **Test Explorer** area, next to the search bar. You may also find this Advanced Search function while working with test suites. It can be used to find the desired test case based on certain criteria.

![](../../images/katalon-studio/docs/advanced-search/Advance-Search-Button-Location.png)

To execute, please click on the Advanced Search button and input search criteria.

![](../../images/katalon-studio/docs/advanced-search/advance-search-box.png)

The fields on the Advanced Search menu include:
- **ID**: to search by to the exact IDs of the test artifact
- **Name**: to search by the name of the test artifact
- **Description**: to search by the description associated with the test artifacts
- **Comment**: to search by the comments attached to the test artifacts
- **Tag**: to search by the tag linked to the test artifacts

***Note***: Every field in this advanced search mode can be applied to search for all types of objects such as test case, test suite, folder, etc.

To get the ID of the object, follow the steps below:
Navigate to **Test Explorer** > Find the object whose ID you want to get > Right click > **Copy ID** > Paste it into the ID text box.

![](../../images/katalon-studio/docs/advanced-search/Copy-ID.png)

In case you want to get the tag name of the object (this method CANNOT be applied when searching for folders):

Navigate to **Test Explorer** > Find the object whose ID you want to get > Right click > **Properties** > The Test Case Properties window will appear > Copy the text in the **Tag** box > Paste it into the **Advanced Search** box.

![](../../images/katalon-studio/docs/advanced-search/Test-Case-Properties.png)
  
***Note***: You can only search for only one tag name at a time. The same process applies with getting descriptions and comment keywords.

Another way to search for test objects is to directly type on the search box. For example:

Id=(Test Cases/Advance Examples)

![](../../images/katalon-studio/docs/advanced-search/1.png)

All test cases associated with the ‘Advance Examples’ ID will be filtered and returned.
 





