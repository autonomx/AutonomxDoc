---
title: "Using Regex in Katalon Studio" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/using-regex-in-katalon-studio.html 
redirect_from:
    - "/display/KD/Using+Regex+in+Katalon+Studio/"
    - "/display/KD/Using%20Regex%20in%20Katalon%20Studio/"
    - "/x/hAzR/"
    - "/katalon-studio/docs/using-regex-in-katalon-studio/"
description: 
---
**Problems**

Filter out the last part of the URL I get back from the "WebUI.getURL()" function

**Solutions**

Use Pattern and Matcher classes from java.util.regex package.

```groovy
import java.util.regex.Matcher
import java.util.regex.Pattern
import com.kms.katalon.core.util.KeywordUtil

String url = 'www.yourwebsite.com/subpage/'
Pattern regexPat = Pattern.compile('(?:(\\w+)\\/$|(\\w+)\\?|(\\w+)$)')
Matcher mat = regexPat.matcher(url)

if(mat.find()) {
    String result = mat.group()
    println result
}
else {
    KeywordUtil.markFailed('Substring not found.')
}

// pattern found:
subpage/
```

_  
Credit to [Marek Melocik](https://forum.katalon.com/profile/18/Marek%20Melocik) _