# Validation By XML Body

## XML Validation

* We can validate the xml body through lenient validation
* This means as long as the expected xml structure matches the structure of the response xml structure, we will be able to make a match

## Example

* Response:
* ```text
  <?xml version="1.0"?>
  <catalog>
     <book id="bk101">
        <author>Gambardella, Matthew</author>
        <title>XML Developer's Guide</title>
        <genre>Computer</genre>
        <price>44.95</price>
        <publish_date>2000-10-01</publish_date>
        <description>An in-depth look at creating applications 
        with XML.</description>
     </book>
     <book id="bk112">
        <author>Galos, Mike</author>
        <title>Visual Studio 7: A Comprehensive Guide</title>
        <genre>Computer</genre>
        <price>49.95</price>
        <publish_date>2001-04-16</publish_date>
        <description>Microsoft Visual Studio 7 is explored in depth,
        looking at how Visual Basic, Visual C++, C#, and ASP+ are 
        integrated into a comprehensive development 
        environment.</description>
     </book>
  </catalog>
  ```
* Expected validation
* ```text
  <?xml version="1.0"?>
  <catalog>
     <book id="bk101">
        <author>Gambardella, Matthew</author>
        <title>XML Developer's Guide</title>
        <genre>Computer</genre>
        <price>44.95</price>
        <description>An in-depth look at creating applications 
        with XML.</description>
     </book>
  </catalog>
  ```
* In this example we took out the second "book" section and removed the "publish\_date" field from the xml file 
* This example will pass the validation

