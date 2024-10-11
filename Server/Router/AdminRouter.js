const express = require("express");
const controller = require('../Controller/AdminController');
const router = express.Router();
const adminauth = require('../Middleware/AdminAuth');

router.post('/newadmin',controller.newadmin);
router.post('/loginadmin',controller.loginadmin);
router.get('/getadminbyid',adminauth,controller.getadminbyid);

module.exports = router;