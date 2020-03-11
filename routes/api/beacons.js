const router = require("express").Router();
const beaconController = require("../../controllers/beaconController");


const neededBody = {
	"advertisedId": {
		"type": "EDDYSTONE",
		"id": "LyNEVPSRG6n/pgAAAAAAAw=="
	},
	"status": "ACTIVE"
};

module.exports = router;
