const { MongoClient, ObjectID, Db } = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1/27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  console.log('connected');
  const db = client.db(databaseName);
  db.collection('users').findOne({ name: 'Jumbo' }, (error, result) => {
    if (error) {
      console.log('error....', error);
    }
    console.log(result);
  });

  db.collection('users')
    .find({ age: 13 })
    .toArray((error, users) => {
      console.log('List of users ::', users);
    });

  db.collection('users')
    .find({ age: 13 })
    .count((error, count) => {
      console.log('count is ::', count);
    });
});
