---
title: "Handling Databases" 
sidebar: katalon_studio_docs_sidebar
permalink: katalon-studio/docs/handling-databases.html 
redirect_from:
    - "/display/KD/Handling+Databases/"
    - "/display/KD/Handling%20Databases/"
    - "/x/Nw3R/"
    - "/katalon-studio/docs/handling-databases/"
description: 
---
With custom keywords, you can connect to a database as well as perform other data queries. 

Below is a sample demonstrating how to create custom keywords for:

*   Establishing database connection
*   Executing data query
*   Closing the connection

```groovy
private static Connection connection = null;

	/**
	 * Open and return a connection to database
	 * @param dataFile absolute file path  
	 * @return an instance of java.sql.Connection
	 */
	@Keyword
	def connectDB(String dataFile){
		//Load driver class for your specific database type
		Class.forName("org.sqlite.JDBC")
		String connectionString = "jdbc:sqlite:" + dataFile
		if(connection != null && !connection.isClosed()){
			connection.close()
		}
		connection = DriverManager.getConnection(connectionString)
		return connection
	}
	
	/**
	 * execute a SQL query on database
	 * @param queryString SQL query string
	 * @return a reference to returned data collection, an instance of java.sql.ResultSet
	 */
	@Keyword
	def executeQuery(String queryString) {
		Statement stm = connection.createStatement()
		ResultSet rs = stm.executeQuery(queryString)				
        return rs
	}

	@Keyword
	def closeDatabaseConnection() {
		if(connection != null && !connection.isClosed()){
			connection.close()
		}
		connection = null
	}

	/**
	 * Execute non-query (usually INSERT/UPDATE/DELETE/COUNT/SUM...) on database	
	 * @param queryString a SQL statement
	 * @return single value result of SQL statement
	 */
	@Keyword
	def execute(String queryString) {
		Statement stm = connection.createStatement()
		boolean result = stm.execute(queryString)
		return result
	}
```

You can add the sample code above to your keyword file and modify the details as appropriated. 

![](../../images/katalon-studio/docs/handling-databases/image2017-2-24-113A383A14.png)