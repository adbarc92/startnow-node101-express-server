// Issues:
  // TopSpots Page
  // Deploy using Now
  //

// import files and packages up here
var morgan = require('morgan');
var express = require('express');
var data = require('./data.json');

// create your express server below
var app = express();
var server = app.listen(3000, () => {
  console.log('Listening on port 3000');
})

// add your routes and middleware below
app.use(morgan('dev'));
app.get('/', ( req, res ) => {
  res.setHeader( 'Content-Type', 'text/html' );
  res.status( 200 ).end();
})
app.get('/data', (req, res) => {
  res.send(data);
  res.status( 200 ).end({ 'Content-Type': 'text/html' });
});
// finally export the express application
module.exports = app;
