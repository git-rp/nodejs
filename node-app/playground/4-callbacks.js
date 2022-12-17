setTimeout(() => {
  console.log('two seconds...');
}, 2000);

const names = ['test ', 't', 'gsdf'];
const shorname = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitue: 0,
    };
    callback(data);
  }, 2000);
};

geocode('Pune', (data) => {
  console.log(data);
});

const add = (a, b, callback) => {
  setTimeout(() => {
    const addition = a + b;
    callback(addition);
  }, 2000);
};

add(1, 4, (addition) => {
  console.log(addition);
});
