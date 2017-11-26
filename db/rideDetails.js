const mongoose = require('mongoose');

var rideDetailSchema = new mongoose.Schema (
    {
        id: {type: String, required: true},
        fromLocation: String,
        toLocation: String,
        vehicleType: String,
        date: String,
        time: String,
        description: String
    });

module.exports = mongoose.model('rideDetails', rideDetailSchema);
