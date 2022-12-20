const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('starting');
//Call back abstraction is taking out new code into the new reusable file

readline.question('Input location for weather?', (location) => {
  console.log(location);

  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log('data', data);

    const { latitude, longitude } = data;

    forecast(latitude, longitude, (error, data) => {
      if (error) {
        return console.log(error);
      }
      console.log('call back data ', data);
      const { conditions, tempmax, tempmin } = data;
      console.log(
        'forcast for tomorrow is : conditions :' +
          conditions +
          ' Max temp : ' +
          tempmax +
          ' Min temp : ' +
          tempmin
      );
    });
  });

  readline.close();
});
