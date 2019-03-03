# Slack



## Description

* Handles configuration applicable for slack integration
* Generate token at: https://api.slack.com/custom-integrations/legacy-tokens
* For channel id: right click and channel and copy link. the id is attached to the link
* ```text
  # Slack notification
  # Token: generate at: https://api.slack.com/custom-integrations/legacy-tokens
  # For channel id: right click and channel and copy link. the id is attached to the link
  slack.enableSlackNotification = false
  slack.slackToken = ""
  slack.channelId = ""
  ```

## Parameters

| Parameter | Descriptions |
| :--- | :--- |
| slack.enableSlackNotification | set true to enable slack notification |
| slack.slackToken | slack token |
| slack.channelId | channel id |

