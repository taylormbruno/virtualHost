const router = require("express").Router();
const beaconRoutes = require("./beacons");
const userRoutes = require("./users");
// Beacon routes
router.use("/beacon/", beaconRoutes);

router.use("/user/", userRoutes);

module.exports = router;
