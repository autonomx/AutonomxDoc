# Custom Interface

## Purpose

* We can add additional functionalities to the Service tests using either:
  * External Method \( see External section \)
  * Custom Interface
* Custom interface would be for more comprehensive functionalities that are beyond the scope of just adding simple methods

## Custom Interface

* We can add custom interface to the Service project
* Interfaces are added at **module -&gt; services -&gt; interfaces** package

![](../../.gitbook/assets/image%20%2831%29.png)

* The custom interface class name and main method should be the same, where the method name is lower case of the class
* ```text
  @Service
  public class TestInterface {
	

  	public void testInterface(ServiceObject serviceObject) {
  	}
  ```
* 
## Service Object

* Service object is the only parameter used by custom interface
* Service objects contains all the data from the csv columns, which can now be accessed in the interface method
* ```text
  // access csv column values through get methods
  		serviceObject.getDescription();
  		serviceObject.getOption();
  		serviceObject.getRequestBody();
  		serviceObject.getExpectedResponse();
  ```

## Csv Test File Usage

* Custom interface relies on code generation to generate the code required to interact with the csv files
* This process is automatic 
* In Csv file, we set:
  * InterfaceType: TestInterface
* 
![](../../.gitbook/assets/image%20%2898%29.png)

