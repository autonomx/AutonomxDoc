# Custom Interface

## Purpose

* We can add additional functionalities to the Service tests using either:
  * External Method \( see External section \)
  * Custom Interface
* Custom interface would be for more comprehensive functionalities that are beyond the scope of just adding simple methods

## Custom Interface

* We can add custom interface to the Service project
* Interfaces are added at **module -&gt; services -&gt; interfaces** package

![](../../.gitbook/assets/image%20%2832%29.png)

* The custom interface class name and main method should be the same, where the method name is lower case of the class
* ```text
  @Service
  public class TestInterface {
	

  	public void testInterface(ServiceObject serviceObject) {
  	}
  ```

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

## Option Values

* Options values are key value pairs
* In the custom method, its best to use the same methodology

![](../../.gitbook/assets/image%20%2864%29.png)

```text
	public class TestInterface {
	public static final String KEY1Option = "waitForResponsSecondse";
	public static final String KEY1 = "key1";
	
		public static void evaluateOption(ServiceObject serviceObject) {
	
			// reset options. will be overwritten by option value if set
			resetOptions();
	
			// if no option specified
			if (serviceObject.getOption().isEmpty()) {
				return;
			}
	
			// store value to config directly using format: value:<$key> separated by colon
			// ';'
			DataHelper.saveDataToConfig(serviceObject.getOption());
	
			// replace parameters for request body
			serviceObject.withOption(DataHelper.replaceParameters(serviceObject.getOption()));
	
			// get key value mapping of header parameters
			List<KeyValue> keywords = DataHelper.getValidationMap(serviceObject.getOption());
	
			// iterate through key value pairs for headers, separated by ";"
			for (KeyValue keyword : keywords) {
	
				// if additional options
				switch (keyword.key) {
				case KEY1Option:
					Config.putValue(KEY1, keyword.value, false);
					break;
				default:
					break;
				}
			}
			KeyValue.printKeyValue(keywords, "option");
		}
	
		private static void resetOptions() {
			Config.putValue(KEY1, "");
		}
	
	}
```

* In this example, the option value in csv file:

  ```text
  Option column: waitForResponsSecondse:3
  ```

## Csv Test File Usage

* Custom interface relies on code generation to generate the code required to interact with the csv files
* This process is automatic 
* In Csv file, we set:
  * InterfaceType: TestInterface
* 
![](../../.gitbook/assets/image%20%28102%29.png)

