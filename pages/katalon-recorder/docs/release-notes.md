---
title: "Release Notes" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-recorder/docs/release-notes.html 
redirect_from:
    - "/display/KR/Release+Notes/"
    - "/display/KR/Release%20Notes/"
    - "/x/JwHR/"
    - "/katalon-recorder/docs/release-notes/"
description: 
---
3.5.7

*   Supported "loadVars" for JSON-format data files.
*   Supported custom order for locator builders.
*   Supported "Play From Here" to execute a test suite from an arbitrary test case.

3.5.0 - 3.5.6

*   Supported [extension scripts (AKA user-extensions.js)](/display/KR/Extension+Scripts+%28AKA+user-extensions.js%29+for+Custom+Locator+Builders+and+Actions).

3.4.12

*   Fixed a bug with "chooseOkOnNextConfirmation".
*   Fixed a bug where KR crashes when processing values with patterns like "${variable" (missing the closing "}").

3.4.11

*   Supported storing returned values from "runScript" commands.
*   Fixed various bugs of "store" and "storeEval" commands.
*   Supported parameters in selectFrame, selectWindow commands.
*   Show variable types in the tab "Variables".
*   Added command "#" for writing comments.
*   Added command "storeCsv" for loading values from CSV data files.

3.4.10

*   Command names are now case-insensitive.
*   On Chrome, "sendKeys" and "type" (for file inputs) can now be used with all types of locators. The old versions required CSS locators.

3.4.7 - 3.4.9

*   Supported dragAndDropToObjectByJqueryUI for testing drag-and-drop functions built with jQuery UI.
*   Supported gotoIf, gotoLabel, and label for jumping to steps inside test cases.
*   Supported capturing screenshots upon failures.
*   Supported sendKeys for special keys (e.g. ENTER) on Chrome.
*   Fixed an issue with pause command.
*   Provided more details in logs for easier debugging.
*   Supported storedVars.key (or storedVars\['key'\]) syntax in storeEval command.
*   Supported "Play From Here" (context menu) for playing test case from an arbitrary test step.

3.4.0 - 3.4.6

*   Supported plugins for export recorded Test Cases to other formats.
    
*   Fixed bugs.
    

3.3.2

*   Supported file uploading.
    

3.3.0

*   Improved performance.
    
*   Added XML formatter.
    
*   Supported loading variables from CSV file.
    
*   Added if...elseIf..else..endIf statements.
    
*   Added while..endWhile statements.
    

3.2.0 - 3.2.2

*   Supported screenshot capturing.
    
*   Allowed sharing variables across test cases.
    

3.1.0 - 3.1.2

*   Improved logging: Start Time, End Time, Browser, OS.
    
*   Supported uploading logs to Katalon Analytics (Beta).
    

3.0.3 - 3.0.4

*   Supported exporting to C# and MSTest framework.
    
*   Fixed bugs
    

3.0.0 - 3.0.2

*   Added new features: Play Suite, Play All, Speed Configuration, Pause, Resume.
    
*   Supported debugging: Pause, Resume, Breakpoints, Variables View.
    
*   Improved logging: Save, Clear.
    
*   Improved Test Cases authoring: Copy, Paste.
    

2.2.0

*   Added support for offline mode in Chrome.
    
*   Added support for Glob & Regex patterns in Assert & Verify commands.
    
*   Added confirmation before deleting all test steps.
    

2.1.0

*   Added support for CSS locators.
    
*   Added support for runScript & storeEval commands.
    
*   Fixed a bug in store… functions.
    
*   Fixed a bug in string interpolation.
    

2.0.0 - 2.0.9

*   First releases with Selenium IDE-based features: Record, Play, Selenese, Export to other programming languages and frameworks.
    
*   Fixed bugs.