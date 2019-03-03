# Email



## Description

* Handles configuration applicable for slack integration
* ```text
  # Email notification
  email.enableEmailReport = false
  email.toEmail = ""

  # from email config
 
  # for outlook, only change smtpHost 
  #smtpHost = "outlook.office365.com"  
  email.smtpHost = "smtp.gmail.com"   
  email.fromEmail = automation.core.service@gmail.com
  email.emailPassword = "autoCore001"
  email.smtpPort = "587"
  email.smtpStarttlsEnable = true
  email.smtpAuth = true
  ```



  **Parameters**

  | email.enableEmailReport | Sends out an email report with the extent report as zip file  |
  | :--- | :--- |
  | email.toEmail | destination email |
  | email.smtpHost | smtp host |
  | email.fromEmail | where the email is originating from |
  | email.emailPassword | password of originating email |
  | email.smtpPort | smtp port |
  | email.smtpStarttlsEnable | is a way to take an existing insecure connection and upgrade it to a secure connection using SSL/TLS. |

