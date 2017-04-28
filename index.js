//requiring the libraries
var express = require('express');
var ejs = require('ejs');

var app = express(); //setting express framework to app varibale to use for the routers

//public folder where all the css, js files will be hold
app.use(express.static('public'));

//setting all the required component.
app.set('view engine', 'ejs'); //going to look for pages with .ejs entension
app.set('views', './views'); //going to look for files in views folder
app.set('port', (process.env.PORT || 5000)); // going to run on localhost:5000 or given url.

//welcome page
app.get('/', function (req, res) {
  res.render('home');
});

//The game is played in this page
app.get('/game', function (req, res) {
  res.render('game');
});

//if page not found then go to home page
app.get('*', function (req, res) {
  res.render('notFound');
});

//The program is running on port.
app.listen(app.get('port'), function () {
  console.log('Get ready to play this amazing game on port: ', app.get('port'));
});
