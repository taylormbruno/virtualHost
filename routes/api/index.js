const router = require("express").Router();
const vendorRoutes = require("./vendors");
const userRoutes = require("./users");
const eventRoutes = require("./events");
const dashRoutes = require("./dashRoutes");

// matches /api/vendors/
router.use("/vendors", vendorRoutes);

// matches /api/users/
router.use("/users", userRoutes);

router.use("/events", eventRoutes);

router.use("/dash", dashRoutes);

module.exports = router;
