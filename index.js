const express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/rides', require('./rideMgmt'));



app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
