require('dotenv-safe').config({
  allowEmptyValues: true
});

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const passport = require('passport');
const auth = require('./config/passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

auth(passport);
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


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/virtualhost", { useNewUrlParser: true, useUnifiedTopology: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
