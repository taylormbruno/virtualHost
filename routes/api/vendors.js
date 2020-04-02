const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

// matches /api/vendors/+

router.get("/search", vendorController.searchVendor);

router.get('/all', vendorController.findVendorsByEvent);

router.get('/vendor', vendorController.findVendorById);

router.get('/byhost', vendorController.findVendorByHost);

router.post('/create', vendorController.createVendor)

module.exports = router;
