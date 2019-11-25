# Validation By Partial Json

## Partial Json Validation

* We can verify partial json body using Json Path 
* [https://github.com/json-path/JsonPath](https://github.com/json-path/JsonPath)
* Format: 
  * ```text
    jsonPath:jsonbody(json body)
    ```
* ```text
  _VERIFY.JSON.PART_
  .book[?(@.author =~ /.*REES/i)]:jsonbody(
  [
     {
        "category" : "reference",
        "author" : "Nigel Rees",
        "title" : "Sayings of the Century",
        "price" : 8.95
     }
  ])
  ```

  * Json Path:
  * ```text
    .book[?(@.author =~ /.*REES/i)]
    ```
  * Json Body: 

    ```text
    [
       {
          "category" : "reference",
          "author" : "Nigel Rees",
          "title" : "Sayings of the Century",
          "price" : 8.95
       }
    ]
    ```
* Use [http://jsonpath.herokuapp.com/](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29]) web app to validate your json query
* eg. [http://jsonpath.herokuapp.com/?path=$..book\[?\(@.author%20=~%20/.\*REES/i\)\]](http://jsonpath.herokuapp.com/?path=$..book[?%28@.author%20=~%20/.*REES/i%29])

![](../../../.gitbook/assets/image%20%2829%29.png)

### 

### Test File Implementation

* At Expected Response column, add the jsonbody validation as follows
* Example found at **apiTestData -&gt; testCases -&gt; TestCases\_UserValidation.csv \(row 3\)**

![](../../../.gitbook/assets/image%20%2818%29.png)

### Path Examples

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

