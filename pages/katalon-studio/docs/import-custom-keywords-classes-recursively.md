---
title: "Import Custom Keywords classes recursively" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/import-custom-keywords-classes-recursively.html 
redirect_from:
    - "/display/KD/Import+Custom+Keywords+classes+recursively/"
    - "/display/KD/Import%20Custom%20Keywords%20classes%20recursively/"
    - "/x/QwXR/"
    - "/katalon-studio/docs/import-custom-keywords-classes-recursively/"
description: 
---
Hypothetically, you want to call a Custom Keyword within a Custom Keyword that is defined in another class. Check out the code below for a sample implementation.

  
![](../../images/katalon-studio/docs/import-custom-keywords-classes-recursively/f5uxhyxe7z65.png)  
  
Keywords/my.a/Greeting.groovy  

```groovy
package my.aimport com.kms.katalon.core.annotation.Keywordclass Greeting { @Keyword def greet(String someone) { return my.b.AI.sayHelloTo(someone) }}
```

Keywords/my.b/AI.groovy  

```groovy
package my.bclass AI { static def sayHelloTo(String someone) { return "Hello, ${someone}." }}
```

  
TC1:  

```groovy
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUIdef str = CustomKeywords.'my.a.Greeting.greet'("Drunda")WebUI.comment(">>> ${str}")
```

  
The TC1 ran fine:  
![](../../images/katalon-studio/docs/import-custom-keywords-classes-recursively/30qrty5tymg5.png)

  

_Credit to [kazurayam](https://forum.katalon.com/discussion/6971/importing-custom-keywords-classes-recursively-within-a-custom-keyword#Comment_16124)_