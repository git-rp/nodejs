const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { allowedNodeEnvironmentFlags } = require('process');
console.log(__dirname);
console.log();
const app = express();
//Define path for express config
const publicDir = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
//Setup static content to serve
app.use(express.static(publicDir));
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);
//Setup handle bar views and location

// app.get('/test', (req, res) => {
//   res.render('main', {
//     title: 'Weather App test',
//     name: 'Bhuvi',
//   });
// });

app.get('', (req, res) => {
  res.render('main', {
    title: 'Weather App main page',
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
    helpText: 'This is help page',
    name: 'Bhuvi',
  });
});
app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Must provide search term',
    });
  }
  console.log(req.query.search);
  res.send({
    products: [],
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
  if (!req.query.address) {
    return res.send({
      error: 'Please provide the address',
    });
  }
  const address = req.query.address;
  res.send({ forcase: 'cloudy', location: address });
});
app.get('/help/*', (req, res) => {
  res.render('404', {
    msg: 'Help page not found',
  });
});
app.get('*', (req, res) => {
  res.render('404', {
    msg: 'Page not found....',
  });
});

//Start server on port 3000 for listing request
app.listen(3000, () => {
  console.log('server is up on port 3000');
});
