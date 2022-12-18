const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
    address +
    '?key=QX89SKG7ZXVL7TDDNQ2PJBYAC';
  console.log('url is ::', url);
  request({ url: url, json: true }, (error, response) => {
    //console.log(response.body);
    if (error) {
      callback('Unable to connect to location', undefined);
    } else if (
      response.body.currentConditions != undefined &&
      response.body.currentConditions.length === 0
    ) {
      callback('Unable to find location try another search', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.latitude,
        longitude: response.body.longitude,
        location: response.body.address,
      });
    }
  });
};

module.exports = geocode;
