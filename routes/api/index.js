const router = require("express").Router();
const beaconRoutes = require("./beacons");

// Beacon routes
router.use("/beacon/", beaconRoutes);

module.exports = router;
