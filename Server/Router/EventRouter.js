const express = require("express");
const router = express.Router();
const controller = require('../Controller/EventController');
const adminauth = require('../Middleware/AdminAuth');

router.post('/event',adminauth,controller.newevent);
router.get('/event',controller.getallevents);
router.get('/event/:id',controller.geteventbyid);
router.get('/adminevent',adminauth,controller.getadminevents);
router.put('/event/:id',controller.updateevent);
router.delete('/event/:id',controller.deleteevent);

module.exports = router;