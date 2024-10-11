const mongoose = require('mongoose');  

const eventSchema = new mongoose.Schema({
    eventName : {
        type : String,
        required : true
    },
    eventDate : {
        type : Date,
        required : true
    },
    eventTime : {
        type : String,
        required : true
    },
    eventLocation : {
        type : String,
        required : true
    },
    eventDescription : {
        type : String,
        required : true
    },
    eventFee : {
        type : Number,
        required : true
    },
    tickets : {
        type : Number,
        required : true
    },
    eventImage : {
        type : String,
    }
})

const EventModel = mongoose.model('Event', eventSchema);
module.exports = EventModel;