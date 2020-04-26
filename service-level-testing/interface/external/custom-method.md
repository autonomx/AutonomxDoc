# Custom Method

## Custom Method

* We can write our own custom method
* Methods are added to Services -&gt; method -&gt; External.java 
* ```text
  public static void testMethod(String param1, int param2, Object param3) {
		
  		// values in Config are available by other tests in csv file through using <@key1> annotation
  		// we can place string, int, boolean and objects in Config
  		Config.putValue("key1",param1);	
  		Config.putValue("key2",param2);	
  		Config.putValue("key3",true);
  		Config.putValue("key4", param3);

  		// getting the values from Config through code
  		String key = Config.getValue("key1");
  		Helper.assertEquals(param1, key);
		
  		int intkey = Config.getIntValue("key2");
  		Helper.assertEquals(param2, intkey);
		
  		boolean boolkey = Config.getBooleanValue("key3");
  		Helper.assertEquals(true, boolkey);
		
  		Object objectkey = Config.getObjectValue("key4");
  		Helper.assertTrue("objects did not match", objectkey.equals(param3));
  	}
  ```
* Supports primitive and object data types
* Values can be stored in properties using **Config.putValue\(key, value\)** syntax
  * The stored values can then be accessed by other tests in the same csv file using the **&lt;@key&gt;** syntax
  * eg. Config.putValue\("key1","name1"\) can be accessed in csv file by the subsequent tests using &lt;@key1&gt;
  * The scope of the stored value is the entire csv file
* To set custom method in csv file:

  * We set:

    * **Interface**: EXTERNAL
    * **Method**: **METHOD:classname:methodname** eg. METHOD:External.testMethod
      * External is the class name
      * testmethod is the method name
    * **Request Body**: param1:value1; param2:3; param3:&lt;@key1&gt;

  * This is equivalent of:
    * testMethod\("value1", 3, "name1"\)

![](../../../.gitbook/assets/image%20%2815%29.png)

In CSV:

![](../../../.gitbook/assets/image%20%282%29.png)







