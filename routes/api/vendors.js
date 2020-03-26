const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

router.get("/search", vendorController.searchVendor);

router.get('/all', vendorController.findVendorsByEvent);


module.exports = router;
