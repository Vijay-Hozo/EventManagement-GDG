const Razorpay = require('razorpay');
const Event = require("../Model/EventModel")
require('dotenv').config();

const createBooking = async(req,res) => {
    let instance = new Razorpay({
        key_id : process.env.SECRET,
        key_secret : process.env.SECRET_KEY
    });
    let orderDate = {
        "amount" : req.body.bookingamount * 100,
        "currency" : "INR",
        "receipt" : "receipt",
        "payment_capture" : 1
    };

    instance.orders.create(orderDate, function(err,order){
        res.status(200).json({
            status : "success",
            message : "Order created",
            order : order
        })
    })
}

const confirmBooking = async(req,res,next) => {
    try{
        var newevent = new Event.model({
        eventName : req.body.eventName,
        eventDate : req.body.eventDate,
        eventTime : req.body.eventTime,
        eventLocation : req.body.eventLocation,
        eventPrice : req.body.eventPrice,
        eventFee : req.body.eventFee,
        payments : []
    })
    let payment = {
        paymentId : req.body.paymentId,
        orderId : req.body.orderId,
        eventFee : req.body.eventPrice,
    }
    newevent.payments = [...newevent.payments,payment]
    await newevent.save();
    res.status(200).json({
        status : "success",
        message : "Payment confirmed"
    })
}
catch(err){
    res.status(500).json({
        status : "fail",
        message : err.message
    })
}
}

module.exports = {createBooking, confirmBooking }