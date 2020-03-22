const router = require("express").Router();
const vendorController = require("../../controllers/vendorController");

router.get("/search", vendorController.searchVendor);



module.exports = router;
