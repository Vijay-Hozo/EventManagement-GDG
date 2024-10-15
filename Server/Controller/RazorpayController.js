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

const confirmBooking = async (req, res) => {
    try {
      const {
        eventName,
        eventDate,
        eventTime,
        eventLocation,
        eventPrice,
        eventFee,
        paymentId,
        orderId,
      } = req.body;
  
      if (!eventName || !paymentId || !orderId) {
        return res.status(400).json({
          status: "fail",
          message: "Missing required fields.",
        });
      }
  
      const newEvent = new Event({
        eventName,
        eventDate,
        eventTime,
        eventLocation,
        eventPrice,
        eventFee,
        payments: [
          {
            paymentId,
            orderId,
            eventFee,
          },
        ],
      });
  
      await newEvent.save();
  
      res.status(200).json({
        status: "success",
        message: "Payment confirmed and event booked.",
      });
    } catch (err) {
      console.error("Error confirming booking:", err.message);
      res.status(500).json({
        status: "fail",
        message: "Internal server error.",
      });
    }
  };
  
module.exports = {createBooking, confirmBooking }