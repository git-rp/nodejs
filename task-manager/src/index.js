const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./model/user');
const Task = require('./model/task');

const port = process.env.PORT || 3000;

app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((error) => {
      console.log('error:', error);
      res.status(400).send(error);
    });

  //    res.send('User created...');
});
app.get('/users', (req, res) => {
  req.res.send('get users');
});

app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
app.listen(port, () => {
  console.log('starting at port ', port);
});
