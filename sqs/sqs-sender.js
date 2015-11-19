var AWS = require('aws-sdk');
var config = require('../myconfig')

AWS.config.loadFromPath('../config.json');

var sqs = new AWS.SQS();

sqs.sendMessage({MessageBody: 'My test for SQS 2',
    QueueUrl: config.sqsUrl}, function(err, data) {
    if (err)
        console.log(err, err.stack);
    else
        console.log(data);
});