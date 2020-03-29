const router = require("express").Router();
const vendorRoutes = require("./vendors");
const userRoutes = require("./users");
const eventRoutes = require("./events");

// matches /api/vendors/
router.use("/vendors", vendorRoutes);

// matches /api/users/
router.use("/users", userRoutes);

router.use("/events", eventRoutes);

module.exports = router;
