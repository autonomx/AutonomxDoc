---
title: "Katalon Studio integration with Git overview"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/git_integration_introduction.html
description: "This tutorial details steps to set-up integration with Git from Katalon Studio to help address the collaboration among automation teams."
---
What is Git?
------------

Git is a powerful and popular system for version control. It is one of the essential tools for collaboration in software development teams. If your Katalon Studio automation project involves several or more members, you should use Git or another source control system for managing change and configuration on your project. Below are several specific benefits of using Git for your Katalon Studio projects.  

*   Git allows to undo mistakes
    *   The undo ability gives project teams the courage to try out ideas and concepts without worrying about the risk of breaking stuff, and thus, fosters a culture of innovation.
*   Git makes the team progress clearer
    *   A commit in Git refers to a change in automation scripts that a team member makes, indicating the progress of tasks.
    *   Git supports comparing versions of code to show differences between commits. It is useful to review a commit before it officially becomes final.
*   Git supports working offline
    *   Being to work offline makes your team more fail-safe. Each member can perform everything on his/her computer, independent from possible infrastructure downtime.
*   Never losing data ever again
    *   As daily work can be committed to the remote Git server, every team member working on a project has a full-fledged copy on his/her machine, including the project's complete change history.
    *   If any backup breaks down: just restore it using any team member's local repository or Git repository.

With Git, a repository can be shared to multiple members in a team to help to improve the team's collaboration and productivity.

Katalon Studio integration with Git introduction
------------------------------------------------

Git Integration is a powerful feature of Katalon Studio for collaboration between team members in test automation projects using Git. This tutorial presents a typical workflow for Git integration with Katalon Studio:

![workflow working with Git in Katalon](../../images/katalon-studio/tutorials/git_integration_introduction/Katalon-and-Git.png)

### 1 Enable Git integration in Katalon Studio

By default, Git integration is not enabled when Katalon Studio is first launched. But this feature can be enabled easily with the following steps:

1.  In the Katalon Studio, open **Window -> Katalon Studio Preferences -> Katalon -> Git. **Once this option is enabled, you can use Git from the Katalon Studio main toolbar.

![](../../images/katalon-studio/tutorials/git_integration_introduction/Enable-Git-integration-in-Katalon-Studio-2.png)

2. Now the Git integration feature should be **enabled**. We are ready to use Git from Katalon Studio.

![Enable Git integration in Katalon Studio](../../images/katalon-studio/tutorials/git_integration_introduction/Enable-Git-integration-in-Katalon-Studio.png)

### 2 Choose Git Remote Repository

After the Git integration feature is enabled, we can connect to a Git-based repository from Github, BitBucket, Gitlab, etc. In this tutorial, we will use integrate our Katalon Studio with a repository from Github.  
Github is a popular service for source control using Git. In this tutorial, we will use a free plan provided by Github. (if you need to keep the project private, you can choose a paid plan ([https://github.com/pricing](https://github.com/pricing)) to be considered)

### 3 Create Git repository

After logged in Github successfully, we can create a new repository with following steps:

1.  Open '**Create a new repository**' page from the menu bar

![Create git repository](../../images/katalon-studio/tutorials/git_integration_introduction/Create-GIT-repository.png)

2. Enter '**Repository name**', '**Description**' (optional) and click '**Create repository**'.

![Create Git repository](../../images/katalon-studio/tutorials/git_integration_introduction/Create-git-repository-2.png)

Repository name could be in lower-case, and '-' as a naming convention.

3\. The Git repository is now ready to use.

### 4 Clone Project

Now we already have Katalon Studio with Git integration enabled and a Git repository. It is time to start a new Katalon Studio project and integrate it with the Git repository.  
A new Katalon Studio project can be created and integrated with Git by using the Clone Project feature. Perform the following steps to create a new Katalon Studio project.

1.  Click **Git -> Clone Project**

![Clone Project feature](../../images/katalon-studio/tutorials/git_integration_introduction/Clone-Project.png)

2\. Enter the Git repository's URL and authentication information for accessing the Git remote repository.

![Clone Git repository](../../images/katalon-studio/tutorials/git_integration_introduction/Clone-Project-with-Git.png)

3\. Select a branch we want to clone. **Master** is selected by default (it is still fine if there is no branch shown).

![Clone project with Git](../../images/katalon-studio/tutorials/git_integration_introduction/Clone-Project-with-Git-3.png)

4\. Select a local folder for the cloned code.

![Clone project with Git](../../images/katalon-studio/tutorials/git_integration_introduction/Clone-Project-with-Git-4.png)

### 5 Test Project is ready for working

We might need to have a double check to ensure that the integration with Git is completed. Go to **Window** ->** Katalon Studio Reference**, and verify information from Repository Settings. Ensure that the Repository is selected correctly with URL specified.

![Integration with Git is completed](../../images/katalon-studio/tutorials/git_integration_introduction/Test-Project-is-ready-for-working1.png)

### 6 Commit

The Commit option allows us to view all current changes and decide which changes to be stored in local branch.

1.  Select the Commit option from Git menu of the main toolbar.

![Commit option from Git menu](../../images/katalon-studio/tutorials/git_integration_introduction/Commit-option-from-Git-menu.png)

2\. The **Git Staging tab** will appear for configuration.  
**Unstaged Changes**: Changes which have been made but haven't been committed.  
**Staged Changes**: Selected changes from **Unstaged Changes**. These changes will be committed.  

![Git Staging tab](../../images/katalon-studio/tutorials/git_integration_introduction/Git-Staging-tab.png)

3\. From the **Unstaged Changes** list, select the changes to be committed, then right-click on them and select **Add To Index**. The selected changes will be added to the **Staged Changes** list.

4\. Enter your comments into the **Commit Message** then click on **Commit** to store your staged changes into the local branch.

### 7 Push to Git

While the **Commit** function is used to store the changes we made into the local repository (branch), the **Push** function allows us to update the **remote branch** with what we have committed in the **local branch**.

1.  Select **Push** option from **Git** menu of the main toolbar.

![Push option from Git menu](../../images/katalon-studio/tutorials/git_integration_introduction/Push-option-from-Git-menu.png)

2\. The** Push to Branch **dialog will be displayed. Choose from the **Remote branch** list which branch to be updated (All remote branches in your Git repository are listed here).

![Push to branch in remote](../../images/katalon-studio/tutorials/git_integration_introduction/Push-to-branch-in-remote.png)

Click **Next** after finished selecting your remote branch.

3\. The Push** Confirmation **Dialog will be displayed with details regarding your commit.

![Push Confirmation Dialog](../../images/katalon-studio/tutorials/git_integration_introduction/Push-Confirmation-Dialog.png)

Click on **Finish** to push your commits to the remote repository.

### 8 Pull from Git

**Pull** command is used to incorporate changes from a remote repository into the local branch. In other words, we use the **Pull** command when we want to **get** the code from the Git remote repository (properly containing the latest code committed by other members) and **merge** it to the local repository so that we could have the **latest code version**.

1.  Select **Pull **option from the Git menu of the main toolbar.

![Pull-option-from-the-Git-menu](../../images/katalon-studio/tutorials/git_integration_introduction/Pull-option-from-the-Git-menu.png)

2\. The** Pull from Remote branch **dialog will be displayed. Choose from the **Remote branch** list which branch to be updated (All remote branches in your Git repository are listed here).

![Pull-from-Remote-branch](../../images/katalon-studio/tutorials/git_integration_introduction/Pull-from-Remote-branch.png)

Click **Finish **after finished selecting your remote branch. The code is now updated with the latest code from the Git remote repository.

After taking Commit, Push, and Pull actions, our Katalon Studio project is now synced with those of other team members.

For further instructions and help, please refer to [Katalon Studio Tutorials](/katalon-studio/tutorials/) and [Katalon Forum](https://forum.katalon.com/).