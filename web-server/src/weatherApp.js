const path = require('path');
const express = require('express');
console.log(__dirname);
console.log();
const app = express();
const publicDir = path.join(__dirname, '../public');

app.use(express.static(publicDir));
app.set('view engine', 'hbs');

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
    title: 'Help...',
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
