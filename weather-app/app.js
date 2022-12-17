const request = require('request');
const url =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=QX89SKG7ZXVL7TDDNQ2PJBYAC';
const data = request.get({ url: url, json: true }, (error, response) => {
  //console.log(response.body.currentConditions);
  const conditions = response.body.currentConditions;
  //const data = JSON.parse(response.body);
  //console.log(data.currentConditions);
  console.log(
    'current temp ' + conditions.temp + 'and feels like ' + conditions.feelslike
  );
});
