# OutputParam

## Output Parameters

* We can store values from the api response using the **OutputParam** column
* Format: jsonpath:&lt;$variable&gt; 
* The stored variable can be accessed using &lt;@variable&gt; syntax
* Multiple variables can be stored, separted by ";" 
* eg. 

![](../../.gitbook/assets/image%20%2844%29.png)

## Json Path

* We are using Json Path library from [https://github.com/json-path/JsonPath](https://github.com/json-path/JsonPath)
* With Json Path, we can run queries on our json response
* Json Path queries can be tested out at:
  * [http://jsonpath.herokuapp.com/](http://jsonpath.herokuapp.com/?path=$.store.*..category)

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

