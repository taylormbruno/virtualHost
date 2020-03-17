const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const userController = require("../controllers/userController");

// API Routes
router.use("/api", apiRoutes); // original use based off prev acitivites

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
