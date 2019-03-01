---
title: "Selenese (Selenium IDE) Commands Reference"
sidebar: katalon_studio_docs_sidebar
permalink: katalon-recorder/docs/selenese-selenium-ide-commands-reference.html
redirect_from:
    - "/display/KR/Selenese+%28Selenium+IDE%29+Commands+Reference/"
    - "/display/KR/Selenese%20%28Selenium%20IDE%29%20Commands%20Reference/"
    - "/x/dhtO/"
    - "/katalon-recorder/docs/selenese-selenium-ide-commands-reference/"
description:
---
Katalon Automation Recorder provides various Selenium Commands (Selenese) to help automate web application testing. These commands stimulate actions on the application under test (AUT) and create automation test scripts. 

The below table is the list of all supported Selenese Commands.

<table>
    <thead>
        <tr>
            <th>&nbsp;</th>
            <th>Command</th>
            <th>Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>addLocationStrategy</td>
            <td>
                <p>addLocationStrategy(strategyName, functionDefinition)</p>
                <p><strong>Arguments:</strong></p>
                <p>*strategyName - the name of the strategy to define; this should use only letters [a-zA-Z] with no spaces or other punctuation.<br>*functionDefinition - a string defining the body of a function in JavaScript. For example:&nbsp;<code>return inDocument.getElementById(locator);</code><br>Defines a new function for Selenium to locate elements on the page. For example, if you define the strategy "foo", and someone runs click("foo=blah"), we'll run your function, passing you the string "blah", and click on the element that your function returns, or throw an "Element not found" error if your function returns null. We'll pass three arguments to your function:</p>
                <ul>
                    <li>locator: the string the user passed in</li>
                    <li>inWindow: the currently selected window</li>
                    <li>inDocument: the currently selected document</li>
                </ul>
                The function must return null if the element can't be found.
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>addLocationStrategyAndWait</td>
            <td>
                <p>addLocationStrategyAndWait(strategyName, functionDefinition)<br>Generated from addLocationStrategy(strategyName, functionDefinition)</p>
                <p><strong>Arguments:</strong></p>
                <ul>
                    <li>strategyName - the name of the strategy to define; this should use only letters [a-zA-Z] with no spaces or other punctuation.</li>
                    <li>functionDefinition - a string defining the body of a function in JavaScript. For example:&nbsp;<code>return inDocument.getElementById(locator);</code></li>
                </ul>
                Defines a new function for Selenium to locate elements on the page. For example, if you define the strategy "foo", and someone runs click("foo=blah"), we'll run your function, passing you the string "blah", and click on the element that your function returns, or throw an "Element not found" error if your function returns null. We'll pass three arguments to your function:
                <ul>
                    <li>locator: the string the user passed in</li>
                    <li>inWindow: the currently selected window</li>
                    <li>inDocument: the currently selected document</li>
                </ul>
                The function must return null if the element can't be found.
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>addScript</td>
            <td>
                <p>addScript(scriptContent, scriptTagId)</p>
                <p><strong>Arguments:</strong><br>*scriptcontent - the Javascript content of the script to add<br>*scriptTagId - (optional) the id of the new script tag. If specified, and an element with this id already exists, this operation will fail.</p>
                <p>Loads script content into a new script tag in the Selenium document. This differs from the runScript command in that runScript adds the script tag to the document of the AUT, not the Selenium document. The following entities in the script content are replaced by the characters they represent: &lt; &gt; &amp; The corresponding remove command is removeScript.</p>
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>addScriptAndWait</td>
            <td>addScriptAndWait(scriptContent, scriptTagId)<br>Generated from addScript(scriptContent, scriptTagId<p><strong>Arguments</strong>:</p>*scriptContent - the Javascript content of the script to add<br>*scriptTagId - (optional) the id of the new script tag. If specified, and an element with this id already exists, this operation will fail.<br>Loads script content into a new script tag in the Selenium document. This differs from the runScript command in that runScript adds the script tag to the document of the AUT, not the Selenium document. The following entities in the script content are replaced by the characters they represent: &lt; &gt; &amp; The corresponding remove command is removeScript.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>addSelection</td>
            <td>
                <p>addSelection(locator, optionLocator<p><strong>Arguments</strong>:</p>*locator - an element locator identifying a multi-select box<br>*optionLocator - an option locator (a label by default)&nbsp;</p>
                <p>Add a selection to the set of selected options in a multi-select element using an option locator. @see #doSelect for details of option locators</p>
            </td>
        </tr>
        <tr>
            <td>6</td>
            <td>addSelectionAndWait</td>
            <td>
                <p>addSelectionAndWait(locator, optionLocator)<br>Generated from addSelection(locator, optionLocator<p><strong>Arguments</strong>:</p>*locator - an element locator identifying a multi-select box<br>*optionLocator - an option locator (a label by default)&nbsp;</p>
                <p>Add a selection to the set of selected options in a multi-select element using an option locator. @see #doSelect for details of option locators</p>
            </td>
        </tr>
        <tr>
            <td>7</td>
            <td>ajaxWait</td>
            <td>ajaxWait</td>
        </tr>
        <tr>
            <td>8</td>
            <td>ajaxWaitAndWait</td>
            <td>ajaxWaitAndWait</td>
        </tr>
        <tr>
            <td>9</td>
            <td>allowNativeXpath</td>
            <td>
                <p>allowNativeXpath(allow<p><strong>Arguments</strong>:</p>*allow - boolean, true means we'll prefer to use native XPath; false means we'll only use JS XPath</p>
                <p>Specifies whether Selenium should use the native in-browser implementation of XPath (if any native version is available); if you pass "false" to this function, we will always use our pure-JavaScript xpath library. Using the pure-JS xpath library can improve the consistency of xpath element locators between different browser vendors, but the pure-JS version is much slower than the native implementations.</p>
            </td>
        </tr>
        <tr>
            <td>10</td>
            <td>allowNativeXpathAndWait</td>
            <td>
                <p>allowNativeXpathAndWait(allow)<br>Generated from allowNativeXpath(allow<p><strong>Arguments</strong>:</p>*allow - boolean, true means we'll prefer to use native XPath; false means we'll only use JS XPath&nbsp;</p>
                <p>Specifies whether Selenium should use the native in-browser implementation of XPath (if any native version is available); if you pass "false" to this function, we will always use our pure-JavaScript xpath library. Using the pure-JS xpath library can improve the consistency of xpath element locators between different browser vendors, but the pure-JS version is much slower than the native implementations.</p>
            </td>
        </tr>
        <tr>
            <td>11</td>
            <td>altKeyDown</td>
            <td>
                <p>altKeyDown()</p>
                <p>Press the alt key and hold it down until doAltUp() is called or a new page is loaded.</p>
            </td>
        </tr>
        <tr>
            <td>12</td>
            <td>altKeyDownAndWait</td>
            <td>
                <p>altKeyDownAndWait() Generated from altKeyDown()</p>
                <p>Press the alt key and hold it down until doAltUp() is called or a new page is loaded.</p>
            </td>
        </tr>
        <tr>
            <td>13</td>
            <td>altKeyUp</td>
            <td>
                <p>altKeyUp()</p>
                <p>Release the alt key.</p>
            </td>
        </tr>
        <tr>
            <td>14</td>
            <td>altKeyUpAndWait</td>
            <td>
                <p>altKeyUpAndWait()</p>
                <p>Generated from altKeyUp()</p>
                <p>Release the alt key.</p>
            </td>
        </tr>
        <tr>
            <td>15</td>
            <td>answerOnNextPrompt</td>
            <td>
                <p>answerOnNextPrompt(answer<p><strong>Arguments</strong>:</p>*answer - the answer to give in response to the prompt pop-up</p>
                Instructs Selenium to return the specified answer string in response to the next JavaScript prompt [window.prompt()].
            </td>
        </tr>
        <tr>
            <td>16</td>
            <td>assertAlert</td>
            <td>
                <p>assertAlert(pattern)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</p>
                <p>Retrieves the message of a JavaScript alert generated during the previous action, or fail if there were no alerts.</p>
                <p>Getting an alert has the same effect as manually clicking OK. If an alert is generated but you do not consume it with getAlert, the next Selenium action will fail.</p>
                <p>Under Selenium, JavaScript alerts will NOT pop up a visible alert dialog.</p>
                <p>Selenium does NOT support JavaScript alerts that are generated in a page's onload() event handler. In this case, a visible dialog WILL be generated and Selenium will hang until someone manually clicks OK.</p>
            </td>
        </tr>
        <tr>
            <td>17</td>
            <td>assertAlertAndWait</td>
            <td>
                <p>assertAlertAndWait(pattern)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</p>
                <p>Retrieves the message of a JavaScript alert generated during the previous action, or fail if there were no alerts.</p>
                <p>Getting an alert has the same effect as manually clicking OK. If an alert is generated but you do not consume it with getAlert, the next Selenium action will fail.</p>
                <p>Under Selenium, JavaScript alerts will NOT pop up a visible alert dialog.</p>
                <p>Selenium does NOT support JavaScript alerts that are generated in a page's onload() event handler. In this case a visible dialog WILL be generated and Selenium will hang until someone manually clicks OK.</p>
            </td>
        </tr>
        <tr>
            <td>18</td>
            <td>assertAlertNotPresent</td>
            <td>
                <p>assertAlertNotPresent()<br>Generated from isAlertPresent().<br>Returns: true if there is an alert&nbsp;</p>
                <p>Has an alert occurred?</p>
                <p>This function never throws an exception</p>
            </td>
        </tr>
        <tr>
            <td>19</td>
            <td>assertAlertPresent</td>
            <td>
                <p>assertAlertPresent()<br>Generated from isAlertPresent().<br>Returns: true if there is an alert&nbsp;</p>
                <p>Has an alert occurred?</p>
                <p>This function never throws an exception</p>
            </td>
        </tr>
        <tr>
            <td>20</td>
            <td>assertAllButtons</td>
            <td>
                <p>assertAllButtons(pattern)<br>Generated from getAllButtons().<br>Returns: the IDs of all buttons on the page</p>
                <p>Returns the IDs of all buttons on the page.</p>
                <p>If a given button has no ID, it will appear as "" in this array.</p>
            </td>
        </tr>
        <tr>
            <td>21</td>
            <td>assertAllFields</td>
            <td>assertAllFields(pattern)<br>Generated from getAllFields().<br>Returns: the IDs of all field on the page&nbsp;</td>
        </tr>
        <tr>
            <td>22</td>
            <td>assertAllLinks</td>
            <td>assertAllLinks(pattern)<br>Generated from getAllLinks().<br>Returns: the IDs of all links on the page&nbsp;</td>
        </tr>
        <tr>
            <td>23</td>
            <td>assertAllWindowIds</td>
            <td>assertAllWindowIds(pattern)<br>Generated from getAllWindowIds().<br>Returns: Array of identifiers of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>24</td>
            <td>assertAllWindowNames</td>
            <td>assertAllWindowNames(pattern)<br>Generated from getAllWindowNames().<br>Returns: Array of names of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>25</td>
            <td>assertAllWindowTitles</td>
            <td>assertAllWindowTitles(pattern)<br>Generated from getAllWindowTitles().<br>Returns: Array of titles of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>26</td>
            <td>assertAttribute</td>
            <td>assertAttribute(attributeLocator, pattern)<br>Generated from getAttribute(attributeLocator) Arguments: *attributeLocator - an element locator followed by an @ sign and then the name of the attribute, e.g. "foo@bar" . Returns: the value of the specified attr</td>
        </tr>
        <tr>
            <td>27</td>
            <td>assertAttributeFromAllWindows</td>
            <td>assertAttributeFromAllWindows(attributeName, pattern)<br>Generated from getAttributeFromAllWindows(attributeName<p><strong>Arguments</strong>:</p>*attributeName - name of an attribute on the windows .<br>Returns: the set of values of this attribute from all known windows.&nbsp;</td>
        </tr>
        <tr>
            <td>28</td>
            <td>assertBodyText</td>
            <td>assertBodyText(pattern)<br>Generated from getBodyText().<br>Returns: the entire text of the page&nbsp;</td>
        </tr>
        <tr>
            <td>29</td>
            <td>assertChecked</td>
            <td>assertChecked(locator)<br>Generated from isChecked(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to a checkbox or radio button .<br>Returns: true if the checkbox is checked, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>30</td>
            <td>assertConfirmation</td>
            <td>assertConfirmation(pattern)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>31</td>
            <td>assertConfirmationAndWait</td>
            <td>assertConfirmationAndWait(pattern)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>32</td>
            <td>assertConfirmationNotPresent</td>
            <td>assertConfirmationNotPresent()<br>Generated from isConfirmationPresent().<br>Returns: true if there is a pending confirmation&nbsp;</td>
        </tr>
        <tr>
            <td>33</td>
            <td>assertConfirmationPresent</td>
            <td>assertConfirmationPresent()<br>Generated from isConfirmationPresent().<br>Returns: true if there is a pending confirmation&nbsp;</td>
        </tr>
        <tr>
            <td>34</td>
            <td>assertCookie</td>
            <td>assertCookie(pattern)<br>Generated from getCookie().<br>Returns: all cookies of the current page under test&nbsp;</td>
        </tr>
        <tr>
            <td>35</td>
            <td>assertCookieByName</td>
            <td>assertCookieByName(name, pattern)<br>Generated from getCookieByName(name<p><strong>Arguments</strong>:</p>*name - the name of the cookie.<br>Returns: the value of the cookie&nbsp;</td>
        </tr>
        <tr>
            <td>36</td>
            <td>assertCookieNotPresent</td>
            <td>assertCookieNotPresent(name)<br>Generated from isCookiePresent(name<p><strong>Arguments</strong>:</p>*name - the name of the cookie.<br>Returns: true if a cookie with the specified name is present, or false otherwise.&nbsp;</td>
        </tr>
        <tr>
            <td>37</td>
            <td>assertCookiePresent</td>
            <td>assertCookiePresent(name)<br>Generated from isCookiePresent(name<p><strong>Arguments</strong>:</p>*name - the name of the cookie .<br>Returns: true if a cookie with the specified name is present, or false otherwise.&nbsp;</td>
        </tr>
        <tr>
            <td>38</td>
            <td>assertCssCount</td>
            <td>assertCssCount(css, pattern)<br>Generated from getCssCount(css<p><strong>Arguments</strong>:</p>*css - the css selector to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specified css select</td>
        </tr>
        <tr>
            <td>39</td>
            <td>assertCursorPosition</td>
            <td>assertCursorPosition(locator, pattern)<br>Generated from getCursorPosition(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an input element or textarea.<br>Returns: the numerical position of the cursor in the field&nbsp;</td>
        </tr>
        <tr>
            <td>40</td>
            <td>assertEditable</td>
            <td>assertEditable(locator)<br>Generated from isEditable(locator<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: true if the input element is editable, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>41</td>
            <td>assertElementHeight</td>
            <td>assertElementHeight(locator, pattern)<br>Generated from getElementHeight(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element.<br>Returns: height of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>42</td>
            <td>assertElementIndex</td>
            <td>assertElementIndex(locator, pattern)<br>Generated from getElementIndex(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element.<br>Returns: of relative index of the element to its parent (starting from 0)&nbsp;</td>
        </tr>
        <tr>
            <td>43</td>
            <td>assertElementNotPresent</td>
            <td>assertElementNotPresent(locator)<br>Generated from isElementPresent(locator<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: true if the element is present, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>44</td>
            <td>assertElementPositionLeft</td>
            <td>assertElementPositionLeft(locator, pattern)<br>Generated from getElementPositionLeft(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself.<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>45</td>
            <td>assertElementPositionTop</td>
            <td>assertElementPositionTop(locator, pattern)<br>Generated from getElementPositionTop(locator)<br><strong><strong>Arguments:</strong><br></strong>*locator - an element locator pointing to an element OR an element itself.<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>46</td>
            <td>assertElementPresent</td>
            <td>assertElementPresent(locator)<br>Generated from isElementPresent(locator<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: true if the element is present, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>47</td>
            <td>assertElementWidth</td>
            <td>assertElementWidth(locator, pattern)<br>Generated from getElementWidth(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: width of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>48</td>
            <td>assertEval</td>
            <td>assertEval(script, pattern)<br>Generated from getEval(script<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run.<br>Returns: the results of evaluating the snippet&nbsp;</td>
        </tr>
        <tr>
            <td>49</td>
            <td>assertExpression</td>
            <td>assertExpression(expression, pattern)<br>Generated from getExpression(expression<p><strong>Arguments</strong>:</p>*expression - the value to return.<br>Returns: the value passed in&nbsp;</td>
        </tr>
        <tr>
            <td>50</td>
            <td>assertHtmlSource</td>
            <td>assertHtmlSource(pattern)<br>Generated from getHtmlSource().<br>Returns: the entire HTML source&nbsp;</td>
        </tr>
        <tr>
            <td>51</td>
            <td>assertLocation</td>
            <td>assertLocation(pattern)<br>Generated from getLocation().<br>Returns: the absolute URL of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>52</td>
            <td>assertMouseSpeed</td>
            <td>assertMouseSpeed(pattern)<br>Generated from getMouseSpeed().<br>Returns: the number of pixels between "mousemove" events during dragAndDrop commands (default=10)&nbsp;</td>
        </tr>
        <tr>
            <td>53</td>
            <td>assertNotAlert</td>
            <td>assertNotAlert(pattern)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</td>
        </tr>
        <tr>
            <td>54</td>
            <td>assertNotAllButtons</td>
            <td>assertNotAllButtons(pattern)<br>Generated from getAllButtons().<br>Returns: the IDs of all buttons on the page&nbsp;</td>
        </tr>
        <tr>
            <td>55</td>
            <td>assertNotAllFields</td>
            <td>assertNotAllFields(pattern)<br>Generated from getAllFields().<br>Returns: the IDs of all field on the page&nbsp;</td>
        </tr>
        <tr>
            <td>56</td>
            <td>assertNotAllLinks</td>
            <td>assertNotAllLinks(pattern)<br>Generated from getAllLinks().<br>Returns: the IDs of all links on the page&nbsp;</td>
        </tr>
        <tr>
            <td>57</td>
            <td>assertNotAllWindowIds</td>
            <td>assertNotAllWindowIds(pattern)<br>Generated from getAllWindowIds().<br>Returns: Array of identifiers of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>58</td>
            <td>assertNotAllWindowNames</td>
            <td>assertNotAllWindowNames(pattern)<br>Generated from getAllWindowNames().<br>Returns: Array of names of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>59</td>
            <td>assertNotAllWindowTitles</td>
            <td>assertNotAllWindowTitles(pattern)<br>Generated from getAllWindowTitles().<br>Returns: Array of titles of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>60</td>
            <td>assertNotAttribute</td>
            <td>assertNotAttribute(attributeLocator, pattern)<br>Generated from getAttribute(attributeLocator<p><strong>Arguments</strong>:</p>*attributeLocator - an element locator followed by an @ sign and then the name of the attribute, e.g. "foo@bar" .<br>Returns: the value of the specifie</td>
        </tr>
        <tr>
            <td>61</td>
            <td>assertNotAttributeFromAllWindows</td>
            <td>assertNotAttributeFromAllWindows(attributeName, pattern)<br>Generated from getAttributeFromAllWindows(attributeName<p><strong>Arguments</strong>:</p>*attributeName - name of an attribute on the windows .<br>Returns: the set of values of this attribute from all known windows.&nbsp;</td>
        </tr>
        <tr>
            <td>62</td>
            <td>assertNotBodyText</td>
            <td>assertNotBodyText(pattern)<br>Generated from getBodyText().<br>Returns: the entire text of the page&nbsp;</td>
        </tr>
        <tr>
            <td>63</td>
            <td>assertNotChecked</td>
            <td>assertNotChecked(locator)<br>Generated from isChecked(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to a checkbox or radio button.<br>Returns: true if the checkbox is checked, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>64</td>
            <td>assertNotConfirmation</td>
            <td>assertNotConfirmation(pattern)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>65</td>
            <td>assertNotCookie</td>
            <td>assertNotCookie(pattern)<br>Generated from getCookie().<br>Returns: all cookies of the current page under test&nbsp;</td>
        </tr>
        <tr>
            <td>66</td>
            <td>assertNotCookieByName</td>
            <td>assertNotCookieByName(name, pattern)<br>Generated from getCookieByName(name<p><strong>Arguments</strong>:</p>*name - the name of the cookie.<br>Returns: the value of the cookie&nbsp;</td>
        </tr>
        <tr>
            <td>67</td>
            <td>assertNotCssCount</td>
            <td>assertNotCssCount(css, pattern)<br>Generated from getCssCount(css)<p><strong>Arguments</strong>:</p>*css - the css selector to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specified css sel</td>
        </tr>
        <tr>
            <td>68</td>
            <td>assertNotCursorPosition</td>
            <td>assertNotCursorPosition(locator, pattern)<br>Generated from getCursorPosition(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an input element or textarea .<br>Returns: the numerical position of the cursor in the field&nbsp;</td>
        </tr>
        <tr>
            <td>69</td>
            <td>assertNotEditable</td>
            <td>assertNotEditable(locator)<br>Generated from isEditable(locator)<br><strong>Arguments:</strong> *locator - an element locator.<br>Returns: true if the input element is editable, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>70</td>
            <td>assertNotElementHeight</td>
            <td>assertNotElementHeight(locator, pattern)<br>Generated from getElementHeight(locator)<br><strong>Arguments:</strong> *locator - an element locator pointing to an element.<br>Returns: height of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>71</td>
            <td>assertNotElementIndex</td>
            <td>assertNotElementIndex(locator, pattern)<br>Generated from getElementIndex(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: of relative index of the element to its parent (starting from 0)&nbsp;</td>
        </tr>
        <tr>
            <td>72</td>
            <td>assertNotElementPositionLeft</td>
            <td>assertNotElementPositionLeft(locator, pattern)<br>Generated from getElementPositionLeft(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself .<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>73</td>
            <td>assertNotElementPositionTop</td>
            <td>assertNotElementPositionTop(locator, pattern)<br>Generated from getElementPositionTop(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself.<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>74</td>
            <td>assertNotElementWidth</td>
            <td>assertNotElementWidth(locator, pattern)<br>Generated from getElementWidth(locator<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element.<br>Returns: width of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>75</td>
            <td>assertNotEval</td>
            <td>assertNotEval(script, pattern)<br>Generated from getEval(script<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run .<br>Returns: the results of evaluating the snippet&nbsp;</td>
        </tr>
        <tr>
            <td>76</td>
            <td>assertNotExpression</td>
            <td>assertNotExpression(expression, pattern)<br>Generated from getExpression(expression<p><strong>Arguments</strong>:</p>*expression - the value to return.<br>Returns: the value passed in&nbsp;</td>
        </tr>
        <tr>
            <td>77</td>
            <td>assertNotHtmlSource</td>
            <td>assertNotHtmlSource(pattern)<br>Generated from getHtmlSource().<br>Returns: the entire HTML source&nbsp;</td>
        </tr>
        <tr>
            <td>78</td>
            <td>assertNotLocation</td>
            <td>assertNotLocation(pattern)<br>Generated from getLocation().<br>Returns: the absolute URL of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>79</td>
            <td>assertNotMouseSpeed</td>
            <td>assertNotMouseSpeed(pattern)<br>Generated from getMouseSpeed().<br>Returns: the number of pixels between "mousemove" events during dragAndDrop commands (default=10)&nbsp;</td>
        </tr>
        <tr>
            <td>80</td>
            <td>assertNotOrdered</td>
            <td>assertNotOrdered(locator1, locator2)<br>Generated from isOrdered(locator1, locator2<p><strong>Arguments</strong>:</p>*locator1 - an element locator pointing to the first element<br>*locator2 - an element locator pointing to the second element .<br>Returns: true if element1 is the</td>
        </tr>
        <tr>
            <td>81</td>
            <td>assertNotPrompt</td>
            <td>assertNotPrompt(pattern)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>82</td>
            <td>assertNotSelectOptions</td>
            <td>assertNotSelectOptions(selectLocator, pattern)<br>Generated from getSelectOptions(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all option labels in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>83</td>
            <td>assertNotSelectedId</td>
            <td>assertNotSelectedId(selectLocator, pattern)<br>Generated from getSelectedId(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option ID in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>84</td>
            <td>assertNotSelectedIds</td>
            <td>assertNotSelectedIds(selectLocator, pattern)<br>Generated from getSelectedIds(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option IDs in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>85</td>
            <td>assertNotSelectedIndex</td>
            <td>assertNotSelectedIndex(selectLocator, pattern)<br>Generated from getSelectedIndex(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option index in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>86</td>
            <td>assertNotSelectedIndexes</td>
            <td>assertNotSelectedIndexes(selectLocator, pattern)<br>Generated from getSelectedIndexes(selectLocator)<br><strong>Arguments:</strong> *selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option indexes in the specified select dro</td>
        </tr>
        <tr>
            <td>87</td>
            <td>assertNotSelectedLabel</td>
            <td>assertNotSelectedLabel(selectLocator, pattern)<br>Generated from getSelectedLabel(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option label in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>88</td>
            <td>assertNotSelectedLabels</td>
            <td>assertNotSelectedLabels(selectLocator, pattern)<br>Generated from getSelectedLabels(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: an array of all selected option labels in the specified select drop-d</td>
        </tr>
        <tr>
            <td>89</td>
            <td>assertNotSelectedValue</td>
            <td>assertNotSelectedValue(selectLocator, pattern)<br>Generated from getSelectedValue(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option value in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>90</td>
            <td>assertNotSelectedValues</td>
            <td>assertNotSelectedValues(selectLocator, pattern)<br>Generated from getSelectedValues(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option values in the specified select drop-</td>
        </tr>
        <tr>
            <td>91</td>
            <td>assertNotSomethingSelected</td>
            <td>assertNotSomethingSelected(selectLocator)<br>Generated from isSomethingSelected(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: true if some option has been selected, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>92</td>
            <td>assertNotSpeed</td>
            <td>assertNotSpeed(pattern)<br>Generated from getSpeed().<br>Returns: the execution speed in milliseconds.&nbsp;</td>
        </tr>
        <tr>
            <td>93</td>
            <td>assertNotTable</td>
            <td>assertNotTable(tableCellAddress, pattern)<br>Generated from getTable(tableCellAddress<p><strong>Arguments</strong>:</p>*tableCellAddress - a cell address, e.g. "foo.1.4" .<br>Returns: the text from the specified cell&nbsp;</td>
        </tr>
        <tr>
            <td>94</td>
            <td>assertNotText</td>
            <td>assertNotText(locator, pattern)<br>Generated from getText(locator<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>95</td>
            <td>assertNotTitle</td>
            <td>assertNotTitle(pattern)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>96</td>
            <td>assertNotValue</td>
            <td>assertNotValue(locator, pattern)<br>Generated from getValue(locator<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: the element value, or "on/off" for checkbox/radio elements&nbsp;</td>
        </tr>
        <tr>
            <td>97</td>
            <td>assertNotVisible</td>
            <td>assertNotVisible(locator)<br>Generated from isVisible(locator<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: true if the specified element is visible, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>98</td>
            <td>assertNotWhetherThisFrameMatchFrameExpression</td>
            <td>assertNotWhetherThisFrameMatchFrameExpression(currentFrameString, target, pattern)<br>Generated from getWhetherThisFrameMatchFrameExpression(currentFrameString, target<p><strong>Arguments</strong>:</p>*currentFrameString - starting frame<br>*target - new frame (which might be r</td>
        </tr>
        <tr>
            <td>99</td>
            <td>assertNotWhetherThisWindowMatchWindowExpression</td>
            <td>assertNotWhetherThisWindowMatchWindowExpression(currentWindowString, target, pattern)<br>Generated from getWhetherThisWindowMatchWindowExpression(currentWindowString, target<p><strong>Arguments</strong>:</p>*currentWindowString - starting window<br>*target - new window (which m</td>
        </tr>
        <tr>
            <td>100</td>
            <td>assertNotXpathCount</td>
            <td>assertNotXpathCount(xpath, pattern)<br>Generated from getXpathCount(xpath<p><strong>Arguments</strong>:</p>*xpath - the xpath expression to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the spe</td>
        </tr>
        <tr>
            <td>101</td>
            <td>assertOrdered</td>
            <td>assertOrdered(locator1, locator2)<br>Generated from isOrdered(locator1, locator2<p><strong>Arguments</strong>:</p>*locator1 - an element locator pointing to the first element<br>*locator2 - an element locator pointing to the second element.<br>Returns: true if elemen</td>
        </tr>
        <tr>
            <td>102</td>
            <td>assertPrompt</td>
            <td>assertPrompt(pattern)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>103</td>
            <td>assertPromptAndWait</td>
            <td>assertPromptAndWait(pattern)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>104</td>
            <td>assertPromptNotPresent</td>
            <td>assertPromptNotPresent()<br>Generated from isPromptPresent().<br>Returns: true if there is a pending prompt&nbsp;</td>
        </tr>
        <tr>
            <td>105</td>
            <td>assertPromptPresent</td>
            <td>assertPromptPresent()<br>Generated from isPromptPresent().<br>Returns: true if there is a pending prompt&nbsp;</td>
        </tr>
        <tr>
            <td>106</td>
            <td>assertSelectOptions</td>
            <td>assertSelectOptions(selectLocator, pattern)<br>Generated from getSelectOptions(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: an array of all option labels in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>107</td>
            <td>assertSelectedId</td>
            <td>assertSelectedId(selectLocator, pattern)<br>Generated from getSelectedId(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option ID in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>108</td>
            <td>assertSelectedIds</td>
            <td>assertSelectedIds(selectLocator, pattern)<br>Generated from getSelectedIds(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option IDs in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>109</td>
            <td>assertSelectedIndex</td>
            <td>assertSelectedIndex(selectLocator, pattern)<br>Generated from getSelectedIndex(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option index in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>110</td>
            <td>assertSelectedIndexes</td>
            <td>assertSelectedIndexes(selectLocator, pattern)<br>Generated from getSelectedIndexes(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option indexes in the specified select drop-</td>
        </tr>
        <tr>
            <td>111</td>
            <td>assertSelectedLabel</td>
            <td>assertSelectedLabel(selectLocator, pattern)<br>Generated from getSelectedLabel(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option label in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>112</td>
            <td>assertSelectedLabels</td>
            <td>assertSelectedLabels(selectLocator, pattern)<br>Generated from getSelectedLabels(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option labels in the specified select drop-dow</td>
        </tr>
        <tr>
            <td>113</td>
            <td>assertSelectedValue</td>
            <td>assertSelectedValue(selectLocator, pattern)<br>Generated from getSelectedValue(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option value in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>114</td>
            <td>assertSelectedValues</td>
            <td>assertSelectedValues(selectLocator, pattern)<br>Generated from getSelectedValues(selectLocator<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option values in the specified select drop-dow</td>
        </tr>
        <tr>
            <td>115</td>
            <td>assertSomethingSelected</td>
            <td>
                <p>assertSomethingSelected(selectLocator)<br>Generated from isSomethingSelected(selectLocator)</p>
                <p><strong>Arguments</strong>:</p>
                <p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: true if some option has been selected, false otherwise&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td>116</td>
            <td>assertSpeed</td>
            <td>assertSpeed(pattern)<br>Generated from getSpeed().<br>Returns: the execution speed in milliseconds.&nbsp;</td>
        </tr>
        <tr>
            <td>117</td>
            <td>assertTable</td>
            <td>assertTable(tableCellAddress, pattern)<br>Generated from getTable(tableCellAddress)<p><strong>Arguments</strong>:</p>*tableCellAddress - a cell address, e.g. "foo.1.4" .<br>Returns: the text from the specified cell&nbsp;</td>
        </tr>
        <tr>
            <td>118</td>
            <td>assertText</td>
            <td>
                <p>assertText(locator, pattern)<br>Generated from getText(locator)</p>
                <p>Arguments:<br>*locator - an element locator .<br>Returns: the text of the element&nbsp;</p>
            </td>
        </tr>
        <tr>
            <td>119</td>
            <td>assertTextAndWait</td>
            <td>assertTextAndWait(locator, pattern)<br>Generated from getText(locator) Arguments:<br>*locator - an element locator .<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>120</td>
            <td>assertTextNotPresent</td>
            <td>assertTextNotPresent(pattern)<br>This command is deprecated. Use the assertNotText command with an element locator instead.<br>Generated from isTextPresent(pattern) Arguments: *pattern - a pattern to match with the text of the page .<br>Returns: true if the patt</td>
        </tr>
        <tr>
            <td>121</td>
            <td>assertTextPresent</td>
            <td>assertTextPresent(pattern)<br>This command is deprecated. Use the assertText command with an element locator instead.<br>Generated from isTextPresent(pattern)<br>Arguments: *pattern - a pattern to match with the text of the page .<br>Returns: true if the pattern m</td>
        </tr>
        <tr>
            <td>122</td>
            <td>assertTitle</td>
            <td>assertTitle(pattern)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>123</td>
            <td>assertTitleAndWait</td>
            <td>assertTitleAndWait(pattern)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>124</td>
            <td>assertValue</td>
            <td>assertValue(locator, pattern)<br>Generated from getValue(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: the element value, or "on/off" for checkbox/radio elements&nbsp;</td>
        </tr>
        <tr>
            <td>125</td>
            <td>assertVisible</td>
            <td>assertVisible(locator)<br>Generated from isVisible(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: true if the specified element is visible, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>126</td>
            <td>assertWhetherThisFrameMatchFrameExpression</td>
            <td>assertWhetherThisFrameMatchFrameExpression(currentFrameString, target, pattern)<br>Generated from getWhetherThisFrameMatchFrameExpression(currentFrameString, target)<p><strong>Arguments</strong>:</p>*currentFrameString - starting frame<br>*target - new frame (which might be rela</td>
        </tr>
        <tr>
            <td>127</td>
            <td>assertWhetherThisWindowMatchWindowExpression</td>
            <td>assertWhetherThisWindowMatchWindowExpression(currentWindowString, target, pattern)<br>Generated from getWhetherThisWindowMatchWindowExpression(currentWindowString, target)<p><strong>Arguments</strong>:</p>*currentWindowString - starting window<br>*target - new window (which migh</td>
        </tr>
        <tr>
            <td>128</td>
            <td>assertXpathCount</td>
            <td>assertXpathCount(xpath, pattern)<br>Generated from getXpathCount(xpath)<p><strong>Arguments</strong>:</p>*xpath - the xpath expression to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specif</td>
        </tr>
        <tr>
            <td>129</td>
            <td>assignId</td>
            <td>assignId(locator, identifier)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element<br>*identifier - a string to be used as the ID of the specified element&nbsp;</td>
        </tr>
        <tr>
            <td>130</td>
            <td>assignIdAndWait</td>
            <td>assignIdAndWait(locator, identifier)<br>Generated from assignId(locator, identifier)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element<br>*identifier - a string to be used as the ID of the specified element&nbsp;</td>
        </tr>
        <tr>
            <td>131</td>
            <td>break</td>
            <td>break()</td>
        </tr>
        <tr>
            <td>132</td>
            <td>captureEntirePageScreenshot</td>
            <td>captureEntirePageScreenshot(filename, kwargs)<p><strong>Arguments</strong>:</p>*filename - the path to the file to persist the screenshot as. No filename extension will be appended by default. Directories will not be created if they do not exist,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and an ex</td>
        </tr>
        <tr>
            <td>133</td>
            <td>captureEntirePageScreenshotAndWait</td>
            <td>captureEntirePageScreenshotAndWait(filename, kwargs)<br>Generated from captureEntirePageScreenshot(filename, kwargs)<p><strong>Arguments</strong>:</p>*filename - the path to the file to persist the screenshot as. No filename extension will be appended by default. Directories w</td>
        </tr>
        <tr>
            <td>134</td>
            <td>check</td>
            <td>check(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>135</td>
            <td>checkAndWait</td>
            <td>checkAndWait(locator)<br>Generated from check(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>136</td>
            <td>chooseCancelOnNextConfirmation</td>
            <td>chooseCancelOnNextConfirmation()</td>
        </tr>
        <tr>
            <td>137</td>
            <td>chooseCancelOnNextPrompt</td>
            <td>chooseCancelOnNextPrompt</td>
        </tr>
        <tr>
            <td>138</td>
            <td>chooseCancelOnNextPromptAndWait</td>
            <td>chooseCancelOnNextPromptAndWait</td>
        </tr>
        <tr>
            <td>139</td>
            <td>chooseOkOnNextConfirmation</td>
            <td>chooseOkOnNextConfirmation()</td>
        </tr>
        <tr>
            <td>140</td>
            <td>chooseOkOnNextConfirmationAndWait</td>
            <td>chooseOkOnNextConfirmationAndWait()<br>Generated from chooseOkOnNextConfirmation()</td>
        </tr>
        <tr>
            <td>141</td>
            <td>click</td>
            <td>
                <p>click(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</p>
                <p>Clicks on a link, button, checkbox or radio button. If the click action causes a new page to load (like a link usually does), call waitForPageToLoad.</p>
            </td>
        </tr>
        <tr>
            <td>142</td>
            <td>clickAndWait</td>
            <td>
                <p>clickAndWait(locator)<br>Generated from click(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</p>
                <p>Clicks on a link, button, checkbox or radio button. If the click action causes a new page to load (like a link usually does), call waitForPageToLoad.</p>
            </td>
        </tr>
        <tr>
            <td>143</td>
            <td>clickAt</td>
            <td>
                <p>clickAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the locator.</p>
                <p>Clicks on a link, button, checkbox or radio button. If the click action causes a new page to load (like a link usually does), call waitForPageToLoad.</p>
            </td>
        </tr>
        <tr>
            <td>144</td>
            <td>clickAtAndWait</td>
            <td>
                <p>clickAtAndWait(locator, coordString)<br>Generated from clickAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the locator.</p>
                <p>Clicks on a link, button, checkbox or radio button. If the click action causes a new page to load (like a link usually does), call waitForPageToLoad.</p>
            </td>
        </tr>
        <tr>
            <td>145</td>
            <td>close</td>
            <td>close()</td>
        </tr>
        <tr>
            <td>146</td>
            <td>contextMenu</td>
            <td>contextMenu(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator&nbsp;</td>
        </tr>
        <tr>
            <td>147</td>
            <td>contextMenuAndWait</td>
            <td>contextMenuAndWait(locator)<br>Generated from contextMenu(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator&nbsp;</td>
        </tr>
        <tr>
            <td>148</td>
            <td>contextMenuAt</td>
            <td>contextMenuAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the locator.&nbsp;</td>
        </tr>
        <tr>
            <td>149</td>
            <td>contextMenuAtAndWait</td>
            <td>contextMenuAtAndWait(locator, coordString)<br>Generated from contextMenuAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the&nbsp;</td>
        </tr>
        <tr>
            <td>150</td>
            <td>controlKeyDown</td>
            <td>controlKeyDown()</td>
        </tr>
        <tr>
            <td>151</td>
            <td>controlKeyDownAndWait</td>
            <td>controlKeyDownAndWait()<br>Generated from controlKeyDown()</td>
        </tr>
        <tr>
            <td>152</td>
            <td>controlKeyUp</td>
            <td>controlKeyUp()</td>
        </tr>
        <tr>
            <td>153</td>
            <td>controlKeyUpAndWait</td>
            <td>controlKeyUpAndWait()<br>Generated from controlKeyUp()</td>
        </tr>
        <tr>
            <td>154</td>
            <td>createCookie</td>
            <td>createCookie(nameValuePair, optionsString)<p><strong>Arguments</strong>:</p>*nameValuePair - name and value of the cookie in a format "name=value"<br>*optionsString - options for the cookie. Currently supported options include 'path', 'max_age' and 'domain'. the optionsString'</td>
        </tr>
        <tr>
            <td>155</td>
            <td>createCookieAndWait</td>
            <td>createCookieAndWait(nameValuePair, optionsString)<br>Generated from createCookie(nameValuePair, optionsString)<p><strong>Arguments</strong>:</p>*nameValuePair - name and value of the cookie in a format "name=value"<br>*optionsString - options for the cookie. Currently supported&nbsp;</td>
        </tr>
        <tr>
            <td>156</td>
            <td>deleteAllVisibleCookies</td>
            <td>deleteAllVisibleCookies()</td>
        </tr>
        <tr>
            <td>157</td>
            <td>deleteAllVisibleCookiesAndWait</td>
            <td>deleteAllVisibleCookiesAndWait()<br>Generated from deleteAllVisibleCookies()</td>
        </tr>
        <tr>
            <td>158</td>
            <td>deleteCookie</td>
            <td>deleteCookie(name, optionsString)<p><strong>Arguments</strong>:</p>*name - the name of the cookie to be deleted<br>*optionsString - options for the cookie. Currently supported options include 'path', 'domain' and 'recurse.' The optionsString's format is "path=/path/, domain=.f</td>
        </tr>
        <tr>
            <td>159</td>
            <td>deleteCookieAndWait</td>
            <td>deleteCookieAndWait(name, optionsString)<br>Generated from deleteCookie(name, optionsString)<p><strong>Arguments</strong>:</p>*name - the name of the cookie to be deleted<br>*optionsString - options for the cookie. Currently supported options include 'path', 'domain'&nbsp; and 'recur</td>
        </tr>
        <tr>
            <td>160</td>
            <td>deselectPopUp</td>
            <td>deselectPopUp()</td>
        </tr>
        <tr>
            <td>161</td>
            <td>deselectPopUpAndWait</td>
            <td>deselectPopUpAndWait()<br>Generated from deselectPopUp()</td>
        </tr>
        <tr>
            <td>162</td>
            <td>domWait</td>
            <td>domWait</td>
        </tr>
        <tr>
            <td>163</td>
            <td>domWaitAndWait</td>
            <td>domWaitAndWait</td>
        </tr>
        <tr>
            <td>164</td>
            <td>doubleClick</td>
            <td>doubleClick(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator&nbsp;</td>
        </tr>
        <tr>
            <td>165</td>
            <td>doubleClickAndWait</td>
            <td>doubleClickAndWait(locator)<br>Generated from doubleClick(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator&nbsp;</td>
        </tr>
        <tr>
            <td>166</td>
            <td>doubleClickAt</td>
            <td>doubleClickAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the locator.&nbsp;</td>
        </tr>
        <tr>
            <td>167</td>
            <td>doubleClickAtAndWait</td>
            <td>doubleClickAtAndWait(locator, coordString)<br>Generated from doubleClickAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the&nbsp;</td>
        </tr>
        <tr>
            <td>168</td>
            <td>dragAndDrop</td>
            <td>dragAndDrop(locator, movementsString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*movementsString - offset in pixels from the current location to which the element should be moved, e.g., "+70,-300"&nbsp;</td>
        </tr>
        <tr>
            <td>169</td>
            <td>dragAndDropAndWait</td>
            <td>dragAndDropAndWait(locator, movementsString)<br>Generated from dragAndDrop(locator, movementsString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*movementsString - offset in pixels from the current location to which the element should be moved, e.g., "+70,-</td>
        </tr>
        <tr>
            <td>170</td>
            <td>dragAndDropToObject</td>
            <td>dragAndDropToObject(locatorOfObjectToBeDragged, locatorOfDragDestinationObject)<p><strong>Arguments</strong>:</p>*locatorOfObjectToBeDragged - an element to be dragged<br>*locatorOfDragDestinationObject - an element whose location (i.e., whose center-most pixel) will be the po</td>
        </tr>
        <tr>
            <td>171</td>
            <td>dragAndDropToObjectAndWait</td>
            <td>dragAndDropToObjectAndWait(locatorOfObjectToBeDragged, locatorOfDragDestinationObject)<br>Generated from dragAndDropToObject(locatorOfObjectToBeDragged, locatorOfDragDestinationObject)<p><strong>Arguments</strong>:</p>*locatorOfObjectToBeDragged - an element to be dragged<br>*lo</td>
        </tr>
        <tr>
            <td>172</td>
            <td>echo</td>
            <td>echo(message)<p><strong>Arguments</strong>:</p>*message - the message to print&nbsp;</td>
        </tr>
        <tr>
            <td>173</td>
            <td>echoAndWait</td>
            <td>echoAndWait(message)<br>Generated from echo(message)<p><strong>Arguments</strong>:</p>*message - the message to print&nbsp;</td>
        </tr>
        <tr>
            <td>174</td>
            <td>editContent</td>
            <td>editContent</td>
        </tr>
        <tr>
            <td>175</td>
            <td>editContentAndWait</td>
            <td>editContentAndWait</td>
        </tr>
        <tr>
            <td>176</td>
            <td>fireEvent</td>
            <td>fireEvent(locator, eventName)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*eventName - the event name, e.g. "focus" or "blur"&nbsp;</td>
        </tr>
        <tr>
            <td>177</td>
            <td>fireEventAndWait</td>
            <td>fireEventAndWait(locator, eventName)<br>Generated from fireEvent(locator, eventName)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*eventName - the event name, e.g. "focus" or "blur"&nbsp;</td>
        </tr>
        <tr>
            <td>178</td>
            <td>focus</td>
            <td>focus(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>179</td>
            <td>focusAndWait</td>
            <td>focusAndWait(locator)<br>Generated from focus(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>180</td>
            <td>goBack</td>
            <td>goBack()</td>
        </tr>
        <tr>
            <td>181</td>
            <td>goBackAndWait</td>
            <td>goBackAndWait()<br>Generated from goBack()</td>
        </tr>
        <tr>
            <td>182</td>
            <td>highlight</td>
            <td>highlight(locator)<br>Arguments: *locator - an element locator</td>
        </tr>
        <tr>
            <td>183</td>
            <td>highlightAndWait</td>
            <td>highlightAndWait(locator)<br>Generated from highlight(locator)<br>Arguments: *locator - an element locator</td>
        </tr>
        <tr>
            <td>184</td>
            <td>ignoreAttributesWithoutValue</td>
            <td>ignoreAttributesWithoutValue(ignore)<p><strong>Arguments</strong>:</p>*ignore - boolean, true means we'll ignore attributes without value at the expense of xpath "correctness"; false means we'll sacrifice speed for correctness.&nbsp;</td>
        </tr>
        <tr>
            <td>185</td>
            <td>ignoreAttributesWithoutValueAndWait</td>
            <td>ignoreAttributesWithoutValueAndWait(ignore)<br>Generated from ignoreAttributesWithoutValue(ignore)<p><strong>Arguments</strong>:</p>*ignore - boolean, true means we'll ignore attributes without value at the expense of xpath "correctness"; false means we'll sacrifice speed for&nbsp;</td>
        </tr>
        <tr>
            <td>186</td>
            <td>keyDown</td>
            <td>keyDown(locator, keySequence)<br>This command is deprecated. Use the sendKeys command instead.<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*keySequence - Either be a string("\" followed by the numeric keycode&nbsp; of the keytobe pressed, normally theASCIIvalu</td>
        </tr>
        <tr>
            <td>187</td>
            <td>keyDownAndWait</td>
            <td>keyDownAndWait(locator, keySequence)<br>This command is deprecated. Use the sendKeysAndWait command instead. Generated from keyDown(locator, keySequence)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*keySequence - Either be a string("\" followed by the numeric</td>
        </tr>
        <tr>
            <td>188</td>
            <td>keyPress</td>
            <td>keyPress(locator, keySequence)<br>This command is deprecated. Use the sendKeys command instead.<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*keySequence - Either be a string("\" followed by the numeric keycode&nbsp; of the keytobe pressed, normally the ASCIIval</td>
        </tr>
        <tr>
            <td>189</td>
            <td>keyPressAndWait</td>
            <td>keyPressAndWait(locator, keySequence)<br>This command is deprecated. Use the sendKeysAndWait command instead. Generated from keyPress(locator, keySequence)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*keySequence - Either be a string("\" followed bythenumer</td>
        </tr>
        <tr>
            <td>190</td>
            <td>keyUp</td>
            <td>keyUp(locator, keySequence)<br>This command is deprecated. Use the sendKeys command instead.<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*keySequence - Either be a string("\" followed by the numeric keycode&nbsp; of the key to be pressed, normally the ASCII value&nbsp;</td>
        </tr>
        <tr>
            <td>191</td>
            <td>keyUpAndWait</td>
            <td>keyUpAndWait(locator, keySequence)<br>This command is deprecated. Use the sendKeysAndWait command instead. Generated from keyUp(locator, keySequence)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*keySequence - Either be a string("\" followed by the numeric ke</td>
        </tr>
        <tr>
            <td>192</td>
            <td>metaKeyDown</td>
            <td>metaKeyDown()</td>
        </tr>
        <tr>
            <td>193</td>
            <td>metaKeyDownAndWait</td>
            <td>metaKeyDownAndWait() Generated from metaKeyDown()</td>
        </tr>
        <tr>
            <td>194</td>
            <td>metaKeyUp</td>
            <td>metaKeyUp()</td>
        </tr>
        <tr>
            <td>195</td>
            <td>metaKeyUpAndWait</td>
            <td>metaKeyUpAndWait() Generated from metaKeyUp()</td>
        </tr>
        <tr>
            <td>196</td>
            <td>mouseDown</td>
            <td>mouseDown(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>197</td>
            <td>mouseDownAndWait</td>
            <td>mouseDownAndWait(locator)<br>Generated from mouseDown(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>198</td>
            <td>mouseDownAt</td>
            <td>mouseDownAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; event relative to the element returned by the locator.&nbsp;</td>
        </tr>
        <tr>
            <td>199</td>
            <td>mouseDownAtAndWait</td>
            <td>mouseDownAtAndWait(locator, coordString)<br>Generated from mouseDownAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; event relative to the element returned by&nbsp;</td>
        </tr>
        <tr>
            <td>200</td>
            <td>mouseDownRight</td>
            <td>mouseDownRight(locator) Arguments: *locator - an element locator&nbsp;</td>
        </tr>
        <tr>
            <td>201</td>
            <td>mouseDownRightAndWait</td>
            <td>mouseDownRightAndWait(locator)<br>Generated from mouseDownRight(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>202</td>
            <td>mouseDownRightAt</td>
            <td>mouseDownRightAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; event relative to the element returned by the locator.&nbsp;</td>
        </tr>
        <tr>
            <td>203</td>
            <td>mouseDownRightAtAndWait</td>
            <td>mouseDownRightAtAndWait(locator, coordString)<br>Generated from mouseDownRightAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element re</td>
        </tr>
        <tr>
            <td>204</td>
            <td>mouseMove</td>
            <td>mouseMove(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>205</td>
            <td>mouseMoveAndWait</td>
            <td>mouseMoveAndWait(locator)<br>Generated from mouseMove(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>206</td>
            <td>mouseMoveAt</td>
            <td>mouseMoveAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the locator.&nbsp;</td>
        </tr>
        <tr>
            <td>207</td>
            <td>mouseMoveAtAndWait</td>
            <td>mouseMoveAtAndWait(locator, coordString)<br>Generated from mouseMoveAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; event relative to the element returned by&nbsp;</td>
        </tr>
        <tr>
            <td>208</td>
            <td>mouseOut</td>
            <td>mouseOut(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>209</td>
            <td>mouseOutAndWait</td>
            <td>mouseOutAndWait(locator)<br>Generated from mouseOut(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>210</td>
            <td>mouseOver</td>
            <td>mouseOver(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>211</td>
            <td>mouseOverAndWait</td>
            <td>mouseOverAndWait(locator)<br>Generated from mouseOver(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>212</td>
            <td>mouseUp</td>
            <td>mouseUp(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>213</td>
            <td>mouseUpAndWait</td>
            <td>mouseUpAndWait(locator)<br>Generated from mouseUp(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>214</td>
            <td>mouseUpAt</td>
            <td>mouseUpAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the locator.&nbsp;</td>
        </tr>
        <tr>
            <td>215</td>
            <td>mouseUpAtAndWait</td>
            <td>mouseUpAtAndWait(locator, coordString)<br>Generated from mouseUpAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; event relative to the element returned by the&nbsp;</td>
        </tr>
        <tr>
            <td>216</td>
            <td>mouseUpRight</td>
            <td>mouseUpRight(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator</td>
        </tr>
        <tr>
            <td>217</td>
            <td>mouseUpRightAndWait</td>
            <td>mouseUpRightAndWait(locator)<br>Generated from mouseUpRight(locator)<br>Arguments: *locator - an element locator</td>
        </tr>
        <tr>
            <td>218</td>
            <td>mouseUpRightAt</td>
            <td>mouseUpRightAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse event relative to the element returned by the locator.&nbsp;</td>
        </tr>
        <tr>
            <td>219</td>
            <td>mouseUpRightAtAndWait</td>
            <td>mouseUpRightAtAndWait(locator, coordString)<br>Generated from mouseUpRightAt(locator, coordString)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*coordString - specifies the x,y position (i.e. - 10,20) of the mouse&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; event relative to the element return</td>
        </tr>
        <tr>
            <td>220</td>
            <td>open</td>
            <td>open(url)<p><strong>Arguments</strong>:</p>*url - the URL to open; may be relative or absolute&nbsp;</td>
        </tr>
        <tr>
            <td>221</td>
            <td>openWindow</td>
            <td>openWindow(url, windowID)<p><strong>Arguments</strong>:</p>*url - the URL to open, which can be blank<br>*windowID - the JavaScript window ID of the window to select&nbsp;</td>
        </tr>
        <tr>
            <td>222</td>
            <td>openWindowAndWait</td>
            <td>openWindowAndWait(url, windowID)<br>Generated from openWindow(url, windowID)<p><strong>Arguments</strong>:</p>*url - the URL to open, which can be blank<br>*windowID - the JavaScript window ID of the window to select&nbsp;</td>
        </tr>
        <tr>
            <td>223</td>
            <td>pageWait</td>
            <td>pageWait</td>
        </tr>
        <tr>
            <td>224</td>
            <td>pageWaitAndWait</td>
            <td>pageWaitAndWait</td>
        </tr>
        <tr>
            <td>225</td>
            <td>pause</td>
            <td>pause(waitTime) Arguments: *waitTime - the amount of time to sleep (in milliseconds)&nbsp;</td>
        </tr>
        <tr>
            <td>226</td>
            <td>prePageWait</td>
            <td>prePageWait</td>
        </tr>
        <tr>
            <td>227</td>
            <td>prePageWaitAndWait</td>
            <td>prePageWaitAndWait</td>
        </tr>
        <tr>
            <td>228</td>
            <td>refresh</td>
            <td>refresh()</td>
        </tr>
        <tr>
            <td>229</td>
            <td>refreshAndWait</td>
            <td>refreshAndWait() Generated from refresh()</td>
        </tr>
        <tr>
            <td>230</td>
            <td>removeAllSelections</td>
            <td>removeAllSelections(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator identifying a multi-select box&nbsp;</td>
        </tr>
        <tr>
            <td>231</td>
            <td>removeAllSelectionsAndWait</td>
            <td>removeAllSelectionsAndWait(locator)<br>Generated from removeAllSelections(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator identifying a multi-select box&nbsp;</td>
        </tr>
        <tr>
            <td>232</td>
            <td>removeScript</td>
            <td>removeScript(scriptTagId)<p><strong>Arguments</strong>:</p>*scriptTagId - the id of the script element to remove.&nbsp;</td>
        </tr>
        <tr>
            <td>233</td>
            <td>removeScriptAndWait</td>
            <td>removeScriptAndWait(scriptTagId)<br>Generated from removeScript(scriptTagId)<p><strong>Arguments</strong>:</p>*scriptTagId - the id of the script element to remove.&nbsp;</td>
        </tr>
        <tr>
            <td>234</td>
            <td>removeSelection</td>
            <td>removeSelection(locator, optionLocator)<p><strong>Arguments</strong>:</p>*locator - an element locator identifying a multi-select box<br>*optionLocator - an option locator (a label by default)&nbsp;</td>
        </tr>
        <tr>
            <td>235</td>
            <td>removeSelectionAndWait</td>
            <td>removeSelectionAndWait(locator, optionLocator)<br>Generated from removeSelection(locator, optionLocator)<p><strong>Arguments</strong>:</p>*locator - an element locator identifying a multi-select box<br>*optionLocator - an option locator (a label by default)&nbsp;</td>
        </tr>
        <tr>
            <td>236</td>
            <td>rollup</td>
            <td>rollup(rollupName, kwargs)<p><strong>Arguments</strong>:</p>*rollupName - the name of the rollup command<br>*kwargs - keyword arguments string that influences how the rollup expands into commands&nbsp;</td>
        </tr>
        <tr>
            <td>237</td>
            <td>rollupAndWait</td>
            <td>rollupAndWait(rollupName, kwargs)<br>Generated from rollup(rollupName, kwargs)<p><strong>Arguments</strong>:</p>*rollupName - the name of the rollup command<br>*kwargs - keyword arguments string that influences how the rollup expands into commands&nbsp;</td>
        </tr>
        <tr>
            <td>238</td>
            <td>runScript</td>
            <td>runScript(script)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run&nbsp;</td>
        </tr>
        <tr>
            <td>239</td>
            <td>runScriptAndWait</td>
            <td>runScriptAndWait(script)<br>Generated from runScript(script)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run&nbsp;</td>
        </tr>
        <tr>
            <td>240</td>
            <td>select</td>
            <td>select(selectLocator, optionLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu<br>*optionLocator - an option locator (a label by default)&nbsp;</td>
        </tr>
        <tr>
            <td>241</td>
            <td>selectAndWait</td>
            <td>selectAndWait(selectLocator, optionLocator)<br>Generated from select(selectLocator, optionLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu<br>*optionLocator - an option locator (a label by default)&nbsp;</td>
        </tr>
        <tr>
            <td>242</td>
            <td>selectFrame</td>
            <td>selectFrame(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator identifying a frame or iframe&nbsp;</td>
        </tr>
        <tr>
            <td>243</td>
            <td>selectPopUp</td>
            <td>selectPopUp(windowID)<p><strong>Arguments</strong>:</p>*windowID - an identifier for the popup window, which can take on a number of different meanings&nbsp;</td>
        </tr>
        <tr>
            <td>244</td>
            <td>selectPopUpAndWait</td>
            <td>selectPopUpAndWait(windowID)<br>Generated from selectPopUp(windowID)<p><strong>Arguments</strong>:</p>*windowID - an identifier for the popup window, which can take on a number of different meanings&nbsp;</td>
        </tr>
        <tr>
            <td>245</td>
            <td>selectWindow</td>
            <td>selectWindow(windowID)<p><strong>Arguments</strong>:</p>*windowID - the JavaScript window ID of the window to select&nbsp;</td>
        </tr>
        <tr>
            <td>246</td>
            <td>sendKeys</td>
            <td>sendKeys(locator, value)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*value - the value to type&nbsp;</td>
        </tr>
        <tr>
            <td>247</td>
            <td>sendKeysAndWait</td>
            <td>sendKeysAndWait(locator, value)<br>Generated from sendKeys(locator, value)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*value - the value to type&nbsp;</td>
        </tr>
        <tr>
            <td>248</td>
            <td>setCursorPosition</td>
            <td>setCursorPosition(locator, position)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an input element or textarea<br>*position - the numerical position of the cursor in the field; position should be 0 to move the position to the beginning of the&nbsp;</td>
        </tr>
        <tr>
            <td>249</td>
            <td>setCursorPositionAndWait</td>
            <td>setCursorPositionAndWait(locator, position)<br>Generated from setCursorPosition(locator, position)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an input element or textarea<br>*position - the numerical position of the cursor in the field; positio</td>
        </tr>
        <tr>
            <td>250</td>
            <td>setMouseSpeed</td>
            <td>setMouseSpeed(pixels)<p><strong>Arguments</strong>:</p>*pixels - the number of pixels between "mousemove" events&nbsp;</td>
        </tr>
        <tr>
            <td>251</td>
            <td>setMouseSpeedAndWait</td>
            <td>setMouseSpeedAndWait(pixels)<br>Generated from setMouseSpeed(pixels)<p><strong>Arguments</strong>:</p>*pixels - the number of pixels between "mousemove" events&nbsp;</td>
        </tr>
        <tr>
            <td>252</td>
            <td>setSpeed</td>
            <td>setSpeed(value)<p><strong>Arguments</strong>:</p>*value - the number of milliseconds to pause after operation&nbsp;</td>
        </tr>
        <tr>
            <td>253</td>
            <td>setSpeedAndWait</td>
            <td>setSpeedAndWait(value)<br>Generated from setSpeed(value)<p><strong>Arguments</strong>:</p>*value - the number of milliseconds to pause after operation&nbsp;</td>
        </tr>
        <tr>
            <td>254</td>
            <td>setTimeout</td>
            <td>setTimeout(timeout)<p><strong>Arguments</strong>:</p>*timeout - a timeout in milliseconds, after which the action will return with an error&nbsp;</td>
        </tr>
        <tr>
            <td>255</td>
            <td>shiftKeyDown</td>
            <td>shiftKeyDown()</td>
        </tr>
        <tr>
            <td>256</td>
            <td>shiftKeyDownAndWait</td>
            <td>shiftKeyDownAndWait() Generated from shiftKeyDown()</td>
        </tr>
        <tr>
            <td>257</td>
            <td>shiftKeyUp</td>
            <td>shiftKeyUp()</td>
        </tr>
        <tr>
            <td>258</td>
            <td>shiftKeyUpAndWait</td>
            <td>shiftKeyUpAndWait() Generated from shiftKeyUp()</td>
        </tr>
        <tr>
            <td>259</td>
            <td>showElement</td>
            <td>showElement</td>
        </tr>
        <tr>
            <td>260</td>
            <td>showElementAndWait</td>
            <td>showElementAndWait</td>
        </tr>
        <tr>
            <td>261</td>
            <td>store</td>
            <td>store(expression, variableName)<p><strong>Arguments</strong>:</p>*expression - the value to store<br>*variableName - the name of a variable in which the result is to be stored.&nbsp;</td>
        </tr>
        <tr>
            <td>262</td>
            <td>storeAlert</td>
            <td>storeAlert(variableName)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</td>
        </tr>
        <tr>
            <td>263</td>
            <td>storeAlertPresent</td>
            <td>storeAlertPresent(variableName)<br>Generated from isAlertPresent().<br>Returns: true if there is an alert&nbsp;</td>
        </tr>
        <tr>
            <td>264</td>
            <td>storeAllButtons</td>
            <td>storeAllButtons(variableName)<br>Generated from getAllButtons().<br>Returns: the IDs of all buttons on the page&nbsp;</td>
        </tr>
        <tr>
            <td>265</td>
            <td>storeAllFields</td>
            <td>storeAllFields(variableName)<br>Generated from getAllFields().<br>Returns: the IDs of all field on the page&nbsp;</td>
        </tr>
        <tr>
            <td>266</td>
            <td>storeAllLinks</td>
            <td>storeAllLinks(variableName)<br>Generated from getAllLinks().<br>Returns: the IDs of all links on the page&nbsp;</td>
        </tr>
        <tr>
            <td>267</td>
            <td>storeAllWindowIds</td>
            <td>storeAllWindowIds(variableName)<br>Generated from getAllWindowIds().<br>Returns: Array of identifiers of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>268</td>
            <td>storeAllWindowNames</td>
            <td>storeAllWindowNames(variableName)<br>Generated from getAllWindowNames().<br>Returns: Array of names of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>269</td>
            <td>storeAllWindowTitles</td>
            <td>storeAllWindowTitles(variableName)<br>Generated from getAllWindowTitles().<br>Returns: Array of titles of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>270</td>
            <td>storeAndWait</td>
            <td>storeAndWait(expression, variableName)<br>Generated from store(expression, variableName)<p><strong>Arguments</strong>:</p>*expression - the value to store<br>&nbsp;*variableName - the name of a variable in which the result is to be stored.&nbsp;</td>
        </tr>
        <tr>
            <td>271</td>
            <td>storeAttribute</td>
            <td>storeAttribute(attributeLocator, variableName)<br>Generated from getAttribute(attributeLocator)<p><strong>Arguments</strong>:</p>*attributeLocator - an element locator followed by an @ sign and then the name of the attribute, e.g. "foo@bar" . Returns: the value of the specifie</td>
        </tr>
        <tr>
            <td>272</td>
            <td>storeAttributeFromAllWindows</td>
            <td>storeAttributeFromAllWindows(attributeName, variableName)<br>&nbsp;Generated from getAttributeFromAllWindows(attributeName)<p><strong>Arguments</strong>:</p>*attributeName - name of an attribute on the windows .<br>Returns: the set of values of this attribute from all known windows.&nbsp;</td>
        </tr>
        <tr>
            <td>273</td>
            <td>storeBodyText</td>
            <td>storeBodyText(variableName)<br>Generated from getBodyText().<br>Returns: the entire text of the page&nbsp;</td>
        </tr>
        <tr>
            <td>274</td>
            <td>storeChecked</td>
            <td>storeChecked(locator, variableName)<br>Generated from isChecked(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to a checkbox or radio button .<br>Returns: true if the checkbox is checked, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>275</td>
            <td>storeConfirmation</td>
            <td>storeConfirmation(variableName)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>276</td>
            <td>storeConfirmationPresent</td>
            <td>storeConfirmationPresent(variableName)<br>Generated from isConfirmationPresent().<br>Returns: true if there is a pending confirmation&nbsp;</td>
        </tr>
        <tr>
            <td>277</td>
            <td>storeCookie</td>
            <td>storeCookie(variableName)<br>Generated from getCookie().<br>Returns: all cookies of the current page under test&nbsp;</td>
        </tr>
        <tr>
            <td>278</td>
            <td>storeCookieByName</td>
            <td>storeCookieByName(name, variableName)<br>Generated from getCookieByName(name)<p><strong>Arguments</strong>:</p>*name - the name of the cookie . Returns: the value of the cookie&nbsp;</td>
        </tr>
        <tr>
            <td>279</td>
            <td>storeCookiePresent</td>
            <td>storeCookiePresent(name, variableName)<br>Generated from isCookiePresent(name)<p><strong>Arguments</strong>:</p>*name - the name of the cookie . Returns: true if a cookie with the specified name is present, or false otherwise.&nbsp;</td>
        </tr>
        <tr>
            <td>280</td>
            <td>storeCssCount</td>
            <td>storeCssCount(css, variableName)<br>Generated from getCssCount(css)<p><strong>Arguments</strong>:</p>*css - the css selector to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specified css sel</td>
        </tr>
        <tr>
            <td>281</td>
            <td>storeCursorPosition</td>
            <td>storeCursorPosition(locator, variableName)<br>Generated from getCursorPosition(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an input element or textarea .<br>Returns: the numerical position of the cursor in the field&nbsp;</td>
        </tr>
        <tr>
            <td>282</td>
            <td>storeEditable</td>
            <td>storeEditable(locator, variableName)<br>Generated from isEditable(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator .<br>Returns: true if the input element is editable, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>283</td>
            <td>storeElementHeight</td>
            <td>storeElementHeight(locator, variableName)<br>Generated from getElementHeight(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: height of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>284</td>
            <td>storeElementIndex</td>
            <td>storeElementIndex(locator, variableName)<br>Generated from getElementIndex(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: of relative index of the element to its parent (starting from 0)&nbsp;</td>
        </tr>
        <tr>
            <td>285</td>
            <td>storeElementPositionLeft</td>
            <td>storeElementPositionLeft(locator, variableName)<br>Generated from getElementPositionLeft(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself .<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>286</td>
            <td>storeElementPositionTop</td>
            <td>storeElementPositionTop(locator, variableName)<br>Generated from getElementPositionTop(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself .<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>287</td>
            <td>storeElementPresent</td>
            <td>storeElementPresent(locator, variableName)<br>Generated from isElementPresent(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator . Returns: true if the element is present, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>288</td>
            <td>storeElementWidth</td>
            <td>storeElementWidth(locator, variableName)<br>Generated from getElementWidth(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element . Returns: width of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>289</td>
            <td>storeEval</td>
            <td>storeEval(script, variableName)<br>Generated from getEval(script)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run .<br>Returns: the results of evaluating the snippet&nbsp;</td>
        </tr>
        <tr>
            <td>290</td>
            <td>storeExpression</td>
            <td>storeExpression(expression, variableName)<br>Generated from getExpression(expression)<p><strong>Arguments</strong>:</p>*expression - the value to return .<br>Returns: the value passed in&nbsp;</td>
        </tr>
        <tr>
            <td>291</td>
            <td>storeHtmlSource</td>
            <td>storeHtmlSource(variableName)<br>Generated from getHtmlSource().<br>Returns: the entire HTML source&nbsp;</td>
        </tr>
        <tr>
            <td>292</td>
            <td>storeLocation</td>
            <td>storeLocation(variableName)<br>Generated from getLocation().<br>Returns: the absolute URL of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>293</td>
            <td>storeMouseSpeed</td>
            <td>storeMouseSpeed(variableName)<br>Generated from getMouseSpeed().<br>Returns: the number of pixels between "mousemove" events during dragAndDrop commands (default=10)&nbsp;</td>
        </tr>
        <tr>
            <td>294</td>
            <td>storeOrdered</td>
            <td>storeOrdered(locator1, locator2, variableName)<br>Generated from isOrdered(locator1, locator2)<p><strong>Arguments</strong>:</p>*locator1 - an element locator pointing to the first element<br>*locator2 - an element locator pointing to the second element . Returns: true</td>
        </tr>
        <tr>
            <td>295</td>
            <td>storePrompt</td>
            <td>storePrompt(variableName)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>296</td>
            <td>storePromptPresent</td>
            <td>storePromptPresent(variableName)<br>Generated from isPromptPresent().<br>Returns: true if there is a pending prompt&nbsp;</td>
        </tr>
        <tr>
            <td>297</td>
            <td>storeSelectOptions</td>
            <td>storeSelectOptions(selectLocator, variableName)<br>Generated from getSelectOptions(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all option labels in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>298</td>
            <td>storeSelectedId</td>
            <td>storeSelectedId(selectLocator, variableName)<br>Generated from getSelectedId(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option ID in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>299</td>
            <td>storeSelectedIds</td>
            <td>storeSelectedIds(selectLocator, variableName)<br>Generated from getSelectedIds(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option IDs in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>300</td>
            <td>storeSelectedIndex</td>
            <td>storeSelectedIndex(selectLocator, variableName)<br>Generated from getSelectedIndex(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option index in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>301</td>
            <td>storeSelectedIndexes</td>
            <td>storeSelectedIndexes(selectLocator, variableName)<br>Generated from getSelectedIndexes(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu . Returns: an array of all selected option indexes in the specified selec</td>
        </tr>
        <tr>
            <td>302</td>
            <td>storeSelectedLabel</td>
            <td>storeSelectedLabel(selectLocator, variableName)<br>Generated from getSelectedLabel(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu . Returns: the selected option label in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>303</td>
            <td>storeSelectedLabels</td>
            <td>storeSelectedLabels(selectLocator, variableName)<br>Generated from getSelectedLabels(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option labels in the specified select d</td>
        </tr>
        <tr>
            <td>304</td>
            <td>storeSelectedValue</td>
            <td>storeSelectedValue(selectLocator, variableName)<br>Generated from getSelectedValue(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option value in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>305</td>
            <td>storeSelectedValues</td>
            <td>storeSelectedValues(selectLocator, variableName)<br>Generated from getSelectedValues(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option values in the specified select d</td>
        </tr>
        <tr>
            <td>306</td>
            <td>storeSomethingSelected</td>
            <td>storeSomethingSelected(selectLocator, variableName)<br>Generated from isSomethingSelected(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: true if some option has been selected, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>307</td>
            <td>storeSpeed</td>
            <td>storeSpeed(variableName)<br>Generated from getSpeed().<br>Returns: the execution speed in milliseconds.&nbsp;</td>
        </tr>
        <tr>
            <td>308</td>
            <td>storeTable</td>
            <td>storeTable(tableCellAddress, variableName)<br>Generated from getTable(tableCellAddress)<p><strong>Arguments</strong>:</p>*tableCellAddress - a cell address, e.g. "foo.1.4" .<br>Returns: the text from the specified cell&nbsp;</td>
        </tr>
        <tr>
            <td>309</td>
            <td>storeText</td>
            <td>storeText(locator, variableName)<br>Generated from getText(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>310</td>
            <td>storeTextAndWait</td>
            <td>storeTextAndWait(locator, variableName)<br>Generated from getText(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>311</td>
            <td>storeTextPresent</td>
            <td>storeTextPresent(pattern, variableName)<br>This command is deprecated. Use the storeText command with an element locator instead. Generated from isTextPresent(pattern)<p><strong>Arguments</strong>:</p>*pattern - a pattern to match with the text of the page .<br>Returns: true i</td>
        </tr>
        <tr>
            <td>312</td>
            <td>storeTitle</td>
            <td>storeTitle(variableName)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>313</td>
            <td>storeTitleAndWait</td>
            <td>storeTitleAndWait(variableName)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>314</td>
            <td>storeValue</td>
            <td>storeValue(locator, variableName)<br>Generated from getValue(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: the element value, or "on/off" for checkbox/radio elements&nbsp;</td>
        </tr>
        <tr>
            <td>315</td>
            <td>storeVisible</td>
            <td>storeVisible(locator, variableName)<br>Generated from isVisible(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: true if the specified element is visible, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>316</td>
            <td>storeWhetherThisFrameMatchFrameExpression</td>
            <td>storeWhetherThisFrameMatchFrameExpression(currentFrameString, target, variableName)<br>Generated from getWhetherThisFrameMatchFrameExpression(currentFrameString, target)<p><strong>Arguments</strong>:</p>*currentFrameString - starting frame<br>*target - new frame (which might be&nbsp;</td>
        </tr>
        <tr>
            <td>317</td>
            <td>storeWhetherThisWindowMatchWindowExpression</td>
            <td>storeWhetherThisWindowMatchWindowExpression(currentWindowString, target, variableName)<br>Generated from getWhetherThisWindowMatchWindowExpression(currentWindowString, target)<p><strong>Arguments</strong>:</p>*currentWindowString - starting window<br>*target - new window (which&nbsp;</td>
        </tr>
        <tr>
            <td>318</td>
            <td>storeXpathCount</td>
            <td>storeXpathCount(xpath, variableName) Generated from getXpathCount(xpath)<p><strong>Arguments</strong>:</p>*xpath - the xpath expression to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the spe</td>
        </tr>
        <tr>
            <td>319</td>
            <td>submit</td>
            <td>submit(formLocator)<p><strong>Arguments</strong>:</p>*formLocator - an element locator for the form you want to submit&nbsp;</td>
        </tr>
        <tr>
            <td>320</td>
            <td>submitAndWait</td>
            <td>submitAndWait(formLocator)<br>Generated from submit(formLocator)<p><strong>Arguments</strong>:</p>*formLocator - an element locator for the form you want to submit&nbsp;</td>
        </tr>
        <tr>
            <td>321</td>
            <td>type</td>
            <td>type(locator, value)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*value - the value to type&nbsp;</td>
        </tr>
        <tr>
            <td>322</td>
            <td>typeAndWait</td>
            <td>typeAndWait(locator, value)<br>Generated from type(locator, value)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*value - the value to type&nbsp;</td>
        </tr>
        <tr>
            <td>323</td>
            <td>typeKeys</td>
            <td>typeKeys(locator, value)<br>This command is deprecated. Use the sendKeys command instead.<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*value - the value to type&nbsp;</td>
        </tr>
        <tr>
            <td>324</td>
            <td>typeKeysAndWait</td>
            <td>typeKeysAndWait(locator, value)<br>This command is deprecated. Use the sendKeysAndWait command instead. Generated from typeKeys(locator, value)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>*value - the value to type&nbsp;</td>
        </tr>
        <tr>
            <td>325</td>
            <td>uncheck</td>
            <td>uncheck(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator&nbsp;</td>
        </tr>
        <tr>
            <td>326</td>
            <td>uncheckAndWait</td>
            <td>uncheckAndWait(locator)<br>Generated from uncheck(locator)<br>Arguments: *locator - an element locator</td>
        </tr>
        <tr>
            <td>327</td>
            <td>useXpathLibrary</td>
            <td>useXpathLibrary(libraryName)<p><strong>Arguments</strong>:</p>*libraryName - name of the desired library Only the following three can be chosen:&nbsp; "ajaxslt" - Google's library, "javascript-xpath" - Cybozu Labs' faster library, "default" - The defau</td>
        </tr>
        <tr>
            <td>328</td>
            <td>useXpathLibraryAndWait</td>
            <td>useXpathLibraryAndWait(libraryName)<br>Generated from useXpathLibrary(libraryName)<p><strong>Arguments</strong>:</p>*libraryName - name of the desired library Only the following three can be chosen:&nbsp; "ajaxslt" - Google's library, "javascript-xpath" - Cybozu La</td>
        </tr>
        <tr>
            <td>329</td>
            <td>verifyAlert</td>
            <td>verifyAlert(pattern)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</td>
        </tr>
        <tr>
            <td>330</td>
            <td>verifyAlertNotPresent</td>
            <td>verifyAlertNotPresent()<br>Generated from isAlertPresent().<br>Returns: true if there is an alert&nbsp;</td>
        </tr>
        <tr>
            <td>331</td>
            <td>verifyAlertPresent</td>
            <td>verifyAlertPresent() Generated from isAlertPresent(). Returns: true if there is an alert&nbsp;</td>
        </tr>
        <tr>
            <td>332</td>
            <td>verifyAllButtons</td>
            <td>verifyAllButtons(pattern) Generated from getAllButtons(). Returns: the IDs of all buttons on the page&nbsp;</td>
        </tr>
        <tr>
            <td>333</td>
            <td>verifyAllFields</td>
            <td>verifyAllFields(pattern) Generated from getAllFields(). Returns: the IDs of all field on the page&nbsp;</td>
        </tr>
        <tr>
            <td>334</td>
            <td>verifyAllLinks</td>
            <td>verifyAllLinks(pattern)<br>&nbsp;Generated from getAllLinks().<br>Returns: the IDs of all links on the page&nbsp;</td>
        </tr>
        <tr>
            <td>335</td>
            <td>verifyAllWindowIds</td>
            <td>verifyAllWindowIds(pattern)<br>Generated from getAllWindowIds().<br>Returns: Array of identifiers of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>336</td>
            <td>verifyAllWindowNames</td>
            <td>verifyAllWindowNames(pattern)<br>Generated from getAllWindowNames().<br>Returns: Array of names of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>337</td>
            <td>verifyAllWindowTitles</td>
            <td>verifyAllWindowTitles(pattern)<br>Generated from getAllWindowTitles().<br>Returns: Array of titles of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>338</td>
            <td>verifyAttribute</td>
            <td>verifyAttribute(attributeLocator, pattern)<br>Generated from getAttribute(attributeLocator)<p><strong>Arguments</strong>:</p>*attributeLocator - an element locator followed by an @ sign and then the name of the attribute, e.g. "foo@bar" .<br>Returns: the value of the specified a</td>
        </tr>
        <tr>
            <td>339</td>
            <td>verifyAttributeFromAllWindows</td>
            <td>verifyAttributeFromAllWindows(attributeName, pattern)<br>Generated from getAttributeFromAllWindows(attributeName)<p><strong>Arguments</strong>:</p>*attributeName - name of an attribute on the windows.<br>Returns: the set of values of this attribute from all known windows.&nbsp;</td>
        </tr>
        <tr>
            <td>340</td>
            <td>verifyBodyText</td>
            <td>verifyBodyText(pattern)<br>Generated from getBodyText().<br>Returns: the entire text of the page&nbsp;</td>
        </tr>
        <tr>
            <td>341</td>
            <td>verifyChecked</td>
            <td>verifyChecked(locator) Generated from isChecked(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to a checkbox or radio button .<br>Returns: true if the checkbox is checked, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>342</td>
            <td>verifyConfirmation</td>
            <td>verifyConfirmation(pattern)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>343</td>
            <td>verifyConfirmationNotPresent</td>
            <td>verifyConfirmationNotPresent()<br>Generated from isConfirmationPresent().<br>Returns: true if there is a pending confirmation&nbsp;</td>
        </tr>
        <tr>
            <td>344</td>
            <td>verifyConfirmationPresent</td>
            <td>verifyConfirmationPresent()<br>Generated from isConfirmationPresent().<br>Returns: true if there is a pending confirmation&nbsp;</td>
        </tr>
        <tr>
            <td>345</td>
            <td>verifyCookie</td>
            <td>verifyCookie(pattern)<br>Generated from getCookie().<br>Returns: all cookies of the current page under test&nbsp;</td>
        </tr>
        <tr>
            <td>346</td>
            <td>verifyCookieByName</td>
            <td>verifyCookieByName(name, pattern)<br>Generated from getCookieByName(name)<p><strong>Arguments</strong>:</p>*name - the name of the cookie . Returns: the value of the cookie&nbsp;</td>
        </tr>
        <tr>
            <td>347</td>
            <td>verifyCookieNotPresent</td>
            <td>verifyCookieNotPresent(name)<br>Generated from isCookiePresent(name)<br>&nbsp;Arguments:<br>*name - the name of the cookie .<br>Returns: true if a cookie with the specified name is present, or false otherwise.&nbsp;</td>
        </tr>
        <tr>
            <td>348</td>
            <td>verifyCookiePresent</td>
            <td>verifyCookiePresent(name)<br>Generated from isCookiePresent(name)<p><strong>Arguments</strong>:</p>*name - the name of the cookie .<br>Returns: true if a cookie with the specified name is present, or false otherwise.&nbsp;</td>
        </tr>
        <tr>
            <td>349</td>
            <td>verifyCssCount</td>
            <td>verifyCssCount(css, pattern)<br>Generated from getCssCount(css)<p><strong>Arguments</strong>:</p>*css - the css selector to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specified css select</td>
        </tr>
        <tr>
            <td>350</td>
            <td>verifyCursorPosition</td>
            <td>verifyCursorPosition(locator, pattern)<br>Generated from getCursorPosition(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an input element or textarea .<br>Returns: the numerical position of the cursor in the field&nbsp;</td>
        </tr>
        <tr>
            <td>351</td>
            <td>verifyEditable</td>
            <td>verifyEditable(locator)<br>Generated from isEditable(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: true if the input element is editable, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>352</td>
            <td>verifyElementHeight</td>
            <td>verifyElementHeight(locator, pattern)<br>Generated from getElementHeight(locator) Arguments:<br>*locator - an element locator pointing to an element .<br>Returns: height of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>353</td>
            <td>verifyElementIndex</td>
            <td>verifyElementIndex(locator, pattern)<br>Generated from getElementIndex(locator)<br>&nbsp;Arguments:<br>*locator - an element locator pointing to an element .<br>Returns: of relative index of the element to its parent (starting from 0)&nbsp;</td>
        </tr>
        <tr>
            <td>354</td>
            <td>verifyElementNotPresent</td>
            <td>verifyElementNotPresent(locator)<br>Generated from isElementPresent(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: true if the element is present, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>355</td>
            <td>verifyElementPositionLeft</td>
            <td>verifyElementPositionLeft(locator, pattern)<br>Generated from getElementPositionLeft(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself .<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>356</td>
            <td>verifyElementPositionTop</td>
            <td>verifyElementPositionTop(locator, pattern)<br>Generated from getElementPositionTop(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself .<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>357</td>
            <td>verifyElementPresent</td>
            <td>verifyElementPresent(locator)<br>Generated from isElementPresent(locator)<br>Arguments: *locator - an element locator<br>Returns: true if the element is present, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>358</td>
            <td>verifyElementWidth</td>
            <td>verifyElementWidth(locator, pattern)<br>Generated from getElementWidth(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: width of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>359</td>
            <td>verifyEval</td>
            <td>verifyEval(script, pattern)<br>Generated from getEval(script)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run .<br>Returns: the results of evaluating the snippet&nbsp;</td>
        </tr>
        <tr>
            <td>360</td>
            <td>verifyExpression</td>
            <td>verifyExpression(expression, pattern)<br>Generated from getExpression(expression)<p><strong>Arguments</strong>:</p>*expression - the value to return .<br>Returns: the value passed in&nbsp;</td>
        </tr>
        <tr>
            <td>361</td>
            <td>verifyHtmlSource</td>
            <td>verifyHtmlSource(pattern)<br>Generated from getHtmlSource().<br>Returns: the entire HTML source&nbsp;</td>
        </tr>
        <tr>
            <td>362</td>
            <td>verifyLocation</td>
            <td>verifyLocation(pattern)<br>Generated from getLocation().<br>Returns: the absolute URL of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>363</td>
            <td>verifyMouseSpeed</td>
            <td>verifyMouseSpeed(pattern)<br>Generated from getMouseSpeed().<br>Returns: the number of pixels between "mousemove" events during dragAndDrop commands (default=10)&nbsp;</td>
        </tr>
        <tr>
            <td>364</td>
            <td>verifyNotAlert</td>
            <td>verifyNotAlert(pattern)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</td>
        </tr>
        <tr>
            <td>365</td>
            <td>verifyNotAllButtons</td>
            <td>verifyNotAllButtons(pattern)<br>Generated from getAllButtons().<br>Returns: the IDs of all buttons on the page&nbsp;</td>
        </tr>
        <tr>
            <td>366</td>
            <td>verifyNotAllFields</td>
            <td>verifyNotAllFields(pattern)<br>Generated from getAllFields().<br>Returns: the IDs of all field on the page&nbsp;</td>
        </tr>
        <tr>
            <td>367</td>
            <td>verifyNotAllLinks</td>
            <td>verifyNotAllLinks(pattern)<br>Generated from getAllLinks().<br>Returns: the IDs of all links on the page&nbsp;</td>
        </tr>
        <tr>
            <td>368</td>
            <td>verifyNotAllWindowIds</td>
            <td>verifyNotAllWindowIds(pattern)<br>Generated from getAllWindowIds().<br>Returns: Array of identifiers of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>369</td>
            <td>verifyNotAllWindowNames</td>
            <td>verifyNotAllWindowNames(pattern)<br>Generated from getAllWindowNames().<br>Returns: Array of names of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>370</td>
            <td>verifyNotAllWindowTitles</td>
            <td>verifyNotAllWindowTitles(pattern)<br>Generated from getAllWindowTitles().<br>Returns: Array of titles of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>371</td>
            <td>verifyNotAttribute</td>
            <td>verifyNotAttribute(attributeLocator, pattern)<br>Generated from getAttribute(attributeLocator)<p><strong>Arguments</strong>:</p>*attributeLocator - an element locator followed by an @ sign and then the name of the attribute, e.g. "foo@bar" .<br>Returns: the value of the specifie</td>
        </tr>
        <tr>
            <td>372</td>
            <td>verifyNotAttributeFromAllWindows</td>
            <td>verifyNotAttributeFromAllWindows(attributeName, pattern)<br>Generated from getAttributeFromAllWindows(attributeName)<p><strong>Arguments</strong>:</p>*attributeName - name of an attribute on the windows .<br>Returns: the set of values of this attribute from all known windows.&nbsp;</td>
        </tr>
        <tr>
            <td>373</td>
            <td>verifyNotBodyText</td>
            <td>verifyNotBodyText(pattern)<br>Generated from getBodyText().<br>Returns: the entire text of the page&nbsp;</td>
        </tr>
        <tr>
            <td>374</td>
            <td>verifyNotChecked</td>
            <td>verifyNotChecked(locator)<br>Generated from isChecked(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to a checkbox or radio button .<br>Returns: true if the checkbox is checked, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>375</td>
            <td>verifyNotConfirmation</td>
            <td>verifyNotConfirmation(pattern)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>376</td>
            <td>verifyNotCookie</td>
            <td>verifyNotCookie(pattern)<br>Generated from getCookie().<br>Returns: all cookies of the current page under test&nbsp;</td>
        </tr>
        <tr>
            <td>377</td>
            <td>verifyNotCookieByName</td>
            <td>verifyNotCookieByName(name, pattern)<br>Generated from getCookieByName(name)<p><strong>Arguments</strong>:</p>*name - the name of the cookie .<br>Returns: the value of the cookie&nbsp;</td>
        </tr>
        <tr>
            <td>378</td>
            <td>verifyNotCssCount</td>
            <td>verifyNotCssCount(css, pattern)<br>Generated from getCssCount(css)<p><strong>Arguments</strong>:</p>*css - the css selector to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specified css sel</td>
        </tr>
        <tr>
            <td>379</td>
            <td>verifyNotCursorPosition</td>
            <td>verifyNotCursorPosition(locator, pattern)<br>Generated from getCursorPosition(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an input element or textarea .<br>Returns: the numerical position of the cursor in the field&nbsp;</td>
        </tr>
        <tr>
            <td>380</td>
            <td>verifyNotEditable</td>
            <td>verifyNotEditable(locator) Generated from isEditable(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: true if the input element is editable, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>381</td>
            <td>verifyNotElementHeight</td>
            <td>verifyNotElementHeight(locator, pattern)<br>Generated from getElementHeight(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: height of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>382</td>
            <td>verifyNotElementIndex</td>
            <td>verifyNotElementIndex(locator, pattern)<br>Generated from getElementIndex(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: of relative index of the element to its parent (starting from 0)&nbsp;</td>
        </tr>
        <tr>
            <td>383</td>
            <td>verifyNotElementPositionLeft</td>
            <td>verifyNotElementPositionLeft(locator, pattern)<br>Generated from getElementPositionLeft(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself .<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>384</td>
            <td>verifyNotElementPositionTop</td>
            <td>verifyNotElementPositionTop(locator, pattern)<br>Generated from getElementPositionTop(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself .<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>385</td>
            <td>verifyNotElementWidth</td>
            <td>verifyNotElementWidth(locator, pattern)<br>Generated from getElementWidth(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: width of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>386</td>
            <td>verifyNotEval</td>
            <td>verifyNotEval(script, pattern)<br>Generated from getEval(script)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run .<br>Returns: the results of evaluating the snippet&nbsp;</td>
        </tr>
        <tr>
            <td>387</td>
            <td>verifyNotExpression</td>
            <td>verifyNotExpression(expression, pattern)<br>Generated from getExpression(expression)<p><strong>Arguments</strong>:</p>*expression - the value to return .<br>Returns: the value passed in&nbsp;</td>
        </tr>
        <tr>
            <td>388</td>
            <td>verifyNotHtmlSource</td>
            <td>verifyNotHtmlSource(pattern)<br>Generated from getHtmlSource().<br>Returns: the entire HTML source&nbsp;</td>
        </tr>
        <tr>
            <td>389</td>
            <td>verifyNotLocation</td>
            <td>verifyNotLocation(pattern)<br>Generated from getLocation().<br>Returns: the absolute URL of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>390</td>
            <td>verifyNotMouseSpeed</td>
            <td>verifyNotMouseSpeed(pattern)<br>Generated from getMouseSpeed().<br>Returns: the number of pixels between "mousemove" events during dragAndDrop commands (default=10)&nbsp;</td>
        </tr>
        <tr>
            <td>391</td>
            <td>verifyNotOrdered</td>
            <td>verifyNotOrdered(locator1, locator2)<br>Generated from isOrdered(locator1, locator2)<p><strong>Arguments</strong>:</p>*locator1 - an element locator pointing to the first element<br>*locator2 - an element locator pointing to the second element . Returns: true if elemen</td>
        </tr>
        <tr>
            <td>392</td>
            <td>verifyNotPrompt</td>
            <td>verifyNotPrompt(pattern)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>393</td>
            <td>verifyNotSelectOptions</td>
            <td>verifyNotSelectOptions(selectLocator, pattern)<br>Generated from getSelectOptions(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all option labels in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>394</td>
            <td>verifyNotSelectedId</td>
            <td>verifyNotSelectedId(selectLocator, pattern)<br>Generated from getSelectedId(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option ID in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>395</td>
            <td>verifyNotSelectedIds</td>
            <td>verifyNotSelectedIds(selectLocator, pattern)<br>Generated from getSelectedIds(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option IDs in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>396</td>
            <td>verifyNotSelectedIndex</td>
            <td>verifyNotSelectedIndex(selectLocator, pattern)<br>Generated from getSelectedIndex(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option index in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>397</td>
            <td>verifyNotSelectedIndexes</td>
            <td>verifyNotSelectedIndexes(selectLocator, pattern)<br>Generated from getSelectedIndexes(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option indexes in the specified select</td>
        </tr>
        <tr>
            <td>398</td>
            <td>verifyNotSelectedLabel</td>
            <td>verifyNotSelectedLabel(selectLocator, pattern)<br>Generated from getSelectedLabel(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option label in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>399</td>
            <td>verifyNotSelectedLabels</td>
            <td>verifyNotSelectedLabels(selectLocator, pattern)<br>Generated from getSelectedLabels(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option labels in the specified select dr</td>
        </tr>
        <tr>
            <td>400</td>
            <td>verifyNotSelectedValue</td>
            <td>verifyNotSelectedValue(selectLocator, pattern)<br>Generated from getSelectedValue(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option value in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>401</td>
            <td>verifyNotSelectedValues</td>
            <td>verifyNotSelectedValues(selectLocator, pattern)<br>Generated from getSelectedValues(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option values in the specified select dr</td>
        </tr>
        <tr>
            <td>402</td>
            <td>verifyNotSomethingSelected</td>
            <td>verifyNotSomethingSelected(selectLocator)<br>Generated from isSomethingSelected(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: true if some option has been selected, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>403</td>
            <td>verifyNotSpeed</td>
            <td>verifyNotSpeed(pattern)<br>Generated from getSpeed().<br>Returns: the execution speed in milliseconds.&nbsp;</td>
        </tr>
        <tr>
            <td>404</td>
            <td>verifyNotTable</td>
            <td>verifyNotTable(tableCellAddress, pattern)<br>Generated from getTable(tableCellAddress)<p><strong>Arguments</strong>:</p>*tableCellAddress - a cell address, e.g. "foo.1.4" . Returns: the text from the specified cell&nbsp;</td>
        </tr>
        <tr>
            <td>405</td>
            <td>verifyNotText</td>
            <td>verifyNotText(locator, pattern)<br>Generated from getText(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator . Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>406</td>
            <td>verifyNotTitle</td>
            <td>verifyNotTitle(pattern)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>407</td>
            <td>verifyNotValue</td>
            <td>verifyNotValue(locator, pattern)<br>Generated from getValue(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator . Returns: the element value, or "on/off" for checkbox/radio elements&nbsp;</td>
        </tr>
        <tr>
            <td>408</td>
            <td>verifyNotVisible</td>
            <td>verifyNotVisible(locator)<br>Generated from isVisible(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator . Returns: true if the specified element is visible, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>409</td>
            <td>verifyNotWhetherThisFrameMatchFrameExpression</td>
            <td>verifyNotWhetherThisFrameMatchFrameExpression(currentFrameString, target, pattern)<br>Generated from getWhetherThisFrameMatchFrameExpression(currentFrameString, target)<p><strong>Arguments</strong>:</p>*currentFrameString - starting frame<br>*target - new frame (which might be r</td>
        </tr>
        <tr>
            <td>410</td>
            <td>verifyNotWhetherThisWindowMatchWindowExpression</td>
            <td>verifyNotWhetherThisWindowMatchWindowExpression(currentWindowString, target, pattern)<br>Generated from getWhetherThisWindowMatchWindowExpression(currentWindowString, target)<p><strong>Arguments</strong>:</p>*currentWindowString - starting window<br>*target - new window (which m</td>
        </tr>
        <tr>
            <td>411</td>
            <td>verifyNotXpathCount</td>
            <td>verifyNotXpathCount(xpath, pattern)<br>Generated from getXpathCount(xpath)<p><strong>Arguments</strong>:</p>*xpath - the xpath expression to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the spe</td>
        </tr>
        <tr>
            <td>412</td>
            <td>verifyOrdered</td>
            <td>verifyOrdered(locator1, locator2)<br>Generated from isOrdered(locator1, locator2)<p><strong>Arguments</strong>:</p>*locator1 - an element locator pointing to the first element<br>*locator2 - an element locator pointing to the second element . Returns: true if element1&nbsp;</td>
        </tr>
        <tr>
            <td>413</td>
            <td>verifyPrompt</td>
            <td>verifyPrompt(pattern)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>414</td>
            <td>verifyPromptNotPresent</td>
            <td>verifyPromptNotPresent()<br>Generated from isPromptPresent().<br>Returns: true if there is a pending prompt&nbsp;</td>
        </tr>
        <tr>
            <td>415</td>
            <td>verifyPromptPresent</td>
            <td>verifyPromptPresent()<br>Generated from isPromptPresent().<br>Returns: true if there is a pending prompt&nbsp;</td>
        </tr>
        <tr>
            <td>416</td>
            <td>verifySelectOptions</td>
            <td>verifySelectOptions(selectLocator, pattern)<br>Generated from getSelectOptions(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all option labels in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>417</td>
            <td>verifySelectedId</td>
            <td>verifySelectedId(selectLocator, pattern)<br>Generated from getSelectedId(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option ID in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>418</td>
            <td>verifySelectedIds</td>
            <td>verifySelectedIds(selectLocator, pattern)<br>Generated from getSelectedIds(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option IDs in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>419</td>
            <td>verifySelectedIndex</td>
            <td>verifySelectedIndex(selectLocator, pattern)<br>Generated from getSelectedIndex(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option index in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>420</td>
            <td>verifySelectedIndexes</td>
            <td>verifySelectedIndexes(selectLocator, pattern)<br>Generated from getSelectedIndexes(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option indexes in the specified select dr</td>
        </tr>
        <tr>
            <td>421</td>
            <td>verifySelectedLabel</td>
            <td>verifySelectedLabel(selectLocator, pattern)<br>Generated from getSelectedLabel(selectLocator)<br>Arguments: *selectLocator - an element locator identifying a drop-down menu . Returns: the selected option label in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>422</td>
            <td>verifySelectedLabels</td>
            <td>verifySelectedLabels(selectLocator, pattern)<br>Generated from getSelectedLabels(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option labels in the specified select drop-</td>
        </tr>
        <tr>
            <td>423</td>
            <td>verifySelectedValue</td>
            <td>verifySelectedValue(selectLocator, pattern)<br>Generated from getSelectedValue(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option value in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>424</td>
            <td>verifySelectedValues</td>
            <td>verifySelectedValues(selectLocator, pattern)<br>Generated from getSelectedValues(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option values in the specified select drop-</td>
        </tr>
        <tr>
            <td>425</td>
            <td>verifySomethingSelected</td>
            <td>verifySomethingSelected(selectLocator)<br>Generated from isSomethingSelected(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: true if some option has been selected, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>426</td>
            <td>verifySpeed</td>
            <td>verifySpeed(pattern)<br>Generated from getSpeed().<br>Returns: the execution speed in milliseconds.&nbsp;</td>
        </tr>
        <tr>
            <td>427</td>
            <td>verifyTable</td>
            <td>verifyTable(tableCellAddress, pattern)<br>Generated from getTable(tableCellAddress)<p><strong>Arguments</strong>:</p>*tableCellAddress - a cell address, e.g. "foo.1.4" .<br>Returns: the text from the specified cell&nbsp;</td>
        </tr>
        <tr>
            <td>428</td>
            <td>verifyText</td>
            <td>verifyText(locator, pattern) Generated from getText(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>429</td>
            <td>verifyTextAndWait</td>
            <td>verifyTextAndWait(locator, pattern)<br>Generated from getText(locator) Arguments:<br>*locator - an element locator<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>430</td>
            <td>verifyTextNotPresent</td>
            <td>verifyTextNotPresent(pattern)<br>This command is deprecated. Use the verifyNotText command with an element locator instead. Generated from isTextPresent(pattern)<p><strong>Arguments</strong>:</p>*pattern - a pattern to match with the text of the page .<br>Returns: true if the&nbsp;</td>
        </tr>
        <tr>
            <td>431</td>
            <td>verifyTextPresent</td>
            <td>verifyTextPresent(pattern)<br>This command is deprecated. Use the verifyText command with an element locator instead. Generated from isTextPresent(pattern)<p><strong>Arguments</strong>:</p>*pattern - a pattern to match with the text of the page .<br>Returns: true if the patter</td>
        </tr>
        <tr>
            <td>432</td>
            <td>verifyTitle</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>433</td>
            <td>verifyTitleAndWait</td>
            <td>verifyTitleAndWait(pattern)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>434</td>
            <td>verifyValue</td>
            <td>verifyValue(locator, pattern)<br>Generated from getValue(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: the element value, or "on/off" for checkbox/radio elements&nbsp;</td>
        </tr>
        <tr>
            <td>435</td>
            <td>verifyVisible</td>
            <td>verifyVisible(locator)<br>Generated from isVisible(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator<br>Returns: true if the specified element is visible, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>436</td>
            <td>verifyWhetherThisFrameMatchFrameExpression</td>
            <td>verifyWhetherThisFrameMatchFrameExpression(currentFrameString, target, pattern)<br>Generated from getWhetherThisFrameMatchFrameExpression(currentFrameString, target)<p><strong>Arguments</strong>:</p>*currentFrameString - starting frame<br>*target - new frame (which might be rela</td>
        </tr>
        <tr>
            <td>437</td>
            <td>verifyWhetherThisWindowMatchWindowExpression</td>
            <td>verifyWhetherThisWindowMatchWindowExpression(currentWindowString, target, pattern)<br>Generated from getWhetherThisWindowMatchWindowExpression(currentWindowString, target)<p><strong>Arguments</strong>:</p>*currentWindowString - starting window<br>*target - new window (which migh</td>
        </tr>
        <tr>
            <td>438</td>
            <td>verifyXpathCount</td>
            <td>verifyXpathCount(xpath, pattern)<br>Generated from getXpathCount(xpath)<p><strong>Arguments</strong>:</p>*xpath - the xpath expression to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specif</td>
        </tr>
        <tr>
            <td>439</td>
            <td>waitForAlert</td>
            <td>waitForAlert(pattern)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</td>
        </tr>
        <tr>
            <td>440</td>
            <td>waitForAlertNotPresent</td>
            <td>waitForAlertNotPresent()<br>Generated from isAlertPresent().<br>Returns: true if there is an alert&nbsp;</td>
        </tr>
        <tr>
            <td>441</td>
            <td>waitForAlertPresent</td>
            <td>waitForAlertPresent()<br>Generated from isAlertPresent().<br>Returns: true if there is an alert&nbsp;</td>
        </tr>
        <tr>
            <td>442</td>
            <td>waitForAllButtons</td>
            <td>waitForAllButtons(pattern) Generated from getAllButtons(). Returns: the IDs of all buttons on the page&nbsp;</td>
        </tr>
        <tr>
            <td>443</td>
            <td>waitForAllFields</td>
            <td>waitForAllFields(pattern) Generated from getAllFields(). Returns: the IDs of all field on the page&nbsp;</td>
        </tr>
        <tr>
            <td>444</td>
            <td>waitForAllLinks</td>
            <td>waitForAllLinks(pattern) Generated from getAllLinks(). Returns: the IDs of all links on the page&nbsp;</td>
        </tr>
        <tr>
            <td>445</td>
            <td>waitForAllWindowIds</td>
            <td>waitForAllWindowIds(pattern) Generated from getAllWindowIds(). Returns: Array of identifiers of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>446</td>
            <td>waitForAllWindowNames</td>
            <td>waitForAllWindowNames(pattern) Generated from getAllWindowNames(). Returns: Array of names of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>447</td>
            <td>waitForAllWindowTitles</td>
            <td>waitForAllWindowTitles(pattern)<br>Generated from getAllWindowTitles().<br>Returns: Array of titles of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>448</td>
            <td>waitForAttribute</td>
            <td>waitForAttribute(attributeLocator, pattern)<br>Generated from getAttribute(attributeLocator)<p><strong>Arguments</strong>:</p>*attributeLocator - an element locator followed by an @ sign and then the name of the attribute, e.g. "foo@bar" .<br>Returns: the value of the specified&nbsp;</td>
        </tr>
        <tr>
            <td>449</td>
            <td>waitForAttributeFromAllWindows</td>
            <td>waitForAttributeFromAllWindows(attributeName, pattern)<br>Generated from getAttributeFromAllWindows(attributeName)<p><strong>Arguments</strong>:</p>*attributeName - name of an attribute on the windows .<br>Returns: the set of values of this attribute from all known windows.&nbsp;</td>
        </tr>
        <tr>
            <td>450</td>
            <td>waitForBodyText</td>
            <td>waitForBodyText(pattern) Generated from getBodyText(). Returns: the entire text of the page&nbsp;</td>
        </tr>
        <tr>
            <td>451</td>
            <td>waitForChecked</td>
            <td>waitForChecked(locator)<br>Generated from isChecked(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to a checkbox or radio button .<br>Returns: true if the checkbox is checked, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>452</td>
            <td>waitForCondition</td>
            <td>waitForCondition(script, timeout)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run<br>*timeout - a timeout in milliseconds, after which this command will return with an error&nbsp;</td>
        </tr>
        <tr>
            <td>453</td>
            <td>waitForConfirmation</td>
            <td>waitForConfirmation(pattern)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>454</td>
            <td>waitForConfirmationNotPresent</td>
            <td>waitForConfirmationNotPresent()<br>Generated from isConfirmationPresent().<br>Returns: true if there is a pending confirmation&nbsp;</td>
        </tr>
        <tr>
            <td>455</td>
            <td>waitForConfirmationPresent</td>
            <td>waitForConfirmationPresent() Generated from isConfirmationPresent(). Returns: true if there is a pending confirmation&nbsp;</td>
        </tr>
        <tr>
            <td>456</td>
            <td>waitForCookie</td>
            <td>waitForCookie(pattern) Generated from getCookie(). Returns: all cookies of the current page under test&nbsp;</td>
        </tr>
        <tr>
            <td>457</td>
            <td>waitForCookieByName</td>
            <td>waitForCookieByName(name, pattern) Generated from getCookieByName(name) Arguments: *name - the name of the cookie . Returns: the value of the cookie&nbsp;</td>
        </tr>
        <tr>
            <td>458</td>
            <td>waitForCookieNotPresent</td>
            <td>waitForCookieNotPresent(name) Generated from isCookiePresent(name) Arguments: *name - the name of the cookie . Returns: true if a cookie with the specified name is present, or false otherwise.&nbsp;</td>
        </tr>
        <tr>
            <td>459</td>
            <td>waitForCookiePresent</td>
            <td>waitForCookiePresent(name) Generated from isCookiePresent(name) Arguments: *name - the name of the cookie . Returns: true if a cookie with the specified name is present, or false otherwise.&nbsp;</td>
        </tr>
        <tr>
            <td>460</td>
            <td>waitForCssCount</td>
            <td>waitForCssCount(css, pattern) Generated from getCssCount(css) Arguments: *css - the css selector to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you. . Returns: the number of nodes that match the specified css selecto</td>
        </tr>
        <tr>
            <td>461</td>
            <td>waitForCursorPosition</td>
            <td>waitForCursorPosition(locator, pattern) Generated from getCursorPosition(locator) Arguments: *locator - an element locator pointing to an input element or textarea . Returns: the numerical position of the cursor in the field&nbsp;</td>
        </tr>
        <tr>
            <td>462</td>
            <td>waitForEditable</td>
            <td>waitForEditable(locator) Generated from isEditable(locator) Arguments: *locator - an element locator . Returns: true if the input element is editable, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>463</td>
            <td>waitForElementHeight</td>
            <td>waitForElementHeight(locator, pattern) Generated from getElementHeight(locator) Arguments: *locator - an element locator pointing to an element . Returns: height of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>464</td>
            <td>waitForElementIndex</td>
            <td>waitForElementIndex(locator, pattern) Generated from getElementIndex(locator) Arguments: *locator - an element locator pointing to an element . Returns: of relative index of the element to its parent (starting from 0)&nbsp;</td>
        </tr>
        <tr>
            <td>465</td>
            <td>waitForElementNotPresent</td>
            <td>waitForElementNotPresent(locator) Generated from isElementPresent(locator) Arguments: *locator - an element locator . Returns: true if the element is present, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>466</td>
            <td>waitForElementPositionLeft</td>
            <td>waitForElementPositionLeft(locator, pattern) Generated from getElementPositionLeft(locator) Arguments: *locator - an element locator pointing to an element OR an element itself . Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>467</td>
            <td>waitForElementPositionTop</td>
            <td>waitForElementPositionTop(locator, pattern) Generated from getElementPositionTop(locator) Arguments: *locator - an element locator pointing to an element OR an element itself . Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>468</td>
            <td>waitForElementPresent</td>
            <td>waitForElementPresent(locator) Generated from isElementPresent(locator) Arguments: *locator - an element locator . Returns: true if the element is present, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>469</td>
            <td>waitForElementWidth</td>
            <td>waitForElementWidth(locator, pattern) Generated from getElementWidth(locator) Arguments: *locator - an element locator pointing to an element . Returns: width of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>470</td>
            <td>waitForEval</td>
            <td>waitForEval(script, pattern)<br>Generated from getEval(script)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run .<br>Returns: the results of evaluating the snippet&nbsp;</td>
        </tr>
        <tr>
            <td>471</td>
            <td>waitForExpression</td>
            <td>waitForExpression(expression, pattern) Generated from<br>getExpression(expression) Arguments: *expression - the value to return . Returns: the value passed in&nbsp;</td>
        </tr>
        <tr>
            <td>472</td>
            <td>waitForFrameToLoad</td>
            <td>waitForFrameToLoad(frameAddress, timeout)<p><strong>Arguments</strong>:</p>*frameAddress - FrameAddress from the server side<br>*timeout - a timeout in milliseconds, after which this command will return with an error&nbsp;</td>
        </tr>
        <tr>
            <td>473</td>
            <td>waitForHtmlSource</td>
            <td>waitForHtmlSource(pattern)<br>Generated from getHtmlSource().<br>Returns: the entire HTML source&nbsp;</td>
        </tr>
        <tr>
            <td>474</td>
            <td>waitForLocation</td>
            <td>waitForLocation(pattern)<br>Generated from getLocation().<br>Returns: the absolute URL of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>475</td>
            <td>waitForMouseSpeed</td>
            <td>waitForMouseSpeed(pattern)<br>Generated from getMouseSpeed().<br>Returns: the number of pixels between "mousemove" events during dragAndDrop commands (default=10)&nbsp;</td>
        </tr>
        <tr>
            <td>476</td>
            <td>waitForNotAlert</td>
            <td>waitForNotAlert(pattern)<br>Generated from getAlert().<br>Returns: The message of the most recent JavaScript alert&nbsp;</td>
        </tr>
        <tr>
            <td>477</td>
            <td>waitForNotAllButtons</td>
            <td>waitForNotAllButtons(pattern)<br>Generated from getAllButtons().<br>Returns: the IDs of all buttons on the page&nbsp;</td>
        </tr>
        <tr>
            <td>478</td>
            <td>waitForNotAllFields</td>
            <td>waitForNotAllFields(pattern)<br>Generated from getAllFields().<br>Returns: the IDs of all field on the page&nbsp;</td>
        </tr>
        <tr>
            <td>479</td>
            <td>waitForNotAllLinks</td>
            <td>waitForNotAllLinks(pattern)<br>Generated from getAllLinks().<br>Returns: the IDs of all links on the page&nbsp;</td>
        </tr>
        <tr>
            <td>480</td>
            <td>waitForNotAllWindowIds</td>
            <td>waitForNotAllWindowIds(pattern)<br>Generated from getAllWindowIds().<br>Returns: Array of identifiers of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>481</td>
            <td>waitForNotAllWindowNames</td>
            <td>waitForNotAllWindowNames(pattern)<br>Generated from getAllWindowNames().<br>Returns: Array of names of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>482</td>
            <td>waitForNotAllWindowTitles</td>
            <td>waitForNotAllWindowTitles(pattern)<br>Generated from getAllWindowTitles().<br>Returns: Array of titles of all windows that the browser knows about.&nbsp;</td>
        </tr>
        <tr>
            <td>483</td>
            <td>waitForNotAttribute</td>
            <td>waitForNotAttribute(attributeLocator, pattern)<br>Generated from getAttribute(attributeLocator)<p><strong>Arguments</strong>:</p>*attributeLocator - an element locator followed by an @ sign and then the name of the attribute, e.g. "foo@bar" .<br>Returns: the value of the specifi</td>
        </tr>
        <tr>
            <td>484</td>
            <td>waitForNotAttributeFromAllWindows</td>
            <td>waitForNotAttributeFromAllWindows(attributeName, pattern)<br>Generated from getAttributeFromAllWindows(attributeName)<p><strong>Arguments</strong>:</p>*attributeName - name of an attribute on the windows .<br>Returns: the set of values of this attribute from all known windows.&nbsp;</td>
        </tr>
        <tr>
            <td>485</td>
            <td>waitForNotBodyText</td>
            <td>waitForNotBodyText(pattern)<br>Generated from getBodyText().<br>Returns: the entire text of the page&nbsp;</td>
        </tr>
        <tr>
            <td>486</td>
            <td>waitForNotChecked</td>
            <td>waitForNotChecked(locator)<br>Generated from isChecked(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to a checkbox or radio button .<br>Returns: true if the checkbox is checked, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>487</td>
            <td>waitForNotConfirmation</td>
            <td>waitForNotConfirmation(pattern)<br>Generated from getConfirmation().<br>Returns: the message of the most recent JavaScript confirmation dialog&nbsp;</td>
        </tr>
        <tr>
            <td>488</td>
            <td>waitForNotCookie</td>
            <td>waitForNotCookie(pattern)<br>Generated from getCookie().<br>Returns: all cookies of the current page under test&nbsp;</td>
        </tr>
        <tr>
            <td>489</td>
            <td>waitForNotCookieByName</td>
            <td>waitForNotCookieByName(name, pattern)<br>Generated from getCookieByName(name)<p><strong>Arguments</strong>:</p>*name - the name of the cookie .<br>Returns: the value of the cookie&nbsp;</td>
        </tr>
        <tr>
            <td>490</td>
            <td>waitForNotCssCount</td>
            <td>waitForNotCssCount(css, pattern)<br>Generated from getCssCount(css)<p><strong>Arguments</strong>:</p>*css - the css selector to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the specified css se</td>
        </tr>
        <tr>
            <td>491</td>
            <td>waitForNotCursorPosition</td>
            <td>waitForNotCursorPosition(locator, pattern)<br>Generated from getCursorPosition(locator)<br>Arguments: *locator - an element locator pointing to an input element or textarea.<br>Returns: the numerical position of the cursor in the field&nbsp;</td>
        </tr>
        <tr>
            <td>492</td>
            <td>waitForNotEditable</td>
            <td>waitForNotEditable(locator)<br>Generated from isEditable(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: true if the input element is editable, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>493</td>
            <td>waitForNotElementHeight</td>
            <td>waitForNotElementHeight(locator, pattern)<br>Generated from getElementHeight(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: height of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>494</td>
            <td>waitForNotElementIndex</td>
            <td>waitForNotElementIndex(locator, pattern)<br>Generated from getElementIndex(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element .<br>Returns: of relative index of the element to its parent (starting from 0)&nbsp;</td>
        </tr>
        <tr>
            <td>495</td>
            <td>waitForNotElementPositionLeft</td>
            <td>waitForNotElementPositionLeft(locator, pattern)<br>Generated from getElementPositionLeft(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself.<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>496</td>
            <td>waitForNotElementPositionTop</td>
            <td>waitForNotElementPositionTop(locator, pattern)<br>Generated from getElementPositionTop(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element OR an element itself.<br>Returns: of pixels from the edge of the frame.&nbsp;</td>
        </tr>
        <tr>
            <td>497</td>
            <td>waitForNotElementWidth</td>
            <td>waitForNotElementWidth(locator, pattern)<br>Generated from getElementWidth(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator pointing to an element.<br>Returns: width of an element in pixels&nbsp;</td>
        </tr>
        <tr>
            <td>498</td>
            <td>waitForNotEval</td>
            <td>waitForNotEval(script, pattern)<br>Generated from getEval(script)<p><strong>Arguments</strong>:</p>*script - the JavaScript snippet to run.<br>Returns: the results of evaluating the snippet&nbsp;</td>
        </tr>
        <tr>
            <td>499</td>
            <td>waitForNotExpression</td>
            <td>waitForNotExpression(expression, pattern)<br>Generated from getExpression(expression)<p><strong>Arguments</strong>:</p>*expression - the value to return.<br>Returns: the value passed in&nbsp;</td>
        </tr>
        <tr>
            <td>500</td>
            <td>waitForNotHtmlSource</td>
            <td>waitForNotHtmlSource(pattern)<br>Generated from getHtmlSource().<br>Returns: the entire HTML source&nbsp;</td>
        </tr>
        <tr>
            <td>501</td>
            <td>waitForNotLocation</td>
            <td>waitForNotLocation(pattern)<br>Generated from getLocation().<br>Returns: the absolute URL of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>502</td>
            <td>waitForNotMouseSpeed</td>
            <td>waitForNotMouseSpeed(pattern)<br>Generated from getMouseSpeed().<br>Returns: the number of pixels between "mousemove" events during dragAndDrop commands (default=10)&nbsp;</td>
        </tr>
        <tr>
            <td>503</td>
            <td>waitForNotOrdered</td>
            <td>waitForNotOrdered(locator1, locator2)<br>Generated from isOrdered(locator1, locator2)<p><strong>Arguments</strong>:</p>*locator1 - an element locator pointing to the first element<br>*locator2 - an element locator pointing to the second element.<br>Returns: true if element1 is the</td>
        </tr>
        <tr>
            <td>504</td>
            <td>waitForNotPrompt</td>
            <td>waitForNotPrompt(pattern)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>505</td>
            <td>waitForNotSelectOptions</td>
            <td>waitForNotSelectOptions(selectLocator, pattern)<br>Generated from getSelectOptions(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all option labels in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>506</td>
            <td>waitForNotSelectedId</td>
            <td>waitForNotSelectedId(selectLocator, pattern)<br>Generated from getSelectedId(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option ID in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>507</td>
            <td>waitForNotSelectedIds</td>
            <td>waitForNotSelectedIds(selectLocator, pattern)<br>Generated from getSelectedIds(selectLocator)<br>Arguments: *selectLocator - an element locator identifying a drop-down menu.<br>Returns: an array of all selected option IDs in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>508</td>
            <td>waitForNotSelectedIndex</td>
            <td>waitForNotSelectedIndex(selectLocator, pattern)<br>Generated from getSelectedIndex(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option index in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>509</td>
            <td>waitForNotSelectedIndexes</td>
            <td>waitForNotSelectedIndexes(selectLocator, pattern)<br>Generated from getSelectedIndexes(selectLocator)<br>Arguments: *selectLocator - an element locator identifying a drop-down menu. Returns: an array of all selected option indexes in the specified select drop</td>
        </tr>
        <tr>
            <td>510</td>
            <td>waitForNotSelectedLabel</td>
            <td>waitForNotSelectedLabel(selectLocator, pattern)<br>Generated from getSelectedLabel(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option label in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>511</td>
            <td>waitForNotSelectedLabels</td>
            <td>waitForNotSelectedLabels(selectLocator, pattern)<br>Generated from getSelectedLabels(selectLocator)<br>Arguments: *selectLocator - an element locator identifying a drop-down menu.<br>Returns: an array of all selected option labels in the specified select drop-d</td>
        </tr>
        <tr>
            <td>512</td>
            <td>waitForNotSelectedValue</td>
            <td>waitForNotSelectedValue(selectLocator, pattern)<br>Generated from getSelectedValue(selectLocator)<br>Arguments: *selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option value in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>513</td>
            <td>waitForNotSelectedValues</td>
            <td>waitForNotSelectedValues(selectLocator, pattern)<br>Generated from getSelectedValues(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: an array of all selected option values in the specified select drop-</td>
        </tr>
        <tr>
            <td>514</td>
            <td>waitForNotSomethingSelected</td>
            <td>waitForNotSomethingSelected(selectLocator)<br>Generated from isSomethingSelected(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: true if some option has been selected, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>515</td>
            <td>waitForNotSpeed</td>
            <td>waitForNotSpeed(pattern)<br>Generated from getSpeed().<br>Returns: the execution speed in milliseconds.&nbsp;</td>
        </tr>
        <tr>
            <td>516</td>
            <td>waitForNotTable</td>
            <td>waitForNotTable(tableCellAddress, pattern)<br>Generated from getTable(tableCellAddress)<p><strong>Arguments</strong>:</p>*tableCellAddress - a cell address, e.g. "foo.1.4" .<br>Returns: the text from the specified cell&nbsp;</td>
        </tr>
        <tr>
            <td>517</td>
            <td>waitForNotText</td>
            <td>waitForNotText(locator, pattern)<br>Generated from getText(locator)<br>Arguments: *locator - an element locator.<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>518</td>
            <td>waitForNotTitle</td>
            <td>waitForNotTitle(pattern)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>519</td>
            <td>waitForNotValue</td>
            <td>waitForNotValue(locator, pattern)<br>Generated from getValue(locator)<br>Arguments: *locator - an element locator.<br>Returns: the element value, or "on/off" for checkbox/radio elements&nbsp;</td>
        </tr>
        <tr>
            <td>520</td>
            <td>waitForNotVisible</td>
            <td>waitForNotVisible(locator)<br>Generated from isVisible(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: true if the specified element is visible, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>521</td>
            <td>waitForNotWhetherThisFrameMatchFrameExpression</td>
            <td>waitForNotWhetherThisFrameMatchFrameExpression(currentFrameString, target, pattern)<br>Generated from getWhetherThisFrameMatchFrameExpression(currentFrameString, target)<p><strong>Arguments</strong>:</p>*currentFrameString - starting frame<br>*target - new frame (which might be&nbsp;</td>
        </tr>
        <tr>
            <td>522</td>
            <td>waitForNotWhetherThisWindowMatchWindowExpression</td>
            <td>waitForNotWhetherThisWindowMatchWindowExpression(currentWindowString, target, pattern)<br>Generated from getWhetherThisWindowMatchWindowExpression(currentWindowString, target)<p><strong>Arguments</strong>:</p>*currentWindowString - starting window<br>*target - new window (which&nbsp;</td>
        </tr>
        <tr>
            <td>523</td>
            <td>waitForNotXpathCount</td>
            <td>waitForNotXpathCount(xpath, pattern)<br>Generated from getXpathCount(xpath)<p><strong>Arguments</strong>:</p>*xpath - the xpath expression to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the sp</td>
        </tr>
        <tr>
            <td>524</td>
            <td>waitForOrdered</td>
            <td>waitForOrdered(locator1, locator2)<br>Generated from isOrdered(locator1, locator2)<p><strong>Arguments</strong>:</p>*locator1 - an element locator pointing to the first element<br>*locator2 - an element locator pointing to the second element .<br>Returns: true if element1 is the p</td>
        </tr>
        <tr>
            <td>525</td>
            <td>waitForPageToLoad</td>
            <td>waitForPageToLoad(timeout)<p><strong>Arguments</strong>:</p>*timeout - a timeout in milliseconds, after which this command will return with an error&nbsp;</td>
        </tr>
        <tr>
            <td>526</td>
            <td>waitForPopUp</td>
            <td>waitForPopUp(windowID, timeout)<p><strong>Arguments</strong>:</p>*windowID - the JavaScript window "name" of the window that will appear (not the text of the title bar) If unspecified, or specified as "null", this command will wait for the first non-top window to appear (don</td>
        </tr>
        <tr>
            <td>527</td>
            <td>waitForPrompt</td>
            <td>waitForPrompt(pattern)<br>Generated from getPrompt().<br>Returns: the message of the most recent JavaScript question prompt&nbsp;</td>
        </tr>
        <tr>
            <td>528</td>
            <td>waitForPromptNotPresent</td>
            <td>waitForPromptNotPresent()<br>Generated from isPromptPresent().<br>Returns: true if there is a pending prompt&nbsp;</td>
        </tr>
        <tr>
            <td>529</td>
            <td>waitForPromptPresent</td>
            <td>waitForPromptPresent()<br>Generated from isPromptPresent().<br>Returns: true if there is a pending prompt&nbsp;</td>
        </tr>
        <tr>
            <td>530</td>
            <td>waitForSelectOptions</td>
            <td>waitForSelectOptions(selectLocator, pattern)<br>Generated from getSelectOptions(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all option labels in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>531</td>
            <td>waitForSelectedId</td>
            <td>waitForSelectedId(selectLocator, pattern)<br>Generated from getSelectedId(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option ID in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>532</td>
            <td>waitForSelectedIds</td>
            <td>waitForSelectedIds(selectLocator, pattern)<br>Generated from getSelectedIds(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu.<br>Returns: an array of all selected option IDs in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>533</td>
            <td>waitForSelectedIndex</td>
            <td>waitForSelectedIndex(selectLocator, pattern)<br>Generated from getSelectedIndex(selectLocator)<br>Arguments: *selectLocator - an element locator identifying a drop-down menu.<br>Returns: the selected option index in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>534</td>
            <td>waitForSelectedIndexes</td>
            <td>waitForSelectedIndexes(selectLocator, pattern)<br>Generated from getSelectedIndexes(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option indexes in the specified select drop</td>
        </tr>
        <tr>
            <td>535</td>
            <td>waitForSelectedLabel</td>
            <td>waitForSelectedLabel(selectLocator, pattern)<br>Generated from getSelectedLabel(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option label in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>536</td>
            <td>waitForSelectedLabels</td>
            <td>waitForSelectedLabels(selectLocator, pattern)<br>Generated from getSelectedLabels(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option labels in the specified select drop-do</td>
        </tr>
        <tr>
            <td>537</td>
            <td>waitForSelectedValue</td>
            <td>waitForSelectedValue(selectLocator, pattern)<br>Generated from getSelectedValue(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: the selected option value in the specified select drop-down&nbsp;</td>
        </tr>
        <tr>
            <td>538</td>
            <td>waitForSelectedValues</td>
            <td>waitForSelectedValues(selectLocator, pattern)<br>Generated from getSelectedValues(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: an array of all selected option values in the specified select drop-do</td>
        </tr>
        <tr>
            <td>539</td>
            <td>waitForSomethingSelected</td>
            <td>waitForSomethingSelected(selectLocator)<br>Generated from isSomethingSelected(selectLocator)<p><strong>Arguments</strong>:</p>*selectLocator - an element locator identifying a drop-down menu .<br>Returns: true if some option has been selected, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>540</td>
            <td>waitForSpeed</td>
            <td>waitForSpeed(pattern)<br>Generated from getSpeed().<br>Returns: the execution speed in milliseconds.&nbsp;</td>
        </tr>
        <tr>
            <td>541</td>
            <td>waitForTable</td>
            <td>waitForTable(tableCellAddress, pattern)<br>Generated from getTable(tableCellAddress)<p><strong>Arguments</strong>:</p>*tableCellAddress - a cell address, e.g. "foo.1.4" .<br>Returns: the text from the specified cell&nbsp;</td>
        </tr>
        <tr>
            <td>542</td>
            <td>waitForText</td>
            <td>waitForText(locator, pattern)<br>Generated from getText(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: the text of the element&nbsp;</td>
        </tr>
        <tr>
            <td>543</td>
            <td>waitForTextNotPresent</td>
            <td>waitForTextNotPresent(pattern)<br>This command is deprecated. Use the waitForNotText command with an element locator instead.<br>Generated from isTextPresent(pattern)<p><strong>Arguments</strong>:</p>*pattern - a pattern to match with the text of the page .<br>Returns: true if the&nbsp;</td>
        </tr>
        <tr>
            <td>544</td>
            <td>waitForTextPresent</td>
            <td>waitForTextPresent(pattern)<br>This command is deprecated. Use the waitForText command with an element locator instead.<br>Generated from isTextPresent(pattern)<p><strong>Arguments</strong>:</p>*pattern - a pattern to match with the text of the page .<br>Returns: true if the patter</td>
        </tr>
        <tr>
            <td>545</td>
            <td>waitForTitle</td>
            <td>waitForTitle(pattern)<br>Generated from getTitle().<br>Returns: the title of the current page&nbsp;</td>
        </tr>
        <tr>
            <td>546</td>
            <td>waitForValue</td>
            <td>waitForValue(locator, pattern)<br>Generated from getValue(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator.<br>Returns: the element value, or "on/off" for checkbox/radio elements&nbsp;</td>
        </tr>
        <tr>
            <td>547</td>
            <td>waitForVisible</td>
            <td>waitForVisible(locator)<br>Generated from isVisible(locator)<p><strong>Arguments</strong>:</p>*locator - an element locator. Returns: true if the specified element is visible, false otherwise&nbsp;</td>
        </tr>
        <tr>
            <td>548</td>
            <td>waitForWhetherThisFrameMatchFrameExpression</td>
            <td>waitForWhetherThisFrameMatchFrameExpression(currentFrameString, target, pattern)<br>Generated from getWhetherThisFrameMatchFrameExpression(currentFrameString, target)<p><strong>Arguments</strong>:</p>*currentFrameString - starting frame<br>*target - new frame (which might be rel</td>
        </tr>
        <tr>
            <td>549</td>
            <td>waitForWhetherThisWindowMatchWindowExpression</td>
            <td>waitForWhetherThisWindowMatchWindowExpression(currentWindowString, target, pattern)<br>Generated from getWhetherThisWindowMatchWindowExpression(currentWindowString, target)<p><strong>Arguments</strong>:</p>*currentWindowString - starting window<br>*target - new window (which mig</td>
        </tr>
        <tr>
            <td>550</td>
            <td>waitForXpathCount</td>
            <td>waitForXpathCount(xpath, pattern)<br>Generated from getXpathCount(xpath)<p><strong>Arguments</strong>:</p>*xpath - the xpath expression to evaluate. do NOT wrap this expression in a 'count()' function; we will do that for you.<br>Returns: the number of nodes that match the speci</td>
        </tr>
        <tr>
            <td>551</td>
            <td>waitPreparation</td>
            <td>waitPreparation</td>
        </tr>
        <tr>
            <td>552</td>
            <td>waitPreparationAndWait</td>
            <td>waitPreparationAndWait</td>
        </tr>
        <tr>
            <td>553</td>
            <td>windowFocus</td>
            <td>windowFocus()</td>
        </tr>
        <tr>
            <td>554</td>
            <td>windowFocusAndWait</td>
            <td>windowFocusAndWait() Generated from windowFocus()</td>
        </tr>
        <tr>
            <td>555</td>
            <td>windowMaximize</td>
            <td>windowMaximize()</td>
        </tr>
        <tr>
            <td>556</td>
            <td>windowMaximizeAndWait</td>
            <td>windowMaximizeAndWait() Generated from windowMaximize()</td>
        </tr>
    </tbody>
</table>