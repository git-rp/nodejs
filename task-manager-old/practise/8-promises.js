//Call back example
const doworkCallback = (callback) => {
  setTimeout(() => {
    callback('this is error ', undefined);
  }, 2000);
};

doworkCallback((error, result) => {
  console.log(error, result);
});

//Promise
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([7, 4, 1]);
    reject('Error....');
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log('Promis success:', result);
  })
  .catch((error) => {
    console.log(error);
  });
