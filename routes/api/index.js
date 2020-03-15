const router = require("express").Router();
const beaconRoutes = require("./beacons");
const userRoutes = require("./users");

// Beacon routes
router.use("/beacon/", beaconRoutes);

// User Routes
router.use("/user/", userRoutes);

module.exports = router;
