const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const adminRouter = require('./Router/AdminRouter');
const userRouter = require('./Router/UserRouter');
const eventRouter = require('./Router/EventRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(
    'mongodb+srv://vijay2304a:vijay123@cluster0.djtxc.mongodb.net/EventManagement?retryWrites=true&w=majority&appName=Cluster0'
    // 'mongodb+srv://vijay2304a:vijay123@cluster0.tzmkqeo.mongodb.net/HopeOn?retryWrites=true&w=majority&appName=Cluster0'
).then(() => {
    console.log('Connected to database!!!!');
}).catch(() => {
    console.log('Connection failed!');
});

// const mongodb = async (req, res) => {
//     try {
//       // Check if there's already an existing connection before trying to connect
//       if (mongoose.connection.readyState === 0) {
//         await mongoose.connect('mongodb+srv://vijay2304a:vijay123@cluster0.djtxc.mongodb.net/EventManagement?retryWrites=true&w=majority&appName=Cluster0');
//         console.log('Connected to database!');
//       }
//     } catch (err) {
//       console.log('Connection failed!', err);
//     }
//   };
  

// mongodb();

app.use('/',adminRouter);
app.use('/',userRouter);
app.use('/',eventRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})