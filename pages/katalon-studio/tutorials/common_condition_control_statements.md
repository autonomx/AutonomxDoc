---
title: "Common Condition and Control statements with Katalon Studio"
sidebar: katalon_studio_tutorials_sidebar
permalink: katalon-studio/tutorials/common_condition_control_statements.html
description: "Katalon Studio provides the ability to dictate the flow of execution by supporting control statements which are common concepts in programming language."
---
Katalon Studio provides a capability to dictate the logical flow of execution by supporting **control statements** such as _if/else_, _for/while_ and _try/catch_ which are very common concepts in programming languages. This tutorial will explain in details how to use **control statements** in Katalon Studio along with examples for each case.

The following control statements are supported in Katalon Studio:

*   **[Decision-making statements](/display/KD/Control+Statements#ControlStatements-Decision-makingstatements)**
*   **[Looping statements](/display/KD/Control+Statements#ControlStatements-Loopingstatements)**
*   **[Branching statements](/display/KD/Control+Statements#ControlStatements-Branchingstatements)**
*   **[Exception handling block](/display/KD/Control+Statements#ControlStatements-Exceptionhandlingblock)**

Note: once a test step is added as any of the control statements, it will not be allowed to change into another keyword.

Decision-making statements
--------------------------

### In the Manual view

Open a test case in the **Manual** view, then navigate to **Decision-making** Statements from command toolbar.

![navigate to Decision-making Statements from command toolbar](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-153A163A40.png)

Refer to the following table for the usage of each statement:

| Statement | Description |
| --- | --- |
| If | This statement requires a boolean condition as input value. Katalon Studio will execute all the steps within once the condition is triggered. |
|  Else If | Using Else If after If, you can create a combination of conditions where the steps within the _first_ satisfied condition will be executed. |
|  Else |  This statement serves as the conclusion of the If – Else If – Else structure. The steps within this statement will be executed if all the conditions above it are not triggered. |

![you can create a combination of conditions](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-143A233A17.png)

<table><thead><tr><th>Statement</th> <th>Description</th> </tr></thead><tbody><tr><td>Switch</td> <td>This statement requires an expression, which is often referred to as the control expression (or control variable), as input value.</td> </tr><tr><td>Case</td> <td>The Cases indicate the assumed value for the control expression, with the corresponding steps to be executed when a match occurs.<br>Each Case will have a Break by default which should be positioned at the end of the Case block to mark the end of it.</td> </tr><tr><td>Default</td> <td>This statement is included automatically within every Switch statement. In situations where there is no case matched, all the steps under default will be executed.</td></tr></tbody></table>

![Common Condition and Control statements with Katalon Studio](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-143A473A59.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle If-ElseIf-Else or Switch-Case structure easily using either Groovy or Java language. Refer to [conditional structure](http://groovy-lang.org/semantics.html#_conditional_structures) in Groovy for more details.

For example:

<table><thead><tr><th>Decision-making statement</th> <th>Screenshot</th> </tr></thead><tbody><tr><td><strong>If – Else If – Else</strong></td><td><p>Here is an example on how to use <strong>if-else if-else </strong>in the Script View where the Click action will be carried out based on the condition</p><p><img src="../../images/katalon-studio/tutorials/common_condition_control_statements/10.png"></p></td></tr><tr><td><strong>Switch – Case</strong></td><td><p>Here is an example on how to use <strong>switch-case </strong>in the Script View where <i>varB</i>&nbsp;is calculated based on the passing value of&nbsp;<i>varA.</i></p><img src="../../images/katalon-studio/tutorials/common_condition_control_statements/Katalon-switch-case-150x150.png"> </td> </tr> </tbody> </table>

Looping statements
------------------

### In the Manual view

Open a test case in Manual view, then navigate to **Looping Statements** from the command toolbar.

![Katalon Studio looping statement](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-153A293A14.png)

Refer to the following table for the usage of each statement:

| **Statement** | **Description** |
| --- | --- |
| **For** | This statement accepts a _range_, _list_ or _array_ as input value so that Katalon Studio knows how many times to execute all steps within the For structure. |

![how many times to execute all steps within the For structure](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-153A493A5.png)

| Statement | Description |
| --- | --- |
| **While** | This statement requires a boolean condition as input value so that Katalon Studio will keep executing all steps within until the condition fails. |

![ Katalon Studio will keep executing all steps within until the condition fails](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-153A533A44.png)

### In the Script view

The Script View of test cases allows you to programmatically define and handle For or While structure easily using either Groovy or Java language. Refer to [looping structures](http://groovy-lang.org/semantics.html#_looping_structures) in Groovy for more details.

For example:

<table><thead><tr><th>Looping statement</th> <th>Screenshot</th> </tr></thead><tbody><tr><td><strong>For</strong></td><td><p>Here is an example on how to use <strong>For </strong>in the Script View where the <em>acceptAlert </em>keyword will be executed 10 times</p><p><img src="../../images/katalon-studio/tutorials/common_condition_control_statements/24.png"></p></td></tr><tr><td><strong>While</strong></td><td><p>Here is an example on how to use <strong>For </strong>in the Script View where the value of <strong>varA </strong>is <strong>true</strong></p><p><img src="../../images/katalon-studio/tutorials/common_condition_control_statements/25.png"></p></td></tr></tbody></table>

Branching statements
--------------------

### In the Manual view

Open a test case in the Manual view, then navigate to **Branching Statements** from the command toolbar.

![Katalon Studio Branching Statements](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-163A173A13.png)

Refer to the following table for the usage of each statement:

| **Statement** | Description |
| --- | --- |
| **Break** | Katalon Studio exits the current code block and continues to the next code block/test step. |

![the next code block/test step](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-163A363A37.png)

| Statement | Description |
| --- | --- |
| **Continue** | Katalon Studio will skip the remainder of the current loop and continue with the next iteration of the loop. |

![ the next iteration of the loop.](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-163A423A13.png)

| **Statement** | **Description** |
| --- | --- |
| **Return** | Katalon exits from the current method/step, and the flow control is returned to where the method/step is previously invoked. |

![the flow control is returned](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-163A473A44.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle Break, Continue & Return easily using either Groovy or Java language.

For example:

<table>
    <thead>
        <tr>
            <th>Decision-making statement</th>
            <th>Screenshot</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Break</strong></td>
            <td>
                <p>Here is an example on how to use <strong>Break </strong>in the Scripts View in order to exit current code block and move to next code block.</p>
                <img src="../../images/katalon-studio/tutorials/common_condition_control_statements/Break-in-the-Scripts-Katalon-Studio.png">
            </td>
        </tr>
        <tr>
            <td><strong>Continue</strong></td>
            <td> Here is an example on how to use <strong>Continue </strong>in the Script View in order to skip the remainder of the current loop and continue with the next iteration of the loop. <img src="../../images/katalon-studio/tutorials/common_condition_control_statements/Continue-in-the-Script-View.png"> </td>
        </tr>
        <tr>
            <td><strong>Return</strong></td>
            <td>
                <p>Here is an example on how to use <strong>Return </strong>in the Script View in order to exit from the current method, and the flow control is returned to where the method was invoked.</p>
                <img src="../../images/katalon-studio/tutorials/common_condition_control_statements/Return-in-the-Script-View.png">
            </td>
        </tr>
    </tbody>
</table>

Exception handling block
------------------------

### In the Manual view

Open a test case in Manual view, then navigate to **Exception Handling Statements** from the command toolbar.

![Katalon Studio Exception Handling Statements](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-9-173A03A13.png)

Refer to the following table for the usage of each statement:

| Statement | Description |
| --- | --- |
| **Try** | This statement indicates that all steps within it will be monitored by exception handlers. |
| **Throw** | Before you can catch an exception, some code must throw it. Regardless of what throws the exception, it's always involved with the Throw statement. |
| **Catch** | Katalon Studio executes all steps within the Catch block when there is any issue occurring during execution of the Try block. |
| **Finally** | This is the last part of the Try-Catch-Finally structure and all steps within this block will be executed regardless of what exceptions and whether they are handled in the Catch block. |

![the usage of each statement](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-28-113A513A55.png)

### In the Script view

The Script view of test cases allows you to programmatically define and handle exception easily using either Groovy or Java language. Refer to [this guide](http://groovy-lang.org/semantics.html#_try_catch_finally) for more details about exception handling in Groovy.

For example:

![Katalon Studio Script View](../../images/katalon-studio/tutorials/common_condition_control_statements/image2017-2-28-133A203A32.png)