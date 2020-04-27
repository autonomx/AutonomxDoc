# MultiRun

## Purpose

* We can run the same service call multiple times through multi run command
* This is useful for performance testing or multiple order creations

## Implementation

![](../../.gitbook/assets/image%20%2892%29.png)

* We set:
  * **Option**: RUN\_COUNT:5
    * This will rerun the test 5 times, creating 5 users
  * **RequestBody**: username:zzz\_test&lt;@\_RAND16&gt;&lt;@\_INCREMENT\_FROM\_1&gt;
    * We set username with random 16 digit String and appending a incremental number, starting from 1
    * Result:

      * Run1:  username:zzz\_testasdf42lsghyx4bgt1
      * Run2: username:zzz\_testasdf42lsghyx4bgt2
      * Run3: username:zzz\_testasdf42lsghyx4bgt3
      * Run4: username:zzz\_testasdf42lsghyx4bgt4
      * Run5: username:zzz\_testasdf42lsghyx4bgt5
* This is applicable to all interfaces



