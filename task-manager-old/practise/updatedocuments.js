const { MongoClient, ObjectID, Db, ObjectId } = require('mongodb');
const connectionURL = 'mongodb://127.0.0.1/27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  console.log('connected');
  const db = client.db(databaseName);
  db.collection('users').updateOne({
    _id: new ObjectId(),
  });
});
