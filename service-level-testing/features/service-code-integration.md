# Service Code Integration

## Purpose

* We want to be able to call the service calls in the UI based tests or at code level
* There are 2 methods of achieving this goal
  * Creating a service object and calling the service interface directly
  * Creating a service keyword in a csv file and calling the test case name

## Using Service Object

* We will create a service object containing the same information as we pass to csv file for our api tests
* Example: we will use create service object for getting the access token
* {% code title="module.serviceUiIntegration.panel.LoginPanel" %}
  ```text
  public Response loginWithServiceObject(CommonUser user) {
		
  		ServiceObject loginApi = Service.create()
  				.withUriPath("/auth/local")
  				.withContentType("application/json")
  				.withMethod("POST")
  				.withRequestBody("{" + 
  						"\"identifier\": \""+ user.username +"\",\r\n" + 
  						"\"password\": \"" +user.password + "\"" + 
  						"}")
  				.withOutputParams(
  						"user.role.id:<$roles>;"
  						+ "jwt:<$accessTokenAdmin>;"
  						+ "user.id:<$userId>");
				
  		return RestApiInterface.RestfullApiInterface(loginApi);
  	}
  ```
  {% endcode %}
* We specify: uri path, content type, method, request body, output parameters
* We store the access token in variable "accessTokenAdmin"
* The scope of the variable depends on where the call is made: before suite \(suite level\), before class \(class level\), test method \(test method only\)
* we can call Database interface with similar methodology
* ```text
  public void databaseCall() {
		
  		ServiceObject dbCall = Service.create()
  				.withRequestBody("SELECT * FROM COMPANY")
  				.withOutputParams("NAME:1:<$name>");
				
  		 RestApiInterface.SqlInterface(dbCall);
  	}
  ```
* Here, we are storing Name column at row 1 to "name" variable

## Using Service Keywords

* We can also use csv based calls for the service calls
* The keyword csv file is located at:
  * automation -&gt; resourced -&gt; api -&gt; keywords
* Here, we specify the service calls the same way as service tests using csv data entry

![](../../.gitbook/assets/image%20%2828%29.png)

* We can then call any of these api calls using the testCaseID
* eg. getToken
* {% code title="module.serviceUiIntegration.panel.LoginPanel" %}
  ```text
  /**
  	 * the scope of the stored token value depends on the where its called.
  	 *  eg. at before class (the scope is class level )
  	 *      at before method ( the scope is test level )
  	 *      at before suite ( the scope is suite level )
  	 * @param user
  	 */
  	public void login(CommonUser user) {
  		Service.getToken
  				.withUsername(user.username)
  				.withPassword(user.password)
  				.build();
  	}
  ```
  {% endcode %}
* Each testCaseID has a service object generated in code
* Each parameter in request body is generated as a ".with" parameter 

