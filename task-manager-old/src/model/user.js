const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function (next) {
  const user = this;
  console.log('saving....', user);
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password.at, 8);
//   }
//   console.log('just before saving');
//   next();
// });
const User = mongoose.model('User', userSchema);

module.exports = User;
