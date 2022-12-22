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
