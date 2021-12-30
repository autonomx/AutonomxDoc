# Custom Validation

## Custom Json Path Validation

* We can add custom validation for json response
* Custom validation is add to ExpectedResponse column of Csv file
* Format:
* ```
  _VERIFY_JSON_PART_ jsonPath:command(Command.methodname,parameters)
  ```
  * **jsonPath**: json path to used to get values from the json response
  * **command(xxx)**: custom command are wrapped in "command" keyword
  * **Command.methodname**:  the name of the method for the custom validation
  * **parameters**: parameters for the custom validation method, separated by ","
* ```
  _VERIFY_JSON_PART_ .price:command(Command.isAllNumbersGreaterThanSumOf,3,5)
  ```
  * **json path**: .price
  * **method name**: isAllNumbersGreaterThanSumOf
  * **parameters**: 3,5
* Method is added to **Services -> method -> Command.java**&#x20;
* ****

![](<../../.gitbook/assets/image (96).png>)

* Method example
* ```

  	public static String isAllNumbersGreaterThanSumOf(String response, ArrayList<String> values) {
  	
  		int targetValue = Integer.valueOf(values.get(0)) + Integer.valueOf(values.get(1));
  		String[] responses = response.split(",");
  		
  		TestLog.ConsoleLog("validating all values in: " + response + " are greater than: " + targetValue);	
  		
  		for(String responseString : responses) {
  			if(Helper.getDoubleFromString(responseString) <=  targetValue)
  				return "value: " + responseString + " is less than or equal to: " + targetValue;
  		}
  		return StringUtils.EMPTY;
  	}	
  ```
  * First parameter is the jsonPath response
    * List values are separated by ","
  * Method parameters as of type ArrayList\<String>&#x20;
    * Parameter values need to be extracted from the ArrayList
      * eg. In this example, the list will contain: 3,5&#x20;
  * Response is the error string&#x20;
    * IF error is returned, the test will fail

## Example 1

* Custom command with multiple parameters:
* In CSV file: ExpectedResponse column
* ```
  _VERIFY_JSON_PART_ .price:command(Command.isAllNumbersGreaterThanSumOf,3,5)
  ```
* At: **Services -> method -> Command.java**&#x20;
  * ```
    public static String isAllNumbersGreaterThanSumOf(String response, ArrayList<String> values) {
    	
    		int targetValue = Integer.valueOf(values.get(0)) + Integer.valueOf(values.get(1));
    		String[] responses = response.split(",");
    		
    		TestLog.ConsoleLog("validating all values in: " + response + " are greater than: " + targetValue);	
    		
    		for(String responseString : responses) {
    			if(Helper.getDoubleFromString(responseString) <=  targetValue)
    				return "value: " + responseString + " is less than or equal to: " + targetValue;
    		}
    		return StringUtils.EMPTY;
    	} 	
    ```

## Example 2

* Custom command with no parameters
* In CSV file: ExpectedResponse column
* ```
  _VERIFY_JSON_PART_ .price:command(Command.isAllDifferent)
  ```
* At: **Services -> method -> Command.java**&#x20;
* ```
  public static String isAllDifferent(String response) {
  		String[] responses = response.split(",");
  		HashSet<String> set = new HashSet<>();
  		for (String s : responses) {
  			if (!set.add(s)) {
  				return "values in response are not unique: " + responses;
  			}
  		}

  		return StringUtils.EMPTY;
  	}
  ```
