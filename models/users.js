const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Bcrypt = require("bcryptjs");

const userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  favorites: {
    type: Array,
    default: []
  },
  notes: {
    type: Array,
    default: []
  },
  externalUser: {
    type: Boolean,
    default: false
  },
  externalID: {
    type: String
  }
});

userSchema.pre("save", function(next) {
  const user = this;
  if (user.password) {
    console.log("Hashing password...");
    // only hash the password if it has been modified (or is new)
    if (!user.isModified("password")) return next();

    user.password = Bcrypt.hashSync(user.password, 10);
    next();
  }
  if (user.externalID) {
    console.log("Hashing externalID...");
    // only hash the extID if it has been modified (or is new)
    if (!user.isModified("externalID")) return next();

    user.externalID = Bcrypt.hashSync(user.externalID, 10);
    next();
  }
});

userSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

userSchema.methods.compareExternal = function(plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.externalID));
};

const User = mongoose.model("User", userSchema);

module.exports = User;
