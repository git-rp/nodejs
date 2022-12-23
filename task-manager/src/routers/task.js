const express = require('express');
const router = new express.Router();
const Task = require('../model/task');
router.get('/tasktest', (req, res) => {
  res.send('task test');
});
router.post('/tasks', async (req, res) => {
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

router.get('/tasks', async (req, res) => {
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

router.get('/tasks/:id', async (req, res) => {
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

module.exports = router;
