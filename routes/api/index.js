const router = require("express").Router();
const vendorRoutes = require("./vendors");
const userRoutes = require("./users");

// matches /api/vendors/
router.use("/vendors", vendorRoutes);

// matches /api/users/
router.use("/users", userRoutes);

module.exports = router;
