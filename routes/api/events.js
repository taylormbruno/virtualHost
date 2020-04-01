const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// matches /api/events/+

router.get('/all', eventController.findAllEvents);



module.exports = router;
