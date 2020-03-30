const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// matches /api/vendors/+

router.get('/all', eventController.findAllEvents);



module.exports = router;
