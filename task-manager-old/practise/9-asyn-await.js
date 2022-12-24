// makes it easy to work with promises
// async always return promise

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('No must be non -ve');
      }
      resolve(a + b);
    }, 2000);
  });
};
const doAdd = async () => {
  const sum = await add(1, 3);

  const sum2 = await add(sum, 10);
  const sum3 = await add(sum2, -3);
  return sum3;
};
doAdd()
  .then((result) => {
    console.log('sum  ', result);
  })
  .catch((error) => {
    console.log('error ', error);
  });

const dowork = async () => {
  return 'Demo';
};

dowork()
  .then((name) => {
    console.log(name);
  })
  .catch((e) => {
    console.log(e);
  });
