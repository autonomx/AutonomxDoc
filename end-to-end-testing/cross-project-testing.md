# Cross Project Testing

## Purpose

* Cross project testing allows us to have end to end testing across multiple separate projects

## Process

* The process of achieving end to end, cross project testing, involves:
  * Setting project name
  * Exporting the project as Jar
  * Importing in the end to end testing project
  * Integrating in end to end test

### Setting project name

* We first set our project name, which acts as identifier for our project 
* At resources-&gt; properties -&gt; global.property
  * project.name = projectname
* This will result in code generator to create references to our project to be used externally

### Export project

* We export our project as Jar file to be imported by other projects
* At automation -&gt; pom.xml, **set artifact id** and **group id** for the project
  * ```text
    	<groupId>com.companyname</groupId>
    	<artifactId>projectA</artifactId>
    	<version>1.0</version>
    	<packaging>jar</packaging>
    ```
* **Export project** at command line
  * **mvn clean instal l-DskipTests**
  * The Jar file will be created at automation -&gt; target directory
* 
![](../.gitbook/assets/image%20%28132%29.png)

#### Export to Jar repository

* Optionally we can export our project to a Jar repository, like Nexus or Artifactory
* We first set the url for the repository at automation -&gt; pom.xml file

  * ```text
    <repositories>
    		<repository>
    			<id>seleniumCore</id>
    			<name>vultr.guest-releases</name>
    			<url>http://artifact.autonomx.io/artifactory/libs-release-local</url>
    			<layout>default</layout>
    			<releases>
    				<enabled>true</enabled>
    			</releases>
    			<snapshots>
    				<enabled>true</enabled>
    			</snapshots>
    		</repository>
    	</repositories>
    ```

* We then set the version at the top of the pom.xml file:
  * ```text
    <project xmlns="http://maven.apache.org/POM/4.0.0"
    	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    	<modelVersion>4.0.0</modelVersion>
    	<groupId>io.autonomx</groupId>
    	<artifactId>autonomx</artifactId>
    	<version>1.0.1</version>
    	<packaging>jar</packaging>	
    ```
  * We need to increment the version at each deploy. eg. 1.0.1, 1.0.2, 1.0.3...
* At command line we depoy
  * mvn deploy
  * This will upload the jar and the source to the Jar repository

