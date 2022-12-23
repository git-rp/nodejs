const mongoose = require('../src/db/mongoose');
const User = require('../src/model/user');
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount('63a42f8200afec59b09caba8', 10)
  .then((count) => {
    console.log('Count ', count);
  })
  .catch((error) => {
    console.log(error);
  });
