const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://localhost:27017/tak-manager-api', {
  autoCreate: true,
});

// const me = new User({
//   name: 'sham',
//   email: 'testDger@gmail.com',
//   password: 'test@',
// });

// const myTask = new Task({
//   description: 'Homework',
// });

// myTask
//   .save()
//   .then(() => {
//     console.log(myTask);
//   })
//   .catch((error) => {
//     console.log('task error :', error);
//   });
