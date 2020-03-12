const express = require("express");
require('dotenv').config()
// const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require("axios");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
// app.use(routes);
app.get('/api/test', function() {
  console.log('registering beacon', process.env.API_KEY);
  axios.post(
    'https://proximitybeacon.googleapis.com/v1beta1/beacons:register?key=' + process.env.API_KEY,
    {
      "advertisedId": {
        "type": "EDDYSTONE",
        "id": "LyNEVPSRG6n/pgAAAAAAAw=="
      },
      "status": "ACTIVE"
    }).then((res) => {
     // console.log(res.body);
    }).catch(err => console.log(err));
})

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/vhost");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
