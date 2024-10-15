const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();

const adminRouter = require('./Router/AdminRouter');
const userRouter = require('./Router/UserRouter');
const eventRouter = require('./Router/EventRouter');
const paymentRouter = require('./Router/PaymentRouter')

const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(
    process.env.MONGODB_URL
).then(() => {
    console.log('Connected to database!!!!');
}).catch(() => {
    console.log('Connection failed!');
});

app.use('/',adminRouter);
app.use('/',userRouter);
app.use('/',eventRouter);
app.use('/',paymentRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})