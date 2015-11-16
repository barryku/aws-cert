var aws = require('aws-sdk');

aws.config.loadFromPath('../config.json');

var db = new aws.DynamoDB();

var params = {
  TableName: 'ProductCatalog',
  AttributeDefinitions: [
    {
      AttributeName: 'Id',
      AttributeType: 'N'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'Id',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 5
  }
};

db.createTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});

params = {
  TableName: 'Forum',
  AttributeDefinitions: [
    {
      AttributeName: 'Name',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'Name',
      KeyType: 'HASH'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 5
  }
};

db.createTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});

params = {
  TableName: 'Thread',
  AttributeDefinitions: [
    {
      AttributeName: 'ForumName',
      AttributeType: 'S'
    },
    {
      AttributeName: 'Subject',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'ForumName',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'Subject',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 5
  }
};

db.createTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});

params = {
  TableName: 'Reply',
  AttributeDefinitions: [
    {
      AttributeName: 'Id',
      AttributeType: 'S'
    },
    {
      AttributeName: 'ReplyDateTime',
      AttributeType: 'S'
    },
    {
      AttributeName: 'PostedBy',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'Id',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'ReplyDateTime',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 5
  },

  LocalSecondaryIndexes: [
    {
      IndexName: 'PostedBy-index',
      KeySchema: [
        {
          AttributeName: 'Id',
          KeyType: 'HASH'
        },
        {
          AttributeName: 'PostedBy',
          KeyType: 'RANGE'
        }
      ],
      Projection: {
        ProjectionType: 'KEYS_ONLY'
      }
    }
  ]
};

db.createTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});