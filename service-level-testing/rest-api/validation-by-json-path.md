# Validation By Json Path

## Jason Path Verification

* Verification are separated by ";"
* Format
  * JsonPath:Position:command\(value\)
  * Position is optional
  * eg. [http://jsonpath.herokuapp.com/?path=$.store.\*](http://jsonpath.herokuapp.com/?path=$.store.*)
  * ```text
    _VERIFY.JSON.PART_
    store..category:1:equalTo(reference);
    store..category:1:equalTo(<@categoryVariable>);
    store..category:equalTo(reference,fiction,fiction,fiction);

    jsonPath: store..category
    Position: 1
    equalTo: command
    value: reference
    ```
* Position is optional
  * With position: Select json path value based on occurrence 
  * Without position: Compare against all occurrences of json path
* We can use variables for values with &lt;@variable&gt; syntax

### Json Path 'has Items'

* [http://jsonpath.herokuapp.com/?path=$.store.\*](http://jsonpath.herokuapp.com/?path=$.store.*)
* Has items does partial string match if position is specified
* Does Array contains match if position is not provided

```text
_VERIFY.JSON.PART_
store..category:1:hasItems(refer);
store..category:hasItems(reference,fiction);

```

### Json Path EqualTo

* * [http://jsonpath.herokuapp.com/?path=$.store.\*](http://jsonpath.herokuapp.com/?path=$.store.*)

```text
_VERIFY.JSON.PART_
store..category:1:equalTo(reference);
store..category:equalTo(reference,fiction,fiction,fiction);

```

### All Values In Json Path Equals

```text
"user.email": equalTo("autouser313@gmail.com");
```

* All user.email values will be stored in an array, and compared to the value
* eg. if we have response of 2 users: 
* ```text
  {
         "user": {
          "username":  user1,
          "email": "autouser1@gmail.com",
          "provider": "local",
          "confirmed": true,
          "blocked": null
      }
      "user": {
          "username":  user2,
          "email": "autouser2@gmail.com",
          "provider": "local",
          "confirmed": true,
          "blocked": null
      }
  }
  ```
* Then are verification becomes:
* ```text
  "user.email": equalTo("autouser1@gmail.com","autouser2@gmail.com");
  ```

### Jason Path Contains

```text
NAME:1: contains(Paul);
```

* Column "NAME" at row 1 contains the text: Paul

### All Values in Json Path Contain

```text
NAME:contains(Paul,Allen,Teddy,Mark);
```

* We have 4 or more rows with column "Name" which contain: Paul, Allen, Teddy, Mark

### Json Path Not Empty

```text
ADDRESS:1:isNotEmpty;
```

* Column "Address" at row 1 is not empty
* Usefully if we want to check a value exists but don't want to verify the value. eg. time stamp

