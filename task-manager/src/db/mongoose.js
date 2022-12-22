const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://localhost:27017/tak-manager-api', {
  autoCreate: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid');
      }
    },
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
});

const me = new User({
  name: 'sham',
  email: 'test@gmail.com',
  age: 10,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error---', error);
  });

//---Task Model
// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const myTask = new Task({
//   description: 'Homework',
//   completed: false,
// });

// myTask
//   .save()
//   .then(() => {
//     console.log(myTask);
//   })
//   .catch((error) => {
//     console.log('task error :', error);
//   });
