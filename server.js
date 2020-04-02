require("dotenv-safe").config({
  allowEmptyValues: true
});

const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const path = require("path");
const express = require("express");
const app = express();
const passport = require("passport");
const auth = require("./config/passport");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

auth(passport);
app.use(passport.initialize());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.use(express.static("client/public"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
  });
}
// Add routes, both API and view
app.use(routes);

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000, // one day
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(cookieParser());

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/virtualhost", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
// Start the API server

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
