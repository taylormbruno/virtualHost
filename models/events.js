const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// date and time format to save 
// new Date("2018/05/08 04:30:00")

const eventSchema = new Schema({
    event_name: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    description: { type: String, required: true },
    host_id: { type: String, required: true },
    vendors: { type: Array, default: [] }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;