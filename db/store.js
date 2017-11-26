const mongoose = require('mongoose');
var db = {};

mongoose.connect('mongodb://127.0.0.1/letshare');

db.rideDetails = require('./rideDetails');

module.exports = db;
