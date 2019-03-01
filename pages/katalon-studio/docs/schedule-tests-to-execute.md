---
title: "Schedule tests to execute" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/schedule-tests-to-execute.html 
redirect_from:
    - "/display/KD/Schedule+tests+to+execute/"
    - "/display/KD/Schedule%20tests%20to%20execute/"
    - "/x/VQXR/"
    - "/katalon-studio/docs/schedule-tests-to-execute/"
description: 
---
There will be cases in which you want to schedule your tests to execute within a period or every x hours. Katalon Studio does not support scheduler, but you can schedule executions using the steps below:

1.  Create a batch/shell file (.bat / .sh) to execute your test suite using [Console Mode Execution](/display/KD/Console+Mode+Execution)
2.  Schedule your script as required in Task Scheduler (Windows) or cronjob (Linux / MacOSX )

_Credit to [dave](https://forum.katalon.com/discussion/7171/run-tests-every-x-hours#Comment_16623)_