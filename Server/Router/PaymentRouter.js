const express = require('express');
const Router = express.Router();
const controller = require("../Controller/RazorpayController")

Router.post('/createbooking',controller.createBooking);
Router.post('/confirmbooking',controller.confirmBooking);

module.exports = Router;