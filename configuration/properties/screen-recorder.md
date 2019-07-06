# Screen Recorder

## Description

* Handles configuration applicable for slack integration
* ```text
  # Web video format: avi
  # mobile video format: mp4
  # screen recorder. Use VLC viewer for video files

  recorder.enableRecording = false
  recorder.onFailedTestsOnly = true
   # max 600 seconds
  recorder.maxTimeInSeconds = 180

  # Android recorder options
  recorder.android.videoSize = 1024x768

  # iOS recorder options
   #LOW, MEDIUM, HIGH, PHOTO. Only works for real devices
  recorder.ios.quality = LOW
  ```



  | **Parameters** | Description |
  | :--- | :--- |
  | recorder.enableRecording | enable recording on ios, android, or web |
  | recorder.onFailedtestOnly | record the screen on test failures only |
  | recorder.maxTimeInSeconds | max record time in seconds. 600 seconds is the max allowed duration |
  | recorder.android.videoSize | android video resolution |
  | recorder.ios.quality | iOS video quality. Options: LOW, MEDIUM, HIGH, PHOTO. Applicable to iOS real devices |

