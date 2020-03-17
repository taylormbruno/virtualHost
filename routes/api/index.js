const router = require("express").Router();
const beaconRoutes = require("./beacons");
const userRoutes = require("./users");

// matches /api/beacons/
router.use("/beacons", beaconRoutes);

// matches /api/users/
router.use("/users", userRoutes);

module.exports = router;
