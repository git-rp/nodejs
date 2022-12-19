const request = require('request');
const forecast = (lat, long, callback) => {
  //   const url =
  //     'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
  //     lat +
  //     ',' +
  //     long +
  //     '?unitGroup=us&?key=QX89SKG7ZXVL7TDDNQ2PJBYAC';
  const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
    lat +
    ',' +
    long +
    '?unitGroup=us&key=QX89SKG7ZXVL7TDDNQ2PJBYAC';
  console.log('Request url is :: ', url);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location', undefined);
    } else if (
      response.body.currentConditions != undefined &&
      response.body.currentConditions.length === 0
    ) {
      callback('Unable to find location try another search', undefined);
    } else {
      console.log(response.body.days[1].hours[0]);
      callback(undefined, {
        conditions: response.body.days[1].hours[0].conditions,
        tempmax: response.body.days[1].tempmax,
        tempmin: response.body.days[1].tempmin,
      });
    }
  });
};

module.exports = forecast;
