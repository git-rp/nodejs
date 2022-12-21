//CRUD operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1/27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }
  console.log('connected');
  const db = client.db(databaseName);
  //   db.collection('users').insertOne(
  //     {
  //       name: 'Bhuvi',
  //       age: 13,
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log('Unable to insert user');
  //       }
  //       console.log(result.insertedId);
  //     }
  //   );

  db.collection('task').insertMany(
    [
      {
        description: 'clean house',
        completed: true,
      },
      {
        description: 'read book',
        completed: false,
      },
      {
        description: 'Walk',
        completed: true,
      },
    ],
    (error, result) => {
      if (error) {
        console.log(error);
      }
      console.log(result);
    }
  );
});
