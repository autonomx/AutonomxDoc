# Validation By Response Body

## Validation By Response Body

* Validates against the entire json response body
* Verification are separated by ";"
* Format
  * command\(value\)
  * eg. [http://jsonpath.herokuapp.com](http://jsonpath.herokuapp.com/?path=$.store.*..category)
  * ```text
    _VERIFY.RESPONSE.BODY_
    hasItems(reference);
    ```
* We can use variables for values with &lt;@variable&gt; syntax

### Json Path 'hasItems'

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* Has items does partial string match if position is specified
* Does Array contains match if position is not provided

```text
_VERIFY.RESPONSE.BODY_
store..category:1:hasItems(reference);
store..category:hasItems(reference,fiction);

```

### Json Path notHaveItems

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* not have items will do a 'not contains' validation on json response path
* In the example case, store..category:1 will not have action.
* In second example, action and adventure are not part of the store..category responses

```text
_VERIFY.RESPONSE.BODY_
store..category:1:notHaveItems(action);
store..category:notHaveItems(action,adventure);
```

### Json Path EqualTo

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)

```text
_VERIFY.RESPONSE.BODY_
store..category:1:equalTo(reference);
store..category:equalTo(reference,fiction,fiction,fiction);

```

### Json Path notEqualTo

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* Will return true on store..category:1, as first response item is 'reference'
* Second example is true, cause action is not part of the response

```text
_VERIFY.RESPONSE.BODY_
store..category:1:notEqualTo(fiction);
store..category:notEqualTo(action);

```

### Jason Path Contains

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* Does partial string match if position is specified
* Does Array contains match if position is not provided

```text
_VERIFY.RESPONSE.BODY_
store..category:1:contains(refer);
store..category:contains(reference,fiction);

```

### Json Path notContains

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
*  Will do a 'not contains' validation on json response path
* In the example case, store..category:1 will not have action.
* In second example, action and adventure are not part of the store..category responses

```text
_VERIFY.RESPONSE.BODY_
store..category:1:notContains(action);
store..category:notContains(action,adventure);
```

### Json Path containsInAnyOrder

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* In the json response, we are verifying regardless of order

```text
_VERIFY.RESPONSE.BODY_
store..category:containsInAnyOrder(reference,fiction);
store..category:containsInAnyOrder(fiction,reference);
```

### Json Path integerGreaterThan

* [http://jsonpath.herokuapp.com/?path=$..book\[?\(@.author%20=~%20/.\*REES/i\)\].price](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29].price)
* In this example, json path returns the value: 8.95, which is greater than 8

```text
_VERIFY.RESPONSE.BODY_
.book[?(@.author =~ /.*REES/i)].price:integerGreaterThan(8);

```

### 

### Json Path integerLessThan

* [http://jsonpath.herokuapp.com/?path=$..book\[?\(@.author%20=~%20/.\*REES/i\)\].price](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29].price)
* In this example, json path returns the value: 8.95, which is less than 9

```text
_VERIFY.JSON.PART_
.book[?(@.author =~ /.*REES/i)].price:integerLessThan(9);

```

### Json Path integerEqual

* [http://jsonpath.herokuapp.com/?path=$..book\[?\(@.author%20=~%20/.\*REES/i\)\].price](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29].price)
* In this example, json path returns the value: 8.95, which is equal to 8.95

```text
_VERIFY.JSON.PART_
.book[?(@.author =~ /.*REES/i)].price:integerEqual(8.95);

```

### Json Path integerNotEqual

* [http://jsonpath.herokuapp.com/?path=$..book\[?\(@.author%20=~%20/.\*REES/i\)\].price](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29].price)
* In this example, json path returns the value: 8.95, which is not equal to 8.96

```text
_VERIFY.JSON.PART_
.book[?(@.author =~ /.*REES/i)].price:integerNotEqual(8.96);

```

### Json Path nodeSizeGreaterThan

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* In the json response, we are verifying the number of returned categories, which is 4

```text
_VERIFY.JSON.PART_
store..category:nodeSizeGreaterThan(3);
```

### Json Path nodeSizeLessThan

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* In the json response, we are verifying the number of returned categories, which is 4

```text
_VERIFY.JSON.PART_
store..category:nodeSizeLessThan(5);
```

### Json Path nodeSizeExact

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* In the json response, we are verifying the number of returned categories, which is 4

```text
_VERIFY.JSON.PART_
store..category:nodeSizeExact(5);
```

### Json Path Not Empty

* [http://jsonpath.herokuapp.com/?path=$..book\[2\].category](http://jsonpath.herokuapp.com/?path=$..book[2].category)
* Verify if json path value is not empty

```text
.book[2].category:isNotEmpty;
```

### Json Path Empty

* [http://jsonpath.herokuapp.com/?path=$..book\[2\].category](http://jsonpath.herokuapp.com/?path=$..book[2].category)
* Verify if json path value is not empty

```text
.book[2].category2:Empty;
```

