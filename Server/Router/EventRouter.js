const express = require("express");
const router = express.Router();
const controller = require('../Controller/EventController');
const adminauth = require('../Middleware/AdminAuth');

router.post('/event',adminauth,controller.newevent);
router.get('/getallevents',controller.getallevents);
router.get('/geteventbyid/:id',adminauth,controller.geteventbyid);
router.put('/event/:id',controller.updateevent);
router.delete('/event/:id',controller.deleteevent);

module.exports = router;