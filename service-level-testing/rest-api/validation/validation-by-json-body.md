# Validation By Json Body

## Json Body Verification

* We can verify json body and structure through "lenient" verification \( meaning fields values can be excluded as long as the json structure remains intact\)
* ```text
  {
         "user": {
          "username":  "<@adminUserName>",
          "email": "autouser313@gmail.com",
          "provider": "local",
          "confirmed": true,
          "blocked": null
      }
  }
  ```
* We are using json body to verify the response
* The json body is strictly enforced, however, the variables are optional
  * eg. we're not including fields such as "date"
* We can use variables as part of response
* ```
   "username":  "<@adminUserName>",
  ```
* **Json body verification and Json Path verification are separated by "&&"**
  * ```text
    {
           "user": {
            "username":  "<@adminUserName>",
            "email": "autouser313@gmail.com",
            "provider": "local",
            "confirmed": true,
            "blocked": null
        }
    }
    &&
    _VERIFY_JSON_PART_
    "user.username": hasItems("<@adminUserName>");
    ```



