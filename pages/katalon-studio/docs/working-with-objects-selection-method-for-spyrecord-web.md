---
title: "Working with Objects Selection Method for Spy/Record Web" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web.html 
redirect_from:
    - "/x/ZxlO/"
    - "/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web/"
description: 
---
> *   Available since Katalon Studio version 5.0
> *   Katalon Studio **Object Properties** has the capability to **auto-saved** the content of **Selector Editor** when switching between modes of **Selection Method**.
> *   [Object Identification Best Practices](/display/KD/Optimizing+Object+Identification+and+Tools)
> Configure [Web Object Locators Settings](https://docs.katalon.com/katalon-studio/docs/web-locators-settings-since-v571.html
).

Katalon Studio **Object Properties** makes Spying and Recording Web feature easier and more powerful. Enhanced Object Properties allows users:
* Choose objects locating strategies including XPath (Smart XPath), Attributes or CSS.
* Check only preferred object's properties on the grid.
* Manually input the desired XPath or CSS locator in Selector Editor.


Xpath
-----
> Learn more about [Smart XPath (_a.k.a._ Relative XPath).](https://www.katalon.com/resources-center/blog/smart-xpath-generator/)

Katalon Studio supports _Relative XPath_ for better object recognition. If an element cannot be consistently located using its direct attributes, Katalon Studio will identify the element by using its more robust neighbors. This method is visually intuitive as it reflects the way users often identify a visible element on the user interface.

If **Xpath** option is selected, Katalon Studio will automatically generate a list of **Relative Xpath** based on your _Web Locators Setting_ to identify the element.

![](../../images/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web/image2018-9-5-183A573A11.png)

Attributes
----------

If _Attributes_ option is **selected**, Katalon Studio will automatically generate **XPath** locator that **combined** all **selected** object **properties** to locate that object. You can _checked/unchecked_ preferred properties in the object **properties table.**

![](../../images/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web/image2018-9-5-183A293A36.png)

CSS
---

Test engineers who wish to manually input their own **CSS** locator for test objects can select CSS option. Once selected, object **properties table** will be **collapsed** and **Selector Editor** field becomes **editable**. Simply provide **CSS** locator in the _Selector Editor_ text box. 

Same as Attributesoption, click on **Verify and Highlight** button to make sure Katalon Studio can locate the web objects. Katalon Studio will display the message on how many elements are **found** or **NOT** **found** with input XPath or CSS locator. If the object is **found**, it will be highlighted with the **red **border. 

![](../../images/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web/image2018-9-5-183A503A16.png)

Once finished, click **Save** to add objects to **Object Repository** as normal.

Verify and Highlight
--------------------

Katalon Studio **Object Properties** has a built-in **Verify and Highlight **feature to help users double-check if the web objects can be located. Katalon Studio will display the message on how many elements are **found** or **NOT** **found** with generated XPath locator. If the object is **found**, it will be highlighted with the **red **border. 

![](../../images/katalon-studio/docs/working-with-objects-selection-method-for-spyrecord-web/image2018-9-5-183A303A43.png)

Once finished, click **Save** to add the object to **Object Repository** as normal.
