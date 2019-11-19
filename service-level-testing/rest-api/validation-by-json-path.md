# Validation By Json Path

## Jason Path Verification

* Verification are separated by ";"

### Json Path 'has Items'

* 
### Json Path EqualTo

```text
"user.email":1: equalTo("autouser313@gmail.com");
```

* first instance of user.email equals "autouser313@gmail.com"

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

