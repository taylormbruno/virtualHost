require('dotenv-safe').config({
  allowEmptyValues: true
});
const passport = require('passport');
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize()); 

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// else {
  app.use(express.static("client/public"));
// }
// Add routes, both API and view
app.use(routes);

// if client package.json is 3001 - 200 on postman, 431 on browser ; on 3000 - 431 receives headers field too large on browser and postman.

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/virtualhost", { useNewUrlParser: true, useUnifiedTopology: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
