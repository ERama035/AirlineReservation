/**
 * Created by hoang on 10/8/2016.
 */
var mongoose = require('mongoose');

var flightDetailSchema = new mongoose.Schema({
    bookingCode: String,
    flightCode: String,
    date: {
        type:  Number,
        default: new Date().getTime()
    },
    class: String,
    priceLevel: String
});

mongoose.model('FlightDetail', flightDetailSchema);