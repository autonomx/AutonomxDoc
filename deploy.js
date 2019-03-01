var AWS = require('aws-sdk');
var fs = require('fs');
var crypto = require('crypto');
var mime = require('mime-types');

var s3 = new AWS.S3();

function upload(bucket, key) {
  console.log('Upload file: ' + key);
  return new Promise((resolve, reject) => {
    fs.readFile(key, function (err, data) {
      if (err) {
        console.error('Cannot read file: ' + key);
        reject(err);
      } else {
        var contentType = mime.lookup(key);
        var s3File = {
          Bucket: bucket,
          Key: key,
          ACL: 'public-read',
          Body: data
        };
        if (contentType) {
          s3File.ContentType = contentType;
        }
        console.log('Content-Type: ' + contentType);
        s3.putObject(s3File, function (err, data) {
          if (err) {
            console.error('Cannot upload: ' + key);
            reject(err);
          } else {
            console.log('Uploaded: ' + key);
            resolve(data);
          }
        });
      }
    });
  })
}


function getFileHash(filename) {
  var data = fs.readFileSync(filename);
  return crypto.createHash('md5').update(data).digest('hex');
}

function processDirectory(newTrackFile, oldTrackFile, toBeUploaded, dir) {
  console.log('Process directory: ' + dir);
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, children) => {
      if (err) {
        console.error('Cannot process directory: ', dir);
        reject(err);
      } else {
        var promises = [];
        for (var child of children) {
          var path;
          if (dir === '.') {
            path = child;
          } else {
            path = dir + '/' + child;
          }
          if (fs.lstatSync(path).isDirectory()) {
            promises.push(processDirectory(newTrackFile, oldTrackFile, toBeUploaded, path));
          } else {
            processFile(newTrackFile, oldTrackFile, toBeUploaded, path);
          }
        }
        Promise.all(promises).then(resolve);
      }
    });
  });
}

function processFile(newTrackFile, oldTrackFile, toBeUploaded, path) {
  var hash = getFileHash(path);
  // keep hash
  newTrackFile[path] = hash;
  // check modified
  if (oldTrackFile[path] != hash) {
    toBeUploaded.push(path);
  }
}

function uploadTrackFile(bucket, trackFile, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(trackFile, JSON.stringify(content), (err) => {
      if (err) {
        console.error('Cannot write track file');
        reject(err);
      } else {
        upload(bucket, trackFile).then(() => {
          resolve();
        });
      }
    });
  });
}

function run() {

  var bucket = process.argv[2];
  var trackFile = process.argv[3] + '.json'; // branch name or PR ID

  var s3TrackFile = {
    Bucket: bucket,
    Key: trackFile
  };
  s3.getObject(s3TrackFile, function (err, data) {

    var oldTrackFile;
    if (err) {
      console.error('Cannot get file: ' + trackFile, err);
      oldTrackFile = {};
    } else {
      console.log('Retrieved file: ' + trackFile);
      oldTrackFile = JSON.parse(data.Body.toString());
    }

    // delete the old track file in case this process is interrupted,
    // the next one will start over
    return uploadTrackFile(bucket, trackFile, {}).then(() => {
      var newTrackFile = {};
      var toBeUploaded = [];
      return processDirectory(newTrackFile, oldTrackFile, toBeUploaded, '.').then(() => {

        var promises = toBeUploaded.map((file) => {
          return upload(bucket, file);
        });

        return Promise.all(promises).then(() => {
          return uploadTrackFile(bucket, trackFile, newTrackFile)
        });
      });
    });
  });
}

run();
