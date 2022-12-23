const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../model/user');
const router = new express.Router();

router.get('/test', (req, res) => {
  res.send('test');
});
router.post('/users', async (req, res) => {
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
router.get('/users', async (req, res) => {
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

router.get('/users/:id', async (req, res) => {
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

module.exports = router;
