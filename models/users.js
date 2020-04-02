const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Bcrypt = require("bcryptjs");

const notes = new Schema({vendor_id: String, event_id: String, event_name: String, vendor_name: String, note: String});

const favorites = new Schema({vendor_id: String, vendor_name: String});

const userSchema = new Schema({
  first_name: {type: String,required: true},
  last_name: {
    type: String,
    required: [true, "last name required"]
  },
  username: {type: String},
  password: {type: String},
  email: {type: String},
  favorites: {type: [favorites], default: undefined},
  notes: {type: [notes], default: undefined},
  externalUser: {type: Boolean,required: true,default: false},
  externalID: {type: String}
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
  else {
    next();
  }
});

userSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

const User = mongoose.model("User", userSchema);

module.exports = User;
