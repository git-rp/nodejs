const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('<h1>Hello Express...</h1>');
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'bhuvi',
      age: 13,
    },
    {
      name: 'Ten',
      age: 14,
    },
  ]);
});

app.get('/about', (req, res) => {
  res.send('<h1>about page</h1>');
});
app.get('/weather', (req, res) => {
  res.send({ forcase: 'cloudy', location: 'pune' });
});

//Start server on port 3000 for listing request
app.listen(3000, () => {
  console.log('server is up on port 3000');
});
