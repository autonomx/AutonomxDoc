# Validation By Json Path

## Jason Path Verification

* Verification are separated by ";"
* Format
  * JsonPath:Position:command\(value\)
  * Position is optional
  * eg. [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
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

### Json Path 'hasItems'

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* Has items does partial string match if position is specified
* Does Array contains match if position is not provided

```text
_VERIFY.JSON.PART_
store..category:1:hasItems(refer);
store..category:hasItems(reference,fiction);

```

### Json Path notHaveItems

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* not have items will do a 'not contains' validation on json response path
* In the example case, store..category:1 will not have action.
* In second example, action and adventure are not part of the store..category responses

```text
_VERIFY.JSON.PART_
store..category:1:notHaveItems(action);
store..category:notHaveItems(action,adventure);
```

### Json Path EqualTo

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)

```text
_VERIFY.JSON.PART_
store..category:1:equalTo(reference);
store..category:equalTo(reference,fiction,fiction,fiction);

```

### Json Path notEqualTo

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* Will return true on store..category:1, as first response item is 'reference'
* Second example is true, cause action is not part of the response

```text
_VERIFY.JSON.PART_
store..category:1:notEqualTo(fiction);
store..category:notEqualTo(action);

```

### Jason Path Contains

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* Does partial string match if position is specified
* Does Array contains match if position is not provided

```text
_VERIFY.JSON.PART_
store..category:1:hasItems(refer);
store..category:contains(reference,fiction);

```

### Json Path notContains

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
*  Will do a 'not contains' validation on json response path
* In the example case, store..category:1 will not have action.
* In second example, action and adventure are not part of the store..category responses

```text
_VERIFY.JSON.PART_
store..category:1:notContains(action);
store..category:notContains(action,adventure);
```

### Json Path Not Empty

```text
ADDRESS:1:isNotEmpty;
```

* Column "Address" at row 1 is not empty
* Usefully if we want to check a value exists but don't want to verify the value. eg. time stamp

