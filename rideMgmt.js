var rideDetails = require('./db/store').rideDetails;

var express = require('express');
var router = express.Router();
var utils = require('./db/utils');

/*Ride Get */
router.get('/', function(req, res){
    rideDetails.find({}, function (err, rideDetails) {
        if(rideDetails.length === 0){
            res.status(404).send({
                "err": "No Rides Found"
            });
        }
        else
        {
            res.status(200).send(rideDetails);
        }
    });
});

/* Create Ride*/
router.post('/', function(req, res){
    var rideDetail = {specifics:{}};
    rideDetail.id = utils.uuid();
    var schema_string = JSON.stringify(Object.keys(rideDetails.schema.obj));
    console.log(req.body);
    
    for (var prop in req.body) {
        if( schema_string.indexOf(prop) >-1 ) {
            rideDetail[prop] = req.body[prop];
        }
        else{
            res.status(500).send({
                "err": "ERROR IN INSERTION"
            });
            break
        }
    } 

    rideDetails.create(rideDetail, function(err, doc){
        if (err) {
            res.status(409).send({
                "err": err.errmsg
            });
        } else {
            res.status(201).send({
                "id": rideDetail.id
            });
        }
    });
});

router.get('/:id', function(req, res) {

});

router.post('/:id', function(req, res) {
    
});

router.delete('/:id', function(req,res){

});

module.exports = router;
