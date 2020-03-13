const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    favorites: { type: Array, default: [] },
    notes: { type: Array, default: [] }
});

const User = mongoose.model("User", userSchema);

module.exports = User;