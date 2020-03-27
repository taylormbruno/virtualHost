const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    vendor_name: { type: String, required: true },
    image: { type: String, required: true },
    beacon_id: { type: String, required: false },
    web_url: { type: String, required: false },
    description: { type: String, required: true },
    manager_id: { type: String, required: true },
    event_id: { type: String, required: true },
    category: { type: String, required: false }
});

const Vendor = mongoose.model("Vendor", vendorSchema);
Vendor.collection.createIndex({ vendor_name: "text", description: "text" });

module.exports = Vendor;