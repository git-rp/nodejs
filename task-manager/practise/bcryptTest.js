const bcrypt = require('bcryptjs');
const myFuction = async () => {
  const password = 'TEst1223';
  const hashPass = await bcrypt.hash(password, 8);
  console.log(hashPass);
  const isMatch = await bcrypt.compare(password, hashPass);
  console.log(isMatch);
};
myFuction();
