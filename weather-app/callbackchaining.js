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

    const lat = data.latitude;
    long = data.longitude;

    forecast(lat, long, (error, data) => {
      if (error) {
        return console.log(error);
      }
      console.log(
        'forcast for tomorrow is : conditions :' +
          data.conditions +
          ' Max temp : ' +
          data.tempmax +
          ' Min temp : ' +
          data.tempmin
      );
    });
  });

  readline.close();
});
