---
title: "Draft Request"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/draft-request.html

---

Starting version 5.8, Katalon Studio introduces the ‘API Testing’ project with new features and capabilities. Occasionally, you may want to send a request with different test data before adding the data to your test case. Katalon Studio allows you to create a Draft Request to experiment with various data. All sent requests are saved in the ‘Request History’ panel on the left sidebar which you can retrieve anytime. 

To create a draft request, click on the ‘New Draft Request’ icons (REST or SOAP) on the main toolbar or from Quick Start Wizard in the ‘Help’ menu. 

Katalon Studio will open a ‘Draft Request Details’ view based on the selected request type. Here, you need to enter all the required request information. You can also leverage the ‘Verification’ feature to verify the response values if they match with the predefined API specification.

![](../../images/katalon-studio/docs/draft-request/draft-overview.png) 


If you decide to add a draft request to your test case, select the desired request and click ‘Save.’ You will be asked to specify the name and target folder in ‘Object Repository.

![](../../images/katalon-studio/docs/draft-request/save-draft.png)

Now you can execute your test case with the new web service request as usual. 
