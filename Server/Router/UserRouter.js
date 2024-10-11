const express = require("express");
const controller = require('../Controller/UserController');
const router = express.Router();
const userauth = require('../Middleware/UserAuth');

router.post('/newuser',controller.newuser);
router.post('/loginuser',controller.loginuser);
router.get('/getuserbyid',userauth,controller.getuserbyid);

module.exports = router;