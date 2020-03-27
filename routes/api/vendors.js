const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

// matches /api/vendors/+

router.get("/search", vendorController.searchVendor);

router.get('/all', vendorController.findVendorsByEvent);


module.exports = router;
