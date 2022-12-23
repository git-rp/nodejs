const express = require('express');
const app = express();
require('./db/mongoose');
const bcrypt = require('bcryptjs');
const User = require('./model/user');
const Task = require('./model/task');
const userRouter = require('../src/routers/user');
const taskRouter = require('../src/routers/task');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//starting server express on port 3000
app.listen(port, () => {
  console.log('starting at port ', port);
});
