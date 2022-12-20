const path = require('path');
const express = require('express');
console.log(__dirname);
console.log();
const app = express();
//Define path for express config
const publicDir = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates');
//Setup static content to serve
app.use(express.static(publicDir));
app.set('view engine', 'hbs');
app.set('views', viewPath);
//Setup handle bar views and location

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Bhuvi',
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About ME',
    name: 'Bhuvi',
  });
});
app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Template...',
    name: 'Bhuvi',
  });
});
//app.use(express.static(publicDir));
// app.get('', (req, res) => {
//   res.render('index');
// });

// app.get('', (req, res) => {
//   res.send('<h1>Hello Express...</h1>');
// });

// app.get('/help', (req, res) => {
//   res.send([
//     {
//       name: 'bhuvi',
//       age: 13,
//     },
//     {
//       name: 'Ten',
//       age: 14,
//     },
//   ]);
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>about page</h1>');
// });
app.get('/weather', (req, res) => {
  res.send({ forcase: 'cloudy', location: 'pune' });
});

//Start server on port 3000 for listing request
app.listen(3000, () => {
  console.log('server is up on port 3000');
});
