const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Bcrypt = require('bcryptjs');

const userSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    favorites: { type: Array, default: [] },
    notes: { type: Array, default: [] }
});

userSchema.pre('save', function(next) {
    const user = this;
    console.log('Hashing password...")
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    
    user.password = Bcrypt.hashSync(user.password, 10);
    next();
});

userSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

const User = mongoose.model("User", userSchema);

module.exports = User;