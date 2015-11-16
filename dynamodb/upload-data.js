var aws = require('aws-sdk');

aws.config.loadFromPath('config.json');

var db = new aws.DynamoDB();

var params = {
  RequestItems: {
    'ProductCatalog': [
      {
        PutRequest: {
          Item: {
            'Id': {'N': '11011'},
            'Title': {'S': 'Book 101 Title'},
            'ISBN': {'S': '111-111111111'},
            'Authors': {'SS': ['Author12']},
            'Price': {'N': '2'},
            'Dimensions': {'S': '8.5 x 11.0 x 0.5'},
            'PageCount': {'N': '500'},
            'InPublication': {'N': '1'},
            'ProductCategory': {'S': 'Book'}
          }
        }
      },
      {
        PutRequest: {
          Item: {
            'Id': {'N': '102'},
            'Title': {'S': 'Book 102 Title'},
            'ISBN': {'S': '222-111111111'},
            'Authors': {'SS': ['Author1', 'Author2']},
            'Price': {'N': '20'},
            'Dimensions': {'S': '8.5 x 11.0 x 0.8'},
            'PageCount': {'N': '600'},
            'InPublication': {'N': '1'},
            'ProductCategory': {'S': 'Book'}
          }
        }
      }

    ]
  }
};

db.batchWriteItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});