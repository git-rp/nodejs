require('../src/db/mongoose');
const Task = require('../src/model/task');

deleteTaskAndCount = async (id, description) => {
  //   const task = await Task.deleteOne({ _id: id });
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.count({ description });
  return count;
};

deleteTaskAndCount('63a548366b2486ef6a2a597b', 'Book complete')
  .then((result) => {
    console.log('Result ', result);
  })
  .catch((error) => {
    console.log(error);
  });
