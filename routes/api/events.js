const router = require("express").Router();
const eventController = require("../../controllers/eventController");

// matches /api/events/+

router.get('/all', eventController.findAllEvents);
router.post('/create', eventController.createEvent)
router.get('/byuser/:id', eventController.findAllEventsByUser)


module.exports = router;
