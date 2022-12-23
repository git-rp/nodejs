const express = require('express');
const app = express();
require('./db/mongoose');
const bcrypt = require('bcryptjs');
const User = require('./model/user');
const Task = require('./model/task');
const { response } = require('express');

const port = process.env.PORT || 3000;

app.use(express.json());
app.post('/users', async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);

  // user
  //   .save()
  //   .then(() => {
  //     res.status(201).send(user);
  //   })
  //   .catch((error) => {
  //     console.log('error:', error);
  //     res.status(400).send(error);
  //   });
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }

  //    res.send('User created...');
});
app.get('/users', async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }

  // User.find({})
  //   .then((users) => {
  //     res.send(users);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
});

app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      res.status(404).send('User not founc... by id ...');
    }
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
  // User.findById(_id)
  //   .then((user) => {
  //     if (!user) {
  //       return res.status(404).send('User not found...');
  //     }
  //     res.send(user);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
  console.log(req.params);
});
app.post('/tasks', async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }

  // const task = new Task(req.body);
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task);
  //   })
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
});

app.get('/tasks', async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
});

app.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id);
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
  // Task.findById(_id)
  //   .then((tasks) => {
  //     if (!tasks) {
  //       return res.status(404).send('Task not found...');
  //     }
  //     res.send(tasks);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error);
  //   });
  console.log(req.params);
});

//starting server express on port 3000
app.listen(port, () => {
  console.log('starting at port ', port);
});
