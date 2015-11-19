var AWS = require('aws-sdk');
var config = require('../myconfig')
var fs = require('fs');

AWS.config.loadFromPath('../config.json');

var imgToUpload = 'puppy.jpg';
var newObjName = 'pubbpy2.jpg';
var s3 = new AWS.S3();
var body = fs.createReadStream(imgToUpload);
s3.upload({Bucket: config.s3Bucket, Key: imgToUpload, Body: body}).
    on('httpUploadProgress', function(evt) { console.log(evt); }).
    send(function(err, data) { console.log(data) });

fs.readFile(imgToUpload, function(err, data){
    if (!err) {
        s3.putObject({Bucket: config.s3Bucket, Key: newObjName, Body: data}, function(err, data) {
            if (err)
                console.log(err, err.stack);
            else
                console.log(data);
        });
    }
});
