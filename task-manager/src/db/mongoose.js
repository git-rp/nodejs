const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://localhost:27017/tak-manager-api', {
  autoCreate: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: [6, 'Password min length is 6'],
    validate(value) {
      if (value.includes('password')) {
        throw new Error(
          'Password can not be password ,Please choose strong password...'
        );
      }
    },
  },
});

const me = new User({
  name: 'sham',
  email: 'testDger@gmail.com',
  password: 'test@',
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
