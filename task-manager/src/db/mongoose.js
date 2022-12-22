const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tak-manager-api');

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({
  name: 'Bhuvi',
  age: 13,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error---', error);
  });

//---Task Model
const Task = mongoose.model('Task', {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const myTask = new Task({
  description: 'Homework',
  completed: false,
});

myTask
  .save()
  .then(() => {
    console.log(myTask);
  })
  .catch((error) => {
    console.log('task error :', error);
  });
