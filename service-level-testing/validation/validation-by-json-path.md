# Validation By Json Path

## Jason Path Verification

* Verification are separated by ";"
* Format
  * JsonPath:Position:command\(value\)
  * Position is optional
  * [More info on Json Path](https://docs.autonomx.io/service-level-testing/rest-api/json-path)
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
store..category:1:contains(refer);
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

### Json Path containsInAnyOrder

* [http://jsonpath.herokuapp.com/?path=$.store.\*..category](http://jsonpath.herokuapp.com/?path=$.store.*..category)
* In the json response, we are verifying regardless of order

```text
_VERIFY.JSON.PART_
store..category:containsInAnyOrder(reference,fiction);
store..category:containsInAnyOrder(fiction,reference);
```

### Json Path integerGreaterThan

* [http://jsonpath.herokuapp.com/?path=$..book\[?\(@.author%20=~%20/.\*REES/i\)\].price](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29].price)
* In this example, json path returns the value: 8.95, which is greater than 8

```text
_VERIFY.JSON.PART_
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



### Json Path Examples

* From [https://github.com/json-path/JsonPath](https://github.com/json-path/JsonPath)

| JsonPath \(click link to try\) | Result |
| :--- | :--- |
| [$.store.book\[\*\].author](http://jsonpath.herokuapp.com/?path=$.store.book[*].author) | The authors of all books |
| [$..author](http://jsonpath.herokuapp.com/?path=$..author) | All authors |
| [$.store.\*](http://jsonpath.herokuapp.com/?path=$.store.*) | All things, both books and bicycles |
| [$.store..price](http://jsonpath.herokuapp.com/?path=$.store..price) | The price of everything |
| [$..book\[2\]](http://jsonpath.herokuapp.com/?path=$..book[2]) | The third book |
| [$..book\[-2\]](http://jsonpath.herokuapp.com/?path=$..book[2]) | The second to last book |
| [$..book\[0,1\]](http://jsonpath.herokuapp.com/?path=$..book[0,1]) | The first two books |
| [$..book\[:2\]](http://jsonpath.herokuapp.com/?path=$..book[:2]) | All books from index 0 \(inclusive\) until index 2 \(exclusive\) |
| [$..book\[1:2\]](http://jsonpath.herokuapp.com/?path=$..book[1:2]) | All books from index 1 \(inclusive\) until index 2 \(exclusive\) |
| [$..book\[-2:\]](http://jsonpath.herokuapp.com/?path=$..book[-2:]) | Last two books |
| [$..book\[2:\]](http://jsonpath.herokuapp.com/?path=$..book[2:]) | Book number two from tail |
| [$..book\[?\(@.isbn\)\]](http://jsonpath.herokuapp.com/?path=$..book[?%28@.isbn%29]) | All books with an ISBN number |
| [$.store.book\[?\(@.price &lt; 10\)\]](http://jsonpath.herokuapp.com/?path=$.store.book[?%28@.price%20%3C%2010%29]) | All books in store cheaper than 10 |
| [$..book\[?\(@.price &lt;= $\['expensive'\]\)\]](http://jsonpath.herokuapp.com/?path=$..book[?%28@.price%20%3C=%20$[%27expensive%27]%29]) | All books in store that are not "expensive" |
| [$..book\[?\(@.author =~ /.\*REES/i\)\]](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29]) | All books matching regex \(ignore case\) |
| [$..\*](http://jsonpath.herokuapp.com/?path=$..*) | Give me every thing |
| [$..book.length\(\)](http://jsonpath.herokuapp.com/?path=$..book.length%28%29) | The number of books |

