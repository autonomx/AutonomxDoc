---
title: "Integrate Katalon Studio with Jira"
sidebar: katalon_studio_videos_sidebar
permalink: katalon-studio/videos/katalon_studio_integration_jira_video.html
description: "Learn how to create JIRA tickets directly from failed execution results with detail, screenshot, and log by Katalon Studio."
---
<iframe width="560" height="349" src="https://www.youtube.com/embed/NXmfbHxiMf8?autoplay=1" frameborder="0" allowfullscreen="allowfullscreen">&nbsp;</iframe>

**A quick guide to set up and start creating JIRA tickets directly from failed execution results with detail, screenshot and log with Katalon Studio, a complete test automation tool, built on the top of Selenium and Appium. **

**Read full guideline : [/display/KD/JIRA+Integration](/display/KD/JIRA+Integration)**

### Configuration

1.  You need to enable JIRA Integration in order to submit issues to JIRA. This setting is available at **Project > Settings > Integration > JIRA**.
2.  Select **Enable integration** option. The settings will be available for configuration.
3.  Specify information regarding your JIRA Server and login credential then click **Connect** button.
4.  After successfully authenticating with JIRA, all relevant **JIRA Projects** and **Issue Types** will be retrieved and displayed under **Submit Options**. You can specify the default project and issue type for submission here.
5.  Click **OK** button to complete the JIRA Integration setup.

### Submit issue to JIRA

Submit options will be available in Test Reports after JIRA Integration setup is done.

1.  Open a test execution in **Reports** that you want to review for issues. In **Test Cases Table**, a dedicated column for JIRA Integration will be enabled.
2.  Click on the bug icon to display the list of related JIRA issues for the selected Test Case.
3.  Select submit option under the **Add** command.
4.  In case of creating new JIRA Issue (or Sub-task), a **JIRA native submission form** will be displayed. Following is an example of creating new JIRA Issue:
5.  Based on your preferences in [JIRA Integration settings](/display/KD/JIRA+Integration#JIRAIntegration-Configuration), the **Summary**, **Screenshots** and **Logs** will be populated and attached accordingly. Once done, click on the **Create** button at bottom of the form.
6.  Created **JIRA Issue** will have its **ID** recorded in the **Linked JIRA issues** list so that you can quickly navigate there from Katalon Studio.

Congratulations! You have just successfully configured and submitted your issue to Jira.

_For further instructions and help, please refer to [Katalon User Guide](/x/oArR) or [Katalon Forum](https://forum.katalon.com/)_