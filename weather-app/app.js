// const request = require('request');
// const url =
//   'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=QX89SKG7ZXVL7TDDNQ2PJBYAC';
// const data = request.get({ url: url, json: true }, (error, response) => {
//   //console.log(response.body.currentConditions);
//   const conditions = response.body.currentConditions;
//   //const data = JSON.parse(response.body);
//   //console.log(data.currentConditions);
//   console.log(
//     'current temp ' + conditions.temp + 'and feels like ' + conditions.feelslike
//   );
// });

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

console.log('starting');
//Call back abstraction is taking out new code into the new reusable file
// geocode('Boston', (error, data) => {
//   console.log('Error', error);
//   console.log('data', data);
// });

forecast(10.7128, -94.006, (error, data) => {
  console.log('Error', error);
  console.log(
    'forcast for tomorrow is : conditions :' +
      data.conditions +
      ' Max temp : ' +
      data.tempmax +
      ' Min temp : ' +
      data.tempmin
  );
});
