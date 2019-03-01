---
title: "Force stop execution" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/force-stop-execution.html 
redirect_from:
    - "/display/KD/Force+stop+execution/"
    - "/display/KD/Force%20stop%20execution/"
    - "/x/HgfR/"
    - "/katalon-studio/docs/force-stop-execution/"
description: 
---
When developing lengthy Test Cases, it's useful to be able to stop execution to examine the state of the browser.  True, you could use the debugger, but many times it's overkill and I don't actually want to examine the test code.  
  
For me, this little method does exactly what I want -- it kills the test at the exact point I need and allows me to do something in the browser:

```groovy
import com.kms.katalon.core.exception.StepErrorException as StepErrorException...public class mytools {  static void FORCESTOP() {    throw new StepErrorException("FORCEDSTOP")  } ...}
```

That method lives a keyword tools class which I import "everywhere".  Then, in a test case script I do this:

```groovy
FORCESTOP()
```

_  
Credit to [Russ Thomas](https://forum.katalon.com/discussion/7482/tip-forcestop)_