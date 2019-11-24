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

### EqualTo

* Verifies response body is equasl to expected
* eg. if response = {"id":"1234"}

```text
_VERIFY.RESPONSE.BODY_
equalTo({"id":"1234"});

```

### notEqualTo

* Verifies response body is not equal to expected
* eg. if response = {"id":"1234"}
* We can check if "form" field is not present

```text
_VERIFY.RESPONSE.BODY_
notEqualTo(form);

```

### Contains

* Verifies response body contains expected
* eg. if response = {"id":"1234", "form":"register"}
* We can check if "form" field is present

```text
_VERIFY.RESPONSE.BODY_
contains(form);
contains("form":"register");

```

### notContains

* Verifies response body does not contain expected
* eg. if response = {"id":"1234", "form":"register"}
* We can check if "action" field is not present

```text
_VERIFY.RESPONSE.BODY_
notContains(action);
```

### integerGreaterThan

* Verifies if numeric response greater than expected

  Compares json body to expected value

* eg. if response = 33.1
* we check if response is greater than 32

```text
_VERIFY.RESPONSE.BODY_
integerGreaterThan(32);

```

### 

### integerLessThan

* Verifies if numeric response is less than expected
* eg. if response = 33.1
* we check if response is greater than 34

```text
_VERIFY.JSON.PART_
integerLessThan(34);

```

### integerEqual

* Verifies if numeric response equals expected
* eg. if response = 33.1
* we check if response is greater than 33.1

```text
_VERIFY.JSON.PART_
integerEqual(33.1);

```

###  integerNotEqual

* Verifies if numeric response does not equal expected
* eg. if response = 33.1
* we check if response is greater than 33.2

```text
_VERIFY.JSON.PART_
integerNotEqual(33.2);

```

### Not Empty

* Verify if response is not empty
* eg. if response = {"id":"1234", "form":"register"}

```text
isNotEmpty;
```

### Empty

* Verify if response is not empty
* eg. if response = ""

```text
Empty;
```

