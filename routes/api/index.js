const router = require("express").Router();
const beaconRoutes = require("./beacons");

// Book routes
router.use("/beacon/", beaconRoutes);

module.exports = router;
