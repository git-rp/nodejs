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
      res.status(201).send(user);
    })
    .catch((error) => {
      console.log('error:', error);
      res.status(400).send(error);
    });

  //    res.send('User created...');
});
app.get('/users', (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/users/:id', (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send('User not found...');
      }
      res.send(user);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  console.log(req.params);
});
app.post('/tasks', (req, res) => {
  const task = new Task(req.body);
  task
    .save()
    .then(() => {
      res.status(201).send(task);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/tasks', (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id;
  Task.findById(_id)
    .then((tasks) => {
      if (!tasks) {
        return res.status(404).send('Task not found...');
      }
      res.send(tasks);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  console.log(req.params);
});
app.listen(port, () => {
  console.log('starting at port ', port);
});
